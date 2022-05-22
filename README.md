# ace-ts-editor

Ace Typescript editor supporting custom language through completers with Typescript, Rollup and Babel

![image](https://user-images.githubusercontent.com/5220584/169692104-e0ce3201-8aa5-476d-9ce7-089eac3ce625.png)

# Prerequisites

Install node and npm, see `engines.node` in `package.json`.

# Install

```bash
git clone git@github.com:sluger/ace-ts-editor.git
cd ace-ts-editor
npm i
```

# Build

```bash
npm run build
```

Find the artifacts in the `/dist` folder.

# Examples

Open `/examples/index.html` in the browser.

# Development

The dev environment is configured with Prettier, Husky, lint-staged, eslint for TypeScript and Jest.

# Testing

```bash
npm test
```

Runs a jest test creating an AceEditor instance.
