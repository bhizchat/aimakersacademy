import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ShieldCheck, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Delete Your Account — BusinessOS",
  description:
    "Request deletion of your BusinessOS account and associated business data.",
};

const steps = [
  {
    title: "Open BusinessOS",
    description: "Sign in to your account on your device.",
  },
  {
    title: "Go to Settings → Delete Account",
    description: 'Tap "More", then "Settings", then "Delete Account".',
  },
  {
    title: "Confirm deletion",
    description:
      "Confirm when prompted. Your account and data are permanently deleted.",
  },
];

const deleted = [
  "Your account profile (name, email, phone number)",
  "Sales, expenses, and inventory records",
  "Customer and invoice records",
  "AI assistant conversation history",
];

const retained = [
  "Transaction records we're required to keep for tax or legal compliance, for the period required by law",
  "Anonymized, aggregated usage data that can no longer identify you",
];

export default function BusinessOSDeleteAccountPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Delete Your Account
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">
        BusinessOS, built by AI Makers Academy, lets you request deletion of
        your account and all associated business data at any time.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-extrabold text-slate-900">
          Request deletion in the app
        </h2>
        <div className="mt-6 space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2F6FE4] text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-extrabold text-slate-900">
          Can&apos;t access the app?
        </h2>
        <p className="mt-3 leading-relaxed text-slate-600">
          Email us from your account&apos;s registered email address and
          we&apos;ll process your request within 30 days.
        </p>
        <Link
          href="mailto:victoredochie10@gmail.com?subject=Delete%20My%20BusinessOS%20Account"
          className="mt-4 flex max-w-sm items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-[#2F6FE4]">
            <Mail className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-bold text-slate-900">
              Email Support
            </span>
            <span className="block text-xs text-slate-500">
              victoredochie10@gmail.com
            </span>
          </span>
        </Link>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 p-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-[#2F6FE4]">
            <Trash2 className="h-5 w-5" />
          </span>
          <h3 className="mt-3 text-sm font-bold text-slate-900">
            What gets deleted
          </h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600">
            {deleted.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-100 p-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-[#2F6FE4]">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <h3 className="mt-3 text-sm font-bold text-slate-900">
            What we may retain
          </h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600">
            {retained.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <p className="mt-14 text-center text-sm text-slate-500">
        See our{" "}
        <Link
          href="/businessos/privacy-policy"
          className="font-semibold text-[#2F6FE4] hover:text-blue-700"
        >
          Privacy Policy
        </Link>{" "}
        for more on how we handle your data.
      </p>
    </div>
  );
}
