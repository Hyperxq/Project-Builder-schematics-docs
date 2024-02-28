---
title: What the hell is a Schema JSON in schematics?
description: Description of How a schema JSON works.
---

## Introduction

We have already executed our first schematic. Now, we have the opportunity to address the question: **"What happens when we need input from the user before starting our schematics?"**

## What is a schema json?
JSON schemas are used to validate JSON data. They provide a way to define rules, properties, and configurations for your JSON. An example of this is the **[angular.json](https://github.com/angular/angular-cli/blob/main/packages/angular/cli/lib/config/workspace-schema.json)** file.

Every JSON object can have a **$schema** property, which allows us to reference the schema containing all the rules and configurations. The **$schema** property can point to a local file or a URL link.

You can find more information about JSON schemas here: https://json-schema.org/learn/getting-started-step-by-step

In the context of a schematic, the schema enables us to ask users different types of questions before executing the schematic. However, you might wonder, "Daniel, what if I need to ask a question during the execution of the schematic, rather than just before it?" The simple answer is that schemas do not allow for this. However, there is another approach to accomplish it, which we will explore in a future article.

Here you can see all the information about a schema and all the questions that you can make to users.
```json
{
  "$schema": "http://json-schema.org/schema", <---- the rules that the json will follow. Help to don't make typos. You could create your own schema.
  "$id": "[ID-of-the-schema]",
  "title": "[The main reason of the schematic]",
  "type": "object", <---- this is because we need to define one or more attribute.
  "properties": { <----- All the question that we will ask to the user.
--------------------------------------------------------------------------------
  THERE ARE ALL TYPES OF QUESTION THAT YOU CAN MAKE.
--------------------------------------------------------------------------------
    "name": { <---- String
      "type": "string",
      "description": "The name of the resource.",
      "$default": { ---> With this the user doesn't need to write the flag's name
        "$source": "argv",
        "index": 0
      },
			---> This is the text that the user will see.
      "x-prompt": "What name would you like to use for this resource (plural, e.g., \"users\")?"
    },
    "color": { <---- Enum
        "type": "string",
        "enum": ["red", "green", "blue"]
    },
    "length": { <----- Number
        "type": "number",
        "minimum": 0,
        "default": 10
    },
		"interactive": { <---- Boolean 
        "type": "boolean",
        "default": true
    },
		"config": { <---- Object
      "type": "object",
      "properties": {
          "key": { "type": "string" },
          "value": { "type": "string" }
      }
	  },
    "items": { <---- Array
        "type": "array",
        "items": { "type": "string" }
    },
		"value": { <--- Allow multiples types
        "oneOf": [
            { "type": "number" },
            { "type": "string" }
        ]
    }
		"profile": { "$ref": "#/definitions/profile" } <---- By reference
  },
	"definitions": {
      "profile": {
          "type": "object",
          "properties": {
              "name": { "type": "string" },
              "age": { "type": "number" }
          }
      }
  }
--------------------------------------------------------------------------------
  The end of the questions
--------------------------------------------------------------------------------
}
```