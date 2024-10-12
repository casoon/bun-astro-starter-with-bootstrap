const puppeteer = require('puppeteer');
const axeCore = require('axe-core');
const fs = require('fs');
const path = require('path');

async function runAccessibilityTests() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Lade deine lokale Seite
    await page.goto(`file://${path.resolve(__dirname, 'dist/index.html')}`);

    // Integriere axe-core in die Seite
    await page.addScriptTag({path: require.resolve('axe-core')});

    // Führe die Accessibility-Prüfung durch
    const results = await page.evaluate(async () => {
        return await axe.run();
    });

    if (results.violations.length) {
        console.log('Accessibility violations:');
        console.log(results.violations);
    } else {
        console.log('Keine Accessibility-Verstöße gefunden!');
    }

    await browser.close();
}
