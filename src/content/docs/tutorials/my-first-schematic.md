---
title: My first schematic
description: A tutorial to create your first schematic
---
## Getting started with Schematics

If you are using VSCode and encounter issues loading schemas, check this article:
<https://bobbyhadz.com/blog/unable-to-load-schema-from-vscode-cannot-open>.

## Goals for this section

- Create our first Schematics project.
- Set up basic configurations to use our first schematic.
- Create our first schematic.

## Prerequisites

- NodeJS 20+.
- Install `npm i -g @builder/cli` or use `npx @pbuilder/cli`.

## Create a schematic project

**Execute:**

```ansi
[38;2;127;86;217mbuilder[0m [38;2;23;178;106mnew <library-name> [author][0m
```

:::note
You can see all the command option if you execute:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;23;178;106mnew --help[0m
```

:::

## Builder-add schematic

The CLI already create a schematics called: `builder-add`. After you publish your package and the any user execute: `builder add [your-package-name]`, the library will be installed and then `builder-add` schematic will be called.

## Create the first schematic

**1.** To create a schematic, execute this:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;23;178;106mexec[0m @pbuilder/sm sc --name="my-schematic"
```

**2.** We are ready to test our first schematic, run:

```ansi
[38;2;127;86;217mnpm[0m [38;2;23;178;106mrun[0m build
```

**6.** To test it we can run:

```ansi
[38;2;127;86;217mschematics[0m [38;2;23;178;106m./dist/collection.json:my-schematic[0m
```

**Congratulations! 🚀**
You've successfully run your first schematic!
