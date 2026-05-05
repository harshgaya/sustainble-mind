"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#problem", label: "Problem" },
    { href: "#format", label: "Format" },
    { href: "#impact", label: "Impact" },
    { href: "#ages", label: "Ages" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`container-x mx-auto px-6 transition-all duration-300 ${
          scrolled
            ? "bg-cream/80 backdrop-blur-md border border-teal/10 rounded-full py-2.5 px-4"
            : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-teal text-cream">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="10" cy="10" r="6" />
                <path d="M14.5 14.5 L20 20" strokeLinecap="round" />
                <circle cx="10" cy="10" r="2.2" fill="currentColor" />
              </svg>
            </span>
            <span className="display text-xl tracking-tight">
              sustainable<span className="text-coral italic"> mind</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink-soft hover:text-teal transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2.5 text-sm font-semibold hover:bg-teal transition-colors"
            >
              Book a demo
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 rounded-2xl bg-white border border-teal/10 p-5 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-ink-soft"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-full bg-ink text-cream px-5 py-3 text-sm font-semibold"
            >
              Book a demo
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
