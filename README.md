# AI Makers Academy

AI Makers Academy is an online school for learning to build with AI. It's a
Next.js (App Router + TypeScript + Tailwind CSS) web application modeled after
edX's course-marketplace layout: a hero section, featured courses, a full
course catalog, and individual course detail pages.

## Courses

- AI Coding for iPhone Apps
- AI Coding for Android Apps
- AI Coding for Web Applications
- AI Coding for Video Games
- AI Video Creation

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Server Components)
- TypeScript
- Tailwind CSS v4
- [lucide-react](https://lucide.dev/) for icons

## Project Structure

```
src/
  app/
    layout.tsx          Root layout (Navbar + Footer wrapper)
    page.tsx             Home page (hero, course grid, formats, CTA)
    courses/
      page.tsx            Course catalog (all courses)
      [slug]/page.tsx      Individual course detail page
  components/
    Navbar.tsx
    Footer.tsx
    CourseCard.tsx
  data/
    courses.ts            Course content (single source of truth)
  lib/
    course-icons.ts        Maps course "icon" field to a lucide-react icon
  types/
    course.ts              Course TypeScript types
```

To add or edit a course, update [src/data/courses.ts](src/data/courses.ts) —
every page (home, catalog, and detail pages) is generated from that file.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the project
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Notes

- The navbar currently uses a placeholder logo mark (a gradient square icon).
  Swap it out in [src/components/Navbar.tsx](src/components/Navbar.tsx) once
  the real AI Makers Academy logo is ready.
- "Sign In" and "Enroll Now" links are placeholders — no auth or payments are
  wired up yet.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
