export type ApplicationStatus = "pending" | "accepted" | "rejected";

export interface Application {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  phone: string | null;
  course_slug: string | null;
  status: ApplicationStatus;
  school_id: string | null;
  created_at: string;
  accepted_at: string | null;
}
