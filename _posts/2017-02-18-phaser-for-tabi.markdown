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

After finishing the tutorial, the first complex challenge we had to overcome was to bundle the app into an `apk` that could be installed in the TABIs, which had an **x86 processor** (as opposed to the more popular ARM architecture).

While investigating how to do that I came across Crosswalk, a tool that generates an apk by wrapping the web application in an updated WebView and let's you choose the architecture to build for.

## Phaser Seed

As we made progress on the first game, we started to add some more tools and we mutated the initial architecture to something that made sense for our projects.

Reusable game architecture and cross game components.

<github-repo-card name="phaser-seed"></github-repo-card>

## Git

## Crosswalk

Chromium based WebView with improved performance and latest browser features.

### Intel x86 + ARM

<github-repo-card name="cordova-android-crosswalk"></github-repo-card>

## Release Management and Continous Integration

<github-repo-card name="grunt-bump-cordova"></github-repo-card>

### Jenkins

### TestFairy

### Google Drive

## Open Source and Community

[html5gamedevs](http://www.html5gamedevs.com/profile/11049-aaccurso/)

<github-repo-card name="phaser-state-transition-plugin"></github-repo-card>

[state transition thread](http://www.html5gamedevs.com/topic/10015-phaser-213-and-state-transition-plugin/?do=findComment&comment=64638)

<github-repo-card name="canvas-image-saver"></github-repo-card>
<github-repo-card name="Canvas2ImagePlugin"></github-repo-card>
