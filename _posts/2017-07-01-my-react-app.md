---
layout: post
title:  "My React App"
date:   2017-07-01 15:34:03
description: >
  How to configure your create-react-app application without ejecting.
categories: react create-react-app react-scripts
---

After working half a year with React and it's ecosystem, I though it was a good moment to analyze the things I'd like to take into account on future React projects.

These are mostly related with __custom build configuration and improvements__ over the default configurations that we get while using popular tooling.

## Create React App

![react](https://www.gitbook.com/cover/book/mongkuen/react.jpg?build=1470682429235){:style="width: 200px" .is-centered}

On my first important project with React I decided to start off using the popular [`create-react-app`](https://github.com/facebookincubator/create-react-app) module, which let's us create react apps with no build configuration.

Soon I realized the project had some __specific configuration needs__ (like [integrating PIXI.js](https://github.com/pixijs/pixi.js/issues/1854) with the build process) so I decided to [`eject`](https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup) in order to have control over the project build.

> Luckily, PIXI community figured out how to import the library as a ES6 module [in v4.1.1](https://github.com/pixijs/pixi.js/pull/2981).

Ejecting from a Create React App means that we won't be able to upgrade [`react-scripts`](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#updating-to-new-releases) (the module that contains the build configuration) whenever the community releases a new version.

And this is really important in order to _stay up to date with the latest releases_ of each dependency and with build configuration updates, which believe me, we want to do in our projects since each release includes important bug fixes and improvements.

So, what's the alternative to ejecting?

## Custom react-scripts

[Forking the `create-react-app` project itself](https://github.com/facebookincubator/create-react-app/issues/682), making the necessary changes to `react-scripts` and publishing a new `npm` package with these changes.

Sounds easy, right? :D

### Fork create-react-app

Well, before even starting to implement this approach, we need to understand that the `create-react-app` Git repository is a [`monorepo`](https://danluu.com/monorepo/).

That means it's team decided to include most of the packages, built in favor of creating the `create-react-app` module, in the same Git repository.

We'll find a [`packages/`](https://github.com/facebookincubator/create-react-app/tree/master/packages) directory in the repository which contains `npm` packages such as `react-scripts` (and `create-react-app` itself!).

![Brainfuck](http://68.media.tumblr.com/24c7ca937ecdf0a8df4d0586cdcd4dfa/tumblr_nryoikgZtF1uni7lmo2_r2_400.gif){:.is-centered}

> You can learn more about _monorepos_ management at [lerna](https://github.com/lerna/lerna).

So, in order to make changes to `react-scripts` and publishing to a new `npm` package, we first need to fork `create-react-app`.

My own fork can be found at [`aaccurso-react-scripts`](https://github.com/aaccurso/create-react-app/tree/master/packages/react-scripts).

### Modify react-scripts

One of the most important things I wanted to change in the default Webpack configuration was to allow [import of modules relative to the `src/` directory](https://github.com/aaccurso/create-react-app/commit/f31e9c8db2988e8722396ceabc22012f51c0d19a).

Let's say we are working in a component `Foo` located deep in the `src/` directory structure and we want to use `Bar` which is way up in the directory hierarchy.

{% gist aaccurso/38b9c3a6a5f62e74e221c04e752bf69f %}

By configuring Webpack to search for modules relative to `src/` we can get rid of the nasty `../../../../` in the import path.

There are other reasons for having to modify `react-scripts` like having [support for SASS](https://github.com/aaccurso/create-react-app/commit/e7a9707d85bd88a3f460e5b62661357e331fccae) or integrating a library like PIXI.js. I'd love to hear more examples in the comments section.

### Publish to npm

Now that we have the changes in place, we need to publish them in a new `npm` package.

In order to do that, we'll have to [rename the `packages/react-scripts/package.json`](https://github.com/aaccurso/create-react-app/commit/e976227658139544ed8c525769e9fb85a43ce3ec) package name, let's say to `my-react-scripts-fork`.

Then we'll `npm publish` and that's it, we have a brand new `npm` package.

> The scope of this post doesn't include topics such as _release management_ or maintaing a fork of another project. However, you can find more information about this in the [npm docs](https://docs.npmjs.com/getting-started/publishing-npm-packages).

### Upgrade react-scripts

To get notified of changes in the base repository of our fork we can use [backstroke](https://github.com/1egoman/backstroke).

This tool will __create and maintain a PR on our fork__ whenever there are new changes in the base repository.

Then we can decide when and how to include those changes in our fork and by doing that, we'd be upgrading to the latest version or `react-scripts`.

## My React App

Now that we have our own custom `react-scripts`, how do we use them in our project?

If it's an already created project, we just need to `npm uninstall react-scripts` and then `npm install my-react-scripts-fork`.

For new projects, we need to `create-react-app my-react-app --scripts-version my-react-scripts-fork`.

You can take a look at [my-react-app](https://github.com/aaccurso/my-react-app) which already uses `aaccurso-react-scripts`.

Quite easy!

### Local development

Now we want to make a change to `my-react-scripts-fork` and see the changes in `my-react-app` without having to publish a new version.

To do that, we'll have to `cd` into `my-react-scripts-fork` directory and [`npm link`](https://docs.npmjs.com/cli/link) the package.

Then we'll `cd` into `my-react-app` and `npm link my-react-scripts-fork`.

This is very useful when we are testing a new configuration, but we need to __remember to release and publish when we get the job done!__

## Conclusion

We've seen how to extend `react-scripts` without ejecting and not _"die"_ trying.

One thing I noticed while writing this post, is the fact that for most changes we need to duplicate the configuration in 2 webpack files: `webpack.config.dev.js` and `webpack.config.prod.js`.

I hope the `create-react-app` team (or even Webpack) comes up with a better approach to this in the future.

Which will mean more effort while merging our custom `react-scripts` to a new major version with breaking changes.

That's why a __complete Git commit history and changelog__ are important to help us in these matters.

I hope this helps you on your own projects.

Please leave any comment or suggestion below :D
