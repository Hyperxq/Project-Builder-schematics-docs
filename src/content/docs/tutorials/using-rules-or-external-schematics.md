---
title: Use rules or call other schematics
description: A tutorial to use rules or call other schematics
---

Well, when you are executing a factory function, it's important to understand that the common approach involves using a `Rule`.

### Use rules or call other schematics? It's a good question, but why?

1. If you return an array of Rules, this array acts as a queue, meaning it will be executed in order. However, despite being a queue, actions are executed in this specific order: Creating, Updating, Deleting. This can be problematic because you might be using rules that create files, but then you need to modify these files in another Rule. If you need to follow a specific order—like create a file, delete another, modify one, and then create a new one—you'll encounter issues with the Rules approach.

In such cases, you need to use `addTask`. `addTask` function allows you to call another schematics, meaning you will opt for external schematics instead of using rules. This is due to possible scenarios like:

   1. You have dependencies between actions and need to ensure some are executed before others.
   2. You're dealing with numerous actions and want to split them according to separate responsibilities.
   3. You need many actions to execute simultaneously, not sequentially.

My recommendation is that when creating a schematic, try to keep it simple and atomic. If you find that you need to create a lot of files with dependencies and many responsibilities, split them into separate schematics. It's also important to mention that when declaring them in `collection.json`, use the `hidden` property.
