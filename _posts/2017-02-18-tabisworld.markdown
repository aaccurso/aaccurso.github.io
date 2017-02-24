---
layout: post
title:  "Tabis World"
date:   2017-02-18 15:34:03
categories: project gaming
---

[![Tabisworld]({{ site.url }}/assets/tabisworld/tabisworld.jpg)][tabisworld]

## Introduction

Today I felt like writing about one of my greatest professional experiences.

It all started one day when the CEO of the company I was working on had closed a deal on a project that consisted of **building 10 mobile games for kids** in 3 months. Yeah, just 3 months! It was really challenging considering that the company didn't have experience in game development whatsoever.

So it turns out that the CEO chose me to be the **technical leader** of the project. I remember I was finishing a small project at the moment so I was going to be free a few weeks before the new project started, which was really convenient. And my previous leadership on a fullstack project went pretty well so he thought it was time to give me a chance at something bigger.

## Meet TABI

Then one day in late November 2014 the head of HHRR and the CEO called me into the office meeting room to tell me the news and to talk about the new project.

The client was an electronic manufacturer that sold tablets, among other things. And they had released a tablet for kids called [TABI][tabisworld], which was designed to resist heavy use by the little ones.

So the idea was to start selling the tablets to kindergartens so teachers could have technological aid when teaching their 4-6 year-old students. And in order to do that, they wanted to provide **educational games** that would already be installed in the TABIs.

## The Team

Creating a game from scratch is no easy matter, but we didn't know that in the beginning. We started off as a team of 2 developers, and this team was responsible for getting requirements from the client, designing the game, managing the people involved and, of course, develop the games.

Also there was a team of 2 teachers who would propose the topics for the games plus: the project director, the director assistant and the design team, all of which were employed by the client.

After 2 months of work, we recruited a new developer oriented to game development and a trainee working in the client. And 2 months later, that is 4 months after the project kickoff, we added to the team 2 more developers, one in the client. By that time we had a **team of 6 developers**, including me.

## The Process

Each week we had 2 **creative sessions** with the client in order to come up with ideas for the games we were working on and for the upcoming games.

During those sessions I wrote down all the ideas and requirements that we generated and we also defined the course of action for the following days. When I got back to the office I sent a **minute** to recap all the things we talked and to have clear actionables with their owners.

Usually on those sessions I was accompanied by someone else from the dev team. When we had enough definition and data, my team and I gathered in the meeting room to pull together a game out of all the ideas and requirements we had obtained.

This was the **game design** phase, which for me was one of the most enjoyable parts about building a game. We used the board to draw prototypes of the different screens, discussed about game mechanics, storyline, technical aspects, mobile limitations, necessary assets, user experience and a lot of different aspects that are very important for every game.

And the great thing about all of this was that we learned to do it along the way. None of us had concrete experience doing any of this and having the possibility to lead a team of game developers and propose a process for building games that integrated **multi-disciplinary teams** was awesome and challenging at the same time.

## The Technologies

At the moment I knew that the technologies we were going to choose for the first couple of games would probably determine the stack for the rest of the games. And it was both a short term and a long term decision, since more games had to be built in the future months.

We had an approximate vision of the type of games we were going to build and we already knew we needed a **2D engine**. So I decided to lean on the Javascript path because my team had a lot of experience with the technologies associated and also my last mobile project was built with [Cordova], and it was a success considering the tight timeline we had.

So I queried the almighty Google for the magic words: 'HTML5 2D game engine'. And I got as a result a lot of Javascript frameworks: Create.js, PIXI.js, Panda.js [...][html5-engines] and _Phaser.js_.

I tried most of them and [Phaser] was one of the most opinionated, well documented, game and object oriented frameworks out there. And I was looking for an opinionated _industry proven_ way of building games because we didn't have the knowledge, neither the time to acquire the knowledge, to build or use a more complex game engine.

And luckily it turned out really good.

> You can learn more about the full stack of technologies and architecture [here][phaser-for-tabi].

## The First Batch of Games

* [Sort & Recycle] ![Sort & Recycle](/assets/tabisworld/game-icons/sort-and-recycle.png){: .icon}
* [Avatars Factory] ![Avatars Factory](/assets/tabisworld/game-icons/avatars-factory.png){: .icon}
* [Scribbles] ![Scribbles](/assets/tabisworld/game-icons/scribbles.png){: .icon}
* [My First Words] ![My First Words](/assets/tabisworld/game-icons/my-first-words.png){: .icon}
* [Water Lab] ![The Water Cycle](/assets/tabisworld/game-icons/the-water-cycle.png){: .icon} ![Crazy Drop](/assets/tabisworld/game-icons/crazy-drop.png){: .icon} ![Does it float?](/assets/tabisworld/game-icons/does-it-float.png){: .icon}

> TODO: learn more of the first batch

## The New Technologies

After half a year of building HTML5 mobile games and 5 games later an opportunity presented to **change the technologies we were using**.

And let me be honest, HTML5 was good and all but I still felt the quality of the final product could be improved. There was a reality, HTML5 Canvas and WebGL [didn't perform great][mobile-performance] on mobile browsers and we were tired of dealing with performance issues on games that relied heavily on physics.

Turns out we were finishing the game design phase for a new game and the client was on the verge of approving it when the good news came. A new designer would join the client's design team, and he had experience designing mobile games. Up until now we were working with web designers, so having a game art designer in the team was a game changer for **improving overall quality**.

I felt we could take advantage of this new addition to the team by starting to build the upcoming games with a more robust cutting-edge technology. One of the guys in the team had been trying out [Unity] in the past and he was very confident he could start the new game with it. So between him and I we learned Unity and started to build the game with it.

And it paid off.

> You can learn more about the Unity experience [here][unity-for-tabi].

## The Second Batch of Games

* [Car Magnets] ![Car Magnets](/assets/tabisworld/game-icons/car-magnets.png){: .icon}
* [Green Shelter] ![Green Shelter](/assets/tabisworld/game-icons/green-shelter.png){: .icon}
* My First Calendar ![My First Calendar](/assets/tabisworld/game-icons/my-first-calendar.png){: .icon}
* Playing with Energy ![Playing with Energy](/assets/tabisworld/game-icons/playing-with-energies.png){: .icon}
* Peace Chain ![Peace Chain](/assets/tabisworld/game-icons/peace-chain.png){: .icon}

> TODO: learn more of the second batch

## The Platform

Web Application. Dashboard. Collect game data. Group, map and reduce data. Communication between teachers and parents. Realtime notifications.

> You can learn more about the project, technologies and architecture [here][tabi-platform].

## Conclusion

Enjoyment. Education. Challenging. Communication.

Thanks for reading :)

[tabisworld]: http://www.tabisworld.com/
[html5-engines]: https://html5gameengine.com/tag/2d
[Cordova]: https://cordova.apache.org/
[Phaser]: http://phaser.io/
[mobile-performance]: http://www.html5gamedevs.com/topic/14036-how-to-improve-performance-on-mobile/
[phaser-for-tabi]: {{ site.baseurl }}{% post_url 2017-02-18-phaser-for-tabi %}
[Unity]: https://unity3d.com/
[unity-for-tabi]: {{ site.baseurl }}{% post_url 2017-02-18-unity-for-tabi %}
[tabi-platform]: {{ site.baseurl }}{% post_url 2017-02-18-tabi-platform %}

[Sort & Recycle]: http://eurocase.com/clasifica-y-recicla-app-educativa-tabi
[Avatars Factory]: http://eurocase.com/nueva-app-Tabi-fabrica-de-avatares
[Scribbles]: http://eurocase.com/nueva-app-Tabi-grafismos-con-boni
[My First Words]: http://eurocase.com/press/detail/83
[Water Lab]: http://eurocase.com/tabi-apps-para-pequenios-cientificos
[Car Magnets]: http://eurocase.com/press/detail/80
[Green Shelter]: http://eurocase.com/press/detail/86
