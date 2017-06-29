---
layout: post
title:  "My React App"
date:   2017-02-18 15:34:03
categories: react create-react-app react-scripts linters git-hooks
---

After working half a year with React and it's ecosystem, I though it was a good moment to analyze the things I'd like to take into account on future React projects.

## Create React App

On my first important project with React I decided to start off using the popular [create-react-app](https://github.com/facebookincubator/create-react-app) module, which let's you create react apps with no build configuration.

Soon I realized the project had some specific configuration needs (like [integrating PIXI.js](https://github.com/pixijs/pixi.js/issues/1854) with the build process) so I decided to [`eject`](https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup) in order to have control over the project build.

> Luckily, PIXI community figured out how to import the library as a ES6 module [in v4.1.1](https://github.com/pixijs/pixi.js/pull/2981).

## Custom React-Scripts

https://github.com/facebookincubator/create-react-app/issues/682
https://github.com/aaccurso/create-react-app

## My React App

https://github.com/aaccurso/my-react-app

### Linters

[Eslint-Config-Valtech](https://github.com/valtech-nyc/eslint-config-valtech): Valtech ESLint configuration.

[Stylelint-Config-Valtech](https://github.com/valtech-nyc/stylelint-config-valtech): Valtech stylelint configuration.

### Git Hooks

[Husky](https://github.com/typicode/husky): git hooks manager.

[Lint-Staged](https://github.com/okonet/lint-staged): execute tasks on staged files.

## Next Steps

[Prettier](https://github.com/prettier/prettier): configurable autoformatter.

[Validate-Commit-Msg](https://github.com/kentcdodds/validate-commit-msg): tool to validate format of commit messages.

[Semantic-Release](https://github.com/semantic-release/semantic-release): fully automated package publishing.
