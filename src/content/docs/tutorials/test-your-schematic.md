---
title: How to test your schematic library?
description: A tutorial to test your schematic library?
---

## Introduction

After creating your first schematics, you'll want to test them to ensure they work as expected. There are three main ways to do this:

### Watching mode

In your `package.json`, you'll notice not just a build script but also a `build:watch` script. This command compiles your project automatically every time files in the src directory change.

To activate watching mode, execute:

```sh
npm run build:watch
```

Then, you can test your schematics using the `CLI` with the command:  `builder exec [collection-location] [schematic-name]`. For example, to test it at the root of your project:

```ansi
[38;2;127;86;217mbuilder[0m [38;2;0;134;201mexec ./dist/collection.json prettier[0m
```

### Npm Link

If you want to test your schematics as if they were a package, you can use `npm link`. This approach allows you to simulate the installation and use of your package locally without publishing it. Execute the following:

```sh
npm run build && cd dist && npm link ./dist
```

### Verdaccio

[Verdaccio](https://verdaccio.org/docs/installation) offers a more comprehensive testing setup with a few extra steps:

1. Install Verdaccio globally:

```sh
npm i -g verdaccio
```

2. Start the Verdaccio server:

```sh
verdaccio
```

3. Publish your package locally:

```sh
npm run build && cd dist && npm publish --registry http://localhost:4873
```

### Verdaccio vs npm link

Here's a comparison to help you decide between Verdaccio and npm link for testing your schematics:

| Feature                  | Verdaccio                                                                                                          | npm link                                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **Primary Use**          | Acts as a private npm proxy registry for package management                                                        | Creates a symbolic link for local package development                                                         |
| **Use Case**             | Ideal for managing private packages within teams or organizations                                                  | Useful for testing local changes in packages without needing to publish them                                  |
| **Advantages**           | - Private hosting of packages<br>- Caching of npm packages<br>- Version control<br>- Integration with npm registry | - Quick feedback on changes<br>- Simplifies the development process<br>- Avoids premature package publication |
| **Ideal For**            | Teams and organizations requiring shared access to private packages                                                | Developers testing local package dependencies                                                                 |
| **Installation Process** | Involves setting up a Verdaccio server                                                                             | A straightforward command line operation                                                                      |
| **Security**             | Enhances package management security                                                                               | Primarily for local development, minimal security impact                                                      |
| **Network Dependency**   | Reduces reliance on the public npm registry by caching packages                                                    | No network dependency, as it links local packages directly                                                    |

This documentation aims to make the process of testing your schematic library as straightforward as possible, providing you with multiple approaches to suit your development workflow.
