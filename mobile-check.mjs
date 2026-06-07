import { chromium } from "playwright";
import path from "path";

const URL = "http://localhost:3001";
const OUT = "mobile-screenshots";

const sections = [
  { name: "01-hero",        scrollY: 0 },
  { name: "02-about",       id: "about" },
  { name: "03-work",        id: "Work_Experience" },
  { name: "04-education",   id: "education" },
  { name: "05-portfolio",   id: "portfolio" },
  { name: "06-skills",      id: "experience" },
  { name: "07-services",    id: "services" },
  { name: "08-contact",     id: "contact" },
  { name: "09-footer",      scrollY: 999999 },
];

const browser = await chromium.launch();

// iPhone 13 viewport
const page = await browser.newPage({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});

await page.goto(URL, { waitUntil: "networkidle" });
await page.waitForTimeout(2000);

import { mkdirSync } from "fs";
mkdirSync(OUT, { recursive: true });

for (const section of sections) {
  if (section.id) {
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "instant" });
    }, section.id);
  } else {
    await page.evaluate((y) => window.scrollTo(0, y), section.scrollY);
  }
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT}/${section.name}.png` });
  console.log(`✓ ${section.name}`);
}

await browser.close();
console.log("\nAll screenshots saved to ./" + OUT);
