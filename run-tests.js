const { chromium } = require('playwright');
const path = require('path');

async function runWithViewport(viewport, label) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport });

  page.on('console', msg => console.log('console:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('pageerror:', err.message));

  const filePath = path.resolve(__dirname, 'tests.html');
  await page.goto('file://' + filePath);

  await page.waitForSelector('#summary');

  let summary = await page.textContent('#summary');
  const start = Date.now();
  while (!summary.includes('Tests complete') && Date.now() - start < 60000) {
    await page.waitForTimeout(200);
    summary = await page.textContent('#summary');
  }

  console.log(`\n[${label}] ${summary}`);
  const rows = await page.$$eval('#report tbody tr', trs => trs.map(tr => tr.textContent.trim()));
  const failed = rows.filter(r => r.includes('FAIL'));
  if (failed.length) {
    console.log(`[${label}] FAILED TESTS:`);
    failed.forEach(r => console.log(r));
    await browser.close();
    return { ok: false };
  }

  await browser.close();
  return { ok: true };
}

(async () => {
  const desktop = await runWithViewport({ width: 1280, height: 720 }, 'desktop');
  const mobile = await runWithViewport({ width: 390, height: 844 }, 'mobile');

  if (!desktop.ok || !mobile.ok) process.exitCode = 1;
})();
