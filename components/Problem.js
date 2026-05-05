import { LuBrainCircuit, LuFlame, LuTarget, LuUsers } from "react-icons/lu";

const problems = [
  { icon: LuBrainCircuit, title: "Overthinking & stress", note: "A constant loop they can't escape" },
  { icon: LuFlame, title: "Anger, fear, distraction", note: "Reactions before thought" },
  { icon: LuTarget, title: "No focus, no discipline", note: "Pulled in every direction" },
  { icon: LuUsers, title: "Peer pressure & confusion", note: "Identity built on others" },
];

export default function Problem() {
  return (
    <section id="problem" className="section bg-cream">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Left: heading */}
          <div className="md:col-span-5 md:sticky md:top-32 self-start">
            <span className="eyebrow">The problem</span>
            <h2 className="display mt-5 text-4xl md:text-6xl leading-[1] tracking-tight">
              They're taught
              <br />
              <span className="italic squiggle-coral">subjects.</span>
              <br />
              <span className="text-teal">Not their mind.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink-soft max-w-md leading-relaxed">
              By the time most kids reach high school, they've memorised periodic tables and
              algebraic identities, but no one has shown them what to do when they feel
              overwhelmed.
            </p>
          </div>

          {/* Right: problem grid */}
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-5">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`soft-card p-7 ${i % 2 === 1 ? "sm:translate-y-10" : ""}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-soft/60 text-coral">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="display text-3xl text-ink/15">0{i + 1}</span>
                  </div>
                  <h3 className="display text-xl text-ink leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft/80">{p.note}</p>
                </div>
              );
            })}

            {/* Pull quote spanning both columns */}
            <div className="sm:col-span-2 mt-4 rounded-[28px] bg-teal text-cream p-8 md:p-10 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -top-10 -right-10 w-44 h-44 dot-grid-dense opacity-30"
                style={{ filter: "invert(1)" }}
              />
              <p className="display text-2xl md:text-3xl leading-tight relative z-10">
                "Students are taught what to know, but not{" "}
                <span className="text-amber italic">how to handle</span> what they feel."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
