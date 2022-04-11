## Installation

To use this Jest preset/configuration in your project, first install the NPM package in your NPM project with:

```shell
npm install --save-dev jest-preset-ts
```

Then, add the configuration to your `package.json` file. Your `package.json` might look something like:

```json
{
  "name": "mypackage",
  "version": "1.0.4"
  ...
  "jest": {
    "preset": "@megabytelabs/jest-preset",
    "reporters": [
      "default",
      [
        "jest-html-reporters",
        {
          "filename": "index.html",
          "openReport": true,
          "pageTitle": "Code Coverage Report",
          "publicPath": "./coverage"
        }
      ]
    ]
  }
}
```

There are of course [other ways of including the Jest preset](https://jestjs.io/docs/configuration).

## Usage

With the preset/configuration set up, you can now run `jest` commands and Jest will automatically detect and use the configuration stored in your `package.json` file. For instance, you can run Jest in watch mode with:

```shell
jest --watch
```

The Jest preset will scan your `src/` directory for test files and show the results after every time you make a file change in `--watch` mode.

## Plugins

This Jest preset/configuration includes all the best Jest plugins that have a decent amount of stars on GitHub. The plugins are listed below for your convenience:

{{ plugins.jest }}
