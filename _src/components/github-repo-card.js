import { component } from 'rockyjs';
import { load as loadEmoji, parse as parseEmoji } from 'gh-emoji'
import Autolinker from 'autolinker';

component.register('github-repo-card', {
  init (Github) {
    const name = this.attributes.getNamedItem('name');
    const owner = this.attributes.getNamedItem('owner');

    return Promise.all([
        Github.repo(name.value, owner && owner.value),
        loadEmoji()
      ])
      .then(([repo]) => {
        const linkedDescription = Autolinker.link(repo.description);
        const emojiDescription = parseEmoji(linkedDescription);

        repo.description = emojiDescription;

        return {
          repo,
          owner: repo.owner
        };
      });
  },
  template: `
    <div class="github-repo card">
      <div class="card-thumbnail">
        <a href="{{owner.html_url}}">
          <img src="{{owner.avatar_url}}" alt="{{owner.login}}"/>
        </a>
      </div>
      <div class="card-body">
        <div class="card-header">
          <a href="{{repo.html_url}}">{{repo.name}}</a>
          <span class="repo-language" title="Main Language">{{repo.language}}</span>
        </div>
        <p class="card-description">{{{repo.description}}}</p>
      </div>
    </div>
  `
});
