import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — BusinessOS",
  description:
    "Learn how the BusinessOS app collects, uses, and protects your business information.",
};

const effectiveDate = "October 8, 2026";

export default function BusinessOSPrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500">Effective: {effectiveDate}</p>

      <div className="prose-legal mt-10 space-y-10 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-slate-900">
            1. Information We Collect
          </h2>
          <p className="mt-3 leading-relaxed">
            We collect the account details you provide (name, email, phone
            number), the business data you record (sales, inventory,
            expenses, customers, invoices), and messages you send to the AI
            assistant, including any photos you choose to attach.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            2. How We Use Your Information
          </h2>
          <p className="mt-3 leading-relaxed">
            We use your information to operate BusinessOS&apos;s core
            features: recording your business activity, generating dashboard
            insights and notifications, powering the AI assistant, and
            providing customer support.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            3. AI Processing
          </h2>
          <p className="mt-3 leading-relaxed">
            Messages and photos you send to the AI assistant are processed
            by our AI provider to interpret your request and return a
            response. We send only what&apos;s needed to answer your request
            and never use your business data to train third-party models.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            4. Data Storage &amp; Security
          </h2>
          <p className="mt-3 leading-relaxed">
            Your data is stored using Firebase (Google Cloud) with access
            restricted to your authenticated account. We use
            industry-standard practices to protect your data, but no method
            of transmission or storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            5. Push Notifications
          </h2>
          <p className="mt-3 leading-relaxed">
            If you enable push notifications, we use your device&apos;s push
            token solely to deliver business alerts and summaries
            you&apos;ve opted into. You can disable push notifications at any
            time in Notification Preferences.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            6. Sharing of Information
          </h2>
          <p className="mt-3 leading-relaxed">
            We don&apos;t sell your personal or business data. We share data
            only with service providers that help us run BusinessOS (such as
            our cloud hosting and AI providers), or when required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            7. Data Retention
          </h2>
          <p className="mt-3 leading-relaxed">
            We retain your data for as long as your account is active. If
            you delete your account, your business records are removed from
            our systems, except where retention is required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">8. Your Rights</h2>
          <p className="mt-3 leading-relaxed">
            You can access, update or delete your business records directly
            within the app, and you can permanently delete your account and
            data from Settings at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            9. Children&apos;s Privacy
          </h2>
          <p className="mt-3 leading-relaxed">
            BusinessOS is not directed at children under 18 and we
            don&apos;t knowingly collect their data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            10. Changes to This Policy
          </h2>
          <p className="mt-3 leading-relaxed">
            We may update this Privacy Policy from time to time. We&apos;ll
            let you know of material changes through the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            11. Contact Us
          </h2>
          <p className="mt-3 leading-relaxed">
            Questions about this Privacy Policy? Reach us at{" "}
            <Link
              href="mailto:victoredochie10@gmail.com?subject=BusinessOS%20Privacy%20Policy"
              className="font-semibold text-[#2F6FE4] hover:text-blue-700"
            >
              victoredochie10@gmail.com
            </Link>{" "}
            or{" "}
            <Link
              href="tel:+2349134333745"
              className="font-semibold text-[#2F6FE4] hover:text-blue-700"
            >
              +234 913 433 3745
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
