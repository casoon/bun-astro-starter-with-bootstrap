const lighthouse = require('lighthouse');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const chromeLauncher = require('chrome-launcher');

async function runLighthouse() {
    const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});

    const opts = {
        logLevel: 'info',
        output: 'html',
        onlyCategories: ['accessibility'],
        port: chrome.port
    };

    const runnerResult = await lighthouse(`file://${path.resolve(__dirname, 'dist/index.html')}`, opts);

    // Save the Lighthouse report as HTML
    fs.writeFileSync('lighthouse-report.html', runnerResult.report);

    console.log('Lighthouse score:', runnerResult.lhr.categories.accessibility.score * 100);

    await chrome.kill();
}

runLighthouse();
