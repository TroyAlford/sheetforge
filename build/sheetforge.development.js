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
  !*** ./source/index.js + 50 modules ***!
  \**************************************/
/*! exports provided: AttributeModel, CharacterModel, DescriptorModel, EffectModel, ItemModel, LayoutModel, ResourceCostModel, ResourceModel, Sheet, SkillModel, SpellModel, TraitModel */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/assertThisInitialized.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/getPrototypeOf.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/objectSpread.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/toConsumableArray.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/helpers/typeof.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/deep-equal/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mathjs/core.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-state-tree/dist/mobx-state-tree.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx/lib/mobx.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/sortablejs/Sortable.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./fontello/css/sheetforge-embedded.css
var sheetforge_embedded = __webpack_require__("H3yI");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("MVZn");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("QILm");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/mobx-state-tree/dist/mobx-state-tree.js
var mobx_state_tree = __webpack_require__("uqjs");

// CONCATENATED MODULE: ./source/utilities/noop.js
/* harmony default export */ var noop = (function () {});
// CONCATENATED MODULE: ./source/utilities/unique.js
/* harmony default export */ var unique = (function () {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return array.filter(function (item, index, all) {
    return all.indexOf(item) === index;
  });
});
// CONCATENATED MODULE: ./source/models/generic/ICategorizable/ICategorizable.js



/* harmony default export */ var ICategorizable = (function () {
  var getValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
  return mobx_state_tree["types"].model({}).volatile(function () {
    return {
      isICategorizable: true
    };
  }).views(function (self) {
    function getCategories() {
      if (!self.name) return [];
      var categories = self.name.split(':');
      categories.pop(); // remove the name

      return unique(categories.map(function (category) {
        return category.trim();
      }).filter(Boolean)).sort();
    }

    var lastUsedName = self.name;
    var categories = getCategories();
    return {
      get categories() {
        if (!self.name || self.name === lastUsedName) return categories;
        lastUsedName = self.name;
        categories = getCategories();
        return categories;
      },

      get categoryValue() {
        return getValue(self);
      }

    };
  });
});
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
function hash_hash() {
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
  return hash_hash(Math.random().toString());
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
math.import(__webpack_require__(/*! mathjs/lib/type/matrix/function/matrix */ "R4H5"));
math.import(__webpack_require__(/*! mathjs/lib/type/matrix/Matrix */ "ohYX"));
math.import(__webpack_require__(/*! mathjs/lib/type/matrix/DenseMatrix */ "ZS3Q"));
/* harmony default export */ var math_math = (math);
// CONCATENATED MODULE: ./source/utilities/math/toSymbols.js

/* harmony default export */ var toSymbols = (function (expression) {
  var fns = [];
  var symbols = [];
  math_math.parse(expression).traverse(function (node) {
    if (node.fn) {
      fns.push(node.fn.name);
    }

    if (node.type === 'SymbolNode' && !symbols.includes(node.name) && !fns.includes(node.name)) {
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











/* harmony default export */ var Attribute_Attribute = (mobx_state_tree["types"].compose(IIdentity, ICategorizable(function (self) {
  return self.modifiedValue();
}), IEditable_IEditable, mobx_state_tree["types"].model({
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
      return self.name.split(':').pop().trim().toLowerCase().replace(/[^a-z0-9]/ig, '');
    },

    get isComputed() {
      return typeof self.raw === 'string';
    }

  };
}).actions(function (self) {
  var computing = false;
  return {
    effects: function effects() {
      if (!self.character) return [];
      return self.character.activeEffects().filter(function (effect) {
        return effect.targetId === self.id;
      });
    },
    modifiedValue: function modifiedValue() {
      return (self.value() || 0) + self.modifier();
    },
    modifier: function modifier() {
      return math_math.sum(self.effects().map(function (effect) {
        return effect.modifier;
      }));
    },
    modifierText: function modifierText() {
      return self.effects().map(function (effect) {
        return "".concat(effect.sourceName(), ": ").concat(effect.modifier);
      }).join(', ');
    },
    value: function value() {
      if (!self.isComputed) return self.raw;
      if (self.character === null) return 0;
      if (computing) return 0;
      computing = true;
      var computed = 0;

      try {
        var values = toSymbols(self.raw).reduce(function (all, symbol) {
          var attribute = self.character.attributes.findBy('id', symbol);
          return Object.assign(all, defineProperty_default()({}, symbol, attribute ? attribute.modifiedValue() : 0));
        }, {});
        computed = calculate(self.raw, values);
      } catch (error) {
        // eslint-disable-next-line no-undef
        if (true) {
          // eslint-disable-next-line no-console
          console.error("Error computing: ".concat(self.raw));
        }

        computed = 0;
      }

      computing = false;
      return computed;
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




/* harmony default export */ var Descriptor_Descriptor = (mobx_state_tree["types"].compose(IIdentity, ICategorizable(), IEditable_IEditable, mobx_state_tree["types"].model({
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
// CONCATENATED MODULE: ./source/models/Effect/Effect.js






/* harmony default export */ var Effect_Effect = (mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model({
  condition: '',
  modifier: 0,
  targetId: ''
}).actions(function (self) {
  return {
    afterAttach: function afterAttach() {
      if (!self.targetId && self.available().length) {
        // eslint-disable-next-line no-param-reassign
        self.targetId = self.available().first.id;
      }
    },
    available: function available() {
      var character = self.character();
      return character ? character.attributes : Collection(Attribute_Attribute).create([]);
    },
    character: function character() {
      return findParent(self, function (p) {
        return p.isCharacter;
      });
    },
    isApplicable: function isApplicable() {
      var character = self.character();
      return Boolean(!self.condition || character && character.conditions.includes(self.condition));
    },
    source: function source() {
      return findParent(self, function (p) {
        return p.name;
      }) || null;
    },
    sourceName: function sourceName() {
      return self.source() ? self.source().name : 'Unknown';
    },
    target: function target() {
      var character = self.character();
      return character ? character.attributes.findBy('name', self.targetId) : null;
    }
  };
})).named('Effect'));
// CONCATENATED MODULE: ./source/models/Item/Item.js






/* harmony default export */ var Item_Item = (mobx_state_tree["types"].compose(IIdentity, ICategorizable(), IEditable_IEditable, mobx_state_tree["types"].model({
  description: '',
  effects: Collection(Effect_Effect),
  equipped: false,
  name: 'New Item...'
})).named('Item'));
// CONCATENATED MODULE: ./source/models/Resource/Resource.js




/* harmony default export */ var Resource_Resource = (mobx_state_tree["types"].compose(IIdentity, ICategorizable(), IEditable_IEditable, mobx_state_tree["types"].model({
  current: 0,
  maximum: 10,
  name: 'New Resource...'
})).named('Resource'));
// CONCATENATED MODULE: ./source/models/Skill/Skill.js




/* harmony default export */ var Skill_Skill = (mobx_state_tree["types"].compose(IIdentity, ICategorizable(function (self) {
  return self.mastery;
}), IEditable_IEditable, mobx_state_tree["types"].model({
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






/* harmony default export */ var ResourceCost_ResourceCost = (mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model({
  amount: 0,
  resourceName: ''
}).views(function (self) {
  return {
    get available() {
      return self.character ? self.character.resources : Collection(Resource_Resource).create([]);
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








/* harmony default export */ var Spell_Spell = (mobx_state_tree["types"].compose(IIdentity, ICategorizable(function (self) {
  return self.level;
}), IEditable_IEditable, mobx_state_tree["types"].model({
  costs: Collection(ResourceCost_ResourceCost),
  // Resources
  description: '',
  effects: Collection(Effect_Effect),
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






/* harmony default export */ var Trait_Trait = (mobx_state_tree["types"].compose(IIdentity, ICategorizable(function (self) {
  return self.value;
}), IEditable_IEditable, mobx_state_tree["types"].model('Trait', {
  effects: Collection(Effect_Effect),
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
  attributes: Collection(Attribute_Attribute),
  conditions: Collection(mobx_state_tree["types"].string),
  // ['vs Goblins', 'Crinos Form']
  descriptors: Collection(Descriptor_Descriptor),
  experience: 0,
  items: Collection(Item_Item),
  // equipped / unequipped, have Effects
  resources: Collection(Resource_Resource),
  skills: Collection(Skill_Skill),
  spells: Collection(Spell_Spell),
  traits: Collection(Trait_Trait) // have Effects

}).volatile(function () {
  return {
    isCharacter: true
  };
}).actions(function (self) {
  return {
    activeEffects: function activeEffects() {
      return self.effects().filter(function (effect) {
        return effect && effect.isApplicable();
      });
    },
    availableConditions: function availableConditions() {
      return self.effects().map(function (e) {
        return e.condition;
      }).concat(self.conditions.asArray).sort().filter(function (effect, i, all) {
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
// CONCATENATED MODULE: ./source/models/types/between.js

/* harmony default export */ var between = (function (min, max) {
  var defaultTo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : min;
  return mobx_state_tree["types"].optional(mobx_state_tree["types"].refinement(mobx_state_tree["types"].number, function (n) {
    return n === undefined || n >= min && n <= max;
  }), defaultTo);
});
// CONCATENATED MODULE: ./source/models/Layout/Layout.js





var Layout_Layout = mobx_state_tree["types"].compose(IIdentity, IEditable_IEditable, mobx_state_tree["types"].model({
  categorize: false,
  children: Collection(mobx_state_tree["types"].late(function () {
    return Layout_Layout;
  })),
  colSpan: between(1, 4, 1),
  columns: between(1, 4, 1),
  filter: mobx_state_tree["types"].maybe(mobx_state_tree["types"].string),
  sortOption: mobx_state_tree["types"].maybe(mobx_state_tree["types"].number),
  title: mobx_state_tree["types"].union(mobx_state_tree["types"].maybe(mobx_state_tree["types"].string), mobx_state_tree["types"].literal(false)),
  type: mobx_state_tree["types"].maybe(mobx_state_tree["types"].string)
})).named('Layout');
/* harmony default export */ var models_Layout_Layout = (Layout_Layout);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("lwsE");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("W8MJ");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("a1gu");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("Nsbk");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("PJYZ");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("7W2i");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/mobx-react/index.js
var mobx_react = __webpack_require__("NbXW");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./source/utilities/bound.js
/* harmony default export */ var bound = (function (value, _ref) {
  var min = _ref.min,
      max = _ref.max;
  if (min !== undefined && value < min) return min;
  if (max !== undefined && value > max) return max;
  return value;
});
// EXTERNAL MODULE: ./source/components/Editable/Editable.scss
var Editable_Editable = __webpack_require__("S5k1");

// CONCATENATED MODULE: ./source/components/Editable/Editable.js













var TYPES = [// Strings
'text', 'multiline', // Checkboxes
'boolean', // Numbers
'number', 'slider'];

var Editable_Editable_Editable =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Editable, _React$Component);

  function Editable() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Editable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Editable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      editing: false,
      resetValue: _this.props.value
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getEditorType", function () {
      var value = _this.props.value;
      var type = _this.props.type;

      if (type !== undefined && TYPES.includes(type)) {
        return type;
      }

      type = typeof_default()(value);

      if (type === 'string') {
        return value.includes('\n') ? 'multiline' : 'text';
      }

      if (['boolean', 'number'].includes(type)) {
        return type;
      }

      return 'text';
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "resetChanges", function () {
      _this.props.onChange(_this.state.resetValue, _this.props.value);

      _this.handleToggleEditing();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "createRefWithAutoFocus", function (editor) {
      if (!editor) {
        return;
      }

      _this.editor = editor;

      var editorType = _this.getEditorType();

      if (editorType !== 'boolean' && typeof editor.focus === 'function') {
        editor.focus();
      }

      if (['boolean', 'number'].includes(_this.getEditorType())) {
        return;
      }

      if (_this.props.forceEditMode && typeof editor.setSelectionRange === 'function') {
        editor.setSelectionRange(editor.value.length, editor.value.length);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChange", function (_ref) {
      var target = _ref.target;
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max;
      var value = target.value; // eslint-disable-next-line default-case

      switch (_this.getEditorType()) {
        case 'slider':
        case 'number':
          value = parseFloat(value || 0); // eslint-disable-next-line prefer-destructuring

          if (Number.isNaN(value)) {
            value = _this.props.value;
          }

          value = bound(value, {
            max: max,
            min: min
          });
      }

      _this.props.onChange(value, _this.state.resetValue);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleKeys", function (event) {
      var target = event.target,
          key = event.key,
          ctrlKey = event.ctrlKey,
          metaKey = event.metaKey;

      if (_this.props.onKeyDown !== noop) {
        _this.props.onKeyDown(event);

        if (event.isDefaultPrevented()) return;
      }

      if (key === 'Escape') {
        _this.resetChanges();
      }

      if (key === 'Enter') {
        if (target.nodeName !== 'TEXTAREA' || ctrlKey || metaKey) {
          _this.handleToggleEditing();
        }
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleReceivingFocus", function () {
      if (_this.props.readOnly) {
        return;
      }

      if (!_this.state.editing) {
        _this.handleToggleEditing();
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleToggleEditing", function () {
      if (_this.props.readOnly) {
        return;
      }

      var editing = !_this.editing;

      _this.setState({
        editing: editing,
        resetValue: _this.props.value
      }, function () {
        if (_this.state.editing) {
          _this.props.onEditStart();
        } else {
          _this.props.onEditEnd();
        }
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "selectOnFocus", function (event) {
      return event.target.select();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "toggleBoolean", function () {
      _this.props.onEditStart();

      _this.props.onChange(!_this.props.value, _this.props.value);

      _this.props.onEditEnd();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderBoolean", function () {
      return react_default.a.createElement("input", {
        type: "checkbox",
        checked: Boolean(_this.props.value),
        disabled: _this.props.readOnly,
        onChange: _this.toggleBoolean,
        ref: _this.createRefWithAutoFocus
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderMultiline", function () {
      if (!_this.editing) {
        var lines = (_this.props.value || _this.props.placeholder).split('\n');

        var paragraphs = lines.map(function (line, index) {
          return react_default.a.createElement("p", {
            key: index
          }, line);
        });
        var className = ['multiline', _this.props.value ? '' : 'placeholder'].join(' ').trim();
        return react_default.a.createElement("div", {
          className: className,
          onClick: _this.handleToggleEditing
        }, paragraphs);
      }

      return react_default.a.createElement("textarea", {
        disabled: _this.props.readOnly,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        onFocus: _this.selectOnFocus,
        onKeyDown: _this.handleKeys,
        onKeyPress: _this.props.onKeyPress,
        onKeyUp: _this.props.onKeyUp,
        placeholder: _this.props.placeholder,
        ref: _this.createRefWithAutoFocus,
        rows: _this.props.value.split('\n').length,
        value: _this.props.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderNumber", function () {
      if (!_this.editing) {
        return _this.renderStatic();
      }

      return react_default.a.createElement("input", {
        type: "number",
        disabled: _this.props.readOnly,
        max: _this.props.max,
        min: _this.props.min,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        onFocus: _this.selectOnFocus,
        onKeyDown: _this.handleKeys,
        onKeyPress: _this.props.onKeyPress,
        onKeyUp: _this.props.onKeyUp,
        placeholder: _this.props.placeholder,
        ref: _this.createRefWithAutoFocus,
        step: _this.props.step,
        value: _this.props.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderSlider", function () {
      return react_default.a.createElement("input", {
        type: "range",
        disabled: _this.props.readOnly,
        max: _this.props.max,
        min: _this.props.min,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        onKeyDown: _this.props.onKeyDown,
        onKeyPress: _this.props.onKeyPress,
        onKeyUp: _this.props.onKeyUp,
        ref: _this.createRefWithAutoFocus,
        step: _this.props.step,
        value: _this.props.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderText", function () {
      if (!_this.editing) {
        return _this.renderStatic();
      }

      return react_default.a.createElement("input", {
        type: "text",
        disabled: _this.props.readOnly,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        onFocus: _this.selectOnFocus,
        onKeyDown: _this.handleKeys,
        onKeyPress: _this.props.onKeyPress,
        onKeyUp: _this.props.onKeyUp,
        placeholder: _this.props.placeholder,
        ref: _this.createRefWithAutoFocus,
        value: _this.props.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderStatic", function () {
      var _this$props2 = _this.props,
          placeholder = _this$props2.placeholder,
          readOnlyValue = _this$props2.readOnlyValue,
          value = _this$props2.value;
      var showPlaceholder = placeholder && !value;
      var displayValue = readOnlyValue !== undefined ? readOnlyValue : value;
      var className = showPlaceholder ? 'placeholder' : '';
      return react_default.a.createElement("span", {
        className: className,
        onClick: _this.handleToggleEditing
      }, showPlaceholder ? placeholder : displayValue);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderEditor", function () {
      switch (_this.getEditorType()) {
        case 'boolean':
          return _this.renderBoolean();

        case 'slider':
          return _this.renderSlider();

        case 'multiline':
          return _this.renderMultiline();

        case 'number':
          return _this.renderNumber();

        default:
          return _this.renderText();
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      var _this$props3 = _this.props,
          className = _this$props3.className,
          readOnly = _this$props3.readOnly;
      var classes = ['editable', _this.editing ? 'editing' : '', className || '', readOnly ? 'readonly' : ''].filter(Boolean);
      var props = {};

      if (!readOnly && !_this.editing) {
        props = {
          onFocus: _this.handleReceivingFocus,
          tabIndex: '0'
        };
      }

      return react_default.a.createElement("div", extends_default()({
        className: classes.join(' ')
      }, props), _this.renderEditor());
    });

    return _this;
  }

  createClass_default()(Editable, [{
    key: "editing",
    get: function get() {
      return this.props.forceEditMode || this.state.editing;
    }
  }]);

  return Editable;
}(react_default.a.Component);

defineProperty_default()(Editable_Editable_Editable, "displayName", 'Editable');

defineProperty_default()(Editable_Editable_Editable, "defaultProps", {
  className: '',
  forceEditMode: false,
  max: undefined,
  min: undefined,
  onChange: noop,
  onEditEnd: noop,
  onEditStart: noop,
  onKeyDown: noop,
  onKeyPress: noop,
  onKeyUp: noop,
  placeholder: '',
  readOnly: false,
  readOnlyValue: undefined,
  step: 1,
  type: undefined,
  value: ''
});


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("RIqP");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./source/utilities/range.js

/* harmony default export */ var range = (function (start, end) {
  var step = start <= end ? 1 : -1;
  var length = Math.abs(end - start) / Math.abs(step) + 1;
  return Array.apply(void 0, toConsumableArray_default()(Array(length))).map(function (_, i) {
    return start + i * step;
  });
});
// EXTERNAL MODULE: ./source/components/Rating/Rating.scss
var Rating_Rating = __webpack_require__("VHFM");

// CONCATENATED MODULE: ./source/components/Rating/Rating.js













var Rating_Rating_Rating =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Rating, _Component);

  function Rating() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Rating);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Rating)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleIconClick", function (event) {
      var number = parseInt(event.target.getAttribute('data-number'), 10);

      _this.props.onChange(number === _this.props.current ? number - 1 : number);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "render", function () {
      var _this$props = _this.props,
          allowExcess = _this$props.allowExcess,
          current = _this$props.current,
          iconExcess = _this$props.iconExcess,
          iconOff = _this$props.iconOff,
          iconOn = _this$props.iconOn,
          maximum = _this$props.maximum;
      var total = allowExcess ? math_math.max(current, maximum) : maximum;
      return react_default.a.createElement("div", {
        className: "rating"
      }, total > 0 || allowExcess && current > 0 ? range(1, bound(total, {
        min: 1
      })).map(function (number) {
        return react_default.a.createElement("span", {
          "data-number": number,
          key: number,
          onClick: _this.handleIconClick,
          title: number
        }, number <= current && number <= maximum && iconOn, number > current && number <= maximum && iconOff, number > maximum && iconExcess);
      }) : null);
    });

    return _this;
  }

  return Rating;
}(react["Component"]);

defineProperty_default()(Rating_Rating_Rating, "defaultProps", {
  allowExcess: false,
  current: 0,
  iconExcess: react_default.a.createElement("span", {
    className: "dot excess icon-add"
  }),
  iconOff: react_default.a.createElement("span", {
    className: "dot empty"
  }),
  iconOn: react_default.a.createElement("span", {
    className: "dot filled"
  }),
  maximum: 5,
  onChange: noop
});


// EXTERNAL MODULE: ./source/components/Attribute/Attribute.scss
var components_Attribute_Attribute = __webpack_require__("i9wh");

// CONCATENATED MODULE: ./source/components/Attribute/Attribute.js








var Attribute_class, _class2, Attribute_temp;











var Attribute_Attribute_Attribute = Object(mobx_react["observer"])(Attribute_class = (Attribute_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Attribute, _Component);

  function Attribute() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Attribute);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Attribute)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "CACHE", {});

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSnapshot", function (snapshot) {
      var effects = _this.props.model.effects().map(function (e) {
        return e.toJSON();
      });

      if (JSON.stringify(effects) !== JSON.stringify(_this.CACHE.effects) || JSON.stringify(snapshot.conditions) !== _this.CACHE.conditions || _this.CACHE.value !== _this.props.model.value()) {
        _this.CACHE.conditions = JSON.stringify(snapshot.conditions);
        _this.CACHE.effects = effects;
        _this.CACHE.value = _this.props.model.value();

        _this.forceUpdate();
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeName", function (name) {
      var id = _this.props.model.id;

      _this.props.model.set({
        name: name
      });

      _this.props.model.character.effects().filter(function (effect) {
        return effect.targetId === id;
      }).forEach(function (effect) {
        effect.set({
          targetId: ''
        });
        effect.set({
          targetId: _this.props.model.id
        });
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCommitName", function () {
      return _this.props.model.name === '' && _this.props.onDelete(_this.props.model);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeValue", function (raw) {
      var value = String(raw).replace(/[^a-z0-9+*()\-/, ]/gi, '');

      if (!Number.isNaN(Number(raw))) {
        value = bound(Number(raw) || '', {
          max: 999,
          min: -99
        });
      }

      _this.props.model.set({
        raw: value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCommitValue", function () {
      if (String(_this.props.model.raw) === '') _this.props.model.set({
        raw: 0
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleValueKeyDown", function (_ref) {
      var key = _ref.key;
      var model = _this.props.model;
      if (model.isComputed) return;

      switch (key) {
        case 'ArrowUp':
          model.set({
            raw: model.value() + 1
          });
          break;

        case 'ArrowDown':
          model.set({
            raw: model.value() - 1
          });
          break;

        default:
      }
    });

    return _this;
  }

  createClass_default()(Attribute, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onSnapshotDisposer = Object(mobx_state_tree["onSnapshot"])(this.props.model.character, this.handleSnapshot);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.onSnapshotDisposer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          model = _this$props.model,
          rating = _this$props.rating;
      var modifiedValue = model.modifiedValue();
      var value = model.value();
      var className = ['attribute', "as-".concat(rating ? 'rating' : 'numeric'), "".concat(model.isComputed ? 'is' : 'not', "-computed")].join(' ');
      var modifier = model.modifier();
      var modifierClassName = ['modifier', modifier > 0 && 'positive', modifier < 0 && 'negative', modifier === 0 && 'zero'].filter(Boolean).join(' ');
      return react_default.a.createElement("div", {
        className: className
      }, react_default.a.createElement(Editable_Editable_Editable, {
        className: "name",
        onChange: this.handleChangeName,
        onEditEnd: this.handleCommitName,
        value: model.name
      }), react_default.a.createElement(Editable_Editable_Editable, {
        className: "value rating",
        onChange: this.handleChangeValue,
        onEditEnd: this.handleCommitValue,
        onKeyDown: this.handleValueKeyDown,
        readOnlyValue: react_default.a.createElement(Rating_Rating_Rating, {
          allowExcess: true,
          current: modifiedValue,
          maximum: value
        }),
        type: "text",
        value: model.raw
      }), react_default.a.createElement(Editable_Editable_Editable, {
        className: "value numeric",
        onChange: this.handleChangeValue,
        onEditEnd: this.handleCommitValue,
        onKeyDown: this.handleValueKeyDown,
        readOnlyValue: value,
        type: "text",
        value: model.raw
      }), model.effects().length !== 0 && react_default.a.createElement("div", {
        className: modifierClassName,
        title: model.modifierText()
      }, modifiedValue));
    }
  }]);

  return Attribute;
}(react["Component"]), defineProperty_default()(_class2, "defaultProps", {
  model: {},
  onDelete: noop,
  rating: false
}), defineProperty_default()(_class2, "sortOptions", [{
  display: 'icon-sort-name-asc',
  getter: function getter(model) {
    return model.name;
  }
}, {
  display: 'icon-sort-value-asc',
  getter: function getter(model) {
    return model.modifiedValue();
  }
}]), Attribute_temp)) || Attribute_class;

/* harmony default export */ var source_components_Attribute_Attribute = (Attribute_Attribute_Attribute);
// EXTERNAL MODULE: ./source/components/Descriptor/Descriptor.scss
var components_Descriptor_Descriptor = __webpack_require__("k8Dq");

// CONCATENATED MODULE: ./source/components/Descriptor/Descriptor.js








var Descriptor_class, Descriptor_class2, Descriptor_temp;







var Descriptor_Descriptor_Descriptor = Object(mobx_react["observer"])(Descriptor_class = (Descriptor_temp = Descriptor_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Descriptor, _Component);

  function Descriptor() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Descriptor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Descriptor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeName", function (name) {
      return _this.props.model.set({
        name: name
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeValue", function (value) {
      return _this.props.model.set({
        value: value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCommitName", function () {
      return _this.props.model.name === '' && _this.props.onDelete(_this.props.model);
    });

    return _this;
  }

  createClass_default()(Descriptor, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        className: "descriptor"
      }, react_default.a.createElement(Editable_Editable_Editable, {
        className: "name",
        onChange: this.handleChangeName,
        onEditEnd: this.handleCommitName,
        value: this.props.model.name
      }), react_default.a.createElement(Editable_Editable_Editable, {
        className: "value",
        type: "text",
        onChange: this.handleChangeValue,
        value: this.props.model.value
      }));
    }
  }]);

  return Descriptor;
}(react["Component"]), defineProperty_default()(Descriptor_class2, "defaultProps", {
  model: {},
  onDelete: noop
}), defineProperty_default()(Descriptor_class2, "sortOptions", [{
  display: 'icon-sort-name-asc',
  getter: function getter(model) {
    return model.name;
  }
}, {
  display: 'icon-sort-value-asc',
  getter: function getter(model) {
    return model.value;
  }
}]), Descriptor_temp)) || Descriptor_class;

/* harmony default export */ var source_components_Descriptor_Descriptor = (Descriptor_Descriptor_Descriptor);
// EXTERNAL MODULE: ./source/components/Effect/Effect.scss
var components_Effect_Effect = __webpack_require__("5UjR");

// CONCATENATED MODULE: ./source/components/Effect/Effect.js








var Effect_class, Effect_class2, Effect_temp;






var Effect_Effect_Effect = Object(mobx_react["observer"])(Effect_class = (Effect_temp = Effect_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Effect, _Component);

  function Effect() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Effect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Effect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeCondition", function (condition) {
      return _this.props.model.set({
        condition: condition
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeModifier", function (modifier) {
      return _this.props.model.set({
        modifier: modifier
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeTarget", function (_ref) {
      var value = _ref.target.value;
      return _this.props.model.set({
        targetId: value
      });
    });

    return _this;
  }

  createClass_default()(Effect, [{
    key: "render",
    value: function render() {
      var _this$props$model = this.props.model,
          available = _this$props$model.available,
          _this$props$model$con = _this$props$model.condition,
          condition = _this$props$model$con === void 0 ? '' : _this$props$model$con,
          isApplicable = _this$props$model.isApplicable,
          modifier = _this$props$model.modifier,
          targetId = _this$props$model.targetId;
      return react_default.a.createElement("div", {
        className: "effect ".concat(isApplicable ? 'applicable' : '').trim()
      }, react_default.a.createElement("select", {
        className: "target",
        value: targetId,
        onChange: this.handleChangeTarget
      }, available().map(function (_ref2) {
        var hash = _ref2.hash,
            id = _ref2.id,
            name = _ref2.name;
        return react_default.a.createElement("option", {
          key: hash,
          value: id
        }, name);
      })), react_default.a.createElement(Editable_Editable_Editable, {
        className: "modifier",
        max: 999,
        min: -99,
        onChange: this.handleChangeModifier,
        value: modifier
      }), react_default.a.createElement(Editable_Editable_Editable, {
        className: "condition",
        onChange: this.handleChangeCondition,
        placeholder: "Any",
        value: condition
      }));
    }
  }]);

  return Effect;
}(react["Component"]), defineProperty_default()(Effect_class2, "defaultProps", {
  model: {}
}), defineProperty_default()(Effect_class2, "sortOptions", [{
  display: 'icon-sort-name-asc',
  getter: function getter(model) {
    return [!model.targetId, model.targetId];
  }
}, {
  display: 'icon-sort-value-asc',
  getter: function getter(model) {
    return [!model.condition, model.modifier];
  }
}]), Effect_temp)) || Effect_class;

/* harmony default export */ var source_components_Effect_Effect = (Effect_Effect_Effect);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");

// EXTERNAL MODULE: ./source/components/Expandable/Expandable.scss
var Expandable_Expandable = __webpack_require__("0dDA");

// CONCATENATED MODULE: ./source/components/Expandable/Expandable.js













var Expandable_Expandable_Expandable =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Expandable, _Component);

  function Expandable() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Expandable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Expandable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      expanded: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "expander", react_default.a.createRef());

    defineProperty_default()(assertThisInitialized_default()(_this), "handleToggle", function () {
      var classList = _this.expander.current.parentElement.classList;
      var expanded = _this.state.expanded; // eslint-disable-next-line react/no-access-state-in-setstate

      _this.setState({
        expanded: !expanded
      }, function () {
        _this.props.onToggle(!expanded);

        classList[!expanded ? 'add' : 'remove']('expanded');
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderExpanded", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          omitItemWrapper = _this$props.omitItemWrapper;
      return omitItemWrapper ? children : react_default.a.createElement("div", {
        className: "expandable"
      }, " ", children);
    });

    return _this;
  }

  createClass_default()(Expandable, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        expanded: this.props.expandByDefault
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.expander.current.parentElement.classList.add('expandable-wrapper');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          toggleButtonParent = _this$props2.toggleButtonParent,
          toggleButtonText = _this$props2.toggleButtonText;
      var toggleState = this.state.expanded ? 'expanded' : 'collapsed';
      var buttonProps = {
        className: "expandable-toggle icon-".concat(toggleState),
        onClick: this.handleToggle,
        ref: this.expander
      };
      var toggleButton = react_default.a.createElement("div", extends_default()({}, buttonProps, {
        text: toggleButtonText
      }));
      return react_default.a.createElement(react["Fragment"], null, toggleButtonParent ? Object(react_dom["createPortal"])(toggleButton, toggleButtonParent) : toggleButton, this.state.expanded && this.renderExpanded());
    }
  }]);

  return Expandable;
}(react["Component"]);

defineProperty_default()(Expandable_Expandable_Expandable, "defaultProps", {
  expandByDefault: false,
  omitItemWrapper: false,
  onToggle: noop,
  toggleButtonParent: null,
  toggleButtonText: ''
});


// EXTERNAL MODULE: ./node_modules/sortablejs/Sortable.js
var Sortable = __webpack_require__("U/5H");
var Sortable_default = /*#__PURE__*/__webpack_require__.n(Sortable);

// EXTERNAL MODULE: ./source/components/MultiToggle/MultiToggle.scss
var MultiToggle_MultiToggle = __webpack_require__("djCb");

// CONCATENATED MODULE: ./source/components/MultiToggle/MultiToggle.js












var MultiToggle_MultiToggle_MultiToggle =
/*#__PURE__*/
function (_Component) {
  inherits_default()(MultiToggle, _Component);

  function MultiToggle() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, MultiToggle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(MultiToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      selected: null
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleOptionClick", function (_ref) {
      var target = _ref.target;

      var index = toConsumableArray_default()(target.parentElement.children).indexOf(target);

      var selected = _this.props.options[index];

      if (_this.props.selected !== undefined) {
        _this.props.onChange(selected);
      } else {
        _this.setState({
          selected: selected
        });
      }
    });

    return _this;
  }

  createClass_default()(MultiToggle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          options = _this$props.options;
      var selected = this.props.selected !== undefined ? this.props.selected : this.state.selected;
      return react_default.a.createElement("div", {
        className: "multi-toggle ".concat(className).trim()
      }, options.map(function (option, key) {
        return react_default.a.createElement("div", {
          className: "toggle ".concat(option === selected ? 'on' : 'off').trim(),
          key: key,
          onClick: _this2.handleOptionClick
        }, option.display);
      }));
    }
  }]);

  return MultiToggle;
}(react["Component"]);

defineProperty_default()(MultiToggle_MultiToggle_MultiToggle, "defaultProps", {
  className: '',
  onChange: noop,
  options: [],
  selected: undefined
});


// CONCATENATED MODULE: ./source/utilities/debounce.js
function debounce(func, wait, immediate) {
  var _this = this;

  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(_this, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(_this, args);
  };
}
// EXTERNAL MODULE: ./source/components/List/List.scss
var List_List = __webpack_require__("e8LY");

// CONCATENATED MODULE: ./source/components/List/List.js



















var NO_CATEGORY = 'Uncategorized';

var buildSorter = function buildSorter(getter) {
  var reversed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (A, B) {
    var a = getter(A);
    var b = getter(B);

    if (Array.isArray(a) && Array.isArray(b)) {
      for (var i = 0; i < a.length; i += 1) {
        if (a[i] !== b[i]) {
          if (reversed) return b[i] < a[i] ? -1 : 1;
          return a[i] < b[i] ? -1 : 1;
        }
      }

      return 0;
    }

    if (typeof a === 'number' && typeof b === 'number') {
      if (a === b) return 0;
      if (reversed) return b < a ? -1 : 1;
      return a < b ? -1 : 1;
    }

    var aString = String(a);
    var bString = String(b);
    if (reversed) return bString.localeCompare(aString);
    return aString.localeCompare(bString);
  };
};

/* harmony default export */ var components_List_List = (function (Model, Component) {
  var _class, _temp;

  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var sortOptions = (Component.sortOptions || []).map(function (sorter) {
    return objectSpread_default()({}, sorter, {
      comparitor: buildSorter(sorter.getter),
      display: typeof sorter.display === 'string' ? react_default.a.createElement("span", {
        className: sorter.display
      }) : sorter.display
    });
  });
  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    inherits_default()(List, _React$Component);

    function List() {
      var _getPrototypeOf2;

      var _this;

      classCallCheck_default()(this, List);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(List)).call.apply(_getPrototypeOf2, [this].concat(args)));

      defineProperty_default()(assertThisInitialized_default()(_this), "Component", Component);

      defineProperty_default()(assertThisInitialized_default()(_this), "Model", Model);

      defineProperty_default()(assertThisInitialized_default()(_this), "container", react_default.a.createRef());

      defineProperty_default()(assertThisInitialized_default()(_this), "expandedItems", {});

      defineProperty_default()(assertThisInitialized_default()(_this), "filterEl", react_default.a.createRef());

      defineProperty_default()(assertThisInitialized_default()(_this), "onDataSnapshotDisposer", noop);

      defineProperty_default()(assertThisInitialized_default()(_this), "onLayoutSnapshotDisposer", noop);

      defineProperty_default()(assertThisInitialized_default()(_this), "sortable", null);

      defineProperty_default()(assertThisInitialized_default()(_this), "state", {
        expanded: {},
        sortOption: null
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "getCategoryItems", function (items, category) {
        return category && category !== NO_CATEGORY ? items.filter(function (item) {
          return (item.categories || []).includes(category);
        }) : items.filter(function (item) {
          return (item.categories || []).length === 0;
        });
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "handleAdd", function () {
        _this.props.collection.push(Model.create({}));

        _this.forceUpdate();
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "handleDelete", function (_ref) {
        var target = _ref.target;
        var index = parseInt(target.parentNode.getAttribute('data-index'), 10);

        _this.props.collection.deleteAt(index);

        _this.forceUpdate();
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "handleFilterChange", function (_ref2) {
        var target = _ref2.target;
        return _this.props.layout.set({
          filter: target.value
        });
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "handleSort", function () {
        return _this.props.collection.sortBy('name');
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "handleSortChange", function (clicked) {
        var current = _this.state.sortOption;

        _this.setState({
          sortOption: current === clicked ? null : clicked
        }, function () {
          _this.props.layout.set({
            sortOption: current === clicked ? undefined : sortOptions.indexOf(clicked)
          });
        });
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "handleToggleCategorized", function () {
        _this.props.layout.set({
          categorize: !_this.props.layout.categorize
        });
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "handleToggleExpanded", function (hash, expanded) {
        _this.setState(function (state) {
          return objectSpread_default()({}, state, {
            expanded: objectSpread_default()({}, state.expanded, defineProperty_default()({}, hash, expanded))
          });
        });
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "renderCategoryWidget", function () {
        var layout = _this.props.layout;

        var _assertThisInitialize = assertThisInitialized_default()(_this),
            categories = _assertThisInitialize.categories;

        if (!categories.length) return null;
        var className = ['categorize icon-categorize', layout.categorize ? 'on' : 'off'].join(' ');
        return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", extends_default()({
          className: className
        }, {
          onClick: _this.handleToggleCategorized
        })), react_default.a.createElement("select", {
          className: "filter",
          onChange: _this.handleFilterChange,
          ref: _this.filterEl,
          tabIndex: -1,
          value: layout.filter
        }, react_default.a.createElement("option", {
          value: ""
        }, "All"), categories.map(function (name) {
          return react_default.a.createElement("option", {
            key: name,
            value: name
          }, name);
        })));
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "renderSortWidget", function () {
        if (!_this.props.sortable) return null;
        if (!sortOptions.length) return null;
        return react_default.a.createElement(MultiToggle_MultiToggle_MultiToggle, {
          className: "sorter",
          onChange: _this.handleSortChange,
          options: sortOptions,
          selected: _this.state.sortOption
        });
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "renderCategory", function (category, data) {
        var columns = _this.props.columns;

        var categoryItems = _this.getCategoryItems(data, category);

        if (!categoryItems.length) return null;
        var values = categoryItems.map(function (item) {
          return item.categoryValue;
        });
        var min = Math.min.apply(Math, toConsumableArray_default()(values));
        var max = Math.max.apply(Math, toConsumableArray_default()(values));
        return react_default.a.createElement("div", {
          key: category,
          className: "category"
        }, react_default.a.createElement("div", {
          className: "details"
        }, react_default.a.createElement("div", {
          className: "title"
        }, "Category: ", category, " (", categoryItems.length, ")"), !Number.isNaN(min) && !Number.isNaN(max) && react_default.a.createElement("div", {
          className: "range"
        }, min, "-", max)), react_default.a.createElement("div", {
          className: "category-items",
          style: {
            columns: columns
          }
        }, categoryItems.map(_this.renderItem)));
      });

      defineProperty_default()(assertThisInitialized_default()(_this), "renderItem", function (model) {
        var _this$props = _this.props,
            collection = _this$props.collection,
            layout = _this$props.layout,
            sortable = _this$props.sortable;
        var _this$state = _this.state,
            expanded = _this$state.expanded,
            sortOption = _this$state.sortOption;
        var sorted = sortable && sortOption !== null;
        var categorized = layout && layout.categorize;
        return react_default.a.createElement("div", {
          className: "list-item-wrapper ".concat(expanded[model.hash] ? 'expanded' : '').trim(),
          "data-index": collection.indexOf(model),
          key: model.hash
        }, !sorted && !categorized && react_default.a.createElement("div", {
          className: "drag-handle"
        }), react_default.a.createElement(Component, {
          model: model,
          onDelete: collection.delete,
          onToggleExpanded: _this.handleToggleExpanded
        }), react_default.a.createElement("button", {
          className: "icon-remove",
          onClick: _this.handleDelete
        }));
      });

      return _this;
    }

    createClass_default()(List, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        if (this.props.layout) {
          var sortOptionIndex = this.props.layout.sortOption;

          if (sortOptions.length && sortOptionIndex !== undefined) {
            this.setState({
              sortOption: sortOptions[sortOptionIndex] || null
            });
          }

          this.onLayoutSnapshotDisposer = Object(mobx_state_tree["onSnapshot"])(this.props.layout, debounce(function () {
            return _this2.forceUpdate();
          }, 100, true));
        }

        var sortable = this.props.sortable;

        if (sortable) {
          this.sortable = Sortable_default.a.create(this.container.current, {
            disabled: !sortable,
            draggable: '.list-item-wrapper',
            handle: '.drag-handle',
            onEnd: function onEnd() {
              _this2.container.current.classList.remove('dragging');

              _this2.props.collection.replace(toConsumableArray_default()(_this2.container.current.querySelectorAll('.list-item-wrapper')).map(function (item) {
                return parseInt(item.getAttribute('data-index'), 10);
              }).map(function (targetIndex) {
                return _this2.props.collection.at(targetIndex);
              }));
            },
            onStart: function onStart() {
              return _this2.container.current.classList.add('dragging');
            }
          });
        }

        this.onDataSnapshotDisposer = Object(mobx_state_tree["onSnapshot"])(this.props.collection, function () {
          return _this2.forceUpdate();
        });
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps() {
        if (this.sortable) this.sortable.option('disabled', !this.props.sortable);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.onDataSnapshotDisposer();
        this.onLayoutSnapshotDisposer();
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props2 = this.props,
            _this$props2$classNam = _this$props2.className,
            className = _this$props2$classNam === void 0 ? '' : _this$props2$classNam,
            columns = _this$props2.columns,
            _this$props2$layout = _this$props2.layout,
            layout = _this$props2$layout === void 0 ? {} : _this$props2$layout,
            title = _this$props2.title;
        var sortOption = this.state.sortOption;
        var categories = this.categories;
        var data = this.props.collection.asArray;
        if (sortOption !== null) data = data.sort(sortOption.comparitor);
        var hasCategories = Boolean(categories.length);

        if (hasCategories && layout.filter) {
          data = this.getCategoryItems(data, layout.filter);
          categories = [layout.filter];
        }

        var listStyle = {
          columns: layout.categorize ? 1 : columns
        };
        return react_default.a.createElement("div", {
          className: "list ".concat(className).trim(),
          ref: this.container,
          style: listStyle
        }, react_default.a.createElement("div", {
          className: "title-bar"
        }, this.renderSortWidget(), this.renderCategoryWidget(), react_default.a.createElement("div", {
          className: "text"
        }, title), react_default.a.createElement("button", {
          className: "add icon-add",
          onClick: this.handleAdd
        })), hasCategories && layout.categorize ? categories.map(function (category) {
          return _this3.renderCategory(category, data);
        }) : data.map(this.renderItem));
      }
    }, {
      key: "categories",
      get: function get() {
        var list = this.props.collection.asArray.reduce(function (all, next) {
          return all.concat(next.categories || []);
        }, []);
        if (!list.length) return [];
        return unique(list.filter(function (item) {
          return item !== NO_CATEGORY;
        })).sort().concat(NO_CATEGORY);
      }
    }]);

    return List;
  }(react_default.a.Component), defineProperty_default()(_class, "defaultProps", objectSpread_default()({
    className: '',
    collection: Collection(Model).create([]),
    columns: 1,
    layout: undefined,
    sortable: true,
    title: props.title || ''
  }, props)), _temp;
});
// EXTERNAL MODULE: ./source/components/Item/Item.scss
var components_Item_Item = __webpack_require__("H/3x");

// CONCATENATED MODULE: ./source/components/Item/Item.js








var Item_class, Item_class2, Item_temp;










var EffectList = components_List_List(Effect_Effect, source_components_Effect_Effect, {
  className: 'effect-list'
});

var Item_Item_Item = Object(mobx_react["observer"])(Item_class = (Item_temp = Item_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Item, _Component);

  function Item() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Item);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Item)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeDescription", function (description) {
      return _this.props.model.set({
        description: description
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeName", function (name) {
      return _this.props.model.set({
        name: name
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCommitName", function () {
      return _this.props.model.name === '' && _this.props.onDelete(_this.props.model);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleToggleEquipped", function () {
      return _this.props.model.set({
        equipped: !_this.props.model.equipped
      });
    });

    return _this;
  }

  createClass_default()(Item, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$model = this.props.model,
          description = _this$props$model.description,
          hash = _this$props$model.hash,
          name = _this$props$model.name,
          effects = _this$props$model.effects,
          equipped = _this$props$model.equipped;
      return react_default.a.createElement("div", {
        className: "item ".concat(equipped ? '' : 'un', "equipped")
      }, react_default.a.createElement(Editable_Editable_Editable, {
        className: "equipped",
        onChange: this.handleToggleEquipped,
        value: equipped
      }), react_default.a.createElement(Editable_Editable_Editable, {
        className: "name",
        onChange: this.handleChangeName,
        onEditEnd: this.handleCommitName,
        value: name
      }), react_default.a.createElement(Expandable_Expandable_Expandable, {
        onToggle: function onToggle(expanded) {
          return _this2.props.onToggleExpanded(hash, expanded);
        }
      }, react_default.a.createElement(Editable_Editable_Editable, {
        className: "description",
        type: "multiline",
        onChange: this.handleChangeDescription,
        placeholder: "Description...",
        value: description
      }), react_default.a.createElement(EffectList, {
        collection: effects,
        title: "Effects"
      })));
    }
  }]);

  return Item;
}(react["Component"]), defineProperty_default()(Item_class2, "defaultProps", {
  model: {},
  onDelete: noop,
  onToggleExpanded: noop
}), defineProperty_default()(Item_class2, "sortOptions", [{
  display: 'icon-sort-name-asc',
  getter: function getter(model) {
    return model.name;
  }
}, {
  display: 'icon-backpack',
  getter: function getter(model) {
    return [!model.equipped, model.name];
  }
}]), Item_temp)) || Item_class;

/* harmony default export */ var source_components_Item_Item = (Item_Item_Item);
// EXTERNAL MODULE: ./source/components/Resource/Resource.scss
var components_Resource_Resource = __webpack_require__("ulyj");

// CONCATENATED MODULE: ./source/components/Resource/Resource.js








var Resource_class, Resource_class2, Resource_temp;








var Resource_Resource_Resource = Object(mobx_react["observer"])(Resource_class = (Resource_temp = Resource_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Resource, _Component);

  function Resource() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Resource);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Resource)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeCurrent", function (current) {
      return _this.props.model.set({
        current: current
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeMaximum", function (maximum) {
      return _this.props.model.set({
        maximum: maximum
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeName", function (name) {
      return _this.props.model.set({
        name: name
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCommitName", function () {
      return _this.props.model.name === '' && _this.props.onDelete(_this.props.model);
    });

    return _this;
  }

  createClass_default()(Resource, [{
    key: "render",
    value: function render() {
      var _this$props$model = this.props.model,
          current = _this$props$model.current,
          name = _this$props$model.name,
          maximum = _this$props$model.maximum;
      return react_default.a.createElement("div", {
        className: "resource"
      }, react_default.a.createElement("div", {
        className: "display"
      }, react_default.a.createElement(Editable_Editable_Editable, {
        className: "name",
        onChange: this.handleChangeName,
        onEditEnd: this.handleCommitName,
        value: name
      }), react_default.a.createElement(Editable_Editable_Editable, {
        className: "current",
        max: 999,
        min: 0,
        onChange: this.handleChangeCurrent,
        value: current
      }), 'of', react_default.a.createElement(Editable_Editable_Editable, {
        className: "maximum",
        max: 999,
        min: 0,
        onChange: this.handleChangeMaximum,
        value: maximum
      })), react_default.a.createElement(Rating_Rating_Rating, {
        allowExcess: true,
        current: current,
        maximum: maximum,
        onChange: this.handleChangeCurrent
      }));
    }
  }]);

  return Resource;
}(react["Component"]), defineProperty_default()(Resource_class2, "defaultProps", {
  model: {},
  onDelete: noop
}), defineProperty_default()(Resource_class2, "sortOptions", [{
  display: 'icon-sort-name-asc',
  getter: function getter(model) {
    return model.name;
  }
}]), Resource_temp)) || Resource_class;

/* harmony default export */ var source_components_Resource_Resource = (Resource_Resource_Resource);
// EXTERNAL MODULE: ./source/components/Skill/Skill.scss
var components_Skill_Skill = __webpack_require__("Upa8");

// CONCATENATED MODULE: ./source/components/Skill/Skill.js








var Skill_class, Skill_class2, Skill_temp;







var Skill_Skill_Skill = Object(mobx_react["observer"])(Skill_class = (Skill_temp = Skill_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Skill, _Component);

  function Skill() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Skill);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Skill)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "onChangeName", function (name) {
      return _this.props.model.set({
        name: name
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onChangeMastery", function (mastery) {
      return _this.props.model.set({
        mastery: mastery
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCommitName", function () {
      return _this.props.model.name === '' && _this.props.onDelete(_this.props.model);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onChangeTheory", function (theory) {
      return _this.props.model.set({
        theory: theory
      });
    });

    return _this;
  }

  createClass_default()(Skill, [{
    key: "render",
    value: function render() {
      var model = this.props.model;
      return react_default.a.createElement("div", {
        className: "skill"
      }, react_default.a.createElement(Editable_Editable_Editable, {
        className: "name",
        onChange: this.onChangeName,
        onEditEnd: this.handleCommitName,
        value: model.name
      }), react_default.a.createElement(Editable_Editable_Editable, {
        className: "theory ".concat(!model.theory && 'is-zero' || ''),
        max: 999,
        min: -99,
        onChange: this.onChangeTheory,
        value: model.theory
      }), react_default.a.createElement(Editable_Editable_Editable, {
        className: "mastery",
        max: 999,
        min: -99,
        onChange: this.onChangeMastery,
        value: model.mastery
      }));
    }
  }]);

  return Skill;
}(react["Component"]), defineProperty_default()(Skill_class2, "defaultProps", {
  model: {},
  onDelete: noop
}), defineProperty_default()(Skill_class2, "sortOptions", [{
  display: 'icon-sort-name-asc',
  getter: function getter(model) {
    return model.name;
  }
}, {
  display: 'icon-sort-value-desc',
  getter: function getter(model) {
    return [-model.theory, -model.mastery, model.name];
  }
}, {
  display: 'icon-sort-size-desc',
  getter: function getter(model) {
    return [-model.mastery, -model.theory, model.name];
  }
}]), Skill_temp)) || Skill_class;

/* harmony default export */ var source_components_Skill_Skill = (Skill_Skill_Skill);
// EXTERNAL MODULE: ./source/components/ResourceCost/ResourceCost.scss
var components_ResourceCost_ResourceCost = __webpack_require__("y+pi");

// CONCATENATED MODULE: ./source/components/ResourceCost/ResourceCost.js








var ResourceCost_class, ResourceCost_class2, ResourceCost_temp;






var ResourceCost_ResourceCost_ResourceCost = Object(mobx_react["observer"])(ResourceCost_class = (ResourceCost_temp = ResourceCost_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(ResourceCost, _Component);

  function ResourceCost() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ResourceCost);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ResourceCost)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeAmount", function (amount) {
      return _this.props.model.set({
        amount: amount
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeResource", function (_ref) {
      var value = _ref.target.value;
      return _this.props.model.set({
        resourceName: value
      });
    });

    return _this;
  }

  createClass_default()(ResourceCost, [{
    key: "render",
    value: function render() {
      var _this$props$model = this.props.model,
          amount = _this$props$model.amount,
          available = _this$props$model.available,
          resourceName = _this$props$model.resourceName;
      return react_default.a.createElement("div", {
        className: "resource-cost"
      }, react_default.a.createElement("select", {
        className: "resource-id",
        value: resourceName,
        onChange: this.handleChangeResource
      }, available.map(function (_ref2) {
        var name = _ref2.name;
        return react_default.a.createElement("option", {
          key: name,
          value: name
        }, name);
      })), react_default.a.createElement(Editable_Editable_Editable, {
        className: "amount",
        max: 999,
        min: -99,
        onChange: this.handleChangeAmount,
        value: amount
      }));
    }
  }]);

  return ResourceCost;
}(react["Component"]), defineProperty_default()(ResourceCost_class2, "defaultProps", {
  model: {}
}), defineProperty_default()(ResourceCost_class2, "sortOptions", [{
  display: 'icon-sort-name-asc',
  getter: function getter(model) {
    return model.resourceName;
  }
}, {
  display: 'icon-sort-value-asc',
  getter: function getter(model) {
    return model.amount;
  }
}]), ResourceCost_temp)) || ResourceCost_class;

/* harmony default export */ var source_components_ResourceCost_ResourceCost = (ResourceCost_ResourceCost_ResourceCost);
// EXTERNAL MODULE: ./source/components/Spell/Spell.scss
var components_Spell_Spell = __webpack_require__("IURI");

// CONCATENATED MODULE: ./source/components/Spell/Spell.js








var Spell_class, Spell_class2, Spell_temp;













var Spell_EffectList = components_List_List(Effect_Effect, source_components_Effect_Effect, {
  className: 'effect-list'
});
var ListOfCosts = components_List_List(ResourceCost_ResourceCost, source_components_ResourceCost_ResourceCost, {
  className: 'resource-cost-list'
});

var Spell_Spell_Spell = Object(mobx_react["observer"])(Spell_class = (Spell_temp = Spell_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Spell, _Component);

  function Spell() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Spell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Spell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "onResourceSnapshotDisposer", noop);

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCast", function () {
      _this.props.model.cast();

      _this.forceUpdate();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeDescription", function (description) {
      return _this.props.model.set({
        description: description
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeLevel", function (level) {
      return _this.props.model.set({
        level: level
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeName", function (name) {
      return _this.props.model.set({
        name: name
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCommitName", function () {
      return _this.props.model.name === '' && _this.props.onDelete(_this.props.model);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleToggleActive", function () {
      return _this.props.model.set({
        isActive: !_this.props.model.isActive
      });
    });

    return _this;
  }

  createClass_default()(Spell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var resources = this.props.model.character.resources;
      this.onResourceSnapshotDisposer = Object(mobx_state_tree["onSnapshot"])(resources, function () {
        return _this2.forceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.onResourceSnapshotDisposer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$model = this.props.model,
          costs = _this$props$model.costs,
          description = _this$props$model.description,
          name = _this$props$model.name,
          effects = _this$props$model.effects,
          hash = _this$props$model.hash,
          isActive = _this$props$model.isActive,
          isAffordable = _this$props$model.isAffordable,
          level = _this$props$model.level;
      return react_default.a.createElement("div", {
        className: "spell ".concat(isActive ? '' : 'in', "active")
      }, react_default.a.createElement(Editable_Editable_Editable, {
        className: "is-active",
        onChange: this.handleToggleActive,
        value: isActive
      }), react_default.a.createElement(Editable_Editable_Editable, {
        className: "name",
        onChange: this.handleChangeName,
        onEditEnd: this.handleCommitName,
        value: name
      }), react_default.a.createElement(Editable_Editable_Editable, {
        className: "level",
        onChange: this.handleChangeLevel,
        value: level
      }), react_default.a.createElement("button", {
        className: "cast icon-magic",
        onClick: this.handleCast,
        disabled: !isAffordable()
      }), react_default.a.createElement(Expandable_Expandable_Expandable, {
        onToggle: function onToggle(expanded) {
          return _this3.props.onToggleExpanded(hash, expanded);
        }
      }, react_default.a.createElement(Editable_Editable_Editable, {
        className: "description",
        type: "multiline",
        onChange: this.handleChangeDescription,
        placeholder: "Description...",
        value: description
      }), react_default.a.createElement(ListOfCosts, {
        collection: costs,
        title: "Casting Costs"
      }), react_default.a.createElement(Spell_EffectList, {
        collection: effects,
        title: "Effects"
      })));
    }
  }]);

  return Spell;
}(react["Component"]), defineProperty_default()(Spell_class2, "defaultProps", {
  model: {},
  onDelete: noop,
  onToggleExpanded: noop
}), defineProperty_default()(Spell_class2, "sortOptions", [{
  display: 'icon-sort-name-asc',
  getter: function getter(model) {
    return [model.name, model.level];
  }
}, {
  display: 'icon-sort-value-asc',
  getter: function getter(model) {
    return [model.level, model.name];
  }
}, {
  display: 'icon-sort-value-desc',
  getter: function getter(model) {
    return [-model.level, model.name];
  }
}]), Spell_temp)) || Spell_class;

/* harmony default export */ var source_components_Spell_Spell = (Spell_Spell_Spell);
// EXTERNAL MODULE: ./source/components/Trait/Trait.scss
var components_Trait_Trait = __webpack_require__("sxfZ");

// CONCATENATED MODULE: ./source/components/Trait/Trait.js








var Trait_class, Trait_class2, Trait_temp;










var Trait_EffectList = components_List_List(Effect_Effect, source_components_Effect_Effect);

var Trait_Trait_Trait = Object(mobx_react["observer"])(Trait_class = (Trait_temp = Trait_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Trait, _Component);

  function Trait() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Trait);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Trait)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeName", function (name) {
      return _this.props.model.set({
        name: name
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeValue", function (value) {
      return _this.props.model.set({
        value: value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCommitName", function () {
      return _this.props.model.name === '' && _this.props.onDelete(_this.props.model);
    });

    return _this;
  }

  createClass_default()(Trait, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var model = this.props.model;
      return react_default.a.createElement("div", {
        className: "trait"
      }, react_default.a.createElement(Editable_Editable_Editable, {
        className: "name",
        onChange: this.handleChangeName,
        onEditEnd: this.handleCommitName,
        value: model.name
      }), react_default.a.createElement(Editable_Editable_Editable, {
        className: "value",
        max: 999,
        min: -99,
        onChange: this.handleChangeValue,
        value: model.value
      }), react_default.a.createElement(Expandable_Expandable_Expandable, {
        onToggle: function onToggle(expanded) {
          return _this2.props.onToggleExpanded(model.hash, expanded);
        }
      }, react_default.a.createElement(Trait_EffectList, {
        collection: model.effects,
        title: "Effects"
      })));
    }
  }]);

  return Trait;
}(react["Component"]), defineProperty_default()(Trait_class2, "defaultProps", {
  model: {},
  onDelete: noop,
  onToggleExpanded: noop
}), defineProperty_default()(Trait_class2, "sortOptions", [{
  display: 'icon-sort-name-asc',
  getter: function getter(model) {
    return model.name;
  }
}, {
  display: 'icon-sort-value-asc',
  getter: function getter(model) {
    return model.value;
  }
}]), Trait_temp)) || Trait_class;

/* harmony default export */ var source_components_Trait_Trait = (Trait_Trait_Trait);
// CONCATENATED MODULE: ./source/components/index.js








/* harmony default export */ var components = ({
  Attribute: source_components_Attribute_Attribute,
  Descriptor: source_components_Descriptor_Descriptor,
  Effect: source_components_Effect_Effect,
  Item: source_components_Item_Item,
  Resource: source_components_Resource_Resource,
  Skill: source_components_Skill_Skill,
  Spell: source_components_Spell_Spell,
  Trait: source_components_Trait_Trait
});
// EXTERNAL MODULE: ./source/components/Conditions/Conditions.scss
var Conditions_Conditions = __webpack_require__("Zsyy");

// CONCATENATED MODULE: ./source/components/Conditions/Conditions.js








var Conditions_class, Conditions_temp;







/* harmony default export */ var components_Conditions_Conditions = (Object(mobx_react["observer"])((Conditions_temp = Conditions_class =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Conditions, _Component);

  function Conditions() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Conditions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Conditions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "CACHE", {});

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSnapshot", function () {
      var availableConditions = _this.props.model.availableConditions();

      var conditions = _this.props.model.conditions.asArray;

      if (JSON.stringify(availableConditions) !== JSON.stringify(_this.CACHE.availableConditions) || JSON.stringify(conditions) !== JSON.stringify(_this.CACHE.conditions)) {
        _this.CACHE.availableConditions = availableConditions;
        _this.CACHE.conditions = conditions;

        _this.forceUpdate();
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleCheckbox", function (condition, value) {
      var conditions = _this.props.model.conditions;

      if (value && !conditions.includes(condition)) {
        conditions.push(condition);
      } else if (typeof conditions.delete === 'function') {
        conditions.delete(condition);
      } else {
        conditions.splice(conditions.indexOf(condition), 1);
      }

      _this.forceUpdate();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderCondition", function (condition) {
      var conditions = _this.props.model.conditions;
      var isCurrent = conditions.includes(condition);
      return react_default.a.createElement("div", {
        key: condition,
        className: "condition ".concat(isCurrent ? 'current' : 'available')
      }, react_default.a.createElement(Editable_Editable_Editable, {
        className: "current",
        onChange: function onChange(value) {
          return _this.handleCheckbox(condition, value);
        },
        value: isCurrent
      }), react_default.a.createElement("div", {
        className: "name"
      }, condition));
    });

    return _this;
  }

  createClass_default()(Conditions, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onSnapshotDisposer = Object(mobx_state_tree["onSnapshot"])(this.props.model, this.handleSnapshot);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.onSnapshotDisposer();
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        className: "conditions"
      }, react_default.a.createElement(Expandable_Expandable_Expandable, null, this.props.model.availableConditions().map(this.renderCondition)));
    }
  }]);

  return Conditions;
}(react["Component"]), defineProperty_default()(Conditions_class, "defaultProps", {
  model: {}
}), Conditions_temp)));
// EXTERNAL MODULE: ./source/components/Layout/Layout.scss
var components_Layout_Layout = __webpack_require__("kvEc");

// CONCATENATED MODULE: ./source/components/Layout/Layout.js














var Layout_Layout_Layout =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Layout, _Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "titleBar", react_default.a.createRef());

    defineProperty_default()(assertThisInitialized_default()(_this), "onSnapshotDisposer", noop);

    defineProperty_default()(assertThisInitialized_default()(_this), "snapshot", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChangeTitle", function (title) {
      return _this.props.model.set({
        title: title
      });
    });

    return _this;
  }

  createClass_default()(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.onSnapshotDisposer = Object(mobx_state_tree["onSnapshot"])(this.props.model, function (snapshot) {
        var snapshotJSON = JSON.stringify(snapshot);

        if (_this2.snapshot !== snapshotJSON) {
          _this2.snapshot = snapshotJSON;

          _this2.forceUpdate();
        }
      });
      this.forceUpdate(); // Immediate redraw to place buttonParent
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.onSnapshotDisposer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          parentColumns = _this$props.parentColumns;
      var _this$props$model = this.props.model,
          colSpan = _this$props$model.colSpan,
          title = _this$props$model.title;
      return react_default.a.createElement("div", {
        className: "layout",
        style: {
          width: "calc(100%/".concat(parentColumns, "*").concat(colSpan, ")")
        }
      }, title === undefined ? children : react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", {
        className: "title-bar",
        ref: this.titleBar
      }, react_default.a.createElement(Editable_Editable_Editable, {
        className: "title",
        onChange: this.handleChangeTitle,
        placeholder: "Section Title",
        value: title
      })), react_default.a.createElement(Expandable_Expandable_Expandable, {
        expandByDefault: true,
        omitItemWrapper: true,
        toggleButtonParent: this.titleBar.current
      }, children)));
    }
  }]);

  return Layout;
}(react["Component"]);


// CONCATENATED MODULE: ./source/models/index.js








/* harmony default export */ var models = ({
  Attribute: Attribute_Attribute,
  Descriptor: Descriptor_Descriptor,
  Effect: Effect_Effect,
  Item: Item_Item,
  Resource: Resource_Resource,
  Skill: Skill_Skill,
  Spell: Spell_Spell,
  Trait: Trait_Trait
});
// EXTERNAL MODULE: ./source/components/Sheet/Sheet.scss
var Sheet_Sheet = __webpack_require__("HYkr");

// CONCATENATED MODULE: ./source/components/Sheet/Sheet.js









var Sheet_class, Sheet_class2, Sheet_temp;












var Sheet_Sheet_Sheet = Object(mobx_react["observer"])(Sheet_class = (Sheet_temp = Sheet_class2 =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Sheet, _React$Component);

  function Sheet(props) {
    var _this;

    classCallCheck_default()(this, Sheet);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Sheet).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      size: 'large'
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleWindowResize", function () {
      var size = 'large';

      if (window.matchMedia('(min-width: 5in) and (max-width: 7.5in)').matches) {
        size = 'medium';
      } else if (window.matchMedia('(max-width: 5in)').matches) {
        size = 'small';
      }

      if (size !== _this.state.size) _this.setState({
        size: size
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "renderComponent", function (parent, model, key) {
      if (model.type) {
        var title = model.title;
        var typename = model.type.toLowerCase();
        var List = components_List_List(models[model.type], components[model.type], {
          className: "".concat(typename, "-list")
        });

        var collection = _this.props.character["".concat(typename, "s")];

        return react_default.a.createElement(List, extends_default()({
          key: key,
          layout: model,
          title: title
        }, {
          collection: collection,
          columns: model.columns
        }));
      }

      return react_default.a.createElement(Layout_Layout_Layout, {
        key: model.hash,
        model: model,
        parentColumns: parent.columns
      }, model.children.map(function (child, i) {
        return _this.renderComponent(model, child, i);
      }));
    });

    _this.onCharacterSnapshotDisposer = Object(mobx_state_tree["onSnapshot"])(_this.props.character, function (snapshot) {
      _this.props.onChange(snapshot, _this.props.layout.toJSON(), assertThisInitialized_default()(_this));
    });
    _this.onLayoutSnapshotDisposer = Object(mobx_state_tree["onSnapshot"])(_this.props.layout, function (snapshot) {
      _this.props.onChange(_this.props.character.toJSON(), snapshot, assertThisInitialized_default()(_this));
    });
    window.addEventListener('resize', _this.handleWindowResize);
    return _this;
  }

  createClass_default()(Sheet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleWindowResize();
      this.props.onMount(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.onCharacterSnapshotDisposer();
      this.onLayoutSnapshotDisposer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          character = _this$props.character,
          layout = _this$props.layout;
      var size = this.state.size;
      return react_default.a.createElement("div", {
        className: "sheetforge sheet ".concat(size)
      }, react_default.a.createElement(components_Conditions_Conditions, {
        model: character
      }), layout.children.map(this.renderComponent.bind(null, layout)));
    }
  }]);

  return Sheet;
}(react_default.a.Component), defineProperty_default()(Sheet_class2, "defaultProps", {
  character: {},
  onChange: noop,
  onMount: noop
}), Sheet_temp)) || Sheet_class;

/* harmony default export */ var components_Sheet_Sheet = (Sheet_Sheet_Sheet);
// CONCATENATED MODULE: ./source/index.js
/* concated harmony reexport AttributeModel */__webpack_require__.d(__webpack_exports__, "AttributeModel", function() { return Attribute_Attribute; });
/* concated harmony reexport CharacterModel */__webpack_require__.d(__webpack_exports__, "CharacterModel", function() { return Character; });
/* concated harmony reexport DescriptorModel */__webpack_require__.d(__webpack_exports__, "DescriptorModel", function() { return Descriptor_Descriptor; });
/* concated harmony reexport EffectModel */__webpack_require__.d(__webpack_exports__, "EffectModel", function() { return Effect_Effect; });
/* concated harmony reexport ItemModel */__webpack_require__.d(__webpack_exports__, "ItemModel", function() { return Item_Item; });
/* concated harmony reexport LayoutModel */__webpack_require__.d(__webpack_exports__, "LayoutModel", function() { return models_Layout_Layout; });
/* concated harmony reexport ResourceCostModel */__webpack_require__.d(__webpack_exports__, "ResourceCostModel", function() { return ResourceCost_ResourceCost; });
/* concated harmony reexport ResourceModel */__webpack_require__.d(__webpack_exports__, "ResourceModel", function() { return Resource_Resource; });
/* concated harmony reexport Sheet */__webpack_require__.d(__webpack_exports__, "Sheet", function() { return components_Sheet_Sheet; });
/* concated harmony reexport SkillModel */__webpack_require__.d(__webpack_exports__, "SkillModel", function() { return Skill_Skill; });
/* concated harmony reexport SpellModel */__webpack_require__.d(__webpack_exports__, "SpellModel", function() { return Spell_Spell; });
/* concated harmony reexport TraitModel */__webpack_require__.d(__webpack_exports__, "TraitModel", function() { return Trait_Trait; });














/***/ }),

/***/ "0dDA":
/*!******************************************************!*\
  !*** ./source/components/Expandable/Expandable.scss ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5UjR":
/*!**********************************************!*\
  !*** ./source/components/Effect/Effect.scss ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "H/3x":
/*!******************************************!*\
  !*** ./source/components/Item/Item.scss ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "H3yI":
/*!**********************************************!*\
  !*** ./fontello/css/sheetforge-embedded.css ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "HYkr":
/*!********************************************!*\
  !*** ./source/components/Sheet/Sheet.scss ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "IURI":
/*!********************************************!*\
  !*** ./source/components/Spell/Spell.scss ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "S5k1":
/*!**************************************************!*\
  !*** ./source/components/Editable/Editable.scss ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Upa8":
/*!********************************************!*\
  !*** ./source/components/Skill/Skill.scss ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "VHFM":
/*!**********************************************!*\
  !*** ./source/components/Rating/Rating.scss ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Zsyy":
/*!******************************************************!*\
  !*** ./source/components/Conditions/Conditions.scss ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "djCb":
/*!********************************************************!*\
  !*** ./source/components/MultiToggle/MultiToggle.scss ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e8LY":
/*!******************************************!*\
  !*** ./source/components/List/List.scss ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "i9wh":
/*!****************************************************!*\
  !*** ./source/components/Attribute/Attribute.scss ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "k8Dq":
/*!******************************************************!*\
  !*** ./source/components/Descriptor/Descriptor.scss ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "kvEc":
/*!**********************************************!*\
  !*** ./source/components/Layout/Layout.scss ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "sxfZ":
/*!********************************************!*\
  !*** ./source/components/Trait/Trait.scss ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ulyj":
/*!**************************************************!*\
  !*** ./source/components/Resource/Resource.scss ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "y+pi":
/*!**********************************************************!*\
  !*** ./source/components/ResourceCost/ResourceCost.scss ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=sheetforge.development.js.map