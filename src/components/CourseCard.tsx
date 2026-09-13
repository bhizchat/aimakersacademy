import Link from "next/link";
import { Clock, Signal } from "lucide-react";
import { courseIconMap } from "@/lib/course-icons";
import type { Course } from "@/types/course";

export default function CourseCard({ course }: { course: Course }) {
  const Icon = courseIconMap[course.icon];

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group mx-auto flex w-full max-w-70 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-center justify-between bg-stone-100 px-3.5 py-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wide text-slate-700">
          Course
        </span>
      </div>

      {/* NOTE: placeholder image — swap for a real course thumbnail later */}
      <div
        className={`flex h-28 items-center justify-center bg-linear-to-br ${course.gradient}`}
      >
        <Icon className="h-10 w-10 text-white" strokeWidth={1.5} />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <h3 className="text-sm font-bold leading-snug text-slate-900 group-hover:text-indigo-600">
          {course.title}
        </h3>
        <p className="text-xs text-slate-600">AI Makers Academy</p>

        <div className="mt-auto flex flex-col gap-1.5 pt-2 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-slate-500" />
            <span>{course.duration} to complete</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Signal className="h-3.5 w-3.5 text-slate-500" />
            <span>{course.level} level</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
