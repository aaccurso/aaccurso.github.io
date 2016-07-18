import mvvm from '../mvvm/mvvm';

mvvm.service.register('Github', () => {
	const github = {
		api: 'https://api.github.com',
		token: 'dcf74b88a1513ec5220e388b51d761055fb2c63e'
	};
	const headers = new Headers({
		'Authorization': `token ${github.token}`,
		'Accept': 'application/vnd.github.v3+json'
	});
	return {
		repos () {
			return fetch(`${github.api}/user/repos`, {headers})
				.then(result => result.json());
		}
	};
});
