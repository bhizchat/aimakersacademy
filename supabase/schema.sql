-- Run this once in the Supabase SQL editor (Project → SQL Editor → New query).
-- Applications table: applicants sign up with email/password (stored securely
-- in Supabase Auth), and this table tracks their cohort application, status,
-- and the School ID issued once they're accepted.

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users (id) on delete cascade,
  full_name text not null,
  email text not null,
  phone text,
  course_slug text,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'rejected')),
  school_id text unique,
  created_at timestamptz not null default now(),
  accepted_at timestamptz
);

create index if not exists applications_status_idx on public.applications (status);

alter table public.applications enable row level security;

-- All reads/writes from the app happen through the server using the Supabase
-- service role key (which bypasses RLS), so no public policies are required.
-- This policy only exists so that, if the anon/authenticated key is ever used
-- directly, a user can at most read their own application row.
create policy "Users can view their own application"
  on public.applications
  for select
  to authenticated
  using (auth.uid() = user_id);
