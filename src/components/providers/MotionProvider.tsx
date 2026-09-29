"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

/**
 * Makes every framer-motion animation honour the OS "reduce motion" setting.
 * The CSS rule in globals.css only covers CSS animations; framer-motion runs in JS.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
