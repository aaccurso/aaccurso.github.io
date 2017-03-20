---
layout: post
title:  "Phaser for TABI"
date:   2017-02-18 15:34:03
categories: project gaming phaser seed open-source tabi
---

# WIP

My experience with Phaser for the TABI project started off in late 2014 by following this [amazing tutorial](http://www.codevinsky.com/phaser-2-0-tutorial-flappy-bird-part-5/) on how to create a game similar to Flappy Bird.

The great thing was that the creator of the tutorial used a [yeoman generator for Phaser](https://github.com/8-uh/generator-phaser-official) to create the application.

The generated app was already built upon amazing tools such as [Browserify](https://browserify.org) in order to modularize code for browsers, [JSHint](http://jshint.com/) to detect errors and potential problems in the code and [EditorConfig](https://editorconfig.org/) for maintaining consistent file formats and coding styles between different editors and IDEs.

It also provided an initial architecture for the game, based on states and prefabs, which heavily depended on JavaScript prototypes to give the app an OOP nature.

This was awesome because it provided the necessary structure for the team to be able to have a mental image of all the components involved in the app and build upon it.

## Mobile

### Crosswalk

After finishing the tutorial, the first complex challenge we had to overcome was to bundle the app into an Android `apk` that could be installed in the TABIs, which had an **x86 processor** (as opposed to the more popular ARM architecture).

While investigating how to do that I came across [Crosswalk](https://crosswalk-project.org), a tool that generates an `apk` by wrapping the web application in an updated WebView and let's you choose the architecture to build for.

Crosswalk provides a way to keep up with the latest features released in Chromium and to don't fall back on performance. However, it doesn't give you an API to communicate with the host OS native features.

And that's where [Cordova](https://cordova.apache.org/) came to light.

### Cordova

Cordova is a platform that allows to reuse code across platforms (Android, iOS, etc) and access native device APIs.

We were in need of some native features for most games:

- [Take pictures with the camera](https://github.com/apache/cordova-plugin-camera)
- [Text to speech](https://github.com/vilic/cordova-plugin-tts)
- [Native keyboard](com.ionic.keyboard)
- [Canvas to image](org.devgeeks.Canvas2ImagePlugin)
- [Access files](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-file/)
- [In App Browser](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/)

But there was a major issue back then: Cordova had no built-in integration with Crosswalk.

So we had to use a tool called `cordova-android-crosswalk` which provided a custom integration between Cordova and Crosswalk.

<github-repo-card owner="tylerbuchea" name="cordova-android-crosswalk">
  <div class="loading">
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
  </div>
</github-repo-card>

It was a pleasure to [contribute](https://github.com/tylerbuchea/cordova-android-crosswalk/commits?author=aaccurso) to this small tool, because [tylerbuchea](https://github.com/tylerbuchea) was really open to merge PRs.

> Later on we migrated to the cordova plugin, which made things easier. Now crosswalk is yet another easy to install plugin: `cordova plugin add cordova-plugin-crosswalk-webview`.

## Phaser Seed

As we made progress on the first game, we started to add some more tools and we mutated the initial architecture to something that made sense for our projects.

Reusable game architecture and cross game components.

<github-repo-card name="phaser-seed">
  <div class="loading">
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
  </div>
</github-repo-card>

## Git

## Crosswalk

Chromium based WebView with improved performance and latest browser features.


## Release Management and Continous Integration

<github-repo-card name="grunt-bump-cordova">
  <div class="loading">
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
  </div>
</github-repo-card>

### Jenkins

### TestFairy

### Google Drive

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
