import { LuCalendarDays, LuPalette, LuBookOpen, LuLeaf } from "react-icons/lu";

const items = [
  {
    icon: LuCalendarDays,
    badge: "Weekly",
    title: "1 session per week",
    desc: "40 to 50 minute sessions, designed to fit cleanly into the school timetable. Short enough to hold attention, long enough to actually go somewhere.",
    color: "bg-amber-soft/50 text-amber",
  },
  {
    icon: LuPalette,
    badge: "Hands-on",
    title: "Activity based, not theory",
    desc: "No textbooks. No memorising definitions. Every concept is taught through a game, a role play, a drawing, or a real situation the student walks through themselves.",
    color: "bg-coral-soft/50 text-coral",
  },
  {
    icon: LuBookOpen,
    badge: "Story-led",
    title: "Storytelling, reflection, interaction",
    desc: "Stories carry the lesson. Reflection turns it personal. Interaction makes it stick. The same loop, every session, with content that grows with the student.",
    color: "bg-teal-soft/60 text-teal",
  },
  {
    icon: LuLeaf,
    badge: "Growth",
    title: "No exams, only growth tracking",
    desc: "We don't test what they remember. We notice how they're changing, how they handle a frustration today versus six months ago, and we share that with parents and teachers.",
    color: "bg-sage-soft text-sage",
  },
];

export default function Format() {
  return (
    <section id="format" className="section bg-cream">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow">Program format</span>
          <h2 className="display mt-5 text-4xl md:text-6xl leading-[1] tracking-tight">
            Built for real classrooms,
            <br />
            <span className="italic text-coral">not lecture halls.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <article
                key={it.title}
                className={`soft-card p-8 md:p-10 ${i === 1 ? "md:translate-y-12" : ""} ${
                  i === 3 ? "md:translate-y-12" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${it.color}`}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/60">
                    {it.badge}
                  </span>
                </div>

                <h3 className="display mt-7 text-2xl md:text-3xl leading-tight text-ink">
                  {it.title}
                </h3>
                <p className="mt-4 text-base text-ink-soft leading-relaxed">{it.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
