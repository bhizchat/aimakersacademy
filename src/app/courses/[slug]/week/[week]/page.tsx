import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { courses, getCourseBySlug } from "@/data/courses";
import { moduleIconMap } from "@/lib/course-icons";
import type { WeekBlock } from "@/types/course";

type Params = { slug: string; week: string };

export function generateStaticParams(): Params[] {
  return courses.flatMap((course) =>
    course.curriculum.map((_, index) => ({
      slug: course.slug,
      week: String(index + 1),
    }))
  );
}

function getWeekModule(slug: string, week: string) {
  const course = getCourseBySlug(slug);
  const weekNumber = Number(week);
  if (!course || !Number.isInteger(weekNumber)) return null;
  const module = course.curriculum[weekNumber - 1];
  if (!module) return null;
  return { course, module, weekNumber };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, week } = await params;
  const found = getWeekModule(slug, week);
  if (!found) return {};
  const { course, module, weekNumber } = found;
  return {
    title: `Week ${weekNumber}: ${module.title} — ${course.title} — AI Makers Academy`,
    description: module.subtitle ?? course.shortDescription,
  };
}

function Blocks({ blocks }: { blocks: WeekBlock[] }) {
  return (
    <div className="space-y-3">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index} className="text-sm leading-relaxed text-slate-300">
              {block.text}
            </p>
          );
        }
        if (block.type === "bullets") {
          return (
            <ul key={index} className="space-y-2">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="border-l-2 border-indigo-500 pl-4 text-sm italic text-slate-300"
            >
              &ldquo;{block.text}&rdquo;
            </blockquote>
          );
        }
        if (block.type === "workflow") {
          return (
            <p
              key={index}
              className="rounded-lg bg-indigo-500/10 px-4 py-3 text-center text-sm font-bold tracking-wide text-indigo-300"
            >
              {block.text}
            </p>
          );
        }
        if (block.type === "checklist") {
          return (
            <ul key={index} className="grid gap-2 sm:grid-cols-2">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "numbered") {
          return (
            <ol key={index} className="space-y-3">
              {block.items.map((item, itemIndex) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-bold text-indigo-300">
                    {itemIndex + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-400">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          );
        }
        return null;
      })}
    </div>
  );
}

export default async function WeekDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, week } = await params;
  const found = getWeekModule(slug, week);
  if (!found) notFound();
  const { course, module, weekNumber } = found;

  const ModuleIconComponent = moduleIconMap[module.icon];
  const totalWeeks = course.curriculum.length;
  const prevWeek = weekNumber > 1 ? weekNumber - 1 : null;
  const nextWeek = weekNumber < totalWeeks ? weekNumber + 1 : null;

  return (
    <div className="bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href={`/courses/${course.slug}#curriculum`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Curriculum
        </Link>

        <div className="mt-6 flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
            <ModuleIconComponent className="h-7 w-7" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
              Week {weekNumber} of {totalWeeks}
            </p>
            <h1 className="mt-1 text-2xl font-extrabold leading-tight sm:text-3xl">
              {module.title}
            </h1>
          </div>
        </div>

        {module.subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            {module.subtitle}
          </p>
        )}

        {module.note && (
          <p className="mt-4 rounded-xl border border-amber-400/30 bg-amber-500/10 p-4 text-sm text-amber-200">
            {module.note}
          </p>
        )}

        {module.learnItems && module.learnItems.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-extrabold text-white">
              What You&apos;ll Learn
            </h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {module.learnItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {module.sections?.map((section) => (
          <section
            key={section.heading}
            className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-xl font-extrabold text-white">
              {section.heading}
            </h2>
            {section.title && (
              <p className="mt-1 text-lg font-bold text-indigo-300">
                {section.title}
              </p>
            )}
            <div className="mt-4">
              <Blocks blocks={section.blocks} />
            </div>
          </section>
        ))}

        {module.outcome && (
          <section className="mt-8 rounded-2xl bg-linear-to-br from-sky-500 to-purple-600 p-6 text-white">
            <h2 className="text-xl font-extrabold">
              {module.outcome.heading}
            </h2>
            <div className="mt-3">
              <Blocks blocks={module.outcome.blocks} />
            </div>
          </section>
        )}

        {module.deliverable && (
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            <CheckCircle2 className="h-4 w-4" />
            Deliverable: {module.deliverable}
          </div>
        )}

        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          {prevWeek ? (
            <Link
              href={`/courses/${course.slug}/week/${prevWeek}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Week {prevWeek}
            </Link>
          ) : (
            <span />
          )}
          {nextWeek ? (
            <Link
              href={`/courses/${course.slug}/week/${nextWeek}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
            >
              Week {nextWeek}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              href={`/courses/${course.slug}#curriculum`}
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Back to Course
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
