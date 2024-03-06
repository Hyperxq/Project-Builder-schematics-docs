---
title: ✨ Installation
description: An introduction to the world of schematics.
---
## Introduction

When you want to start creating schematics, you likely have two questions:

## How can I create schematics?

To create schematics, you need to create an npm project library.

**Requirements:**

```ansi title="Schematics CLI"
[38;2;127;86;217mnpm i -g[0m [38;2;0;134;201m@angular-devkit/schematics-cli[0m
```

```ansi title="Project Builder CLI"
npm i -g [38;2;127;86;217m@pbuilder/cli[0m 
```

**Execute:**

```ansi title="Creation of schematic library project"
[38;2;127;86;217mnpx @pbuilder/cli[0m [38;2;0;134;201mnew[0m [38;2;23;178;106m<project-name> [author][0m --bundler <bundler-name> --package-manager <manager> --dry-run --help
```

&nbsp;
| Option          | Description                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| Bundler         | With bundler do you want to use to compile the project: rollup, ts                                      |
| Package Manager | The package manager used to install dependencies. Possible value: npm, yarn, pnpm, cnpm, bun. |
| Dry Run         | Report actions that would be taken without writing out results.                                         |
| Help            | Display help for command                                                                                |

When you create schematic projects with Project Builder, you already have all the settings to publish. Feel free to add your schematics and publish them 😄.

&nbsp;
:::note
If you don't want to install globally Project Builder CLI you can use:

```ansi
 [38;2;127;86;217mnpx @pbuilder/cli[0m 
```

:::

&nbsp;

---

## How can I execute schematics?

Once you have published your schematics, you might want to use them.

There are two options or scenarios:

1. If you want to run the schematics only once and are not interested in installing them permanently, you can execute:

```ansi title="CLI installed"
[38;2;127;86;217mbuilder[0m [38;2;0;134;201mexecute[0m [38;2;23;178;106m<collection-name> <schematic-name>[0m [38;2;133;136;142m—[all options separated by two dashes][0m
```

1. If you would like to keep the schematics installed, you can execute:

```ansi title="CLI installed"

[38;2;127;86;217mbuilder[0m [38;2;0;134;201madd[0m [38;2;23;178;106m<collection-name>[0m [38;2;133;136;142m—[all options separated by two dashes][0m

```
