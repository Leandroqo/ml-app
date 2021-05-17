module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/.husk", "<rootDir>/tests-utils"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    ".+\\.(scss)$": "identity-obj-proxy"
  },
  moduleNameMapper: {
    ".+\\.(scss)$": `identity-obj-proxy`,
    "^components(.*)$": "<rootDir>/components$1",
    "^containers(.*)$": "<rootDir>/containers$1",
    "^lib(.*)$": "<rootDir>/lib$1",
    "^mocks(.*)$": "<rootDir>/mocks$1"
  }
};