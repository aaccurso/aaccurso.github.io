(mvvm => {
	mvvm.component.register('github-repos', {
		init (GithubRepos) {
			return GithubRepos().then(repos => {
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
})(mvvm);
