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
	      repo: function repo(name, owner) {
	        return fetch(github.api + '/repos/' + (owner || github.user) + '/' + name, { headers: headers }).then(toJson);
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
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(7), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(require('rockyjs'), require('gh-emoji'), require('autolinker'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(global.rockyjs, global.ghEmoji, global.autolinker);
	    global.githubRepoCard = mod.exports;
	  }
	})(this, function (_rockyjs, _ghEmoji, _autolinker) {
	  'use strict';

	  var _autolinker2 = _interopRequireDefault(_autolinker);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

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
	      var name = this.attributes.getNamedItem('name');
	      var owner = this.attributes.getNamedItem('owner');

	      return Promise.all([Github.repo(name.value, owner && owner.value), (0, _ghEmoji.load)()]).then(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 1);

	        var repo = _ref2[0];

	        var linkedDescription = _autolinker2.default.link(repo.description);
	        var emojiDescription = (0, _ghEmoji.parse)(linkedDescription);

	        repo.description = emojiDescription;

	        return {
	          repo: repo,
	          owner: repo.owner
	        };
	      });
	    },

	    template: '\n    <div class="github-repo-card">\n      <div class="owner-avatar">\n        <a href="{{owner.html_url}}">\n        <img src="{{owner.avatar_url}}" alt="{{owner.login}}"/>\n        </a>\n      </div>\n      <div class="repo-details">\n        <div class="repo-name">\n          <a href="{{repo.html_url}}">{{repo.name}}</a>\n          <span class="repo-language" title="Main Language">{{repo.language}}</span>\n        </div>\n        <p class="repo-description">{{{repo.description}}}</p>\n      </div>\n    </div>\n  '
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(global,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module,exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if(typeof exports!=="undefined"){factory(module,exports);}else{var mod={exports:{}};factory(mod,mod.exports);global.Autolinker=mod.exports;}})(this,function(module,exports){'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/*!
	 * Autolinker.js
	 * 1.4.1
	 *
	 * Copyright(c) 2017 Gregory Jacobs <greg@greg-jacobs.com>
	 * MIT License
	 *
	 * https://github.com/gregjacobs/Autolinker.js
	 */;(function(root,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if((typeof exports==='undefined'?'undefined':_typeof(exports))==='object'){module.exports=factory();}else{root.Autolinker=factory();}})(undefined,function(){/**
	 * @class Autolinker
	 * @extends Object
	 *
	 * Utility class used to process a given string of text, and wrap the matches in
	 * the appropriate anchor (&lt;a&gt;) tags to turn them into links.
	 *
	 * Any of the configuration options may be provided in an Object (map) provided
	 * to the Autolinker constructor, which will configure how the {@link #link link()}
	 * method will process the links.
	 *
	 * For example:
	 *
	 *     var autolinker = new Autolinker( {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *
	 *     var html = autolinker.link( "Joe went to www.yahoo.com" );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 *
	 *
	 * The {@link #static-link static link()} method may also be used to inline
	 * options into a single call, which may be more convenient for one-off uses.
	 * For example:
	 *
	 *     var html = Autolinker.link( "Joe went to www.yahoo.com", {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 *
	 *
	 * ## Custom Replacements of Links
	 *
	 * If the configuration options do not provide enough flexibility, a {@link #replaceFn}
	 * may be provided to fully customize the output of Autolinker. This function is
	 * called once for each URL/Email/Phone#/Hashtag/Mention (Twitter, Instagram)
	 * match that is encountered.
	 *
	 * For example:
	 *
	 *     var input = "...";  // string with URLs, Email Addresses, Phone #s, Hashtags, and Mentions (Twitter, Instagram)
	 *
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *
	 *             switch( match.getType() ) {
	 *                 case 'url' :
	 *                     console.log( "url: ", match.getUrl() );
	 *
	 *                     if( match.getUrl().indexOf( 'mysite.com' ) === -1 ) {
	 *                         var tag = match.buildTag();  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
	 *                         tag.setAttr( 'rel', 'nofollow' );
	 *                         tag.addClass( 'external-link' );
	 *
	 *                         return tag;
	 *
	 *                     } else {
	 *                         return true;  // let Autolinker perform its normal anchor tag replacement
	 *                     }
	 *
	 *                 case 'email' :
	 *                     var email = match.getEmail();
	 *                     console.log( "email: ", email );
	 *
	 *                     if( email === "my@own.address" ) {
	 *                         return false;  // don't auto-link this particular email address; leave as-is
	 *                     } else {
	 *                         return;  // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
	 *                     }
	 *
	 *                 case 'phone' :
	 *                     var phoneNumber = match.getPhoneNumber();
	 *                     console.log( phoneNumber );
	 *
	 *                     return '<a href="http://newplace.to.link.phone.numbers.to/">' + phoneNumber + '</a>';
	 *
	 *                 case 'hashtag' :
	 *                     var hashtag = match.getHashtag();
	 *                     console.log( hashtag );
	 *
	 *                     return '<a href="http://newplace.to.link.hashtag.handles.to/">' + hashtag + '</a>';
	 *
	 *                 case 'mention' :
	 *                     var mention = match.getMention();
	 *                     console.log( mention );
	 *
	 *                     return '<a href="http://newplace.to.link.mention.to/">' + mention + '</a>';
	 *             }
	 *         }
	 *     } );
	 *
	 *
	 * The function may return the following values:
	 *
	 * - `true` (Boolean): Allow Autolinker to replace the match as it normally
	 *   would.
	 * - `false` (Boolean): Do not replace the current match at all - leave as-is.
	 * - Any String: If a string is returned from the function, the string will be
	 *   used directly as the replacement HTML for the match.
	 * - An {@link Autolinker.HtmlTag} instance, which can be used to build/modify
	 *   an HTML tag before writing out its HTML text.
	 *
	 * @constructor
	 * @param {Object} [cfg] The configuration options for the Autolinker instance,
	 *   specified in an Object (map).
	 */var Autolinker=function Autolinker(cfg){cfg=cfg||{};this.version=Autolinker.version;this.urls=this.normalizeUrlsCfg(cfg.urls);this.email=typeof cfg.email==='boolean'?cfg.email:true;this.phone=typeof cfg.phone==='boolean'?cfg.phone:true;this.hashtag=cfg.hashtag||false;this.mention=cfg.mention||false;this.newWindow=typeof cfg.newWindow==='boolean'?cfg.newWindow:true;this.stripPrefix=this.normalizeStripPrefixCfg(cfg.stripPrefix);this.stripTrailingSlash=typeof cfg.stripTrailingSlash==='boolean'?cfg.stripTrailingSlash:true;// Validate the value of the `mention` cfg
	var mention=this.mention;if(mention!==false&&mention!=='twitter'&&mention!=='instagram'){throw new Error("invalid `mention` cfg - see docs");}// Validate the value of the `hashtag` cfg
	var hashtag=this.hashtag;if(hashtag!==false&&hashtag!=='twitter'&&hashtag!=='facebook'&&hashtag!=='instagram'){throw new Error("invalid `hashtag` cfg - see docs");}this.truncate=this.normalizeTruncateCfg(cfg.truncate);this.className=cfg.className||'';this.replaceFn=cfg.replaceFn||null;this.context=cfg.context||this;this.htmlParser=null;this.matchers=null;this.tagBuilder=null;};/**
	 * Automatically links URLs, Email addresses, Phone Numbers, Twitter handles,
	 * Hashtags, and Mentions found in the given chunk of HTML. Does not link URLs
	 * found within HTML tags.
	 *
	 * For instance, if given the text: `You should go to http://www.yahoo.com`,
	 * then the result will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
	 *
	 * Example:
	 *
	 *     var linkedText = Autolinker.link( "Go to google.com", { newWindow: false } );
	 *     // Produces: "Go to <a href="http://google.com">google.com</a>"
	 *
	 * @static
	 * @param {String} textOrHtml The HTML or text to find matches within (depending
	 *   on if the {@link #urls}, {@link #email}, {@link #phone}, {@link #mention},
	 *   {@link #hashtag}, and {@link #mention} options are enabled).
	 * @param {Object} [options] Any of the configuration options for the Autolinker
	 *   class, specified in an Object (map). See the class description for an
	 *   example call.
	 * @return {String} The HTML text, with matches automatically linked.
	 */Autolinker.link=function(textOrHtml,options){var autolinker=new Autolinker(options);return autolinker.link(textOrHtml);};/**
	 * Parses the input `textOrHtml` looking for URLs, email addresses, phone
	 * numbers, username handles, and hashtags (depending on the configuration
	 * of the Autolinker instance), and returns an array of {@link Autolinker.match.Match}
	 * objects describing those matches (without making any replacements).
	 *
	 * Note that if parsing multiple pieces of text, it is slightly more efficient
	 * to create an Autolinker instance, and use the instance-level {@link #parse}
	 * method.
	 *
	 * Example:
	 *
	 *     var matches = Autolinker.parse( "Hello google.com, I am asdf@asdf.com", {
	 *         urls: true,
	 *         email: true
	 *     } );
	 *
	 *     console.log( matches.length );           // 2
	 *     console.log( matches[ 0 ].getType() );   // 'url'
	 *     console.log( matches[ 0 ].getUrl() );    // 'google.com'
	 *     console.log( matches[ 1 ].getType() );   // 'email'
	 *     console.log( matches[ 1 ].getEmail() );  // 'asdf@asdf.com'
	 *
	 * @static
	 * @param {String} textOrHtml The HTML or text to find matches within
	 *   (depending on if the {@link #urls}, {@link #email}, {@link #phone},
	 *   {@link #hashtag}, and {@link #mention} options are enabled).
	 * @param {Object} [options] Any of the configuration options for the Autolinker
	 *   class, specified in an Object (map). See the class description for an
	 *   example call.
	 * @return {Autolinker.match.Match[]} The array of Matches found in the
	 *   given input `textOrHtml`.
	 */Autolinker.parse=function(textOrHtml,options){var autolinker=new Autolinker(options);return autolinker.parse(textOrHtml);};/**
	 * @static
	 * @property {String} version (readonly)
	 *
	 * The Autolinker version number in the form major.minor.patch
	 *
	 * Ex: 0.25.1
	 */Autolinker.version='1.4.1';Autolinker.prototype={constructor:Autolinker,// fix constructor property
	/**
		 * @cfg {Boolean/Object} [urls]
		 *
		 * `true` if URLs should be automatically linked, `false` if they should not
		 * be. Defaults to `true`.
		 *
		 * Examples:
		 *
		 *     urls: true
		 *
		 *     // or
		 *
		 *     urls: {
		 *         schemeMatches : true,
		 *         wwwMatches    : true,
		 *         tldMatches    : true
		 *     }
		 *
		 * As shown above, this option also accepts an Object form with 3 properties
		 * to allow for more customization of what exactly gets linked. All default
		 * to `true`:
		 *
		 * @cfg {Boolean} [urls.schemeMatches] `true` to match URLs found prefixed
		 *   with a scheme, i.e. `http://google.com`, or `other+scheme://google.com`,
		 *   `false` to prevent these types of matches.
		 * @cfg {Boolean} [urls.wwwMatches] `true` to match urls found prefixed with
		 *   `'www.'`, i.e. `www.google.com`. `false` to prevent these types of
		 *   matches. Note that if the URL had a prefixed scheme, and
		 *   `schemeMatches` is true, it will still be linked.
		 * @cfg {Boolean} [urls.tldMatches] `true` to match URLs with known top
		 *   level domains (.com, .net, etc.) that are not prefixed with a scheme or
		 *   `'www.'`. This option attempts to match anything that looks like a URL
		 *   in the given text. Ex: `google.com`, `asdf.org/?page=1`, etc. `false`
		 *   to prevent these types of matches.
		 *//**
		 * @cfg {Boolean} [email=true]
		 *
		 * `true` if email addresses should be automatically linked, `false` if they
		 * should not be.
		 *//**
		 * @cfg {Boolean} [phone=true]
		 *
		 * `true` if Phone numbers ("(555)555-5555") should be automatically linked,
		 * `false` if they should not be.
		 *//**
		 * @cfg {Boolean/String} [hashtag=false]
		 *
		 * A string for the service name to have hashtags (ex: "#myHashtag")
		 * auto-linked to. The currently-supported values are:
		 *
		 * - 'twitter'
		 * - 'facebook'
		 * - 'instagram'
		 *
		 * Pass `false` to skip auto-linking of hashtags.
		 *//**
		 * @cfg {String/Boolean} [mention=false]
		 *
		 * A string for the service name to have mentions (ex: "@myuser")
		 * auto-linked to. The currently supported values are:
		 *
		 * - 'twitter'
		 * - 'instagram'
		 *
		 * Defaults to `false` to skip auto-linking of mentions.
		 *//**
		 * @cfg {Boolean} [newWindow=true]
		 *
		 * `true` if the links should open in a new window, `false` otherwise.
		 *//**
		 * @cfg {Boolean/Object} [stripPrefix]
		 *
		 * `true` if 'http://' (or 'https://') and/or the 'www.' should be stripped
		 * from the beginning of URL links' text, `false` otherwise. Defaults to
		 * `true`.
		 *
		 * Examples:
		 *
		 *     stripPrefix: true
		 *
		 *     // or
		 *
		 *     stripPrefix: {
		 *         scheme : true,
		 *         www    : true
		 *     }
		 *
		 * As shown above, this option also accepts an Object form with 2 properties
		 * to allow for more customization of what exactly is prevented from being
		 * displayed. Both default to `true`:
		 *
		 * @cfg {Boolean} [stripPrefix.scheme] `true` to prevent the scheme part of
		 *   a URL match from being displayed to the user. Example:
		 *   `'http://google.com'` will be displayed as `'google.com'`. `false` to
		 *   not strip the scheme. NOTE: Only an `'http://'` or `'https://'` scheme
		 *   will be removed, so as not to remove a potentially dangerous scheme
		 *   (such as `'file://'` or `'javascript:'`)
		 * @cfg {Boolean} [stripPrefix.www] www (Boolean): `true` to prevent the
		 *   `'www.'` part of a URL match from being displayed to the user. Ex:
		 *   `'www.google.com'` will be displayed as `'google.com'`. `false` to not
		 *   strip the `'www'`.
		 *//**
		 * @cfg {Boolean} [stripTrailingSlash=true]
		 *
		 * `true` to remove the trailing slash from URL matches, `false` to keep
		 *  the trailing slash.
		 *
		 *  Example when `true`: `http://google.com/` will be displayed as
		 *  `http://google.com`.
		 *//**
		 * @cfg {Number/Object} [truncate=0]
		 *
		 * ## Number Form
		 *
		 * A number for how many characters matched text should be truncated to
		 * inside the text of a link. If the matched text is over this number of
		 * characters, it will be truncated to this length by adding a two period
		 * ellipsis ('..') to the end of the string.
		 *
		 * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file'
		 * truncated to 25 characters might look something like this:
		 * 'yahoo.com/some/long/pat..'
		 *
		 * Example Usage:
		 *
		 *     truncate: 25
		 *
		 *
		 *  Defaults to `0` for "no truncation."
		 *
		 *
		 * ## Object Form
		 *
		 * An Object may also be provided with two properties: `length` (Number) and
		 * `location` (String). `location` may be one of the following: 'end'
		 * (default), 'middle', or 'smart'.
		 *
		 * Example Usage:
		 *
		 *     truncate: { length: 25, location: 'middle' }
		 *
		 * @cfg {Number} [truncate.length=0] How many characters to allow before
		 *   truncation will occur. Defaults to `0` for "no truncation."
		 * @cfg {"end"/"middle"/"smart"} [truncate.location="end"]
		 *
		 * - 'end' (default): will truncate up to the number of characters, and then
		 *   add an ellipsis at the end. Ex: 'yahoo.com/some/long/pat..'
		 * - 'middle': will truncate and add the ellipsis in the middle. Ex:
		 *   'yahoo.com/s..th/to/a/file'
		 * - 'smart': for URLs where the algorithm attempts to strip out unnecessary
		 *   parts first (such as the 'www.', then URL scheme, hash, etc.),
		 *   attempting to make the URL human-readable before looking for a good
		 *   point to insert the ellipsis if it is still too long. Ex:
		 *   'yahoo.com/some..to/a/file'. For more details, see
		 *   {@link Autolinker.truncate.TruncateSmart}.
		 *//**
		 * @cfg {String} className
		 *
		 * A CSS class name to add to the generated links. This class will be added
		 * to all links, as well as this class plus match suffixes for styling
		 * url/email/phone/hashtag/mention links differently.
		 *
		 * For example, if this config is provided as "myLink", then:
		 *
		 * - URL links will have the CSS classes: "myLink myLink-url"
		 * - Email links will have the CSS classes: "myLink myLink-email", and
		 * - Phone links will have the CSS classes: "myLink myLink-phone"
		 * - Hashtag links will have the CSS classes: "myLink myLink-hashtag"
		 * - Mention links will have the CSS classes: "myLink myLink-mention myLink-[type]"
		 *   where [type] is either "instagram" or "twitter"
		 *//**
		 * @cfg {Function} replaceFn
		 *
		 * A function to individually process each match found in the input string.
		 *
		 * See the class's description for usage.
		 *
		 * The `replaceFn` can be called with a different context object (`this`
		 * reference) using the {@link #context} cfg.
		 *
		 * This function is called with the following parameter:
		 *
		 * @cfg {Autolinker.match.Match} replaceFn.match The Match instance which
		 *   can be used to retrieve information about the match that the `replaceFn`
		 *   is currently processing. See {@link Autolinker.match.Match} subclasses
		 *   for details.
		 *//**
		 * @cfg {Object} context
		 *
		 * The context object (`this` reference) to call the `replaceFn` with.
		 *
		 * Defaults to this Autolinker instance.
		 *//**
		 * @property {String} version (readonly)
		 *
		 * The Autolinker version number in the form major.minor.patch
		 *
		 * Ex: 0.25.1
		 *//**
		 * @private
		 * @property {Autolinker.htmlParser.HtmlParser} htmlParser
		 *
		 * The HtmlParser instance used to skip over HTML tags, while finding text
		 * nodes to process. This is lazily instantiated in the {@link #getHtmlParser}
		 * method.
		 *//**
		 * @private
		 * @property {Autolinker.matcher.Matcher[]} matchers
		 *
		 * The {@link Autolinker.matcher.Matcher} instances for this Autolinker
		 * instance.
		 *
		 * This is lazily created in {@link #getMatchers}.
		 *//**
		 * @private
		 * @property {Autolinker.AnchorTagBuilder} tagBuilder
		 *
		 * The AnchorTagBuilder instance used to build match replacement anchor tags.
		 * Note: this is lazily instantiated in the {@link #getTagBuilder} method.
		 *//**
		 * Normalizes the {@link #urls} config into an Object with 3 properties:
		 * `schemeMatches`, `wwwMatches`, and `tldMatches`, all Booleans.
		 *
		 * See {@link #urls} config for details.
		 *
		 * @private
		 * @param {Boolean/Object} urls
		 * @return {Object}
		 */normalizeUrlsCfg:function normalizeUrlsCfg(urls){if(urls==null)urls=true;// default to `true`
	if(typeof urls==='boolean'){return{schemeMatches:urls,wwwMatches:urls,tldMatches:urls};}else{// object form
	return{schemeMatches:typeof urls.schemeMatches==='boolean'?urls.schemeMatches:true,wwwMatches:typeof urls.wwwMatches==='boolean'?urls.wwwMatches:true,tldMatches:typeof urls.tldMatches==='boolean'?urls.tldMatches:true};}},/**
		 * Normalizes the {@link #stripPrefix} config into an Object with 2
		 * properties: `scheme`, and `www` - both Booleans.
		 *
		 * See {@link #stripPrefix} config for details.
		 *
		 * @private
		 * @param {Boolean/Object} stripPrefix
		 * @return {Object}
		 */normalizeStripPrefixCfg:function normalizeStripPrefixCfg(stripPrefix){if(stripPrefix==null)stripPrefix=true;// default to `true`
	if(typeof stripPrefix==='boolean'){return{scheme:stripPrefix,www:stripPrefix};}else{// object form
	return{scheme:typeof stripPrefix.scheme==='boolean'?stripPrefix.scheme:true,www:typeof stripPrefix.www==='boolean'?stripPrefix.www:true};}},/**
		 * Normalizes the {@link #truncate} config into an Object with 2 properties:
		 * `length` (Number), and `location` (String).
		 *
		 * See {@link #truncate} config for details.
		 *
		 * @private
		 * @param {Number/Object} truncate
		 * @return {Object}
		 */normalizeTruncateCfg:function normalizeTruncateCfg(truncate){if(typeof truncate==='number'){return{length:truncate,location:'end'};}else{// object, or undefined/null
	return Autolinker.Util.defaults(truncate||{},{length:Number.POSITIVE_INFINITY,location:'end'});}},/**
		 * Parses the input `textOrHtml` looking for URLs, email addresses, phone
		 * numbers, username handles, and hashtags (depending on the configuration
		 * of the Autolinker instance), and returns an array of {@link Autolinker.match.Match}
		 * objects describing those matches (without making any replacements).
		 *
		 * This method is used by the {@link #link} method, but can also be used to
		 * simply do parsing of the input in order to discover what kinds of links
		 * there are and how many.
		 *
		 * Example usage:
		 *
		 *     var autolinker = new Autolinker( {
		 *         urls: true,
		 *         email: true
		 *     } );
		 *
		 *     var matches = autolinker.parse( "Hello google.com, I am asdf@asdf.com" );
		 *
		 *     console.log( matches.length );           // 2
		 *     console.log( matches[ 0 ].getType() );   // 'url'
		 *     console.log( matches[ 0 ].getUrl() );    // 'google.com'
		 *     console.log( matches[ 1 ].getType() );   // 'email'
		 *     console.log( matches[ 1 ].getEmail() );  // 'asdf@asdf.com'
		 *
		 * @param {String} textOrHtml The HTML or text to find matches within
		 *   (depending on if the {@link #urls}, {@link #email}, {@link #phone},
		 *   {@link #hashtag}, and {@link #mention} options are enabled).
		 * @return {Autolinker.match.Match[]} The array of Matches found in the
		 *   given input `textOrHtml`.
		 */parse:function parse(textOrHtml){var htmlParser=this.getHtmlParser(),htmlNodes=htmlParser.parse(textOrHtml),anchorTagStackCount=0,// used to only process text around anchor tags, and any inner text/html they may have;
	matches=[];// Find all matches within the `textOrHtml` (but not matches that are
	// already nested within <a> tags)
	for(var i=0,len=htmlNodes.length;i<len;i++){var node=htmlNodes[i],nodeType=node.getType();if(nodeType==='element'&&node.getTagName()==='a'){// Process HTML anchor element nodes in the input `textOrHtml` to find out when we're within an <a> tag
	if(!node.isClosing()){// it's the start <a> tag
	anchorTagStackCount++;}else{// it's the end </a> tag
	anchorTagStackCount=Math.max(anchorTagStackCount-1,0);// attempt to handle extraneous </a> tags by making sure the stack count never goes below 0
	}}else if(nodeType==='text'&&anchorTagStackCount===0){// Process text nodes that are not within an <a> tag
	var textNodeMatches=this.parseText(node.getText(),node.getOffset());matches.push.apply(matches,textNodeMatches);}}// After we have found all matches, remove subsequent matches that
	// overlap with a previous match. This can happen for instance with URLs,
	// where the url 'google.com/#link' would match '#link' as a hashtag.
	matches=this.compactMatches(matches);// And finally, remove matches for match types that have been turned
	// off. We needed to have all match types turned on initially so that
	// things like hashtags could be filtered out if they were really just
	// part of a URL match (for instance, as a named anchor).
	matches=this.removeUnwantedMatches(matches);return matches;},/**
		 * After we have found all matches, we need to remove subsequent matches
		 * that overlap with a previous match. This can happen for instance with
		 * URLs, where the url 'google.com/#link' would match '#link' as a hashtag.
		 *
		 * @private
		 * @param {Autolinker.match.Match[]} matches
		 * @return {Autolinker.match.Match[]}
		 */compactMatches:function compactMatches(matches){// First, the matches need to be sorted in order of offset
	matches.sort(function(a,b){return a.getOffset()-b.getOffset();});for(var i=0;i<matches.length-1;i++){var match=matches[i],endIdx=match.getOffset()+match.getMatchedText().length;// Remove subsequent matches that overlap with the current match
	while(i+1<matches.length&&matches[i+1].getOffset()<=endIdx){matches.splice(i+1,1);}}return matches;},/**
		 * Removes matches for matchers that were turned off in the options. For
		 * example, if {@link #hashtag hashtags} were not to be matched, we'll
		 * remove them from the `matches` array here.
		 *
		 * @private
		 * @param {Autolinker.match.Match[]} matches The array of matches to remove
		 *   the unwanted matches from. Note: this array is mutated for the
		 *   removals.
		 * @return {Autolinker.match.Match[]} The mutated input `matches` array.
		 */removeUnwantedMatches:function removeUnwantedMatches(matches){var remove=Autolinker.Util.remove;if(!this.hashtag)remove(matches,function(match){return match.getType()==='hashtag';});if(!this.email)remove(matches,function(match){return match.getType()==='email';});if(!this.phone)remove(matches,function(match){return match.getType()==='phone';});if(!this.mention)remove(matches,function(match){return match.getType()==='mention';});if(!this.urls.schemeMatches){remove(matches,function(m){return m.getType()==='url'&&m.getUrlMatchType()==='scheme';});}if(!this.urls.wwwMatches){remove(matches,function(m){return m.getType()==='url'&&m.getUrlMatchType()==='www';});}if(!this.urls.tldMatches){remove(matches,function(m){return m.getType()==='url'&&m.getUrlMatchType()==='tld';});}return matches;},/**
		 * Parses the input `text` looking for URLs, email addresses, phone
		 * numbers, username handles, and hashtags (depending on the configuration
		 * of the Autolinker instance), and returns an array of {@link Autolinker.match.Match}
		 * objects describing those matches.
		 *
		 * This method processes a **non-HTML string**, and is used to parse and
		 * match within the text nodes of an HTML string. This method is used
		 * internally by {@link #parse}.
		 *
		 * @private
		 * @param {String} text The text to find matches within (depending on if the
		 *   {@link #urls}, {@link #email}, {@link #phone},
		 *   {@link #hashtag}, and {@link #mention} options are enabled). This must be a non-HTML string.
		 * @param {Number} [offset=0] The offset of the text node within the
		 *   original string. This is used when parsing with the {@link #parse}
		 *   method to generate correct offsets within the {@link Autolinker.match.Match}
		 *   instances, but may be omitted if calling this method publicly.
		 * @return {Autolinker.match.Match[]} The array of Matches found in the
		 *   given input `text`.
		 */parseText:function parseText(text,offset){offset=offset||0;var matchers=this.getMatchers(),matches=[];for(var i=0,numMatchers=matchers.length;i<numMatchers;i++){var textMatches=matchers[i].parseMatches(text);// Correct the offset of each of the matches. They are originally
	// the offset of the match within the provided text node, but we
	// need to correct them to be relative to the original HTML input
	// string (i.e. the one provided to #parse).
	for(var j=0,numTextMatches=textMatches.length;j<numTextMatches;j++){textMatches[j].setOffset(offset+textMatches[j].getOffset());}matches.push.apply(matches,textMatches);}return matches;},/**
		 * Automatically links URLs, Email addresses, Phone numbers, Hashtags,
		 * and Mentions (Twitter, Instagram) found in the given chunk of HTML. Does not link
		 * URLs found within HTML tags.
		 *
		 * For instance, if given the text: `You should go to http://www.yahoo.com`,
		 * then the result will be `You should go to
		 * &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
		 *
		 * This method finds the text around any HTML elements in the input
		 * `textOrHtml`, which will be the text that is processed. Any original HTML
		 * elements will be left as-is, as well as the text that is already wrapped
		 * in anchor (&lt;a&gt;) tags.
		 *
		 * @param {String} textOrHtml The HTML or text to autolink matches within
		 *   (depending on if the {@link #urls}, {@link #email}, {@link #phone}, {@link #hashtag}, and {@link #mention} options are enabled).
		 * @return {String} The HTML, with matches automatically linked.
		 */link:function link(textOrHtml){if(!textOrHtml){return"";}// handle `null` and `undefined`
	var matches=this.parse(textOrHtml),newHtml=[],lastIndex=0;for(var i=0,len=matches.length;i<len;i++){var match=matches[i];newHtml.push(textOrHtml.substring(lastIndex,match.getOffset()));newHtml.push(this.createMatchReturnVal(match));lastIndex=match.getOffset()+match.getMatchedText().length;}newHtml.push(textOrHtml.substring(lastIndex));// handle the text after the last match
	return newHtml.join('');},/**
		 * Creates the return string value for a given match in the input string.
		 *
		 * This method handles the {@link #replaceFn}, if one was provided.
		 *
		 * @private
		 * @param {Autolinker.match.Match} match The Match object that represents
		 *   the match.
		 * @return {String} The string that the `match` should be replaced with.
		 *   This is usually the anchor tag string, but may be the `matchStr` itself
		 *   if the match is not to be replaced.
		 */createMatchReturnVal:function createMatchReturnVal(match){// Handle a custom `replaceFn` being provided
	var replaceFnResult;if(this.replaceFn){replaceFnResult=this.replaceFn.call(this.context,match);// Autolinker instance is the context
	}if(typeof replaceFnResult==='string'){return replaceFnResult;// `replaceFn` returned a string, use that
	}else if(replaceFnResult===false){return match.getMatchedText();// no replacement for the match
	}else if(replaceFnResult instanceof Autolinker.HtmlTag){return replaceFnResult.toAnchorString();}else{// replaceFnResult === true, or no/unknown return value from function
	// Perform Autolinker's default anchor tag generation
	var anchorTag=match.buildTag();// returns an Autolinker.HtmlTag instance
	return anchorTag.toAnchorString();}},/**
		 * Lazily instantiates and returns the {@link #htmlParser} instance for this
		 * Autolinker instance.
		 *
		 * @protected
		 * @return {Autolinker.htmlParser.HtmlParser}
		 */getHtmlParser:function getHtmlParser(){var htmlParser=this.htmlParser;if(!htmlParser){htmlParser=this.htmlParser=new Autolinker.htmlParser.HtmlParser();}return htmlParser;},/**
		 * Lazily instantiates and returns the {@link Autolinker.matcher.Matcher}
		 * instances for this Autolinker instance.
		 *
		 * @protected
		 * @return {Autolinker.matcher.Matcher[]}
		 */getMatchers:function getMatchers(){if(!this.matchers){var matchersNs=Autolinker.matcher,tagBuilder=this.getTagBuilder();var matchers=[new matchersNs.Hashtag({tagBuilder:tagBuilder,serviceName:this.hashtag}),new matchersNs.Email({tagBuilder:tagBuilder}),new matchersNs.Phone({tagBuilder:tagBuilder}),new matchersNs.Mention({tagBuilder:tagBuilder,serviceName:this.mention}),new matchersNs.Url({tagBuilder:tagBuilder,stripPrefix:this.stripPrefix,stripTrailingSlash:this.stripTrailingSlash})];return this.matchers=matchers;}else{return this.matchers;}},/**
		 * Returns the {@link #tagBuilder} instance for this Autolinker instance, lazily instantiating it
		 * if it does not yet exist.
		 *
		 * This method may be used in a {@link #replaceFn} to generate the {@link Autolinker.HtmlTag HtmlTag} instance that
		 * Autolinker would normally generate, and then allow for modifications before returning it. For example:
		 *
		 *     var html = Autolinker.link( "Test google.com", {
		 *         replaceFn : function( match ) {
		 *             var tag = match.buildTag();  // returns an {@link Autolinker.HtmlTag} instance
		 *             tag.setAttr( 'rel', 'nofollow' );
		 *
		 *             return tag;
		 *         }
		 *     } );
		 *
		 *     // generated html:
		 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
		 *
		 * @return {Autolinker.AnchorTagBuilder}
		 */getTagBuilder:function getTagBuilder(){var tagBuilder=this.tagBuilder;if(!tagBuilder){tagBuilder=this.tagBuilder=new Autolinker.AnchorTagBuilder({newWindow:this.newWindow,truncate:this.truncate,className:this.className});}return tagBuilder;}};// Autolinker Namespaces
	Autolinker.match={};Autolinker.matcher={};Autolinker.htmlParser={};Autolinker.truncate={};/*global Autolinker *//*jshint eqnull:true, boss:true *//**
	 * @class Autolinker.Util
	 * @singleton
	 *
	 * A few utility methods for Autolinker.
	 */Autolinker.Util={/**
		 * @property {Function} abstractMethod
		 *
		 * A function object which represents an abstract method.
		 */abstractMethod:function abstractMethod(){throw"abstract";},/**
		 * @private
		 * @property {RegExp} trimRegex
		 *
		 * The regular expression used to trim the leading and trailing whitespace
		 * from a string.
		 */trimRegex:/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,/**
		 * Assigns (shallow copies) the properties of `src` onto `dest`.
		 *
		 * @param {Object} dest The destination object.
		 * @param {Object} src The source object.
		 * @return {Object} The destination object (`dest`)
		 */assign:function assign(dest,src){for(var prop in src){if(src.hasOwnProperty(prop)){dest[prop]=src[prop];}}return dest;},/**
		 * Assigns (shallow copies) the properties of `src` onto `dest`, if the
		 * corresponding property on `dest` === `undefined`.
		 *
		 * @param {Object} dest The destination object.
		 * @param {Object} src The source object.
		 * @return {Object} The destination object (`dest`)
		 */defaults:function defaults(dest,src){for(var prop in src){if(src.hasOwnProperty(prop)&&dest[prop]===undefined){dest[prop]=src[prop];}}return dest;},/**
		 * Extends `superclass` to create a new subclass, adding the `protoProps` to the new subclass's prototype.
		 *
		 * @param {Function} superclass The constructor function for the superclass.
		 * @param {Object} protoProps The methods/properties to add to the subclass's prototype. This may contain the
		 *   special property `constructor`, which will be used as the new subclass's constructor function.
		 * @return {Function} The new subclass function.
		 */extend:function extend(superclass,protoProps){var superclassProto=superclass.prototype;var F=function F(){};F.prototype=superclassProto;var subclass;if(protoProps.hasOwnProperty('constructor')){subclass=protoProps.constructor;}else{subclass=function subclass(){superclassProto.constructor.apply(this,arguments);};}var subclassProto=subclass.prototype=new F();// set up prototype chain
	subclassProto.constructor=subclass;// fix constructor property
	subclassProto.superclass=superclassProto;delete protoProps.constructor;// don't re-assign constructor property to the prototype, since a new function may have been created (`subclass`), which is now already there
	Autolinker.Util.assign(subclassProto,protoProps);return subclass;},/**
		 * Truncates the `str` at `len - ellipsisChars.length`, and adds the `ellipsisChars` to the
		 * end of the string (by default, two periods: '..'). If the `str` length does not exceed
		 * `len`, the string will be returned unchanged.
		 *
		 * @param {String} str The string to truncate and add an ellipsis to.
		 * @param {Number} truncateLen The length to truncate the string at.
		 * @param {String} [ellipsisChars=...] The ellipsis character(s) to add to the end of `str`
		 *   when truncated. Defaults to '...'
		 */ellipsis:function ellipsis(str,truncateLen,ellipsisChars){var ellipsisLength;if(str.length>truncateLen){if(ellipsisChars==null){ellipsisChars='&hellip;';ellipsisLength=3;}else{ellipsisLength=ellipsisChars.length;}str=str.substring(0,truncateLen-ellipsisLength)+ellipsisChars;}return str;},/**
		 * Supports `Array.prototype.indexOf()` functionality for old IE (IE8 and below).
		 *
		 * @param {Array} arr The array to find an element of.
		 * @param {*} element The element to find in the array, and return the index of.
		 * @return {Number} The index of the `element`, or -1 if it was not found.
		 */indexOf:function indexOf(arr,element){if(Array.prototype.indexOf){return arr.indexOf(element);}else{for(var i=0,len=arr.length;i<len;i++){if(arr[i]===element)return i;}return-1;}},/**
		 * Removes array elements based on a filtering function. Mutates the input
		 * array.
		 *
		 * Using this instead of the ES5 Array.prototype.filter() function, to allow
		 * Autolinker compatibility with IE8, and also to prevent creating many new
		 * arrays in memory for filtering.
		 *
		 * @param {Array} arr The array to remove elements from. This array is
		 *   mutated.
		 * @param {Function} fn A function which should return `true` to
		 *   remove an element.
		 * @return {Array} The mutated input `arr`.
		 */remove:function remove(arr,fn){for(var i=arr.length-1;i>=0;i--){if(fn(arr[i])===true){arr.splice(i,1);}}},/**
		 * Performs the functionality of what modern browsers do when `String.prototype.split()` is called
		 * with a regular expression that contains capturing parenthesis.
		 *
		 * For example:
		 *
		 *     // Modern browsers:
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', ',', 'b', ',', 'c' ]
		 *
		 *     // Old IE (including IE8):
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', 'b', 'c' ]
		 *
		 * This method emulates the functionality of modern browsers for the old IE case.
		 *
		 * @param {String} str The string to split.
		 * @param {RegExp} splitRegex The regular expression to split the input `str` on. The splitting
		 *   character(s) will be spliced into the array, as in the "modern browsers" example in the
		 *   description of this method.
		 *   Note #1: the supplied regular expression **must** have the 'g' flag specified.
		 *   Note #2: for simplicity's sake, the regular expression does not need
		 *   to contain capturing parenthesis - it will be assumed that any match has them.
		 * @return {String[]} The split array of strings, with the splitting character(s) included.
		 */splitAndCapture:function splitAndCapture(str,splitRegex){if(!splitRegex.global)throw new Error("`splitRegex` must have the 'g' flag set");var result=[],lastIdx=0,match;while(match=splitRegex.exec(str)){result.push(str.substring(lastIdx,match.index));result.push(match[0]);// push the splitting char(s)
	lastIdx=match.index+match[0].length;}result.push(str.substring(lastIdx));return result;},/**
		 * Trims the leading and trailing whitespace from a string.
		 *
		 * @param {String} str The string to trim.
		 * @return {String}
		 */trim:function trim(str){return str.replace(this.trimRegex,'');}};/*global Autolinker *//*jshint boss:true *//**
	 * @class Autolinker.HtmlTag
	 * @extends Object
	 *
	 * Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.
	 *
	 * Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use
	 * this class in your code, especially within a {@link Autolinker#replaceFn replaceFn}.
	 *
	 * ## Examples
	 *
	 * Example instantiation:
	 *
	 *     var tag = new Autolinker.HtmlTag( {
	 *         tagName : 'a',
	 *         attrs   : { 'href': 'http://google.com', 'class': 'external-link' },
	 *         innerHtml : 'Google'
	 *     } );
	 *
	 *     tag.toAnchorString();  // <a href="http://google.com" class="external-link">Google</a>
	 *
	 *     // Individual accessor methods
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 *
	 *
	 * Using mutator methods (which may be used in combination with instantiation config properties):
	 *
	 *     var tag = new Autolinker.HtmlTag();
	 *     tag.setTagName( 'a' );
	 *     tag.setAttr( 'href', 'http://google.com' );
	 *     tag.addClass( 'external-link' );
	 *     tag.setInnerHtml( 'Google' );
	 *
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 *
	 *     tag.toAnchorString();  // <a href="http://google.com" class="external-link">Google</a>
	 *
	 *
	 * ## Example use within a {@link Autolinker#replaceFn replaceFn}
	 *
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( match ) {
	 *             var tag = match.buildTag();  // returns an {@link Autolinker.HtmlTag} instance, configured with the Match's href and anchor text
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *
	 *             return tag;
	 *         }
	 *     } );
	 *
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 *
	 *
	 * ## Example use with a new tag for the replacement
	 *
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( match ) {
	 *             var tag = new Autolinker.HtmlTag( {
	 *                 tagName : 'button',
	 *                 attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },
	 *                 innerHtml : 'Load URL: ' + match.getAnchorText()
	 *             } );
	 *
	 *             return tag;
	 *         }
	 *     } );
	 *
	 *     // generated html:
	 *     //   Test <button title="Load URL: http://google.com">Load URL: google.com</button>
	 */Autolinker.HtmlTag=Autolinker.Util.extend(Object,{/**
		 * @cfg {String} tagName
		 *
		 * The tag name. Ex: 'a', 'button', etc.
		 *
		 * Not required at instantiation time, but should be set using {@link #setTagName} before {@link #toAnchorString}
		 * is executed.
		 *//**
		 * @cfg {Object.<String, String>} attrs
		 *
		 * An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the
		 * values are the attribute values.
		 *//**
		 * @cfg {String} innerHtml
		 *
		 * The inner HTML for the tag.
		 *
		 * Note the camel case name on `innerHtml`. Acronyms are camelCased in this utility (such as not to run into the acronym
		 * naming inconsistency that the DOM developers created with `XMLHttpRequest`). You may alternatively use {@link #innerHTML}
		 * if you prefer, but this one is recommended.
		 *//**
		 * @cfg {String} innerHTML
		 *
		 * Alias of {@link #innerHtml}, accepted for consistency with the browser DOM api, but prefer the camelCased version
		 * for acronym names.
		 *//**
		 * @protected
		 * @property {RegExp} whitespaceRegex
		 *
		 * Regular expression used to match whitespace in a string of CSS classes.
		 */whitespaceRegex:/\s+/,/**
		 * @constructor
		 * @param {Object} [cfg] The configuration properties for this class, in an Object (map)
		 */constructor:function constructor(cfg){Autolinker.Util.assign(this,cfg);this.innerHtml=this.innerHtml||this.innerHTML;// accept either the camelCased form or the fully capitalized acronym
	},/**
		 * Sets the tag name that will be used to generate the tag with.
		 *
		 * @param {String} tagName
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */setTagName:function setTagName(tagName){this.tagName=tagName;return this;},/**
		 * Retrieves the tag name.
		 *
		 * @return {String}
		 */getTagName:function getTagName(){return this.tagName||"";},/**
		 * Sets an attribute on the HtmlTag.
		 *
		 * @param {String} attrName The attribute name to set.
		 * @param {String} attrValue The attribute value to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */setAttr:function setAttr(attrName,attrValue){var tagAttrs=this.getAttrs();tagAttrs[attrName]=attrValue;return this;},/**
		 * Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns `undefined`.
		 *
		 * @param {String} attrName The attribute name to retrieve.
		 * @return {String} The attribute's value, or `undefined` if it does not exist on the HtmlTag.
		 */getAttr:function getAttr(attrName){return this.getAttrs()[attrName];},/**
		 * Sets one or more attributes on the HtmlTag.
		 *
		 * @param {Object.<String, String>} attrs A key/value Object (map) of the attributes to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */setAttrs:function setAttrs(attrs){var tagAttrs=this.getAttrs();Autolinker.Util.assign(tagAttrs,attrs);return this;},/**
		 * Retrieves the attributes Object (map) for the HtmlTag.
		 *
		 * @return {Object.<String, String>} A key/value object of the attributes for the HtmlTag.
		 */getAttrs:function getAttrs(){return this.attrs||(this.attrs={});},/**
		 * Sets the provided `cssClass`, overwriting any current CSS classes on the HtmlTag.
		 *
		 * @param {String} cssClass One or more space-separated CSS classes to set (overwrite).
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */setClass:function setClass(cssClass){return this.setAttr('class',cssClass);},/**
		 * Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.
		 *
		 * @param {String} cssClass One or more space-separated CSS classes to add.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */addClass:function addClass(cssClass){var classAttr=this.getClass(),whitespaceRegex=this.whitespaceRegex,indexOf=Autolinker.Util.indexOf,// to support IE8 and below
	classes=!classAttr?[]:classAttr.split(whitespaceRegex),newClasses=cssClass.split(whitespaceRegex),newClass;while(newClass=newClasses.shift()){if(indexOf(classes,newClass)===-1){classes.push(newClass);}}this.getAttrs()['class']=classes.join(" ");return this;},/**
		 * Convenience method to remove one or more CSS classes from the HtmlTag.
		 *
		 * @param {String} cssClass One or more space-separated CSS classes to remove.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */removeClass:function removeClass(cssClass){var classAttr=this.getClass(),whitespaceRegex=this.whitespaceRegex,indexOf=Autolinker.Util.indexOf,// to support IE8 and below
	classes=!classAttr?[]:classAttr.split(whitespaceRegex),removeClasses=cssClass.split(whitespaceRegex),removeClass;while(classes.length&&(removeClass=removeClasses.shift())){var idx=indexOf(classes,removeClass);if(idx!==-1){classes.splice(idx,1);}}this.getAttrs()['class']=classes.join(" ");return this;},/**
		 * Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when
		 * there are multiple.
		 *
		 * @return {String}
		 */getClass:function getClass(){return this.getAttrs()['class']||"";},/**
		 * Convenience method to check if the tag has a CSS class or not.
		 *
		 * @param {String} cssClass The CSS class to check for.
		 * @return {Boolean} `true` if the HtmlTag has the CSS class, `false` otherwise.
		 */hasClass:function hasClass(cssClass){return(' '+this.getClass()+' ').indexOf(' '+cssClass+' ')!==-1;},/**
		 * Sets the inner HTML for the tag.
		 *
		 * @param {String} html The inner HTML to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */setInnerHtml:function setInnerHtml(html){this.innerHtml=html;return this;},/**
		 * Retrieves the inner HTML for the tag.
		 *
		 * @return {String}
		 */getInnerHtml:function getInnerHtml(){return this.innerHtml||"";},/**
		 * Override of superclass method used to generate the HTML string for the tag.
		 *
		 * @return {String}
		 */toAnchorString:function toAnchorString(){var tagName=this.getTagName(),attrsStr=this.buildAttrsStr();attrsStr=attrsStr?' '+attrsStr:'';// prepend a space if there are actually attributes
	return['<',tagName,attrsStr,'>',this.getInnerHtml(),'</',tagName,'>'].join("");},/**
		 * Support method for {@link #toAnchorString}, returns the string space-separated key="value" pairs, used to populate
		 * the stringified HtmlTag.
		 *
		 * @protected
		 * @return {String} Example return: `attr1="value1" attr2="value2"`
		 */buildAttrsStr:function buildAttrsStr(){if(!this.attrs)return"";// no `attrs` Object (map) has been set, return empty string
	var attrs=this.getAttrs(),attrsArr=[];for(var prop in attrs){if(attrs.hasOwnProperty(prop)){attrsArr.push(prop+'="'+attrs[prop]+'"');}}return attrsArr.join(" ");}});/*global Autolinker *//**
	 * @class Autolinker.RegexLib
	 * @singleton
	 *
	 * Builds and stores a library of the common regular expressions used by the
	 * Autolinker utility.
	 *
	 * Other regular expressions may exist ad-hoc, but these are generally the
	 * regular expressions that are shared between source files.
	 */Autolinker.RegexLib=function(){/**
		 * The string form of a regular expression that would match all of the
		 * alphabetic ("letter") chars in the unicode character set when placed in a
		 * RegExp character class (`[]`). This includes all international alphabetic
		 * characters.
		 *
		 * These would be the characters matched by unicode regex engines `\p{L}`
		 * escape ("all letters").
		 *
		 * Taken from the XRegExp library: http://xregexp.com/
		 * Specifically: http://xregexp.com/v/3.0.0/unicode-categories.js
		 *
		 * @private
		 * @type {String}
		 */var alphaCharsStr='A-Za-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ';/**
		 * The string form of a regular expression that would match all of the
		 * decimal number chars in the unicode character set when placed in a RegExp
		 * character class (`[]`).
		 *
		 * These would be the characters matched by unicode regex engines `\p{Nd}`
		 * escape ("all decimal numbers")
		 *
		 * Taken from the XRegExp library: http://xregexp.com/
		 * Specifically: http://xregexp.com/v/3.0.0/unicode-categories.js
		 *
		 * @private
		 * @type {String}
		 */var decimalNumbersStr='0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９';// See documentation below
	var alphaNumericCharsStr=alphaCharsStr+decimalNumbersStr;// See documentation below
	var domainNameRegex=new RegExp('['+alphaNumericCharsStr+'.\\-]*['+alphaNumericCharsStr+'\\-]');// See documentation below
	var tldRegex=/(?:travelersinsurance|sandvikcoromant|kerryproperties|cancerresearch|weatherchannel|kerrylogistics|spreadbetting|international|wolterskluwer|lifeinsurance|construction|pamperedchef|scholarships|versicherung|bridgestone|creditunion|kerryhotels|investments|productions|blackfriday|enterprises|lamborghini|photography|motorcycles|williamhill|playstation|contractors|barclaycard|accountants|redumbrella|engineering|management|telefonica|protection|consulting|tatamotors|creditcard|vlaanderen|schaeffler|associates|properties|foundation|republican|bnpparibas|boehringer|eurovision|extraspace|industries|immobilien|university|technology|volkswagen|healthcare|restaurant|cuisinella|vistaprint|apartments|accountant|travelers|homedepot|institute|vacations|furniture|fresenius|insurance|christmas|bloomberg|solutions|barcelona|firestone|financial|kuokgroup|fairwinds|community|passagens|goldpoint|equipment|lifestyle|yodobashi|aquarelle|marketing|analytics|education|amsterdam|statefarm|melbourne|allfinanz|directory|microsoft|stockholm|montblanc|accenture|lancaster|landrover|everbank|istanbul|graphics|grainger|ipiranga|softbank|attorney|pharmacy|saarland|catering|airforce|yokohama|mortgage|frontier|mutuelle|stcgroup|memorial|pictures|football|symantec|cipriani|ventures|telecity|cityeats|verisign|flsmidth|boutique|cleaning|firmdale|clinique|clothing|redstone|infiniti|deloitte|feedback|services|broadway|plumbing|commbank|training|barclays|exchange|computer|brussels|software|delivery|barefoot|builders|business|bargains|engineer|holdings|download|security|helsinki|lighting|movistar|discount|hdfcbank|supplies|marriott|property|diamonds|capetown|partners|democrat|jpmorgan|bradesco|budapest|rexroth|zuerich|shriram|academy|science|support|youtube|singles|surgery|alibaba|statoil|dentist|schwarz|android|cruises|cricket|digital|markets|starhub|systems|courses|coupons|netbank|country|domains|corsica|network|neustar|realtor|lincoln|limited|schmidt|yamaxun|cooking|contact|auction|spiegel|liaison|leclerc|latrobe|lasalle|abogado|compare|lanxess|exposed|express|company|cologne|college|avianca|lacaixa|fashion|recipes|ferrero|komatsu|storage|wanggou|clubmed|sandvik|fishing|fitness|bauhaus|kitchen|flights|florist|flowers|watches|weather|temasek|samsung|bentley|forsale|channel|theater|frogans|theatre|okinawa|website|tickets|jewelry|gallery|tiffany|iselect|shiksha|brother|organic|wedding|genting|toshiba|origins|philips|hyundai|hotmail|hoteles|hosting|rentals|windows|cartier|bugatti|holiday|careers|whoswho|hitachi|panerai|caravan|reviews|guitars|capital|trading|hamburg|hangout|finance|stream|family|abbott|health|review|travel|report|hermes|hiphop|gratis|career|toyota|hockey|dating|repair|google|social|soccer|reisen|global|otsuka|giving|unicom|casino|photos|center|broker|rocher|orange|bostik|garden|insure|ryukyu|bharti|safety|physio|sakura|oracle|online|jaguar|gallup|piaget|tienda|futbol|pictet|joburg|webcam|berlin|office|juegos|kaufen|chanel|chrome|xihuan|church|tennis|circle|kinder|flickr|bayern|claims|clinic|viajes|nowruz|xperia|norton|yachts|studio|coffee|camera|sanofi|nissan|author|expert|events|comsec|lawyer|tattoo|viking|estate|villas|condos|realty|yandex|energy|emerck|virgin|vision|durban|living|school|coupon|london|taobao|natura|taipei|nagoya|luxury|walter|aramco|sydney|madrid|credit|maison|makeup|schule|market|anquan|direct|design|swatch|suzuki|alsace|vuelos|dental|alipay|voyage|shouji|voting|airtel|mutual|degree|supply|agency|museum|mobily|dealer|monash|select|mormon|active|moscow|racing|datsun|quebec|nissay|rodeo|email|gifts|works|photo|chloe|edeka|cheap|earth|vista|tushu|koeln|glass|shoes|globo|tunes|gmail|nokia|space|kyoto|black|ricoh|seven|lamer|sener|epson|cisco|praxi|trust|citic|crown|shell|lease|green|legal|lexus|ninja|tatar|gripe|nikon|group|video|wales|autos|gucci|party|nexus|guide|linde|adult|parts|amica|lixil|boats|azure|loans|locus|cymru|lotte|lotto|stada|click|poker|quest|dabur|lupin|nadex|paris|faith|dance|canon|place|gives|trade|skype|rocks|mango|cloud|boots|smile|final|swiss|homes|honda|media|horse|cards|deals|watch|bosch|house|pizza|miami|osaka|tours|total|xerox|coach|sucks|style|delta|toray|iinet|tools|money|codes|beats|tokyo|salon|archi|movie|baidu|study|actor|yahoo|store|apple|world|forex|today|bible|tmall|tirol|irish|tires|forum|reise|vegas|vodka|sharp|omega|weber|jetzt|audio|promo|build|bingo|chase|gallo|drive|dubai|rehab|press|solar|sale|beer|bbva|bank|band|auto|sapo|sarl|saxo|audi|asia|arte|arpa|army|yoga|ally|zara|scor|scot|sexy|seat|zero|seek|aero|adac|zone|aarp|maif|meet|meme|menu|surf|mini|mobi|mtpc|porn|desi|star|ltda|name|talk|navy|love|loan|live|link|news|limo|like|spot|life|nico|lidl|lgbt|land|taxi|team|tech|kred|kpmg|sony|song|kiwi|kddi|jprs|jobs|sohu|java|itau|tips|info|immo|icbc|hsbc|town|host|page|toys|here|help|pars|haus|guru|guge|tube|goog|golf|gold|sncf|gmbh|gift|ggee|gent|gbiz|game|vana|pics|fund|ford|ping|pink|fish|film|fast|farm|play|fans|fail|plus|skin|pohl|fage|moda|post|erni|dvag|prod|doha|prof|docs|viva|diet|luxe|site|dell|sina|dclk|show|qpon|date|vote|cyou|voto|read|coop|cool|wang|club|city|chat|cern|cash|reit|rent|casa|cars|care|camp|rest|call|cafe|weir|wien|rich|wiki|buzz|wine|book|bond|room|work|rsvp|shia|ruhr|blue|bing|shaw|bike|safe|xbox|best|pwc|mtn|lds|aig|boo|fyi|nra|nrw|ntt|car|gal|obi|zip|aeg|vin|how|one|ong|onl|dad|ooo|bet|esq|org|htc|bar|uol|ibm|ovh|gdn|ice|icu|uno|gea|ifm|bot|top|wtf|lol|day|pet|eus|wtc|ubs|tvs|aco|ing|ltd|ink|tab|abb|afl|cat|int|pid|pin|bid|cba|gle|com|cbn|ads|man|wed|ceb|gmo|sky|ist|gmx|tui|mba|fan|ski|iwc|app|pro|med|ceo|jcb|jcp|goo|dev|men|aaa|meo|pub|jlc|bom|jll|gop|jmp|mil|got|gov|win|jot|mma|joy|trv|red|cfa|cfd|bio|moe|moi|mom|ren|biz|aws|xin|bbc|dnp|buy|kfh|mov|thd|xyz|fit|kia|rio|rip|kim|dog|vet|nyc|bcg|mtr|bcn|bms|bmw|run|bzh|rwe|tel|stc|axa|kpn|fly|krd|cab|bnl|foo|crs|eat|tci|sap|srl|nec|sas|net|cal|sbs|sfr|sca|scb|csc|edu|new|xxx|hiv|fox|wme|ngo|nhk|vip|sex|frl|lat|yun|law|you|tax|soy|sew|om|ac|hu|se|sc|sg|sh|sb|sa|rw|ru|rs|ro|re|qa|py|si|pw|pt|ps|sj|sk|pr|pn|pm|pl|sl|sm|pk|sn|ph|so|pg|pf|pe|pa|zw|nz|nu|nr|np|no|nl|ni|ng|nf|sr|ne|st|nc|na|mz|my|mx|mw|mv|mu|mt|ms|mr|mq|mp|mo|su|mn|mm|ml|mk|mh|mg|me|sv|md|mc|sx|sy|ma|ly|lv|sz|lu|lt|ls|lr|lk|li|lc|lb|la|tc|kz|td|ky|kw|kr|kp|kn|km|ki|kh|tf|tg|th|kg|ke|jp|jo|jm|je|it|is|ir|tj|tk|tl|tm|iq|tn|to|io|in|im|il|ie|ad|sd|ht|hr|hn|hm|tr|hk|gy|gw|gu|gt|gs|gr|gq|tt|gp|gn|gm|gl|tv|gi|tw|tz|ua|gh|ug|uk|gg|gf|ge|gd|us|uy|uz|va|gb|ga|vc|ve|fr|fo|fm|fk|fj|vg|vi|fi|eu|et|es|er|eg|ee|ec|dz|do|dm|dk|vn|dj|de|cz|cy|cx|cw|vu|cv|cu|cr|co|cn|cm|cl|ck|ci|ch|cg|cf|cd|cc|ca|wf|bz|by|bw|bv|bt|bs|br|bo|bn|bm|bj|bi|ws|bh|bg|bf|be|bd|bb|ba|az|ax|aw|au|at|as|ye|ar|aq|ao|am|al|yt|ai|za|ag|af|ae|zm|id)\b/;return{/**
			 * The string form of a regular expression that would match all of the
			 * letters and decimal number chars in the unicode character set when placed
			 * in a RegExp character class (`[]`).
			 *
			 * These would be the characters matched by unicode regex engines `[\p{L}\p{Nd}]`
			 * escape ("all letters and decimal numbers")
			 *
			 * @property {String} alphaNumericCharsStr
			 */alphaNumericCharsStr:alphaNumericCharsStr,/**
			 * A regular expression to match domain names of a URL or email address.
			 * Ex: 'google', 'yahoo', 'some-other-company', etc.
			 *
			 * @property {RegExp} domainNameRegex
			 */domainNameRegex:domainNameRegex,/**
			 * A regular expression to match top level domains (TLDs) for a URL or
			 * email address. Ex: 'com', 'org', 'net', etc.
			 *
			 * @property {RegExp} tldRegex
			 */tldRegex:tldRegex};}();/*global Autolinker *//*jshint sub:true *//**
	 * @protected
	 * @class Autolinker.AnchorTagBuilder
	 * @extends Object
	 *
	 * Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is
	 * found.
	 *
	 * Normally this class is instantiated, configured, and used internally by an
	 * {@link Autolinker} instance, but may actually be used indirectly in a
	 * {@link Autolinker#replaceFn replaceFn} to create {@link Autolinker.HtmlTag HtmlTag}
	 * instances which may be modified before returning from the
	 * {@link Autolinker#replaceFn replaceFn}. For example:
	 *
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( match ) {
	 *             var tag = match.buildTag();  // returns an {@link Autolinker.HtmlTag} instance
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *
	 *             return tag;
	 *         }
	 *     } );
	 *
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 */Autolinker.AnchorTagBuilder=Autolinker.Util.extend(Object,{/**
		 * @cfg {Boolean} newWindow
		 * @inheritdoc Autolinker#newWindow
		 *//**
		 * @cfg {Object} truncate
		 * @inheritdoc Autolinker#truncate
		 *//**
		 * @cfg {String} className
		 * @inheritdoc Autolinker#className
		 *//**
		 * @constructor
		 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
		 */constructor:function constructor(cfg){cfg=cfg||{};this.newWindow=cfg.newWindow;this.truncate=cfg.truncate;this.className=cfg.className;},/**
		 * Generates the actual anchor (&lt;a&gt;) tag to use in place of the
		 * matched text, via its `match` object.
		 *
		 * @param {Autolinker.match.Match} match The Match instance to generate an
		 *   anchor tag from.
		 * @return {Autolinker.HtmlTag} The HtmlTag instance for the anchor tag.
		 */build:function build(match){return new Autolinker.HtmlTag({tagName:'a',attrs:this.createAttrs(match),innerHtml:this.processAnchorText(match.getAnchorText())});},/**
		 * Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;)
		 *   tag being generated.
		 *
		 * @protected
		 * @param {Autolinker.match.Match} match The Match instance to generate an
		 *   anchor tag from.
		 * @return {Object} A key/value Object (map) of the anchor tag's attributes.
		 */createAttrs:function createAttrs(match){var attrs={'href':match.getAnchorHref()// we'll always have the `href` attribute
	};var cssClass=this.createCssClass(match);if(cssClass){attrs['class']=cssClass;}if(this.newWindow){attrs['target']="_blank";attrs['rel']="noopener noreferrer";}if(this.truncate){if(this.truncate.length&&this.truncate.length<match.getAnchorText().length){attrs['title']=match.getAnchorHref();}}return attrs;},/**
		 * Creates the CSS class that will be used for a given anchor tag, based on
		 * the `matchType` and the {@link #className} config.
		 *
		 * Example returns:
		 *
		 * - ""                                      // no {@link #className}
		 * - "myLink myLink-url"                     // url match
		 * - "myLink myLink-email"                   // email match
		 * - "myLink myLink-phone"                   // phone match
		 * - "myLink myLink-hashtag"                 // hashtag match
		 * - "myLink myLink-mention myLink-twitter"  // mention match with Twitter service
		 *
		 * @private
		 * @param {Autolinker.match.Match} match The Match instance to generate an
		 *   anchor tag from.
		 * @return {String} The CSS class string for the link. Example return:
		 *   "myLink myLink-url". If no {@link #className} was configured, returns
		 *   an empty string.
		 */createCssClass:function createCssClass(match){var className=this.className;if(!className){return"";}else{var returnClasses=[className],cssClassSuffixes=match.getCssClassSuffixes();for(var i=0,len=cssClassSuffixes.length;i<len;i++){returnClasses.push(className+'-'+cssClassSuffixes[i]);}return returnClasses.join(' ');}},/**
		 * Processes the `anchorText` by truncating the text according to the
		 * {@link #truncate} config.
		 *
		 * @private
		 * @param {String} anchorText The anchor tag's text (i.e. what will be
		 *   displayed).
		 * @return {String} The processed `anchorText`.
		 */processAnchorText:function processAnchorText(anchorText){anchorText=this.doTruncate(anchorText);return anchorText;},/**
		 * Performs the truncation of the `anchorText` based on the {@link #truncate}
		 * option. If the `anchorText` is longer than the length specified by the
		 * {@link #truncate} option, the truncation is performed based on the
		 * `location` property. See {@link #truncate} for details.
		 *
		 * @private
		 * @param {String} anchorText The anchor tag's text (i.e. what will be
		 *   displayed).
		 * @return {String} The truncated anchor text.
		 */doTruncate:function doTruncate(anchorText){var truncate=this.truncate;if(!truncate||!truncate.length)return anchorText;var truncateLength=truncate.length,truncateLocation=truncate.location;if(truncateLocation==='smart'){return Autolinker.truncate.TruncateSmart(anchorText,truncateLength);}else if(truncateLocation==='middle'){return Autolinker.truncate.TruncateMiddle(anchorText,truncateLength);}else{return Autolinker.truncate.TruncateEnd(anchorText,truncateLength);}}});/*global Autolinker *//**
	 * @class Autolinker.htmlParser.HtmlParser
	 * @extends Object
	 *
	 * An HTML parser implementation which simply walks an HTML string and returns an array of
	 * {@link Autolinker.htmlParser.HtmlNode HtmlNodes} that represent the basic HTML structure of the input string.
	 *
	 * Autolinker uses this to only link URLs/emails/mentions within text nodes, effectively ignoring / "walking
	 * around" HTML tags.
	 */Autolinker.htmlParser.HtmlParser=Autolinker.Util.extend(Object,{/**
		 * @private
		 * @property {RegExp} htmlRegex
		 *
		 * The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and
		 * attribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.
		 *
		 * Capturing groups:
		 *
		 * 1. The "!DOCTYPE" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.
		 * 2. If it is an end tag, this group will have the '/'.
		 * 3. If it is a comment tag, this group will hold the comment text (i.e.
		 *    the text inside the `&lt;!--` and `--&gt;`.
		 * 4. The tag name for a tag without attributes (other than the &lt;!DOCTYPE&gt; tag)
		 * 5. The tag name for a tag with attributes (other than the &lt;!DOCTYPE&gt; tag)
		 */htmlRegex:function(){var commentTagRegex=/!--([\s\S]+?)--/,tagNameRegex=/[0-9a-zA-Z][0-9a-zA-Z:]*/,attrNameRegex=/[^\s"'>\/=\x00-\x1F\x7F]+/,// the unicode range accounts for excluding control chars, and the delete char
	attrValueRegex=/(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/,// double quoted, single quoted, or unquoted attribute values
	nameEqualsValueRegex=attrNameRegex.source+'(?:\\s*=\\s*'+attrValueRegex.source+')?';// optional '=[value]'
	return new RegExp([// for <!DOCTYPE> tag. Ex: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">)
	'(?:','<(!DOCTYPE)',// *** Capturing Group 1 - If it's a doctype tag
	// Zero or more attributes following the tag name
	'(?:','\\s+',// one or more whitespace chars before an attribute
	// Either:
	// A. attr="value", or
	// B. "value" alone (To cover example doctype tag: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">)
	'(?:',nameEqualsValueRegex,'|',attrValueRegex.source+')',')*','>',')','|',// All other HTML tags (i.e. tags that are not <!DOCTYPE>)
	'(?:','<(/)?',// Beginning of a tag or comment. Either '<' for a start tag, or '</' for an end tag.
	// *** Capturing Group 2: The slash or an empty string. Slash ('/') for end tag, empty string for start or self-closing tag.
	'(?:',commentTagRegex.source,// *** Capturing Group 3 - A Comment Tag's Text
	'|',// Handle tag without attributes.
	// Doing this separately from a tag that has attributes
	// to fix a regex time complexity issue seen with the
	// example in https://github.com/gregjacobs/Autolinker.js/issues/172
	'(?:',// *** Capturing Group 4 - The tag name for a tag without attributes
	'('+tagNameRegex.source+')','\\s*/?',// any trailing spaces and optional '/' before the closing '>'
	')','|',// Handle tag with attributes
	// Doing this separately from a tag with no attributes
	// to fix a regex time complexity issue seen with the
	// example in https://github.com/gregjacobs/Autolinker.js/issues/172
	'(?:',// *** Capturing Group 5 - The tag name for a tag with attributes
	'('+tagNameRegex.source+')','\\s+',// must have at least one space after the tag name to prevent ReDoS issue (issue #172)
	// Zero or more attributes following the tag name
	'(?:','(?:\\s+|\\b)',// any number of whitespace chars before an attribute. NOTE: Using \s* here throws Chrome into an infinite loop for some reason, so using \s+|\b instead
	nameEqualsValueRegex,// attr="value" (with optional ="value" part)
	')*','\\s*/?',// any trailing spaces and optional '/' before the closing '>'
	')',')','>',')'].join(""),'gi');}(),/**
		 * @private
		 * @property {RegExp} htmlCharacterEntitiesRegex
		 *
		 * The regular expression that matches common HTML character entities.
		 *
		 * Ignoring &amp; as it could be part of a query string -- handling it separately.
		 */htmlCharacterEntitiesRegex:/(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,/**
		 * Parses an HTML string and returns a simple array of {@link Autolinker.htmlParser.HtmlNode HtmlNodes}
		 * to represent the HTML structure of the input string.
		 *
		 * @param {String} html The HTML to parse.
		 * @return {Autolinker.htmlParser.HtmlNode[]}
		 */parse:function parse(html){var htmlRegex=this.htmlRegex,currentResult,lastIndex=0,textAndEntityNodes,nodes=[];// will be the result of the method
	while((currentResult=htmlRegex.exec(html))!==null){var tagText=currentResult[0],commentText=currentResult[3],// if we've matched a comment
	tagName=currentResult[1]||currentResult[4]||currentResult[5],// The <!DOCTYPE> tag (ex: "!DOCTYPE"), or another tag (ex: "a" or "img")
	isClosingTag=!!currentResult[2],offset=currentResult.index,inBetweenTagsText=html.substring(lastIndex,offset);// Push TextNodes and EntityNodes for any text found between tags
	if(inBetweenTagsText){textAndEntityNodes=this.parseTextAndEntityNodes(lastIndex,inBetweenTagsText);nodes.push.apply(nodes,textAndEntityNodes);}// Push the CommentNode or ElementNode
	if(commentText){nodes.push(this.createCommentNode(offset,tagText,commentText));}else{nodes.push(this.createElementNode(offset,tagText,tagName,isClosingTag));}lastIndex=offset+tagText.length;}// Process any remaining text after the last HTML element. Will process all of the text if there were no HTML elements.
	if(lastIndex<html.length){var text=html.substring(lastIndex);// Push TextNodes and EntityNodes for any text found between tags
	if(text){textAndEntityNodes=this.parseTextAndEntityNodes(lastIndex,text);// Note: the following 3 lines were previously:
	//   nodes.push.apply( nodes, textAndEntityNodes );
	// but this was causing a "Maximum Call Stack Size Exceeded"
	// error on inputs with a large number of html entities.
	textAndEntityNodes.forEach(function(node){nodes.push(node);});}}return nodes;},/**
		 * Parses text and HTML entity nodes from a given string. The input string
		 * should not have any HTML tags (elements) within it.
		 *
		 * @private
		 * @param {Number} offset The offset of the text node match within the
		 *   original HTML string.
		 * @param {String} text The string of text to parse. This is from an HTML
		 *   text node.
		 * @return {Autolinker.htmlParser.HtmlNode[]} An array of HtmlNodes to
		 *   represent the {@link Autolinker.htmlParser.TextNode TextNodes} and
		 *   {@link Autolinker.htmlParser.EntityNode EntityNodes} found.
		 */parseTextAndEntityNodes:function parseTextAndEntityNodes(offset,text){var nodes=[],textAndEntityTokens=Autolinker.Util.splitAndCapture(text,this.htmlCharacterEntitiesRegex);// split at HTML entities, but include the HTML entities in the results array
	// Every even numbered token is a TextNode, and every odd numbered token is an EntityNode
	// For example: an input `text` of "Test &quot;this&quot; today" would turn into the
	//   `textAndEntityTokens`: [ 'Test ', '&quot;', 'this', '&quot;', ' today' ]
	for(var i=0,len=textAndEntityTokens.length;i<len;i+=2){var textToken=textAndEntityTokens[i],entityToken=textAndEntityTokens[i+1];if(textToken){nodes.push(this.createTextNode(offset,textToken));offset+=textToken.length;}if(entityToken){nodes.push(this.createEntityNode(offset,entityToken));offset+=entityToken.length;}}return nodes;},/**
		 * Factory method to create an {@link Autolinker.htmlParser.CommentNode CommentNode}.
		 *
		 * @private
		 * @param {Number} offset The offset of the match within the original HTML
		 *   string.
		 * @param {String} tagText The full text of the tag (comment) that was
		 *   matched, including its &lt;!-- and --&gt;.
		 * @param {String} commentText The full text of the comment that was matched.
		 */createCommentNode:function createCommentNode(offset,tagText,commentText){return new Autolinker.htmlParser.CommentNode({offset:offset,text:tagText,comment:Autolinker.Util.trim(commentText)});},/**
		 * Factory method to create an {@link Autolinker.htmlParser.ElementNode ElementNode}.
		 *
		 * @private
		 * @param {Number} offset The offset of the match within the original HTML
		 *   string.
		 * @param {String} tagText The full text of the tag (element) that was
		 *   matched, including its attributes.
		 * @param {String} tagName The name of the tag. Ex: An &lt;img&gt; tag would
		 *   be passed to this method as "img".
		 * @param {Boolean} isClosingTag `true` if it's a closing tag, false
		 *   otherwise.
		 * @return {Autolinker.htmlParser.ElementNode}
		 */createElementNode:function createElementNode(offset,tagText,tagName,isClosingTag){return new Autolinker.htmlParser.ElementNode({offset:offset,text:tagText,tagName:tagName.toLowerCase(),closing:isClosingTag});},/**
		 * Factory method to create a {@link Autolinker.htmlParser.EntityNode EntityNode}.
		 *
		 * @private
		 * @param {Number} offset The offset of the match within the original HTML
		 *   string.
		 * @param {String} text The text that was matched for the HTML entity (such
		 *   as '&amp;nbsp;').
		 * @return {Autolinker.htmlParser.EntityNode}
		 */createEntityNode:function createEntityNode(offset,text){return new Autolinker.htmlParser.EntityNode({offset:offset,text:text});},/**
		 * Factory method to create a {@link Autolinker.htmlParser.TextNode TextNode}.
		 *
		 * @private
		 * @param {Number} offset The offset of the match within the original HTML
		 *   string.
		 * @param {String} text The text that was matched.
		 * @return {Autolinker.htmlParser.TextNode}
		 */createTextNode:function createTextNode(offset,text){return new Autolinker.htmlParser.TextNode({offset:offset,text:text});}});/*global Autolinker *//**
	 * @abstract
	 * @class Autolinker.htmlParser.HtmlNode
	 *
	 * Represents an HTML node found in an input string. An HTML node is one of the
	 * following:
	 *
	 * 1. An {@link Autolinker.htmlParser.ElementNode ElementNode}, which represents
	 *    HTML tags.
	 * 2. A {@link Autolinker.htmlParser.CommentNode CommentNode}, which represents
	 *    HTML comments.
	 * 3. A {@link Autolinker.htmlParser.TextNode TextNode}, which represents text
	 *    outside or within HTML tags.
	 * 4. A {@link Autolinker.htmlParser.EntityNode EntityNode}, which represents
	 *    one of the known HTML entities that Autolinker looks for. This includes
	 *    common ones such as &amp;quot; and &amp;nbsp;
	 */Autolinker.htmlParser.HtmlNode=Autolinker.Util.extend(Object,{/**
		 * @cfg {Number} offset (required)
		 *
		 * The offset of the HTML node in the original text that was parsed.
		 */offset:undefined,/**
		 * @cfg {String} text (required)
		 *
		 * The text that was matched for the HtmlNode.
		 *
		 * - In the case of an {@link Autolinker.htmlParser.ElementNode ElementNode},
		 *   this will be the tag's text.
		 * - In the case of an {@link Autolinker.htmlParser.CommentNode CommentNode},
		 *   this will be the comment's text.
		 * - In the case of a {@link Autolinker.htmlParser.TextNode TextNode}, this
		 *   will be the text itself.
		 * - In the case of a {@link Autolinker.htmlParser.EntityNode EntityNode},
		 *   this will be the text of the HTML entity.
		 */text:undefined,/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance,
		 * specified in an Object (map).
		 */constructor:function constructor(cfg){Autolinker.Util.assign(this,cfg);if(this.offset==null)throw new Error('`offset` cfg required');if(this.text==null)throw new Error('`text` cfg required');},/**
		 * Returns a string name for the type of node that this class represents.
		 *
		 * @abstract
		 * @return {String}
		 */getType:Autolinker.Util.abstractMethod,/**
		 * Retrieves the {@link #offset} of the HtmlNode. This is the offset of the
		 * HTML node in the original string that was parsed.
		 *
		 * @return {Number}
		 */getOffset:function getOffset(){return this.offset;},/**
		 * Retrieves the {@link #text} for the HtmlNode.
		 *
		 * @return {String}
		 */getText:function getText(){return this.text;}});/*global Autolinker *//**
	 * @class Autolinker.htmlParser.CommentNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 *
	 * Represents an HTML comment node that has been parsed by the
	 * {@link Autolinker.htmlParser.HtmlParser}.
	 *
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more
	 * details.
	 */Autolinker.htmlParser.CommentNode=Autolinker.Util.extend(Autolinker.htmlParser.HtmlNode,{/**
		 * @cfg {String} comment (required)
		 *
		 * The text inside the comment tag. This text is stripped of any leading or
		 * trailing whitespace.
		 */comment:'',/**
		 * Returns a string name for the type of node that this class represents.
		 *
		 * @return {String}
		 */getType:function getType(){return'comment';},/**
		 * Returns the comment inside the comment tag.
		 *
		 * @return {String}
		 */getComment:function getComment(){return this.comment;}});/*global Autolinker *//**
	 * @class Autolinker.htmlParser.ElementNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 *
	 * Represents an HTML element node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 *
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more
	 * details.
	 */Autolinker.htmlParser.ElementNode=Autolinker.Util.extend(Autolinker.htmlParser.HtmlNode,{/**
		 * @cfg {String} tagName (required)
		 *
		 * The name of the tag that was matched.
		 */tagName:'',/**
		 * @cfg {Boolean} closing (required)
		 *
		 * `true` if the element (tag) is a closing tag, `false` if its an opening
		 * tag.
		 */closing:false,/**
		 * Returns a string name for the type of node that this class represents.
		 *
		 * @return {String}
		 */getType:function getType(){return'element';},/**
		 * Returns the HTML element's (tag's) name. Ex: for an &lt;img&gt; tag,
		 * returns "img".
		 *
		 * @return {String}
		 */getTagName:function getTagName(){return this.tagName;},/**
		 * Determines if the HTML element (tag) is a closing tag. Ex: &lt;div&gt;
		 * returns `false`, while &lt;/div&gt; returns `true`.
		 *
		 * @return {Boolean}
		 */isClosing:function isClosing(){return this.closing;}});/*global Autolinker *//**
	 * @class Autolinker.htmlParser.EntityNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 *
	 * Represents a known HTML entity node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * Ex: '&amp;nbsp;', or '&amp#160;' (which will be retrievable from the {@link #getText}
	 * method.
	 *
	 * Note that this class will only be returned from the HtmlParser for the set of
	 * checked HTML entity nodes  defined by the {@link Autolinker.htmlParser.HtmlParser#htmlCharacterEntitiesRegex}.
	 *
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more
	 * details.
	 */Autolinker.htmlParser.EntityNode=Autolinker.Util.extend(Autolinker.htmlParser.HtmlNode,{/**
		 * Returns a string name for the type of node that this class represents.
		 *
		 * @return {String}
		 */getType:function getType(){return'entity';}});/*global Autolinker *//**
	 * @class Autolinker.htmlParser.TextNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 *
	 * Represents a text node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 *
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more
	 * details.
	 */Autolinker.htmlParser.TextNode=Autolinker.Util.extend(Autolinker.htmlParser.HtmlNode,{/**
		 * Returns a string name for the type of node that this class represents.
		 *
		 * @return {String}
		 */getType:function getType(){return'text';}});/*global Autolinker *//**
	 * @abstract
	 * @class Autolinker.match.Match
	 *
	 * Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a
	 * {@link Autolinker#replaceFn replaceFn}, and may be used to query for details about the match.
	 *
	 * For example:
	 *
	 *     var input = "...";  // string with URLs, Email Addresses, and Mentions (Twitter, Instagram)
	 *
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *
	 *             switch( match.getType() ) {
	 *                 case 'url' :
	 *                     console.log( "url: ", match.getUrl() );
	 *
	 *                 case 'email' :
	 *                     console.log( "email: ", match.getEmail() );
	 *
	 *                 case 'mention' :
	 *                     console.log( "mention: ", match.getMention() );
	 *             }
	 *         }
	 *     } );
	 *
	 * See the {@link Autolinker} class for more details on using the {@link Autolinker#replaceFn replaceFn}.
	 */Autolinker.match.Match=Autolinker.Util.extend(Object,{/**
		 * @cfg {Autolinker.AnchorTagBuilder} tagBuilder (required)
		 *
		 * Reference to the AnchorTagBuilder instance to use to generate an anchor
		 * tag for the Match.
		 *//**
		 * @cfg {String} matchedText (required)
		 *
		 * The original text that was matched by the {@link Autolinker.matcher.Matcher}.
		 *//**
		 * @cfg {Number} offset (required)
		 *
		 * The offset of where the match was made in the input string.
		 *//**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match
		 *   instance, specified in an Object (map).
		 */constructor:function constructor(cfg){if(cfg.tagBuilder==null)throw new Error('`tagBuilder` cfg required');if(cfg.matchedText==null)throw new Error('`matchedText` cfg required');if(cfg.offset==null)throw new Error('`offset` cfg required');this.tagBuilder=cfg.tagBuilder;this.matchedText=cfg.matchedText;this.offset=cfg.offset;},/**
		 * Returns a string name for the type of match that this class represents.
		 *
		 * @abstract
		 * @return {String}
		 */getType:Autolinker.Util.abstractMethod,/**
		 * Returns the original text that was matched.
		 *
		 * @return {String}
		 */getMatchedText:function getMatchedText(){return this.matchedText;},/**
		 * Sets the {@link #offset} of where the match was made in the input string.
		 *
		 * A {@link Autolinker.matcher.Matcher} will be fed only HTML text nodes,
		 * and will therefore set an original offset that is relative to the HTML
		 * text node itself. However, we want this offset to be relative to the full
		 * HTML input string, and thus if using {@link Autolinker#parse} (rather
		 * than calling a {@link Autolinker.matcher.Matcher} directly), then this
		 * offset is corrected after the Matcher itself has done its job.
		 *
		 * @param {Number} offset
		 */setOffset:function setOffset(offset){this.offset=offset;},/**
		 * Returns the offset of where the match was made in the input string. This
		 * is the 0-based index of the match.
		 *
		 * @return {Number}
		 */getOffset:function getOffset(){return this.offset;},/**
		 * Returns the anchor href that should be generated for the match.
		 *
		 * @abstract
		 * @return {String}
		 */getAnchorHref:Autolinker.Util.abstractMethod,/**
		 * Returns the anchor text that should be generated for the match.
		 *
		 * @abstract
		 * @return {String}
		 */getAnchorText:Autolinker.Util.abstractMethod,/**
		 * Returns the CSS class suffix(es) for this match.
		 *
		 * A CSS class suffix is appended to the {@link Autolinker#className} in
		 * the {@link Autolinker.AnchorTagBuilder} when a match is translated into
		 * an anchor tag.
		 *
		 * For example, if {@link Autolinker#className} was configured as 'myLink',
		 * and this method returns `[ 'url' ]`, the final class name of the element
		 * will become: 'myLink myLink-url'.
		 *
		 * The match may provide multiple CSS class suffixes to be appended to the
		 * {@link Autolinker#className} in order to facilitate better styling
		 * options for different match criteria. See {@link Autolinker.match.Mention}
		 * for an example.
		 *
		 * By default, this method returns a single array with the match's
		 * {@link #getType type} name, but may be overridden by subclasses.
		 *
		 * @return {String[]}
		 */getCssClassSuffixes:function getCssClassSuffixes(){return[this.getType()];},/**
		 * Builds and returns an {@link Autolinker.HtmlTag} instance based on the
		 * Match.
		 *
		 * This can be used to easily generate anchor tags from matches, and either
		 * return their HTML string, or modify them before doing so.
		 *
		 * Example Usage:
		 *
		 *     var tag = match.buildTag();
		 *     tag.addClass( 'cordova-link' );
		 *     tag.setAttr( 'target', '_system' );
		 *
		 *     tag.toAnchorString();  // <a href="http://google.com" class="cordova-link" target="_system">Google</a>
		 */buildTag:function buildTag(){return this.tagBuilder.build(this);}});/*global Autolinker *//**
	 * @class Autolinker.match.Email
	 * @extends Autolinker.match.Match
	 *
	 * Represents a Email match found in an input string which should be Autolinked.
	 *
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */Autolinker.match.Email=Autolinker.Util.extend(Autolinker.match.Match,{/**
		 * @cfg {String} email (required)
		 *
		 * The email address that was matched.
		 *//**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match
		 *   instance, specified in an Object (map).
		 */constructor:function constructor(cfg){Autolinker.match.Match.prototype.constructor.call(this,cfg);if(!cfg.email)throw new Error('`email` cfg required');this.email=cfg.email;},/**
		 * Returns a string name for the type of match that this class represents.
		 *
		 * @return {String}
		 */getType:function getType(){return'email';},/**
		 * Returns the email address that was matched.
		 *
		 * @return {String}
		 */getEmail:function getEmail(){return this.email;},/**
		 * Returns the anchor href that should be generated for the match.
		 *
		 * @return {String}
		 */getAnchorHref:function getAnchorHref(){return'mailto:'+this.email;},/**
		 * Returns the anchor text that should be generated for the match.
		 *
		 * @return {String}
		 */getAnchorText:function getAnchorText(){return this.email;}});/*global Autolinker *//**
	 * @class Autolinker.match.Hashtag
	 * @extends Autolinker.match.Match
	 *
	 * Represents a Hashtag match found in an input string which should be
	 * Autolinked.
	 *
	 * See this class's superclass ({@link Autolinker.match.Match}) for more
	 * details.
	 */Autolinker.match.Hashtag=Autolinker.Util.extend(Autolinker.match.Match,{/**
		 * @cfg {String} serviceName
		 *
		 * The service to point hashtag matches to. See {@link Autolinker#hashtag}
		 * for available values.
		 *//**
		 * @cfg {String} hashtag (required)
		 *
		 * The Hashtag that was matched, without the '#'.
		 *//**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match
		 *   instance, specified in an Object (map).
		 */constructor:function constructor(cfg){Autolinker.match.Match.prototype.constructor.call(this,cfg);// TODO: if( !serviceName ) throw new Error( '`serviceName` cfg required' );
	if(!cfg.hashtag)throw new Error('`hashtag` cfg required');this.serviceName=cfg.serviceName;this.hashtag=cfg.hashtag;},/**
		 * Returns the type of match that this class represents.
		 *
		 * @return {String}
		 */getType:function getType(){return'hashtag';},/**
		 * Returns the configured {@link #serviceName} to point the Hashtag to.
		 * Ex: 'facebook', 'twitter'.
		 *
		 * @return {String}
		 */getServiceName:function getServiceName(){return this.serviceName;},/**
		 * Returns the matched hashtag, without the '#' character.
		 *
		 * @return {String}
		 */getHashtag:function getHashtag(){return this.hashtag;},/**
		 * Returns the anchor href that should be generated for the match.
		 *
		 * @return {String}
		 */getAnchorHref:function getAnchorHref(){var serviceName=this.serviceName,hashtag=this.hashtag;switch(serviceName){case'twitter':return'https://twitter.com/hashtag/'+hashtag;case'facebook':return'https://www.facebook.com/hashtag/'+hashtag;case'instagram':return'https://instagram.com/explore/tags/'+hashtag;default:// Shouldn't happen because Autolinker's constructor should block any invalid values, but just in case.
	throw new Error('Unknown service name to point hashtag to: ',serviceName);}},/**
		 * Returns the anchor text that should be generated for the match.
		 *
		 * @return {String}
		 */getAnchorText:function getAnchorText(){return'#'+this.hashtag;}});/*global Autolinker *//**
	 * @class Autolinker.match.Phone
	 * @extends Autolinker.match.Match
	 *
	 * Represents a Phone number match found in an input string which should be
	 * Autolinked.
	 *
	 * See this class's superclass ({@link Autolinker.match.Match}) for more
	 * details.
	 */Autolinker.match.Phone=Autolinker.Util.extend(Autolinker.match.Match,{/**
		 * @protected
		 * @property {String} number (required)
		 *
		 * The phone number that was matched, without any delimiter characters.
		 *
		 * Note: This is a string to allow for prefixed 0's.
		 *//**
		 * @protected
		 * @property  {Boolean} plusSign (required)
		 *
		 * `true` if the matched phone number started with a '+' sign. We'll include
		 * it in the `tel:` URL if so, as this is needed for international numbers.
		 *
		 * Ex: '+1 (123) 456 7879'
		 *//**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match
		 *   instance, specified in an Object (map).
		 */constructor:function constructor(cfg){Autolinker.match.Match.prototype.constructor.call(this,cfg);if(!cfg.number)throw new Error('`number` cfg required');if(cfg.plusSign==null)throw new Error('`plusSign` cfg required');this.number=cfg.number;this.plusSign=cfg.plusSign;},/**
		 * Returns a string name for the type of match that this class represents.
		 *
		 * @return {String}
		 */getType:function getType(){return'phone';},/**
		 * Returns the phone number that was matched as a string, without any
		 * delimiter characters.
		 *
		 * Note: This is a string to allow for prefixed 0's.
		 *
		 * @return {String}
		 */getNumber:function getNumber(){return this.number;},/**
		 * Returns the anchor href that should be generated for the match.
		 *
		 * @return {String}
		 */getAnchorHref:function getAnchorHref(){return'tel:'+(this.plusSign?'+':'')+this.number;},/**
		 * Returns the anchor text that should be generated for the match.
		 *
		 * @return {String}
		 */getAnchorText:function getAnchorText(){return this.matchedText;}});/*global Autolinker *//**
	 * @class Autolinker.match.Mention
	 * @extends Autolinker.match.Match
	 *
	 * Represents a Mention match found in an input string which should be Autolinked.
	 *
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */Autolinker.match.Mention=Autolinker.Util.extend(Autolinker.match.Match,{/**
		 * @cfg {String} serviceName
		 *
		 * The service to point mention matches to. See {@link Autolinker#mention}
		 * for available values.
		 *//**
		 * @cfg {String} mention (required)
		 *
		 * The Mention that was matched, without the '@' character.
		 *//**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match
		 *   instance, specified in an Object (map).
		 */constructor:function constructor(cfg){Autolinker.match.Match.prototype.constructor.call(this,cfg);if(!cfg.serviceName)throw new Error('`serviceName` cfg required');if(!cfg.mention)throw new Error('`mention` cfg required');this.mention=cfg.mention;this.serviceName=cfg.serviceName;},/**
		 * Returns the type of match that this class represents.
		 *
		 * @return {String}
		 */getType:function getType(){return'mention';},/**
		 * Returns the mention, without the '@' character.
		 *
		 * @return {String}
		 */getMention:function getMention(){return this.mention;},/**
		 * Returns the configured {@link #serviceName} to point the mention to.
		 * Ex: 'instagram', 'twitter'.
		 *
		 * @return {String}
		 */getServiceName:function getServiceName(){return this.serviceName;},/**
		 * Returns the anchor href that should be generated for the match.
		 *
		 * @return {String}
		 */getAnchorHref:function getAnchorHref(){switch(this.serviceName){case'twitter':return'https://twitter.com/'+this.mention;case'instagram':return'https://instagram.com/'+this.mention;default:// Shouldn't happen because Autolinker's constructor should block any invalid values, but just in case.
	throw new Error('Unknown service name to point mention to: ',this.serviceName);}},/**
		 * Returns the anchor text that should be generated for the match.
		 *
		 * @return {String}
		 */getAnchorText:function getAnchorText(){return'@'+this.mention;},/**
		 * Returns the CSS class suffixes that should be used on a tag built with
		 * the match. See {@link Autolinker.match.Match#getCssClassSuffixes} for
		 * details.
		 *
		 * @return {String[]}
		 */getCssClassSuffixes:function getCssClassSuffixes(){var cssClassSuffixes=Autolinker.match.Match.prototype.getCssClassSuffixes.call(this),serviceName=this.getServiceName();if(serviceName){cssClassSuffixes.push(serviceName);}return cssClassSuffixes;}});/*global Autolinker *//**
	 * @class Autolinker.match.Url
	 * @extends Autolinker.match.Match
	 *
	 * Represents a Url match found in an input string which should be Autolinked.
	 *
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */Autolinker.match.Url=Autolinker.Util.extend(Autolinker.match.Match,{/**
		 * @cfg {String} url (required)
		 *
		 * The url that was matched.
		 *//**
		 * @cfg {"scheme"/"www"/"tld"} urlMatchType (required)
		 *
		 * The type of URL match that this class represents. This helps to determine
		 * if the match was made in the original text with a prefixed scheme (ex:
		 * 'http://www.google.com'), a prefixed 'www' (ex: 'www.google.com'), or
		 * was matched by a known top-level domain (ex: 'google.com').
		 *//**
		 * @cfg {Boolean} protocolUrlMatch (required)
		 *
		 * `true` if the URL is a match which already has a protocol (i.e.
		 * 'http://'), `false` if the match was from a 'www' or known TLD match.
		 *//**
		 * @cfg {Boolean} protocolRelativeMatch (required)
		 *
		 * `true` if the URL is a protocol-relative match. A protocol-relative match
		 * is a URL that starts with '//', and will be either http:// or https://
		 * based on the protocol that the site is loaded under.
		 *//**
		 * @cfg {Object} stripPrefix (required)
		 *
		 * The Object form of {@link Autolinker#cfg-stripPrefix}.
		 *//**
		 * @cfg {Boolean} stripTrailingSlash (required)
		 * @inheritdoc Autolinker#cfg-stripTrailingSlash
		 *//**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match
		 *   instance, specified in an Object (map).
		 */constructor:function constructor(cfg){Autolinker.match.Match.prototype.constructor.call(this,cfg);if(cfg.urlMatchType!=='scheme'&&cfg.urlMatchType!=='www'&&cfg.urlMatchType!=='tld')throw new Error('`urlMatchType` cfg must be one of: "scheme", "www", or "tld"');if(!cfg.url)throw new Error('`url` cfg required');if(cfg.protocolUrlMatch==null)throw new Error('`protocolUrlMatch` cfg required');if(cfg.protocolRelativeMatch==null)throw new Error('`protocolRelativeMatch` cfg required');if(cfg.stripPrefix==null)throw new Error('`stripPrefix` cfg required');if(cfg.stripTrailingSlash==null)throw new Error('`stripTrailingSlash` cfg required');this.urlMatchType=cfg.urlMatchType;this.url=cfg.url;this.protocolUrlMatch=cfg.protocolUrlMatch;this.protocolRelativeMatch=cfg.protocolRelativeMatch;this.stripPrefix=cfg.stripPrefix;this.stripTrailingSlash=cfg.stripTrailingSlash;},/**
		 * @private
		 * @property {RegExp} schemePrefixRegex
		 *
		 * A regular expression used to remove the 'http://' or 'https://' from
		 * URLs.
		 */schemePrefixRegex:/^(https?:\/\/)?/i,/**
		 * @private
		 * @property {RegExp} wwwPrefixRegex
		 *
		 * A regular expression used to remove the 'www.' from URLs.
		 */wwwPrefixRegex:/^(https?:\/\/)?(www\.)?/i,/**
		 * @private
		 * @property {RegExp} protocolRelativeRegex
		 *
		 * The regular expression used to remove the protocol-relative '//' from the {@link #url} string, for purposes
		 * of {@link #getAnchorText}. A protocol-relative URL is, for example, "//yahoo.com"
		 */protocolRelativeRegex:/^\/\//,/**
		 * @private
		 * @property {Boolean} protocolPrepended
		 *
		 * Will be set to `true` if the 'http://' protocol has been prepended to the {@link #url} (because the
		 * {@link #url} did not have a protocol)
		 */protocolPrepended:false,/**
		 * Returns a string name for the type of match that this class represents.
		 *
		 * @return {String}
		 */getType:function getType(){return'url';},/**
		 * Returns a string name for the type of URL match that this class
		 * represents.
		 *
		 * This helps to determine if the match was made in the original text with a
		 * prefixed scheme (ex: 'http://www.google.com'), a prefixed 'www' (ex:
		 * 'www.google.com'), or was matched by a known top-level domain (ex:
		 * 'google.com').
		 *
		 * @return {"scheme"/"www"/"tld"}
		 */getUrlMatchType:function getUrlMatchType(){return this.urlMatchType;},/**
		 * Returns the url that was matched, assuming the protocol to be 'http://' if the original
		 * match was missing a protocol.
		 *
		 * @return {String}
		 */getUrl:function getUrl(){var url=this.url;// if the url string doesn't begin with a protocol, assume 'http://'
	if(!this.protocolRelativeMatch&&!this.protocolUrlMatch&&!this.protocolPrepended){url=this.url='http://'+url;this.protocolPrepended=true;}return url;},/**
		 * Returns the anchor href that should be generated for the match.
		 *
		 * @return {String}
		 */getAnchorHref:function getAnchorHref(){var url=this.getUrl();return url.replace(/&amp;/g,'&');// any &amp;'s in the URL should be converted back to '&' if they were displayed as &amp; in the source html
	},/**
		 * Returns the anchor text that should be generated for the match.
		 *
		 * @return {String}
		 */getAnchorText:function getAnchorText(){var anchorText=this.getMatchedText();if(this.protocolRelativeMatch){// Strip off any protocol-relative '//' from the anchor text
	anchorText=this.stripProtocolRelativePrefix(anchorText);}if(this.stripPrefix.scheme){anchorText=this.stripSchemePrefix(anchorText);}if(this.stripPrefix.www){anchorText=this.stripWwwPrefix(anchorText);}if(this.stripTrailingSlash){anchorText=this.removeTrailingSlash(anchorText);// remove trailing slash, if there is one
	}return anchorText;},// ---------------------------------------
	// Utility Functionality
	/**
		 * Strips the scheme prefix (such as "http://" or "https://") from the given
		 * `url`.
		 *
		 * @private
		 * @param {String} url The text of the anchor that is being generated, for
		 *   which to strip off the url scheme.
		 * @return {String} The `url`, with the scheme stripped.
		 */stripSchemePrefix:function stripSchemePrefix(url){return url.replace(this.schemePrefixRegex,'');},/**
		 * Strips the 'www' prefix from the given `url`.
		 *
		 * @private
		 * @param {String} url The text of the anchor that is being generated, for
		 *   which to strip off the 'www' if it exists.
		 * @return {String} The `url`, with the 'www' stripped.
		 */stripWwwPrefix:function stripWwwPrefix(url){return url.replace(this.wwwPrefixRegex,'$1');// leave any scheme ($1), it one exists
	},/**
		 * Strips any protocol-relative '//' from the anchor text.
		 *
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   protocol-relative prefix (such as stripping off "//")
		 * @return {String} The `anchorText`, with the protocol-relative prefix stripped.
		 */stripProtocolRelativePrefix:function stripProtocolRelativePrefix(text){return text.replace(this.protocolRelativeRegex,'');},/**
		 * Removes any trailing slash from the given `anchorText`, in preparation for the text to be displayed.
		 *
		 * @private
		 * @param {String} anchorText The text of the anchor that is being generated, for which to remove any trailing
		 *   slash ('/') that may exist.
		 * @return {String} The `anchorText`, with the trailing slash removed.
		 */removeTrailingSlash:function removeTrailingSlash(anchorText){if(anchorText.charAt(anchorText.length-1)==='/'){anchorText=anchorText.slice(0,-1);}return anchorText;}});/*global Autolinker *//**
	 * @abstract
	 * @class Autolinker.matcher.Matcher
	 *
	 * An abstract class and interface for individual matchers to find matches in
	 * an input string with linkified versions of them.
	 *
	 * Note that Matchers do not take HTML into account - they must be fed the text
	 * nodes of any HTML string, which is handled by {@link Autolinker#parse}.
	 */Autolinker.matcher.Matcher=Autolinker.Util.extend(Object,{/**
		 * @cfg {Autolinker.AnchorTagBuilder} tagBuilder (required)
		 *
		 * Reference to the AnchorTagBuilder instance to use to generate HTML tags
		 * for {@link Autolinker.match.Match Matches}.
		 *//**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Matcher
		 *   instance, specified in an Object (map).
		 */constructor:function constructor(cfg){if(!cfg.tagBuilder)throw new Error('`tagBuilder` cfg required');this.tagBuilder=cfg.tagBuilder;},/**
		 * Parses the input `text` and returns the array of {@link Autolinker.match.Match Matches}
		 * for the matcher.
		 *
		 * @abstract
		 * @param {String} text The text to scan and replace matches in.
		 * @return {Autolinker.match.Match[]}
		 */parseMatches:Autolinker.Util.abstractMethod});/*global Autolinker *//**
	 * @class Autolinker.matcher.Email
	 * @extends Autolinker.matcher.Matcher
	 *
	 * Matcher to find email matches in an input string.
	 *
	 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more details.
	 */Autolinker.matcher.Email=Autolinker.Util.extend(Autolinker.matcher.Matcher,{/**
		 * The regular expression to match email addresses. Example match:
		 *
		 *     person@place.com
		 *
		 * @private
		 * @property {RegExp} matcherRegex
		 */matcherRegex:function(){var alphaNumericChars=Autolinker.RegexLib.alphaNumericCharsStr,emailRegex=new RegExp('['+alphaNumericChars+'\\-_\';:&=+$.,]+@'),// something@ for email addresses (a.k.a. local-part)
	domainNameRegex=Autolinker.RegexLib.domainNameRegex,tldRegex=Autolinker.RegexLib.tldRegex;// match our known top level domains (TLDs)
	return new RegExp([emailRegex.source,domainNameRegex.source,'\\.',tldRegex.source// '.com', '.net', etc
	].join(""),'gi');}(),/**
		 * @inheritdoc
		 */parseMatches:function parseMatches(text){var matcherRegex=this.matcherRegex,tagBuilder=this.tagBuilder,matches=[],match;while((match=matcherRegex.exec(text))!==null){var matchedText=match[0];matches.push(new Autolinker.match.Email({tagBuilder:tagBuilder,matchedText:matchedText,offset:match.index,email:matchedText}));}return matches;}});/*global Autolinker *//**
	 * @class Autolinker.matcher.Hashtag
	 * @extends Autolinker.matcher.Matcher
	 *
	 * Matcher to find Hashtag matches in an input string.
	 */Autolinker.matcher.Hashtag=Autolinker.Util.extend(Autolinker.matcher.Matcher,{/**
		 * @cfg {String} serviceName
		 *
		 * The service to point hashtag matches to. See {@link Autolinker#hashtag}
		 * for available values.
		 *//**
		 * The regular expression to match Hashtags. Example match:
		 *
		 *     #asdf
		 *
		 * @private
		 * @property {RegExp} matcherRegex
		 */matcherRegex:new RegExp('#[_'+Autolinker.RegexLib.alphaNumericCharsStr+']{1,139}','g'),/**
		 * The regular expression to use to check the character before a username match to
		 * make sure we didn't accidentally match an email address.
		 *
		 * For example, the string "asdf@asdf.com" should not match "@asdf" as a username.
		 *
		 * @private
		 * @property {RegExp} nonWordCharRegex
		 */nonWordCharRegex:new RegExp('[^'+Autolinker.RegexLib.alphaNumericCharsStr+']'),/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance,
		 *   specified in an Object (map).
		 */constructor:function constructor(cfg){Autolinker.matcher.Matcher.prototype.constructor.call(this,cfg);this.serviceName=cfg.serviceName;},/**
		 * @inheritdoc
		 */parseMatches:function parseMatches(text){var matcherRegex=this.matcherRegex,nonWordCharRegex=this.nonWordCharRegex,serviceName=this.serviceName,tagBuilder=this.tagBuilder,matches=[],match;while((match=matcherRegex.exec(text))!==null){var offset=match.index,prevChar=text.charAt(offset-1);// If we found the match at the beginning of the string, or we found the match
	// and there is a whitespace char in front of it (meaning it is not a '#' char
	// in the middle of a word), then it is a hashtag match.
	if(offset===0||nonWordCharRegex.test(prevChar)){var matchedText=match[0],hashtag=match[0].slice(1);// strip off the '#' character at the beginning
	matches.push(new Autolinker.match.Hashtag({tagBuilder:tagBuilder,matchedText:matchedText,offset:offset,serviceName:serviceName,hashtag:hashtag}));}}return matches;}});/*global Autolinker *//**
	 * @class Autolinker.matcher.Phone
	 * @extends Autolinker.matcher.Matcher
	 *
	 * Matcher to find Phone number matches in an input string.
	 *
	 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more
	 * details.
	 */Autolinker.matcher.Phone=Autolinker.Util.extend(Autolinker.matcher.Matcher,{/**
		 * The regular expression to match Phone numbers. Example match:
		 *
		 *     (123) 456-7890
		 *
		 * This regular expression has the following capturing groups:
		 *
		 * 1. The prefixed '+' sign, if there is one.
		 *
		 * @private
		 * @property {RegExp} matcherRegex
		 */matcherRegex:/(?:(\+)?\d{1,3}[-\040.]?)?\(?\d{3}\)?[-\040.]?\d{3}[-\040.]?\d{4}([,;]*[0-9]+#?)*/g,// ex: (123) 456-7890, 123 456 7890, 123-456-7890, +18004441234,,;,10226420346#, 
	// +1 (800) 444 1234, 10226420346#, 1-800-444-1234,1022,64,20346#
	/**
		 * @inheritdoc
		 */parseMatches:function parseMatches(text){var matcherRegex=this.matcherRegex,tagBuilder=this.tagBuilder,matches=[],match;while((match=matcherRegex.exec(text))!==null){// Remove non-numeric values from phone number string
	var matchedText=match[0],cleanNumber=matchedText.replace(/[^0-9,;#]/g,''),// strip out non-digit characters exclude comma semicolon and #
	plusSign=!!match[1];// match[ 1 ] is the prefixed plus sign, if there is one
	if(/\D/.test(match[2])&&/\D/.test(matchedText)){matches.push(new Autolinker.match.Phone({tagBuilder:tagBuilder,matchedText:matchedText,offset:match.index,number:cleanNumber,plusSign:plusSign}));}}return matches;}});/*global Autolinker *//**
	 * @class Autolinker.matcher.Mention
	 * @extends Autolinker.matcher.Matcher
	 *
	 * Matcher to find/replace username matches in an input string.
	 */Autolinker.matcher.Mention=Autolinker.Util.extend(Autolinker.matcher.Matcher,{/**
		 * Hash of regular expression to match username handles. Example match:
		 *
		 *     @asdf
		 *
		 * @private
		 * @property {Object} matcherRegexes
		 */matcherRegexes:{"twitter":new RegExp('@[_'+Autolinker.RegexLib.alphaNumericCharsStr+']{1,20}','g'),"instagram":new RegExp('@[_.'+Autolinker.RegexLib.alphaNumericCharsStr+']{1,50}','g')},/**
		 * The regular expression to use to check the character before a username match to
		 * make sure we didn't accidentally match an email address.
		 *
		 * For example, the string "asdf@asdf.com" should not match "@asdf" as a username.
		 *
		 * @private
		 * @property {RegExp} nonWordCharRegex
		 */nonWordCharRegex:new RegExp('[^'+Autolinker.RegexLib.alphaNumericCharsStr+']'),/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance,
		 *   specified in an Object (map).
		 */constructor:function constructor(cfg){Autolinker.matcher.Matcher.prototype.constructor.call(this,cfg);this.serviceName=cfg.serviceName;},/**
		 * @inheritdoc
		 */parseMatches:function parseMatches(text){var matcherRegex=this.matcherRegexes[this.serviceName],nonWordCharRegex=this.nonWordCharRegex,serviceName=this.serviceName,tagBuilder=this.tagBuilder,matches=[],match;if(!matcherRegex){return matches;}while((match=matcherRegex.exec(text))!==null){var offset=match.index,prevChar=text.charAt(offset-1);// If we found the match at the beginning of the string, or we found the match
	// and there is a whitespace char in front of it (meaning it is not an email
	// address), then it is a username match.
	if(offset===0||nonWordCharRegex.test(prevChar)){var matchedText=match[0].replace(/\.+$/g,''),// strip off trailing .
	mention=matchedText.slice(1);// strip off the '@' character at the beginning
	matches.push(new Autolinker.match.Mention({tagBuilder:tagBuilder,matchedText:matchedText,offset:offset,serviceName:serviceName,mention:mention}));}}return matches;}});/*global Autolinker *//**
	 * @class Autolinker.matcher.Url
	 * @extends Autolinker.matcher.Matcher
	 *
	 * Matcher to find URL matches in an input string.
	 *
	 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more details.
	 */Autolinker.matcher.Url=Autolinker.Util.extend(Autolinker.matcher.Matcher,{/**
		 * @cfg {Object} stripPrefix (required)
		 *
		 * The Object form of {@link Autolinker#cfg-stripPrefix}.
		 *//**
		 * @cfg {Boolean} stripTrailingSlash (required)
		 * @inheritdoc Autolinker#stripTrailingSlash
		 *//**
		 * @private
		 * @property {RegExp} matcherRegex
		 *
		 * The regular expression to match URLs with an optional scheme, port
		 * number, path, query string, and hash anchor.
		 *
		 * Example matches:
		 *
		 *     http://google.com
		 *     www.google.com
		 *     google.com/path/to/file?q1=1&q2=2#myAnchor
		 *
		 *
		 * This regular expression will have the following capturing groups:
		 *
		 * 1.  Group that matches a scheme-prefixed URL (i.e. 'http://google.com').
		 *     This is used to match scheme URLs with just a single word, such as
		 *     'http://localhost', where we won't double check that the domain name
		 *     has at least one dot ('.') in it.
		 * 2.  Group that matches a 'www.' prefixed URL. This is only matched if the
		 *     'www.' text was not prefixed by a scheme (i.e.: not prefixed by
		 *     'http://', 'ftp:', etc.)
		 * 3.  A protocol-relative ('//') match for the case of a 'www.' prefixed
		 *     URL. Will be an empty string if it is not a protocol-relative match.
		 *     We need to know the character before the '//' in order to determine
		 *     if it is a valid match or the // was in a string we don't want to
		 *     auto-link.
		 * 4.  Group that matches a known TLD (top level domain), when a scheme
		 *     or 'www.'-prefixed domain is not matched.
		 * 5.  A protocol-relative ('//') match for the case of a known TLD prefixed
		 *     URL. Will be an empty string if it is not a protocol-relative match.
		 *     See #3 for more info.
		 */matcherRegex:function(){var schemeRegex=/(?:[A-Za-z][-.+A-Za-z0-9]*:(?![A-Za-z][-.+A-Za-z0-9]*:\/\/)(?!\d+\/?)(?:\/\/)?)/,// match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
	wwwRegex=/(?:www\.)/,// starting with 'www.'
	domainNameRegex=Autolinker.RegexLib.domainNameRegex,tldRegex=Autolinker.RegexLib.tldRegex,// match our known top level domains (TLDs)
	alphaNumericCharsStr=Autolinker.RegexLib.alphaNumericCharsStr,// Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"
	// http://blog.codinghorror.com/the-problem-with-urls/
	urlSuffixRegex=new RegExp('['+alphaNumericCharsStr+'\\-+&@#/%=~_()|\'$*\\[\\]?!:,.;✓]*['+alphaNumericCharsStr+'\\-+&@#/%=~_()|\'$*\\[\\]✓]');return new RegExp(['(?:',// parens to cover match for scheme (optional), and domain
	'(',// *** Capturing group $1, for a scheme-prefixed url (ex: http://google.com)
	schemeRegex.source,domainNameRegex.source,')','|','(',// *** Capturing group $2, for a 'www.' prefixed url (ex: www.google.com)
	'(//)?',// *** Capturing group $3 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character (handled later)
	wwwRegex.source,domainNameRegex.source,')','|','(',// *** Capturing group $4, for known a TLD url (ex: google.com)
	'(//)?',// *** Capturing group $5 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character (handled later)
	domainNameRegex.source+'\\.',tldRegex.source,')',')','(?:'+urlSuffixRegex.source+')?'// match for path, query string, and/or hash anchor - optional
	].join(""),'gi');}(),/**
		 * A regular expression to use to check the character before a protocol-relative
		 * URL match. We don't want to match a protocol-relative URL if it is part
		 * of another word.
		 *
		 * For example, we want to match something like "Go to: //google.com",
		 * but we don't want to match something like "abc//google.com"
		 *
		 * This regular expression is used to test the character before the '//'.
		 *
		 * @private
		 * @type {RegExp} wordCharRegExp
		 */wordCharRegExp:/\w/,/**
		 * The regular expression to match opening parenthesis in a URL match.
		 *
		 * This is to determine if we have unbalanced parenthesis in the URL, and to
		 * drop the final parenthesis that was matched if so.
		 *
		 * Ex: The text "(check out: wikipedia.com/something_(disambiguation))"
		 * should only autolink the inner "wikipedia.com/something_(disambiguation)"
		 * part, so if we find that we have unbalanced parenthesis, we will drop the
		 * last one for the match.
		 *
		 * @private
		 * @property {RegExp}
		 */openParensRe:/\(/g,/**
		 * The regular expression to match closing parenthesis in a URL match. See
		 * {@link #openParensRe} for more information.
		 *
		 * @private
		 * @property {RegExp}
		 */closeParensRe:/\)/g,/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance,
		 *   specified in an Object (map).
		 */constructor:function constructor(cfg){Autolinker.matcher.Matcher.prototype.constructor.call(this,cfg);if(cfg.stripPrefix==null)throw new Error('`stripPrefix` cfg required');if(cfg.stripTrailingSlash==null)throw new Error('`stripTrailingSlash` cfg required');this.stripPrefix=cfg.stripPrefix;this.stripTrailingSlash=cfg.stripTrailingSlash;},/**
		 * @inheritdoc
		 */parseMatches:function parseMatches(text){var matcherRegex=this.matcherRegex,stripPrefix=this.stripPrefix,stripTrailingSlash=this.stripTrailingSlash,tagBuilder=this.tagBuilder,matches=[],match;while((match=matcherRegex.exec(text))!==null){var matchStr=match[0],schemeUrlMatch=match[1],wwwUrlMatch=match[2],wwwProtocolRelativeMatch=match[3],//tldUrlMatch = match[ 4 ],  -- not needed at the moment
	tldProtocolRelativeMatch=match[5],offset=match.index,protocolRelativeMatch=wwwProtocolRelativeMatch||tldProtocolRelativeMatch,prevChar=text.charAt(offset-1);if(!Autolinker.matcher.UrlMatchValidator.isValid(matchStr,schemeUrlMatch)){continue;}// If the match is preceded by an '@' character, then it is either
	// an email address or a username. Skip these types of matches.
	if(offset>0&&prevChar==='@'){continue;}// If it's a protocol-relative '//' match, but the character before the '//'
	// was a word character (i.e. a letter/number), then we found the '//' in the
	// middle of another word (such as "asdf//asdf.com"). In this case, skip the
	// match.
	if(offset>0&&protocolRelativeMatch&&this.wordCharRegExp.test(prevChar)){continue;}// Handle a closing parenthesis at the end of the match, and exclude
	// it if there is not a matching open parenthesis in the match
	// itself.
	if(this.matchHasUnbalancedClosingParen(matchStr)){matchStr=matchStr.substr(0,matchStr.length-1);// remove the trailing ")"
	}else{// Handle an invalid character after the TLD
	var pos=this.matchHasInvalidCharAfterTld(matchStr,schemeUrlMatch);if(pos>-1){matchStr=matchStr.substr(0,pos);// remove the trailing invalid chars
	}}var urlMatchType=schemeUrlMatch?'scheme':wwwUrlMatch?'www':'tld',protocolUrlMatch=!!schemeUrlMatch;matches.push(new Autolinker.match.Url({tagBuilder:tagBuilder,matchedText:matchStr,offset:offset,urlMatchType:urlMatchType,url:matchStr,protocolUrlMatch:protocolUrlMatch,protocolRelativeMatch:!!protocolRelativeMatch,stripPrefix:stripPrefix,stripTrailingSlash:stripTrailingSlash}));}return matches;},/**
		 * Determines if a match found has an unmatched closing parenthesis. If so,
		 * this parenthesis will be removed from the match itself, and appended
		 * after the generated anchor tag.
		 *
		 * A match may have an extra closing parenthesis at the end of the match
		 * because the regular expression must include parenthesis for URLs such as
		 * "wikipedia.com/something_(disambiguation)", which should be auto-linked.
		 *
		 * However, an extra parenthesis *will* be included when the URL itself is
		 * wrapped in parenthesis, such as in the case of "(wikipedia.com/something_(disambiguation))".
		 * In this case, the last closing parenthesis should *not* be part of the
		 * URL itself, and this method will return `true`.
		 *
		 * @private
		 * @param {String} matchStr The full match string from the {@link #matcherRegex}.
		 * @return {Boolean} `true` if there is an unbalanced closing parenthesis at
		 *   the end of the `matchStr`, `false` otherwise.
		 */matchHasUnbalancedClosingParen:function matchHasUnbalancedClosingParen(matchStr){var lastChar=matchStr.charAt(matchStr.length-1);if(lastChar===')'){var openParensMatch=matchStr.match(this.openParensRe),closeParensMatch=matchStr.match(this.closeParensRe),numOpenParens=openParensMatch&&openParensMatch.length||0,numCloseParens=closeParensMatch&&closeParensMatch.length||0;if(numOpenParens<numCloseParens){return true;}}return false;},/**
		 * Determine if there's an invalid character after the TLD in a URL. Valid
		 * characters after TLD are ':/?#'. Exclude scheme matched URLs from this
		 * check.
		 *
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an
		 *   empty string if the match is not a URL match.
		 * @param {String} schemeUrlMatch The match URL string for a scheme
		 *   match. Ex: 'http://yahoo.com'. This is used to match something like
		 *   'http://localhost', where we won't double check that the domain name
		 *   has at least one '.' in it.
		 * @return {Number} the position where the invalid character was found. If
		 *   no such character was found, returns -1
		 */matchHasInvalidCharAfterTld:function matchHasInvalidCharAfterTld(urlMatch,schemeUrlMatch){if(!urlMatch){return-1;}var offset=0;if(schemeUrlMatch){offset=urlMatch.indexOf(':');urlMatch=urlMatch.slice(offset);}var re=/^((.?\/\/)?[A-Za-z0-9\u00C0-\u017F\.\-]*[A-Za-z0-9\u00C0-\u017F\-]\.[A-Za-z]+)/;var res=re.exec(urlMatch);if(res===null){return-1;}offset+=res[1].length;urlMatch=urlMatch.slice(res[1].length);if(/^[^.A-Za-z0-9:\/?#]/.test(urlMatch)){return offset;}return-1;}});/*global Autolinker *//*jshint scripturl:true *//**
	 * @private
	 * @class Autolinker.matcher.UrlMatchValidator
	 * @singleton
	 *
	 * Used by Autolinker to filter out false URL positives from the
	 * {@link Autolinker.matcher.Url UrlMatcher}.
	 *
	 * Due to the limitations of regular expressions (including the missing feature
	 * of look-behinds in JS regular expressions), we cannot always determine the
	 * validity of a given match. This class applies a bit of additional logic to
	 * filter out any false positives that have been matched by the
	 * {@link Autolinker.matcher.Url UrlMatcher}.
	 */Autolinker.matcher.UrlMatchValidator={/**
		 * Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'
		 *
		 * @private
		 * @property {RegExp} hasFullProtocolRegex
		 */hasFullProtocolRegex:/^[A-Za-z][-.+A-Za-z0-9]*:\/\//,/**
		 * Regex to find the URI scheme, such as 'mailto:'.
		 *
		 * This is used to filter out 'javascript:' and 'vbscript:' schemes.
		 *
		 * @private
		 * @property {RegExp} uriSchemeRegex
		 */uriSchemeRegex:/^[A-Za-z][-.+A-Za-z0-9]*:/,/**
		 * Regex to determine if at least one word char exists after the protocol (i.e. after the ':')
		 *
		 * @private
		 * @property {RegExp} hasWordCharAfterProtocolRegex
		 */hasWordCharAfterProtocolRegex:/:[^\s]*?[A-Za-z\u00C0-\u017F]/,/**
		 * Regex to determine if the string is a valid IP address
		 *
		 * @private
		 * @property {RegExp} ipRegex
		 */ipRegex:/[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?(:[0-9]*)?\/?$/,/**
		 * Determines if a given URL match found by the {@link Autolinker.matcher.Url UrlMatcher}
		 * is valid. Will return `false` for:
		 *
		 * 1) URL matches which do not have at least have one period ('.') in the
		 *    domain name (effectively skipping over matches like "abc:def").
		 *    However, URL matches with a protocol will be allowed (ex: 'http://localhost')
		 * 2) URL matches which do not have at least one word character in the
		 *    domain name (effectively skipping over matches like "git:1.0").
		 * 3) A protocol-relative url match (a URL beginning with '//') whose
		 *    previous character is a word character (effectively skipping over
		 *    strings like "abc//google.com")
		 *
		 * Otherwise, returns `true`.
		 *
		 * @param {String} urlMatch The matched URL, if there was one. Will be an
		 *   empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol
		 *   match. Ex: 'http://yahoo.com'. This is used to match something like
		 *   'http://localhost', where we won't double check that the domain name
		 *   has at least one '.' in it.
		 * @return {Boolean} `true` if the match given is valid and should be
		 *   processed, or `false` if the match is invalid and/or should just not be
		 *   processed.
		 */isValid:function isValid(urlMatch,protocolUrlMatch){if(protocolUrlMatch&&!this.isValidUriScheme(protocolUrlMatch)||this.urlMatchDoesNotHaveProtocolOrDot(urlMatch,protocolUrlMatch)||// At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
	this.urlMatchDoesNotHaveAtLeastOneWordChar(urlMatch,protocolUrlMatch)&&// At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
	!this.isValidIpAddress(urlMatch)||// Except if it's an IP address
	this.containsMultipleDots(urlMatch)){return false;}return true;},isValidIpAddress:function isValidIpAddress(uriSchemeMatch){var newRegex=new RegExp(this.hasFullProtocolRegex.source+this.ipRegex.source);var uriScheme=uriSchemeMatch.match(newRegex);return uriScheme!==null;},containsMultipleDots:function containsMultipleDots(urlMatch){return urlMatch.indexOf("..")>-1;},/**
		 * Determines if the URI scheme is a valid scheme to be autolinked. Returns
		 * `false` if the scheme is 'javascript:' or 'vbscript:'
		 *
		 * @private
		 * @param {String} uriSchemeMatch The match URL string for a full URI scheme
		 *   match. Ex: 'http://yahoo.com' or 'mailto:a@a.com'.
		 * @return {Boolean} `true` if the scheme is a valid one, `false` otherwise.
		 */isValidUriScheme:function isValidUriScheme(uriSchemeMatch){var uriScheme=uriSchemeMatch.match(this.uriSchemeRegex)[0].toLowerCase();return uriScheme!=='javascript:'&&uriScheme!=='vbscript:';},/**
		 * Determines if a URL match does not have either:
		 *
		 * a) a full protocol (i.e. 'http://'), or
		 * b) at least one dot ('.') in the domain name (for a non-full-protocol
		 *    match).
		 *
		 * Either situation is considered an invalid URL (ex: 'git:d' does not have
		 * either the '://' part, or at least one dot in the domain name. If the
		 * match was 'git:abc.com', we would consider this valid.)
		 *
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an
		 *   empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol
		 *   match. Ex: 'http://yahoo.com'. This is used to match something like
		 *   'http://localhost', where we won't double check that the domain name
		 *   has at least one '.' in it.
		 * @return {Boolean} `true` if the URL match does not have a full protocol,
		 *   or at least one dot ('.') in a non-full-protocol match.
		 */urlMatchDoesNotHaveProtocolOrDot:function urlMatchDoesNotHaveProtocolOrDot(urlMatch,protocolUrlMatch){return!!urlMatch&&(!protocolUrlMatch||!this.hasFullProtocolRegex.test(protocolUrlMatch))&&urlMatch.indexOf('.')===-1;},/**
		 * Determines if a URL match does not have at least one word character after
		 * the protocol (i.e. in the domain name).
		 *
		 * At least one letter character must exist in the domain name after a
		 * protocol match. Ex: skip over something like "git:1.0"
		 *
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an
		 *   empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol
		 *   match. Ex: 'http://yahoo.com'. This is used to know whether or not we
		 *   have a protocol in the URL string, in order to check for a word
		 *   character after the protocol separator (':').
		 * @return {Boolean} `true` if the URL match does not have at least one word
		 *   character in it after the protocol, `false` otherwise.
		 */urlMatchDoesNotHaveAtLeastOneWordChar:function urlMatchDoesNotHaveAtLeastOneWordChar(urlMatch,protocolUrlMatch){if(urlMatch&&protocolUrlMatch){return!this.hasWordCharAfterProtocolRegex.test(urlMatch);}else{return false;}}};/*global Autolinker *//**
	 * A truncation feature where the ellipsis will be placed at the end of the URL.
	 *
	 * @param {String} anchorText
	 * @param {Number} truncateLen The maximum length of the truncated output URL string.
	 * @param {String} ellipsisChars The characters to place within the url, e.g. "..".
	 * @return {String} The truncated URL.
	 */Autolinker.truncate.TruncateEnd=function(anchorText,truncateLen,ellipsisChars){return Autolinker.Util.ellipsis(anchorText,truncateLen,ellipsisChars);};/*global Autolinker *//**
	 * Date: 2015-10-05
	 * Author: Kasper Søfren <soefritz@gmail.com> (https://github.com/kafoso)
	 *
	 * A truncation feature, where the ellipsis will be placed in the dead-center of the URL.
	 *
	 * @param {String} url             A URL.
	 * @param {Number} truncateLen     The maximum length of the truncated output URL string.
	 * @param {String} ellipsisChars   The characters to place within the url, e.g. "..".
	 * @return {String} The truncated URL.
	 */Autolinker.truncate.TruncateMiddle=function(url,truncateLen,ellipsisChars){if(url.length<=truncateLen){return url;}var ellipsisLengthBeforeParsing;var ellipsisLength;if(ellipsisChars==null){ellipsisChars='&hellip;';ellipsisLengthBeforeParsing=8;ellipsisLength=3;}else{ellipsisLengthBeforeParsing=ellipsisChars.length;ellipsisLength=ellipsisChars.length;}var availableLength=truncateLen-ellipsisLength;var end="";if(availableLength>0){end=url.substr(-1*Math.floor(availableLength/2));}return(url.substr(0,Math.ceil(availableLength/2))+ellipsisChars+end).substr(0,availableLength+ellipsisLengthBeforeParsing);};/*global Autolinker *//**
	 * Date: 2015-10-05
	 * Author: Kasper Søfren <soefritz@gmail.com> (https://github.com/kafoso)
	 *
	 * A truncation feature, where the ellipsis will be placed at a section within
	 * the URL making it still somewhat human readable.
	 *
	 * @param {String} url						 A URL.
	 * @param {Number} truncateLen		 The maximum length of the truncated output URL string.
	 * @param {String} ellipsisChars	 The characters to place within the url, e.g. "...".
	 * @return {String} The truncated URL.
	 */Autolinker.truncate.TruncateSmart=function(url,truncateLen,ellipsisChars){var ellipsisLengthBeforeParsing;var ellipsisLength;if(ellipsisChars==null){ellipsisChars='&hellip;';ellipsisLength=3;ellipsisLengthBeforeParsing=8;}else{ellipsisLength=ellipsisChars.length;ellipsisLengthBeforeParsing=ellipsisChars.length;}var parse_url=function parse_url(url){// Functionality inspired by PHP function of same name
	var urlObj={};var urlSub=url;var match=urlSub.match(/^([a-z]+):\/\//i);if(match){urlObj.scheme=match[1];urlSub=urlSub.substr(match[0].length);}match=urlSub.match(/^(.*?)(?=(\?|#|\/|$))/i);if(match){urlObj.host=match[1];urlSub=urlSub.substr(match[0].length);}match=urlSub.match(/^\/(.*?)(?=(\?|#|$))/i);if(match){urlObj.path=match[1];urlSub=urlSub.substr(match[0].length);}match=urlSub.match(/^\?(.*?)(?=(#|$))/i);if(match){urlObj.query=match[1];urlSub=urlSub.substr(match[0].length);}match=urlSub.match(/^#(.*?)$/i);if(match){urlObj.fragment=match[1];//urlSub = urlSub.substr(match[0].length);  -- not used. Uncomment if adding another block.
	}return urlObj;};var buildUrl=function buildUrl(urlObj){var url="";if(urlObj.scheme&&urlObj.host){url+=urlObj.scheme+"://";}if(urlObj.host){url+=urlObj.host;}if(urlObj.path){url+="/"+urlObj.path;}if(urlObj.query){url+="?"+urlObj.query;}if(urlObj.fragment){url+="#"+urlObj.fragment;}return url;};var buildSegment=function buildSegment(segment,remainingAvailableLength){var remainingAvailableLengthHalf=remainingAvailableLength/2,startOffset=Math.ceil(remainingAvailableLengthHalf),endOffset=-1*Math.floor(remainingAvailableLengthHalf),end="";if(endOffset<0){end=segment.substr(endOffset);}return segment.substr(0,startOffset)+ellipsisChars+end;};if(url.length<=truncateLen){return url;}var availableLength=truncateLen-ellipsisLength;var urlObj=parse_url(url);// Clean up the URL
	if(urlObj.query){var matchQuery=urlObj.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);if(matchQuery){// Malformed URL; two or more "?". Removed any content behind the 2nd.
	urlObj.query=urlObj.query.substr(0,matchQuery[1].length);url=buildUrl(urlObj);}}if(url.length<=truncateLen){return url;}if(urlObj.host){urlObj.host=urlObj.host.replace(/^www\./,"");url=buildUrl(urlObj);}if(url.length<=truncateLen){return url;}// Process and build the URL
	var str="";if(urlObj.host){str+=urlObj.host;}if(str.length>=availableLength){if(urlObj.host.length==truncateLen){return(urlObj.host.substr(0,truncateLen-ellipsisLength)+ellipsisChars).substr(0,availableLength+ellipsisLengthBeforeParsing);}return buildSegment(str,availableLength).substr(0,availableLength+ellipsisLengthBeforeParsing);}var pathAndQuery="";if(urlObj.path){pathAndQuery+="/"+urlObj.path;}if(urlObj.query){pathAndQuery+="?"+urlObj.query;}if(pathAndQuery){if((str+pathAndQuery).length>=availableLength){if((str+pathAndQuery).length==truncateLen){return(str+pathAndQuery).substr(0,truncateLen);}var remainingAvailableLength=availableLength-str.length;return(str+buildSegment(pathAndQuery,remainingAvailableLength)).substr(0,availableLength+ellipsisLengthBeforeParsing);}else{str+=pathAndQuery;}}if(urlObj.fragment){var fragment="#"+urlObj.fragment;if((str+fragment).length>=availableLength){if((str+fragment).length==truncateLen){return(str+fragment).substr(0,truncateLen);}var remainingAvailableLength2=availableLength-str.length;return(str+buildSegment(fragment,remainingAvailableLength2)).substr(0,availableLength+ellipsisLengthBeforeParsing);}else{str+=fragment;}}if(urlObj.scheme&&urlObj.host){var scheme=urlObj.scheme+"://";if((str+scheme).length<availableLength){return(scheme+str).substr(0,truncateLen);}}if(str.length<=truncateLen){return str;}var end="";if(availableLength>0){end=str.substr(-1*Math.floor(availableLength/2));}return(str.substr(0,Math.ceil(availableLength/2))+ellipsisChars+end).substr(0,availableLength+ellipsisLengthBeforeParsing);};return Autolinker;});});

/***/ }
/******/ ]);