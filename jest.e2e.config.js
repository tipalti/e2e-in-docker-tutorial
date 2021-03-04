module.exports = {
  preset: 'jest-playwright-preset',
  setupFilesAfterEnv: ['expect-playwright'],
  testMatch: ['**/*.e2e.js']
};