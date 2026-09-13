"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { APPLY_FORM_URL } from "@/lib/links";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses/ai-coding-web-applications", label: "Courses" },
  { href: "/#curriculum", label: "Curriculum" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/courses")) return pathname.startsWith("/courses");
    if (href === "/about") return pathname.startsWith("/about");
    return false;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/brand/logo.png"
            alt="AI Makers Academy logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="text-base font-extrabold tracking-tight text-white">
              AI Makers
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-slate-400">
              ACADEMY
            </span>
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "border-b-2 border-indigo-500 pb-1 text-sm font-semibold text-white"
                  : "text-sm font-semibold text-slate-300 hover:text-white"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Login
          </Link>
          <Link
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-sky-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 transition hover:opacity-90"
          >
            Apply Now
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  isActive(link.href)
                    ? "rounded-md px-2 py-2 text-sm font-semibold text-white bg-white/5"
                    : "rounded-md px-2 py-2 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-white"
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-white"
            >
              Login
            </Link>
            <Link
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-linear-to-r from-sky-500 to-purple-600 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Apply Now
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
