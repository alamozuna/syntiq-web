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
    return null;
  }

  const renderStatusBadge = () => {
    if (course.status === "AVAILABLE" && course.date) {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
          <Calendar className="h-3.5 w-3.5" />
          {course.date}
        </span>
      );
    }
    if (course.status === "AVAILABLE" && !course.date) {
      return (
        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
          Inscripciones abiertas
        </span>
      );
    }
    if (course.status === "WAITLIST") {
      return (
        <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
          Lista de interés
        </span>
      );
    }
    if (course.status === "COMING_SOON") {
      return (
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
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
        "group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 hover:border-blue-300 hover:shadow-[0_12px_24px_-8px_rgba(15,23,42,0.06)] transition-all duration-200 h-full",
        course.featured && "ring-2 ring-blue-500/20 border-blue-200",
        className
      )}
    >
      {/* Featured badge */}
      {course.featured && (
        <div className="absolute -top-3 right-6">
          <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-mono font-semibold tracking-wider uppercase shadow-sm">
            Destacado
          </span>
        </div>
      )}

      {/* Header: Category & Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <span className="text-[10px] font-mono text-blue-600 uppercase tracking-wider font-semibold">
          {course.category}
        </span>
        {renderStatusBadge()}
      </div>

      {/* Title & Summary */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 leading-tight">
          {course.title}
        </h3>
        <p className="text-slate-600 text-sm font-light line-clamp-2 leading-relaxed">
          {course.summary}
        </p>
      </div>

      {/* Meta: Level & Duration */}
      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-600">
        <div className="flex items-center gap-1.5">
          <BarChart className="h-4 w-4 text-slate-400" />
          <span className="text-xs">{course.level}</span>
        </div>
        {course.duration && (
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-slate-400" />
            <span className="text-xs">{course.duration}</span>
          </div>
        )}
      </div>

      {/* Outcome Block */}
      <div className="mb-6 rounded-xl bg-slate-50 border border-slate-200/80 p-4">
        <p className="text-[10px] font-mono text-blue-600 mb-1.5 uppercase tracking-wider font-semibold">
          Construyes
        </p>
        <p className="text-sm text-slate-700 font-light leading-relaxed">
          &ldquo;{course.outcome}&rdquo;
        </p>
      </div>

      {/* Tools */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <Hammer className="h-3.5 w-3.5 text-slate-400 mr-0.5" />
        {course.tools.slice(0, 4).map((tool, idx) => (
          <span
            key={idx}
            className="rounded-lg bg-slate-100 border border-slate-200/80 px-2.5 py-1 text-[11px] font-medium text-slate-600"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* CTA */}
      <div className="pt-4 border-t border-slate-100">
        <Link
          href={ctaHref}
          className="group/cta inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
