---
title: Schematics for Astro
description: A set of schematics for Astro
---


Astro Schematics is here to make your life easier by taking care of repetitive tasks. With it, you can quickly create components, layouts, and pages for your Astro projects. This magic is brought to you by Project Builder.

## Get Started in a Snap

Just run this command in your project folder:

```sh
npx @pbuilder/cli add @pbuilder/astro
```

## Things to Know

* **Installing the CLI**: When you run the above command, it might ask if you want to install something called a CLI (Command Line Interface). Here’s why you should say yes:

  * **`@pbuilder/astro-cli` (or pastro):** This special tool is made just for Astro. It makes making new parts of your website (like pages and components) super easy with simple commands.
  * **Learning More:** If you're curious about what commands you can do, just add --help to see all your options.

## Let's Create Something

### Components

Want to make a new component? Easy peasy:

```sh
pastro g c <component-name>
```

Or:

```sh
npx @pbuilder/astro-cli g c <component-name>
```

### Layouts

Need a new layout? Just as easy:

```sh
pastro g l <layout-name>
```

Alternatively:

```sh
npx @pbuilder/astro-cli g l <layout-name>
```

### Pages

For page creation, specify the type **(astro is the default one)** and layout:

```sh
pastro g pg <page-name> --type [md, mdx, astro] --layout <layout file name>
```

Or use the direct method:

```sh
npx @pbuilder/astro-cli g p <page-name> --type [md, mdx, astro] --layout <layout file name>
```

## What If I Need Something More?

### Beyond Astro CLI

Sometimes, you might need a tool that isn't just for Astro. That’s where `@pbuilder/cli` comes in. It’s a more general tool that works for a bunch of different projects.

Here’s how you use it:

```sh
npx @pbuilder/cli exec @pbuilder/astro <schematic-name> --name=<name> [options]
```

Like making a component without the Astro-specific tool:

```sh
npx @pbuilder/cli exec @pbuilder/astro c --name=MyComponent2
```
