---
title: How to use the CLI?
description: A tutorial to how ow to use the CLI
---

## Introduction

Once you've created, tested, and/or published your schematics, you might wonder how to test them in real environments using the CLI.

As detailed on the [Installation Page](/installation), there are two main ways to use your schematics:

## Builder execute

The `builder exec` command allows you to execute schematics directly. An interesting feature of this command is its ability to check if the package is installed. If not, it will install it temporarily. This is convenient when you only need to execute the schematic without installing it permanently.

```ansi
[38;2;127;86;217mbuilder[0m [38;2;0;134;201mexecute[0m [38;2;23;178;106m<collection-name> <schematic-name>[0m [38;2;133;136;142m—[all options separated by two dashes][0m
```

### Understanding the `builder exec` Command

Here's a breakdown of the command structure:

- `builder`: The name of the CLI tool.
- `execute` or `exec`: The specific command to run a schematic.
- `<collection-name>`: The name of your npm package that contains the schematics.
- `<schematic-name>`: The specific schematic you want to run. Schematics are grouped into collections.
- `[options]`: Here, you can include all your user-defined options, detailed in your [`schema.json`](/core-concepts/schema-json) file.

### Using Properties in the Terminal

To use the properties defined in your `schema.json` in the terminal, follow these patterns:

- For a boolean input:

```sh
  --[option-name] or --[option-name]=[false|true]
```

It's important to define a default value for each boolean input.

- For non-boolean inputs:

```sh
--[option-name]=[option-value]
```

:::note
Properties are declared in camelCase in the schema.json file, but you should use kebab-case when typing them in the terminal.
:::

Example Command

```sh
builder exec @danils/schematicskit prettier --package-manager="pnpm" --git-hooks
```

## Builder add

The `builder add` command is special. It not only installs the package but also searches for a schematic named `builder-add` or `ng-add` (for Angular users) and executes it. This is particularly useful for performing setups immediately after package installation.

```sh
builder add @danils/schematicskit prettier
```
