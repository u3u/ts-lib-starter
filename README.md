# pkg-placeholder

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![codecov][codecov-src]][codecov-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Using this template

- Search `pkg-placeholder` and replace it with your custom package name.
- Search `u3u` and replace it with your name.

### Features

- Package manager [pnpm](https://pnpm.io/), fast and awesome!
- Bundle with [tsup](https://github.com/egoist/tsup), supports both `cjs` and `esm` formats at the same time
- Test with [vitest](https://vitest.dev/)
- Use the `link:` symlink to oneself for testing
- Use GitHub [action](./.github/workflows/release.yaml) to [generate changelog](https://github.com/antfu/changelogithub) and automatically publish to NPM

### Release

You need to [add](https://docs.github.com/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) `NPM_TOKEN` to the secrets variable of your repository first, and then you can run [`npx bumpp`](https://github.com/antfu/bumpp) to trigger the automated release workflow.

### CommonJS

If you want to publish config like [Prettier](https://prettier.io/docs/en/configuration.html#basic-configuration) or [ESLint](https://eslint.org/docs/latest/extend/shareable-configs), you may need to fix the default export.  
Modify the `build` script in `package.json` and use [fix-tsup-cjs](https://github.com/u3u/fix-tsup-cjs) to fix the default export and type definition

```json
{
  "scripts": {
    "build": "tsup && npx fix-tsup-cjs"
  }
}
```

## Install

```sh
pnpm add pkg-placeholder
```

## License

[MIT](./LICENSE) License © 2023 [u3u](https://github.com/u3u)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/pkg-placeholder
[npm-version-href]: https://npmjs.com/package/pkg-placeholder
[npm-downloads-src]: https://img.shields.io/npm/dm/pkg-placeholder
[npm-downloads-href]: https://npmjs.com/package/pkg-placeholder
[codecov-src]: https://codecov.io/gh/u3u/pkg-placeholder/graph/badge.svg
[codecov-href]: https://codecov.io/gh/u3u/pkg-placeholder
[bundle-src]: https://img.shields.io/bundlephobia/minzip/pkg-placeholder?label=minzip
[bundle-href]: https://bundlephobia.com/result?p=pkg-placeholder
[jsdocs-src]: https://paka.dev/badges/v0/cute.svg
[jsdocs-href]: https://paka.dev/npm/pkg-placeholder
[license-src]: https://img.shields.io/github/license/u3u/pkg-placeholder.svg
[license-href]: ./LICENSE
