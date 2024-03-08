---
title: Pre-Execution Inputs
description: How to show questions before factory function execution.
---

## Introduction

The most common way is when we need to show questions in the terminal and we need these answers before
the function factory start.

:::caution
In the `schema.json` files you could declare inputs as objects. However, you could not pass JS object in terminal.
:::

## Code section

For this purpose, we have a property inside collection named: schema

```json
{
  "$schema": "../node_modules/@angular-devkit/schematics/collection-schema.json",
  "schematics": {
    "add": {
      "description": "Add the library to the project",
      "factory": "./builder-generate/add/add.factory#main",
      "schema": "./builder-generate/add/schema.json" <- this schema
    },
  }
}
```

This file will contain all the questions and It will send to the factory function as first parameter.

```json title="schema.json sample"
{
  "$schema": "http://json-schema.org/schema",
  "$id": "EmptyFolder",
  "title": "Add an empty folder",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name of the folder.",
      "$default": {
        "$source": "argv",
        "index": 0
      },
      "x-prompt": "What name would you like to use for the empty folder?"
    }
  },
  "additionalProperties": true,
  "required": [
    "name"
  ]
}
```

```typescript
import {Tree, Rule, SchematicContext} from '@angular-devkit/schematics';
export function testFactory(
  options: {name: string} // this object parameter has all the properties contains in the schema.json.
): Rule { 
  return (tree: Tree, context: SchematicContext)
}
```

:::note
If you put the property `additionalProperties` in true in the `schema.json` file, the schematic can support more than the properties specified into the `schema.json`
:::
