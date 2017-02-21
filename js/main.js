/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _rockyjs = __webpack_require__(1);

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6);

	(0, _rockyjs.bootstrap)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bootstrap = exports.component = exports.service = undefined;

	var _service = __webpack_require__(2);

	var _service2 = _interopRequireDefault(_service);

	var _component = __webpack_require__(3);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function bootstrap() {
	  _component2.default.bootstrap();
	}

	exports.service = _service2.default;
	exports.component = _component2.default;
	exports.bootstrap = bootstrap;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  services: new Map(),
	  register: function register(serviceName, serviceFunction) {
	    this.services.set(serviceName, serviceFunction());
	  },
	  getDependencies: function getDependencies(componentInit) {
	    var _this = this;

	    var dependencyNames = getParamNames(componentInit);

	    return dependencyNames.map(function (dependencyName) {
	      return _this.services.get(dependencyName);
	    });
	  }
	};

	// http://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically-from-javascript

	var STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;
	var ARGUMENT_NAMES = /([^\s,]+)/g;
	function getParamNames(func) {
	  var fnStr = func.toString().replace(STRIP_COMMENTS, '');
	  var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);

	  return result || [];
	}
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _service = __webpack_require__(2);

	var _service2 = _interopRequireDefault(_service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: new Map(),
	  register: function register(componentName, componentObject) {
	    this.components.set(componentName, componentObject);
	  },
	  bootstrap: function bootstrap() {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      var _loop = function _loop() {
	        var _step$value = _slicedToArray(_step.value, 2);

	        componentName = _step$value[0];
	        componentObject = _step$value[1];

	        var componentDOMElements = document.querySelectorAll(componentName);
	        var dependencies = _service2.default.getDependencies(componentObject.init);

	        componentDOMElements.forEach(function (componentDOMElement) {
	          var properties = {
	            element: componentDOMElement,
	            attributes: componentDOMElement.attributes
	          };
	          var componentObjectInstance = Object.assign({}, properties, componentObject);

	          componentObjectInstance.init.apply(componentObjectInstance, dependencies).then(function (scope) {
	            componentDOMElement.innerHTML = Handlebars.compile(componentObjectInstance.template)(scope);
	          });
	        });
	      };

	      for (var _iterator = this.components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var componentName, componentObject;

	        _loop();
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _rockyjs = __webpack_require__(1);

	_rockyjs.service.register('Github', function () {
	  var github = {
	    api: 'https://api.github.com',
	    user: 'aaccurso',
	    token: 'dcf74b88a1513ec5220e388b51d761055fb2c63e'
	  };
	  var headers = new Headers({
	    'Authorization': 'token ' + github.token,
	    'Accept': 'application/vnd.github.v3+json'
	  });
	  var toJson = function toJson(result) {
	    return result.json();
	  };

	  return {
	    repos: function repos() {
	      return fetch(github.api + '/user/repos', { headers: headers }).then(toJson);
	    },
	    repo: function repo(name) {
	      return fetch(github.api + '/repos/' + github.user + '/' + name, { headers: headers }).then(toJson);
	    }
	  };
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _rockyjs = __webpack_require__(1);

	_rockyjs.component.register('github-repo-list', {
	  init: function init(Github) {
	    return Github.repos().then(function (repos) {
	      return { repos: repos };
	    });
	  },

	  template: '\n    <ul>\n    {{#each repos}}\n      <li><a href="{{url}}">{{name}}</a></li>\n    {{/each}}\n    </ul>\n  '
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _rockyjs = __webpack_require__(1);

	_rockyjs.component.register('github-repo-card', {
	  init: function init(Github) {
	    var name = this.attributes.getNamedItem('name').value;

	    return Github.repo(name).then(function (repo) {
	      return { repo: repo };
	    });
	  },

	  template: '\n    <div>\n      {{repo.name}}\n      Stars: {{repo.stargazers_count}}\n      Forks: {{repo.forks_count}}\n    </div>\n  '
	});

/***/ }
/******/ ]);