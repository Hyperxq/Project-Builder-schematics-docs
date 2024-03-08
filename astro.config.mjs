import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";
import sitemap from '@astrojs/sitemap';
import compressor from "astro-compressor";
import purgecss from 'astro-purgecss';
import favicons from "astro-favicons";
// https://astro.build/config
export default defineConfig({
  site: "https://schematics.pbuilder.dev",
  integrations: [
    starlight({
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      expressiveCode: {
        styleOverrides: {
          borderRadius: "0.5rem",
        },
      },
      title: "Schematics Docs",
      components: {
        // Relative path to the custom component.
        Head: "./src/components/Head.astro",
        TableOfContents: './src/components/TableOfContents.astro',
      },
      social: {
        github: "https://github.com/Hyperxq/Project-Builder-schematics-docs",
      },
      sidebar: [
        {
          label: "Start Here",
          items: [
            {
              label: "Installation",
              link: "/installation",
            },
            {
              label: "Why Use Schematics?",
              link: "/why-schematics",
            },
          ],
        },
        {
          label: "Tutorials",
          items: [
            {
              label: "My first schematic",
              link: "/tutorials/my-first-schematic",
            },
            {
              label: "How to install dependencies?",
              link: "/tutorials/install-dependencies",
            },
            {
              label: "How to test your schematic library?",
              link: "/tutorials/test-your-schematic",
            },
            {
              label: "How to use the CLI?",
              link: "/tutorials/how-to-use-the-cli",
            },
            {
              label: "When to use Rules or call other schematics?",
              link: "/tutorials/using-rules-or-external-schematics",
            },
          ],
        },
        {
          label: "Core Concepts",
          items: [
            {
              label: "Schematic Project Anatomy",
              link: "/core-concepts/schematic-project-anatomy",
            },
            {
              label: "Rule",
              link: "/core-concepts/rule",
            },
            {
              label: "Tree",
              link: "/core-concepts/tree",
            },
            {
              label: "Schematic Context",
              link: "/core-concepts/schematic-context",
            },
            {
              label: "Schema JSON",
              link: "/core-concepts/schema-json",
            },
          ],
        },
        {
          label: "Files",
          items: [
            {
              label: "How to start with files?",
              link: "/files/how-to-start",
            },
            {
              label: "Add Files",
              link: "/files/add",
            },
            {
              label: "Remove Files",
              link: "/files/remove",
            },
            {
              label: "Modify Files",
              link: "/files/modify",
            },
          ],
        },
        {
          label: "Terminal",
          items: [
            {
              label: "User Inputs",
              link: "/terminal/user-inputs",
            },
            {
              label: "Pre-Execution Inputs",
              link: "/terminal/schema-json",
            },
            {
              label: "In-Execution Inputs",
              link: "/terminal/inquirer",
            },
          ],
        },
        {
          label: "Utils",
          items: [
            {
              label: "Logger",
              link: "/utils/logger",
            },
            {
              label: "Spinner",
              link: "/utils/ora",
            },
            {
              label: "Colors in terminal",
              link: "/utils/color",
            },
          ],
        },
        {
          label: "Limitations",
          link: "/limitations"
        }
      ],
      customCss: ["./src/styles/colors.css", "./src/styles/theme.css", "./src/styles/custom.css"],
      plugins: [],
    }),
    sitemap(),
    compressor({ gzip: true, brotli: true }),
    purgecss(),
    favicons({
      masterPicture: "./public/favicon.svg",
      emitAssets: true,
      faviconsDarkMode: true,
    }),
  ],
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ]
});