import { component } from 'rockyjs';
import { load as loadEmoji, parse as parseEmoji } from 'gh-emoji'

component.register('github-repo-card', {
  init (Github) {
    const name = this.attributes.getNamedItem('name').value;

    return Promise.all([
        Github.repo(name),
        loadEmoji()
      ])
      .then(([repo]) => {
        repo.description = parseEmoji(repo.description);
        return {
          repo,
          owner: repo.owner
        };
      });
  },
  template: `
    <div>
      <p>
        {{repo.name}}
        Stars: {{repo.stargazers_count}}
        Forks: {{repo.forks_count}}
        Language: {{repo.language}}
        Description: {{{repo.description}}}
        Owner:
        - {{owner.login}}
        - {{owner.html_url}}
        <img src="{{owner.avatar_url}}" alt="{{owner.login}}"/>
      </p>
    </div>
  `
});
