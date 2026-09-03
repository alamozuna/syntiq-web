"use client";

import React, { useState } from "react";
import { formaciones } from "@/data/formaciones";
import CourseCard from "./CourseCard";

const CATEGORIES = [
  "TODOS",
  "PROMPTING",
  "PRODUCTIVIDAD",
  "VIBE CODING",
  "AUTOMATIZACIÓN",
  "CONOCIMIENTO",
  "AGENTES",
];

export default function CourseCatalog() {
  const [activeCategory, setActiveCategory] = useState("TODOS");

  // Filter out DRAFT courses and apply category filter
  const visibleCourses = formaciones.filter((course) => {
    if (course.status === "DRAFT") return false;
    if (activeCategory === "TODOS") return true;
    return course.category === activeCategory;
  });

  const featuredCourses = visibleCourses.filter(c => c.featured);
  const upcomingCourses = visibleCourses.filter(c => !c.featured);

  return (
    <section className="py-20 sm:py-32 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters (Horizontal Scroll on Mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-16 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide gap-2 sm:gap-3 sm:flex-wrap sm:justify-center">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Section 1: Featured Courses */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="font-brand-display text-4xl sm:text-5xl font-light text-slate-900 mb-4">
              Formaciones destacadas
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
              Empieza por una habilidad y termina construyendo algo real.
            </p>
          </div>

          {featuredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
              <p className="text-slate-500 font-light">
                No hay formaciones destacadas en esta categoría.
              </p>
            </div>
          )}
        </div>

        {/* Section 2: Upcoming Courses */}
        <div>
          <div className="mb-12 pt-16 border-t border-slate-200/80">
            <h2 className="font-brand-display text-3xl sm:text-4xl font-light text-slate-900 mb-4">
              Próximamente en SyntIQ
            </h2>
            <p className="text-base text-slate-600 font-light leading-relaxed max-w-3xl">
              Nuevas formaciones que estamos preparando.
            </p>
          </div>

          {upcomingCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {upcomingCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
              <p className="text-slate-500 font-light">
                No hay nuevas formaciones anunciadas en esta categoría por ahora.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
