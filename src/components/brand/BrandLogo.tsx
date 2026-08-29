"use client";

import React from "react";

interface BrandLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light"; // dark text for light background, light text for dark background
}

export default function BrandLogo({
  className = "",
  showWordmark = true,
  size = "md",
  variant = "dark",
}: BrandLogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl sm:text-[1.75rem]",
    lg: "text-3xl sm:text-4xl",
  };

  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Hexagonal S-Node Isotype (Vectorized Official Brand Icon) */}
      <svg
        className={`${iconSizes[size]} transition-transform duration-300 group-hover:scale-105 shrink-0`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Dark Slate / Navy Path */}
        <path
          d="M50 8L86 28.5V48L72 40V36L50 23.5L28 36V49L14 41V28.5L50 8Z"
          fill="#0F172A"
        />
        {/* Central S-curve Dark Path */}
        <path
          d="M14 41L28 49V59L50 71.5L72 59V51L86 59V71.5L50 92L14 71.5V41Z"
          fill="#3B82F6"
        />
        {/* Tech Corner Gradient Highlight */}
        <path
          d="M86 48L72 40L86 32V48Z"
          fill="#1D4ED8"
        />
        {/* 4 Connected Intelligence Nodes */}
        {/* Node 1: Top Left */}
        <circle cx="34" cy="38" r="8" fill="#3B82F6" />
        {/* Node 2: Top Right */}
        <circle cx="66" cy="38" r="8" fill="#3B82F6" />
        {/* Node 3: Center Pivot */}
        <circle cx="50" cy="54" r="7.5" fill="#3B82F6" />
        {/* Node 4: Bottom Node */}
        <circle cx="50" cy="72" r="8" fill="#3B82F6" />
        {/* Interconnection Lines */}
        <line x1="34" y1="38" x2="66" y2="38" stroke="#3B82F6" strokeWidth="3" />
        <line x1="34" y1="38" x2="50" y2="54" stroke="#3B82F6" strokeWidth="3" />
        <line x1="66" y1="38" x2="50" y2="54" stroke="#3B82F6" strokeWidth="3" />
        <line x1="50" y1="54" x2="50" y2="72" stroke="#3B82F6" strokeWidth="3" />
      </svg>

      {/* Official Geometric Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <span
            className={`font-mono font-bold tracking-[0.14em] uppercase leading-none ${textSizes[size]} ${
              isLight ? "text-white" : "text-[#0F172A]"
            }`}
            style={{ fontFamily: "'JetBrains Mono', -apple-system, sans-serif" }}
          >
            SYNT<span className="text-blue-500">IQ</span>
          </span>
          <span
            className={`text-[8.5px] sm:text-[9px] tracking-[0.32em] uppercase font-mono mt-1 ${
              isLight ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Enterprise AI
          </span>
        </div>
      )}
    </div>
  );
}
