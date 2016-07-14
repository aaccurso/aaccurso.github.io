(() => {
  const github = {
    api: 'https://api.github.com',
    token: 'dcf74b88a1513ec5220e388b51d761055fb2c63e'
  };
  const headers = new Headers({
    'Authorization': `token ${github.token}`,
    'Accept': 'application/vnd.github.v3+json'
  });

  fetch(`${github.api}/user/repos`, {headers})
    .then(result => result.json())
    .then(repos => {
      let githubRepos = document.querySelector('github-repos');
      githubRepos.innerHTML = Handlebars.compile(`
        <ul>
        {{#each repos}}
          <li><a href="{{url}}">{{name}}</a></li>
        {{/each}}
        </ul>
      `)({repos});
    });
})();
