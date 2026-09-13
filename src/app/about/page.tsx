import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Lightbulb,
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — AI Makers Academy",
  description:
    "AI Makers Academy is an Africa-first, globally accessible academy helping people learn, build, and create with AI.",
};

const values = [
  {
    title: "Impact",
    description: "We focus on real skills and real-world results.",
    icon: Zap,
  },
  {
    title: "Innovation",
    description: "We embrace new tools, ideas and possibilities.",
    icon: Lightbulb,
  },
  {
    title: "Community",
    description: "We learn, grow and build together.",
    icon: Users,
  },
  {
    title: "Inclusion",
    description: "We create equal opportunities for everyone, everywhere.",
    icon: Shield,
  },
];

const whyItems = [
  "Hands-on, project-based learning",
  "Expert instructors and mentors",
  "Supportive global community",
  "Career and business growth opportunities",
];

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="relative">
          <div
            className="relative w-full"
            style={{ aspectRatio: "3156 / 1344" }}
          >
            <Image
              src="/images/brand/land-image2.png"
              alt="A student building with AI at AI Makers Academy"
              fill
              sizes="(min-width: 1024px) 1280px, 100vw"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[52%] bg-linear-to-r from-slate-950/95 via-slate-950/50 to-transparent lg:block" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-slate-950/95 via-slate-950/20 to-transparent lg:hidden" />
          </div>

          <div className="flex flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[52%] lg:justify-center lg:px-12">
            <span className="inline-flex w-fit items-center rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs font-bold tracking-wide text-indigo-300">
              About AI Makers Academy
            </span>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="block text-white">More Than a School.</span>
              <span className="block bg-linear-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                A Movement.
              </span>
            </h1>

            <p className="max-w-lg text-base text-slate-300">
              AI Makers Academy is an Africa-first, globally accessible
              academy helping people learn, build, and create with AI.
            </p>
            <p className="max-w-lg text-base text-slate-300">
              We&apos;re not just teaching about AI — we&apos;re teaching you
              how to use AI to build real solutions, launch digital products,
              and create opportunities for yourself and your community.
            </p>

            <p className="font-serif text-2xl italic text-slate-200">
              Learn <span className="text-indigo-400">AI</span>. Build{" "}
              <span className="underline decoration-indigo-400">
                Anything.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Stats */}
      <section className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/10 text-indigo-300">
                <Target className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-lg font-extrabold text-white">
                  Our Mission
                </h2>
                <p className="mt-1.5 text-sm text-slate-400">
                  To empower individuals and organizations, across Africa and
                  beyond, with practical AI skills that create real-world
                  impact.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 text-purple-300">
                <Eye className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-lg font-extrabold text-white">
                  Our Vision
                </h2>
                <p className="mt-1.5 text-sm text-slate-400">
                  To be the world&apos;s leading AI application academy, known
                  for producing skilled makers, innovative solutions, and a
                  new generation of builders from Africa to the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values + Why + Image */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-extrabold text-white">
                Our Values
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                These values guide everything we do — from our curriculum to
                our community.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/10 text-indigo-300">
                      <value.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="relative overflow-hidden rounded-2xl">
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "3 / 2" }}
                >
                  <Image
                    src="/images/brand/about-image.jpeg"
                    alt="AI Makers Academy community collaborating on a laptop"
                    fill
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-5 font-serif text-xl italic leading-tight text-white">
                    Real People.
                    <br />
                    Real Projects.
                    <br />
                    Real Impact.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-extrabold text-white">
                  Why AI Makers Academy?
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Because the future isn&apos;t just about using AI. It&apos;s
                  about building with it.
                </p>
                <ul className="mt-4 space-y-2.5">
                  {whyItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/courses"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Join Our Community
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="bg-slate-900/40 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 text-sm font-semibold text-slate-300 sm:px-6 lg:px-8">
          <Sparkles className="h-4 w-4 text-indigo-400" />
          Built in Africa. Open to the World.
        </div>
      </section>
    </div>
  );
}
