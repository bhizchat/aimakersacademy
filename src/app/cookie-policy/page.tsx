import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — AI Makers Academy",
  description:
    "Learn how AI Makers Academy uses cookies and similar tracking technologies on our website.",
};

const lastUpdated = "September 11, 2026";

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Cookie Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>

      <div className="prose-legal mt-10 space-y-10 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-slate-900">
            1. What Are Cookies?
          </h2>
          <p className="mt-3 leading-relaxed">
            Cookies are small text files placed on your device when you
            visit a website. They help websites function properly, remember
            your preferences, and understand how visitors use the site.
            Similar technologies include local storage and pixels, which we
            refer to collectively as &ldquo;cookies&rdquo; in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            2. Categories of Cookies We Use
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
            <li>
              <span className="font-semibold text-slate-900">
                Strictly necessary cookies:
              </span>{" "}
              required for the website to function, such as remembering
              your session and security settings. These cannot be disabled
              without affecting how the Service works.
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                Performance &amp; analytics cookies:
              </span>{" "}
              help us understand how visitors interact with the Service
              (e.g., pages visited, time on page) so we can improve it. We
              may use analytics providers for this purpose.
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                Functionality cookies:
              </span>{" "}
              remember choices you make (such as display preferences) to
              provide a more personalized experience.
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            We do not currently use cookies for third-party advertising, and
            we do not sell or share information collected via cookies for
            cross-context behavioral advertising.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            3. Third-Party Cookies
          </h2>
          <p className="mt-3 leading-relaxed">
            Some cookies may be placed by third-party service providers we
            use to operate the Service, such as hosting, payment, and
            analytics providers. These third parties may use cookies in
            accordance with their own privacy and cookie policies, which we
            encourage you to review.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            4. Managing Cookies
          </h2>
          <p className="mt-3 leading-relaxed">
            Most web browsers let you control cookies through their
            settings, including blocking or deleting cookies. Because
            cookies allow the Service to function properly, disabling or
            deleting certain cookies may affect the availability or
            functionality of parts of the Service. You can find instructions
            for managing cookies in your browser&rsquo;s help documentation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            5. Changes to This Policy
          </h2>
          <p className="mt-3 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect
            changes in the cookies we use or for legal reasons. Changes are
            effective as soon as the updated policy is posted on this page,
            with the &ldquo;Last updated&rdquo; date revised accordingly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            6. Contact Us
          </h2>
          <p className="mt-3 leading-relaxed">
            If you have questions about this Cookie Policy, contact us at{" "}
            <a
              href="mailto:privacy@aimakersacademy.com"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              privacy@aimakersacademy.com
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
        See also our{" "}
        <Link
          href="/privacy-policy"
          className="font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
}
