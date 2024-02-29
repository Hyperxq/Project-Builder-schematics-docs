---
title: How to modify files?
description: How to add files?
---
## Introduction
When we need to modify files is more complex than add or modify files. Because, when you modify a file you need to know where you want
to add, modify, delete code. 
In this section, we will know to do it.

## JSON files
To modify json files is not complex. Let me show you.
For this example, we will update the package.json:

```tsx
export function updatePackageJson(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
		const filePath = '/package.json';
		// Here we'll check if the file exists:
    if (!tree.exists(filePath)) {
      _context.logger.warn(`The file ${filePath} doesn't exist.`);
      return tree;
    }
		//Then we'll read the file
		const content = tree.read(filePath);
    if (!content) {
      _context.logger.warn(`Failed to read the file ${filePath}.`);
      return tree;
    }
    // Parse the JSON content of package.json
    const jsonStr = content.toString('utf-8');
    const packageJson = JSON.parse(jsonStr);

		// Modify the package.json object
    // Example: Add a dependency
    const dependencyName = '@example/dependency';
    const dependencyVersion = '^1.0.0';
    packageJson.dependencies = packageJson.dependencies || {};
    packageJson.dependencies[dependencyName] = dependencyVersion;

		// Serialize the modified object and write it back
    tree.overwrite(filePath, JSON.stringify(packageJson, null, 2));
	}
}
```

## Typescript/Javascript files
Will modify this file:
```typescript
export const tags = [
   "Typescript", "Javascript", "CSS"
]

export function printTags() {
    tags.forEach( t => console.log);
}
```

### Problem to solve
We need to add a new tags to the code, for this reason we need to modify the line 2.

### Code to solve the problem
```typescript
import { Tree } from "@angular-devkit/schematics";
import { ArrayLiteralExpression, isArrayLiteralExpression, isIdentifier, ScriptTarget, SourceFile, createSourceFile, Node, isVariableDeclaration, forEachChild } from "typescript";

export function filesDemoFactory(){
  return (tree: Tree) => {
    const filePath = 'my-file.ts'; // Adjust path as necessary
    if (!tree.exists(filePath)) {
      throw new Error(`File ${filePath} does not exist.`);
    }

    const fileContent = tree.readText(filePath);
    const sourceFile = createSourceFile(filePath, fileContent, ScriptTarget.Latest, true);

    // Find the array node to modify
    const listArrayNode = findArrayNodeByName(sourceFile, 'tags');
    if (!listArrayNode) {
      throw new Error(`Could not find the 'tags' array in ${filePath}`);
    }

    // Modify the array by adding a new element
    const modifiedArrayText = addElementToArrayLiteral(listArrayNode, `"Scss"`, sourceFile);
    const modifiedContent = replaceNodeTextInFileContent(fileContent, listArrayNode, modifiedArrayText);

    // Update the file with the modified content
    tree.overwrite(filePath, modifiedContent);
  }
}

/**
 * Finds an array literal node by its variable name in a source file.
 */
function findArrayNodeByName(sourceFile: SourceFile, arrayName: string): ArrayLiteralExpression | undefined {
  let targetNode: ArrayLiteralExpression | undefined;

  const visitNode = (node: Node) => {
    if (isVariableDeclaration(node) && node.initializer && isArrayLiteralExpression(node.initializer)) {
      const identifier = node.name;
      if (isIdentifier(identifier) && identifier.text === arrayName) {
        targetNode = node.initializer;
      }
    }
    forEachChild(node, visitNode);
  };

  visitNode(sourceFile);
  return targetNode;
}

/**
 * Adds a new element to an array literal and returns the modified array as a string.
 */
function addElementToArrayLiteral(node: ArrayLiteralExpression, newElement: string, sourceFile: SourceFile): string {
  const elementsText = node.elements.map(element => element.getText(sourceFile));
  elementsText.push(newElement); // Add new element
  return `[${elementsText.join(", ")}]`;
}

/**
 * Replaces the text of a node in the file content with new text.
 */
function replaceNodeTextInFileContent(fileContent: string, node: Node, newText: string): string {
  return fileContent.substring(0, node.pos) + newText + fileContent.substring(node.end);
}

```


### Conclusion

When you are modifying a file, you will use NodeJS to treat this file as a array of Node. 
This will help you to find the exact point where are the code to insert or modify.