import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";

// <meta property=’og:title’ content='TITLE OF YOUR WEBSITE'/>
// <meta property=’og:image’ content='https://YOUR_THUMBNAIL_IMAGE_URL’/>
// <meta property=’og:description’ content='DESCRIPTION OF YOUR SITE'/>
// <meta property=’og:url’ content='URL OF YOUR WEBSITE'/>
// <meta property='og:image:width' content='1200' />
// <meta property='og:image:height' content='627' />
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
              label: "Why schematics",
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
              label: "SchematicContext",
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
      ],
      customCss: ["./src/styles/colors.css", "./src/styles/theme.css", "./src/styles/custom.css"],
      plugins: [],
      head: [
        {
          tag: "meta",
          attrs: {
            content: "https://firebasestorage.googleapis.com/v0/b/projectbuilder-c090b.appspot.com/o/houston.webp?alt=media&token=6ba337cf-508c-4848-8349-7e0ae14dab50",
            property: "og:image",
          },
        },
      ],
    }),
  ],
});