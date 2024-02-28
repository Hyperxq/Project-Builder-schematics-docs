---
title: ✨ Installation
description: An introduction to schematics world.
---

When you would like to start creating schematics you have two questions:

# How can I create schematics?

To create schematics you need to create a npm project library:

Execute: 
```powershell title="installation"
npx @danils/project-builder-cli new <project-name> [author] --bundler=rollup
```
  - The author is optional.
  - The option bundler can have 3 possible values: rollup, ts, ng-packagr. That are the way to compile the solution.

When you create schematic projects with Project Builder you already have all the settings to publish. Feel free to add your schematics and publish it 😄.

### Note

If you will use a lot the CLI you can install it:

Execute: 
```powershell 
npm i -g @danils/project-builder-cli
```
  - The CLI command is: `builder` in the previous examples will be: `builder new <project-name> [author] --bundler=rollup`

---

# How can I execute schematics?

Once, you already published your schematics, you would like you to use them. 

You have two options or different escenarios:

1. You would like to run the schematics only once and are not interested in installing them permanently. In this case you can execute: `npx @danils/project-builder-cli execute <collection-name> <schematic-name> —[all options separated by two dashes]` or if you have already installed the cli:  `builder execute <collection-name> <schematic-name> —[all options separated by two dashes]` .
2. You would like to keep the schematics and all others of the collection installed. In this case you can execute: `npx @danils/project-builder-cli add <collection-name> —[all options separated by two dashes]` or `builder add <collection-name> —[all options separated by two dashes]`