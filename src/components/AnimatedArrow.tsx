"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AnimatedArrowProps {
  size?: number;
  color?: string;
}

export default function AnimatedArrow({ size = 40, color = "white" }: AnimatedArrowProps) {
  return (
    <div className="flex flex-col items-center justify-center my-6 pointer-events-none">
      <motion.div
        className="pointer-events-none"
        animate={{
          y: ["0%", "30%", "0%"],
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={size} color={color} strokeWidth={2.5} />
      </motion.div>
    </div>
  );
}
