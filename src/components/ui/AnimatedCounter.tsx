"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  direction?: "up" | "down";
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter = ({
  value,
  direction = "up",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }).format(Number(latest.toFixed(decimals))) + suffix;
        }
      }),
    [springValue, decimals, suffix]
  );

  return <span ref={ref} />;
};

export default AnimatedCounter;
