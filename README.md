# my-ts-lib

[![npm version](https://badgen.net/npm/v/my-ts-lib)](https://npm.im/my-ts-lib) [![npm downloads](https://badgen.net/npm/dm/my-ts-lib)](https://npm.im/my-ts-lib)

## Using this template

- Search `my-ts-lib` and replace it with your custom package name.
- Search `u3u` and replace it with your name.

### Features

- Package manager [pnpm](https://pnpm.io/), fast and awesome!
- Bundle with [tsup](https://github.com/egoist/tsup), supports both `cjs` and `esm` formats at the same time
- Use the `link:` symlink to oneself for testing
- Use GitHub [action](./.github/workflows/release.yaml) to [generate changelog](https://github.com/antfu/changelogithub) and automatically publish to NPM

### Release

You need to [add](https://docs.github.com/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) `NPM_TOKEN` to the secrets variable of your repository first, and then you can run [`npx bumpp`](https://github.com/antfu/bumpp) to trigger the automated release workflow.

### CommonJS

If you want to publish config like [Prettier](https://prettier.io/docs/en/configuration.html#basic-configuration) or [ESLint](https://eslint.org/docs/latest/extend/shareable-configs), you may need to fix the default export.  
Modify the `build` script in `package.json` and use [fix-tsup-cjs](https://github.com/u3u/fix-tsup-cjs) to fix the default export and type definition of `CommonJS`.

```json
{
  "scripts": {
    "build": "tsup && npx fix-tsup-cjs"
  }
}
```

## Install

```sh
pnpm add my-ts-lib
```

## License

[MIT](./LICENSE) License © 2023 [u3u](https://github.com/u3u)
