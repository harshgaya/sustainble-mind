import { FiArrowDown } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pl-5  overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Decorative background blob */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-32 w-[600px] h-[600px] bg-amber-soft/40 blob-anim -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-teal-soft/40 blob-anim -z-10"
        style={{ animationDelay: "-3s" }}
      />

      {/* Dot pattern accent */}
      <div
        aria-hidden="true"
        className="absolute top-20 right-8 w-32 h-32 dot-grid opacity-60 hidden md:block"
      />

      <div className="container-x relative">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left side: copy */}
          <div className="md:col-span-7 reveal">
            <span className="eyebrow">Student life skills curriculum</span>

            <h1 className="display mt-6 text-[3.25rem] sm:text-[4.5rem] md:text-[5.5rem] leading-[0.92] tracking-tight">
              Teach kids
              <br />
              how to <span className="italic squiggle text-coral">handle</span>
              <br />
              <span className="text-teal">their own mind.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed">
              Schools teach maths, science, languages. We teach the one thing
              they don't, how to feel, understand, and choose, before reacting.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink text-cream px-7 py-4 text-sm font-semibold hover:bg-teal transition-all hover:scale-[1.02]"
              >
                Bring it to your school
                <HiSparkles className="h-4 w-4 text-amber" />
              </a>
              <a
                href="#problem"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink/15 text-ink px-7 py-4 text-sm font-semibold hover:border-ink/40 transition-colors"
              >
                See how it works
                <FiArrowDown className="h-4 w-4" />
              </a>
            </div>

            {/* Quick proof strip */}
            <div className="mt-12 flex items-center gap-6 text-xs text-ink-soft/70">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sage" />
                40 to 50 min weekly sessions
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber" />
                Ages 7 to 15
              </div>
              <div className="hidden md:flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-coral" />
                No exams
              </div>
            </div>
          </div>

          {/* Right side: magnifier illustration */}
          <div className="md:col-span-5 relative h-[420px] md:h-[520px] flex items-center justify-center">
            {/* Concentric ring accent */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center spin-slow"
            >
              <svg
                viewBox="0 0 400 400"
                className="w-[110%] h-[110%] opacity-40"
              >
                <defs>
                  <path
                    id="circle"
                    d="M 200, 200 m -150, 0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
                    fill="none"
                  />
                </defs>
                <text
                  fontSize="11"
                  letterSpacing="6"
                  fill="#0F4C5C"
                  fontFamily="Plus Jakarta Sans"
                >
                  <textPath href="#circle">
                    FEEL · UNDERSTAND · CHOOSE · FEEL · UNDERSTAND · CHOOSE ·
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Magnifier */}
            <div className="relative float-anim">
              <svg
                viewBox="0 0 280 280"
                className="w-72 md:w-80 drop-shadow-[0_25px_40px_rgba(15,76,92,0.25)]"
              >
                {/* Handle */}
                <rect
                  x="180"
                  y="180"
                  width="22"
                  height="100"
                  rx="11"
                  fill="#1A1B1E"
                  transform="rotate(45 191 230)"
                />
                <rect
                  x="184"
                  y="184"
                  width="14"
                  height="92"
                  rx="7"
                  fill="#E8A33D"
                  transform="rotate(45 191 230)"
                />
                {/* Outer ring */}
                <circle cx="115" cy="115" r="92" fill="#1A1B1E" />
                <circle cx="115" cy="115" r="84" fill="#E76F51" />
                <circle cx="115" cy="115" r="78" fill="#F4ECD9" />
                {/* Inner pattern - the "mind" */}
                <g>
                  <circle
                    cx="115"
                    cy="115"
                    r="60"
                    fill="none"
                    stroke="#0F4C5C"
                    strokeWidth="1.5"
                    strokeDasharray="2 6"
                  />
                  <circle cx="115" cy="115" r="40" fill="#C9E4EA" />
                  {/* Brain-like squiggle */}
                  <path
                    d="M 92 110 Q 100 95, 115 100 T 138 110 Q 145 122, 135 130 T 110 132 Q 92 128, 92 110 Z"
                    fill="#0F4C5C"
                  />
                  <circle cx="105" cy="108" r="3" fill="#F8D88A" />
                  <circle cx="125" cy="118" r="2" fill="#F8D88A" />
                  <circle cx="118" cy="125" r="2" fill="#F8D88A" />
                </g>
                {/* Highlight on glass */}
                <ellipse
                  cx="85"
                  cy="85"
                  rx="20"
                  ry="12"
                  fill="white"
                  opacity="0.5"
                  transform="rotate(-30 85 85)"
                />
                {/* Sparkle decorations */}
                <g fill="#E8A33D">
                  <path d="M 240 60 L 244 70 L 254 74 L 244 78 L 240 88 L 236 78 L 226 74 L 236 70 Z" />
                  <path d="M 30 200 L 32 206 L 38 208 L 32 210 L 30 216 L 28 210 L 22 208 L 28 206 Z" />
                </g>
              </svg>
            </div>

            {/* Tag */}
            <div className="absolute bottom-2 left-2 md:left-0 rotate-[-8deg]">
              <span className="inline-block bg-teal text-cream text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full shadow-lg">
                Explore the magic
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
