import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
const page = await browser.newPage();
await page.goto("https://contractanalysis.straive.app");

// Wait for the page to load
await page.waitForSelector("body");

// Scroll down by pressing PageDown every second for 5 seconds
for (let i = 0; i < 5; i++) {
  await page.keyboard.press("PageDown");
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

// close the browser
await browser.close();
