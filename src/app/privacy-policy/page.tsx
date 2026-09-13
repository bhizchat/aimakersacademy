import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Makers Academy",
  description:
    "Learn how AI Makers Academy collects, uses, and protects your personal information.",
};

const lastUpdated = "September 11, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>

      <div className="prose-legal mt-10 space-y-10 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-slate-900">
            1. Introduction
          </h2>
          <p className="mt-3 leading-relaxed">
            AI Makers Academy (&ldquo;AI Makers Academy,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects
            your privacy and is committed to protecting the personal
            information you share with us. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when
            you visit our website, enroll in a course or cohort, or otherwise
            interact with our services (collectively, the
            &ldquo;Service&rdquo;). By using the Service, you agree to the
            collection and use of information in accordance with this
            policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            2. AI Disclosure
          </h2>
          <p className="mt-3 leading-relaxed">
            AI Makers Academy uses artificial intelligence (AI) tools as part
            of how we build and operate our business, including in the
            design, development, coding, and maintenance of this website,
            and in parts of our marketing copy and support content. Some
            text, code, and visual assets on the Service may have been
            generated or assisted by AI tools rather than written entirely
            by a human. We review AI-assisted content on a reasonable-effort
            basis, but we do not guarantee that it is complete, accurate, or
            error-free, and it should not be relied upon as professional,
            legal, financial, medical, or technical advice. If you believe
            any content on the Service is inaccurate, misleading, or
            infringes your rights, please contact us using the details in
            Section 14 (Contact Us).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            3. Information We Collect
          </h2>
          <p className="mt-3 leading-relaxed">
            We collect information in the following ways:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
            <li>
              <span className="font-semibold text-slate-900">
                Information you provide directly:
              </span>{" "}
              name, email address, phone number, payment details, and any
              other information you submit when creating an account,
              enrolling in a course or cohort, contacting support, or
              subscribing to communications.
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                Information collected automatically:
              </span>{" "}
              IP address, browser type, device information, pages visited,
              time spent on pages, and referring URLs, collected through
              cookies and similar tracking technologies.
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                Information from third parties:
              </span>{" "}
              information from payment processors, analytics providers, and
              other service providers we work with to operate the Service.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            4. How We Use Your Information
          </h2>
          <p className="mt-3 leading-relaxed">We use the information we collect to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
            <li>Provide, operate, and maintain the Service, including course enrollment and delivery.</li>
            <li>Process payments and manage cohort seats and enrollment.</li>
            <li>Communicate with you about your account, courses, cohorts, and support requests.</li>
            <li>Send marketing communications, which you may opt out of at any time.</li>
            <li>Monitor and analyze usage and trends to improve the Service.</li>
            <li>Detect, prevent, and address fraud, abuse, and technical issues.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            Where the GDPR applies to our processing of your personal
            information, our legal basis for processing depends on the
            context: your consent, the performance of a contract with you
            (such as delivering a course you enrolled in), our legitimate
            interests in operating, securing, and improving the Service, or
            compliance with a legal obligation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            5. Cookies &amp; Tracking Technologies
          </h2>
          <p className="mt-3 leading-relaxed">
            We use cookies and similar tracking technologies to operate and
            improve the Service, remember your preferences, and understand
            how visitors use our site. You can control cookies through your
            browser settings; disabling cookies may affect the functionality
            of the Service. For more detail on the categories of cookies we
            use and how to manage them, see our{" "}
            <Link
              href="/cookie-policy"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Cookie Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            6. How We Share Your Information
          </h2>
          <p className="mt-3 leading-relaxed">
            We do not sell your personal information. We may share your
            information with:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
            <li>Service providers who help us operate the Service (e.g., payment processors, hosting providers, analytics providers).</li>
            <li>Instructors or partners directly involved in delivering a course or cohort you have enrolled in.</li>
            <li>Law enforcement or regulators when required by law or to protect our rights and the safety of others.</li>
            <li>A successor entity in the event of a merger, acquisition, or sale of assets.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            7. Data Retention
          </h2>
          <p className="mt-3 leading-relaxed">
            We retain personal information for as long as necessary to
            provide the Service, comply with our legal obligations, resolve
            disputes, and enforce our agreements. When information is no
            longer needed, we securely delete or anonymize it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            8. Data Security
          </h2>
          <p className="mt-3 leading-relaxed">
            We implement reasonable technical and organizational measures
            designed to protect your information from unauthorized access,
            loss, misuse, or alteration. However, no method of transmission
            or storage is completely secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            9. Your Rights &amp; Choices
          </h2>
          <p className="mt-3 leading-relaxed">
            Depending on your location, you may have rights under applicable
            data protection laws, including the EU/UK General Data
            Protection Regulation (GDPR), the California Consumer Privacy
            Act as amended by the California Privacy Rights Act
            (CCPA/CPRA), and the Nigeria Data Protection Act, 2023 (NDPA).
            These rights may include the right to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
            <li>Access and receive a copy of the personal information we hold about you.</li>
            <li>Correct inaccurate or incomplete information.</li>
            <li>Request deletion of your personal information.</li>
            <li>Restrict or object to certain processing of your information.</li>
            <li>Receive your data in a structured, commonly used, portable format.</li>
            <li>Withdraw consent at any time, where processing is based on consent, without affecting processing carried out before withdrawal.</li>
            <li>Lodge a complaint with your local data protection authority (for example, the Nigeria Data Protection Commission, or your relevant EU/UK supervisory authority).</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            To exercise these rights, contact us using the details in
            Section 14. We will respond within the timeframe required by
            applicable law and may need to verify your identity before
            fulfilling certain requests.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            10. Do Not Sell or Share My Personal Information
          </h2>
          <p className="mt-3 leading-relaxed">
            We do not sell personal information, and we do not share
            personal information for cross-context behavioral advertising,
            as those terms are defined under the CCPA/CPRA. If this changes
            in the future, we will update this Policy and provide a
            mechanism for you to opt out.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            11. Children&rsquo;s Privacy
          </h2>
          <p className="mt-3 leading-relaxed">
            The Service is not directed to children under the age of 13 (or
            the applicable age of digital consent in your jurisdiction), and
            we do not knowingly collect personal information from children.
            If you believe a child has provided us with personal information,
            please contact us so we can take appropriate action.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            12. International Users &amp; Data Transfers
          </h2>
          <p className="mt-3 leading-relaxed">
            AI Makers Academy operates from Nigeria and processes personal
            information in accordance with the Nigeria Data Protection Act,
            2023 (NDPA), in addition to other applicable data protection
            laws such as the GDPR and CCPA/CPRA where they apply to you. We
            may process and store your information in countries other than
            the one in which you reside. By using the Service, you consent
            to the transfer of your information to these locations, which
            may have data protection laws different from those of your
            country. Where required, we take steps intended to ensure such
            transfers comply with applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            13. Changes to This Policy
          </h2>
          <p className="mt-3 leading-relaxed">
            We may update this Privacy Policy from time to time. Changes are
            effective as soon as the updated policy is posted on this page,
            with the &ldquo;Last updated&rdquo; date revised accordingly.
            Your continued use of the Service after changes are posted
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            14. Contact Us
          </h2>
          <p className="mt-3 leading-relaxed">
            If you have questions about this Privacy Policy or how we handle
            your information, contact us at{" "}
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
          href="/terms-of-service"
          className="font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Terms of Service
        </Link>
        ,{" "}
        <Link
          href="/cookie-policy"
          className="font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Cookie Policy
        </Link>
        , and{" "}
        <Link
          href="/disclaimer"
          className="font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Disclaimer
        </Link>
        .
      </div>
    </div>
  );
}

