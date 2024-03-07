---
title: Use rules or call other schematics
description: A tutorial to use rules or call other schematics
---
## Introduction

Embarking on a schematic project means you're ready to automate and streamline your coding workflow. A fundamental aspect of working with Schematics is issuing commands to modify project files, achieved primarily through `Rule`.

### The Role of `Rules` in Schematics

Think of a `Rule` as your schematic's checklist. It sequences tasks like file creation, updates, and deletions. But what if your project demands a more nuanced approach, such as modifying a file immediately after its creation? This is where the limitations of a straightforward `Rule`-based approach become apparent.

### Enhancing Flexibility with `addTask`

To overcome these limitations, Schematics offers the `addTask` function, enabling you to call other schematics either within your collection or from external sources. This method is particularly useful for:

1. **Managing Dependencies**: Ensuring certain tasks complete before others.
2. **Handling Complex Workflows**: Addressing varied tasks requiring specific sequencing.
3. **Executing Tasks Concurrently**: Running multiple tasks simultaneously for efficiency.

### How to Call Other Schematics

#### Within Your Schematic Context

`SchematicContext` allows for calling other schematics to execute in parallel with your main workflow, enhancing the efficiency of your operations.

```typescript
function callSchematic() {
   return (tree: Tree, context: SchematicContext) => {
      context.addTask(
         new RunSchematicTask('installCollections', {
            packages,
            packageManager,
            dryRun
         })
      );
   };
}
```

#### From Your Collection

Utilize the `schematic()` function for schematics within your own collection, facilitating interdependencies within your project.

```typescript
import { schematic } from '@angular-devkit/schematics';

return chain([
  schematic('my-schematic', options),
  // additional tasks or schematics
]);
```

#### From External Collections

Leverage the externalSchematic() function to call schematics from outside your collection, expanding your project's capabilities.

```typescript
import { externalSchematic } from '@angular-devkit/schematics';

return chain([
  externalSchematic('external-collection-name', 'external-schematic', options),
  // more tasks or schematics
]);
```

### Execution Order Control with addTask

Although calling schematics offers great flexibility, managing their execution order is crucial for project integrity. Utilize addTask in conjunction with RunSchematicTask to precisely control when each schematic is executed.

```typescript
import { RunSchematicTask } from '@angular-devkit/schematics/tasks';

context.addTask(new RunSchematicTask('some-schematic', options));

```

## Conclusion

For newcomers to the schematic world, understanding how to effectively call and manage schematics is crucial for building sophisticated and error-free workflows. By judiciously applying `Rule`, `addTask`, and the various schematic calling methods, you can create a development process that is both smoother and more efficient. This guide aims to demystify these processes, ensuring you're well-equipped to take on your next Schematics project.

This version aims to provide a clear and coherent overview of using rules and calling other schematics, making it accessible for those new to schematics.
