---
layout: post
title:  "My React App"
date:   2017-02-18 15:34:03
description: >
  Lessons learned from using React and it's ecosystem for half a year.
categories: react create-react-app react-scripts linters git-hooks
---

After working half a year with React and it's ecosystem, I though it was a good moment to analyze the things I'd like to take into account on future React projects.

## Create React App

On my first important project with React I decided to start off using the popular [`create-react-app`](https://github.com/facebookincubator/create-react-app) module, which let's you create react apps with no build configuration.

Soon I realized the project had some specific configuration needs (like [integrating PIXI.js](https://github.com/pixijs/pixi.js/issues/1854) with the build process) so I decided to [`eject`](https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup) in order to have control over the project build.

> Luckily, PIXI community figured out how to import the library as a ES6 module [in v4.1.1](https://github.com/pixijs/pixi.js/pull/2981).

Ejecting from a Create React App means that we won't be able to upgrade [`react-scripts`](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#updating-to-new-releases) (the module that contains the build configuration) whenever the community releases a new version.

And this is really important in order to stay up to date with the latest dependencies and with configuration updates, which believe me, we want to do in our projects since each release includes important bug fixes and improvements.

So, what's the alternative to ejecting?

## Custom react-scripts

Forking the `create-react-app` project itself, making the necessary changes to `react-scripts` and publishing a new `npm` package with these changes.

Sounds easy, right? :D

Well, before even starting to implement this approach, we need to understand that the `create-react-app` Git repository is a [`monorepo`](https://danluu.com/monorepo/).

That means they decided to include most of the packages built in favor of creating the `create-react-app` module in the same Git repository.

We'll find a [`packages/`](https://github.com/facebookincubator/create-react-app/tree/master/packages) directory in the repository that contains `npm` modules such as `react-scripts`.

> You can learn more about monorepos management with [lerna](https://github.com/lerna/lerna).

So, in order to make changes to `react-scripts` and publishing to a new `npm` package, we need to fork `create-react-app`.

My own fork can be found at [`aaccurso-react-scripts`](https://github.com/aaccurso/create-react-app).

One of the most important changes I wanted to make to the default Webpack configuration was to [allow importing modules from the `src/` directory](https://github.com/aaccurso/create-react-app/commit/f31e9c8db2988e8722396ceabc22012f51c0d19a).

Let's say we are working in a component `Foo` located deep in the `src/` directory structure and we want to use `Bar` which is way up in the directory hierarchy.

{% gist aaccurso/38b9c3a6a5f62e74e221c04e752bf69f %}

https://github.com/facebookincubator/create-react-app/issues/682


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
