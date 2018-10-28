(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("sheetforge", [], factory);
	else if(typeof exports === 'object')
		exports["sheetforge"] = factory();
	else
		root["sheetforge"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"development": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpsheetforge"] = window["webpackJsonpsheetforge"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["05fm","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "05fm":
/*!**************************************!*\
  !*** ./source/index.js + 25 modules ***!
  \**************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/objectSpread.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/toConsumableArray.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/typeof.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/deep-equal/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mathjs/core.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-state-tree/dist/mobx-state-tree.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx/lib/mobx.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/mobx-state-tree/dist/mobx-state-tree.js
var mobx_state_tree = __webpack_require__("uqjs");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("MVZn");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("QILm");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("cDf5");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/deep-equal/index.js
var deep_equal = __webpack_require__("f66B");
var deep_equal_default = /*#__PURE__*/__webpack_require__.n(deep_equal);

// EXTERNAL MODULE: ./node_modules/mobx/lib/mobx.js
var mobx = __webpack_require__("Ta9u");

// CONCATENATED MODULE: ./source/utilities/splitObjectPath.js
var PATH_SPLITTER = /([a-z0-9-_]+)(?![["'\].])*/ig;
/* harmony default export */ var splitObjectPath = (function (path) {
  if (typeof path !== 'string') return null;
  return path.match(PATH_SPLITTER);
});
// CONCATENATED MODULE: ./source/utilities/getPathValue.js

/* harmony default export */ var getPathValue = (function (object, path) {
  if (typeof path !== 'string') return undefined;
  var split = splitObjectPath(path);
  if (!Array.isArray(split)) return undefined;
  var property = split.pop();
  var target = split.reduce(function (o, key) {
    return o[key] || {};
  }, object);
  if (target) return target[property];
  return undefined;
});
// CONCATENATED MODULE: ./source/utilities/setPathValue.js

/* harmony default export */ var setPathValue = (function (object, path, value) {
  var split = splitObjectPath(path);
  var property = split.pop();
  var target = split.reduce(function (o, key) {
    return o[key] || {};
  }, object);

  if (target && target.isIEditable) {
    target.set(property, value);
  } else {
    target[property] = value;
  }
});
// CONCATENATED MODULE: ./source/models/generic/IEditable/IEditable.js






var IEditable = mobx_state_tree["types"].model('IEditable', {// Any
}).volatile(function () {
  return {
    isIEditable: true,
    savedVersion: {}
  };
}).views(function (self) {
  return {
    get isDirty() {
      return !deep_equal_default()(self.toJSON(), self.savedVersion);
    }

  };
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    afterCreate: function afterCreate() {
      self.savedVersion = self.toJSON();
    },
    isPathDirty: function isPathDirty(path) {
      var current = getPathValue(self.toJSON(), path);
      var initial = getPathValue(self.savedVersion, path);
      return !deep_equal_default()(current, initial);
    },
    markAsClean: function markAsClean() {
      self.savedVersion = self.toJSON();
      Object.keys(self.savedVersion).forEach(function (key) {
        var value = self[key];

        if (!value) {
          return;
        }

        if (value.isIEditable) {
          value.markAsClean();
        } else if (Object(mobx["isObservableArray"])(value)) {
          value.forEach(function (child) {
            return child && child.isIEditable && child.markAsClean();
          });
        }
      });
    },
    reset: function reset() {
      Object.assign(self, self.savedVersion);
    },
    set: function set() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (typeof key === 'string' && value !== undefined) {
        // allows: model.set('foo.bar', 'bar')
        if (self[key] !== undefined) {
          self[key] = value;
        } else {
          setPathValue(self, key, value);
        }
      } else if (typeof_default()(key) === 'object' && value === undefined) {
        // allows: model.set({ foo: 'Foo', bar: 'Bar' })
        Object.assign(self, key);
      }
    }
  };
});
/* harmony default export */ var IEditable_IEditable = (IEditable);
// CONCATENATED MODULE: ./source/utilities/hash.js
function hash() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  var string = String(value);
  var h = 0;
  string.split('').forEach(function (char) {
    /* eslint-disable no-bitwise */
    h = (h << 5) - h + char.charCodeAt(0);
    h &= h; // Convert to 32-bit integer

    /* eslint-enable no-bitwise */
  });
  return Math.abs(h).toString(radix);
}
var randomHash = function randomHash() {
  return hash(Math.random().toString());
};
// CONCATENATED MODULE: ./source/models/generic/IIdentity/IIdentity.js


/* harmony default export */ var IIdentity = (mobx_state_tree["types"].model({// Nothing
}).volatile(function () {
  return {
    hash: ''
  };
}).actions(function (self) {
  return {
    afterCreate: function afterCreate() {
      self.hash = randomHash();
    }
  };
}));
// CONCATENATED MODULE: ./source/utilities/findParent.js

/* harmony default export */ var findParent = (function (child) {
  var filterFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Boolean;

  if (!Object(mobx_state_tree["hasParent"])(child)) {
    return null;
  }

  var parent = Object(mobx_state_tree["getParent"])(child);

  while (parent) {
    if (filterFunction(parent)) {
      return parent;
    }

    if (!Object(mobx_state_tree["hasParent"])(parent)) {
      return null;
    }

    parent = Object(mobx_state_tree["getParent"])(parent);
  }

  return null;
});
// EXTERNAL MODULE: ./node_modules/mathjs/core.js
var core = __webpack_require__("yZWr");
var core_default = /*#__PURE__*/__webpack_require__.n(core);

// CONCATENATED MODULE: ./source/utilities/math/math.js

var math = core_default.a.create();
math.import(__webpack_require__(/*! mathjs/lib/expression/function/eval */ "Wbaz"));
math.import(__webpack_require__(/*! mathjs/lib/expression/function/parse */ "lFTT"));
math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/add */ "NEdZ"));
math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/ceil */ "EjzI"));
math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/divide */ "rVKH"));
math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/floor */ "QllX"));
math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/mod */ "gV/b"));
math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/multiply */ "NU+P"));
math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/pow */ "CaZ0"));
math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/round */ "N5iU"));
math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/subtract */ "O1N0"));
math.import(__webpack_require__(/*! mathjs/lib/function/logical */ "BSwV"));
math.import(__webpack_require__(/*! mathjs/lib/function/statistics/max */ "itDh"));
math.import(__webpack_require__(/*! mathjs/lib/function/statistics/mean */ "FC7u"));
math.import(__webpack_require__(/*! mathjs/lib/function/statistics/min */ "I5O3"));
math.import(__webpack_require__(/*! mathjs/lib/function/statistics/sum */ "Z+cb"));
math.import(__webpack_require__(/*! mathjs/lib/function/utils/isInteger */ "PbhI"));
math.import(__webpack_require__(/*! mathjs/lib/type/matrix/function/matrix */ "R4H5"));
math.import(__webpack_require__(/*! mathjs/lib/type/matrix/Matrix */ "ohYX"));
math.import(__webpack_require__(/*! mathjs/lib/type/matrix/DenseMatrix */ "ZS3Q"));
/* harmony default export */ var math_math = (math);
// CONCATENATED MODULE: ./source/utilities/math/toSymbols.js

/* harmony default export */ var toSymbols = (function (expression) {
  var symbols = [];
  math_math.parse(expression).traverse(function (node) {
    if (node.type === 'SymbolNode' && !symbols.includes(node.name)) {
      symbols.push(node.name);
    }
  });
  return symbols;
});
// CONCATENATED MODULE: ./source/utilities/math/calculate.js



/* harmony default export */ var calculate = (function () {
  var expression = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    defaultSymbolValue: 0
  };

  var safeData = objectSpread_default()({}, data);

  toSymbols(expression).forEach(function (symbol) {
    if (safeData[symbol] === undefined) {
      safeData[symbol] = options.defaultSymbolValue;
    }
  });
  return math_math.eval(expression, safeData);
});
// CONCATENATED MODULE: ./source/models/Attribute/Attribute.js










/* harmony default export */ var Attribute = (mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model({
  name: 'New Attribute...',
  raw: mobx_state_tree["types"].optional(mobx_state_tree["types"].union(mobx_state_tree["types"].number, mobx_state_tree["types"].string), 0)
}).views(function (self) {
  return {
    get character() {
      return findParent(self, function (p) {
        return p.isCharacter;
      });
    },

    get id() {
      return self.name.toLowerCase().replace(/[^a-z0-9]/ig, '');
    },

    get isComputed() {
      return typeof self.raw === 'string';
    }

  };
}).actions(function (self) {
  return {
    effects: function effects() {
      if (!self.character) return [];
      return self.character.activeEffects().filter(function (effect) {
        return effect.targetName === self.name;
      });
    },
    modifiedValue: function modifiedValue() {
      return self.value() + self.modifier();
    },
    modifier: function modifier() {
      return math_math.sum(self.effects().map(function (effect) {
        return effect.modifier;
      }));
    },
    modifierText: function modifierText() {
      return self.effects().map(function (effect) {
        return "".concat(effect.sourceName, ": ").concat(effect.modifier);
      }).join(', ');
    },
    value: function value() {
      if (!self.isComputed) return self.raw;
      if (self.character === null) return 0;

      try {
        var values = toSymbols(self.raw).reduce(function (all, symbol) {
          var attribute = self.character.attributes.findBy('id', symbol);
          return Object.assign(all, defineProperty_default()({}, symbol, attribute ? attribute.modifiedValue() : 0));
        }, {});
        return calculate(self.raw, values);
      } catch (error) {
        // eslint-disable-next-line no-undef, no-console
        if (true) {
          console.error("Error computing: ".concat(self.raw));
        }

        return 0;
      }
    }
  };
}).preProcessSnapshot(function (_ref) {
  var value = _ref.value,
      snapshot = objectWithoutProperties_default()(_ref, ["value"]);

  return objectSpread_default()({}, snapshot, {
    raw: value
  });
}).postProcessSnapshot(function (_ref2) {
  var raw = _ref2.raw,
      snapshot = objectWithoutProperties_default()(_ref2, ["raw"]);

  return objectSpread_default()({}, snapshot, {
    value: raw
  });
})).named('Attribute'));
// CONCATENATED MODULE: ./source/models/Descriptor/Descriptor.js



/* harmony default export */ var Descriptor = (mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model({
  name: 'New Descriptor...',
  value: ''
})).named('Descriptor'));
// CONCATENATED MODULE: ./source/utilities/compareBy.js
/* harmony default export */ var compareBy = (function (prop) {
  var reversed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (objectA, objectB) {
    var a = String(objectA instanceof Map ? objectA.get(prop) : objectA[prop]);
    var b = String(objectB instanceof Map ? objectB.get(prop) : objectB[prop]);
    if (reversed) return b.localeCompare(a);
    return a.localeCompare(b);
  };
});
// CONCATENATED MODULE: ./source/models/generic/Collection/Collection.js





/* harmony default export */ var Collection = (function (TYPE) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var TypedArrayWrapper = mobx_state_tree["types"].model({
    values: mobx_state_tree["types"].array(TYPE)
  }).views(function (self) {
    return {
      get asArray() {
        return self.values.slice();
      },

      get first() {
        return self.length ? self.at(0) : undefined;
      },

      get last() {
        return self.length ? self.at(self.length - 1) : undefined;
      },

      get length() {
        return self.values.length;
      }

    };
  }).actions(function (self) {
    return {
      /* eslint-disable no-param-reassign */
      at: function at(n) {
        return self.values[n];
      },
      clear: function clear() {
        return self.values.clear();
      },
      delete: function _delete(object) {
        self.values.replace(self.values.filter(function (item) {
          return item !== object;
        }));
      },
      deleteAt: function deleteAt(index) {
        self.values.replace(self.values.filter(function (_, n) {
          return n !== index;
        }));
      },
      every: function every(fn) {
        return self.values.every(fn);
      },
      filter: function filter(fn) {
        return self.values.filter(fn);
      },
      find: function find(fn) {
        return self.values.find(fn);
      },
      findBy: function findBy(key, value) {
        return self.find(function (item) {
          return item[key] === value;
        });
      },
      findById: function findById(id) {
        if (!TYPE.identifierAttribute) return null;
        return self.find(function (item) {
          return item[TYPE.identifierAttribute] === id;
        }) || null;
      },
      forEach: function forEach(fn) {
        return self.values.forEach(fn);
      },
      includes: function includes(searchElement, fromIndex) {
        return self.values.includes(searchElement, fromIndex);
      },
      indexOf: function indexOf(element) {
        return self.values.indexOf(element);
      },
      insert: function insert(object, index) {
        return self.splice(index, 0, object);
      },
      map: function map(fn) {
        return self.values.map(fn);
      },
      pop: function pop() {
        return self.values.pop();
      },
      push: function push() {
        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }

        return self.values.replace([].concat(self.values, values));
      },
      reduce: function reduce(fn, initial) {
        return self.values.reduce(fn, initial);
      },
      replace: function replace(values) {
        return self.values.replace(values);
      },
      shift: function shift() {
        return self.values.shift();
      },
      slice: function slice(start, end) {
        return self.values.slice(start, end);
      },
      some: function some(fn) {
        return self.values.some(fn);
      },
      sortBy: function sortBy(property) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';

        if (!['asc', 'desc'].includes(direction)) {
          throw new TypeError("direction must be \"asc\" or \"desc\", got: \"".concat(direction, "\""));
        }

        var values = self.values.slice().sort(compareBy(property));
        self.values.replace(direction === 'desc' ? values.reverse() : values);
        return self;
      },
      splice: function splice(index, deleteCount, value) {
        return self.values.splice(index, deleteCount, value);
      },
      toObject: function toObject(keyProp, valueProp) {
        return self.values.reduce(function (object, entry) {
          var key = entry[keyProp];
          var value = valueProp !== undefined ? entry[valueProp] : entry;
          return objectSpread_default()({}, object, defineProperty_default()({}, key, typeof value === 'function' ? value() : value));
        }, {});
      },
      unshift: function unshift() {
        for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          values[_key2] = arguments[_key2];
        }

        return self.values.replace([].concat(values, self.values));
      }
      /* eslint-enable no-param-reassign */

    };
  }).postProcessSnapshot(function (_ref) {
    var values = _ref.values;
    return values;
  });
  return mobx_state_tree["types"].custom(objectSpread_default()({}, options, {
    fromSnapshot: function fromSnapshot() {
      var snapshot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return TypedArrayWrapper.create({
        values: snapshot
      });
    },
    getValidationMessage: function getValidationMessage(snapshot) {
      if (!snapshot) return '';

      if (Object(mobx["isObservableArray"])(snapshot) || Array.isArray(snapshot)) {
        if (snapshot.every(function (f) {
          return TYPE.is(f);
        })) return '';
      }

      return 'Collection types must be assigned an array of values or null';
    },
    isTargetType: function isTargetType(target) {
      return TypedArrayWrapper.is(target);
    },
    name: options.name || 'Collection'
  }));
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("RIqP");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./source/utilities/bound.js
/* harmony default export */ var bound = (function (value, _ref) {
  var min = _ref.min,
      max = _ref.max;
  if (min !== undefined && value < min) return min;
  if (max !== undefined && value > max) return max;
  return value;
});
// CONCATENATED MODULE: ./source/models/HealthLevel/HealthLevel.js







var DAMAGE_LEVELS = ['none', 'light', 'heavy', 'bane'];
/* harmony default export */ var HealthLevel = (mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model({
  damage: mobx_state_tree["types"].optional(mobx_state_tree["types"].union.apply(mobx_state_tree["types"], toConsumableArray_default()(DAMAGE_LEVELS.map(function (dt) {
    return mobx_state_tree["types"].literal(dt);
  }))), 'none'),
  name: 'New Health Level...',
  penalty: 0
}).views(function (self) {
  return {
    get healthBar() {
      var parent = findParent(self);
      return Object(mobx["isObservableArray"])(parent) ? parent : null;
    },

    get index() {
      return self.healthBar ? self.healthBar.indexOf(self) : null;
    },

    get severity() {
      return DAMAGE_LEVELS.indexOf(self.damage);
    }

  };
}).actions(function (self) {
  return {
    adjust: function adjust(byAmount) {
      var index = bound(self.severity + byAmount, {
        max: 3,
        min: 0
      });
      self.apply(DAMAGE_LEVELS[index]);
    },
    apply: function apply(damage) {
      if (!DAMAGE_LEVELS.includes(damage)) return;
      var newSeverity = DAMAGE_LEVELS.indexOf(damage);
      if (newSeverity === self.severity) return;
      var ownIndex = self.index;
      var direction = newSeverity < self.severity ? '↑' : '↓';

      if (!self.healthBar) {
        self.set({
          damage: damage
        });
        return;
      }

      self.healthBar.forEach(function (healthLevel, index) {
        if (direction === '↑' && index >= ownIndex && healthLevel.severity > newSeverity || direction === '↓' && index <= ownIndex && healthLevel.severity < newSeverity) {
          healthLevel.set({
            damage: damage
          });
        }
      });
    },
    heal: function heal() {
      self.apply('none');
    }
  };
})).named('HealthLevel'));
// CONCATENATED MODULE: ./source/models/Effect/Effect.js






/* harmony default export */ var Effect = (mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model({
  condition: '',
  modifier: 0,
  targetName: ''
}).views(function (self) {
  return {
    get available() {
      return self.character ? self.character.attributes : Collection(Attribute).create([]);
    },

    get character() {
      return findParent(self, function (p) {
        return p.isCharacter;
      });
    },

    get isApplicable() {
      return Boolean(!self.condition || self.character && self.character.conditions.includes(self.condition));
    },

    get source() {
      return findParent(self, function (p) {
        return p.name;
      }) || null;
    },

    get sourceName() {
      return self.source ? self.source.name : 'Unknown';
    },

    get target() {
      if (!self.character) return null;
      return self.character.attributes.findBy('name', self.targetName);
    }

  };
}).actions(function (self) {
  return {
    afterAttach: function afterAttach() {
      if (!self.targetName && self.available.length) {
        // eslint-disable-next-line no-param-reassign
        self.targetName = self.available.first.name;
      }
    }
  };
})).named('Effect'));
// CONCATENATED MODULE: ./source/models/Item/Item.js





/* harmony default export */ var Item = (mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model({
  description: '',
  effects: Collection(Effect),
  equipped: false,
  name: 'New Item...'
})).named('Item'));
// CONCATENATED MODULE: ./source/models/Resource/Resource.js



/* harmony default export */ var Resource = (mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model({
  current: 0,
  maximum: 10,
  name: ''
})).named('Resource'));
// CONCATENATED MODULE: ./source/models/Skill/Skill.js



/* harmony default export */ var Skill = (mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model({
  mastery: 1,
  name: 'New Skill...',
  theory: 0
}).views(function (self) {
  return {
    get isComplex() {
      return self.theory !== 0;
    },

    get isSimple() {
      return self.theory === 0;
    }

  };
})).named('Skill'));
// CONCATENATED MODULE: ./source/models/ResourceCost/ResourceCost.js






/* harmony default export */ var ResourceCost = (mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model({
  amount: 0,
  resourceName: ''
}).views(function (self) {
  return {
    get available() {
      return self.character ? self.character.resources : Collection(Resource).create([]);
    },

    get character() {
      return findParent(self, function (p) {
        return p.isCharacter;
      });
    }

  };
}).actions(function (self) {
  return {
    afterAttach: function afterAttach() {
      if (!self.resourceName && self.available.length) {
        // eslint-disable-next-line no-param-reassign
        self.resourceName = self.available.first.name;
      }
    },
    resource: function resource() {
      if (!self.character) return null;
      return self.character.resources.findBy('name', self.resourceName);
    }
  };
})).named('Cost'));
// CONCATENATED MODULE: ./source/models/Spell/Spell.js







/* harmony default export */ var Spell = (mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model({
  costs: Collection(ResourceCost),
  // Resources
  description: '',
  effects: Collection(Effect),
  isActive: false,
  level: 0,
  name: 'New Spell...'
}).views(function (self) {
  return {
    get character() {
      return findParent(self, function (p) {
        return p.isCharacter;
      });
    }

  };
}).actions(function (self) {
  return {
    cast: function cast() {
      if (self.isAffordable()) {
        self.costs.forEach(function (cost) {
          var resource = cost.resource();
          resource.set({
            current: resource.current - cost.amount
          });
        });
      }
    },
    isAffordable: function isAffordable() {
      if (!self.character || !self.costs.length) return true;
      return self.costs.every(function (cost) {
        return cost.resource() && cost.resource().current >= cost.amount;
      });
    }
  };
})).named('Spell'));
// CONCATENATED MODULE: ./source/models/Trait/Trait.js





/* harmony default export */ var Trait = (mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model('Trait', {
  effects: Collection(Effect),
  name: 'New Trait...',
  value: 0
})).named('Trait'));
// CONCATENATED MODULE: ./source/utilities/flatten.js
function flatten(array) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

  if (!array || !Array.isArray(array)) {
    throw new TypeError("cannot flatten non-Array value ".concat(JSON.stringify(array)));
  }

  return array.reduce(function (all, next) {
    if (depth > 1 && next && Array.isArray(next)) {
      return all.concat(flatten(next, depth - 1));
    }

    return all.concat(next);
  }, []);
}
// CONCATENATED MODULE: ./source/models/Character/Character.js













/* harmony default export */ var Character = (mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model({
  attributes: Collection(Attribute),
  conditions: Collection(mobx_state_tree["types"].string),
  // ['vs Goblins', 'Crinos Form']
  descriptors: Collection(Descriptor),
  experience: 0,
  health: Collection(HealthLevel),
  items: Collection(Item),
  // equipped / unequipped, have Effects
  resources: Collection(Resource),
  skills: Collection(Skill),
  spells: Collection(Spell),
  traits: Collection(Trait) // have Effects

}).volatile(function () {
  return {
    isCharacter: true
  };
}).actions(function (self) {
  return {
    activeEffects: function activeEffects() {
      return self.effects().filter(function (effect) {
        return effect && effect.isApplicable;
      });
    },
    availableConditions: function availableConditions() {
      return self.effects().map(function (e) {
        return e.condition;
      }).sort().filter(function (effect, i, all) {
        return !i || effect !== all[i - 1];
      }).filter(Boolean);
    },
    effects: function effects() {
      return flatten([// Trait Effects first, because they're inherent
      self.traits.filter(Boolean).map(function (trait) {
        return trait.effects.values;
      }), // Direct Effects second, because they're cast on the character
      self.spells.filter(function (spell) {
        return spell.isActive;
      }).map(function (spell) {
        return spell.effects.values;
      }), // Item Effects third, because they're indirect
      self.items.filter(function (item) {
        return item.equipped;
      }).map(function (item) {
        return item.effects.values;
      })]).filter(Boolean);
    }
  };
})).named('Character'));
// EXTERNAL MODULE: ./fontello/css/sheetforge-embedded.css
var sheetforge_embedded = __webpack_require__("H3yI");

// CONCATENATED MODULE: ./source/index.js


/* harmony default export */ var source = __webpack_exports__["default"] = (Character);

/***/ }),

/***/ "H3yI":
/*!**********************************************!*\
  !*** ./fontello/css/sheetforge-embedded.css ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=sheetforge.development.js.map