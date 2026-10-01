import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Medi Support — AI Makers Academy",
  description:
    "Get help with the Medi app — contact support, manage your subscription, and find answers to frequently asked questions.",
};

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      'On the Log In screen, tap "Forgot password?" and follow the instructions sent to your email.',
  },
  {
    question: "How do I manage or cancel my subscription?",
    answer:
      "Go to More → Manage Subscription inside the app. This opens Apple's subscription management screen, where you can cancel, upgrade, or downgrade your plan at any time.",
  },
  {
    question: "Is my health data private?",
    answer:
      "Yes. Your health records, medications, and vitals are stored securely and are only accessible to you. Medi never shares your personal health data with third parties.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "Go to More → Profile → Delete Account. This permanently removes your data from Medi.",
  },
];

export default function MediSupportPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-linear-to-b from-teal-50 via-white to-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Medi Support
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Medi is an AI-powered health companion app built by{" "}
              <Link href="/" className="font-semibold text-teal-700 hover:text-teal-800">
                AI Makers Academy
              </Link>{" "}
              — helping people track medications, routines, vitals, and
              health records, with an AI chat assistant for everyday health
              questions.
            </p>
          </div>

          <div className="relative mx-auto h-40 w-28 shrink-0 sm:h-48 sm:w-32">
            <Image
              src="/images/medi/chat.png"
              alt="Medi AI chat assistant screen"
              fill
              sizes="160px"
              className="rounded-2xl object-cover object-top shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-xl font-extrabold text-slate-900">Need Help?</h2>
        <p className="mt-2 text-sm text-slate-600">
          We typically respond within 24 hours.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="https://wa.me/2349134333745"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-teal-300 hover:bg-teal-50/50"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-600">
              <MessageCircle className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-slate-900">
                WhatsApp
              </span>
              <span className="block text-xs text-slate-500">
                Message us on WhatsApp
              </span>
            </span>
          </Link>

          <Link
            href="mailto:victoredochie10@gmail.com?subject=Medi%20Support"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-teal-300 hover:bg-teal-50/50"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-600">
              <Mail className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-slate-900">
                Email
              </span>
              <span className="block text-xs text-slate-500">
                victoredochie10@gmail.com
              </span>
            </span>
          </Link>
        </div>

        <h2 className="mt-14 text-xl font-extrabold text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-slate-100 pb-6">
              <h3 className="text-sm font-bold text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-slate-500">
          Medi is a product of{" "}
          <Link href="/" className="font-semibold text-teal-700 hover:text-teal-800">
            AI Makers Academy
          </Link>{" "}
          — Africa&apos;s practical AI academy, built for the world.
        </p>
      </section>
    </div>
  );
}
