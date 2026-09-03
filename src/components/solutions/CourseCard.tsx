"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, BarChart, Hammer, Calendar } from "lucide-react";
import { Formacion } from "@/data/formaciones";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Formacion;
  className?: string;
}

export default function CourseCard({ course, className }: CourseCardProps) {
  // Determine CTA text and href based on status
  let ctaText = "Ver formación";
  let ctaHref = `/formaciones/talleres/${course.slug}`;

  if (course.status === "WAITLIST") {
    ctaText = "Unirme a lista de interés";
    ctaHref = `/contacto?formacion=${course.slug}`;
  } else if (course.status === "COMING_SOON") {
    ctaText = "Avisarme de próxima edición";
    ctaHref = `/contacto?formacion=${course.slug}`;
  } else if (course.status === "DRAFT") {
    return null; // Should not be rendered publicly
  }

  // Get status badge
  const renderStatusBadge = () => {
    if (course.status === "AVAILABLE" && course.date) {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
          <Calendar className="h-3.5 w-3.5" />
          {course.date}
        </span>
      );
    }
    if (course.status === "AVAILABLE" && !course.date) {
      return (
        <span className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
          Inscripciones abiertas
        </span>
      );
    }
    if (course.status === "WAITLIST") {
      return (
        <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-2.5 py-0.5 text-xs font-medium text-orange-400">
          Lista de interés
        </span>
      );
    }
    if (course.status === "COMING_SOON") {
      return (
        <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
          Próximamente
        </span>
      );
    }
    return null;
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 hover:border-zinc-700 transition-colors h-full",
        className
      )}
    >
      {/* Header: Category & Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
          {course.category}
        </span>
        {renderStatusBadge()}
      </div>

      {/* Title & Summary */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
          {course.title}
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base line-clamp-2">
          {course.summary}
        </p>
      </div>

      {/* Meta: Level & Duration */}
      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-zinc-300">
        <div className="flex items-center gap-1.5">
          <BarChart className="h-4 w-4 text-zinc-500" />
          <span>{course.level}</span>
        </div>
        {course.duration && (
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-zinc-500" />
            <span>{course.duration}</span>
          </div>
        )}
      </div>

      {/* Outcome Block */}
      <div className="mb-8 rounded-xl bg-blue-950/20 border border-blue-900/30 p-4">
        <p className="text-xs font-mono text-blue-400 mb-2 uppercase tracking-wide">
          Construyes
        </p>
        <p className="text-sm text-zinc-200">
          &ldquo;{course.outcome}&rdquo;
        </p>
      </div>

      {/* Tools */}
      <div className="mb-8 flex flex-wrap gap-2">
        <Hammer className="h-4 w-4 text-zinc-500 mr-1 mt-0.5" />
        {course.tools.map((tool, idx) => (
          <span
            key={idx}
            className="rounded bg-zinc-800 px-2 py-0.5 text-xs font-medium text-zinc-300"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Spacer to push CTA to bottom */}
      <div className="flex-grow" />

      {/* CTA */}
      <Link
        href={ctaHref}
        className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300 group-hover:text-blue-300"
      >
        {ctaText}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
