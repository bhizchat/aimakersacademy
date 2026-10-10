import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Banknote,
  BarChart3,
  Bell,
  Bot,
  Clock,
  GraduationCap,
  Package,
  Receipt,
  Sparkles,
  Store,
  Users,
  Wallet,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BusinessOS — Run Your Business, Smarter, Every Day",
  description:
    "BusinessOS is an AI-powered business app for small business owners in Nigeria. Record sales, track inventory, manage customers and invoices, and get daily AI-powered insights.",
};

const features = [
  {
    title: "Record Sales in Seconds",
    description: "Log a sale in a few taps, right from your phone.",
    icon: Receipt,
  },
  {
    title: "Manage Inventory",
    description: "Track stock levels and know what to restock, before you run out.",
    icon: Package,
  },
  {
    title: "Track Expenses",
    description: "Capture every expense so you always know where your money goes.",
    icon: Wallet,
  },
  {
    title: "Customers & Invoices",
    description: "Keep customer records and send professional invoices in moments.",
    icon: Users,
  },
  {
    title: "AI Business Assistant",
    description:
      "Talk to it like a smart assistant, or snap a photo of a receipt and let it do the rest.",
    icon: Bot,
  },
  {
    title: "Daily Business Insights",
    description: "Morning, afternoon, and evening summaries of how your business is doing.",
    icon: Clock,
  },
  {
    title: "Smart Notifications",
    description: "Get nudged about low stock, unpaid invoices, and important changes.",
    icon: Bell,
  },
  {
    title: "Detailed Reports",
    description: "Sales, Expenses, Inventory, Customers, Invoices, and Profit & Loss — all in one place.",
    icon: BarChart3,
  },
];

const builtFor = [
  {
    title: "Naira Currency",
    description: "Everything is built around the Naira, so your numbers make sense from day one.",
    icon: Banknote,
  },
  {
    title: "No Accounting Degree Needed",
    description: "Simple screens and plain language — if you can use WhatsApp, you can use BusinessOS.",
    icon: GraduationCap,
  },
  {
    title: "Built for Real Businesses",
    description: "Designed for shop owners and small traders running their business day to day.",
    icon: Store,
  },
];

export default function BusinessOSPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-linear-to-b from-blue-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-[#2F6FE4]">
              <Sparkles className="h-3.5 w-3.5" />
              Built by AI Makers Academy
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Run your business.{" "}
              <span className="text-[#2F6FE4]">Smarter, every day.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base text-slate-600">
              Record sales, track inventory, manage customers and invoices,
              and get AI-powered daily insights — all in one app.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
              >
                Download on the App Store
              </Link>
              <Link
                href="/businessos/support"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                Need help? Visit Support →
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative w-full" style={{ aspectRatio: "5244 / 2950" }}>
              <Image
                src="/images/BusinessOS/businessOS-header.png"
                alt="BusinessOS app dashboard showing today's sales, profit, and business insights"
                fill
                sizes="(min-width: 1024px) 576px, 90vw"
                className="rounded-2xl object-contain"
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
              Everything your business needs
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-[#2F6FE4]">
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
        </div>
      </section>

      {/* Built for how you actually work */}
      <section className="border-b border-slate-100 bg-slate-50/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative w-full" style={{ aspectRatio: "1846 / 852" }}>
              <Image
                src="/images/BusinessOS/businessOS-smarter-every-day.png"
                alt="BusinessOS app showing a smarter way to run your business every day"
                fill
                sizes="(min-width: 1024px) 448px, 90vw"
                className="rounded-2xl object-contain"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Built for how you actually work
            </h2>
            <div className="mt-8 space-y-6">
              {builtFor.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-white text-[#2F6FE4]">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="bg-slate-950">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-bold tracking-wide text-blue-300">
            <Sparkles className="h-3.5 w-3.5" />
            Available on iOS
          </span>
          <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
            Run your business smarter, starting today.
          </h2>
          <div className="mt-8">
            {/* TODO: replace with the live App Store URL once BusinessOS is published */}
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
          <Link href="/" className="font-semibold text-[#2F6FE4] hover:text-blue-700">
            AI Makers Academy
          </Link>{" "}
          — Africa&apos;s practical AI academy, built for the world.
        </div>
      </section>
    </div>
  );
}
