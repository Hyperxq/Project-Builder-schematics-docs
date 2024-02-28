---
title: What is the Tree object?
description: Description of what is the Tree object and what method has.
---
If you did the tutorial you noticed that the factory function return a Rule function, this function has two parameters, for now, we only are interested on the first one: Tree.

The virtual file system is represented by a `Tree`. The `Tree` data structure contains a *base* (a set of files that already exists) and a *staging area* (a list of changes to be applied to the base). When making modifications, you don't actually change the base, but add those modifications to the staging area.

In summary, whatever you want to do with files you will need to use the Tree object.

## What does Tree class have?

The tree object has interesting methods to interact with the file system:

### To Read Files
#### read

#### readText

Reads a file from the Tree as a UTF-8 encoded text file.

#### readJson

Reads and parses a file from the Tree as a UTF-8 encoded JSON file.
Supports parsing JSON (RFC 8259) with the following extensions:

- Single-line and multi-line JavaScript comments
- Trailing commas within objects and arrays

### To check files
#### exists
#### get
#### getDir
### visit


### To change the content of the host files.
#### beginUpdate
#### commitUpdate
#### overwrite


### Structural methods
#### create
#### delete
#### rename
### apply



### branch
### merge