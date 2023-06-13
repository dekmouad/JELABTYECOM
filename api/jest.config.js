/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',// Specifies the test runner preset to use (in this case, ts-jest for TypeScript projects)
  testEnvironment: 'node',// Specifies the test environment (in this case, Node.js)
  testMatch: ["**/**/*.test.js"],// Specifies the pattern for test file matching
  verbose: true,// Enables verbose output for test results
  forceExit: true,// Forces Jest to exit after all tests have completed
 // clearMocks: true,// Uncomment this line if you want Jest to automatically clear mock calls and instances between tests
};