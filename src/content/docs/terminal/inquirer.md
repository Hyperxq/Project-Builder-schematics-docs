---
title: In-Execution Inputs
description: Show terminal questions during factory function execution. 
---

## Introduction
Sometimes we need to make questions base on some value or merely during the factory function execution. 

## Code section
For this purpose we can use Inquirer JS. You already have inquirer JS when create a new schematic project
with Project Builder CLI. If you look at `utils` folder you will see a file name: `prompt.ts`

This file has three methods: `askQuestion`, `askChoices` and `askConfirmation`. However, you can add methods depends on your needs.


```typescript
import { green, cyan, bold } from 'ansi-colors';
import { askConfirmation } from '../../utils/prompt';
export async function installCollectionQuestion(): Promise<boolean> {
  const message = bold(
    green('Do you want to install the collections if they are not already installed?'),
  );
  return await askConfirmation(message, true);
}
```