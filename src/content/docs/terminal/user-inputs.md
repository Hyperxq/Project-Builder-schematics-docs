---
title: User Inputs
description: Description of what is the Tree object and what method has.
---

## Introduction

One of the most important aspects to consider when discussing Schematics is `User Inputs`. There are two distinct approaches:

1. **Pre-Execution Inputs:** Requesting inputs before initiating the factory function, prompting the user with questions in the terminal.
2. **In-Execution Inputs:** Asking for inputs during the execution of the factory function, again through terminal prompts.

:::note
In both scenarios, it is possible to bypass the prompts in the terminal by pre-supplying the input values. If you decide to combine both methods, you must define all the properties in `schema.json`. However, only the properties that might be prompted in the terminal need to include the `x-prompt` attribute.
:::
