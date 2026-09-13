"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// NOTE: `logo: null` entries are placeholders — swap for a real logo file in
// public/images/partners/ and reference it here (see "harvard" below).
const universities: { name: string; logo: string | null }[] = [
  { name: "Harvard University", logo: "/images/partners/harvard.png" },
  { name: "MIT", logo: "/images/partners/MIT.png" },
  { name: "Stanford University", logo: "/images/partners/stanford.png" },
  { name: "Yale", logo: "/images/partners/yale.png" },
  { name: "Columbia University", logo: "/images/partners/columbia.png" },
  { name: "Oxford University", logo: "/images/partners/oxford.png" },
  { name: "University of Washington", logo: "/images/partners/washington.png" },
  { name: "University of Michigan", logo: "/images/partners/michigan.png" },
];

export default function PartnerUniversities() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByPage = (direction: 1 | -1) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({
      left: direction * container.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {universities.map(({ name, logo }) => (
          <div
            key={name}
            className="flex aspect-video w-56 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            {logo ? (
              <Image
                src={logo}
                alt={`${name} logo`}
                width={224}
                height={126}
                className="h-full w-full object-contain"
              />
            ) : (
              <span className="text-center text-sm font-semibold text-slate-500">
                {name}
              </span>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByPage(-1)}
        aria-label="Show previous universities"
        className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition hover:bg-slate-50 sm:flex"
      >
        <ChevronLeft className="h-5 w-5 text-slate-700" />
      </button>
      <button
        type="button"
        onClick={() => scrollByPage(1)}
        aria-label="Show more universities"
        className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition hover:bg-slate-50 sm:flex"
      >
        <ChevronRight className="h-5 w-5 text-slate-700" />
      </button>
    </div>
  );
}
