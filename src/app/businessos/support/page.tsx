import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "BusinessOS Support — AI Makers Academy",
  description:
    "Get help with the BusinessOS app — contact support and find answers to frequently asked questions.",
};

const contactOptions = [
  {
    label: "Email Support",
    detail: "victoredochie10@gmail.com",
    href: "mailto:victoredochie10@gmail.com?subject=BusinessOS%20Support",
    icon: Mail,
  },
  {
    label: "Call Support",
    detail: "+234 913 433 3745",
    href: "tel:+2349134333745",
    icon: Phone,
  },
  {
    label: "WhatsApp Support",
    detail: "Chat with our team",
    href: "https://wa.me/2349134333745",
    icon: MessageCircle,
  },
];

const faqs = [
  {
    question: "How do I record a sale?",
    answer:
      'From the Home screen, tap "Record Sale" and enter the item, amount, and customer (optional). It takes just a few seconds.',
  },
  {
    question: "How do I add inventory?",
    answer:
      'Go to the Inventory tab and tap "Add Item" to enter the product name, quantity, and price. BusinessOS will track stock levels for you from there.',
  },
  {
    question: "How does the AI assistant work?",
    answer:
      "Talk to the AI assistant like a smart assistant, or snap a photo of a receipt, and it will log the sale or expense for you automatically.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your sales, inventory, and customer data are stored securely and are only accessible to you. BusinessOS never shares your business data with third parties.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "Go to More → Profile → Delete Account. This permanently removes your data from BusinessOS.",
  },
  {
    question: "What currencies are supported?",
    answer:
      "BusinessOS is built around the Naira (₦) for small business owners in Nigeria.",
  },
];

export default function BusinessOSSupportPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-linear-to-b from-blue-50 via-white to-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Support
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              We&apos;re here to help you get the most out of BusinessOS.
            </p>
          </div>

          <div className="relative mx-auto h-32 w-56 shrink-0 sm:h-40 sm:w-72">
            <Image
              src="/images/BusinessOS/businessOS-header.png"
              alt="BusinessOS app dashboard"
              fill
              sizes="(min-width: 1024px) 288px, 60vw"
              className="rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-xl font-extrabold text-slate-900">Contact Us</h2>
        <p className="mt-2 text-sm text-slate-600">
          We typically respond within 24 hours.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {contactOptions.map((option) => (
            <Link
              key={option.label}
              href={option.href}
              target={option.href.startsWith("http") ? "_blank" : undefined}
              rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-[#2F6FE4]">
                <option.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold text-slate-900">
                  {option.label}
                </span>
                <span className="block text-xs text-slate-500">
                  {option.detail}
                </span>
              </span>
            </Link>
          ))}
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

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-slate-100 pt-8 text-center text-sm text-slate-500">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/businessos/privacy-policy"
              className="font-semibold text-[#2F6FE4] hover:text-blue-700"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="font-semibold text-[#2F6FE4] hover:text-blue-700"
            >
              Terms of Service
            </Link>
          </div>
          <p>
            BusinessOS is a product of{" "}
            <Link href="/" className="font-semibold text-[#2F6FE4] hover:text-blue-700">
              AI Makers Academy
            </Link>{" "}
            — Africa&apos;s practical AI academy, built for the world.
          </p>
        </div>
      </section>
    </div>
  );
}
