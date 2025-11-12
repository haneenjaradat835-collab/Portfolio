ESLint Config (Airbnb + React + Prettier)
=========================================

This configuration file was automatically generated using:
```bash
npx create-airbnb-x-config
```

### What does this setup include?
- Airbnb base JavaScript rules
- React, React Hooks, and JSX A11y plugins
- Prettier integration (with ESLint) for formatting
- ESLint recommended rules

### Usage

1) Check your code with ESLint:
```bash
npm run lint
```

2) Automatically fix problems:
```bash
npm run lint --fix
```

3) (Optional) Enable auto-fix on save in VS Code:  
Add this to `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}

```

### Applying ESLint Config to Specific File Types

To make sure these rules are applied only to JavaScript files (`.js` and `.jsx`), you can add a `files` property like this:

```js
// inside jsConfig
{
  name: "js/config",
  files: ["**/*.js", "**/*.jsx"], // apply only to JS/JSX files
  ...js.configs.recommended,
}

```

This ensures that ESLint enforces the recommended JavaScript rules only on the correct file types.


### Notes
- The config file is auto-generated. Do not edit it manually unless necessary.  
- Prettier is fully integrated with ESLint to avoid conflicts.  
