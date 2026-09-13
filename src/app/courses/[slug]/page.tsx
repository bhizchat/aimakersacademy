import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Code2,
  Download,
  Globe,
  GraduationCap,
  Laptop,
  Layers,
  MessageSquare,
  PlayCircle,
  Rocket,
  Signal,
  Users,
} from "lucide-react";
import { courses, getCourseBySlug } from "@/data/courses";
import { moduleIconMap } from "@/lib/course-icons";
import { APPLY_FORM_URL } from "@/lib/links";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} — AI Makers Academy`,
    description: course.shortDescription,
  };
}

const perks = [
  { label: "Certificate Included", icon: Award },
  { label: "Portfolio Projects", icon: Layers },
  { label: "Expert Mentorship", icon: Users },
];

const includedItems = [
  { label: "Live weekly classes", icon: Users },
  { label: "Recorded lessons", icon: PlayCircle },
  { label: "Project feedback", icon: MessageSquare },
  { label: "Private community", icon: Users },
  { label: "GitHub & portfolio setup", icon: Code2 },
  { label: "Certificate of completion", icon: Award },
];

const stats = [
  { label: "Africa-first Global mindset", icon: Globe },
  { label: "Support from expert mentors", icon: Users },
  { label: "Learn at your pace with flexible access", icon: Clock },
  { label: "Build a portfolio that gets you hired", icon: GraduationCap },
];

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const [firstWord, ...restWords] = course.title.split(" ");
  const restOfTitle = restWords.join(" ");

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Courses
          </Link>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
            {/* Left: headline + description + laptop mockup */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs font-bold tracking-wide text-indigo-300">
                  Cohort 1
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <Laptop className="h-3.5 w-3.5" />
                  {course.format}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <Signal className="h-3.5 w-3.5" />
                  {course.level} Friendly
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                <span className="text-white">{firstWord}</span>{" "}
                <span className="bg-linear-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {restOfTitle}
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
                {course.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={APPLY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 transition hover:opacity-90"
                >
                  Apply for Cohort 1
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#curriculum"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Requirements
                </Link>
              </div>
            </div>

            {/* Right: pricing card */}
            <div className="w-full rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-linear-to-r from-sky-500 to-purple-600 px-3 py-1 text-xs font-bold text-white">
                  Founding Cohort
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-slate-300">
                  Only 30 Seats
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-baseline gap-3">
                <span className="text-3xl font-extrabold text-white">
                  ₦15,000
                </span>
                <span className="text-lg text-slate-500 line-through">
                  ₦99,000
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-400">
                Or pay in 3 installments
              </p>
              <p className="text-sm font-semibold text-slate-200">
                ₦5,000 x 3
              </p>

              <Link
                href={APPLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 transition hover:opacity-90"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center">
                {perks.map((perk) => (
                  <div
                    key={perk.label}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <perk.icon className="h-4 w-4 text-indigo-300" />
                    <span className="text-[10px] font-medium leading-tight text-slate-400">
                      {perk.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum + What You'll Build */}
      <section id="curriculum" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
            {/* Curriculum */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold text-white">
                    Course Curriculum
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {course.curriculum.length} Weeks{" "}
                    <span aria-hidden="true">•</span> {course.curriculum.length}{" "}
                    Major Projects <span aria-hidden="true">•</span> 1 Final
                    Capstone
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download Full Curriculum
                </Link>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {course.curriculum.map((module, index) => {
                  const ModuleIconComponent = moduleIconMap[module.icon];
                  return (
                    <div
                      key={module.title}
                      className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-9 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-indigo-500/20 text-[10px] font-bold uppercase tracking-wide text-indigo-300">
                          Week
                          <span className="text-sm leading-tight">
                            {index + 1}
                          </span>
                        </span>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-white">
                            {module.title}
                          </h3>
                          <ul className="mt-2 space-y-1.5">
                            {module.lessons.map((lesson) => (
                              <li
                                key={lesson}
                                className="flex items-start gap-2 text-xs text-slate-400"
                              >
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300">
                          <ModuleIconComponent className="h-4.5 w-4.5" />
                        </span>
                      </div>
                      <Link
                        href={`/courses/${course.slug}/week/${index + 1}`}
                        className="mt-4 inline-flex items-center gap-1.5 self-end text-xs font-semibold text-sky-400 hover:text-sky-300"
                      >
                        View Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm text-slate-400">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <stat.icon className="h-4 w-4 text-indigo-400" />
                    {stat.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar: What You'll Build + You'll Also Get + CTA */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-extrabold text-white">
                  What You&apos;ll Build
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Real projects. Real skills. A portfolio that gets you
                  noticed.
                </p>
                <ul className="mt-4 space-y-4">
                  {course.outcomes.slice(0, 4).map((outcome, index) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-xs font-bold text-indigo-300">
                        {index + 1}
                      </span>
                      <span className="text-sm text-slate-300">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-extrabold text-white">
                  You&apos;ll Also Get
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-2.5 xs:grid-cols-2">
                  {includedItems.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-linear-to-br from-sky-500 to-purple-600 p-6 text-white">
                <Rocket className="h-6 w-6" />
                <h3 className="mt-3 text-lg font-extrabold">
                  Your First Real Project Starts Here
                </h3>
                <p className="mt-1 text-sm text-white/90">
                  Join AI Makers Academy and turn your ideas into working
                  applications — with the power of AI.
                </p>
                <Link
                  href={APPLY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Apply for Cohort 1
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
