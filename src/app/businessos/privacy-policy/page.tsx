import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BusinessOS Privacy Policy — AI Makers Academy",
  description:
    "Learn how the BusinessOS app collects, uses, and protects your business information.",
};

const lastUpdated = "October 10, 2026";

export default function BusinessOSPrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        BusinessOS Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>

      <div className="prose-legal mt-10 space-y-10 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-slate-900">
            1. Information We Collect
          </h2>
          <p className="mt-3 leading-relaxed">
            We collect the information you provide while using BusinessOS,
            such as your name, business name, and the sales, expenses,
            inventory, customer, and invoice records you create, in order to
            provide the app&apos;s core features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            2. How We Use Your Information
          </h2>
          <p className="mt-3 leading-relaxed">
            Your business data is used to generate your daily insights,
            notifications, and reports, including summaries created with the
            help of an AI service. We do not sell your personal or business
            information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            3. AI Processing
          </h2>
          <p className="mt-3 leading-relaxed">
            When you use the AI Business Assistant — for example, to log an
            expense from a photo of a receipt or ask a question about your
            business — relevant data is sent securely to a third-party AI
            provider to generate a response. This data is used only to
            assist you and is not used to train the AI provider&apos;s
            models.
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
            We do not share your personal or business information with third
            parties except as necessary to provide the app&apos;s
            functionality (such as the AI processing described above) or as
            required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            7. Your Choices
          </h2>
          <p className="mt-3 leading-relaxed">
            You may decline to use the AI Business Assistant and manage your
            sales, expenses, inventory, customers, and invoices manually
            instead.
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
              <span className="font-semibold text-slate-900">Email:</span>{" "}
              <Link
                href="mailto:victoredochie10@gmail.com?subject=BusinessOS%20Privacy%20Policy"
                className="font-semibold text-[#2F6FE4] hover:text-blue-700"
              >
                victoredochie10@gmail.com
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <p className="mt-14 text-center text-sm text-slate-500">
        BusinessOS is a product of{" "}
        <Link href="/" className="font-semibold text-[#2F6FE4] hover:text-blue-700">
          AI Makers Academy
        </Link>{" "}
        — Africa&apos;s practical AI academy, built for the world.
      </p>
    </div>
  );
}
