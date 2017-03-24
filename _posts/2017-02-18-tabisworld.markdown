---
layout: post
title:  "TABIs World"
date:   2017-02-18 15:34:03
categories: project gaming
---

[![Tabisworld]({{ site.url }}/assets/tabisworld/tabisworld.jpg)][tabisworld]{:.is-centered}

## Introduction

Today I felt like writing about one of my greatest professional experiences.

It all started one day when the CEO of the company I was working at had closed a deal on a project that consisted of **building 10 mobile games for kids** and he had chosen me to be the **technical leader** of the project.

I remember I was finishing a small project at the moment so I was going to be free a few weeks before the new project's start, which was really convenient. And my previous leadership on a fullstack project had gone pretty well so the CEO thought it was a good opportunity to give me a chance at something bigger.

## Meet TABI

Then one day in late November 2014 the head of HHRR and the CEO called me into the office meeting room to tell me the news and to talk about the new project.

The client was an electronic manufacturer that sold tablets, among other things. And they had released a tablet for kids called [TABI][tabisworld], which was designed to resist heavy use by the little ones.

So the idea was to start selling the tablets to kindergartens so teachers could have technological aid when teaching their 4-6 year-old students. And in order to do that, they wanted to provide **educational games** that would already be installed in the TABIs.

## The Team

Creating a game from scratch is no easy matter and it requires multidisciplinary teams.

We started off as a team of 2 developers, and this team was responsible for getting requirements from the client, designing the game, managing the people involved and, of course, developing the games.

Also there was a team of 2 teachers who would propose the topics for the games, plus: the project director, the director's assistant and the design team, all of them employed by the client.

After 2 months of work, we recruited a new game developer and a trainee working in the client. And 4 months later, that is 6 months after the project kickoff, we added to the team 2 more developers, one in the client. By that time we had a **team of 6 developers**, including me.

## The Process

Each week we had 2 **creative sessions** with the client in order to come up with ideas for the games we were working on and for the upcoming games.

During those sessions I wrote down all the ideas and requirements that we generated and we also defined the course of action for the following days. When I got back to the office I sent a **minute** to recap all the things we talked and to have clear actionables with their owners.

Usually on those sessions I was accompanied by someone else from the dev team. When we had enough definition and data, the dev team gathered in the meeting room to pull together a game out of all the ideas and requirements we had obtained.

This was the **game design** phase, which for me was one of the most enjoyable parts about building a game (and software in general). We used the board to draw prototypes of the different screens, discussed about game mechanics, storyline, technical aspects, mobile limitations, necessary assets, user experience and a lot of different aspects that are very important for every game.

And the greatest thing about all of this was that we learned a lot along the way. After each game we created, we gained a lot of knowledge and transferred that knowledge from one game to the other.

For me having the possibility to lead a team of game developers and propose a process for building games that integrated **multidisciplinary teams** was awesome and challenging at the same time.

## The Technologies

At the moment I knew that the technologies we were going to choose for the first couple of games would probably determine the stack for the rest of the games. And it was both a short term and a long term decision, since more games had to be built in the future months.

We had an approximate vision of the type of games we were going to build and we already knew we needed a **2D engine** since there would be no 3D involved. So I decided to lean on the Javascript path because the team had a lot of experience with the technologies associated and also my last mobile project was built with [Cordova], and it was a success considering the tight timeline we had.

So I queried the [almighty Google](http://bfy.tw/AiPi) for the magic words: 'HTML5 2D game engine'. And I got as a result a lot of Javascript frameworks: Create.js, PIXI.js, Panda.js [...][html5-engines] and _Phaser.js_.

I tried some of them and [Phaser] was one of the most opinionated, well documented, object oriented frameworks out there. And I was looking for an opinionated _industry proven_ way of building games because we didn't have the time to build or use a more complex game engine.

And luckily it turned out really good.

> You can learn more about the full stack of technologies and architecture [here][phaser-for-tabi].

## The First Batch of Games

{% include card.html data=site.data.tabisworld.sort-and-recycle %}
{% include card.html data=site.data.tabisworld.avatars-factory %}
{% include card.html data=site.data.tabisworld.scribbles %}
{% include card.html data=site.data.tabisworld.my-first-words %}

<section class="google-play card-group">
  <header class="card-group-header">
    <a href="http://eurocase.com/tabi-apps-para-pequenios-cientificos" target="_blank">Water Lab</a> — which consists of 3 mini games:
  </header>
  <div class="card-group-body">
    {% include card.html data=site.data.tabisworld.hydrologic-cycle %}
    {% include card.html data=site.data.tabisworld.does-it-float %}
    {% include card.html data=site.data.tabisworld.crazy-drop %}
  </div>
</section>

## The New Technologies

After half a year of building HTML5 mobile games and 5 games later an opportunity presented to **change the technologies we were using**.

And let me be honest, HTML5 was good and all but I still felt the quality of the final product could be improved. There was a reality, HTML5 Canvas and WebGL [didn't perform great][mobile-performance] on mobile browsers and we were tired of dealing with performance issues on games that relied heavily on physics.

Turns out we were finishing the game design phase for a new game and the client was on the verge of approving it when the good news came. A new designer would join the client's design team, and he had experience designing mobile games. Up until now we were working with web designers, so having a game art designer in the team was a game changer for **improving overall quality**.

I felt we could take advantage of this new addition to the team by starting to build the upcoming games with a better engine for mobile. One of the guys in the team had tried out [Unity] in the past for small things and he was very excited he would start a new game with it. So between he and I we learned Unity and started to build the next game with it.

And it paid off.

> You can learn more about the Unity experience [here][unity-for-tabi].

## The Second Batch of Games

{% include card.html data=site.data.tabisworld.car-magnets %}
{% include card.html data=site.data.tabisworld.green-shelter %}
{% include card.html data=site.data.tabisworld.my-little-agenda %}
{% include card.html data=site.data.tabisworld.play-with-energies %}
{% include card.html data=site.data.tabisworld.peace-chain %}

## The End

The main phase of the project ended when we finished the first batch of 10 games.

After reaching this milestone, I made a trip to Europe and when I came back I switched to leading a small team that would build the **TABI Web Platform** that integrated the whole universe of games and provided useful tools to the teachers.

But this is _another story_ that could very well fit in another post.

TABI marked my career and was one of the most enjoyable projects I was involved.

It was a pleasure to contribute to the education of children by developing games, which makes it even more fun.

> Thanks for reading and spread the love :)

[tabisworld]: http://www.tabisworld.com/
[html5-engines]: https://html5gameengine.com/tag/2d
[Cordova]: https://cordova.apache.org/
[Phaser]: http://phaser.io/
[mobile-performance]: http://www.html5gamedevs.com/topic/14036-how-to-improve-performance-on-mobile/
[phaser-for-tabi]: {{ site.baseurl }}{% post_url 2017-02-18-phaser-for-tabi %}
[Unity]: https://unity3d.com/
[unity-for-tabi]: {{ site.baseurl }}{% post_url 2017-02-18-unity-for-tabi %}
[tabi-platform]: {{ site.baseurl }}{% post_url 2017-02-18-tabi-platform %}
