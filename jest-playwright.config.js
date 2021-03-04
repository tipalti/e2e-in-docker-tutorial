// jest-playwright.config.js

module.exports = {
    browsers: ['chromium', 'webkit', 'firefox'],
    serverOptions: {
        command: 'npm run start',
        port: 8080,
        usedPortAction: 'kill',
        waitOnScheme: {
            delay: 1000,
        }
    }
}