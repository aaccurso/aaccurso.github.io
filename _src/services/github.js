import { service } from 'rockyjs';

service.register('Github', () => {
  const github = {
    api: 'https://api.github.com',
    user: 'aaccurso',
    token: window.github_token || ''
  };
  const headers = new Headers({
    'Authorization': `token ${github.token}`,
    'Accept': 'application/vnd.github.v3+json'
  });
  const toJson = (result) => result.json();

  return {
    repos () {
      return fetch(`${github.api}/user/repos`, {headers})
        .then(toJson);
    },
    repo (name, owner) {
      return fetch(`${github.api}/repos/${owner || github.user}/${name}`, {headers})
        .then(toJson)
    }
  };
});
