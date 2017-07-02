---
layout: post
title:  "My React App"
date:   2017-02-18 15:34:03
description: >
  How to configure your create-react-app application without ejecting.
categories: react create-react-app react-scripts
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

[Forking the `create-react-app` project itself](https://github.com/facebookincubator/create-react-app/issues/682), making the necessary changes to `react-scripts` and publishing a new `npm` package with these changes.

Sounds easy, right? :D

### Fork create-react-app

Well, before even starting to implement this approach, we need to understand that the `create-react-app` Git repository is a [`monorepo`](https://danluu.com/monorepo/).

That means they decided to include most of the packages built in favor of creating the `create-react-app` module in the same Git repository.

We'll find a [`packages/`](https://github.com/facebookincubator/create-react-app/tree/master/packages) directory in the repository that contains `npm` modules such as `react-scripts`.

> You can learn more about monorepos management with [lerna](https://github.com/lerna/lerna).

So, in order to make changes to `react-scripts` and publishing to a new `npm` package, we need to fork `create-react-app`.

My own fork can be found at [`aaccurso-react-scripts`](https://github.com/aaccurso/create-react-app/tree/master/packages/react-scripts).

### Modify react-scripts

One of the most important changes I wanted to make to the default Webpack configuration was to [allow importing modules from the `src/` directory](https://github.com/aaccurso/create-react-app/commit/f31e9c8db2988e8722396ceabc22012f51c0d19a).

Let's say we are working in a component `Foo` located deep in the `src/` directory structure and we want to use `Bar` which is way up in the directory hierarchy.

{% gist aaccurso/38b9c3a6a5f62e74e221c04e752bf69f %}

By configuring Webpack to search for modules relative to `src/` we can get rid of the nasty `../../../../` in the import path.

There are other reasons for needing to modify `react-scripts` like having [support for SASS](https://github.com/aaccurso/create-react-app/commit/e7a9707d85bd88a3f460e5b62661357e331fccae) or integrating a library like PIXI.js.

### Publish to npm

Now that we have the changes in place, we need to publish them as a new package in `npm`.

In order to do that we'll have to [rename the `packages/react-scripts/package.json`](https://github.com/aaccurso/create-react-app/commit/e976227658139544ed8c525769e9fb85a43ce3ec).

Then we'll `npm publish` and that's it, we have a new `npm` package.

> The scope of this post doesn't include topics such as release management or maintaing a fork of another project. However, you can find more information about this in the [npm docs](https://docs.npmjs.com/getting-started/publishing-npm-packages).

### Upgrade react-scripts

To get notified of changes in the base repository of our fork we can use [backstroke](https://github.com/1egoman/backstroke).

This tool will create and maintain a PR on our fork whenever there are new changes in the base repository.

Then we can decide when and how to include those changes in our fork and by doing that, upgrading to the latest version or `react-scripts`.

## My React App

Now that we have our own custom `react-scripts`, how do we use them in our project?

`create-react-app my-app --scripts-version my-react-scripts-fork`

https://github.com/aaccurso/my-react-app
