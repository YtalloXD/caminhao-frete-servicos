# Repository Guide

## Commands

- Use Bun; `bun.lock` is the only dependency lockfile. Install with `bun install`.
- Start Vite with `bun run dev`; use `bun run preview` only after building.
- Run `bun run lint` and then `bun run build` before finishing. The build runs `tsc -b` before `vite build`, so it is the repository's typecheck as well as its production build.
- For a focused lint check, run `bunx eslint path/to/file.tsx`.
- No test runner or test script is configured. Do not claim automated test coverage; rely on lint, build, and relevant manual browser checks.

## Application Shape

- `index.html` loads `src/main.tsx`, which mounts the single `App` component under React `StrictMode`.
- Global tokens and page-wide rules live in `src/index.css`; component/page rules currently live in `src/App.css`. These files use native CSS nesting processed by Vite.
- Import bundled assets from `src/assets`; files in `public/` are referenced from the site root, such as `/icons.svg`.
- `@tanstack/react-query` is installed but no `QueryClient` or provider is wired into the app yet.

## Constraints

- TypeScript uses bundler resolution, `verbatimModuleSyntax`, `erasableSyntaxOnly`, and no-emit project references. Unused locals and parameters fail the build.
- There are no path aliases, formatter config, CI workflows, or code-generation steps in this repository.
