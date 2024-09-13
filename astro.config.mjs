import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";
import sitemap from '@astrojs/sitemap';
import compressor from "astro-compressor";
import purgecss from 'astro-purgecss';
import favicons from "astro-favicons";
import starlightDocSearch from '@astrojs/starlight-docsearch';
import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      sourcemap: false
    }
  },
  image: {
    service: passthroughImageService()
  },
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
      title: "Schematics Documentation",
      description: "Explore comprehensive Schematics Documentation for Angular and Javascript.",
      components: {
        // Relative path to the custom component.
        Head: "./src/components/Head.astro",
        TableOfContents: "./src/components/TableOfContents.astro",
        // PageSidebar: './src/components/starlight/PageSidebar.astro',
      },
      social: {
        github: "https://github.com/Hyperxq/Project-Builder-schematics-docs",
        "x.com": "https://twitter.com/SForHumans",
      },
      customCss: ['./src/assets/landing.css'],
      sidebar: [
        {
          label: "Start Here",
          items: [
            {
              label: "Overview",
              link: "/getting-started/overview",
            },
            {
              label: "First steps",
              link: "/getting-started/first-steps",
            },
            {
              label: "How to use the CLI?",
              link: "/getting-started/cli",
            },
            {
              label: "What's next?",
              link: "/getting-started/whats-next",
            }
          ],
        },
        {
          label: "How to",
          items: [
            {
              label: "How to Extend an Existing Schematic",
              link: "/how-to/how-to-extend-an-existing-schematic",
            }
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
              label: "How to test your schematic library?",
              link: "/tutorials/test-your-schematic",
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
          label: "How to install dependencies?",
          link: "/install-dependencies",
        },
        {
          label: "Frameworks",
          items: [
            {
              label: "Astro",
              link: "/frameworks/astro",
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
          link: "/limitations",
        },
      ],
      customCss: ["./src/styles/colors.css", "./src/styles/theme.css", "./src/styles/custom.css"],
      plugins: [
        starlightDocSearch({
          appId: "LMC7D7B01D",
          apiKey: "4f694dbbaf9a73b4c4a0421bb84bfd82",
          indexName: "schematics",
        }),
      ],
    }),
    sitemap(),
    compressor({ gzip: true, brotli: true }),
    purgecss(),
    favicons({
      masterPicture: "./public/leo.webp",
      emitAssets: true,
      faviconsDarkMode: true,
    }),
  ],
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
});
