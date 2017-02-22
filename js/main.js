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

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(4), __webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(require('rockyjs'), require('./services/github'), require('./components/github-repo-list'), require('./components/github-repo-card'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(global.rockyjs, global.github, global.githubRepoList, global.githubRepoCard);
	    global.app = mod.exports;
	  }
	})(this, function (_rockyjs) {
	  'use strict';

	  (0, _rockyjs.bootstrap)();
	});

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

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(require('rockyjs'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(global.rockyjs);
	    global.github = mod.exports;
	  }
	})(this, function (_rockyjs) {
	  'use strict';

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
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(require('rockyjs'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(global.rockyjs);
	    global.githubRepoList = mod.exports;
	  }
	})(this, function (_rockyjs) {
	  'use strict';

	  _rockyjs.component.register('github-repo-list', {
	    init: function init(Github) {
	      return Github.repos().then(function (repos) {
	        return { repos: repos };
	      });
	    },

	    template: '\n    <ul>\n    {{#each repos}}\n      <li><a href="{{url}}">{{name}}</a></li>\n    {{/each}}\n    </ul>\n  '
	  });
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(require('rockyjs'), require('gh-emoji'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(global.rockyjs, global.ghEmoji);
	    global.githubRepoCard = mod.exports;
	  }
	})(this, function (_rockyjs, _ghEmoji) {
	  'use strict';

	  var _slicedToArray = function () {
	    function sliceIterator(arr, i) {
	      var _arr = [];
	      var _n = true;
	      var _d = false;
	      var _e = undefined;

	      try {
	        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	          _arr.push(_s.value);

	          if (i && _arr.length === i) break;
	        }
	      } catch (err) {
	        _d = true;
	        _e = err;
	      } finally {
	        try {
	          if (!_n && _i["return"]) _i["return"]();
	        } finally {
	          if (_d) throw _e;
	        }
	      }

	      return _arr;
	    }

	    return function (arr, i) {
	      if (Array.isArray(arr)) {
	        return arr;
	      } else if (Symbol.iterator in Object(arr)) {
	        return sliceIterator(arr, i);
	      } else {
	        throw new TypeError("Invalid attempt to destructure non-iterable instance");
	      }
	    };
	  }();

	  _rockyjs.component.register('github-repo-card', {
	    init: function init(Github) {
	      var name = this.attributes.getNamedItem('name').value;

	      return Promise.all([Github.repo(name), (0, _ghEmoji.load)()]).then(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 1);

	        var repo = _ref2[0];

	        repo.description = (0, _ghEmoji.parse)(repo.description);
	        return {
	          repo: repo,
	          owner: repo.owner
	        };
	      });
	    },

	    template: '\n    <div>\n      <p>\n        {{repo.name}}\n        Stars: {{repo.stargazers_count}}\n        Forks: {{repo.forks_count}}\n        Language: {{repo.language}}\n        Description: {{{repo.description}}}\n        Owner:\n        - {{owner.login}}\n        - {{owner.html_url}}\n        <img src="{{owner.avatar_url}}" alt="{{owner.login}}"/>\n      </p>\n    </div>\n  '
	  });
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.ghEmoji = mod.exports;
	  }
	})(this, function (exports) {
	  "use strict";

	  (function (global, factory) {
	    if (true) {
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	      factory();
	    } else {
	      var mod = {
	        exports: {}
	      };
	      factory();
	      global.types = mod.exports;
	    }
	  })(undefined, function () {});
	  (function (global, factory) {
	    if (true) {
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	      factory(exports);
	    } else {
	      var mod = {
	        exports: {}
	      };
	      factory(mod.exports);
	      global.index = mod.exports;
	    }
	  })(undefined, function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	      value: true
	    });
	    exports.find = find;
	    exports.load = load;
	    exports.all = all;
	    exports.exist = exist;
	    exports.getUrl = getUrl;
	    exports.parse = parse;

	    function _toConsumableArray(arr) {
	      if (Array.isArray(arr)) {
	        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	          arr2[i] = arr[i];
	        }

	        return arr2;
	      } else {
	        return Array.from(arr);
	      }
	    }

	    var enpoint = 'https://api.github.com/emojis';
	    var delimiterRegex = /(\:[\w\-\+]+\:)/g;
	    var emojis = null;

	    var fetch = window.fetch || function (endpoint) {
	      return new Promise(function (resolve, reject) {
	        var xhr = new XMLHttpRequest();

	        xhr.onreadystatechange = function () {
	          if (xhr.readyState === XMLHttpRequest.DONE) {
	            if (xhr.status !== 200) {
	              return reject(xhr.responseText);
	            }

	            return resolve({ json: function json() {
	                return JSON.parse(xhr.responseText);
	              } });
	          }
	        };

	        xhr.open('GET', endpoint, true);
	        xhr.send();
	      });
	    };

	    /**
	     * Return array with matched emojis in text.
	     *
	     * @example
	     * import { load as loadEmojis, find as findEmojis } from 'gh-emoji';
	     *
	     * const text = 'Do you believe in :alien:...? :scream:';
	     *
	     * loadEmojis().then((emojis) => {
	     *   console.log(findEmojis(text)); // [':alien:', ':scream:']
	     * });
	     *
	     * @param {String} text Text to search for emojis.
	     *
	     * @returns {Array<String>} Array with matched emojis.
	     */
	    function find(text) {
	      return text.match(delimiterRegex) || [];
	    }

	    /**
	     * Fetch the emoji data from Github's api.
	     *
	     * @example
	     * import { load as loadEmojis } from 'gh-emoji';
	     *
	     * loadEmojis().then((emojis) => {
	     *   console.log(emojis['+1']); // 👍
	     * });
	     *
	     * @returns {Promise<Object>} Promise which passes Object with emoji names
	     * as keys and generated image tags as values to callback.
	     */
	    function load() {
	      return new Promise(function (resolve) {
	        if (emojis) return resolve(emojis);

	        return fetch(enpoint).then(function (r) {
	          return r.json();
	        }).then(function (response) {
	          emojis = response;
	          resolve(emojis);
	        });
	      });
	    }

	    /**
	     * Return all fetched emojis.
	     *
	     * @example
	     * import { load as loadEmojis, all as allEmojis } from 'gh-emoji';
	     *
	     * loadEmojis().then(() => {
	     *   console.log(allEmojis()); // {emojiName: emojiImageTag}
	     * });
	     *
	     * @returns {Object} Object with emoji names as keys and generated image tags
	     * as values.
	     */
	    function all() {
	      return emojis;
	    }

	    /**
	     * Check if requested emoji exists.
	     *
	     * @example
	     * import { load as loadEmojis, exist as emojiExists } from 'gh-emoji';
	     *
	     * loadEmojis().then(() => {
	     *   console.log(emojiExists('foo')); // false
	     *   console.log(emojiExists('smile')); // true
	     * });
	     *
	     * @param {String} emojiId Name of emoji.
	     *
	     * @returns {Boolean}
	     */
	    function exist(emojiId) {
	      var emojiMap = all();

	      if (emojiMap == null) {
	        return false;
	      }

	      return !!emojiMap[emojiId];
	    }

	    /**
	     * Return github's image url of emoji.
	     *
	     * @example
	     * import { load as loadEmojis, getUrl } from 'gh-emoji';
	     *
	     * loadEmojis().then(() => {
	     *   console.log(getUrl('apple')); // 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34e.png?v6'
	     * });
	     *
	     * @param {String} emojiId Name of emoji.
	     *
	     * @returns {String} Image url of given emoji.
	     */
	    function getUrl(emojiId) {
	      var emojiMap = all();

	      if (emojiMap == null) {
	        return null;
	      }

	      return emojiMap[emojiId];
	    }

	    /**
	     * Parse text and replace emoji tags with actual emoji symbols.
	     *
	     * @example
	     * import { load as loadEmojis, parse } from 'gh-emoji';
	     *
	     * const text = 'Do you believe in :alien:...? :scream:';
	     *
	     * loadEmojis().then(() => {
	     *   console.log(parse(text)) // 'Do you believe in 👽...? 😱';
	     * });
	     *
	     * @param {String} text Text to parse.
	     * @param {Object} options Options with additional data for parser.
	     * @param {String} options.classNames String with custom class names
	     * added to each emoji, separated with whitespace.
	     *
	     * @returns {String} Parsed text with emoji image tags in it.
	     */
	    function parse(text) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var output = '';
	      var customClassNames = options.classNames ? options.classNames.trim().split(/\s+/) : '';

	      output += text.replace(delimiterRegex, function (match) {
	        var name = match.replace(/:/g, '');
	        var classNames = ['gh-emoji', 'gh-emoji-' + name];

	        if (!exist(name)) {
	          return match;
	        }

	        if (customClassNames) {
	          classNames.push.apply(classNames, _toConsumableArray(customClassNames));
	        }

	        var imageSrc = getUrl(name);
	        var imageClass = classNames.join(' ');
	        var imageAlt = name;

	        return '<img src="' + imageSrc + '" class="' + imageClass + '" alt="' + imageAlt + '" />';
	      });

	      return output;
	    }
	  });
	});

/***/ }
/******/ ]);