---
title: What is a schematic?
description: An introduction to schematics world.
---

A schematic is a powerful tool designed to automate code generation. In the Angular ecosystem, it plays a pivotal role in streamlining code creation.

We'll explore the schematic libraries, highlighting that its utility transcends Angular—you don't need Angular knowledge to leverage its code generation capabilities.

**Does this sound complicated?** It's more straightforward than it seems. At its core, a schematic is a function that creates, updates, or deletes files, enhanced with tools to facilitate these tasks.

**Why Use Schematics Instead of the Node File System?**

The Node File System (FS) is a module for file interaction. Yet, code generation requires additional considerations, such as:

1. **Error Handling**:  How are errors managed during the process?
2. **Execution Dependencies**: How can we ensure some actions precede others?
3. **Tooling**: What utilities can simplify the process?

Schematics streamline the file manipulation process, introducing features that improve the code automation experience.

## **The Importance of Learning About Schematics**

Automating repetitive tasks is not just a convenience but a necessity in contemporary software development. Automating setups like Linters, Formatters, Git Hooks, GraphQL, scaffolding code, SCSS structure, and HTML cleanup can save a significant amount of time. While manually configuring these elements has educational benefits initially, automation becomes more valuable once you grasp the basics.


## **How can I create Schematics?**

It's crucial to understand that Schematics are not limited to Angular projects. Their primary function is code generation, a task that is framework-agnostic. Although Angular provides specific tools for this purpose, the principles behind creating schematics are universally applicable. This guide will help you use these tools to create schematics for any JS environment.

## **Schematics concepts**

The public API for schematics introduces classes representing fundamental concepts:

- The virtual file system is represented by a `Tree`. The `Tree` data structure contains a *base* (a set of files that already exists) and a *staging area* (a list of changes to be applied to the base). When making modifications, you don't actually change the base, but add those modifications to the staging area.
- A `Rule` object defines a function that takes a `Tree`, applies transformations, and returns a new `Tree`. The main file for a schematic, `index.ts`, defines a set of rules that implement the schematic's logic.
- A transformation is represented by an `Action`. There are four action types: `Create`, `Rename`, `Overwrite`, and `Delete`.
- Each schematic runs in a context, represented by a `SchematicContext` object.

The context object passed into a rule provides access to utility functions and metadata that the schematic might need to work with, including a logging API to help with debugging. The context also defines a *merge strategy* that determines how changes are merged from the staged tree into the base tree. A change can be accepted or ignored, or throw an exception.