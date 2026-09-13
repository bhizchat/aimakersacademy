import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer — AI Makers Academy",
  description:
    "Important disclaimers regarding AI Makers Academy's website, AI-assisted content, courses, and outcomes.",
};

const lastUpdated = "September 11, 2026";

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Disclaimer
      </h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>

      <div className="prose-legal mt-10 space-y-10 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-slate-900">
            1. General Information Only
          </h2>
          <p className="mt-3 leading-relaxed">
            The information provided on this website and through AI Makers
            Academy&rsquo;s courses, cohorts, and communications
            (collectively, the &ldquo;Service&rdquo;) is for general
            educational and informational purposes only. It is not a
            substitute for professional advice, and you should not act or
            refrain from acting based on information from the Service
            without seeking independent professional guidance where
            appropriate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            2. AI-Generated &amp; AI-Assisted Content
          </h2>
          <p className="mt-3 leading-relaxed">
            This website, including portions of its design, code, and
            written content, was built and/or is maintained with the
            assistance of artificial intelligence (AI) tools. Course
            materials may also reference or be assisted by AI. AI-generated
            or AI-assisted content can be incomplete, outdated, or
            inaccurate. We do not warrant the accuracy, reliability, or
            completeness of any AI-assisted content on the Service, and you
            should independently verify any information that is important
            to you before relying on it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            3. No Professional, Legal, or Financial Advice
          </h2>
          <p className="mt-3 leading-relaxed">
            Nothing on the Service constitutes legal, financial, tax,
            medical, or other professional advice. You should consult a
            qualified professional before making decisions based on content
            from the Service, including decisions related to your career,
            business, or finances.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            4. No Guarantee of Results
          </h2>
          <p className="mt-3 leading-relaxed">
            AI Makers Academy does not guarantee that you will achieve any
            particular outcome, including employment, income, business
            success, or a specific skill level, as a result of taking a
            course, joining a cohort, or completing a capstone project.
            Any results, testimonials, or examples shared on the Service
            reflect individual experiences and effort, and past results do
            not guarantee future outcomes. Your results will depend on
            factors outside our control, including your effort, background,
            and market conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            5. Third-Party AI Tools &amp; Services
          </h2>
          <p className="mt-3 leading-relaxed">
            Our courses teach you to use third-party AI tools and platforms
            (such as AI coding assistants and large language models). These
            tools are owned and operated by third parties, and we have no
            control over their availability, pricing, output quality, or
            terms of service. Any code, content, or output generated using
            third-party AI tools during our courses is provided &ldquo;as
            is,&rdquo; and you are responsible for reviewing, testing, and
            validating anything you build before relying on it or
            deploying it to production or to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            6. External Links
          </h2>
          <p className="mt-3 leading-relaxed">
            The Service may contain links to third-party websites or
            resources. We do not endorse and are not responsible for the
            content, accuracy, or practices of any linked third-party
            website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            7. Limitation of Liability
          </h2>
          <p className="mt-3 leading-relaxed">
            To the fullest extent permitted by law, AI Makers Academy and
            its affiliates, instructors, and partners are not liable for any
            loss or damage arising from your reliance on information or
            content available through the Service. This Disclaimer should
            be read together with our{" "}
            <Link
              href="/terms-of-service"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Terms of Service
            </Link>
            , which contains additional limitations of liability that apply
            to your use of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            8. Changes to This Disclaimer
          </h2>
          <p className="mt-3 leading-relaxed">
            We may update this Disclaimer from time to time. Changes are
            effective as soon as the updated version is posted on this
            page, with the &ldquo;Last updated&rdquo; date revised
            accordingly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            9. Contact Us
          </h2>
          <p className="mt-3 leading-relaxed">
            If you have questions about this Disclaimer, contact us at{" "}
            <a
              href="mailto:legal@aimakersacademy.com"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              legal@aimakersacademy.com
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
        </Link>{" "}
        and{" "}
        <Link
          href="/terms-of-service"
          className="font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Terms of Service
        </Link>
        .
      </div>
    </div>
  );
}
