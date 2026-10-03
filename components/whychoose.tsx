"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function LayoutTextFlipDemo() {
  return (
    <div>
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
         text="Education at PVBM is about"
words={[
  "Quality Education",
  "Strong Moral Values",
  "Holistic Development",
]}

        />
      </motion.div>
      {/* <p className="mt-4 text-center text-base text-gray-800">
        - Lakshmi Prabha
      </p> */}
    </div>
  );
}
