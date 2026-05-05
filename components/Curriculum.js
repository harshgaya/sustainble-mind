import { GiLotus } from "react-icons/gi";

export default function Curriculum() {
  return (
    <section className="section bg-sage-soft/40 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal/20 to-transparent"
      />

      <div className="container-x relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-teal">
            <GiLotus className="h-4 w-4 text-coral" />
            The curriculum
          </span>

          <h2 className="display mt-8 text-5xl md:text-7xl leading-[0.95] tracking-tight">
            A life skills curriculum,
            <br />
            <span className="italic text-coral">rooted in timeless wisdom.</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl mx-auto">
            We help students understand the architecture of their own mind, drawing on traditions
            that have studied it for thousands of years, and translating that into stories,
            activities, and small daily practices.
          </p>

          {/* Three pillars */}
          <div className="mt-14 grid sm:grid-cols-3 gap-4">
            {[
              { num: "1", label: "Understand the mind" },
              { num: "2", label: "Manage emotions" },
              { num: "3", label: "Act with clarity" },
            ].map((p) => (
              <div
                key={p.num}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-teal/10"
              >
                <span className="display text-5xl text-coral">{p.num}</span>
                <p className="mt-2 text-sm font-medium text-ink-soft">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
