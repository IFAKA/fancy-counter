import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { DetailedHTMLProps, HTMLAttributes, useEffect } from "react";

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

export function AnimatedDigitCounter({
  value,
  maxDigits,
}: {
  value: number;
  maxDigits: number;
}) {
  if (value === 0 && maxDigits >= 1) {
    return (
      <div style={{ fontSize, width: "auto" }} className="flex overflow-hidden">
        <AnimatedDigit key={1} place={1} value={value} isVisible={true} />
      </div>
    );
  }

  const digits = Array.from({ length: maxDigits }, (_, i) => {
    const place = Math.pow(10, maxDigits - 1 - i);
    return (
      <AnimatedDigit
        key={place}
        place={place}
        value={value}
        isVisible={place <= value}
      />
    );
  });

  return (
    <div
      style={{ fontSize, width: "auto" }}
      className="flex gap-[2px] overflow-hidden"
    >
      {digits}
    </div>
  );
}

function AnimatedDigit({
  place,
  value,
  isVisible,
}: {
  place: number;
  value: number;
  isVisible: boolean;
}) {
  const digitValue = Math.floor(value / place);
  const animatedDigit = useSpring(digitValue);

  useEffect(() => {
    animatedDigit.set(digitValue);
  }, [animatedDigit, digitValue]);

  const digitStyles = {
    height,
    position: isVisible ? "relative" : "absolute",
  } as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

  return (
    <div style={digitStyles} className="w-[1ch] tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <AnimatedNumber
          key={i}
          animatedDigit={animatedDigit}
          number={i}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
}

function AnimatedNumber({
  animatedDigit,
  number,
  isVisible,
}: {
  animatedDigit: MotionValue;
  number: number;
  isVisible: boolean;
}) {
  const y = useTransform(animatedDigit, (latest: number) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;

    let yOffset = offset * height;

    if (offset > 5) {
      yOffset -= 10 * height;
    }

    return yOffset;
  });

  return (
    <motion.span style={{ y, opacity: isVisible ? 1 : 0 }} className="absolute">
      {number}
    </motion.span>
  );
}
