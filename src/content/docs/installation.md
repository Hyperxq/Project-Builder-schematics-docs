---
title: ✨ Installation
description: An introduction to the world of schematics.
---
## Introduction 
When you want to start creating schematics, you likely have two questions:



## How can I create schematics?

To create schematics, you need to create an npm project library.

Install the schematics CLI:

```ansi title="installation"
[38;2;127;86;217mnpm i -g[0m [38;2;0;134;201m@angular-devkit/schematics-cli[0m
```

Execute:

```ansi title="installation"
[38;2;127;86;217mnpx @danils/project-builder-cli[0m [38;2;0;134;201mnew[0m [38;2;23;178;106m<project-name> [author][0m
```

- The author is optional.
- The bundler option can have 3 possible values: rollup, ts, ng-packagr. These are the ways to compile the solution.

When you create schematic projects with Project Builder, you already have all the settings to publish. Feel free to add your schematics and publish them 😄.

:::note

If you plan to use the CLI frequently, you can install it:

Execute:

```ansi
npm i -g [38;2;127;86;217m@danils/project-builder-cli[0m 
```
:::

- The CLI command is builder. In the previous examples, it would be: `builder new <project-name> [author] --bundler=rollup`

---

## How can I execute schematics?

Once you have published your schematics, you might want to use them.

There are two options or scenarios:

1. If you want to run the schematics only once and are not interested in installing them permanently, you can execute:

```ansi wrap preserveIndent title="CLI not installed"
[38;2;127;86;217mnpx @danils/project-builder-cli[0m [38;2;0;134;201mexecute[0m [38;2;23;178;106m<collection-name> <schematic-name>[0m  [38;2;133;136;142m—[all options separated by two dashes][0m
```

```ansi title="CLI installed"
[38;2;127;86;217mbuilder[0m [38;2;0;134;201mexecute[0m [38;2;23;178;106m<collection-name> <schematic-name>[0m [38;2;133;136;142m—[all options separated by two dashes][0m
```

1. If you would like to keep the schematics installed, you can execute:

```ansi title="CLI not installed"
[38;2;127;86;217mnpx @danils/project-builder-cli[0m [38;2;0;134;201madd[0m [38;2;23;178;106m<collection-name>[0m [38;2;133;136;142m—[all options separated by two dashes][0m
```

```ansi title="CLI installed"

[38;2;127;86;217mbuilder[0m [38;2;0;134;201madd[0m [38;2;23;178;106m<collection-name>[0m [38;2;133;136;142m—[all options separated by two dashes][0m

```
