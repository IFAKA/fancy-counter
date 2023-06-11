import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedDigitCounter } from "./AnimatedDigitCounter";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-700">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative mb-8 rounded-full overflow-hidden px-2 text-white"
        style={{
          border: "2px solid rgba(255, 255, 255, 0.2)",
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))",
          boxShadow:
            "0 2px 10px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.15)",
        }}
      >
        <AnimatedDigitCounter value={count} maxDigits={3} />
        <div
          className="absolute top-0 right-0 h-2 w-2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))",
            boxShadow: "0 0 10px 3px rgba(255, 255, 255, 0.5)",
            transform: "translate(30%, -30%)",
          }}
        ></div>
      </motion.div>

      <motion.input
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-slate-200 text-3xl py-2 px-4 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="number"
        value={count}
        // min={0}
        onChange={(e) => setCount(+e.target.value)}
      />
    </div>
  );
};

export default App;
