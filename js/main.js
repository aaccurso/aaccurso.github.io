(function () {
  const github_api = 'https://api.github.com';
  const headers = new Headers({
    'Authorization': 'token dcf74b88a1513ec5220e388b51d761055fb2c63e',
    'Accept': 'application/vnd.github.v3+json'
  });

  fetch(github_api + '/user/repos', {headers})
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      console.log(json);
    });
})();