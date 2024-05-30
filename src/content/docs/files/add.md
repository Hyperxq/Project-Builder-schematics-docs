---
title: How to add files?
description: How to add files?
---

## Introduction

When you are adding files you will need three different things:

1. The files names.
2. Where are these files in your schematic project base on the factory function.
3. Which variables do you need to send to the files?

There is how a schematic with files looks like:

![Files scaffolding](../../../assets/scaffolding-files.webp)

If you noticed, every files has the `.template` extension, that is because you will have templating code the will to create files with dynamic code. This code that will be dynamic with the original extension will throw errors.

## Code sample

```ts
import {
  MergeStrategy,
  Rule,
  apply,
  applyTemplates,
  filter,
  mergeWith,
  move,
  renameTemplateFiles,
  strings,
  url,
} from '@angular-devkit/schematics';

function addPrettierFiles(): Rule {
  const urlTemplates = ['.prettierrc.template', '.prettierignore.template'];
  const template = apply(url('./files'), [
    filter((path) => urlTemplates.some((urlTemplate) => path.includes(urlTemplate))),
    applyTemplates({
      ...strings,
    }),
    renameTemplateFiles(),
    move('./'),
  ]);

  return mergeWith(template, MergeStrategy.Overwrite);
}
```

As you noticed you have many elements:

| Method                  | Meaning                                                                          |
| ----------------------- | -------------------------------------------------------------------------------- |
| **apply**               | Allows to execute many operation one after other.                                |
| **url**                 | Allows to know where is the template files.                                      |
| **filter**              | To choose which files we want to include.                                        |
| **applyTemplates**      | Function that allows to send variables and functions to the template.            |
| **renameTemplateFiles** | Will remove the `.template` extention                                            |
| **move**                | To where do you want to move the current template files to the project location. |

<br>

Additionally, you can noticied that `applyTemplates` function is receving a object named: `strings`. This is an utility of `@angular-devkit/schematics` that allows us to modify strings:

| Utility Name  | Description                                                                            | Examples                                                                                |
| ------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `decamelize`  | Converts a camelized string into all lower case separated by underscores.              | `decamelize('innerHTML'); -> 'inner_html'`                                              |
| `dasherize`   | Replaces underscores, spaces, or camelCase with dashes.                                | `dasherize('innerHTML'); -> 'inner-html'`                                               |
| `camelize`    | Returns the lowerCamelCase form of a string.                                           | `camelize('innerHTML'); -> 'innerHTML'`                                                 |
| `classify`    | Returns the UpperCamelCase form of a string.                                           | `'innerHTML'.classify(); -> 'InnerHTML'`<br>`'action_name'.classify(); -> 'ActionName'` |
| `underscore`  | More general than decamelize. Returns the lower_case_and_underscored form of a string. | `'innerHTML'.underscore(); -> 'inner_html'`                                             |
| `capitalize`  | Returns the Capitalized form of a string.                                              | `'innerHTML'.capitalize(); -> 'InnerHTML'`                                              |
| `levenshtein` | Calculate the levenshtein distance of two strings.                                     | `levenshtein('kitten', 'sitting'); -> Returns a number representing the distance`       |

## Templating

You will need dynamic code, for this reason you need to follow the next info:

Inside your templates files you can use special code sections that allow schematic to process your files.
Schematics template from `@devkit-angular/schematics` are inspirate on EJS. For this reason, they use the next tags to create dynamic code:

### Tags into files

- `<%` 'Scriptlet' **tag**, for control-flow **(if, for, switch)**, no output
- `<%=` Outputs the value into the template (HTML escaped), **(functions results, variables results)**
- `<%-` Outputs the unescaped value into the template **(to include for example external files)**
- `<%#` **Comment tag**, no execution, no output
- `%>` Plain ending tag
- `%>` Trim-mode ('newline slurp') tag, trims following newline

#### Examples

```ts
<%# Prettier Config %>
{
<% if(!!options) { %>
    <%= Object.entries(options).map(([key, value]) => `"${key}":${value}`).join(',') %>
<% } else { %>
  "printWidth": 120,
  "singleQuote": true,
  "useTabs": false,
  "tabWidth": 2,
  "semi": true,
  "bracketSpacing": true,
  "endOfLine": "auto"
<% }%>
}
```

<br>

### File name templating

Additionally, when adding template files, you might want to modify the file names dynamically. As observed, when invoking the `applyTemplates` function, the file name can incorporate any object or function you pass, affecting not just the content inside the file but also the file name itself.

The correct format for dynamic file names follows this structure:  `__[object-name]@[function-name]__[the rest of the file name]`. For example, a file name could be `__name@dasherize__.service.ts.template`.

Everything enclosed within `__ __` is treated as dynamic, and the use of `@` preceding a name indicates a function.
