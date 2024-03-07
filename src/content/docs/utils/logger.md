---
title:  Logging in Angular Schematics context.logger vs Winston
description: Description of what is the Tree object and what method has.
---

## Introduction

Logging is a crucial part of any application or development process, offering insights into the code's behavior and helping diagnose issues. In Schematics, `context.logger` is the built-in method for logging. However, for more advanced logging needs, integrating an external logging library like Winston can offer enhanced functionality. This guide compares `context.logger` with Winston, demonstrating how to use Winston for logging in a Schematics project.

:::note
When you create a schematics project with Project Builder CLI you will see a utility named: `logger.ts`.
:::

```typescript
export function mySchematic(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('This is an info message');
    context.logger.warn('This is a warning');
    context.logger.error('This is an error');
    return tree;
  };
}
```

While `context.logger` is convenient for simple logging needs, it lacks the customization and flexibility that might be necessary for more complex projects.

## Introducing Winston for Advanced Logging

Winston is a versatile logging library for Node.js, known for its configurability and support for multiple transports — a way of storing logs. With Winston, you can format logs, set different logging levels, and even log to multiple sources (e.g., console, file, remote logging services).

Replace context.logger calls with your Winston logger instance to leverage advanced logging features:

```typescript
import { logger } from '../../logger';

export function mySchematic(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    logger.info('This is an info message with Winston');
    logger.warn('This is a warning with Winston');
    logger.error('This is an error with Winston');
    return tree;
  };
}
```

## Conclusion

While `context.logger` is sufficient for basic logging needs within schematics, Winston provides a robust alternative for projects requiring advanced logging capabilities. With Winston, developers can customize log formats, define log levels, and choose different log destinations, enhancing the debugging and monitoring of schematics.

This guide explains how to transition from the simplicity of `context.logger` to the robust features of Winston, catering to developers new to Angular Schematics who seek enhanced logging capabilities.
