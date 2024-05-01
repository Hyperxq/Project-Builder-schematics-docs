---
title: Limitations
description: What limitations does schematics have?
---

Schematics from `@angular-devkit` is a powerful tool for automating project modifications and enhancements. However, like any tool, it has its limitations. Understanding these limitations can help developers anticipate potential issues and plan their development strategies accordingly. Below is a table summarizing the current limitations of Schematics, along with links to related discussions and pull requests on GitHub for more in-depth information and potential workarounds.

| Limitation                                                            | Github Discussion Link | Github PR Link |
| --------------------------------------------------------------------- | ---------------------- | -------------- |
| You cannot read the dry-run parameter inside a schematic.             |                        |                |
| In dry-run mode, sub-schematics are not called.                       |                        |                |
| Dry-run only covers file operation, not executing scripts.            |                        |                |
| Schematic CLI `blank` command doesn’t support Package Manager option. |  [Link](https://github.com/angular/angular-cli/issues/27571)                      |                |
| NodePackage Installation doesn’t show the right NPM package manager.  |                        |                |
| You cannot create custom Task.                                        |                        |                |

Understanding these limitations is crucial for developers working with Schematics to navigate around these constraints and find creative solutions. The community is actively discussing these issues, and contributions towards resolving them are always welcome.
