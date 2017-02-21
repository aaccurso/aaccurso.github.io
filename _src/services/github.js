import { service } from 'rockyjs';

service.register('Github', () => {
  const github = {
    api: 'https://api.github.com',
    user: 'aaccurso',
    token: 'dcf74b88a1513ec5220e388b51d761055fb2c63e'
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
    repo (name) {
      return fetch(`${github.api}/repos/${github.user}/${name}`, {headers})
        .then(toJson)
    }
  };
});
