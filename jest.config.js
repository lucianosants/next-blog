const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

const customJestConfig = {
    coverageDirectory: "coverage",
    collectCoverageFrom: ["src/**/*.ts(x)?"],
    collectCoverage: false,

    testEnvironment: "jsdom",
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)",
    ],
    testPathIgnorePatterns: ["/node_modules/", "/.next/", "/out/", "/public/"],

    setupFilesAfterEnv: ["./jest.setup.js"],
};

module.exports = createJestConfig(customJestConfig);
