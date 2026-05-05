import { LuEye, LuLightbulb, LuCompass } from "react-icons/lu";

const steps = [
  {
    n: "01",
    icon: LuEye,
    word: "Feel",
    headline: "Recognize the emotion",
    body: "We start where most adults can't even start. Naming what's happening inside, in plain words, without judgement.",
    accent: "bg-coral text-cream",
    soft: "bg-coral-soft/40",
  },
  {
    n: "02",
    icon: LuLightbulb,
    word: "Understand",
    headline: "Know why you feel it",
    body: "Behind every emotion is a cause. We help students trace the thread, this thought, that situation, this expectation, until the feeling makes sense.",
    accent: "bg-amber text-ink",
    soft: "bg-amber-soft/50",
  },
  {
    n: "03",
    icon: LuCompass,
    word: "Choose",
    headline: "Respond, don't react",
    body: "Once they can see and name and trace, choice becomes possible. They stop being driven by mood and start steering.",
    accent: "bg-teal text-cream",
    soft: "bg-teal-soft/50",
  },
];

export default function Solution() {
  return (
    <section className="section bg-cream-deep">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow justify-center">Our solution</span>
          <h2 className="display mt-5 text-4xl md:text-6xl leading-[1] tracking-tight">
            Three small words.
            <br />
            <span className="italic text-coral">Used a thousand times.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-soft">
            The whole curriculum sits on one repeating loop. Once it lands, it never leaves.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6 md:gap-4 relative">
          {/* Connecting line behind cards on desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-20 left-[16%] right-[16%] h-px border-t-2 border-dashed border-ink/20"
          />

          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative">
                <div
                  className={`relative ${s.soft} rounded-[28px] p-8 md:p-9 h-full border border-ink/5`}
                >
                  {/* Number badge */}
                  <div
                    className={`absolute -top-5 left-8 ${s.accent} display text-sm font-bold tracking-wider px-4 py-1.5 rounded-full`}
                  >
                    Step {s.n}
                  </div>

                  <div className="flex items-start justify-between mb-8">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${s.accent}`}
                    >
                      <Icon className="h-7 w-7" />
                    </span>
                  </div>

                  <h3 className="display text-5xl md:text-6xl tracking-tight leading-none">
                    {s.word}
                    <span className="text-ink/30">.</span>
                  </h3>
                  <p className="mt-3 text-base font-semibold text-ink">{s.headline}</p>
                  <p className="mt-4 text-sm text-ink-soft leading-relaxed">{s.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
