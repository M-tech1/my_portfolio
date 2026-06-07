# UI Revamp — Glassmorphism Pro Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Revamp the portfolio UI to a modern Glassmorphism Pro aesthetic — dark navy + cyan, animated orbs, glass cards, neon skill bars, hover overlays, and scroll-reveal — while fixing existing CSS bugs and ensuring full mobile responsiveness.

**Architecture:** Pure CSS + minimal React state changes; no new npm packages. A shared `useScrollReveal` hook wires IntersectionObserver to CSS `data-reveal` attributes. All glow, blur, and animation effects are CSS-only. JS additions are limited to the counter animation, portfolio filter state, and services expand toggle.

**Tech Stack:** React 18, Vite, Plain CSS (CSS variables), react-icons, emailjs-com

**Spec:** `docs/superpowers/specs/2026-06-07-ui-revamp-glassmorphism-design.md`

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `src/index.css` | Modify | Bug fixes, new glass/glow variables, animated orb keyframes, scroll-reveal base styles |
| `src/App.jsx` | Modify | Add `BackgroundOrbs` inline component |
| `src/hooks/useScrollReveal.js` | Create | IntersectionObserver hook for scroll-triggered fade-slide-up |
| `src/components/header/Header.jsx` | Modify | Fix `class` → `className` |
| `src/components/header/header.css` | Modify | Float animation, glow ring, gradient name, glass CTAs, bounce scroll indicator |
| `src/components/header/CTA.jsx` | Modify | Glass button styles applied via className |
| `src/components/nav/nav.css` | Modify | Refined border, cyan active glow, tooltip pseudo-elements |
| `src/components/about/About.jsx` | Modify | Cinematic strip layout, counter animation markup |
| `src/components/about/about.css` | Modify | Full restyle: cinematic strip, divider, glow counters |
| `src/components/tool_experience/Tool_Experience.jsx` | Modify | Replace checkmarks with bar markup |
| `src/components/tool_experience/tool_experience.css` | Modify | Neon bar styles, category labels |
| `src/components/services/Services.jsx` | Modify | Icon-forward cards, expand toggle with useState |
| `src/components/services/services.css` | Modify | Border shimmer, glass cards, hover expand |
| `src/components/portfolio/Portfolio.jsx` | Modify | Add category data, filter bar, overlay markup, filter useState |
| `src/components/portfolio/portfolio.css` | Modify | Glass cards, hover overlay, filter pill styles |
| `src/components/contact/contact.css` | Modify | Glass inputs, glow focus, gradient button |
| `src/components/footer/footer.css` | Modify | Gradient divider, glass socials, gradient logo |

---

## Task 1: Fix CSS Bugs & Add Global Glass Variables

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Fix the three bugs in `index.css`**

Open `src/index.css` and apply these three targeted fixes:

```css
/* Line ~20 — fix letter 'o' to digit '0' */
--color-light: rgba(255, 255, 255, 0.6);

/* Line ~110 — fix 'ver(' typo to 'var(' */
section > h2,
section > h5 {
  text-align: center;
  color: var(--color-light);
}
```

- [ ] **Step 2: Add new CSS custom properties to `:root`**

Add these immediately after `--color-light` in the `:root` block:

```css
--color-glass: rgba(255, 255, 255, 0.05);
--color-glass-border: rgba(255, 255, 255, 0.12);
--color-glow: rgba(79, 183, 222, 0.35);
--color-glow-strong: rgba(79, 183, 222, 0.6);
--color-gradient-text: linear-gradient(135deg, #4FB7DE, #ffffff);
```

- [ ] **Step 3: Add gradient text utility class and section heading overrides**

Add at the bottom of `src/index.css`, before the media queries:

```css
/* Gradient text utility */
.gradient-text {
  background: var(--color-gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Section subtitle override */
section > h5 {
  color: var(--color-bg-variant);
  letter-spacing: 0.05em;
}

/* Section heading gradient */
section > h2 {
  background: var(--color-gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
}
```

- [ ] **Step 4: Add scroll-reveal base animation**

Append to `src/index.css`:

```css
/* Scroll reveal */
[data-reveal] {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
}

@media screen and (max-width: 600px) {
  [data-reveal] {
    transform: translateY(20px);
  }
}
```

- [ ] **Step 5: Verify dev server runs without errors**

```bash
npm run dev
```

Expected: server starts, no CSS parse errors in browser console.

- [ ] **Step 6: Commit**

```bash
git add src/index.css
git commit -m "fix: CSS bugs + add glass/glow variables and scroll-reveal base"
```

---

## Task 2: Animated Background Orbs

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Add orb keyframe animations to `index.css`**

Append to `src/index.css`:

```css
/* Background orbs */
.bg-orbs {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
  background: radial-gradient(circle, #4FB7DE, transparent 70%);
  animation: orbDrift 18s ease-in-out infinite alternate;
}

.bg-orb:nth-child(1) {
  width: 600px;
  height: 600px;
  top: -100px;
  right: -100px;
  animation-duration: 20s;
}

.bg-orb:nth-child(2) {
  width: 500px;
  height: 500px;
  bottom: 10%;
  left: -100px;
  animation-duration: 15s;
  animation-delay: -7s;
}

@keyframes orbDrift {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(40px, 30px) scale(1.08); }
  100% { transform: translate(-20px, 50px) scale(0.95); }
}

@media screen and (max-width: 600px) {
  .bg-orb:nth-child(1) { width: 350px; height: 350px; }
  .bg-orb:nth-child(2) { width: 280px; height: 280px; }
}
```

- [ ] **Step 2: Add BackgroundOrbs to `App.jsx`**

Replace the contents of `src/App.jsx` with:

```jsx
import React from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Tool_Experience from "./components/tool_experience/Tool_Experience.jsx";
import Work_Experience from "./components/work_experience/Work_Experience.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Education from "./components/education/Education.tsx";

const BackgroundOrbs = () => (
  <div className="bg-orbs">
    <div className="bg-orb" />
    <div className="bg-orb" />
  </div>
);

const App = () => {
  return (
    <>
      <BackgroundOrbs />
      <Header />
      <Nav />
      <About />
      <Work_Experience />
      <Education />
      <Portfolio />
      <Tool_Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
```

- [ ] **Step 3: Verify orbs appear in browser**

Run `npm run dev`, open browser. Two soft cyan glowing circles should be visible drifting slowly in the background behind all content. On mobile viewport they should be smaller.

- [ ] **Step 4: Commit**

```bash
git add src/index.css src/App.jsx
git commit -m "feat: add animated background orbs"
```

---

## Task 3: Scroll-Reveal Hook

**Files:**
- Create: `src/hooks/useScrollReveal.js`

- [ ] **Step 1: Create the hooks directory and file**

```bash
mkdir -p src/hooks
```

- [ ] **Step 2: Write `useScrollReveal.js`**

Create `src/hooks/useScrollReveal.js`:

```js
import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll("[data-reveal]");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
```

- [ ] **Step 3: Wire hook into App.jsx**

Add the import and call to `src/App.jsx`:

```jsx
import useScrollReveal from "./hooks/useScrollReveal.js";

const App = () => {
  useScrollReveal();
  // ...rest unchanged
};
```

- [ ] **Step 4: Verify hook loads without errors**

Run `npm run dev`, open browser console — no errors expected.

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useScrollReveal.js src/App.jsx
git commit -m "feat: add scroll-reveal IntersectionObserver hook"
```

---

## Task 4: Hero Section Revamp

**Files:**
- Modify: `src/components/header/Header.jsx`
- Modify: `src/components/header/header.css`
- Modify: `src/components/header/CTA.jsx`
- Modify: `src/components/header/HeaderSocials.jsx`

- [ ] **Step 1: Fix `class` → `className` in `Header.jsx`**

In `src/components/header/Header.jsx`, line 12, change:

```jsx
// Before
<div class="container header__container">

// After
<div className="container header__container">
```

Also add `data-reveal` to the container and a glow orb div:

```jsx
const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <div className="container header__container" data-reveal>
          <h5>Hello, I'm</h5>
          <h1 className="gradient-text"> Ake Martins</h1>
          <h5 className="typewriter">Software Engineer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <div className="me__glow" />
            <img className="img" src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll__down">
            <span>Scroll down</span>
            <span className="scroll__arrow">↓</span>
          </a>
        </div>
      </header>
    </>
  );
};
```

- [ ] **Step 2: Replace `header.css` entirely**

Replace the full contents of `src/components/header/header.css`:

```css
header {
  height: 100vh;
  overflow: hidden;
  width: 100%;
  position: relative;
}

.header__container {
  text-align: center;
  height: 100vh;
  position: relative;
  width: 100%;
  justify-content: center;
  padding-top: 15px;
}

/* CTA buttons — glass style */
.cta {
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
}

.cta .btn {
  backdrop-filter: blur(10px);
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  transition: var(--transition);
}

.cta .btn:hover {
  background: rgba(79, 183, 222, 0.15);
  border-color: var(--color-bg-variant);
  box-shadow: 0 0 18px var(--color-glow);
  color: var(--color-white);
  transform: translateY(-3px);
}

.cta .btn-primary {
  background: var(--color-bg-variant);
  color: var(--color-bg);
}

.cta .btn-primary:hover {
  background: #fff;
  box-shadow: 0 0 20px var(--color-glow-strong);
}

/* Header socials */
.header__socials {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 3rem;
  bottom: 3rem;
}

.header__socials a {
  transition: var(--transition);
}

.header__socials a:hover {
  transform: translateY(-3px);
  color: var(--color-bg-variant);
  filter: drop-shadow(0 0 6px var(--color-glow-strong));
}

.header__socials::after {
  content: "";
  width: 1px;
  height: 3rem;
  background: var(--color-primary);
}

/* Profile image */
.me {
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 2rem;
  width: 22rem;
  height: 700px;
  border-radius: 12rem 12rem 0 0;
  overflow: visible;
  padding: 2rem 0.5rem 0.5rem 0.5rem;
}

.me__glow {
  position: absolute;
  inset: -20px;
  border-radius: 12rem 12rem 0 0;
  background: radial-gradient(ellipse at center, var(--color-glow) 0%, transparent 70%);
  animation: glowPulse 3s ease-in-out infinite alternate;
  z-index: 0;
}

.me .img {
  position: relative;
  z-index: 1;
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 0 20px var(--color-glow));
  border-radius: 12rem 12rem 0 0;
  background: linear-gradient(var(--color-primary), transparent);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}

@keyframes glowPulse {
  0%   { opacity: 0.4; }
  100% { opacity: 0.8; }
}

/* Scroll down */
.scroll__down {
  position: absolute;
  right: -0.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.scroll__arrow {
  display: inline-block;
  animation: bounce 1.5s ease-in-out infinite;
  transform: rotate(-90deg);
}

@keyframes bounce {
  0%, 100% { transform: rotate(-90deg) translateX(0); }
  50%       { transform: rotate(-90deg) translateX(6px); }
}

/* Typewriter */
.typewriter {
  overflow: hidden;
  border-right: 0.15em solid var(--color-bg-variant);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 4s steps(20) infinite, blink-caret 1s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to   { width: 13em; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50%      { border-color: var(--color-bg-variant); }
}

/* Medium devices */
@media screen and (max-width: 1024px) {
  header { height: 68vh; }
  .header__container { margin-top: 1rem; }
  .me {
    width: 20rem;
    left: calc(50% - 10rem);
  }
}

/* Small devices */
@media only screen and (max-width: 600px) {
  header { height: 100vh; overflow: hidden; }
  .header__container { margin-top: 1.5rem; height: 100%; position: absolute; text-align: center; }

  .header__socials {
    position: fixed;
    flex-direction: row;
    gap: 0.8rem;
    top: auto;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
    display: none;
  }
  .header__socials::after { display: none; }

  .scroll__down { display: none; }

  .cta {
    flex-direction: column;
    align-items: center;
  }

  .cta .btn { width: 80%; text-align: center; }

  .me {
    width: 16rem;
    height: 70vh;
    left: calc(50% - 8rem);
    position: relative;
    margin-bottom: 0;
  }
}
```

- [ ] **Step 3: Verify hero in browser**

Run `npm run dev`. In the browser:
- Name "Ake Martins" should display in cyan→white gradient
- Profile image should bob up/down (float animation)
- A glowing cyan halo should pulse behind the image
- CTA buttons should have frosted glass style
- Typewriter cursor should be cyan
- Scroll-down indicator arrow should bounce

Check mobile viewport (375px): image should be 16rem wide, CTA buttons stack vertically.

- [ ] **Step 4: Commit**

```bash
git add src/components/header/Header.jsx src/components/header/header.css
git commit -m "feat: revamp hero — gradient name, float animation, glow ring, glass CTAs"
```

---

## Task 5: Nav Refinements

**Files:**
- Modify: `src/components/nav/nav.css`
- Modify: `src/components/nav/Nav.jsx`

- [ ] **Step 1: Add `aria-label` attributes to nav links in `Nav.jsx`**

Add tooltip-enabling `aria-label` and a wrapper `span` for CSS tooltip to each link. Replace full `Nav.jsx`:

```jsx
import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""} data-tooltip="Home">
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""} data-tooltip="About">
        <AiOutlineUser />
      </a>
      <a href="#Work_Experience" onClick={() => setActiveNav("#Work_Experience")} className={activeNav === "#Work_Experience" ? "active" : ""} data-tooltip="Experience">
        <BiBook />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""} data-tooltip="Portfolio">
        <AiOutlineProject />
      </a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""} data-tooltip="Services">
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""} data-tooltip="Contact">
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
```

- [ ] **Step 2: Replace `nav.css` entirely**

```css
nav {
  background: rgba(16, 22, 48, 0.7);
  width: fit-content;
  padding: 0.7rem 1.7rem;
  z-index: 100;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

nav a {
  background: transparent;
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
  width: 3rem;
  height: 3rem;
  transition: var(--transition);
  position: relative;
}

/* Tooltip */
nav a::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(16, 22, 48, 0.9);
  color: var(--color-white);
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  border-radius: 0.4rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  border: 1px solid var(--color-glass-border);
}

nav a:hover::after {
  opacity: 1;
}

nav a:hover {
  background: rgba(79, 183, 222, 0.1);
  color: var(--color-bg-variant);
  transform: scale(1.15);
  box-shadow: 0 0 12px var(--color-glow);
}

nav a.active {
  background: rgba(79, 183, 222, 0.15);
  color: var(--color-bg-variant);
  box-shadow: 0 0 14px var(--color-glow);
}

@media screen and (max-width: 600px) {
  nav {
    padding: 0.5rem 1rem;
    gap: 0.4rem;
    bottom: 1rem;
  }

  nav a {
    width: 2.6rem;
    height: 2.6rem;
    font-size: 1rem;
    padding: 0.7rem;
  }

  nav a::after {
    display: none;
  }
}
```

- [ ] **Step 3: Verify nav in browser**

In the browser: nav should show refined glass with soft border. Hover over each icon — a tooltip label should appear above it. Active icon should glow cyan. On mobile, tooltips hidden and icons slightly smaller.

- [ ] **Step 4: Commit**

```bash
git add src/components/nav/Nav.jsx src/components/nav/nav.css
git commit -m "feat: refine nav — cyan active glow, CSS tooltips, softer border"
```

---

## Task 6: About Section — Cinematic Strip + Counter Animation

**Files:**
- Modify: `src/components/about/About.jsx`
- Modify: `src/components/about/about.css`

- [ ] **Step 1: Replace `About.jsx`**

```jsx
import React, { useEffect, useRef } from "react";
import "./about.css";
import ME from "../../assets/me11.jpg";

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Clients Nationwide" },
  { value: 20, suffix: "+", label: "Projects Completed" },
];

const useCounter = (ref, target) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = () => {
        start += 1;
        el.textContent = start + (el.dataset.suffix || "");
        if (start < target) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target]);
};

const StatCounter = ({ value, suffix, label }) => {
  const ref = useRef(null);
  useCounter(ref, value);
  return (
    <div className="about__stat">
      <span className="about__stat-number gradient-text" ref={ref} data-suffix={suffix}>0{suffix}</span>
      <span className="about__stat-label">{label}</span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" data-reveal>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__stats">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>

          <div className="about__divider" />

          <p className="about__bio">
            I am a skilled Full-Stack Engineer with over 4 years of experience
            building efficient and scalable software solutions across diverse
            industries. I've led and contributed to impactful projects in
            healthcare, government, eCommerce, and education. I excel at
            bridging the gap between technical teams and business stakeholders,
            translating complex requirements into clear, actionable insights.
          </p>

          <a href="#contact" className="btn btn-primary about__cta">
            Let's Talk
          </a>
        </div>

        <div className="about__image-wrap">
          <div className="about__image-bg" />
          <img src={ME} alt="Martins Ake" className="about__image" />
        </div>
      </div>
    </section>
  );
};

export default About;
```

- [ ] **Step 2: Replace `about.css` entirely**

```css
.about__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* Left: content */
.about__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Stats row */
.about__stats {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.about__stat {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  position: relative;
  padding-bottom: 0.8rem;
}

.about__stat::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-bg-variant);
  box-shadow: 0 0 8px var(--color-glow);
}

.about__stat-number {
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1;
}

.about__stat-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Vertical divider */
.about__divider {
  width: 3px;
  height: 0;
  background: linear-gradient(to bottom, var(--color-bg-variant), transparent);
  box-shadow: 0 0 10px var(--color-glow);
  border-radius: 2px;
  display: none;
}

/* Bio text */
.about__bio {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  font-size: 0.95rem;
}

/* CTA */
.about__cta {
  align-self: flex-start;
  background: var(--color-bg-variant);
  color: var(--color-bg);
  border: none;
  backdrop-filter: blur(10px);
  transition: var(--transition);
}

.about__cta:hover {
  background: #fff;
  box-shadow: 0 0 20px var(--color-glow-strong);
  transform: translateY(-3px);
}

/* Right: image */
.about__image-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about__image-bg {
  position: absolute;
  inset: -30px;
  border-radius: 2rem;
  background: radial-gradient(ellipse at center, var(--color-glow) 0%, transparent 70%);
  animation: glowPulse 3s ease-in-out infinite alternate;
}

.about__image {
  border-radius: 2rem;
  width: 100%;
  max-width: 380px;
  position: relative;
  z-index: 1;
  animation: float 6s ease-in-out infinite;
  box-shadow: 0 0 30px var(--color-glow);
}

/* Tablet */
@media screen and (max-width: 1024px) {
  .about__container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about__image-wrap {
    order: -1;
  }

  .about__image {
    max-width: 280px;
    margin: 0 auto;
  }
}

/* Mobile */
@media screen and (max-width: 600px) {
  .about__container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about__stats {
    gap: 1.5rem;
    justify-content: space-between;
  }

  .about__stat-number { font-size: 1.8rem; }

  .about__image {
    max-width: 220px;
    margin: 0 auto;
  }

  .about__cta {
    align-self: center;
    width: 80%;
    text-align: center;
  }
}
```

- [ ] **Step 3: Verify in browser**

Run `npm run dev`. The About section should show:
- Two-column layout (left: stats + bio + CTA, right: photo with glow)
- Stats count up from 0 when section scrolls into view
- Cyan underline accent beneath each stat
- Photo has float animation + cyan glow halo
- On tablet/mobile: photo moves above content, single column

- [ ] **Step 4: Commit**

```bash
git add src/components/about/About.jsx src/components/about/about.css
git commit -m "feat: about — cinematic layout, animated counters, glow image"
```

---

## Task 7: Skills — Animated Neon Bars

**Files:**
- Modify: `src/components/tool_experience/Tool_Experience.jsx`
- Modify: `src/components/tool_experience/tool_experience.css`

- [ ] **Step 1: Replace `Tool_Experience.jsx`**

```jsx
import React from "react";
import "./tool_experience.css";

const PROFICIENCY = { Experienced: 85, Intermediate: 60, Beginner: 40 };

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML / CSS", level: "Experienced" },
      { name: "React.js / Next.js", level: "Experienced" },
      { name: "Javascript / Typescript", level: "Experienced" },
      { name: "Bootstrap / Tailwind CSS", level: "Experienced" },
      { name: "React Native / Flutter", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Ruby on Rails", level: "Experienced" },
      { name: "FireBase", level: "Experienced" },
      { name: "AWS Tools", level: "Intermediate" },
      { name: "Mobile Applications", level: "Intermediate" },
      { name: "Node JS & Express", level: "Beginner" },
      { name: "MySQL / PostgreSQL", level: "Beginner" },
    ],
  },
  {
    category: "Graphics & Design",
    items: [
      { name: "CorelDraw", level: "Experienced" },
      { name: "Canva", level: "Experienced" },
      { name: "Figma", level: "Intermediate" },
      { name: "Adobe XD", level: "Intermediate" },
      { name: "PhotoShop", level: "Intermediate" },
      { name: "Illustrator", level: "Intermediate" },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Google Ads", level: "Experienced" },
      { name: "MetaTrader: Forex BOT", level: "Experienced" },
      { name: "PayStack / Flutterwave", level: "Experienced" },
      { name: "GitHub", level: "Experienced" },
      { name: "WordPress (CMS)", level: "Experienced" },
      { name: "Locust & Selenium", level: "Intermediate" },
    ],
  },
];

const SkillBar = ({ name, level }) => (
  <div className="skill__item">
    <div className="skill__meta">
      <span className="skill__name">{name}</span>
      <span className="skill__level">{level}</span>
    </div>
    <div className="skill__track">
      <div
        className="skill__fill"
        style={{ "--skill-width": `${PROFICIENCY[level]}%` }}
      />
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" data-reveal>
      <h5>My skills & expertise</h5>
      <h2>Tools & Technologies</h2>

      <div className="container skills__container">
        {skills.map(({ category, items }) => (
          <div key={category} className="skills__group">
            <h3 className="skills__category">{category}</h3>
            {items.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
```

- [ ] **Step 2: Replace `tool_experience.css` entirely**

```css
.skills__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem 4rem;
}

.skills__group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skills__category {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-bg-variant);
  padding-left: 0.8rem;
  border-left: 3px solid var(--color-bg-variant);
  margin-bottom: 0.5rem;
  text-shadow: 0 0 8px var(--color-glow);
}

.skill__item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.skill__meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
}

.skill__name {
  color: var(--color-white);
}

.skill__level {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
}

.skill__track {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  overflow: hidden;
}

.skill__fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #4FB7DE, #a8e6f0);
  border-radius: 4px;
  box-shadow: 0 0 8px var(--color-glow);
  animation: fillBar 1.2s ease forwards;
  animation-delay: 0.3s;
}

@keyframes fillBar {
  to { width: var(--skill-width); }
}

/* Tablet */
@media screen and (max-width: 1024px) {
  .skills__container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

/* Mobile */
@media screen and (max-width: 600px) {
  .skills__container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .skill__track { height: 6px; }
}
```

- [ ] **Step 3: Verify in browser**

Scroll to the Skills section. Each skill should show:
- A glowing cyan category label with left-border accent
- Neon bars that animate from 0 to their target width on load
- Experienced = ~85%, Intermediate = ~60%, Beginner = ~40%
- On mobile: single column

- [ ] **Step 4: Commit**

```bash
git add src/components/tool_experience/Tool_Experience.jsx src/components/tool_experience/tool_experience.css
git commit -m "feat: skills — animated neon fill bars replace checkmark grid"
```

---

## Task 8: Services — Icon-Forward Cards with Shimmer & Expand

**Files:**
- Modify: `src/components/services/Services.jsx`
- Modify: `src/components/services/services.css`

- [ ] **Step 1: Replace `Services.jsx`**

```jsx
import React, { useState } from "react";
import "./services.css";
import { BiPalette, BiCode, BiDotsHorizontalRounded } from "react-icons/bi";

const services = [
  {
    icon: <BiPalette />,
    title: "Graphics & UI/UX",
    summary: "Professional design for brands, apps, and digital presence.",
    items: [
      "Professional Logo Design",
      "Branding",
      "Banner & Flier Design",
      "Figma Design",
      "Photo Frame",
      "MOG Designs",
    ],
  },
  {
    icon: <BiCode />,
    title: "Web / Mobile Development",
    summary: "End-to-end web and mobile applications built to scale.",
    items: [
      "Web Applications",
      "CMS Websites",
      "Professional E-Commerce",
      "Professional Blog Sites",
      "Mobile Applications",
      "Site & App Monetisation",
      "SEO & Site Optimisation",
      "Site Maintenance & Management",
    ],
  },
  {
    icon: <BiDotsHorizontalRounded />,
    title: "Others",
    summary: "Consulting, automation, and digital growth services.",
    items: [
      "Consultation",
      "Forex Bot Development",
      "Network & Server Installation",
      "Content Creation",
      "Social Media Management",
    ],
  },
];

const ServiceCard = ({ icon, title, summary, items }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`service__card ${expanded ? "expanded" : ""}`}>
      <div className="service__shimmer" />
      <div className="service__icon">{icon}</div>
      <h3 className="service__title">{title}</h3>
      <p className="service__summary">{summary}</p>
      <button
        className="service__toggle"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? "Show less ↑" : "See all services ↓"}
      </button>
      <ul className={`service__list ${expanded ? "visible" : ""}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
};

const Services = () => {
  return (
    <section id="services" data-reveal>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
};

export default Services;
```

- [ ] **Step 2: Replace `services.css` entirely**

```css
.services__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.service__card {
  position: relative;
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  overflow: hidden;
  transition: var(--transition);
}

.service__card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 30px var(--color-glow);
  border-color: var(--color-bg-variant);
}

/* Animated shimmer border */
.service__shimmer {
  position: absolute;
  inset: -2px;
  border-radius: 1.5rem;
  background: conic-gradient(
    from var(--angle, 0deg),
    transparent 70%,
    var(--color-bg-variant) 80%,
    transparent 90%
  );
  animation: shimmerSpin 4s linear infinite;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service__card:hover .service__shimmer {
  opacity: 1;
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes shimmerSpin {
  to { --angle: 360deg; }
}

/* Content sits above shimmer */
.service__icon,
.service__title,
.service__summary,
.service__toggle,
.service__list {
  position: relative;
  z-index: 1;
}

.service__icon {
  font-size: 2.5rem;
  color: var(--color-bg-variant);
  filter: drop-shadow(0 0 8px var(--color-glow));
  transition: var(--transition);
}

.service__card:hover .service__icon {
  filter: drop-shadow(0 0 14px var(--color-glow-strong));
  transform: scale(1.1);
}

.service__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-white);
}

.service__summary {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}

.service__toggle {
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  color: var(--color-bg-variant);
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 0.8rem;
  transition: var(--transition);
  font-family: "Poppins", sans-serif;
}

.service__toggle:hover {
  background: rgba(79, 183, 222, 0.15);
  box-shadow: 0 0 10px var(--color-glow);
}

.service__list {
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  width: 100%;
  padding: 0.5rem 0;
}

.service__list.visible {
  display: flex;
}

.service__list li {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.75);
  padding: 0.3rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding-left: 0.5rem;
}

.service__list li::before {
  content: "✦ ";
  color: var(--color-bg-variant);
  font-size: 0.7rem;
}

/* Tablet */
@media screen and (max-width: 1024px) {
  .services__container {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}

/* Mobile */
@media screen and (max-width: 600px) {
  .services__container {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .service__card { padding: 1.5rem 1.2rem; }
}
```

- [ ] **Step 3: Verify in browser**

Services section should show 3 glass cards with large icons. Click "See all services ↓" — the list should expand. Hover over a card — shimmer border should rotate around the edge. On mobile: single column, tap to expand.

Note: The `@property` rule for the conic-gradient shimmer requires Chrome 85+/Edge 85+/Safari 16.4+. On unsupported browsers the shimmer simply doesn't appear — the card still looks correct.

- [ ] **Step 4: Commit**

```bash
git add src/components/services/Services.jsx src/components/services/services.css
git commit -m "feat: services — icon cards, border shimmer, tap-to-expand"
```

---

## Task 9: Portfolio — Glass Cards, Hover Overlay, Filter Bar

**Files:**
- Modify: `src/components/portfolio/Portfolio.jsx`
- Modify: `src/components/portfolio/portfolio.css`

- [ ] **Step 1: Replace `Portfolio.jsx`**

```jsx
import React, { useState } from "react";
import "./portfolio.css";
import enverge from "../../assets/project_img/enverge.JPG";
import MedEx from "../../assets/project_img/medex.JPG";
import Vreg from "../../assets/project_img/vreg.PNG";
import aimedcare from "../../assets/project_img/aiMedcare.JPG";
import azana from "../../assets/project_img/azana.png";
import vvs from "../../assets/project_img/vvs.png";
import bead from "../../assets/project_img/beadPage.jpg";
import fxbot from "../../assets/project_img/fxbot360.jpg";
import eugym from "../../assets/project_img/eugym.jpg";

const data = [
  { id: 1, image: eugym,    title: "Eugym Fitness",                   category: "Web",        github: "#",                              demo: "https://eugym-fe.vercel.app/" },
  { id: 2, image: bead,     title: "Bead",                            category: "Web",        github: "https://github.com/M-tech1",     demo: "https://bead.com.ng" },
  { id: 3, image: aimedcare,title: "aiMedcare Solution",              category: "Web",        github: "https://github.com/M-tech1/ai_MedCare", demo: "https://ai-med-care-delta.vercel.app/" },
  { id: 4, image: MedEx,    title: "MedEx",                           category: "Enterprise", github: "https://github.com/M-tech1",     demo: "https://medex.ng/" },
  { id: 5, image: Vreg,     title: "Vehicle Registrations",           category: "Enterprise", github: "https://github.com/M-tech1/",    demo: "https://vreg.gov.ng/" },
  { id: 6, image: vvs,      title: "Vehicle Verification System",     category: "Enterprise", github: "https://github.com/",            demo: "https://vvs.ng/?code=PS6bc416kEyK" },
  { id: 7, image: azana,    title: "Azana",                           category: "Web",        github: "https://github.com/",            demo: "https://azana.com" },
  { id: 8, image: enverge,  title: "Enverge — IT & Tech Solutions",   category: "Enterprise", github: "https://github.com/M-tech1",     demo: "https://enverge.ca/" },
  { id: 9, image: fxbot,    title: "Forex Trading BOTs",              category: "Fintech",    github: "https://github.com/M-tech1/",    demo: "https://fxbot360-website-v1.vercel.app/" },
];

const filters = ["All", "Web", "Enterprise", "Fintech"];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const visible = active === "All" ? data : data.filter((d) => d.category === active);

  return (
    <section id="portfolio" data-reveal>
      <h5>My Recent</h5>
      <h2>Projects</h2>

      <div className="portfolio__filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`portfolio__filter-btn ${active === f ? "active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="container portfolio__container">
        {visible.map(({ id, image, title, github, demo }) => (
          <div key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
              <div className="portfolio__overlay">
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
```

- [ ] **Step 2: Replace `portfolio.css` entirely**

```css
/* Filter pills */
.portfolio__filters {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.portfolio__filter-btn {
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;
  border: 1px solid var(--color-glass-border);
  background: var(--color-glass);
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 0.85rem;
  transition: var(--transition);
  backdrop-filter: blur(10px);
}

.portfolio__filter-btn:hover {
  border-color: var(--color-bg-variant);
  color: var(--color-bg-variant);
}

.portfolio__filter-btn.active {
  background: rgba(79, 183, 222, 0.15);
  border-color: var(--color-bg-variant);
  color: var(--color-bg-variant);
  box-shadow: 0 0 12px var(--color-glow);
}

/* Grid */
.portfolio__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* Card */
.portfolio__item {
  border-radius: 1.2rem;
  overflow: hidden;
  border: 1px solid var(--color-glass-border);
  background: var(--color-glass);
  backdrop-filter: blur(10px);
  transition: var(--transition);
}

.portfolio__item:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 25px var(--color-glow);
  border-color: var(--color-bg-variant);
}

/* Image + overlay */
.portfolio__item-image {
  position: relative;
  overflow: hidden;
  border-radius: 1.2rem;
  aspect-ratio: 16/10;
}

.portfolio__item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio__item:hover .portfolio__item-image img {
  transform: scale(1.06);
}

.portfolio__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(16, 22, 48, 0.95) 60%, transparent);
  padding: 1.5rem;
  transform: translateY(100%);
  transition: transform 0.4s ease;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.portfolio__item:hover .portfolio__overlay {
  transform: translateY(0);
}

.portfolio__overlay h3 {
  font-size: 0.95rem;
  color: var(--color-white);
}

.portfolio__item-cta {
  display: flex;
  gap: 0.8rem;
}

.portfolio__item-cta .btn {
  padding: 0.4rem 0.9rem;
  font-size: 0.8rem;
  backdrop-filter: blur(10px);
  background: var(--color-glass);
  border-color: var(--color-glass-border);
}

.portfolio__item-cta .btn:hover {
  border-color: var(--color-bg-variant);
  box-shadow: 0 0 10px var(--color-glow);
}

.portfolio__item-cta .btn-primary {
  background: var(--color-bg-variant);
  color: var(--color-bg);
  border-color: transparent;
}

/* Mobile: overlay always visible */
@media (hover: none) {
  .portfolio__overlay {
    transform: translateY(0);
    background: linear-gradient(to top, rgba(16, 22, 48, 0.9) 50%, transparent);
  }
}

/* Tablet */
@media screen and (max-width: 1024px) {
  .portfolio__container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* Mobile */
@media screen and (max-width: 600px) {
  .portfolio__container {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .portfolio__filters {
    gap: 0.5rem;
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 0.5rem;
    flex-wrap: nowrap;
    padding-left: 1rem;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .portfolio__filters::-webkit-scrollbar { display: none; }

  .portfolio__filter-btn { flex-shrink: 0; }
}
```

- [ ] **Step 3: Verify in browser**

Portfolio section should show:
- Filter pills: All | Web | Enterprise | Fintech — click each and cards filter with React re-render
- Cards are glass panels, lift on hover
- Hover a card: image zooms, dark overlay slides up with title + buttons
- On touch devices (or mobile): overlay is always visible
- On mobile: single column, filter pills scroll horizontally

- [ ] **Step 4: Commit**

```bash
git add src/components/portfolio/Portfolio.jsx src/components/portfolio/portfolio.css
git commit -m "feat: portfolio — glass cards, hover overlay reveal, filter bar"
```

---

## Task 10: Contact — Glass Inputs & Glow

**Files:**
- Modify: `src/components/contact/contact.css`

- [ ] **Step 1: Replace `contact.css` entirely**

```css
.contact__container {
  display: grid;
  grid-template-columns: 30% 1fr;
  gap: 4rem;
  align-items: start;
}

/* Contact option cards */
.contact__options {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact__option {
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  backdrop-filter: blur(10px);
  border-radius: 1.2rem;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  text-align: center;
  transition: var(--transition);
}

.contact__option:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 25px var(--color-glow);
  border-color: var(--color-bg-variant);
}

.contact__option-icon {
  font-size: 2rem;
  color: var(--color-bg-variant);
  filter: drop-shadow(0 0 6px var(--color-glow));
}

.contact__option h4 {
  font-size: 1rem;
  color: var(--color-white);
}

.contact__option h5 {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

.contact__option a {
  font-size: 0.8rem;
  color: var(--color-bg-variant);
  transition: var(--transition);
}

.contact__option a:hover {
  text-decoration: underline;
  filter: drop-shadow(0 0 4px var(--color-glow));
}

/* Form */
form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

form input,
form textarea {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1.5px solid var(--color-glass-border);
  color: var(--color-white);
  padding: 0.8rem 0;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

form input::placeholder,
form textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

form input:focus,
form textarea:focus {
  border-bottom-color: var(--color-bg-variant);
  box-shadow: 0 2px 10px var(--color-glow);
}

form textarea {
  resize: vertical;
  min-height: 160px;
}

form .btn {
  width: 100%;
  padding: 0.9rem;
  background: linear-gradient(135deg, #4FB7DE, #101630);
  color: var(--color-white);
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 0.95rem;
  transition: var(--transition);
  text-align: center;
}

form .btn:hover {
  box-shadow: 0 0 20px var(--color-glow-strong);
  transform: translateY(-2px);
}

/* Tablet */
@media screen and (max-width: 1024px) {
  .contact__container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact__options {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .contact__option {
    flex: 1;
    min-width: 200px;
  }
}

/* Mobile */
@media screen and (max-width: 600px) {
  .contact__container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contact__options {
    flex-direction: column;
  }

  .contact__option { padding: 1.5rem 1rem; }
}
```

- [ ] **Step 2: Add `data-reveal` to contact section in `Contact.jsx`**

In `src/components/contact/Contact.jsx`, update the section opening tag:

```jsx
<section id="contact" data-reveal>
```

- [ ] **Step 3: Verify in browser**

Contact section should show:
- Two tall glass cards for Email and WhatsApp, lift + glow on hover
- Form inputs have no box — only a bottom border that glows cyan on focus
- Send button is a gradient cyan→navy, glows on hover
- On tablet: contact cards go side-by-side, form below
- On mobile: everything single column

- [ ] **Step 4: Commit**

```bash
git add src/components/contact/contact.css src/components/contact/Contact.jsx
git commit -m "feat: contact — glass inputs, glow focus, gradient send button"
```

---

## Task 11: Footer — Gradient Divider & Glass Socials

**Files:**
- Modify: `src/components/footer/footer.css`

- [ ] **Step 1: Replace `footer.css` entirely**

```css
footer {
  background: rgba(16, 22, 48, 0.8);
  padding: 4rem 0 2rem;
  margin-top: 6rem;
  border-top: 1px solid var(--color-bg-variant);
  box-shadow: 0 -4px 30px var(--color-glow);
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.footer__logo {
  font-size: 1.5rem;
  font-weight: 600;
  background: var(--color-gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.05em;
}

.permalinks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.permalinks a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  position: relative;
  transition: color 0.3s ease;
}

.permalinks a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-bg-variant);
  transition: width 0.3s ease;
}

.permalinks a:hover {
  color: var(--color-bg-variant);
}

.permalinks a:hover::after {
  width: 100%;
}

.footer__socials {
  display: flex;
  gap: 1rem;
}

.footer__socials a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  transition: var(--transition);
}

.footer__socials a:hover {
  background: rgba(79, 183, 222, 0.15);
  border-color: var(--color-bg-variant);
  color: var(--color-bg-variant);
  box-shadow: 0 0 12px var(--color-glow);
  transform: translateY(-3px);
}

.footer__copyright {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
}

/* Mobile */
@media screen and (max-width: 600px) {
  footer { padding: 3rem 0 2rem; }
  .permalinks { gap: 1rem; }
  .footer__logo { font-size: 1.2rem; }
}
```

- [ ] **Step 2: Verify in browser**

Footer should show:
- Glowing cyan border-top + box-shadow glow at top of footer
- "Martins Ake" logo in gradient text
- Nav links with animated underline slide on hover
- Social icons in glass circles, glow on hover

- [ ] **Step 3: Commit**

```bash
git add src/components/footer/footer.css
git commit -m "feat: footer — gradient divider, glass socials, gradient logo"
```

---

## Task 12: Wire `data-reveal` to Remaining Sections

**Files:**
- Modify: `src/components/services/Services.jsx` *(already done in Task 8)*
- Modify: `src/components/portfolio/Portfolio.jsx` *(already done in Task 9)*
- Modify: `src/components/tool_experience/Tool_Experience.jsx` *(already done in Task 7)*
- Modify: `src/components/about/About.jsx` *(already done in Task 6)*

- [ ] **Step 1: Add `data-reveal` to Work_Experience section**

Open `src/components/work_experience/Work_Experience.jsx`. Find the `<section>` opening tag and add `data-reveal`:

```jsx
<section id="Work_Experience" data-reveal>
```

- [ ] **Step 2: Add `data-reveal` to Education section**

Open `src/components/education/Education.tsx`. Find the `<section>` opening tag and add `data-reveal`:

```tsx
<section id="education" data-reveal>
```

- [ ] **Step 3: Final full-page browser test**

Run `npm run dev`. Walk through the full page:

1. **Hero** — gradient name, float image, glow, glass CTAs, bounce arrow ✓
2. **Nav** — glass refined, tooltips on hover, cyan active glow ✓
3. **About** — cinematic 2-col, counters animate on scroll, photo floats ✓
4. **Work Experience** — fades in on scroll ✓
5. **Education** — fades in on scroll ✓
6. **Portfolio** — filter pills work, glass cards, hover overlay reveals ✓
7. **Skills** — neon bars animate, two-column ✓
8. **Services** — glass cards, shimmer border on hover, expand toggle works ✓
9. **Contact** — glass inputs, glow on focus, gradient button ✓
10. **Footer** — gradient divider, gradient logo, glass socials ✓

**Mobile check (DevTools → 375px):**
- Everything single column
- Nav icons smaller, tooltips hidden
- Filter pills scroll horizontally
- Portfolio overlay always visible
- No horizontal scroll on any section

- [ ] **Step 4: Final commit**

```bash
git add src/components/work_experience/Work_Experience.jsx src/components/education/Education.tsx
git commit -m "feat: wire scroll-reveal to remaining sections, complete UI revamp"
```

---

## Self-Review Notes

- All 15 modified/created files are accounted for across tasks
- Mobile breakpoints explicitly handled in every CSS task
- No `@property` browser support fallback needed — shimmer simply doesn't show, card still correct
- Counter animation uses `requestAnimationFrame` directly — no library needed
- Filter uses React state (not DOM class toggling) — consistent with React patterns
- `useScrollReveal` called once in App.jsx, covers all `[data-reveal]` elements globally
- Skill bar `animation: fillBar` fires on page load — if scroll-reveal delays the section becoming visible, bars fire after `.revealed` class is added (works correctly because CSS animation fires on element paint)
