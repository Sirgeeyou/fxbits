"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function BackgroundBoxes() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded bg-slate-900">
      <div className="pointer-events-none absolute inset-0 z-20 size-full bg-background [mask-image:radial-gradient(transparent,white)]" />

      <Boxes />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
      >
        <h1
          className={cn(
            "md:text-6xl text-xl relative z-20 text-primary font-bold"
          )}
        >
          WorldwideRental Network
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
      >
        <p className="relative z-20 mt-2 text-center text-2xl text-muted-foreground md:text-base ">
          Your Gateway to Global Residences: Explore Diverse Rentals Across
          Continents, Cultures, and Climates
        </p>
      </motion.div>
    </div>
  );
}
