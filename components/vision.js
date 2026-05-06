import {
  LuBrain,
  LuSmile,
  LuTrendingUp,
  LuShieldCheck,
  LuLeaf,
} from "react-icons/lu";
import { FiGlobe } from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi2";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";

/* -------------------------------------------------------- */
/*  Illustrations                                            */
/* -------------------------------------------------------- */

function Telescope() {
  return (
    <svg
      viewBox="0 0 280 220"
      className="w-64 md:w-80 drop-shadow-[0_18px_30px_rgba(15,76,92,0.18)]"
    >
      {/* Soft blob background */}
      <ellipse
        cx="160"
        cy="110"
        rx="120"
        ry="90"
        fill="#C9E4EA"
        opacity="0.5"
      />
      {/* Tripod */}
      <line
        x1="140"
        y1="125"
        x2="105"
        y2="200"
        stroke="#0F4C5C"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <line
        x1="140"
        y1="125"
        x2="175"
        y2="200"
        stroke="#0F4C5C"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <line
        x1="140"
        y1="125"
        x2="140"
        y2="200"
        stroke="#0F4C5C"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="140" cy="125" r="8" fill="#0F4C5C" />
      {/* Telescope barrel */}
      <g transform="rotate(-22 140 110)">
        <rect x="50" y="92" width="130" height="42" rx="21" fill="#0F4C5C" />
        <rect x="170" y="86" width="50" height="54" rx="9" fill="#0F4C5C" />
        <rect x="76" y="90" width="6" height="46" fill="#E8A33D" />
        <rect x="120" y="90" width="6" height="46" fill="#E8A33D" />
        <rect x="166" y="86" width="6" height="54" fill="#E8A33D" />
        <circle cx="215" cy="113" r="22" fill="#1A1B1E" />
        <circle cx="215" cy="113" r="16" fill="#E76F51" />
        <ellipse cx="210" cy="107" rx="6" ry="4" fill="white" opacity="0.7" />
      </g>
      {/* Sparkles */}
      <path
        d="M 60 30 L 64 38 L 72 42 L 64 46 L 60 54 L 56 46 L 48 42 L 56 38 Z"
        fill="#E8A33D"
      />
      <path
        d="M 222 38 L 225 44 L 231 46 L 225 48 L 222 54 L 219 48 L 213 46 L 219 44 Z"
        fill="#E8A33D"
      />
      <circle cx="50" cy="115" r="3" fill="#E8A33D" />
    </svg>
  );
}

function Boy() {
  return (
    <svg
      viewBox="0 0 200 240"
      className="w-40 md:w-48 drop-shadow-[0_14px_24px_rgba(15,76,92,0.18)]"
    >
      {/* Body / hoodie */}
      <path
        d="M40 240 L40 150 Q40 110, 80 105 L120 105 Q160 110, 160 150 L160 240 Z"
        fill="#0F4C5C"
        stroke="#1A1B1E"
        strokeWidth="2.5"
      />
      {/* Backpack straps */}
      <path
        d="M70 110 L60 200"
        stroke="#E8A33D"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M130 110 L140 200"
        stroke="#E8A33D"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Lightbulb logo on chest */}
      <g transform="translate(86 145)">
        <circle cx="14" cy="14" r="14" fill="#E8A33D" opacity="0.9" />
        <path
          d="M14 4 C 9 7, 9 14, 14 16 C 19 14, 19 7, 14 4 Z"
          fill="#1A1B1E"
        />
        <rect x="11" y="16" width="6" height="3" rx="1" fill="#1A1B1E" />
        {/* Light rays */}
        <line
          x1="14"
          y1="0"
          x2="14"
          y2="-3"
          stroke="#1A1B1E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="4"
          y1="6"
          x2="1"
          y2="4"
          stroke="#1A1B1E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="24"
          y1="6"
          x2="27"
          y2="4"
          stroke="#1A1B1E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      {/* Hood opening */}
      <ellipse
        cx="100"
        cy="105"
        rx="40"
        ry="10"
        fill="#0F4C5C"
        stroke="#1A1B1E"
        strokeWidth="2.5"
      />
      {/* Head */}
      <ellipse
        cx="100"
        cy="70"
        rx="38"
        ry="42"
        fill="#FCD9B6"
        stroke="#1A1B1E"
        strokeWidth="2.5"
      />
      {/* Hair */}
      <path
        d="M62 60 Q70 30, 100 28 Q135 30, 138 62 Q138 50, 130 45 Q120 38, 100 38 Q78 38, 70 50 Q63 56, 62 60 Z"
        fill="#1A1B1E"
      />
      <path
        d="M68 56 Q80 38, 105 38"
        fill="none"
        stroke="#1A1B1E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Eyes */}
      <circle cx="86" cy="74" r="4" fill="#1A1B1E" />
      <circle cx="114" cy="74" r="4" fill="#1A1B1E" />
      <circle cx="87" cy="73" r="1.2" fill="white" />
      <circle cx="115" cy="73" r="1.2" fill="white" />
      {/* Smile */}
      <path
        d="M88 88 Q100 96 112 88"
        stroke="#1A1B1E"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Cheeks */}
      <circle cx="76" cy="84" r="4" fill="#E76F51" opacity="0.4" />
      <circle cx="124" cy="84" r="4" fill="#E76F51" opacity="0.4" />
    </svg>
  );
}

function Globe() {
  return (
    <svg
      viewBox="0 0 240 240"
      className="w-44 md:w-52 drop-shadow-[0_14px_24px_rgba(15,76,92,0.2)]"
    >
      <circle
        cx="120"
        cy="120"
        r="100"
        fill="#C9E4EA"
        stroke="#0F4C5C"
        strokeWidth="3"
      />
      <path
        d="M 60 80 Q 80 70, 95 85 Q 110 95, 100 115 Q 90 130, 70 125 Q 55 115, 60 80 Z"
        fill="#7A9B7E"
        stroke="#0F4C5C"
        strokeWidth="2"
      />
      <path
        d="M 130 70 Q 165 65, 180 90 Q 185 110, 165 115 Q 145 110, 135 95 Q 125 80, 130 70 Z"
        fill="#7A9B7E"
        stroke="#0F4C5C"
        strokeWidth="2"
      />
      <path
        d="M 90 145 Q 125 140, 155 155 Q 170 175, 140 185 Q 105 185, 85 170 Q 80 155, 90 145 Z"
        fill="#7A9B7E"
        stroke="#0F4C5C"
        strokeWidth="2"
      />
      {/* School flag pin */}
      <g transform="translate(150 80)">
        <rect x="-4" y="0" width="3" height="30" fill="#1A1B1E" />
        <rect x="-1" y="0" width="14" height="10" fill="#E76F51" />
        <rect x="-12" y="20" width="22" height="14" rx="2" fill="#E8A33D" />
        <polygon points="-12,20 -1,12 10,20" fill="#E76F51" />
      </g>
    </svg>
  );
}

/* -------------------------------------------------------- */
/*  Data                                                     */
/* -------------------------------------------------------- */

const pillars = [
  {
    icon: LuBrain,
    title: "Understand their mind",
    desc: "Build self-awareness and mental clarity.",
    bg: "bg-teal-soft",
    color: "text-teal",
  },
  {
    icon: LuSmile,
    title: "Manage emotions",
    desc: "Recognize, regulate and express emotions in healthy ways.",
    bg: "bg-amber-soft",
    color: "text-amber",
  },
  {
    icon: LuTrendingUp,
    title: "Live with clarity",
    desc: "Make thoughtful decisions and set meaningful goals.",
    bg: "bg-coral-soft",
    color: "text-coral",
  },
  {
    icon: LuShieldCheck,
    title: "Resilience & inner strength",
    desc: "Bounce back, stay strong and thrive in life.",
    bg: "bg-sage-soft",
    color: "text-sage",
  },
];

const features = [
  {
    icon: FiGlobe,
    label: "Global Curriculum",
    desc: "Designed for impact across countries and cultures.",
    color: "bg-teal text-cream",
  },
  {
    icon: HiAcademicCap,
    label: "Integrated in Schools Worldwide",
    desc: "Seamlessly fits into school systems and classrooms.",
    color: "bg-coral text-cream",
  },
  {
    icon: FaUserFriends,
    label: "Stronger Minds, Brighter Future",
    desc: "Empowering today's students for a better tomorrow.",
    color: "bg-sage text-cream",
  },
];

/* -------------------------------------------------------- */
/*  Component                                                */
/* -------------------------------------------------------- */

export default function Vision() {
  return (
    <section id="vision" className="section bg-cream relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 w-[500px] h-[500px] bg-amber-soft/25 blob-anim -z-10"
      />

      <div className="container-x relative">
        {/* Top: heading + telescope */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <span className="eyebrow">
              <LuLeaf className="h-3.5 w-3.5 -ml-1 text-coral" />
              Our vision
            </span>

            <h2 className="display mt-5 text-6xl md:text-8xl leading-[0.95] tracking-tight text-ink">
              Our <span className="italic squiggle text-teal">vision.</span>
            </h2>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-1 w-24 bg-teal/30 rounded-full" />
              <div className="h-2.5 w-2.5 rounded-full bg-teal" />
            </div>

            <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed">
              To establish{" "}
              <span className="text-teal font-semibold">
                Sustainable Mind&trade;
              </span>{" "}
              as a{" "}
              <span className="text-coral font-semibold">
                global life-skills curriculum
              </span>{" "}
              in schools worldwide, empowering every student to:
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <Image
              src="/images/telescope.png"
              alt="Student wearing a hoodie with backpack"
              width={400}
              height={500}
              className="w-40 md:w-56 h-auto"
            />
          </div>
        </div>

        {/* Pillars card */}
        <div className="mt-12 soft-card p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`text-center ${i < pillars.length - 1 ? "md:border-r md:border-ink/10 md:pr-4" : ""}`}
                >
                  <div
                    className={`mx-auto h-20 w-20 rounded-full ${p.bg} flex items-center justify-center`}
                  >
                    <Icon className={`h-9 w-9 ${p.color}`} strokeWidth={2} />
                  </div>
                  <div className="mt-5 h-px w-12 bg-ink/15 mx-auto" />
                  <h3 className="display mt-5 text-xl md:text-2xl text-ink leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lower panel: boy + features + globe */}
        <div className="mt-8 rounded-[28px] bg-cream-deep p-8 md:p-10 border border-ink/5">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* <div className="md:col-span-3 flex justify-center">
              <Boy />
            </div> */}
            <div className="md:col-span-3 flex justify-center">
              <Image
                src="/images/boy-new.png"
                alt="Student wearing a hoodie with backpack"
                width={400}
                height={500}
                className="w-40 md:w-56 h-auto"
              />
            </div>

            <div className="md:col-span-5">
              <ul className="space-y-5">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <li key={f.label} className="flex items-start gap-4">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${f.color} flex-shrink-0 shadow-md`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="flex-1 pb-3 border-b border-ink/10 last:border-0">
                        <p className="font-semibold text-ink">{f.label}</p>
                        <p className="mt-1 text-sm text-ink-soft leading-snug">
                          {f.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="md:col-span-4 flex justify-center md:justify-end">
              <Image
                src="/images/globe.png"
                alt="Student wearing a hoodie with backpack"
                width={400}
                height={500}
                className="w-40 md:w-56 h-auto"
              />
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3.5 text-base shadow-md rounded-full bg-amber text-ink font-semibold">
            <span className="h-7 w-7 rounded-full bg-ink flex items-center justify-center">
              <LuLeaf className="h-3.5 w-3.5 text-amber" />
            </span>
            <span>
              Rooted in wisdom.{" "}
              <span className="text-coral italic">Ready for life.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
