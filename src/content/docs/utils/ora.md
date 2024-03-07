---
title: Terminal spinners
description: Description of how to use the spinner.
---
## Introduction

The Spinner utility, built on top of the Ora library, is designed to give users a visual cue that a process is ongoing, improving the interactivity of command-line applications. Here's how you can make the most out of this utility.

## Initialization

To use the Spinner, first ensure you import the class in your script:

```typescript
import { Spinner } from '../../utils';
```

## Creating a Spinner Instance

You can create a new spinner instance simply by instantiating the Spinner class. Optionally, you can provide an initial text message:

```typescript
const spinner = new Spinner('Processing...');
```

## Controlling the Spinner

The Spinner class offers several methods to control the spinner's behavior and output:

- **start(text?: string)**: Begins the spinner animation. You can optionally update the spinner's message.

```typescript
spinner.start('Starting process...');

```

- **succeed(text?: string)**: Stops the spinner and marks the operation as successful. An optional success message can be provided.

```typescript
spinner.succeed('Process completed successfully.');

```

- **fail(text?: string)**: Stops the spinner and marks the operation as failed, displaying the message in red. An optional failure message can be provided.

```typescript
spinner.fail('Process failed.');
```

- **info(text?: string)** and **warn(text?: string)**: Display an info or warning message without stopping the spinner.

```typescript
spinner.info('Important information.');
spinner.warn('A potential issue detected.');
```

- **stop()**: Simply stops the spinner without marking the operation as succeeded or failed.

```typescript
spinner.stop();
```

## Conclusion

The Spinner utility, leveraging Ora, is a powerful tool for enhancing the user interface of your command-line applications. It not only informs users about ongoing processes but also enriches the application with visually appealing, interactive elements. By following the above guidelines, you can easily integrate and customize the Spinner in your Angular schematics or Node.js projects, creating a more engaging command-line experience.
