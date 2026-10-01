import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Lock,
  MessageCircle,
  Pill,
  Sparkles,
  Activity,
  FolderHeart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medi — Your AI Health Companion",
  description:
    "Track medications, routines, and vitals. Get clear answers to everyday health questions. Medi is an AI-powered health companion app built by AI Makers Academy.",
};

const features = [
  {
    title: "Medication Tracking",
    description:
      "Never miss a dose — set up personalized schedules and reminders for every medication.",
    icon: Pill,
  },
  {
    title: "Health Records, Organized",
    description:
      "Keep your conditions, allergies, and medical history in one place, always accessible.",
    icon: FolderHeart,
  },
  {
    title: "Ask Medi Anything",
    description:
      "Chat with an AI assistant trained to give safe, clear guidance on everyday health questions — know when to see a doctor and when you don't need to worry.",
    icon: MessageCircle,
  },
  {
    title: "Vitals at a Glance",
    description:
      "Log blood pressure and glucose readings, and see trends over time with simple, clear charts.",
    icon: Activity,
  },
  {
    title: "Built on Trust",
    description:
      "Your data is private by design — secured with encrypted storage and accessible only to you.",
    icon: Lock,
  },
];

const screenshots = [
  { src: "/images/medi/chat.png", alt: "Chat with Medi, an AI health assistant" },
  { src: "/images/medi/routines.png", alt: "Healthy routines made simple in Medi" },
  { src: "/images/medi/trends.png", alt: "Track your health trends in Medi" },
];

export default function MediPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-linear-to-b from-teal-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold tracking-wide text-teal-700">
              <Sparkles className="h-3.5 w-3.5" />
              Built by AI Makers Academy
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Medi — Your{" "}
              <span className="bg-linear-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">
                AI Health Companion
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base text-slate-600">
              Track medications, routines, and vitals. Get clear answers to
              everyday health questions. All in one simple, private app.
            </p>
            <p className="mt-4 max-w-lg text-base text-slate-600">
              Built by AI Makers Academy, Medi is a real-world example of the
              kind of AI-powered products our students learn to build —
              practical, secure, and genuinely useful.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
              >
                Download on the App Store
              </Link>
              <Link
                href="/medi/support"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                Need help? Visit Support →
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
            <div className="relative w-full" style={{ aspectRatio: "1242 / 2688" }}>
              <Image
                src="/images/medi/today.png"
                alt="Medi app Today screen showing daily health progress and reminders"
                fill
                sizes="(min-width: 1024px) 384px, 60vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              What You Can Do With Medi
            </h2>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-600">
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {screenshots.map((shot) => (
                <div
                  key={shot.src}
                  className="relative w-full"
                  style={{ aspectRatio: "1242 / 2688" }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 1024px) 180px, 30vw"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="bg-slate-950">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-xs font-bold tracking-wide text-teal-300">
            <Heart className="h-3.5 w-3.5" />
            Available on iOS
          </span>
          <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
            Start your free 14-day trial today.
          </h2>
          <div className="mt-8">
            {/* TODO: replace with the live App Store URL once Medi is published */}
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
            >
              Download on the App Store →
            </Link>
          </div>
        </div>
      </section>

      {/* Attribution */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          A product of{" "}
          <Link
            href="/"
            className="font-semibold text-teal-700 hover:text-teal-800"
          >
            AI Makers Academy
          </Link>{" "}
          — Africa&apos;s practical AI academy, built for the world.
        </div>
      </section>
    </div>
  );
}
