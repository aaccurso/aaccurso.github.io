---
layout: post
title:  "Tabis World"
date:   2017-02-18 15:34:03
categories: project gaming
---
# Tabisworld

## Introduction

Today I felt like writing about one of my greatest professional experiences.

It all started one day the CEO of the company closed a deal on a project that consisted of building 10 mobile games for kids in 3 months. Yeah, just 3 months! It was really challenging considering that the company didn't have experience in game development whatsoever. With time the client understood that building games takes time and the timeline was adjusted.

So it turns out that the CEO chose me to be the technical leader of the project. I remember I was finishing a small project at the moment so I was going to be free a few weeks before the new project started, which was really convenient. And my previous leadership on a fullstack project went pretty well so I guess he thought it was worth it to give me a chance at something bigger.

## Meet TABI

Then one day in late November 2014 the head of HHRR and the CEO called me into the office meeting room to tell me the news and to talk about the new project.

The client was an electronic manufacturer that sold tablets, among other things. And they had released a tablet for kids called [TABI][tabisworld], which was designed to resist heavy use by the little ones.

So the idea was to start selling this tablets to kindergartens so the teachers could have technological aid when teaching their 4-6 year-old students. And in order to that, they wanted to provide educational games that were already installed in TABI.

## The Team

Creating a game from scratch is no easy matter, but we didn't know that at the beginning. We started off as a team of 2 developers, and this team was responsible of getting requirements from the client, designing the game, managing the people involved and, of course, develop the game.

Also there was a team of 2 teachers plus the project director, the director assistant and the design team, all of which were employed by the client.

After 2 months of work, we recruited a new developer oriented to game development and a trainee from the client. And 2 months later, that is 4 months after the project kickoff, we added to the team 2 more developers, one in the client. By that time we had a team of 6 developers, including me.

## The Process

Each week we had 2 creative sessions with the client in order to come up with ideas for the games we were working on and for the upcoming games.

During those sessions I wrote down all the ideas and requirements that we generated and we also defined the course of action for the following days. When I got back to the office I sent a minute to recap all the things we talked and to have clear actionables with their owners.

Usually on those sessions I was accompanied by someone else from my team. When we had enough definition and data, my team and I gathered in the meeting room to pull together a game out of all the ideas and requirements we had obtained.

This was the game design phase, which for me was one of the most enjoyable parts of building a game. We used the board to draw the different screens, discussed about game mechanics, storyline, technical aspects, mobile limitations, needed assets, user experience and a lot of different aspects that are very important for every game.

And the great thing about all of this was that we learned to do it along the way. None of us had concrete experience doing any of this and having the possibility to lead a team of game developers and propose a process for building games that integrated multi-disciplinary teams was awesome and challenging at the same time.

## The Technologies

At the moment I knew that the technologies we were going to choose for the first couple of games would probably determine the stack for the rest of the games. And it was both a short term and a long term decision, since more games had to be built in the future months.

Since we had an approximate vision of the type of games we were going to build, we already knew we needed a 2D engine. I decided to lean on the Javascript path because my team had a lot of experience with the technologies associated and also my last mobile project was built with [Cordova][cordova], and it was a success considering the tight timeline we had.

So I queried the almighty Google for the magic words: 'HTML5 2D game engine'. And I got as a result a lot of Javascript frameworks: Create.js, PIXI.js, Panda.js [...][html5-engines] and _Phaser.js_.

I tried most of them and [Phaser][phaser] was one of the most opinionated, well documented and game oriented frameworks out there. And I was looking for an opinionated proven way of building games because we didn't have the knowledge, neither the time to acquire the knowledge, to build or use a more complex game engine.

And luckily it turned out really good.

> You can learn more about the full stack of technologies [here][phaser-for-tabi].

## The First Batch of Games

* [Sort & Recycle][sort-and-recycle]
* [Avatars Factory][avatars-factory]
* [Scribbles][scribbles]
* [My First Words][my-first-words]
* [Water Lab][water-lab]

## The New Technologies

After half a year of building HTML5 mobile games and 5 games later an opportunity presented to change the technologies we were using.

And let me be honest, HTML5 was good and all but I still felt the quality of the final product could be improved. There was a reality, HTML5 Canvas and WebGL [didn't perform great][mobile-performance] on mobile browsers and we were tired of dealing with performance issues on games that relied heavily on physics.

Turns out we were finishing the game design phase for a new game and the client was on the verge of approving it when the good news came. A new designer would join the client's design team, and he had experience designing mobile games. Up until now we were working with web designers, so having a game art designer in the team was a game changer for improving overall quality.

I felt we could take advantage of this new addition to the team by starting to build the upcoming games with a more robust cutting-edge technology. One of the guys in the team had been trying out [Unity][unity] in the past and he was very confident he could start the new game with it. So between him and I we learned Unity and started to build the game with it.

And it paid off.

> You can learn more about the Unity experience [here][unity-for-tabi].

## The Second Batch of Games

* [Car Magnets][car-magnets]
* [Green Shelter][green-shelter]
* My First Calendar
* Playing with Energy
* Peace Chain

[tabisworld]: http://www.tabisworld.com/
[html5-engines]: https://html5gameengine.com/tag/2d
[cordova]: https://cordova.apache.org/
[phaser]: http://phaser.io/
[mobile-performance]: http://www.html5gamedevs.com/topic/14036-how-to-improve-performance-on-mobile/
[phaser-for-tabi]: {{ site.baseurl }}{% post_url 2017-02-18-phaser-for-tabi %}
[unity]: https://unity3d.com/
[unity-for-tabi]: {{ site.baseurl }}{% post_url 2017-02-18-unity-for-tabi %}

[sort-and-recycle]: http://eurocase.com/clasifica-y-recicla-app-educativa-tabi
[avatars-factory]: http://eurocase.com/nueva-app-Tabi-fabrica-de-avatares
[scribbles]: http://eurocase.com/nueva-app-Tabi-grafismos-con-boni
[my-first-words]: http://eurocase.com/press/detail/83
[water-lab]: http://eurocase.com/tabi-apps-para-pequenios-cientificos
[car-magnets]: http://eurocase.com/press/detail/80
[green-shelter]: http://eurocase.com/press/detail/86
