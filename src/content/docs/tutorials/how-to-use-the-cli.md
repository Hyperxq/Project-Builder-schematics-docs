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

```ansi
[38;2;127;86;217mbuilder[0m [38;2;0;134;201madd[0m [38;2;23;178;106m@danils/schematicskit prettier[0m
```

## Show all the Schematics Available in a Collection

When you need to explore the contents of a specific collection, you can list all the schematics it contains. This is particularly useful to get a quick overview of what you can do with a collection. Use the following command:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;0;134;201minfo[0m [38;2;23;178;106m<collection-name>[0m
```

### Understanding the builder info Command for Collections

This command provides a list of all schematics available in the specified collection. The output includes names and brief descriptions, if available, helping you choose which schematic might be relevant for your needs.

## Show All the Options of a Schematic

To understand how to configure a specific schematic fully, you can list all the available options that can be set via the schema.json file. This is critical for effectively utilizing the schematic's capabilities. Use the command:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;0;134;201minfo[0m [38;2;23;178;106m<collection-name> <schematic-name>[0m
```

### Detailed Usage of Options

This command prints detailed information about each option for the specified schematic, including type (e.g., boolean, string), default values, and a short description. This helps in preparing the correct command-line arguments to customize the schematic execution as per your project requirements.

## How to Create a New Schematic in a Schematic Project

Creating a new schematic within an existing Schematic project involves defining its initial configuration. The command below scaffolds a basic structure for your new schematic, allowing you to start adding custom logic immediately.

```ansi
[38;2;127;86;217mbuilder[0m [38;2;0;134;201mexec[0m [38;2;23;178;106m@pbuilder/sm sc[0m --name="[schematic-name]" --description="[schematic-description]"
```

### Crafting the Initial Schematic

`@pbuilder/sm`: This is the npm package name where your new schematic will reside.
`sc`: This is a shorthand for the schematic creation command within the builder CLI.
`--name`: Specify the name of your new schematic. Remember, it should be unique within the collection.
`--description`: Provide a meaningful description for your schematic to help others understand its purpose.

To see all the options available when you create a new schematic please use this command:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;0;134;201minfo[0m [38;2;23;178;106m@pbuilder/sm sc[0m
```
