---
title: How to remove files?
description: How to add files?
---
## Introduction
To delete files is very easy, you only will need to use a method of the Tree object:

## Code sample
```ts
export function deleteFile(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const filePath = '/path/to/your/file.txt'; // Specify the file path here
    if (tree.exists(filePath)) {
      tree.delete(filePath);
    }
    return tree;
  };
}
```