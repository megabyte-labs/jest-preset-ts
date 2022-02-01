import * as isCI from 'is-ci'

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  cache: !isCI,
  cacheDirectory: '<rootDir>/.jest-cache',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>**/*.(t|j)s',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/*.module.ts'
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov', 'cobertura'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  modulePathIgnorePatterns: ['.npm'],
  projects: [
    {
      displayName: 'Jest',
      moduleNameMapper: {
        '@mblabs/(.*)-(.*)': '<rootDir>/src/$2'
      },
      preset: 'ts-jest',
      testMatch: ['<rootDir>/src/**/*.spec.ts'],
      transform: {
        '^.+\\.(t|j)s$': 'ts-jest'
      }
    },
    {
      displayName: 'ESLint',
      moduleNameMapper: {
        '@mblabs/(.*)-(.*)': '<rootDir>/src/$2'
      },
      runner: 'jest-runner-eslint',
      testMatch: ['<rootDir>/src/**/*.spec.ts'],
      transform: {
        '^.+\\.(t|j)s$': 'ts-jest'
      }
    }
  ],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        filename: 'code-coverage.html',
        logoImgPath: './.common/assets/logo-icon-square-200x200.png',
        openReport: true,
        pageTitle: 'Code Coverage Report',
        publicPath: './coverage'
      }
    ]
  ],
  rootDir: 'src',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/e2e/',
    '<rootDir>/lib/',
    '<rootDir>/node_modules/'
  ],
  watchPlugins: ['jest-runner-eslint/watch-fix']
}
