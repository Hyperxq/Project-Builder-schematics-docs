---
title: How to Extend an Existing Schematic
description: How to Extend an Existing Angular Schematics
---

Hey there, schematic enthusiasts! If you're new to schematics, you might be wondering how to extend existing ones without starting from scratch. You probably just want to add some new functionality without reinventing the wheel. Unfortunately, there's not a lot of information out there on how to do this, so I’m here to help.

In this tutorial, we'll dive into extending an existing schematic, specifically the component schematic from Angular. Let's get started!

## Problem to Solve

Here's what we'll be doing:

- Keep all the questions/inputs that the original one has.
- Implement the logic that this schematic does.
- Add a Storybook file after this.

### Tips

- Be careful about where you will use this schematic.
- Understand the behavior of the schematic you will extend.

Based on these tips, let's define those:

### Where will this Schematic be used?

We'll be using it in Angular environments. Angular has a unique feature where `ng new [app-name]` not only creates an application but also sets up a workspace with a default app.

In Angular, you can configure where to create new sub-projects. This adds complexity because while we can create our extended schematic for our own project, it might not work with different configurations. So, we’ll read the `angular.json` file to know the base path.

### Does the Schematic have important behavior?

Yes! For example, when you specify the component name, you can include a path, like `/home/components/carousel`. Executing `ng g c home/components/carousel` will create the `carousel` component in `home/components`.

Now that we know what we need, let’s dive in!

## Step-by-Step Guide

### 1. Install the CLI

First, install the CLI tool globally:

```
npm i -g @pbuilder/cli
```

### 2. Create a New Schematic Project

Next, create a new schematic project:

```powershell
builder new workshop
```

### 3. Create Your Component Schematic

Generate a new component schematic:

```sh
builder g @pbuilder/sm sc --name="component"
```

### 4. Extend Component Inputs

We need to add inputs/questions to get before the factory starts. These go into the `schema.json` file.

Here’s a typical `schema.json`:

```JSON
{
    "$schema": "http://json-schema.org/schema",
    "$id": "BuilderAdd",
    "title": "Builder Add",
    "type": "object",
    "properties": {}
}
```

But we can play with `json-schemas` using `anyOf`, `allOf`, `oneOf`, or `not`. For our scenario, we’ll use `anyOf` and `allOf`. These help mix more than one schema.

The component schematic needs a project input. Angular CLI provides this automatically, but we’ll handle it if the user doesn’t specify.

Here’s our modified `schema.json`:

```JSON
{
    "$schema": "http://json-schema.org/schema",
    "$id": "ComponentExtended",
    "title": "ComponentExtended",
    "type": "object",
    "anyOf": [
        {
            "$ref": "https://unpkg.com/@schematics/angular@18.0.3/component/schema.json"
        },
        {
            "type": "object",
            "properties": {},
            "required": []
        }
    ],
    "properties": {
        "skipStorybook": {
            "type": "boolean",
            "description": "Do you want to add a storybook file?",
            "default": false
        }
    },
    "required": []
}
```

`$ref` attribute will read an schema with the http protocol, I am using unpkg to read this schema. Please go to npm to the tab `Code` to see where are that schema that you want to extends.

### 5. Recreate Interfaces Based on the schema.json

Execute the command:

```sh
npm run generate-types
```

```ts
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ComponentOptions = AngularComponentOptionsSchema & ComponentExtended2;

/**
 * Creates a new, generic component definition in the given project.
 */
export interface AngularComponentOptionsSchema {
  /**
   * The path at which to create the component file, relative to the current workspace. Default is a folder with the same name as the component in the project root.
   */
  path?: string;
  /**
   * The name of the project.
   */
  project: string;
  /**
   * The name of the component.
   */
  name: string;
  /**
   * Specifies if the style will contain `:host { display: block; }`.
   */
  displayBlock?: boolean;
  /**
   * Include styles inline in the component.ts file. Only CSS styles can be included inline. By default, an external styles file is created and referenced in the component.ts file.
   */
  inlineStyle?: boolean;
  /**
   * Include template inline in the component.ts file. By default, an external template file is created and referenced in the component.ts file.
   */
  inlineTemplate?: boolean;
  /**
   * Whether the generated component is standalone.
   */
  standalone?: boolean;
  /**
   * The view encapsulation strategy to use in the new component.
   */
  viewEncapsulation?: 'Emulated' | 'None' | 'ShadowDom';
  /**
   * The change detection strategy to use in the new component.
   */
  changeDetection?: 'Default' | 'OnPush';
  /**
   * The prefix to apply to the generated component selector.
   */
  prefix?: {
    [k: string]: unknown;
  } & string;
  /**
   * The file extension or preprocessor to use for style files, or 'none' to skip generating the style file.
   */
  style?: 'css' | 'scss' | 'sass' | 'less' | 'none';
  /**
   * Adds a developer-defined type to the filename, in the format "name.type.ts".
   */
  type?: string;
  /**
   * Do not create "spec.ts" test files for the new component.
   */
  skipTests?: boolean;
  /**
   * Create the new files at the top level of the current project.
   */
  flat?: boolean;
  /**
   * Do not import this component into the owning NgModule.
   */
  skipImport?: boolean;
  /**
   * The HTML selector to use for this component.
   */
  selector?: string;
  /**
   * Specifies if the component should have a selector or not.
   */
  skipSelector?: boolean;
  /**
   * The declaring NgModule.
   */
  module?: string;
  /**
   * The declaring NgModule exports this component.
   */
  export?: boolean;
}
export interface ComponentExtended2 {
  /**
   * Do you want to add a storybook file?
   */
  skipStorybook?: boolean;
  [k: string]: unknown;
}
```

### 6. Modify the Factory to Extend the Schematic

Before you continues, please add this utils from this repo to your project:

- [workspace](https://github.com/Hyperxq/schematic-component-extended-workshop/blob/main/src/utils/workspaces.ts)
- [workspace-models](https://github.com/Hyperxq/schematic-component-extended-workshop/blob/main/src/utils/workspace-models.ts)

Here’s how you modify the factory function:

```ts
import { ProjectDefinition, WorkspaceDefinition } from '@angular-devkit/core/src/workspace';
import {
  Rule,
  Tree,
  chain,
  externalSchematic
} from '@angular-devkit/schematics';
import { ComponentOptions } from './schema';

export function componentFactory(options: ComponentOptions): Rule {
  return async (tree: Tree) => {
   // Separating our option from the component options.
   const { skipStorybook, ...componentOptions } = options;
   
   const workspace: WorkspaceDefinition = await getWorkspace(tree);
   const { sourceRoot, prefix }: ProjectDefinition =      workspace.projects.get(project);
   
  return chain([
       externalSchematic('@schematics/angular', 'component', {
         ...componentOptions,
         project,
       })
     ]);
  }
}
```

### 7. Create the Storybook File Template

Add a new file named `__name@dasherize__.stories.ts.template` in a folder called `files`.

### 8. Add the Storybook File

Here’s how to add the Storybook file:

```ts
import { ProjectDefinition, WorkspaceDefinition } from '@angular-devkit/core/src/workspace';
import {
  MergeStrategy,
  Rule,
  Tree,
  apply,
  applyTemplates,
  chain,
  externalSchematic,
  filter,
  mergeWith,
  move,
  noop,
  renameTemplateFiles,
  strings,
  url,
} from '@angular-devkit/schematics';
import { join } from 'path';
import { parseName } from '../../utils/parse-name';
import { getDefaultProjectName, getWorkspace } from '../../utils/workspaces';
import { ComponentOptions } from './schema';

export function componentFactory(options: ComponentOptions): Rule {
  return async (tree: Tree) => {
    const { skipStorybook, ...componentOptions } = options;

    const workspace: WorkspaceDefinition = await getWorkspace(tree);

    const project = options.project ?? getDefaultProjectName(workspace);

    const { sourceRoot, prefix }: ProjectDefinition = workspace.projects.get(project);

    const projectPath = `${sourceRoot}/${prefix}`;

    return chain([
      externalSchematic('@schematics/angular', 'component', {
        ...componentOptions,
        project,
      }),
      !skipStorybook ? addStorybookFile(projectPath, options.name) : noop(),
    ]);
  };
}

function addStorybookFile(project: string, name: string): Rule {
  return () => {
    const { path, name: fileName } = parseName('./', name);

    const urlTemplates = ['__name@dasherize__.stories.ts.template'];

    const template = apply(url('./files'), [
      filter((path) => urlTemplates.some((urlTemplate) => path.includes(urlTemplate))),
      applyTemplates({
        ...strings,
        name: fileName,
      }),
      renameTemplateFiles(),
      move('\\' + path + join(project, strings.dasherize(fileName))),
    ]);

    return mergeWith(template, MergeStrategy.Overwrite);
  };
}
```

### 9. Build It

Compile your project:

```sh
npm run build
```

### 10. Test It

#### Locally

Test your schematic locally in an Angular application:

```sh
builder g [relative-path as ../angular-workshop/dist/collection.json] component
```

#### Verdaccio

To test it as if deployed to a package manager like npm, start Verdaccio. If you don’t have it, follow the instructions on the [official page](https://verdaccio.org/docs/installation) and configure a local npm user.

```sh
verdaccio
```

:::note
remember to increase the version of the package.json to 0.0.1
:::

Then execute:

```sh
npm run publish:verdaccio
```

Finally, execute:

```sh
builder g [package-name] component --registry http://localhost:4873
```

Check out the [GitHub repo](https://github.com/Hyperxq/schematic-component-extended-workshop) for more details.

Congrats! You've just created your first extended schematic!
