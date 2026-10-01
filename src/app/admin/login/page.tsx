"use client";

import { useActionState, useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock } from "lucide-react";
import { adminLoginAction, type AdminLoginState } from "../actions";

const initialState: AdminLoginState = undefined;

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction, pending] = useActionState(
    adminLoginAction,
    initialState
  );

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-950 px-4 py-16">
      <div className="w-full max-w-sm">
        <h1 className="text-center text-2xl font-extrabold text-white">
          Admin Login
        </h1>
        <p className="mt-2 text-center text-sm text-slate-400">
          Review and manage cohort applications.
        </p>

        <form
          action={formAction}
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
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
              placeholder="Enter admin password"
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
        </form>
      </div>
    </div>
  );
}
