---
title: ✨ Getting Started
description: How to start into the schematics world.
---

## Prerequisites

- NodeJS 20+.
- Install `npm i -g @builder/cli` or use `npx @pbuilder/cli`.

## Starting a New Project

```ansi title="Creation of schematic library project"
[38;2;127;86;217mbuilder[0m [38;2;0;134;201mnew[0m [38;2;23;178;106m<project-name> [author][0m --bundler <bundler-name> --package-manager <manager> --skip-installation --dry-run --help
```

:::note
You can see all the command option if you execute:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;23;178;106mnew --help[0m
```

:::

## Create a new schematic

1. To create a schematic, execute this:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;23;178;106mg[0m @pbuilder/sm sc --name="my-schematic"
```

2. Before testing we need to build it:

```ansi
[38;2;127;86;217mnpm[0m [38;2;23;178;106mrun[0m build
```

:::note
You can run this command to observe any future change:

```ansi
[38;2;127;86;217mnpm[0m [38;2;23;178;106mrun build:watch [0m
```

However, this command doesn't recognize new files, for this reason if you add a new schematics restart the command.
:::

3. To test it we can run:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;23;178;106mexec ./dist/collection.json my-schematic[0m
```
