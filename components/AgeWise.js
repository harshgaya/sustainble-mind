import { LuSparkles, LuLayers, LuRocket } from "react-icons/lu";

const levels = [
  {
    level: "Level 1",
    age: "7 - 9",
    icon: LuSparkles,
    track: "Feel + Pause",
    desc: "Children learn to name what they feel, and to take one breath before doing anything about it. The smallest of starts, but the most important one.",
    color: "bg-coral text-cream",
    soft: "bg-coral-soft/40",
    border: "border-coral/30",
  },
  {
    level: "Level 2",
    age: "10 - 12",
    icon: LuLayers,
    track: "Understand + Manage",
    desc: "We add a layer. Why does this feeling come? What sets it off? What helps it pass? Children become observers of their own inner weather.",
    color: "bg-amber text-ink",
    soft: "bg-amber-soft/40",
    border: "border-amber/40",
    featured: true,
  },
  {
    level: "Level 3",
    age: "13 - 15",
    icon: LuRocket,
    track: "Choose + Act",
    desc: "By the teen years, the work becomes about agency. Knowing what you feel, knowing why, and choosing your response, even when peers, screens, and stress pull the other way.",
    color: "bg-teal text-cream",
    soft: "bg-teal-soft/50",
    border: "border-teal/30",
  },
];

export default function AgeWise() {
  return (
    <section id="ages" className="section bg-cream-deep">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow justify-center">Age-wise learning</span>
          <h2 className="display mt-5 text-4xl md:text-6xl leading-[1] tracking-tight">
            Three levels.
            <br />
            <span className="italic text-coral">Same loop, deepening.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {levels.map((lv) => {
            const Icon = lv.icon;
            return (
              <article
                key={lv.level}
                className={`relative rounded-[28px] bg-white p-8 md:p-9 border-2 ${
                  lv.featured ? "border-amber" : "border-ink/5"
                } ${lv.featured ? "md:-translate-y-4" : ""} transition-transform hover:-translate-y-1`}
              >
                {lv.featured && (
                  <span className="absolute -top-3 right-6 bg-amber text-ink text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">
                    Most schools start here
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${lv.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-soft/60">
                    {lv.level}
                  </span>
                </div>

                <div className={`mt-8 inline-block ${lv.soft} ${lv.border} border rounded-full px-3 py-1`}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
                    Ages
                  </span>
                </div>
                <div className="display text-7xl md:text-8xl mt-2 tracking-tighter leading-none">
                  {lv.age}
                </div>

                <div className="mt-6 pt-6 border-t border-ink/10">
                  <h3 className="display text-2xl text-ink leading-tight">{lv.track}</h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">{lv.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
