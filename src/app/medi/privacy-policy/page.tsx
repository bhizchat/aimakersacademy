import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medi Privacy Policy — AI Makers Academy",
  description:
    "Learn how the Medi app collects, uses, and protects your health information.",
};

const lastUpdated = "September 26, 2026";

export default function MediPrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Medi Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>

      <div className="prose-legal mt-10 space-y-10 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-slate-900">
            1. Information We Collect
          </h2>
          <p className="mt-3 leading-relaxed">
            We collect the information you provide during onboarding, such
            as your name, date of birth, country, health conditions,
            allergies, medications, and routine preferences, in order to
            provide Medi&apos;s core features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            2. How We Use Your Information
          </h2>
          <p className="mt-3 leading-relaxed">
            Your health profile is used to personalize medication reminders
            and to generate daily routines, including routines created with
            the help of an AI service. We do not sell your personal
            information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            3. AI Processing
          </h2>
          <p className="mt-3 leading-relaxed">
            When you ask Medi to help create a routine, relevant onboarding
            details are sent securely to a third-party AI provider to
            generate suggested routine tasks. This data is used only to
            generate your routine and is not used to train the AI
            provider&apos;s models.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            4. Data Storage &amp; Security
          </h2>
          <p className="mt-3 leading-relaxed">
            Your data is stored securely using Firebase Authentication and
            Firestore. Access to your data is restricted to your
            authenticated account. We use industry-standard measures to help
            protect your information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            5. Data Retention &amp; Deletion
          </h2>
          <p className="mt-3 leading-relaxed">
            We retain your data for as long as your account is active. You
            may request deletion of your account and associated data at any
            time through the app&apos;s support channel.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            6. Sharing of Information
          </h2>
          <p className="mt-3 leading-relaxed">
            We do not share your personal health information with third
            parties except as necessary to provide the app&apos;s
            functionality (such as the AI routine generation feature
            described above) or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            7. Your Choices
          </h2>
          <p className="mt-3 leading-relaxed">
            You may decline to use the AI routine generation feature and
            build your routine manually instead. You can also choose not to
            provide certain optional information during onboarding.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            8. Changes to This Policy
          </h2>
          <p className="mt-3 leading-relaxed">
            We may update this Privacy Policy from time to time. Continued
            use of the app after changes take effect constitutes acceptance
            of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">9. Contact</h2>
          <p className="mt-3 leading-relaxed">
            If you have questions about this Privacy Policy or your data,
            please contact us:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
            <li>
              <span className="font-semibold text-slate-900">WhatsApp:</span>{" "}
              <Link
                href="https://wa.me/2349134333745"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:text-teal-800"
              >
                Message us on WhatsApp
              </Link>
            </li>
            <li>
              <span className="font-semibold text-slate-900">Email:</span>{" "}
              <Link
                href="mailto:victoredochie10@gmail.com?subject=Medi%20Privacy%20Policy"
                className="font-semibold text-teal-700 hover:text-teal-800"
              >
                victoredochie10@gmail.com
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <p className="mt-14 text-center text-sm text-slate-500">
        Medi is a product of{" "}
        <Link href="/" className="font-semibold text-teal-700 hover:text-teal-800">
          AI Makers Academy
        </Link>{" "}
        — Africa&apos;s practical AI academy, built for the world.
      </p>
    </div>
  );
}
