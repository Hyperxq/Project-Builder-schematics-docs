> [!IMPORTANT]
> **This repository is archived.** The Project Builder documentation moved to
> [Project-Builder-Schematics/project-builder-docs](https://github.com/Project-Builder-Schematics/project-builder-docs)
> and is live at **[schematics.pbuilder.dev](https://schematics.pbuilder.dev)**.

# Schematics Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```sh
npm start dev
```

Schematics uses `@angular-devkit` library that is for angular. However, we created a CLI that allows you to automate your code in the simplest way and works for any js environment. This documentation will help you to create your schematics and use them into your projects! :rocket:

I really hope that this documentation help you a lot to make your day a day in the software development world easier.

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```markdown
.
├── public/
├── src/
│   ├── assets/
|   ├── components/
|   ├── pages/
|   ├── styles/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
