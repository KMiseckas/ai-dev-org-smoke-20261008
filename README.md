# Disposable development harness verification

A tiny greeting page exercises Paperclip delegation, ChatGPT-authenticated Codex, isolated Git worktrees, GitHub PRs/CI, code review, Playwright QA and a Human Director merge gate. It is not a product.

Run `npm ci`, `npm test`, `npx playwright install chromium`, `npm run test:browser`. On Windows, reuse Microsoft Edge with `$env:PLAYWRIGHT_CHANNEL='msedge'`.
