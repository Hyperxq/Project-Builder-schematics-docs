---
title: SchematicContext
description: What is schematic context?.
---

## Introduction

The `SchematicContext` is an essential parameter provided to Rule factory functions in Schematics, acting as the second argument after `Tree`. While `Tree` deals with the file system, representing files and their hierarchy, `SchematicContext` offers a broader perspective, giving you tools and capabilities for the current execution of a schematic. This includes:

```typescript title="Adding Tasks"
import { NodePackageInstallTask, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function addDependencyAndInstall(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const packagePath = '/package.json';
    if (tree.exists(packagePath)) {
      const packageJson = JSON.parse(tree.read(packagePath)!.toString('utf-8'));
      packageJson.dependencies = packageJson.dependencies || {};
      packageJson.dependencies['lodash'] = '^4.17.21'; // Example dependency
      tree.overwrite(packagePath, JSON.stringify(packageJson, null, 2));
      context.addTask(new NodePackageInstallTask());
    }
    return tree;
  };
}

```

```typescript title="Logging"
export function logCustomMessage(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.log('info', '🔔 Custom message from your Schematic.');
    return tree;
  };
}
```

## Adding Tasks

In the world of Schematics, our main objective is usually to modify files by applying Rules. Sometimes, though, our tasks extend beyond simple file manipulation, requiring us to:

- **Invoke another Schematic**.
- **Install NPM Dependencies After Adding a New Package**.

This is where `SchematicContext` shines with its `addTask` method. `addTask` allows you to schedule additional operations, such as running an external schematic or installing npm packages, enhancing the functionality of your schematic.

### Parameters of `addTask`

`addTask` accepts two parameters: a `TaskConfigurationGenerator` and an optional array of dependencies.

- **task**: The operation you wish to perform, such as `RunSchematicTask` or `NodePackageInstallTask`.
- **dependencies**: An array of `TaskId`s that the current task depends on, ensuring tasks are executed in the correct order.

By leveraging `addTask`, you receive a `TaskId` in return, which can be used to manage the execution order of your tasks through dependencies.

### Practical Uses of Calling Another Schematic

1. **Sequential Execution**: To manage the order of file operations precisely (creating, updating, then deleting), you might split your logic into separate, internal Schematics. This ensures that tasks like file creation and immediate modification are executed seamlessly.

2. **Code Modularity**: For better organization and reusability, you might break down your schematic logic into smaller, reusable Schematics. This is especially useful for repetitive tasks like installing several packages. Choosing Schematics over simple functions allows you to utilize the dependency system, giving you control over the execution order of these tasks.

The `addTask` method is a powerful tool in the SchematicContext arsenal, not only enabling the execution of external processes but also promoting code modularity and maintainability by making full use of the built-in dependency management system.
