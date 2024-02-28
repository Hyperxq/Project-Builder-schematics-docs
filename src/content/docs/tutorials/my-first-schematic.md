---
title: My first schematic
description: A tutorial to create your first schematic
---
## Getting started with Schematics
if you are using vscode, check this article to load schemas:
https://bobbyhadz.com/blog/unable-to-load-schema-from-vscode-cannot-open.

## Goals for this section:
- Create our first schematics project.
- Setup a basic configurations to use the our first schematic.
- Create our first schematic.

**Execute:**
```powershell
npx @danils/project-builder-cli@latest <library-name> [author]
```
## Builder-add schematic
You will see a folder named: `builder-add`, this folder is for a schematic that works when you not only install you schematics into your project but also before the installation you would like to do some additional settings. In this case create follow this instructions:

**1.** In builder-add create this files: `schema.json`, `builder-add.factory.ts`.

**2.** Inside `ng-add.factory.ts` create the next method:
```ts
import { Rule } from "@angular-devkit/schematics";

export function main(): Rule {
	return () => {};
}
```
**3.** Go to `collection.json` file.
```json
{
  "$schema": "../node_modules/@angular-devkit/schematics/collection-schema.json",
  "schematics": {
    "ng-add": {
      "description": "To make actions before the library will be install",
      "factory": "./builder-add/ng-add.factory#main",
      "schema": "./builder-add/schema.json"
    }
}
```
**4.** Inside `ng-add.factory.ts` create the next method:
```ts
import { Rule } from "@angular-devkit/schematics";

export function main(): Rule {
	return () => {};
}
```


## Creating the first schematic
**1.** Go to builder-generate folder and create a folder inside named: `my-schematic`.

**2.** Create the factory: `my-schematic.factory.ts`.
```ts
import {Rule} from "@angular-devkit/schematics";

export function myFirstSchematic(): Rule {
    return () => {
			console.log('Hello world');	
		};
}
```
**3.** Create the schema: `schema.json`.
```json
{
  "$schema": "http://json-schema.org/schema",
  "$id": "MyFirstSchematic",
  "title": "My first schematic schema",
  "type": "object",
  "properties": {
  }
}
```
**4.** Then, we can register the schematic. go to collection.json:
```json
{
  "$schema": "../node_modules/@angular-devkit/schematics/collection-schema.json",
  "schematics": {
		"ng-add": {
      "description": "To make actions before the library will be install",
      "factory": "./ng-add/ng-add.factory#main",
      "schema": "./ng-add/schema.json"
    },
    "my-schematic": {
      "description": "My first schematic",
      "factory": "./ng-generate/my-schematic/my-schematic.factory#myFirstSchematic",
      "schema": "./ng-generate/my-schematic/schema.json",
      "aliases": ["ms"]
    }}
```
**5.** We are ready to test our first schematic, run: 
```powershell
npm run build
```
**6.** To test it we can run:
```powershell
schematics ./dist/collection.json:my-schematic
```
or

```powershell
schematics  ./dist/collection.json:ms
```


**Congratulations! 🚀** 
You ran your first schematic!