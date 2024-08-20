import type { Config } from "jest";

const config: Config = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  projects: [
    {
      preset: "ts-jest",
      testEnvironment: "node",
      testMatch: ["<rootDir>/packages/backend/src/*.test.ts"],
      collectCoverageFrom: ["<rootDir>/packages/backend/src/*.ts"],
    },
    {
      preset: "ts-jest",
      testEnvironment: "node",
      testMatch: ["<rootDir>/packages/shared/src/utils/*.test.ts"],
      collectCoverageFrom: ["<rootDir>/packages/shared/src/utils/*.ts"],
    },
  ],
};

export default config;
