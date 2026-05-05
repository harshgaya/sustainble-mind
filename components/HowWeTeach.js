const steps = [
  {
    n: "01",
    title: "A real-life story",
    desc: "Every session opens with a story they can taste, a kid like them, in a situation they've lived through.",
  },
  {
    n: "02",
    title: "Emotion identification",
    desc: "We pause the story. What is the character feeling, exactly? Is it anger, or hurt? Is it fear, or shame? They learn the difference.",
  },
  {
    n: "03",
    title: "Reaction awareness",
    desc: "What did the character do, automatically? They start to see their own automatic reactions in the mirror.",
  },
  {
    n: "04",
    title: "Consequence understanding",
    desc: "What happened next, because of that reaction? Cause and effect, drawn out, made visible.",
  },
  {
    n: "05",
    title: "Guidance and practice",
    desc: "What could the character have done instead? They try it, in small role plays, until it feels possible in real life.",
  },
];

export default function HowWeTeach() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 md:sticky md:top-32 self-start">
            <span className="eyebrow">How we teach</span>
            <h2 className="display mt-5 text-4xl md:text-5xl leading-[1] tracking-tight">
              The shape of
              <br />
              <span className="italic text-coral">every session.</span>
            </h2>
            <p className="mt-6 text-base text-ink-soft leading-relaxed">
              Five moves, repeated week after week. Predictable enough to feel safe, varied enough
              to never feel stale.
            </p>
          </div>

          <div className="md:col-span-8 relative">
            {/* Vertical timeline rail */}
            <div
              aria-hidden="true"
              className="absolute left-[24px] md:left-[28px] top-2 bottom-2 w-px bg-gradient-to-b from-coral via-amber to-teal"
            />

            <ol className="space-y-10">
              {steps.map((s) => (
                <li key={s.n} className="relative flex gap-5 md:gap-7">
                  <div className="relative flex-shrink-0">
                    <span className="relative z-10 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-ink text-cream display text-sm font-bold">
                      {s.n}
                    </span>
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="display text-2xl md:text-3xl text-ink leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-base text-ink-soft leading-relaxed max-w-xl">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
