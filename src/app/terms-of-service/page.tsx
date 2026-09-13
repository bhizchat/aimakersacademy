import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — AI Makers Academy",
  description:
    "Read the terms and conditions that govern your use of AI Makers Academy's courses, cohorts, and website.",
};

const lastUpdated = "September 11, 2026";

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>

      <div className="prose-legal mt-10 space-y-10 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-slate-900">
            1. Acceptance of Terms
          </h2>
          <p className="mt-3 leading-relaxed">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access
            to and use of the AI Makers Academy website, courses, cohorts,
            and related services (collectively, the &ldquo;Service&rdquo;).
            By accessing or using the Service, you agree to be bound by
            these Terms and our{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Privacy Policy
            </Link>
            . If you do not agree, do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            2. Description of Service
          </h2>
          <p className="mt-3 leading-relaxed">
            AI Makers Academy is an online school that provides self-paced
            and cohort-based courses teaching learners to build applications,
            games, and video content using AI tools. Course content,
            curriculum, pricing, and availability may change or be updated at
            any time without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            3. Eligibility &amp; Account Registration
          </h2>
          <p className="mt-3 leading-relaxed">
            You must be at least 13 years old (or the age of digital consent
            in your jurisdiction) to use the Service. If you create an
            account, you are responsible for maintaining the confidentiality
            of your login credentials and for all activity under your
            account. You agree to provide accurate and complete information
            when registering.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            4. Courses, Cohorts &amp; Enrollment
          </h2>
          <p className="mt-3 leading-relaxed">
            Enrollment in a course or cohort is confirmed upon successful
            payment (where applicable). Cohorts may have limited seats,
            fixed start dates, and specific attendance or participation
            expectations, all of which will be communicated at the time of
            enrollment. We reserve the right to reschedule, modify, or
            cancel a cohort due to insufficient enrollment or other
            operational reasons, in which case affected learners will be
            offered a transfer to a future cohort or a refund.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            5. Payments, Pricing &amp; Refunds
          </h2>
          <p className="mt-3 leading-relaxed">
            All prices are displayed in the currency indicated at checkout
            and are subject to change. Promotional or founding-cohort pricing
            is limited to the terms stated at the time of purchase and may
            not be combined with other offers. Unless otherwise stated for a
            specific course or cohort, refund requests submitted within 7
            days of purchase and before the course or cohort start date are
            eligible for a full refund. Refund requests made after a course
            or cohort has started are evaluated on a case-by-case basis. To
            request a refund, contact{" "}
            <a
              href="mailto:billing@aimakersacademy.com"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              billing@aimakersacademy.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            6. Intellectual Property
          </h2>
          <p className="mt-3 leading-relaxed">
            All course materials, videos, curriculum, branding, and other
            content made available through the Service are owned by AI
            Makers Academy or its licensors and are protected by
            intellectual property laws. You are granted a limited,
            non-transferable, non-exclusive license to access and use course
            materials for your personal, non-commercial learning purposes.
            You may not reproduce, distribute, publicly display, or create
            derivative works from course materials without our prior written
            consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            7. User Conduct
          </h2>
          <p className="mt-3 leading-relaxed">
            You agree not to: (a) share your account or course access with
            others; (b) copy, resell, or redistribute course content; (c)
            use the Service for any unlawful purpose; (d) interfere with or
            disrupt the Service or its security features; or (e) upload or
            transmit harmful code, or content that is abusive, infringing,
            or otherwise objectionable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            8. Projects Built with AI Tools
          </h2>
          <p className="mt-3 leading-relaxed">
            Our courses guide you in using third-party AI tools and services
            (such as AI coding assistants) to build projects. We do not
            control and are not responsible for the output, availability, or
            terms of third-party AI tools. You are responsible for reviewing
            and complying with the terms of any third-party tool or service
            you use during a course.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            9. AI-Assisted Website &amp; Content Disclaimer
          </h2>
          <p className="mt-3 leading-relaxed">
            Portions of this website and its content, including text, code,
            and visual assets, were generated or assisted using AI tools.
            While we take reasonable steps to review AI-assisted content,
            the Service is provided without warranty as to the accuracy,
            completeness, or reliability of any AI-generated or AI-assisted
            material, and such material should not be treated as
            professional, legal, financial, medical, or technical advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            10. No Professional Advice; No Guaranteed Outcomes
          </h2>
          <p className="mt-3 leading-relaxed">
            Course content is provided for educational purposes only and
            does not constitute professional, legal, financial, career, or
            business advice. Completing a course, cohort, or capstone
            project does not guarantee employment, income, business success,
            certification recognition by any third party, or any other
            specific outcome. Any examples, success stories, or testimonials
            referenced on the Service reflect individual experiences and are
            not a guarantee that you will achieve similar results.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            11. Third-Party Links &amp; Services
          </h2>
          <p className="mt-3 leading-relaxed">
            The Service may contain links to third-party websites or
            services that are not owned or controlled by AI Makers Academy.
            We are not responsible for the content, privacy policies, or
            practices of any third-party websites or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            12. Copyright &amp; DMCA Policy
          </h2>
          <p className="mt-3 leading-relaxed">
            We respect the intellectual property rights of others. If you
            believe content on the Service infringes your copyright, please
            send a written notice to{" "}
            <a
              href="mailto:dmca@aimakersacademy.com"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              dmca@aimakersacademy.com
            </a>{" "}
            that includes: (a) a description of the copyrighted work
            claimed to have been infringed; (b) the location of the
            allegedly infringing material on the Service; (c) your contact
            information; (d) a statement that you have a good-faith belief
            the use is not authorized by the copyright owner, its agent, or
            the law; and (e) a statement, made under penalty of perjury,
            that the information in the notice is accurate and that you are
            authorized to act on behalf of the copyright owner. We may
            remove or disable access to allegedly infringing material and
            may terminate accounts of repeat infringers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            13. Disclaimer of Warranties
          </h2>
          <p className="mt-3 leading-relaxed">
            The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis without warranties of any kind, whether
            express or implied, including but not limited to implied
            warranties of merchantability, fitness for a particular purpose,
            and non-infringement. We do not guarantee that the Service will
            be uninterrupted, error-free, or that completing a course will
            result in any particular outcome, job, or certification
            recognition.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            14. Limitation of Liability
          </h2>
          <p className="mt-3 leading-relaxed">
            To the fullest extent permitted by law, AI Makers Academy and its
            affiliates, instructors, and partners shall not be liable for any
            indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenues, arising from your
            use of the Service. Our total liability for any claim arising
            out of these Terms shall not exceed the amount you paid us in
            the twelve (12) months preceding the claim.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            15. Indemnification
          </h2>
          <p className="mt-3 leading-relaxed">
            You agree to indemnify and hold harmless AI Makers Academy and
            its affiliates, instructors, and partners from any claims,
            damages, losses, or expenses (including reasonable legal fees)
            arising from your use of the Service or violation of these
            Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            16. Dispute Resolution
          </h2>
          <p className="mt-3 leading-relaxed">
            If a dispute arises out of or relates to these Terms or the
            Service, you agree to first contact us at{" "}
            <a
              href="mailto:legal@aimakersacademy.com"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              legal@aimakersacademy.com
            </a>{" "}
            so we can attempt to resolve the dispute informally. If a
            dispute is not resolved within thirty (30) days, either party
            may pursue the dispute exclusively in the courts identified in
            Section 18 (Governing Law), or, where permitted by applicable
            law, through binding arbitration on an individual basis. To the
            extent permitted by applicable law, you agree that any dispute
            resolution proceedings will be conducted only on an individual
            basis and not in a class, consolidated, or representative
            action.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            17. Termination
          </h2>
          <p className="mt-3 leading-relaxed">
            We may suspend or terminate your access to the Service at any
            time, with or without notice, for conduct that we believe
            violates these Terms or is otherwise harmful to other users, us,
            or third parties. You may stop using the Service at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            18. Governing Law
          </h2>
          <p className="mt-3 leading-relaxed">
            These Terms are governed by and construed in accordance with the
            laws of the Federal Republic of Nigeria, without regard to its
            conflict of law principles. Any disputes arising under these
            Terms that are not resolved informally or through arbitration
            shall be resolved in the courts of Nigeria, without prejudice to
            any mandatory consumer-protection rights you may have in your
            country of residence.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            19. Miscellaneous
          </h2>
          <p className="mt-3 leading-relaxed">
            <span className="font-semibold text-slate-900">
              Entire Agreement.
            </span>{" "}
            These Terms, together with our Privacy Policy, Cookie Policy,
            and Disclaimer, constitute the entire agreement between you and
            AI Makers Academy regarding the Service.{" "}
            <span className="font-semibold text-slate-900">
              Severability.
            </span>{" "}
            If any provision of these Terms is found unenforceable, the
            remaining provisions will remain in full effect.{" "}
            <span className="font-semibold text-slate-900">No Waiver.</span>{" "}
            Our failure to enforce any right or provision of these Terms is
            not a waiver of that right.{" "}
            <span className="font-semibold text-slate-900">Assignment.</span>{" "}
            You may not assign or transfer these Terms; we may assign these
            Terms without restriction, including in connection with a
            merger, acquisition, or sale of assets.{" "}
            <span className="font-semibold text-slate-900">
              Force Majeure.
            </span>{" "}
            We are not liable for any failure or delay caused by events
            beyond our reasonable control, including outages, natural
            disasters, or third-party service failures.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            20. Changes to These Terms
          </h2>
          <p className="mt-3 leading-relaxed">
            We may update these Terms from time to time. Material changes
            will be indicated by updating the &ldquo;Last updated&rdquo;
            date at the top of this page. Your continued use of the Service
            after changes are posted constitutes acceptance of the revised
            Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            21. Contact Us
          </h2>
          <p className="mt-3 leading-relaxed">
            If you have questions about these Terms, contact us at{" "}
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
