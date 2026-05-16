<!-- AGENTS.md: Guidance for AI coding agents (minimal, link-first, actionable) -->
# AGENTS — Agent customization for this repository

Purpose
- Short guidance for AI coding agents working in this Playwright TypeScript repo.

Where to look first
- Repository overview and conventions: [Agent.md](Agent.md)
- User-facing README and setup steps: [README.md](README.md)
- Package scripts (test/run): [package.json](package.json#L1-L80)
- Playwright configuration: [playwright.config.ts](playwright.config.ts#L1-L120)

Quick commands (run from repository root)
- Install dependencies: `npm install`
- Run all tests: `npx playwright test`
- Run tests in Chromium: `npx playwright test --project=chromium`
- Run the project's main script: `npm run execute:script`
- Run regression/smoke via npm scripts: `npm run regression:test`, `npm run smoke:test`

Notes about MCP (Model Context Protocol)
- This workspace uses Playwright. The user has previously installed `@playwright/mcp` (global/local).
- If you need richer context capture for debugging or for AI-assisted fixes, prefer running tests under MCP.
- Before installing global CLIs or changing the environment, ask the user for permission.

Agent behavior and conventions (concise)
- Prefer Page Object Model patterns (see [Agent.md](Agent.md)).
- When editing tests, keep them small, independent, and CI-friendly.
- Link to existing docs rather than duplicating them; point humans to the README for environment setup.

What I changed
- Created this `AGENTS.md` to centralize quick actionable guidance and commands for agents.

Next suggested customizations
- Add a short `.github/copilot-instructions.md` if you want repository-level instructions visible to GitHub Copilot.
- Add small skills (under a `skills/` or `.vscode/prompts/`) for common tasks: "run-local-tests", "collect-allure", "open-report".
