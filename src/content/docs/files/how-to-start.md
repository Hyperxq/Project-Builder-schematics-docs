---
title: How to start with files?
description: An introduction to files manipulation.
---
When you are starting in the automation world and did the first schematics you can make the question:
**If I already have my code working how can I adapt into a schematic to be automated?**

Well the answer is simple, you will use the `Tree` object. 

However you need to understand something before dive into files manipulations.
## Execution flow

For the current version (**17.2.0**)  of `@angular-devkit/schematics` the behavior is this:
- When you are using multiples rules in a factory function you can *Add* / *Modify* / *Delete* files. However the execution order, no matter the position of the rules are: First will create files, then make the modifications and finally all file deletions. 

This is important, because in some cases you would like to create a files and after the make a modification in this files. That happen a lot when you are calling other schematics as rules.

To understand how to do it, follow the next tutorials!