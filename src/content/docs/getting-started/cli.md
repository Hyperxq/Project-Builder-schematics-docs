---
title: How to use the schematics CLI?
description: How to get all the benefits of the CLI.
---

## Introduction

`@pbuilder/cli` is designed to assist with everything related to schematics. To fully benefit from the CLI, it is essential to understand its useful commands. The CLI is agnostic of any JavaScript framework, so if you need to create a set of schematics for a specific framework or solution, consider developing your own CLI to handle those schematics.

## Create a Schematic Project

```ansi title="Creation of schematic library project"
[38;2;127;86;217mbuilder[0m [38;2;0;134;201mnew[0m [38;2;23;178;106m<project-name> [author][0m --bundler <bundler-name> --package-manager <manager> --skip-installation --dry-run --help
```

## Execute schematics

`builder exec | g` is a command that allows you to execute any schematics, whether they are installed or not.
| Option                      | Description                                                                                                                 |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| --dry-run                   | Report actions that would be taken without writing out results. (default: false)                                            |
| --registry <registry>       | The NPM registry to use.                                                                                                    |
| --keep-installed            | If the collection is not install you could keep installed (default: false)                                                  |
| --package-manager <manager> | The package manager used to install dependencies. [string] [choices: "npm", "yarn", "pnpm", "cnpm", "bun"] (default: "npm") |
| --send-pm                   | Send the package manager to the schematic (default: false)                                                                  |
| --send-registry             | Send the registry to the schematic (default: false)                                                                         |
| -h, --help                  | display help for command                                                                                                    |

### Local schematic

If you have created schematics within your project and want to build and test them, use the following command:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;23;178;106mexec ./dist/collection.json my-schematic[0m
```

### Published schematics

For executing schematics from a published collection, use this command:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;23;178;106mg[0m [collection-name] [schematic-name] [options]
```

:::note
If the collection is not installed, the CLI will install it temporarily. To keep it installed, you can use the `--keep-install` option:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;23;178;106mg[0m [collection-name] [schematic-name] [options] --keep-install
```

:::

### Private packages

To execute schematics from private packages, specify the registry with the following command:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;23;178;106mexec[0m [collection-name] [schematic-name] [options] --registry="http://localhost:4873"
```
## 📦 `builder config` Command
The `builder config` command allows you to read, write, delete, and list configuration values used by the CLI.

### 🧠 How Configuration Works

1. **Local Config (`./builder.config.json`)**
   - If found, it overrides global config.
   - Project-specific settings.

2. **Global Config (`~/.config/builder-cli/config.json`)**
   - Loaded when no local config exists.
   - Used for user-wide settings.

3. **Default Config (applied automatically if no config exists):**

```ts
const DEFAULT_CONFIG = {
  cli: {
    showBanner: true,
  },
};
```

## Get info about a schematic

Before using a new set of schematics, it's important to gather information about them. This helps you understand what each schematic does and the options it offers.

### Get all the schematics of a collection

To list all schematics available in a collection, use this command:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;23;178;106minfo[0m [collection-name]
```

### Get all the options of a schematic

To get detailed information about the options for a specific schematic, use the following command:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;23;178;106minfo[0m [collection-name] [schematic-name]
```

## Builder add

Some schematic projects have a special schematic named `builder-add` or `ng-add`. This schematic is automatically executed after the collection is installed. To trigger this, use the following command:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;23;178;106madd[0m [collection-name]
```

This completes our basic introduction to using the CLI for schematics. With these commands, you are well-equipped to start working with schematics effectively. Happy coding!
