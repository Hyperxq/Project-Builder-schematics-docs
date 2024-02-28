---
title: What is a schematic?
description: An introduction to schematics world.
---

A schematic is a powerful tool designed to automate code generation. In Angular, it plays a crucial role in enabling efficient code creation.

We'll delve into the schematics library, but it's important to note that its utility extends beyond Angular—you don't need Angular knowledge to harness its code generation capabilities.

**Does this sound complicated?** It's simpler than it appears. Essentially, a schematic can be thought of as a function that creates, updates, or deletes files, supplemented with tools to streamline these tasks.

**Why Use Schematics Instead of the Node File System?**

The Node File System is a module for interacting with files. However, code generation demands more consideration, such as:

1. **Error Handling**: What if something goes wrong during the process?
2. **Execution Dependencies**: How do we ensure certain actions are completed before others?
3. **Tooling**: Are there utilities to expedite the process?

Schematics simplify the process of creating, updating, or deleting files, adding functionalities that enhance the code automation experience.

## **The Importance of Learning About Schematics**

Automating repetitive processes is not just a time-saver but a necessity in modern software development. For example, automating initial configurations (like Linters, Formatters, Git Hooks, GraphQL setup, scaffolding code, SCSS structure, and HTML cleanup) saves considerable time. While manual configuration offers educational value initially, automation proves more advantageous once you understand the underlying processes.


## **How can I create Angular Schematics?**

It's important to clarify that Angular Schematics are not exclusive to Angular. They primarily facilitate code generation, a function that is not framework-specific. Although Angular provides additional tools for this purpose, the principles of creating schematics are applicable across various frameworks. I'll guide you through using these tools, enabling you to create schematics for Angular and beyond.

## **Schematics concepts**

The public API for schematics defines classes that represent the basic concepts.

- The virtual file system is represented by a `Tree`. The `Tree` data structure contains a *base* (a set of files that already exists) and a *staging area* (a list of changes to be applied to the base). When making modifications, you don't actually change the base, but add those modifications to the staging area.
- A `Rule` object defines a function that takes a `Tree`, applies transformations, and returns a new `Tree`. The main file for a schematic, `index.ts`, defines a set of rules that implement the schematic's logic.
- A transformation is represented by an `Action`. There are four action types: `Create`, `Rename`, `Overwrite`, and `Delete`.
- Each schematic runs in a context, represented by a `SchematicContext` object.

The context object passed into a rule provides access to utility functions and metadata that the schematic might need to work with, including a logging API to help with debugging. The context also defines a *merge strategy* that determines how changes are merged from the staged tree into the base tree. A change can be accepted or ignored, or throw an exception.

{/* [Schematic Anatomy](https://www.notion.so/Schematic-Anatomy-842b6fdc02564ff3942f1c3203939fee?pvs=21) */}