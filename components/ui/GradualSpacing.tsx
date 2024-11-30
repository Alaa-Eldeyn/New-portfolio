"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  return (
    <div className="flex justify-center space-x-1">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn(
              "drop-shadow-sm font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem] py-4",
              className
            )}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
