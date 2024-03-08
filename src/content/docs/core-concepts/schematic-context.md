---
title: Schematic Context
description: What is schematic context?.
---

## What is Schematic Context?

When you create a schematic, you're given a toolbox called `SchematicContext`. It comes right after the `Tree` parameter in your schematic functions. If `Tree` helps you manage files and folders, think of `SchematicContext` as your magic wand for everything else - from running additional tasks to logging messages during your schematic's journey.

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

## Adding Tasks with SchematicContext

Ever found yourself needing more than just file changes? Like installing a new package or running another schematic? That's where `SchematicContext` shines. It has a method called `addTask` that lets you schedule these extra steps.

```typescript
// Example: Adding a dependency and installing it
import { NodePackageInstallTask, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function addDependencyAndInstall(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // Your code to modify package.json
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
}
```

### Why use addTask?

- It lets you run tasks in a specific order, thanks to dependencies you can define.
- It makes your schematic modular by allowing you to call other schematics, keeping your code organized.

### Parameters of `addTask`

`addTask` accepts two parameters: a `TaskConfigurationGenerator` and an optional array of dependencies.

- **task**: The operation you wish to perform, such as `RunSchematicTask` or `NodePackageInstallTask`.
- **dependencies**: An array of `TaskId`s that the current task depends on, ensuring tasks are executed in the correct order.

By leveraging `addTask`, you receive a `TaskId` in return, which can be used to manage the execution order of your tasks through dependencies.

### Practical Uses of Calling Another Schematic

1. **Sequential Execution**: To manage the order of file operations precisely (creating, updating, then deleting), you might split your logic into separate, internal Schematics. This ensures that tasks like file creation and immediate modification are executed seamlessly.

2. **Code Modularity**: For better organization and reusability, you might break down your schematic logic into smaller, reusable Schematics. This is especially useful for repetitive tasks like installing several packages. Choosing Schematics over simple functions allows you to utilize the dependency system, giving you control over the execution order of these tasks.

The `addTask` method is a powerful tool in the SchematicContext arsenal, not only enabling the execution of external processes but also promoting code modularity and maintainability by making full use of the built-in dependency management system.

## How to Log Messages

`SchematicContext` also provides a way to log messages, making it easier to communicate what your schematic is doing or if something goes wrong.

```typescript
// Example: Logging a custom message
export function logCustomMessage(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.log('info', '🔔 Custom message from your Schematic.');
    return tree;
  };
}
```
Logging is crucial for a good user experience. With different log levels (`debug`, `info`, `warn`, `error`, `fatal`), you can provide the right amount of detail, ensuring users know what's happening and what to do next if there's an issue.

| Log Level | Method                          | Description                                                                                                     |
| --------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Debug     | `context.logger.debug(message)` | Used for detailed debugging information that is usually only of interest during development or troubleshooting. |
| Info      | `context.logger.info(message)`  | General information about the execution process. Suitable for messages you always want to show.                 |
| Warn      | `context.logger.warn(message)`  | Warnings about potentially harmful situations or consequences that are not necessarily errors.                  |
| Error     | `context.logger.error(message)` | Error messages indicating that something has gone wrong during the execution of the schematic.                  |
| Fatal     | `context.logger.fatal(message)` | Critical errors causing the process to terminate. Used for unrecoverable errors.                                |


## In Conclusion

`SchematicContext` is your partner in crime for making schematics do more than just file operations. Whether it's running additional tasks with `addTask` or keeping users informed with logging, it empowers you to create more dynamic, useful, and user-friendly schematics.

Remember, while Tree manages your project's files, `SchematicContext` manages everything else, helping you automate tasks, call other schematics, and communicate effectively with your users.