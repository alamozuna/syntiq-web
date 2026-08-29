"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light"; // "dark" = dark navy wordmark for light background, "light" = white wordmark for dark footer
  priority?: boolean;
}

export default function BrandLogo({
  className = "",
  showWordmark = true,
  size = "md",
  variant = "dark",
  priority = true,
}: BrandLogoProps) {
  // Height definitions for crisp proportional scaling
  const heightClasses = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-10",
    lg: "h-11 sm:h-12",
  };

  const isLight = variant === "light";

  if (!showWordmark) {
    return (
      <div className={`relative inline-flex items-center select-none ${className}`}>
        <Image
          src="/assets/icon-syntiq.webp"
          alt="SyntIQ Isotipo"
          width={120}
          height={148}
          className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      {/* Official Master Logo with authentic geometric custom typography */}
      <Image
        src={isLight ? "/assets/logo-syntiq-light.webp" : "/assets/logo-syntiq-dark.webp"}
        alt="SyntIQ Enterprise AI"
        width={360}
        height={100}
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
        priority={priority}
      />
    </div>
  );
}
