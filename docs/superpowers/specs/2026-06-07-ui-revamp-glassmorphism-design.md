# UI Revamp — Glassmorphism Pro Design Spec
**Date:** 2026-06-07  
**Project:** Martins Ake — Personal Portfolio  
**Approach:** Glassmorphism Pro (Option A)

---

## Goals

- Modernise the visual language while keeping the dark navy (`#101630`) + cyan (`#4FB7DE`) palette
- Improve perceived quality for both technical recruiters and freelance clients
- Add energetic motion: floating elements, gradient animations, glowing effects, scroll-triggered reveals
- Fix existing CSS bugs introduced during prior development
- Ensure full responsiveness across desktop (1024px+), tablet (600–1024px), and mobile (<600px)

---

## 1. Global Foundation

### CSS Bug Fixes
- `rgba(255, 255, 255, o.6)` → `rgba(255, 255, 255, 0.6)` in `index.css`
- `ver(--color-light)` → `var(--color-light)` in `index.css`
- `class=` → `className=` in `Header.jsx`

### New CSS Custom Properties (added to `:root` in `index.css`)
```css
--color-glass: rgba(255, 255, 255, 0.05);
--color-glass-border: rgba(255, 255, 255, 0.12);
--color-glow: rgba(79, 183, 222, 0.35);
--color-glow-strong: rgba(79, 183, 222, 0.6);
--color-gradient-text: linear-gradient(135deg, #4FB7DE, #ffffff);
```

### Animated Background Orbs
- Two large blurred cyan gradient circles positioned fixed behind all content
- Animated with slow CSS `@keyframes` drift/pulse (no JS, no library)
- Opacity ~0.15 so they don't overpower content
- On mobile: scale down to 60% size, position adjusted so they don't obscure text

### Scroll-Reveal
- Lightweight `IntersectionObserver` hook (`useScrollReveal.js`) triggers `fade-slide-up` CSS animation when sections enter the viewport
- Each section and major card gets `data-reveal` attribute
- Mobile: same behaviour, reduced translate distance (20px instead of 40px)

### Typography Refinements
- Section `h5` subtitles: cyan colour (`var(--color-bg-variant)`)
- Section `h2` headings: gradient text (cyan → white) using `background-clip: text`
- Body text: keep Poppins, fix line-height to `1.8`

---

## 2. Hero Section (`Header.jsx` / `header.css`)

### Layout
- Keep centred single-column layout
- Add animated background: large pulsing cyan orb behind profile image using pseudo-element

### Profile Image
- Existing gradient border → animated pulsing cyan glow ring (`box-shadow` keyframe animation)
- Add slow `float` animation: subtle up/down bob ~6px over 6s loop (`@keyframes float`)
- Mobile: reduce image width from 22rem to 16rem

### Typography
- `h1` ("Ake Martins"): gradient text (cyan → white)
- `h5` subtitle (typewriter): keep animation, change cursor colour to cyan

### CTA Buttons
- Glassmorphism treatment: `backdrop-filter: blur(10px)` + semi-transparent background
- Cyan border + glow on hover (`box-shadow: 0 0 15px var(--color-glow)`)
- Mobile: stack buttons vertically, full-width

### Social Links
- Hover: `translateY(-3px)` lift + cyan glow

### Scroll Down Indicator
- Bouncing arrow animation (CSS `@keyframes bounce`)
- Mobile: hide on very small screens (<400px)

---

## 3. Navigation (`Nav.jsx` / `nav.css`)

### Refinements
- Border: `rgba(255, 255, 255, 0.15)` (softer than current solid white)
- Active item: cyan glow background (`box-shadow: 0 0 12px var(--color-glow)`) instead of flat navy
- Hover: icon scales to 1.2 + soft cyan glow
- CSS-only tooltips: label appears above each icon on hover using `::after` pseudo-element
- Mobile: reduce icon size slightly, increase gap between items, ensure nav doesn't overflow

---

## 4. About Section (`About.jsx` / `about.css`)

### Layout — Cinematic Strip
- Replace current two-column (photo | cards+text) with a **full-width cinematic layout**
- Left half: name, bio text, animated stat counters
- Right half: large profile photo with blurred background version behind it (CSS filter on a duplicate `::before` pseudo)
- A thin animated vertical cyan line divides the two halves
- Mobile: stack vertically (photo on top, content below), hide divider line

### Stat Counters
- Remove boxed cards entirely
- Replace with three large glowing numbers with cyan underline accent
- Numbers animate from 0 to target value on scroll entry (pure JS, ~15 lines, no library)
- Labels beneath each number in smaller text
- Mobile: arrange counters in a row (flex-wrap if needed)

### Profile Image
- Same float animation as hero
- Mobile: reduce size, center-align

### CTA Button
- Glass CTA treatment matching hero buttons

---

## 5. Skills/Tools Section (`Tool_Experience.jsx` / `tool_experience.css`)

### Layout — Animated Neon Bars
- Replace 4-column checkmark grid with a two-column layout
- Each skill is a row: skill name left, animated fill bar right
- Fill bar animates (sweeps from 0% to target width) on scroll entry using CSS transitions triggered by IntersectionObserver
- Bar fill: gradient cyan → lighter cyan, with a neon glow (`box-shadow` on the bar)
- Proficiency mapped to bar width: Experienced = 85%, Intermediate = 60%, Beginner = 40%
- Skills grouped under glowing category labels (Frontend, Backend, Graphics, Others)
- Mobile: single column, full-width bars

### Styling
- Bar track: `rgba(255,255,255,0.08)` glass background
- Bar fill: `linear-gradient(90deg, #4FB7DE, #a8e6f0)` with `box-shadow: 0 0 8px var(--color-glow)`
- Category labels: gradient text + cyan left-border accent

---

## 6. Services Section (`Services.jsx` / `services.css`)

### Layout — Icon-Forward Cards with Border Shimmer
- Replace checklist cards with large icon-forward feature cards
- Each card: one large icon (top center), bold headline, 2-line description
- On hover: card expands vertically to reveal the full service list beneath
- Border shimmer: animated gradient border using `@keyframes` rotating conic-gradient (CSS trick — no JS)
- Mobile: single column, cards full-width, hover expand becomes tap-to-expand

### Icons
- Use react-icons matching each service category
- Icon size: 2.5rem, cyan colour, glow on card hover

### Card Base Style
```css
background: var(--color-glass);
border: 1px solid var(--color-glass-border);
backdrop-filter: blur(10px);
border-radius: 1.5rem;
```

---

## 7. Portfolio Section (`Portfolio.jsx` / `portfolio.css`)

### Layout
- Keep 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Cards get full glassmorphism: frosted glass background + soft cyan border

### Hover Overlay Reveal
- On hover: image zooms slightly (`transform: scale(1.05)` on image inside overflow:hidden)
- A dark overlay slides up from the bottom of the card (CSS `translateY` transition)
- Overlay contains: project title + GitHub + Demo buttons
- Buttons hidden at rest, revealed via overlay — cleaner than always-visible buttons
- Mobile: overlay always visible (no hover state on touch), slightly reduced opacity

### Filter Bar
- Row of pill buttons above the grid: All | Web | Mobile | Design
- Active pill: cyan glass background + glow
- Filter uses `data-category` attribute on each card; JS toggles `hidden` class
- Mobile: filter pills scroll horizontally (overflow-x: auto, no wrap)

### Card Data Update
- Add `category` field to the `data` array in `Portfolio.jsx`

---

## 8. Contact Section (`Contact.jsx` / `contact.css`)

### Contact Option Cards
- Tall glass panels (full glassmorphism)
- Large glowing icon (2rem), centred at top
- Lift + cyan glow on hover (`translateY(-8px)` + `box-shadow`)
- Mobile: stack horizontally in a row, or single column if narrow

### Form Inputs
- Glass styling: transparent background, no box border
- Only a cyan bottom-border (`border-bottom: 1.5px solid var(--color-bg-variant)`)
- On focus: bottom border glows (`box-shadow: 0 2px 8px var(--color-glow)`)
- Placeholder text: `rgba(255,255,255,0.4)`
- Mobile: full-width inputs, generous padding

### Send Button
- Full-width gradient: `linear-gradient(135deg, #4FB7DE, #101630)`
- Hover: glows + slight scale up

---

## 9. Footer (`Footer.jsx` / `footer.css`)

- Glowing gradient divider line at top (`border-top: 1px solid var(--color-bg-variant)` + glow `box-shadow`)
- Logo text: gradient treatment (cyan → white)
- Social icons: circular glass background (`40px` circles) + glow on hover
- Nav links: animated underline slide-in on hover
- Mobile: stack all elements vertically, center-align

---

## Responsive Breakpoints Summary

| Breakpoint | Key Changes |
|---|---|
| `>1024px` | Full layouts as described above |
| `600–1024px` | 2-column portfolio, skills single column, about stacks, orbs smaller |
| `<600px` | Everything single column, touch-friendly tap states replace hover, filter pills scroll horizontally, hero image smaller, nav stays fixed bottom |

---

## Files to Change

| File | Type of Change |
|---|---|
| `src/index.css` | Bug fixes, new variables, orb animation, scroll-reveal base styles |
| `src/components/header/Header.jsx` | Fix `class` → `className` |
| `src/components/header/header.css` | Float, glow ring, gradient name, glass CTAs, bounce scroll indicator |
| `src/components/nav/nav.css` | Refined glass border, cyan active glow, tooltips |
| `src/components/about/About.jsx` | Cinematic layout, counter animation, restructured markup |
| `src/components/about/about.css` | Full restyle: cinematic strip, divider, counter styling |
| `src/components/tool_experience/Tool_Experience.jsx` | New markup: bars instead of checkmarks |
| `src/components/tool_experience/tool_experience.css` | Neon bar styling, category labels |
| `src/components/services/Services.jsx` | Icon-forward markup, expand toggle |
| `src/components/services/services.css` | Border shimmer, glass cards, hover expand |
| `src/components/portfolio/Portfolio.jsx` | Add category data, filter bar markup, overlay markup |
| `src/components/portfolio/portfolio.css` | Glass cards, hover overlay, filter pill styles |
| `src/components/contact/contact.css` | Glass inputs, glow focus, gradient button |
| `src/components/footer/footer.css` | Gradient divider, glass socials, gradient logo |
| `src/hooks/useScrollReveal.js` | New file: IntersectionObserver hook |

---

## Out of Scope
- No new sections added
- No routing changes
- No backend/emailjs changes
- No new npm packages (all effects achieved with CSS + minimal vanilla JS)
- Testimonials section: untouched (already commented out in original)
- Work Experience and Education sections: minor glass card treatment only, not restructured
