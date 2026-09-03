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

  return (
    <section className="py-20 sm:py-32 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="font-brand-display text-4xl sm:text-5xl font-light text-slate-900 mb-6">
            NO SOLO MIRAS. <span className="font-normal text-blue-600">CONSTRUYES.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed">
            Cada formación termina con un entregable que puedes seguir usando después del taller. 
            Explora nuestro catálogo de productos educativos.
          </p>
        </div>

        {/* Filters (Horizontal Scroll on Mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-12 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide gap-2 sm:gap-3 sm:flex-wrap sm:justify-center">
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

        {/* Grid of Courses */}
        {visibleCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
            <p className="text-slate-500 font-light">
              Próximamente anunciaremos formaciones en esta categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
