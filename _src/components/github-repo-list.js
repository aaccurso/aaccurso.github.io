import { component } from 'rockyjs';

component.register('github-repo-list', {
  init (Github) {
    return Github.repos()
      .then(repos => {
        return {repos};
      });
  },
  template: `
    <ul>
    {{#each repos}}
      <li><a href="{{url}}">{{name}}</a></li>
    {{/each}}
    </ul>
  `
});
