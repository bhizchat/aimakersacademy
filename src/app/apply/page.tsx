"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import { ArrowRight, Eye, EyeOff, Mail, User, Phone, Lock } from "lucide-react";
import { courses } from "@/data/courses";
import { applyAction, type ApplyState } from "./actions";

const initialState: ApplyState = undefined;

export default function ApplyPage() {
  const [state, formAction, pending] = useActionState(
    applyAction,
    initialState
  );
  const [showPassword, setShowPassword] = useState(false);

  if (state?.success) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-950 px-4 py-16">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-3xl">
            🎉
          </div>
          <h1 className="mt-4 text-2xl font-extrabold text-white">
            Application received!
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Thanks for applying to AI Makers Academy. Our team will review
            your application and email you within a few days. If accepted,
            we&apos;ll send you a School ID to activate your student login.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 transition hover:opacity-90"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-950 px-4 py-16">
      <div className="w-full max-w-sm">
        <div className="flex justify-center">
          <Image
            src="/images/brand/makers-profile.jpg"
            alt="AI Makers Academy"
            width={96}
            height={96}
            className="h-24 w-24 rounded-2xl"
            priority
          />
        </div>

        <h1 className="mt-6 text-center text-2xl font-extrabold text-white">
          Apply for a Cohort
        </h1>
        <p className="mt-2 text-center text-sm text-slate-400">
          Create your account to apply. If accepted, you&apos;ll use this
          same email and password — plus a School ID we email you — to sign
          in.
        </p>

        <form
          action={formAction}
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div>
            <label
              htmlFor="fullName"
              className="text-xs font-semibold text-slate-300"
            >
              Full Name
            </label>
            <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-white/15 bg-slate-900 px-3 py-2.5 focus-within:border-indigo-400">
              <User className="h-4 w-4 shrink-0 text-slate-500" />
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                placeholder="Jane Doe"
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="email"
              className="text-xs font-semibold text-slate-300"
            >
              Email
            </label>
            <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-white/15 bg-slate-900 px-3 py-2.5 focus-within:border-indigo-400">
              <Mail className="h-4 w-4 shrink-0 text-slate-500" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="phone"
              className="text-xs font-semibold text-slate-300"
            >
              Phone (optional)
            </label>
            <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-white/15 bg-slate-900 px-3 py-2.5 focus-within:border-indigo-400">
              <Phone className="h-4 w-4 shrink-0 text-slate-500" />
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+234..."
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="courseSlug"
              className="text-xs font-semibold text-slate-300"
            >
              Course of Interest
            </label>
            <div className="mt-1.5 rounded-lg border border-white/15 bg-slate-900 px-3 py-2.5 focus-within:border-indigo-400">
              <select
                id="courseSlug"
                name="courseSlug"
                required
                defaultValue=""
                className="w-full bg-transparent text-sm text-white focus:outline-none [&>option]:bg-slate-900"
              >
                <option value="" disabled>
                  Select a course
                </option>
                {courses.map((course) => (
                  <option key={course.slug} value={course.slug}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="password"
              className="text-xs font-semibold text-slate-300"
            >
              Password
            </label>
            <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-white/15 bg-slate-900 px-3 py-2.5 focus-within:border-indigo-400">
              <Lock className="h-4 w-4 shrink-0 text-slate-500" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                minLength={8}
                placeholder="At least 8 characters"
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="shrink-0 text-slate-500 hover:text-slate-300"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="confirmPassword"
              className="text-xs font-semibold text-slate-300"
            >
              Confirm Password
            </label>
            <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-white/15 bg-slate-900 px-3 py-2.5 focus-within:border-indigo-400">
              <Lock className="h-4 w-4 shrink-0 text-slate-500" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                minLength={8}
                placeholder="Re-enter your password"
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </div>

          {state?.error && (
            <p className="mt-4 rounded-lg border border-amber-400/30 bg-amber-500/10 p-3 text-xs text-amber-200">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Submitting..." : "Submit Application"}
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="mt-5 text-center text-xs text-slate-500">
            Already accepted?{" "}
            <Link
              href="/login"
              className="font-semibold text-sky-400 hover:text-sky-300"
            >
              Sign in
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
