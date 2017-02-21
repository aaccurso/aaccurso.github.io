import { component } from 'rockyjs';

component.register('github-repo-card', {
  init (Github) {
    const name = this.attributes.getNamedItem('name').value;

    return Github.repo(name)
      .then(repo => {
        return {repo};
      });
  },
  template: `
    <div>
      {{repo.name}}
      Stars: {{repo.stargazers_count}}
      Forks: {{repo.forks_count}}
    </div>
  `
});
