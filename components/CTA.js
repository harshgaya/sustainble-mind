import { FiArrowRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function CTA() {
  return (
    <section id="cta" className="section bg-cream relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-amber-soft/30 blob-anim -z-10"
      />

      <div className="container-x relative">
        <div className="max-w-5xl mx-auto rounded-[36px] bg-ink text-cream p-10 md:p-16 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-72 h-72 dot-grid-dense opacity-20"
            style={{ filter: "invert(1)" }}
          />

          <div className="grid md:grid-cols-12 gap-10 items-end relative">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber">
                <HiSparkles className="h-4 w-4" />
                For schools and educators
              </span>
              <h2 className="display mt-5 text-4xl md:text-6xl leading-[0.95] tracking-tight text-cream">
                Bring sustainable mind
                <br />
                <span className="italic text-amber">to your classroom.</span>
              </h2>
              <p className="mt-6 text-lg text-cream/70 leading-relaxed max-w-lg">
                We pilot with one grade, train your teachers, and grow with the
                school. Most pilots run 12 weeks. Booking opens for the next
                academic year.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="space-y-3">
                <a
                  href="mailto:hello@sustainablemind.in"
                  className="flex items-center justify-between gap-3 bg-cream text-ink rounded-2xl px-6 py-5 font-semibold hover:bg-amber transition-colors group"
                >
                  Book a school demo
                  <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                {/* <a
                  href="mailto:hello@sustainablemind.in"
                  className="flex items-center justify-between gap-3 border-2 border-cream/20 text-cream rounded-2xl px-6 py-5 font-semibold hover:border-amber hover:text-amber transition-colors"
                >
                  Download the brochure
                  <FiArrowRight className="h-5 w-5" />
                </a> */}
              </div>
              <p className="mt-5 text-xs text-cream/50">
                Pilots typically begin within 4 to 6 weeks of first contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
