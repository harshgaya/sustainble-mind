import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-ink/10">
      <div className="container-x px-6 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-cream">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <circle cx="10" cy="10" r="6" />
                  <path d="M14.5 14.5 L20 20" strokeLinecap="round" />
                  <circle cx="10" cy="10" r="2.2" fill="currentColor" />
                </svg>
              </span>
              <span className="display text-xl tracking-tight">
                sustainable<span className="text-coral italic"> mind</span>
              </span>
            </a>
            <p className="mt-5 text-sm text-ink-soft max-w-sm leading-relaxed">
              A life skills curriculum for ages 7 to 15. Helping students
              understand their mind, one session at a time.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-ink-soft/60">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#problem" className="hover:text-teal">
                  The problem
                </a>
              </li>
              <li>
                <a href="#format" className="hover:text-teal">
                  Format
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-teal">
                  Impact
                </a>
              </li>
              <li>
                <a href="#ages" className="hover:text-teal">
                  Age levels
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-ink-soft/60">
              Get in touch
            </h4>
            {/* <a
              href="mailto:hello@sustainablemind.in"
              className="mt-4 inline-flex items-center gap-2 text-sm hover:text-teal"
            >
              <FiMail className="h-4 w-4" />
              hello@sustainablemind.in
            </a> */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/sustainablemind.in?igsh=NGwyMGN5b2RhZ29s"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 hover:border-coral hover:text-coral transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="h-4 w-4" />
              </a>
              {/* <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 hover:border-coral hover:text-coral transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-4 w-4" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink/10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-xs text-ink-soft/60">
          <span>
            (c) {new Date().getFullYear()} Sustainable Mind. All rights
            reserved.
          </span>
          <span>Made with care, for schools.</span>
        </div>
      </div>
    </footer>
  );
}
