import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: "Inicio", href: "/" }, ...items];

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://syntiq.ai${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <nav
        aria-label="Migas de pan"
        className="flex items-center space-x-2 text-xs font-mono text-slate-500 py-3"
      >
        <ol className="flex items-center space-x-1.5 flex-wrap">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 mx-1 shrink-0" aria-hidden="true" />
                )}
                {isLast ? (
                  <span
                    className="text-blue-600 font-semibold truncate max-w-[200px] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-slate-900 transition-colors flex items-center gap-1 text-slate-600"
                  >
                    {index === 0 && <Home className="w-3 h-3" aria-hidden="true" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
