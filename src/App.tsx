import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedDigitCounter } from "./AnimatedDigitCounter";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-700 to-blue-500">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative pl-2.5 pr-3 mb-8 overflow-hidden text-white rounded-full"
        style={{
          border: "2px solid rgba(255, 255, 255, 0.2)",
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))",
          boxShadow:
            "0 2px 10px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.15)",
        }}
      >
        <AnimatedDigitCounter value={count} maxDigits={4} />
        <div
          className="absolute top-0 right-0 w-2 h-2 rounded-full"
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
        className="px-4 py-2 text-3xl text-center rounded-lg bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="number"
        value={count}
        min={0}
        onChange={(e) => setCount(+e.target.value)}
      />
    </div>
  );
};

export default App;
