import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";
import starlightDocSearch from "@astrojs/starlight-docsearch";

// https://astro.build/config
export default defineConfig({
  site: "https://schematics.pbuilder.dev",
  integrations: [
    starlight({
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
          ],
        },
        {
          label: "Core Concepts",
          items: [
            {
              label: "Tree",
              link: "/core-concepts/tree",
            },
            {
              label: "SchematicContext",
              link: "/core-concepts/schematic-context",
            },
            {
              label: "Rule",
              link: "/core-concepts/rule",
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
              label: "Schema",
              link: "/terminal/schema-json",
            },
            {
              label: "Inquirer",
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
      plugins: [
        starlightDocSearch({
          appId: "XPU6E4M3TZ",
          apiKey: "d53d6ea89cda557d98201dac49fc387d",
          indexName: "dev_Name",
        }),
      ],
    }),
  ],
});