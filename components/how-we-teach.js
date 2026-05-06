import {
  LuBookOpen,
  LuSmilePlus,
  LuScale,
  LuLightbulb,
  LuPencil,
} from "react-icons/lu";
import { FaTheaterMasks } from "react-icons/fa";
import Image from "next/image";

/* Character SVGs */
function Blaze() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="fireGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFA94D" />
          <stop offset="100%" stopColor="#FF4D00" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="#FAD7C0" />
      <path
        d="M100 30 C120 60, 150 60, 140 100 C130 140, 70 140, 60 100 C50 60, 80 60, 100 30Z"
        fill="url(#fireGrad)"
        stroke="#1A1B1E"
        strokeWidth="2.5"
      />
      <circle cx="80" cy="95" r="7" fill="#1A1B1E" />
      <circle cx="120" cy="95" r="7" fill="#1A1B1E" />
      <circle cx="82" cy="93" r="2" fill="white" />
      <circle cx="122" cy="93" r="2" fill="white" />
      <path
        d="M85 115 Q100 125 115 115"
        stroke="#1A1B1E"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Shello() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <circle cx="100" cy="100" r="90" fill="#C9E4EA" />
      <path
        d="M60 100 C50 80, 80 60, 100 70 C120 50, 150 70, 140 95 C160 100, 150 130, 120 130 L80 130 C50 130, 50 110, 60 100Z"
        fill="#AED6F1"
        stroke="#1A1B1E"
        strokeWidth="2.5"
      />
      <circle cx="85" cy="100" r="6" fill="#1A1B1E" />
      <circle cx="115" cy="100" r="6" fill="#1A1B1E" />
      <circle cx="86" cy="98" r="1.8" fill="white" />
      <circle cx="116" cy="98" r="1.8" fill="white" />
      <path
        d="M85 122 Q100 112 115 122"
        stroke="#1A1B1E"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Champ() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <circle cx="100" cy="100" r="90" fill="#F8D88A" />
      <polygon
        points="100,40 120,85 170,85 130,115 145,160 100,135 55,160 70,115 30,85 80,85"
        fill="#E8A33D"
        stroke="#1A1B1E"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="85" cy="95" r="6" fill="#1A1B1E" />
      <circle cx="115" cy="95" r="6" fill="#1A1B1E" />
      <circle cx="86" cy="93" r="1.8" fill="white" />
      <circle cx="116" cy="93" r="1.8" fill="white" />
      <path
        d="M85 110 Q100 120 115 110"
        stroke="#1A1B1E"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Tejix() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <circle cx="100" cy="100" r="90" fill="#DCD4F0" />
      <circle
        cx="100"
        cy="40"
        r="10"
        fill="#E8A33D"
        stroke="#1A1B1E"
        strokeWidth="2"
      />
      <rect
        x="95"
        y="48"
        width="10"
        height="8"
        fill="#0F4C5C"
        stroke="#1A1B1E"
        strokeWidth="1.5"
      />
      <rect
        x="60"
        y="58"
        width="80"
        height="64"
        rx="14"
        fill="#FFFFFF"
        stroke="#1A1B1E"
        strokeWidth="2.5"
      />
      <rect x="73" y="68" width="54" height="40" rx="9" fill="#0F4C5C" />
      <circle cx="90" cy="86" r="5" fill="#C9E4EA" />
      <circle cx="110" cy="86" r="5" fill="#C9E4EA" />
      <path
        d="M88 100 Q100 108 112 100"
        stroke="#C9E4EA"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <rect
        x="68"
        y="124"
        width="64"
        height="40"
        rx="10"
        fill="#FFFFFF"
        stroke="#1A1B1E"
        strokeWidth="2.5"
      />
      <polygon
        points="100,130 110,150 90,150"
        fill="#E8A33D"
        stroke="#1A1B1E"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function SmileyMagnifier() {
  return (
    <svg
      viewBox="0 0 280 280"
      className="w-full h-full drop-shadow-[0_18px_30px_rgba(15,76,92,0.2)]"
    >
      <rect
        x="180"
        y="180"
        width="22"
        height="100"
        rx="11"
        fill="#1A1B1E"
        transform="rotate(35 191 230)"
      />
      <rect
        x="184"
        y="184"
        width="14"
        height="90"
        rx="7"
        fill="#E8A33D"
        transform="rotate(35 191 230)"
      />
      <circle cx="115" cy="115" r="92" fill="#1A1B1E" />
      <circle cx="115" cy="115" r="84" fill="#FBF6EC" />
      <circle cx="115" cy="115" r="76" fill="#C9E4EA" opacity="0.6" />
      <ellipse cx="92" cy="100" rx="6" ry="8" fill="#0F4C5C" />
      <ellipse cx="138" cy="100" rx="6" ry="8" fill="#0F4C5C" />
      <path
        d="M83 100 Q92 92 101 100"
        stroke="#0F4C5C"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M129 100 Q138 92 147 100"
        stroke="#0F4C5C"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M82 130 Q115 165 148 130"
        stroke="#0F4C5C"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse
        cx="80"
        cy="78"
        rx="22"
        ry="14"
        fill="white"
        opacity="0.7"
        transform="rotate(-30 80 78)"
      />
    </svg>
  );
}

const sessionItems = [
  { icon: LuBookOpen, label: "Real-life story" },
  { icon: LuSmilePlus, label: "Emotion identification" },
  { icon: FaTheaterMasks, label: "Blaze / Shello / Champ reactions" },
  { icon: LuScale, label: "Consequence understanding" },
  { icon: LuLightbulb, label: "Tejix guidance" },
  { icon: LuPencil, label: "Practice activity" },
];

const characters = [
  {
    name: "Blaze",
    Svg: Blaze,
    cardBg: "bg-coral-soft/40",
    nameColor: "text-coral",
    headline: "Acts impulsively",
    desc: "Driven by anger or emotions",
    image: "/images/blaze.jpeg",
  },
  {
    name: "Shello",
    Svg: Shello,
    cardBg: "bg-teal-soft/50",
    nameColor: "text-teal",
    headline: "Avoids or shuts down",
    desc: "Feels scared or overwhelmed",
    image: "/images/shello.jpeg",
  },
  {
    name: "Champ",
    Svg: Champ,
    cardBg: "bg-amber-soft/50",
    nameColor: "text-amber",
    headline: "Thinks clearly",
    desc: "Chooses wisely and stays in control",
    image: "/images/champ.jpeg",
  },
  {
    name: "Tejix",
    Svg: Tejix,
    cardBg: "bg-sage-soft/50",
    nameColor: "text-sage",
    headline: "Guides with wisdom",
    desc: "Helps you reflect and decide better",
    image: "/images/tejjix.jpeg",
  },
];

export default function HowWeTeachNew() {
  return (
    <section
      id="how-we-teach"
      className="section bg-cream relative overflow-hidden"
    >
      <div className="container-x relative">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <span className="eyebrow">How we teach</span>
            <h2 className="display mt-5 text-5xl md:text-7xl leading-[0.95] tracking-tight">
              The shape of
              <br />
              <span className="italic squiggle text-coral">every session.</span>
            </h2>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-56 md:w-72 float-anim">
              <SmileyMagnifier />
            </div>
          </div>
        </div>

        {/* Each session includes */}
        <div className="mt-12 max-w-2xl">
          <h3 className="display text-2xl md:text-3xl text-ink">
            Each session includes:
          </h3>
          <ul className="mt-7 space-y-5">
            {sessionItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex items-center gap-4 group">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-cream flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-coral text-base md:text-lg flex-shrink-0">
                    ▸
                  </span>
                  <span className="flex-1 text-base md:text-lg font-semibold text-ink border-b border-ink/15 pb-3 group-hover:border-coral/60 transition-colors">
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Unique tool: characters */}
        <div className="mt-16">
          <h3 className="display text-2xl md:text-3xl text-ink">
            Unique tool:
          </h3>
          <p className="mt-2 text-base text-ink-soft max-w-2xl">
            Four characters that turn abstract reactions into something a child
            can name, recognise, and choose between.
          </p>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {characters.map((c) => {
              const SvgChar = c.Svg;
              return (
                <article
                  key={c.name}
                  className={`soft-card ${c.cardBg} p-5 md:p-6 text-center hover:-translate-y-1 transition-transform`}
                >
                  {/* <div className="aspect-square w-full max-w-[180px] mx-auto">
                    <SvgChar />
                  </div> */}
                  <Image src={c.image} height={200} width={200} />
                  <h4
                    className={`mt-4 display italic text-2xl md:text-3xl ${c.nameColor}`}
                  >
                    {c.name}
                  </h4>
                  <p className="mt-2 text-sm md:text-base font-semibold text-ink leading-tight">
                    {c.headline}
                  </p>
                  <p className="mt-1 text-xs md:text-sm text-ink-soft leading-snug">
                    {c.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Tagline strip */}
        <div className="mt-10 rounded-3xl bg-ink px-6 py-5 md:px-8 md:py-6 flex items-center gap-5 shadow-lg">
          <span className="h-14 w-14 rounded-full bg-amber flex items-center justify-center flex-shrink-0">
            <svg
              viewBox="0 0 32 32"
              className="h-7 w-7 text-ink"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="13" r="3.5" />
              <circle cx="21" cy="13" r="3.5" />
              <path d="M16 18 L16 22" />
              <path d="M11 22 L21 22" />
              <path d="M11 8 L9 5 M21 8 L23 5 M16 7 L16 4" />
            </svg>
          </span>
          <p className="display text-lg md:text-2xl text-amber leading-tight">
            Simple, relatable,{" "}
            <span className="text-cream italic">and easy for students.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
