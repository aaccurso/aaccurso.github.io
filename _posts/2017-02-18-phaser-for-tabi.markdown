---
layout: post
title:  "Phaser for TABI"
date:   2017-02-18 15:34:03
categories: project gaming phaser seed open-source tabi
---
My experience with Phaser for the TABI project started off in late 2014 by following this [amazing tutorial](http://www.codevinsky.com/phaser-2-0-tutorial-flappy-bird-part-5/) on how to create a game similar to Flappy Bird.

The great thing was that the creator of the tutorial used a [yeoman generator for Phaser](https://github.com/8-uh/generator-phaser-official) to create the application.

The generated app was already built upon amazing tools such as [Browserify](https://browserify.org) in order to modularize code for browsers, [JSHint](http://jshint.com/) to detect errors and potential problems in the code and [EditorConfig](https://editorconfig.org/) for maintaining consistent file formats and coding styles between different editors and IDEs.

It also provided an **initial architecture** for the game, based on states and prefabs, which heavily depended on JavaScript prototypes to give the app an OOP nature.

This was awesome because it provided the necessary structure for the team to be able to have a mental image of all the components involved in the app and build upon it.

## Mobile

### Crosswalk

After finishing the tutorial, the first complex challenge we had to overcome was to bundle the app into an Android `apk` that could be installed in the TABIs, which had an **x86 processor** (as opposed to the more popular ARM architecture).

While investigating how to do that I came across [Crosswalk](https://crosswalk-project.org), a tool that generates an `apk` by wrapping the web application in an updated WebView and let's you choose the architecture to build for.

Crosswalk provides a way to keep up with the latest features released in Chromium and to don't fall back on performance. However, it doesn't give you an API to communicate with the host OS native features.

And that's where [Cordova](https://cordova.apache.org/) came to light.

### Cordova

Cordova is a platform that allows to **reuse code across platforms** (Android, iOS, etc) and access native device APIs.

We were in need of some native features for most games: [Take pictures with the camera](https://github.com/apache/cordova-plugin-camera), [Text to speech](https://github.com/vilic/cordova-plugin-tts), [Native keyboard](com.ionic.keyboard), [Canvas to image](org.devgeeks.Canvas2ImagePlugin), [Access files](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file/) and [In App Browser](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/).

But there was a major issue back then: _Cordova had no built-in integration with Crosswalk_.

So we had to use a tool called `cordova-android-crosswalk` which provided a custom integration between Cordova and Crosswalk.

It was a pleasure to [contribute](https://github.com/tylerbuchea/cordova-android-crosswalk/commits?author=aaccurso) to this small tool (which is now deprecated), because [tylerbuchea](https://github.com/tylerbuchea) was really open to merge PRs.

<github-repo-card owner="tylerbuchea" name="cordova-android-crosswalk">
  <div class="loading">
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
  </div>
</github-repo-card>

> Later on we migrated to the cordova plugin, which made things easier. Now crosswalk is yet another easy to install plugin: `cordova plugin add cordova-plugin-crosswalk-webview`.

## Phaser Seed

As we made progress on the first game, we started to add some more tools, [Grunt](https://gruntjs.com/) tasks and we mutated the initial architecture to something that made sense for our projects.

So when we started developing the second game, I thought we should have a **starterkit project** in order to kick off games quicker and based on an architecture consistent across games.

That's when _PhaserSeed_ came to life, with all the configuration and common components needed for building our games such as: i18n, local storage management, user game settings, common navigation, modals, sound management, assets preloading, environment specific configuration, etc.

<github-repo-card name="phaser-seed">
  <div class="loading">
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
  </div>
</github-repo-card>

> This is an outdated version of the seed we ended up using for our late games, but it's still useful to have as a starting point.

## Release Management

Versioning any piece of software is very important for a number of reasons such as the ability to compare two snapshots of the same software, link the version in an issue tracker, include a specific version as a dependency of another project, among [others](https://developer.android.com/studio/publish/versioning.html).

When building an application that will be installed by the final user, it's essential to have a release management strategy that will allow [distribution](#distribution) of a version and a **history of versions** to let the QA team install a specific version of the app.

In our case, we decided to use [Semantic Versioning](http://semver.org/) for our version names.

Manually releasing an application is a real hassle. That's why I started looking for a tool that could do that for us. At that moment I came across [grunt-bump](https://github.com/vojtajina/grunt-bump), which is great (if you are using good old Grunt) for bumping version files such as `package.json`.

However, that wasn't enough because we were dealing with Cordova's `config.xml` version file, which is used for determining the Android package version.

So I decided to extend that tool to support bumping Cordova based projects.

<github-repo-card name="grunt-bump-cordova">
  <div class="loading">
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
  </div>
</github-repo-card>

> If you are managing your tasks with Gulp you can use [gulp-cordova-bump](https://github.com/MichaelTaylor3D/gulp-cordova-bump) which basically provides the same functionality.

### Git

Since we were a medium sized team, I though it would be a good idea to go with a **robust git flow** for managing feaure branches, hotfixes and releases.

So we included [gitflow](https://github.com/nvie/gitflow) in all our repositories.

Also we configured a pre-commit hook to check for _jscs_ and _jshint_ errors. I decided to go with the strategy _"you can't commit code that doesn't comply with the style rules"_, which may seem extreme but it gave us good results, especially when adding new team members.

> If the timeline hadn't been so tight, instead of a pre-commit I'd have preferred to setup a job in Jenkins to check for this rules before integrating to development.

### Jenkins

To **automate the build process** we decided to use our company's Jenkins server hosted on Ubuntu Server.

We created one job per application which performed the build of latest master unless a tag was specified.

In order for Jenkins to be able to **build an Android Cordova application** it was necessary to:

- Download the standalone Android tools and set the necessary environment variables.
- Install the correct Android SDK with `adb`.
- Install Cordova globally with `npm install -g cordova` (this is not necessary if you have cordova as a dev-dependency in your project since you can create a npm script).

> And that's almost all there is to it, you can follow this [instructions](https://www.digitalocean.com/community/tutorials/how-to-build-android-apps-with-jenkins) for more details.

Then our jobs would execute a Shell script similar to:

{% gist aaccurso/388b83956e83c2ac675988e346f71f01 %}

> I found this useful [gist](https://gist.github.com/escapedcat/2bde893b784147248c2d0f199394dc65) to build iOS applications on Linux which may be worth reading if you need to build for iOS.

### Distribution

### Signing

https://wiki.jenkins-ci.org/display/JENKINS/Android+Signing+Plugin

#### TestFairy

<github-repo-card owner="testfairy" name="command-line-uploader">
  <div class="loading">
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
  </div>
</github-repo-card>

#### Google Drive

<github-repo-card owner="prasmussen" name="gdrive">
  <div class="loading">
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
  </div>
</github-repo-card>

{% gist aaccurso/fe0d347b292022eabeb92eebd89d1af5 %}

## Open Source and Community

[html5gamedevs](http://www.html5gamedevs.com/profile/11049-aaccurso/)

<github-repo-card name="phaser-state-transition-plugin">
  <div class="loading">
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
  </div>
</github-repo-card>

[state transition thread](http://www.html5gamedevs.com/topic/10015-phaser-213-and-state-transition-plugin/?do=findComment&comment=64638)

<github-repo-card name="canvas-image-saver">
  <div class="loading">
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
  </div>
</github-repo-card>
<github-repo-card name="Canvas2ImagePlugin">
  <div class="loading">
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
  </div>
</github-repo-card>
