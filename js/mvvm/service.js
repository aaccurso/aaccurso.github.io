(mvvm => {
	mvvm.service = {
		services: new Map(),
		register (serviceName, serviceObject) {
			this.services.set(serviceName, serviceObject);
		},
		getDependencies (componentInit) {
			let dependencyNames = getParamNames(componentInit);
			return dependencyNames.map(dependencyName => this.services.get(dependencyName));
		}
	};
	// http://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically-from-javascript
	const STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;
	const ARGUMENT_NAMES = /([^\s,]+)/g;
	function getParamNames(func) {
		let fnStr = func.toString().replace(STRIP_COMMENTS, '');
		let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
		return result || [];
	}
})(mvvm);
