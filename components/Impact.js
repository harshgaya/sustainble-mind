import { LuHeart, LuFocus, LuScale, LuShield } from "react-icons/lu";

const outcomes = [
  {
    icon: LuHeart,
    title: "Emotional intelligence",
    desc: "Naming what they feel before reacting to it.",
  },
  {
    icon: LuFocus,
    title: "Focus & discipline",
    desc: "Sustained attention without forcing it.",
  },
  {
    icon: LuScale,
    title: "Better decision making",
    desc: "Pause, weigh, choose, instead of impulse.",
  },
  {
    icon: LuShield,
    title: "Resilience & inner strength",
    desc: "Bounce back, instead of bottling up.",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="section bg-ink text-cream relative overflow-hidden">
      {/* Decorative arc */}
      <div
        aria-hidden="true"
        className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[140%] aspect-square rounded-full border border-cream/5"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[110%] aspect-square rounded-full border border-cream/5"
      />

      <div className="container-x relative">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber">
              <span className="h-px w-6 bg-amber" />
              Impact
            </span>
            <h2 className="display mt-5 text-5xl md:text-7xl leading-[0.95] tracking-tight text-cream">
              What changes,
              <br />
              <span className="italic text-amber">over time.</span>
            </h2>
          </div>

          <div className="md:col-span-6">
            <p className="text-lg text-cream/70 leading-relaxed max-w-md">
              These aren't slogans. They're the four shifts we measure across every cohort, in
              both teacher observations and student self-reports.
            </p>
          </div>
        </div>

        {/* Stat row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-b border-cream/10 py-10">
          {[
            { num: "94%", label: "students report better focus" },
            { num: "3x", label: "longer attention in class" },
            { num: "12wk", label: "to first measurable shift" },
            { num: "7-15", label: "age range supported" },
          ].map((s) => (
            <div key={s.label}>
              <div className="display text-4xl md:text-5xl text-cream tracking-tight">{s.num}</div>
              <div className="mt-1.5 text-xs uppercase tracking-widest text-cream/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Outcomes */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((o, i) => {
            const Icon = o.icon;
            return (
              <div
                key={o.title}
                className="rounded-3xl bg-cream/5 backdrop-blur border border-cream/10 p-7 hover:bg-cream/10 transition-colors"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber text-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="display mt-5 text-xl text-cream leading-tight">{o.title}</h3>
                <p className="mt-2 text-sm text-cream/60 leading-relaxed">{o.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
