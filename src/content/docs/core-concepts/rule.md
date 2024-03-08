---
title: Rule
description: Description of what is a Rule.
---

## Introduction

A `Rule` is a function that takes two parameters: a `Tree` and a `SchematicContext`. It returns a `Tree`, an `Observable<Tree>`, a `Rule`, a `Promise<void | Rule>`, or `void`.

What makes a `Rule` particularly powerful is that a factory function returns a `Rule`, enabling the composition of multiple rules. This compositional ability allows you to divide your code into smaller, manageable rules, which are then executed in sequence. This modular approach not only enhances code readability and maintainability but also facilitates complex transformations and operations within your schematics.

However, as you may have observed, a factory function typically returns only one `Rule`. So, you might wonder, how can we utilize multiple rules in a single operation? Fortunately, Schematics provides several functions designed specifically for this purpose, allowing for the seamless combination and execution of multiple rules. Let's explore these functions further:

| Function             | Description                                                                | Parameters                                             | Return Type |
|----------------------|----------------------------------------------------------------------------|--------------------------------------------------------|-------------|
| `chain`              | Chain multiple rules into a single rule.                                   | `rules: Iterable<Rule> \| AsyncIterable<Rule>`         | `Rule`      |
| `mergeWith`          | Merge an input tree with the source passed in.                             | `source: Source, strategy?: MergeStrategy`             | `Rule`      |
| `branchAndMerge`     | Branches the input tree, applies a rule, and merges the result.            | `rule: Rule, strategy?: MergeStrategy`                 | `Rule`      |
| `partitionApplyMerge`| Partitions the input tree, applies rules to each partition, then merges.  | `predicate: FilePredicate<boolean>, ruleYes: Rule, ruleNo?: Rule` | `Rule` |
| `forEach`            | Applies an operation to each file in the input tree.                       | `operator: FileOperator`                               | `Rule`      |
| `applyToSubtree`     | Applies rules to a specific subtree.                                       | `path: string, rules: Rule[]`                          | `Rule`      |
| `noop`               | A rule that does nothing.                                                  | None                                                   | `Rule`      |
| `filter`             | Filters files from the input tree based on a predicate.                    | `predicate: FilePredicate<boolean>`                    | `Rule`      |

Don't worry if you don't know how to use all of them. I will create tutorial for all cases.

:::note

For the current version (**17.2.0**)  of `@angular-devkit/schematics` the behavior is this:

- When you are using multiples rules in a factory function you can *Add* / *Modify* / *Delete* files. However the execution order, no matter the position of the rules are: First will create files, then make the modifications and finally all file deletions.

This is important, because in some cases you would like to create a files and after the make a modification in this files. That happen a lot when you are calling other schematics as rules.

To understand how to do it, follow the next tutorials!
:::
