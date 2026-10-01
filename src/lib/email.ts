import "server-only";
import { Resend } from "resend";

const FROM_ADDRESS =
  process.env.EMAIL_FROM ?? "AI Makers Academy <onboarding@resend.dev>";
const ADMIN_NOTIFICATION_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function sendAdminNewApplicationEmail(params: {
  fullName: string;
  email: string;
  courseSlug: string | null;
}) {
  const resend = getResendClient();
  if (!resend || !ADMIN_NOTIFICATION_EMAIL) {
    console.warn(
      "[email] RESEND_API_KEY or ADMIN_NOTIFICATION_EMAIL not set — skipping admin notification email."
    );
    return;
  }

  await resend.emails.send({
    from: FROM_ADDRESS,
    to: ADMIN_NOTIFICATION_EMAIL,
    subject: `New cohort application: ${params.fullName}`,
    html: `
      <p>A new application was submitted on AI Makers Academy.</p>
      <ul>
        <li><strong>Name:</strong> ${params.fullName}</li>
        <li><strong>Email:</strong> ${params.email}</li>
        <li><strong>Course:</strong> ${params.courseSlug ?? "Not specified"}</li>
      </ul>
      <p><a href="${SITE_URL}/admin">Review applications</a></p>
    `,
  });
}

export async function sendAcceptanceEmail(params: {
  to: string;
  fullName: string;
  schoolId: string;
}) {
  const resend = getResendClient();
  if (!resend) {
    console.warn(
      "[email] RESEND_API_KEY not set — skipping acceptance email. School ID:",
      params.schoolId
    );
    return;
  }

  await resend.emails.send({
    from: FROM_ADDRESS,
    to: params.to,
    subject: "You're accepted into AI Makers Academy! 🎉",
    html: `
      <p>Hi ${params.fullName},</p>
      <p>Congratulations — your application to AI Makers Academy has been <strong>accepted</strong>!</p>
      <p>Your School ID is:</p>
      <p style="font-size: 20px; font-weight: bold; letter-spacing: 1px;">${params.schoolId}</p>
      <p>Use this School ID along with the email and password you applied with to sign in to your student portal:</p>
      <p><a href="${SITE_URL}/login">${SITE_URL}/login</a></p>
      <p>Welcome aboard!<br />AI Makers Academy</p>
    `,
  });
}

export async function sendRejectionEmail(params: {
  to: string;
  fullName: string;
}) {
  const resend = getResendClient();
  if (!resend) {
    console.warn(
      "[email] RESEND_API_KEY not set — skipping rejection email."
    );
    return;
  }

  await resend.emails.send({
    from: FROM_ADDRESS,
    to: params.to,
    subject: "Your AI Makers Academy application",
    html: `
      <p>Hi ${params.fullName},</p>
      <p>Thank you for applying to AI Makers Academy. After review, we're unable to offer you a spot in this cohort.</p>
      <p>We'd love for you to apply again for a future cohort.</p>
      <p>AI Makers Academy</p>
    `,
  });
}
