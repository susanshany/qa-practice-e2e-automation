# QA Practice E2E Automation Agent

## Purpose
This repository contains a Playwright end-to-end automation framework written in TypeScript. The agent should help with test development, debugging, and maintenance tasks for this project.

## Repository Overview
- `package.json` - project dependencies, scripts, and npm lifecycle hooks.
- `playwright.config.ts` - Playwright test configuration.
- `tests/` - test spec files.
- `pages/` - page object model classes.
- `support/` - helper files and configuration data.
- `test_data/` - external test data used by tests.
- `allure-results/` and `allure-report/` - generated reports and test artifacts.

## How to Run Tests
Use the project root as the working directory.

Basic command:
```bash
npx playwright test
```

Run a specific browser:
```bash
npx playwright test --project=chromium
```

Run regression tests:
```bash
npm run regression:test
```

Run smoke tests:
```bash
npm run smoke:test
```

Run a single spec in debug mode:
```bash
npx playwright test tests/formValidationTest.spec.ts --debug
```

## Installation
Install dependencies from the repository root:
```bash
npm install
```

## Troubleshooting
- If Playwright reports `Cannot find module '@playwright/test'`, ensure dependencies are installed with `npm install`.
- If TypeScript or config file loading fails, verify `playwright.config.ts` and `package.json` are present in repository root.

## Notes for the Agent
- Prefer using the Page Object Model when adding or updating tests.
- Keep test cases focused, independent, and stable.
- Use selectors and assertions that match the current application under test.
- Avoid hardcoding environment URLs; use `support/config.json` for environment configuration when appropriate.
