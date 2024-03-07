---
title: What is the Tree object?
description: Description of what is the Tree object and what method has.
---

## Introduction

During the Angular Schematics tutorial, you may have noticed that the factory function returns a `Rule` function. This function accepts two parameters, but our focus here is on the first one: `Tree`.

The `Tree` represents a virtual file system. It consists of a *base* (the set of files that already exists) and a *staging area* (a collection of changes to be applied to the base). When you modify files, you don't alter the base directly; instead, you queue modifications in the staging area.

In essence, the `Tree` object is your toolkit for any file operations within a schematic.

:::note
The Tree structure is limited to the directory in which it's placed, having not access to parent directories when executed into a subfolder.
:::

## What does the Tree class offer?

The `Tree` object provides several methods for interacting with the file system:

### Reading Files

- **read**: Retrieves a file from the `Tree`.
  
- **readText**: Reads a file from the `Tree` as UTF-8 encoded text, facilitating text manipulation.

```typescript
const content = tree.readText('/path/to/file');
```

- **readJson**: Fetches and parses a JSON file from the Tree as UTF-8 encoded text. It supports JavaScript-style comments and trailing commas.

```typescript
const json = tree.readJson('/path/to/file.json');
```

### Checking Files

- **exists**: Checks if a file exists within the Tree.

```typescript
const doesExist = tree.exists('/path/to/file');
```

- **get**: Retrieves file details from the Tree.
- **getDir**: Accesses a directory within the Tree, useful for iterating over files or subdirectories.

```typescript
const dir = tree.getDir('/path/to/directory');
```

### Visiting Files

- **visit**: Allows iteration over all files in the `Tree`, enabling bulk operations or analyses.

```typescript
tree.visit(filePath => {
  console.log(filePath);
});
```

### Modifying Files

- **beginUpdate**: Starts an update operation on a file, used in conjunction with `commitUpdate`.
- **commitUpdate**: Commits changes started with beginUpdate.
- **overwrite**: Replaces a file's content.

```typescript
tree.overwrite('/path/to/file', 'new content');
```

### Structural Methods

- **create**: Adds a new file to the Tree.

```typescript
tree.create('/path/to/new/file', 'file content');
```

- **delete**: Removes a file from the Tree.

```typescript
tree.delete('/path/to/file');
```

- **rename**: Changes the name or path of a file in the Tree.

```typescript
tree.rename('/old/path', '/new/path');
```

### Advanced Operations

- **apply**: Applies a set of rules to the `Tree`, facilitating complex transformations.
- **branch**: Creates a copy of the `Tree`, allowing for parallel modifications.
- **merge**: Combines changes from multiple `Tree` branches or modifications.

## Conclusion

By leveraging these methods, developers can efficiently manipulate the project's file system within their schematics, from simple read and write operations to more complex structural changes.

This revised version includes concise descriptions for the `Tree` object methods and illustrative code examples to help newcomers grasp the concepts more easily.
