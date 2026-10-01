import Image from "next/image";
import Link from "next/link";
import { APPLY_FORM_URL } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/brand/logo.png"
                alt="AI Makers Academy logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-base font-extrabold text-white">
                AI Makers Academy
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-slate-400">
              Learn to build with AI — apps, games, and video — through
              hands-on, project-based courses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Courses</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/courses/ai-coding-web-applications"
                  className="hover:text-white"
                >
                  AI Coding: Build Web Applications with AI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/#curriculum" className="hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/ai-coding-web-applications"
                  className="hover:text-white"
                >
                  The Course
                </Link>
              </li>
              <li>
                <Link href="/medi" className="hover:text-white">
                  Medi App
                </Link>
              </li>
              <li>
                <Link href="/medi/support" className="hover:text-white">
                  Medi Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Get Started</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href={APPLY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Enroll Now
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} AI Makers Academy. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
