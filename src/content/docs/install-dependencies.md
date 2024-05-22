---
title: How to add and install dependencies?
description: A tutorial to how add dependencies to the package.json
---

## Problem to Solve?

When creating schematics, you may encounter the need to install dependencies.

**What does installing dependencies entail?**

1. Modifying the `package.json` file to include the new dependencies. Dependencies can be of various types: `dev`, `default`, `peer`, `optional`.
2. Installing these dependencies based on the package.json file.

## Solution

There are two main approaches to solving this problem:

1. If you know the specific version of the library you want to install, you can directly modify the `package.json` and then run a task to install the dependencies.
2. If you need to install the latest version but are unsure of its version number, you can call a `Node` method.

:::tip
All the files and methods mentioned in this tutorial can be found in your schematic project under the `/utils` folder.
:::

:::caution
It is recommended to specify the version of the library when adding dependencies to your project. This approach ensures you are aware of the required settings for that version. Installing the latest version might introduce breaking changes that could affect your schematic code.
:::

&nbsp;

### Adding Dependencies to the Package.json and Installing Them

The Angular Schematic repository provides useful utilities for this purpose.

```typescript
import {
  Rule,
  Tree,
  chain,
  SchematicContext,
} from '@angular-devkit/schematics';

import {
  NodeDependencyType,
  addPackageJsonDependency,
  addScriptToPackageJson
} from '../../utils';

export function prettierFactory({packageManager}: { packageManager: string}): Rule {
    return (tree: Tree, context: SchematicContext) => {
        addPackageJsonDependency(tree, {
            type: NodeDependencyType.Dev,
            name: 'prettier',
            version: '3.2.5',
            overwrite: true,
        });

        return chain([
            installDependencies(context, packageManager),
            addScriptToPackageJson('format', 'prettier --write .')
        ]);
    }
}

export function installDependencies(context: SchematicContext, packageManager = 'npm') {
  context.addTask(new NodePackageInstallTask({ packageManager }));
  return noop();
}
```

### Installing Dependencies with Node Commands

```typescript
import {
  Rule,
} from '@angular-devkit/schematics';

import { Spinner } from '../../utils/spinner';
import { addScriptToPackageJson, spawnAsync } from '../../utils';

export function prettierFactory({packageManager}: { packageManager: string}): Rule {
    return async () => {
        const spinner = new Spinner('prettier installation');
        const packageManagerCommands = {
            npm: 'install',
            yarn: 'add',
            pnpm: 'add',
            cnpm: 'install',
            bun: 'add',
        };

        try {
            spinner.start('Installing prettier');
            await spawnAsync(
                packageManager,
                [ packageManagerCommands[packageManager], `--save-dev --save-exact prettier` ],
                {
                    cwd: process.cwd(),
                    stdio: 'inherit',
                    shell: true,
                }
            );
            spinner.succeed('Prettier was installed successfully');
        } catch (e) {
            spinner.stop();
        }

        return chain([
            addScriptToPackageJson('format', 'prettier --write .')
        ]);
    }
}
```

## Node Methods vs NodePackageInstallTask

We've explored two solutions. The first uses `@angular-devkit`'s native options, requiring more code. The second leverages Node.js's `spawnAsync`, a native method.

The drawback of the second solution is its operation outside the `staging area`. This area allows the `Tree` object to roll back changes if any issues occur during modification of the `package.json` or any file. Additionally, the first solution supports `dry-run` mode, simulating actions without executing them. Thus, if you opt for the second solution, you'll need to implement `dry-run` functionality manually.
