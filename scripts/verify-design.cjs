const { chromium } = require('../.artifacts/browser/node_modules/playwright');
const fs = require('node:fs/promises');
const { spawn } = require('node:child_process');
const assert = require('node:assert/strict');
const url = 'http://127.0.0.1:3010';
const routes = ['/', '/projects', '/projects/py-mini-systems', '/projects/snowtify', '/projects/rez-bot', '/projects/staroptimizer'];

(async () => {
  const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', '3010'], { stdio: 'inherit' });
  let browser;
  try {
    let ready = false;
    for (let i = 0; i < 60; i++) {
      try { if ((await fetch(url)).ok) { ready = true; break; } } catch {}
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    assert.ok(ready, 'Production server did not start');
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await fs.mkdir('.artifacts/design', { recursive: true });
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const route of routes) {
        const response = await page.goto(url + route, { waitUntil: 'networkidle' });
        assert.equal(response.status(), 200, route);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${width}px overflow on ${route}`);
        for (const image of await page.locator('img').all()) await image.evaluate(el => el.decode());
      }
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(url, { waitUntil: 'networkidle' });
    assert.deepEqual(await page.locator('.spotlight-bottom strong').allTextContents(), ['Python Mini Systems', 'Snowtify', 'Rez Bot']);
    await page.screenshot({ path: '.artifacts/design/home-desktop.png', fullPage: true });
    const desktop = await page.screenshot({ type: 'jpeg', quality: 75 });
    await fs.writeFile('.artifacts/design/hero-desktop.jpg', desktop);
    await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' });
    const dark = await page.screenshot({ type: 'jpeg', quality: 70 });
    await fs.writeFile('.artifacts/design/hero-dark.jpg', dark);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ colorScheme: 'light', reducedMotion: 'reduce' });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'About', exact: true }).click();
    assert.equal(await page.getByRole('button', { name: 'Open navigation' }).getAttribute('aria-expanded'), 'false');
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('button', { name: 'Open navigation' }).evaluate(el => el === document.activeElement), true);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.classList.contains('skip-link')), true);
    await page.keyboard.press('Enter');
    assert.equal(new URL(page.url()).hash, '#work');
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.screenshot({ path: '.artifacts/design/home-mobile.png', fullPage: true });
    const mobile = await page.screenshot({ type: 'jpeg', quality: 75 });
    await fs.writeFile('.artifacts/design/hero-mobile.jpg', mobile);
    await page.evaluate(() => document.documentElement.style.fontSize = '200%');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, '200% text must reflow');
    await page.screenshot({ path: '.artifacts/design/mobile-large-text.png', fullPage: true });
    assert.equal(await page.locator('.hero-title').evaluate(el => getComputedStyle(el).animationName), 'none');
    assert.deepEqual(errors, []);
    console.log('PASS: 24 route/viewport checks; images; light/dark appearance; mobile navigation; Escape/focus; keyboard skip link; 200% text; reduced motion.');
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
