# Sustainable Mind

A landing page for a student life skills curriculum (ages 7 to 15). Built with Next.js 16, Tailwind CSS v4, and React Icons. JavaScript only, no TypeScript.

## Stack

- **Next.js 16.2** (App Router, React Server Components by default)
- **React 19.2**
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config.js`)
- **react-icons** (Feather, Lucide, Heroicons, Game Icons)
- **Google Fonts**: Fraunces (display) + Plus Jakarta Sans (body)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
sustainable-mind/
├── app/
│   ├── globals.css      # Tailwind v4 import + theme tokens + animations
│   ├── layout.js        # Root layout, fonts, metadata
│   └── page.js          # Composes all sections
├── components/
│   ├── Navbar.js        # Sticky header with scroll-aware pill
│   ├── Hero.js          # Inline SVG magnifier + headline
│   ├── Problem.js       # 4 problem cards + pull quote
│   ├── Curriculum.js    # Editorial intro panel (sage)
│   ├── Format.js        # 4 format cards, alternating offset
│   ├── Solution.js      # Feel / Understand / Choose flow
│   ├── HowWeTeach.js    # 5-step vertical timeline
│   ├── Impact.js        # Dark teal + outcome cards + stats
│   ├── AgeWise.js       # 3 level cards (featured center)
│   ├── CTA.js           # Booking + brochure block
│   └── Footer.js        # Minimal footer
├── public/              # Empty (no external image dependencies)
├── postcss.config.mjs   # Tailwind v4 PostCSS plugin
├── next.config.mjs
├── jsconfig.json        # @/ path alias
└── package.json
```

## Design system

Colors (defined in `app/globals.css` `@theme`):

| Token | Hex | Use |
|-------|-----|-----|
| `cream` | `#FBF6EC` | Page background |
| `cream-deep` | `#F4ECD9` | Alternate band |
| `ink` | `#1A1B1E` | Body text, dark sections |
| `teal` | `#0F4C5C` | Primary brand |
| `amber` | `#E8A33D` | Highlight, accent |
| `coral` | `#E76F51` | Secondary accent |
| `sage` | `#7A9B7E` | Calm/growth signal |

Typography:

- Display: Fraunces (variable serif, optical sizing, italic for emphasis)
- Body: Plus Jakarta Sans 300-700

Animations: floating magnifier, slow-spinning ring text, blob morphs, scroll-aware navbar.

## Notes

- All section IDs are wired up to nav anchors (`#problem`, `#format`, `#impact`, `#ages`, `#cta`).
- The hero magnifier is an inline SVG, no `/public/magnifier.png` dependency.
- Mobile-first; layouts collapse to single column under 768px.

## Customizing

To change brand colors, edit the `@theme` block in `app/globals.css`. Tailwind v4 picks up tokens automatically; class names like `bg-teal` and `text-amber` work without a config file.
