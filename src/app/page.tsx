import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Globe,
  GraduationCap,
  Laptop,
  Layers,
  MessageSquare,
  PlayCircle,
  Rocket,
  Users,
  Zap,
} from "lucide-react";
import PartnerUniversities from "@/components/PartnerUniversities";
import { getCourseBySlug } from "@/data/courses";
import { moduleIconMap } from "@/lib/course-icons";
import { APPLY_FORM_URL } from "@/lib/links";

const buildItems = [
  {
    title: "Personal Portfolio",
    description: "Showcase your skills and projects",
    icon: Layers,
    color: "bg-purple-500/15 text-purple-300",
  },
  {
    title: "AI-Powered App",
    description: "Build an application using AI APIs",
    icon: Bot,
    color: "bg-sky-500/15 text-sky-300",
  },
  {
    title: "Full Web Application",
    description: "Create a complete real-world app",
    icon: Globe,
    color: "bg-emerald-500/15 text-emerald-300",
  },
  {
    title: "Final Capstone",
    description: "Deploy and present your product",
    icon: Rocket,
    color: "bg-orange-500/15 text-orange-300",
  },
];

const includedItems = [
  { label: "Live weekly classes", icon: Users },
  { label: "Recorded lessons", icon: PlayCircle },
  { label: "Project feedback", icon: MessageSquare },
  { label: "Private community", icon: Users },
  { label: "GitHub & portfolio setup", icon: Award },
  { label: "Certificate of completion", icon: Award },
];

const curriculumStats = [
  { label: "Africa-first Global mindset", icon: Globe },
  { label: "Support from expert mentors", icon: Users },
  { label: "Learn at your pace with flexible access", icon: Clock },
  { label: "Build a portfolio that gets you hired", icon: GraduationCap },
];

export default function Home() {
  const course = getCourseBySlug("ai-coding-web-applications");

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="relative">
          <div className="relative overflow-hidden bg-slate-950">
            <div
              className="relative w-full"
              style={{ aspectRatio: "3156 / 1344" }}
            >
              <Image
                src="/images/brand/land-image2.png"
                alt="A student building a modern web app with AI at AI Makers Academy"
                fill
                sizes="(min-width: 1024px) 1280px, 100vw"
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[46%] bg-linear-to-r from-slate-950/90 via-slate-950/40 to-transparent lg:block" />
            </div>

            <div className="flex flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[42%] lg:justify-between lg:gap-0 lg:px-8 lg:py-10 xl:px-12">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs font-bold tracking-wide text-indigo-300">
                    COHORT 1
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-bold tracking-wide text-emerald-300">
                    <Calendar className="h-3.5 w-3.5" />
                    Starts Jan 18, 2027
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    8 Weeks <span aria-hidden="true">•</span> Live Online{" "}
                    <span aria-hidden="true">•</span> Beginner Friendly
                  </span>
                </div>

                <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-4xl xl:text-5xl">
                  <span className="block text-white">AI Coding:</span>
                  <span className="block bg-linear-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Build Web Applications with AI
                  </span>
                </h1>

                <p className="mt-5 max-w-md text-base text-slate-300">
                  Go from idea to a live web application using AI as your
                  development partner. Learn, build, and launch real projects
                  with modern tools and expert guidance.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4">
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
                    href="/#curriculum"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    View Curriculum
                  </Link>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 lg:mt-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Founding Cohort
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <span className="text-3xl font-extrabold text-white">
                    ₦15,000
                  </span>
                  <span className="text-lg text-slate-500 line-through">
                    ₦99,000
                  </span>
                  <span className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/15 px-3 py-1 text-xs font-semibold text-purple-200">
                    30 Seats Only
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-indigo-400" />
                    Class Starts January 18, 2027
                  </div>
                  <div className="flex items-center gap-2">
                    <Laptop className="h-4 w-4 text-indigo-400" />
                    Live + Self-Paced
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-indigo-400" />
                    Certificate Included
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Build */}
        <div className="relative border-t border-white/10 bg-slate-900/60">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
              <div>
                <h2 className="text-2xl font-extrabold text-white">
                  What You&apos;ll Build
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Turn your ideas into real, working applications.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {buildItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${item.color}`}
                    >
                      <item.icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="mt-3 text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Users className="h-5 w-5 shrink-0 text-indigo-400" />
              Perfect for Students, Professionals, Entrepreneurs and Creators
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Globe className="h-5 w-5 shrink-0 text-indigo-400" />
              Africa&apos;s Practical AI Academy Built for the World
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Zap className="h-5 w-5 shrink-0 text-indigo-400" />
              No Previous Programming Experience Required
            </div>
            <div className="flex items-center text-sm italic text-slate-300">
              <span className="font-serif">
                Join a community of AI Makers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor-certifying universities */}
      <section className="border-t border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Learn from Instructors Certified from these Universities
          </h2>
          <div className="mt-10">
            <PartnerUniversities />
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      {course && (
        <section
          id="curriculum"
          className="scroll-mt-20 bg-slate-950 py-20 text-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                      <span aria-hidden="true">•</span>{" "}
                      {course.curriculum.length} Major Projects{" "}
                      <span aria-hidden="true">•</span> 1 Final Capstone
                    </p>
                  </div>
                  <Link
                    href={`/courses/${course.slug}`}
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
                  {curriculumStats.map((stat) => (
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
      )}
    </div>
  );
}
