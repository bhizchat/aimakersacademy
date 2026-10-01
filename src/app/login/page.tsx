"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import { ArrowRight, Eye, EyeOff, IdCard, Mail, Lock } from "lucide-react";
import { loginAction, type LoginState } from "./actions";

const initialState: LoginState = undefined;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState
  );

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
          Student Login
        </h1>
        <p className="mt-2 text-center text-sm text-slate-400">
          For students accepted into an AI Makers Academy cohort.
        </p>

        <form
          action={formAction}
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div>
            <label
              htmlFor="schoolId"
              className="text-xs font-semibold text-slate-300"
            >
              School ID
            </label>
            <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-white/15 bg-slate-900 px-3 py-2.5 focus-within:border-indigo-400">
              <IdCard className="h-4 w-4 shrink-0 text-slate-500" />
              <input
                id="schoolId"
                name="schoolId"
                type="text"
                autoComplete="off"
                required
                placeholder="e.g. AMA-2026-K7H2QX"
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
                autoComplete="username"
                required
                placeholder="you@example.com"
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
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
                autoComplete="current-password"
                required
                placeholder="Enter your password"
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
            {pending ? "Signing In..." : "Sign In"}
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="mt-5 text-center text-xs text-slate-500">
            Not enrolled yet?{" "}
            <Link
              href="/apply"
              className="font-semibold text-sky-400 hover:text-sky-300"
            >
              Apply for the next cohort
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
}

