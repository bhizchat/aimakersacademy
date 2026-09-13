import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses — AI Makers Academy",
  description:
    "AI Coding: Build Web Applications with AI — a project-based course that teaches you to design and ship full-stack web apps using AI.",
};

export default function CoursesPage() {
  const featuredCourses = courses.filter(
    (course) => course.slug === "ai-coding-web-applications"
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          Our Course
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          A single, focused, project-based course that teaches you to build
          real web applications with AI. Start shipping.
        </p>
      </div>

      <div className="mt-12 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {featuredCourses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
