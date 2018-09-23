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

/***/ "+qVc":
/*!**************************************!*\
  !*** ./source/components/Trait.scss ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "05fm":
/*!**************************************!*\
  !*** ./source/index.js + 41 modules ***!
  \**************************************/
/*! exports provided: Character, Sheet */
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
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-state-tree/dist/mobx-state-tree.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("RIqP");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/mobx-state-tree/dist/mobx-state-tree.js
var mobx_state_tree = __webpack_require__("uqjs");

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
// CONCATENATED MODULE: ./source/utilities/types.js

 // eslint-disable-next-line import/prefer-default-export

var autoHash = mobx_state_tree["types"].optional(mobx_state_tree["types"].identifier, randomHash);
// CONCATENATED MODULE: ./source/utilities/math.js


var arrayFn = function arrayFn(fn) {
  return function (arg1) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (!args.length && Array.isArray(arg1)) return fn(arg1);
    return fn([arg1].concat(args));
  };
};

var sum = arrayFn(function (values) {
  return values.reduce(function (all, one) {
    return all + one;
  }, 0);
});
var average = arrayFn(function (values) {
  return Math.round(sum.apply(void 0, toConsumableArray_default()(values)) / values.length);
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("cDf5");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("MVZn");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// CONCATENATED MODULE: ./source/utilities/bound.js
/* harmony default export */ var bound = (function (value, _ref) {
  var min = _ref.min,
      max = _ref.max;
  if (min !== undefined && value < min) return min;
  if (max !== undefined && value > max) return max;
  return value;
});
// CONCATENATED MODULE: ./source/utilities/range.js

/* harmony default export */ var range = (function (start, end) {
  var step = start <= end ? 1 : -1;
  var length = Math.abs(end - start) / Math.abs(step) + 1;
  return Array.apply(void 0, toConsumableArray_default()(Array(length))).map(function (_, i) {
    return start + i * step;
  });
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./source/models/ExperienceCost.js



function ExperienceCost(calcFn) {
  var guardedActionNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var distanceToCharacter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  return mobx_state_tree["types"].model({}).views(function (self) {
    return {
      get xpCost() {
        return calcFn(self);
      }

    };
  }).actions(function (self) {
    var getCharacter = function getCharacter() {
      if (!distanceToCharacter) return self;

      try {
        return Object(mobx_state_tree["getParent"])(self, distanceToCharacter);
      } catch (e) {
        console.warn("Failed to find character ".concat(distanceToCharacter, " parents up from ExperienceCost model."));
        return self;
      }
    };

    var adjustXP = function adjustXP(amount) {
      var character = getCharacter();

      if (character && typeof character.setXP === 'function') {
        character.setXP(character.xp + amount);
      }
    };

    var guardedActions = guardedActionNames.reduce(function (map, name) {
      var _objectSpread2;

      return objectSpread_default()({}, map, (_objectSpread2 = {}, defineProperty_default()(_objectSpread2, "".concat(name, "Unguarded"), self[name]), defineProperty_default()(_objectSpread2, name, function () {
        var copy = Object(mobx_state_tree["clone"])(self);
        copy["".concat(name, "Unguarded")].apply(copy, arguments);
        var xpDelta = copy.xpCost - self.xpCost;
        adjustXP(-xpDelta);
        return self["".concat(name, "Unguarded")].apply(self, arguments);
      }), _objectSpread2));
    }, {});
    return objectSpread_default()({}, guardedActions, {
      beforeDestroy: function beforeDestroy() {
        adjustXP(self.xpCost);
      },
      xpCostAfter: function xpCostAfter(xpFn) {
        var cloned = Object(mobx_state_tree["clone"])(self);
        xpFn(cloned);
        return cloned.xpCost;
      },
      xpCostDelta: function xpCostDelta(xpFn) {
        return self.xpCostAfter(xpFn) - self.xpCost;
      }
    });
  });
}
// CONCATENATED MODULE: ./source/models/Attribute.js







var Attribute_Attribute = mobx_state_tree["types"].model('Attribute', {
  id: mobx_state_tree["types"].identifier,
  name: mobx_state_tree["types"].string
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    setValue: function setValue(value) {
      var bounded = bound(value, {
        min: self.min,
        max: self.max
      });
      if (bounded === self.value) return;
      self.value = bounded;
    }
  };
});
var Primary = mobx_state_tree["types"].compose(mobx_state_tree["types"].model('Attribute', {
  max: 10,
  min: -1,
  type: mobx_state_tree["types"].literal('primary'),
  value: -1
}), Attribute_Attribute, ExperienceCost(function (self) {
  var values = [];
  if (self.value >= 0) values.push.apply(values, toConsumableArray_default()(range(0, self.value)));
  return values.reduce(function (total, value) {
    return total + bound(value * 5, {
      min: 5
    });
  }, 0);
}, ['setValue']));
var Secondary = mobx_state_tree["types"].compose(mobx_state_tree["types"].model('Attribute', {
  type: mobx_state_tree["types"].literal('secondary'),
  value: 0
}), Attribute_Attribute);
var Computed = mobx_state_tree["types"].model('Attribute', {
  id: mobx_state_tree["types"].identifier,
  name: mobx_state_tree["types"].string,
  type: mobx_state_tree["types"].literal('computed')
});

var Attribute_createComputed = function createComputed(fn) {
  return mobx_state_tree["types"].compose(Computed, mobx_state_tree["types"].model('Attribute', {}).views(function (self) {
    return {
      get value() {
        return fn(self);
      }

    };
  }));
};

var AttributeType = mobx_state_tree["types"].union(Primary, Secondary, Computed, mobx_state_tree["types"].custom({
  isTargetType: function isTargetType(value) {
    return Primary.is(value) || Secondary.is(value) || Computed.is(value);
  },
  fromSnapshot: function fromSnapshot(snapshot) {
    var model = Primary,
        type = 'primary';

    if (typeof snapshot.value === 'function') {
      model = Attribute_createComputed(snapshot.value);
      type = 'computed';
    } else if (['size', 'naturalArmor'].includes(snapshot.id)) {
      model = Secondary;
      type = 'secondary';
    }

    return model.create(objectSpread_default()({}, snapshot, {
      type: type
    }));
  },
  toSnapshot: function toSnapshot(value) {
    return value.toJSON();
  },
  getValidationMessage: function getValidationMessage(value) {
    return typeof_default()(value) === 'object' ? '' : '${value} is not an object.';
  }
}));
/* harmony default export */ var models_Attribute = (AttributeType);

// CONCATENATED MODULE: ./source/models/Equippable.js

var Equippable = mobx_state_tree["types"].model({
  equipped: false
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    equip: function equip() {
      self.equipped = true;
    },
    setEquipped: function setEquipped(value) {
      self.equipped = Boolean(value);
    },
    toggleEquipped: function toggleEquipped() {
      self.equipped = !self.equipped;
    },
    unequip: function unequip() {
      self.equipped = false;
    }
  };
});
/* harmony default export */ var models_Equippable = (Equippable);
// CONCATENATED MODULE: ./source/models/Item.js



var Item_Item = mobx_state_tree["types"].compose(mobx_state_tree["types"].model('Item', {
  id: autoHash,
  description: '',
  name: 'New Item',
  quantity: mobx_state_tree["types"].optional(mobx_state_tree["types"].refinement(mobx_state_tree["types"].number, function (n) {
    return n >= 0;
  }), 1),
  type: mobx_state_tree["types"].optional(mobx_state_tree["types"].literal('item'), 'item'),
  worth: mobx_state_tree["types"].optional(mobx_state_tree["types"].refinement(mobx_state_tree["types"].number, function (n) {
    return n >= 0;
  }), 0)
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    remove: function remove() {
      return Object(mobx_state_tree["getParent"])(self, 2).removeItem(self);
    },
    setDescription: function setDescription(description) {
      self.description = description;
    },
    setName: function setName(name) {
      self.name = name;
    },
    setQuantity: function setQuantity(quantity) {
      self.quantity = quantity;
    },
    setWorth: function setWorth(worth) {
      self.worth = worth;
    }
  };
}), models_Equippable);
/* harmony default export */ var models_Item = (Item_Item);
// CONCATENATED MODULE: ./source/models/Armor.js


var armorRating = mobx_state_tree["types"].refinement(mobx_state_tree["types"].number, function (n) {
  return n >= 0;
});
var Armor_Armor = mobx_state_tree["types"].compose(models_Item, mobx_state_tree["types"].model('Armor', {
  name: 'New Armor',
  rating: mobx_state_tree["types"].optional(armorRating, 0),
  type: mobx_state_tree["types"].optional(mobx_state_tree["types"].literal('armor'), 'armor')
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    setRating: function setRating(rating) {
      self.rating = rating;
    }
  };
}));
/* harmony default export */ var models_Armor = (Armor_Armor);
// CONCATENATED MODULE: ./source/models/Descriptor.js

var Descriptor_Descriptor = mobx_state_tree["types"].model('Descriptor', {
  id: mobx_state_tree["types"].identifier,
  name: '',
  value: ''
}).actions(function (my) {
  return {
    /* eslint-disable no-param-reassign */
    setName: function setName(name) {
      my.name = name;
    },
    setValue: function setValue(value) {
      my.value = value;
    }
  };
});
/* harmony default export */ var models_Descriptor = (Descriptor_Descriptor);
// CONCATENATED MODULE: ./source/models/Health.js



var TYPES = ['ok', 'light', 'heavy', 'bane'];
var HealthValue = mobx_state_tree["types"].enumeration('HealthValue', TYPES, 'ok');
var Health = mobx_state_tree["types"].model('Health', {
  levels: mobx_state_tree["types"].optional(mobx_state_tree["types"].array(HealthValue), [])
}).volatile(function (self) {
  return {
    get parent() {
      return Object(mobx_state_tree["getParent"])(self);
    }

  };
}).views(function (self) {
  return {
    get damage() {
      return self.levels.filter(function (level) {
        return level !== 'ok';
      }).length;
    },

    get max() {
      var resilience = self.parent.attribute('resilience').value || 0;
      var size = self.parent.attribute('size').value || 0;
      return bound(5 + resilience + size, {
        min: 1
      });
    }

  };
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    heal: function heal() {
      var numberOfLevels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var damage = self.levels.toJS().reverse().filter(function (level) {
        return level !== 'ok';
      });
      damage.length -= bound(numberOfLevels, {
        max: damage.length
      });
      self.levels = toConsumableArray_default()(Array(self.max - damage.length).fill('ok')).concat(toConsumableArray_default()(damage.reverse()));
    },
    healAll: function healAll() {
      self.levels = Array(self.max).fill('ok');
    },
    setLevel: function setLevel(level, severityName) {
      if (!TYPES.includes(severityName)) return;
      var index = bound(level - 1, {
        min: 0,
        max: self.levels.length - 1
      });
      var severity = TYPES.indexOf(severityName);
      var currentSeverity = TYPES.indexOf(self.levels[index]);
      if (severity === currentSeverity) return;
      var direction = severity > currentSeverity ? '↑' : '↓';
      self.levels = self.levels.map(function (lvl, i) {
        if (i === index) return severityName;
        var binding = {};

        if (direction === '↓' && i < index) {
          binding.max = bound(severity, {
            min: 0
          });
        } else if (direction === '↑' && i > index) {
          binding.min = severity;
        }

        return TYPES[bound(TYPES.indexOf(lvl), binding)];
      });
    },
    // Lifecycle hooks
    afterAttach: function afterAttach() {
      Object(mobx_state_tree["onSnapshot"])(self.parent, function () {
        return self.resizeValues();
      });
      self.resizeValues();
      self.levels.replace(self.levels.slice().sort().reverse());
    },
    resizeValues: function resizeValues() {
      var _self$levels;

      var max = self.max,
          levels = self.levels;
      if (levels.length < max) (_self$levels = self.levels).unshift.apply(_self$levels, toConsumableArray_default()(Array(max - levels.length).fill('ok'))); // eslint-disable-next-line no-param-reassign

      if (self.levels.length > max) self.levels.length = max;
    }
  };
});
/* harmony default export */ var models_Health = (Health);
// CONCATENATED MODULE: ./source/models/types/between.js

/* harmony default export */ var between = (function (min, max) {
  var defaultTo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : min;
  return mobx_state_tree["types"].optional(mobx_state_tree["types"].refinement(mobx_state_tree["types"].number, function (n) {
    return n === undefined || n >= min && n <= max;
  }), defaultTo);
});
// CONCATENATED MODULE: ./source/models/Skill.js







var Skill_Skill = mobx_state_tree["types"].compose(mobx_state_tree["types"].model('Skill', {
  id: autoHash,
  name: 'New Skill',
  theory: between(0, 10),
  mastery: between(0, 10)
}).views(function (self) {
  return {
    get modifier() {
      return Object(mobx_state_tree["getParent"])(self, 2).modifierFor(self.name);
    }

  };
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    remove: function remove() {
      return Object(mobx_state_tree["getParent"])(self, 2).removeSkill(self);
    },
    setName: function setName(name) {
      self.name = name;
    },
    setTheory: function setTheory(theory) {
      self.theory = theory;
    },
    setMastery: function setMastery(mastery) {
      self.mastery = mastery;
    }
  };
}), ExperienceCost(function (self) {
  var values = [];
  if (self.theory >= 1) values.push.apply(values, toConsumableArray_default()(range(1, self.theory)));
  if (self.mastery >= 1) values.push.apply(values, toConsumableArray_default()(range(1, self.mastery)));
  return values.reduce(function (total, next) {
    return total + bound(next * 3, {
      min: 3
    });
  }, 0);
}, ['setMastery', 'setTheory']));
/* harmony default export */ var models_Skill = (Skill_Skill);
// CONCATENATED MODULE: ./source/models/Spell.js







var Spell_Spell = mobx_state_tree["types"].compose(mobx_state_tree["types"].model('Spell', {
  id: autoHash,
  name: 'New Spell',
  description: '',
  level: between(0, 9)
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    remove: function remove() {
      return Object(mobx_state_tree["getParent"])(self, 2).removeSpell(self);
    },
    setDescription: function setDescription(description) {
      self.description = description;
    },
    setName: function setName(name) {
      self.name = name;
    },
    setLevel: function setLevel(level) {
      self.level = level;
    }
  };
}), ExperienceCost(function (self) {
  var values = [];
  if (self.level >= 1) values.push.apply(values, toConsumableArray_default()(range(1, self.level)));
  return values.reduce(function (total, next) {
    return total + bound(next * 3, {
      min: 3
    });
  }, 0);
}, ['setLevel']));
/* harmony default export */ var models_Spell = (Spell_Spell);
// CONCATENATED MODULE: ./source/models/Trait.js



var Trait_Trait = mobx_state_tree["types"].compose(mobx_state_tree["types"].model('Trait', {
  id: autoHash,
  name: 'New Trait',
  value: 0
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    remove: function remove() {
      return Object(mobx_state_tree["getParent"])(self, 2).removeTrait(self);
    },
    setName: function setName(name) {
      self.name = name;
    },
    setValue: function setValue(value) {
      self.value = value;
    }
  };
}), ExperienceCost(function (self) {
  return self.value;
}, ['setValue']));
/* harmony default export */ var models_Trait = (Trait_Trait);
// CONCATENATED MODULE: ./source/models/Weapon.js


var weaponArray = mobx_state_tree["types"].refinement(mobx_state_tree["types"].array(mobx_state_tree["types"].number), function (a) {
  return a.length === 3;
});
var PROPS = {
  accuracy: 1,
  damage: 0,
  range: 2
};
var Weapon_Weapon = mobx_state_tree["types"].compose(models_Item, mobx_state_tree["types"].model('Weapon', {
  name: 'New Weapon',
  type: mobx_state_tree["types"].optional(mobx_state_tree["types"].literal('weapon'), 'weapon'),
  values: mobx_state_tree["types"].optional(weaponArray, [0, 0, 0])
}).views(function (self) {
  return {
    get accuracy() {
      return self.values[PROPS.accuracy];
    },

    get damage() {
      return self.values[PROPS.damage];
    },

    get range() {
      return self.values[PROPS.range];
    }

  };
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    setAccuracy: function setAccuracy(value) {
      self.setValue(PROPS.accuracy, value);
    },
    setDamage: function setDamage(value) {
      self.setValue(PROPS.damage, value);
    },
    setRange: function setRange(value) {
      self.setValue(PROPS.range, value);
    },
    setValue: function setValue(index, value) {
      self.values[index] = value;
    },
    setValues: function setValues(values) {
      self.values = values;
    }
  };
}));
/* harmony default export */ var models_Weapon = (Weapon_Weapon);
// CONCATENATED MODULE: ./source/models/Character.js













var PRIMARY_ATTRIBUTES = ['acuity', 'agility', 'confidence', 'devotion', 'fitness', 'focus', 'intellect', 'intuition', 'strength'];
var SECONDARY_ATTRIBUTES = ['size', 'naturalArmor'];
var DERIVED_ATTRIBUTES = ['body', 'mind', 'spirit', 'potency', 'reflex', 'resilience', 'accuracy', 'might', 'toughness', 'speed', 'power'];
var DEFAULT_DESCRIPTORS = ['age', 'concept', 'eyes', 'gender', 'hair', 'height', 'homeland', 'race', 'weight'];

var capitalize = function capitalize(s) {
  return s.replace(/^./, s.charAt(0).toUpperCase());
};

var primaries = PRIMARY_ATTRIBUTES.map(function (id) {
  return {
    id: id,
    type: 'primary',
    name: capitalize(id),
    value: -1
  };
});
var secondaries = [{
  id: 'size',
  type: 'secondary',
  name: 'Size',
  value: 0
}, {
  id: 'naturalArmor',
  type: 'secondary',
  name: 'N. Armor',
  value: 0
}];
var Character_descriptors = DEFAULT_DESCRIPTORS.map(function (id) {
  return {
    id: id,
    name: capitalize(id),
    value: ''
  };
});
var Character = mobx_state_tree["types"].model('Character', {
  id: autoHash,
  name: 'Unnamed Character',
  rp: 0,
  xp: 0,
  portraitURL: '',
  primaryAttributes: mobx_state_tree["types"].optional(mobx_state_tree["types"].array(models_Attribute), primaries),
  secondaryAttributes: mobx_state_tree["types"].optional(mobx_state_tree["types"].array(models_Attribute), secondaries),
  descriptors: mobx_state_tree["types"].optional(mobx_state_tree["types"].array(models_Descriptor), Character_descriptors),
  // effects: types.array(Effect, []),
  equipment: mobx_state_tree["types"].optional(mobx_state_tree["types"].array(mobx_state_tree["types"].union(models_Armor, models_Item, models_Weapon)), []),
  health: mobx_state_tree["types"].optional(models_Health, {}),
  spells: mobx_state_tree["types"].optional(mobx_state_tree["types"].array(models_Spell), []),
  skills: mobx_state_tree["types"].optional(mobx_state_tree["types"].array(models_Skill), []),
  traits: mobx_state_tree["types"].optional(mobx_state_tree["types"].array(models_Trait), [])
}).views(function (my) {
  var attr = function attr(id) {
    return (my.attribute(id) || {}).value || 0;
  };

  var attrs = function attrs() {
    for (var _len = arguments.length, ids = new Array(_len), _key = 0; _key < _len; _key++) {
      ids[_key] = arguments[_key];
    }

    return ids.map(function (id) {
      return attr(id);
    });
  };
  /* eslint-disable max-len, object-property-newline */


  var computedAttributes = [models_Attribute.create({
    id: 'body',
    value: function value() {
      return average(attrs('agility', 'fitness', 'strength'));
    },
    name: 'Body'
  }), models_Attribute.create({
    id: 'mind',
    value: function value() {
      return average(attrs('acuity', 'focus', 'intellect'));
    },
    name: 'Mind'
  }), models_Attribute.create({
    id: 'potency',
    value: function value() {
      return average(attrs('confidence', 'intellect', 'strength'));
    },
    name: 'Potency'
  }), models_Attribute.create({
    id: 'reflex',
    value: function value() {
      return average(attrs('acuity', 'agility', 'intuition'));
    },
    name: 'Reflex'
  }), models_Attribute.create({
    id: 'resilience',
    value: function value() {
      return average(attrs('devotion', 'fitness', 'focus'));
    },
    name: 'Resilience'
  }), models_Attribute.create({
    id: 'speed',
    value: function value() {
      return sum(6, attr('size'), Math.round(attr('fitness') / 2));
    },
    name: 'Speed'
  }), models_Attribute.create({
    id: 'spirit',
    value: function value() {
      return average(attrs('confidence', 'devotion', 'intuition'));
    },
    name: 'Spirit'
  })];
  /* eslint-enable max-len, object-property-newline */

  return {
    get attributes() {
      return toConsumableArray_default()(my.primaryAttributes).concat(toConsumableArray_default()(my.secondaryAttributes), computedAttributes);
    },

    get attributeIds() {
      return toConsumableArray_default()(my.primaryAttributes.map(function (a) {
        return a.id;
      })).concat(toConsumableArray_default()(computedAttributes.map(function (a) {
        return a.id;
      })));
    },

    get armor() {
      return my.equipment.filter(function (e) {
        return models_Armor.is(e);
      });
    },

    get armorRating() {
      return attr('naturalArmor') + sum(my.armor.map(function (e) {
        return e.equipped ? e.rating : 0;
      }));
    },

    get equipped() {
      return my.equipment.filter(function (e) {
        return e.equipped;
      });
    },

    get power() {
      return sum(toConsumableArray_default()(my.primaryAttributes.map(function (a) {
        return a.xpCost;
      })).concat(toConsumableArray_default()(my.skills.map(function (s) {
        return s.xpCost;
      })), toConsumableArray_default()(my.traits.map(function (s) {
        return s.xpCost;
      }))));
    },

    get weapons() {
      return my.equipment.filter(function (e) {
        return models_Weapon.is(e);
      });
    }

  };
}).actions(function (my) {
  return {
    /* eslint-disable no-param-reassign */
    addArmor: function addArmor() {
      my.equipment.push(models_Armor.create());
    },
    addItem: function addItem() {
      my.equipment.push(models_Item.create());
    },
    addSkill: function addSkill() {
      my.skills.push(models_Skill.create());
    },
    addSpell: function addSpell() {
      my.spells.push(models_Spell.create());
    },
    addTrait: function addTrait() {
      my.traits.push(models_Trait.create());
    },
    addWeapon: function addWeapon() {
      my.equipment.push(models_Weapon.create());
    },
    attribute: function attribute(id) {
      return my.attributes.find(function (a) {
        return a.id === id;
      });
    },
    removeItem: function removeItem(item) {
      return my.equipment.remove(item);
    },
    removeSkill: function removeSkill(skill) {
      return my.skills.remove(skill);
    },
    removeTrait: function removeTrait(trait) {
      return my.traits.remove(trait);
    },
    setAttribute: function setAttribute(id, value) {
      my.attribute(id).setValue(value);
    },
    setName: function setName(name) {
      my.name = name;
    },
    setPortraitURL: function setPortraitURL(url) {
      my.portraitURL = url;
    },
    setXP: function setXP(xp) {
      my.xp = xp;
    },
    setRP: function setRP(rp) {
      my.rp = rp;
    }
  };
});
/* harmony default export */ var models_Character = (Character);
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

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("7W2i");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("PJYZ");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/mobx-react/index.js
var mobx_react = __webpack_require__("NbXW");

// CONCATENATED MODULE: ./source/utilities/noop.js
/* harmony default export */ var noop = (function () {});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./source/components/Editable.scss
var components_Editable = __webpack_require__("EyWy");

// CONCATENATED MODULE: ./source/components/Editable.js













var Editable_TYPES = [// Strings
'text', 'multiline', // Checkboxes
'boolean', // Numbers
'number', 'slider'];

var Editable_Editable =
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

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "state", {
      editing: false,
      resetValue: _this.props.value
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "getEditorType", function () {
      var value = _this.props.value;
      var type = _this.props.type;
      if (type !== undefined && Editable_TYPES.includes(type)) return type;
      type = typeof_default()(value);
      if (type === 'string') return value.includes('\n') ? 'multiline' : 'text';
      if (['boolean', 'number'].includes(type)) return type;
      return 'text';
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "resetChanges", function () {
      _this.props.onChange(_this.state.resetValue, _this.props.value);

      _this.handleToggleEditing();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "createRefWithAutoFocus", function (editor) {
      _this.editor = editor;
      if (!editor) return;
      if (typeof editor.focus === 'function') editor.focus();

      if (_this.props.forceEditMode && typeof editor.setSelectionRange === 'function') {
        editor.setSelectionRange(editor.value.length, editor.value.length);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleChange", function (_ref) {
      var target = _ref.target;
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max;
      var value = target.value; // eslint-disable-next-line default-case

      switch (_this.getEditorType()) {
        case 'slider':
        case 'number':
          value = parseInt(value || 0, 10); // eslint-disable-next-line prefer-destructuring

          if (Number.isNaN(value)) value = _this.props.value;
          value = bound(value, {
            min: min,
            max: max
          });
      }

      _this.props.onChange(value, _this.state.resetValue);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleKeys", function (event) {
      var target = event.target,
          key = event.key,
          ctrlKey = event.ctrlKey,
          metaKey = event.metaKey;
      if (key === 'Escape') _this.resetChanges();

      if (key === 'Enter') {
        if (target.nodeName !== 'TEXTAREA' || ctrlKey || metaKey) {
          _this.handleToggleEditing();
        }
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleReceivingFocus", function () {
      if (_this.props.readonly) return;
      if (!_this.state.editing) _this.handleToggleEditing();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleToggleEditing", function () {
      if (_this.props.readonly) return;
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

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "selectOnFocus", function (event) {
      return event.target.select();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "toggleBoolean", function () {
      _this.props.onEditStart();

      _this.props.onChange(!_this.props.value, _this.props.value);

      _this.props.onEditEnd();
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderBoolean", function () {
      return react_default.a.createElement("input", {
        type: "checkbox",
        checked: Boolean(_this.props.value),
        disabled: _this.props.readonly,
        onChange: _this.toggleBoolean
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderMultiline", function () {
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
        disabled: _this.props.readonly,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        onFocus: _this.selectOnFocus,
        onKeyDown: _this.handleKeys,
        placeholder: _this.props.placeholder,
        ref: _this.createRefWithAutoFocus,
        rows: _this.props.value.split('\n').length,
        value: _this.props.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderNumber", function () {
      if (!_this.editing) return _this.renderStatic();
      return react_default.a.createElement("input", {
        type: "number",
        disabled: _this.props.readonly,
        max: _this.props.max,
        min: _this.props.min,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        onFocus: _this.selectOnFocus,
        onKeyDown: _this.handleKeys,
        placeholder: _this.props.placeholder,
        ref: _this.createRefWithAutoFocus,
        step: _this.props.step,
        value: _this.props.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderSlider", function () {
      return react_default.a.createElement("input", {
        type: "range",
        disabled: _this.props.readonly,
        max: _this.props.max,
        min: _this.props.min,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        ref: _this.createRefWithAutoFocus,
        step: _this.props.step,
        value: _this.props.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderText", function () {
      if (!_this.editing) return _this.renderStatic();
      return react_default.a.createElement("input", {
        type: "text",
        disabled: _this.props.readonly,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        onFocus: _this.selectOnFocus,
        onKeyDown: _this.handleKeys,
        placeholder: _this.props.placeholder,
        ref: _this.createRefWithAutoFocus,
        value: _this.props.value
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderStatic", function () {
      var showPlaceholder = _this.props.placeholder && !_this.props.value;
      var className = showPlaceholder ? 'placeholder' : '';
      return react_default.a.createElement("span", {
        className: className,
        onClick: _this.handleToggleEditing
      }, showPlaceholder ? _this.props.placeholder : _this.props.value);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderEditor", function () {
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

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "render", function () {
      var _this$props2 = _this.props,
          className = _this$props2.className,
          readonly = _this$props2.readonly;
      var classes = ['editable', _this.editing ? 'editing' : '', className || '', readonly ? 'readonly' : ''].filter(Boolean);
      var props = {};

      if (!readonly && !_this.editing) {
        props = {
          tabIndex: '0',
          onFocus: _this.handleReceivingFocus
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
/* eslint-disable */


defineProperty_default()(Editable_Editable, "displayName", 'Editable');

defineProperty_default()(Editable_Editable, "defaultProps", {
  className: '',
  forceEditMode: false,
  max: undefined,
  min: undefined,
  onChange: noop,
  onEditStart: noop,
  onEditEnd: noop,
  placeholder: '',
  readonly: false,
  step: 1,
  type: undefined,
  value: ''
});



if (true) {
  var PropTypes = __webpack_require__(/*! prop-types */ "17x9");

  Editable_Editable.propTypes = {
    className: PropTypes.string,
    forceEditMode: PropTypes.bool,
    max: PropTypes.number,
    min: PropTypes.number,
    onChange: PropTypes.func,
    onEditStart: PropTypes.func,
    onEditEnd: PropTypes.func,
    placeholder: PropTypes.string,
    readonly: PropTypes.bool,
    step: PropTypes.number,
    type: PropTypes.oneOf(Editable_TYPES),
    value: PropTypes.any
  };
}
/* eslint-enable */
// EXTERNAL MODULE: ./source/components/Attribute.scss
var components_Attribute = __webpack_require__("kzPv");

// CONCATENATED MODULE: ./source/components/Attribute.js







var _class, _temp, _class2;

/* eslint-disable react/prop-types */




var components_Attribute_Attribute = (_temp = _class = Object(mobx_react["observer"])(_class2 =
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

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderValue", function () {
      var model = _this.props.model;
      var computed = model.computed,
          min = model.min,
          max = model.max,
          value = model.value;
      var modifier = 0;
      var current = typeof value !== 'function' ? value : value();
      var isModified = Boolean(!computed && modifier);
      var displayValue = computed ? current + modifier : current;
      var display = computed ? react_default.a.createElement(Editable_Editable, {
        max: max,
        min: min,
        readonly: true,
        value: displayValue
      }) : react_default.a.createElement(Editable_Editable, {
        max: max,
        min: min,
        onChange: model.setValue,
        value: current
      });
      var classes = ['value', isModified ? 'modified' : ''].filter(Boolean);
      return react_default.a.createElement("div", {
        className: classes.join(' ')
      }, display, isModified && react_default.a.createElement(react["Fragment"], null, "\u21A3", react_default.a.createElement("span", {
        className: "temporary"
      }, modifier)));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "render", function () {
      var _this$props = _this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          model = _this$props.model;
      return react_default.a.createElement("div", {
        className: "attribute ".concat(className, " ").concat(model.id)
      }, react_default.a.createElement("span", {
        className: "name"
      }, model.name), _this.renderValue());
    });

    return _this;
  }

  return Attribute;
}(react["Component"])) || _class2, defineProperty_default()(_class, "defaultProps", {
  className: 'none',
  min: -10,
  max: 10,
  model: {
    id: 'none',
    name: ''
  },
  modifier: 0
}), _temp);

// EXTERNAL MODULE: ./source/components/AttributeSection.scss
var components_AttributeSection = __webpack_require__("YwVW");

// CONCATENATED MODULE: ./source/components/AttributeSection.js










var AttributeSection_AttributeSection =
/*#__PURE__*/
function (_Component) {
  inherits_default()(AttributeSection, _Component);

  function AttributeSection() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, AttributeSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(AttributeSection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderAttribute", function (id) {
      var attr = _this.props.attributes.find(function (a) {
        return a.id === id;
      });

      return react_default.a.createElement(components_Attribute_Attribute, {
        model: attr,
        className: id
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderComputed", function (id) {
      var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var attr = _this.props.attributes.find(function (a) {
        return a.id === id;
      });

      return react_default.a.createElement(components_Attribute_Attribute, {
        model: attr,
        className: "".concat(id, " ").concat(className, " computed"),
        computed: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderHeader", function (id, name) {
      return react_default.a.createElement("div", {
        className: "attribute ".concat(id, " header highlight")
      }, react_default.a.createElement("span", {
        className: "name"
      }, name));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "render", function () {
      return react_default.a.createElement("div", {
        className: "attributes section"
      }, react_default.a.createElement("header", null, "Attributes"), _this.renderComputed('potency', 'header highlight'), _this.renderComputed('reflex', 'header highlight'), _this.renderComputed('resilience', 'header highlight'), _this.renderComputed('body', 'header highlight'), _this.renderAttribute('strength'), _this.renderAttribute('agility'), _this.renderAttribute('fitness'), _this.renderComputed('mind', 'header highlight'), _this.renderAttribute('intellect'), _this.renderAttribute('acuity'), _this.renderAttribute('focus'), _this.renderComputed('spirit', 'header highlight'), _this.renderAttribute('confidence'), _this.renderAttribute('intuition'), _this.renderAttribute('devotion'), react_default.a.createElement("hr", {
        className: "divider"
      }), _this.renderHeader('racial', 'Racial'), _this.renderAttribute('size'), _this.renderComputed('speed'), _this.renderAttribute('naturalArmor'));
    });

    return _this;
  }

  return AttributeSection;
}(react["Component"]);


// EXTERNAL MODULE: ./source/components/Descriptor.scss
var components_Descriptor = __webpack_require__("bjTM");

// CONCATENATED MODULE: ./source/components/Descriptor.js
/* eslint-disable react/prop-types */





var components_Descriptor_Descriptor = function Descriptor(_ref) {
  var model = _ref.model;
  return react_default.a.createElement("div", {
    className: "descriptor ".concat(model.id)
  }, react_default.a.createElement("div", {
    className: "name"
  }, model.name), react_default.a.createElement(Editable_Editable, {
    className: "value",
    value: model.value,
    onChange: model.setValue
  }));
};

/* harmony default export */ var source_components_Descriptor = (Object(mobx_react["observer"])(components_Descriptor_Descriptor));
// EXTERNAL MODULE: ./source/components/DescriptorSection.scss
var components_DescriptorSection = __webpack_require__("x2/E");

// CONCATENATED MODULE: ./source/components/DescriptorSection.js




var DISPLAY_ORDER = ['homeland', 'race', 'concept', 'height', 'weight', 'gender', 'eyes', 'hair', 'age'];

var DescriptorSection_DescriptorSection = function DescriptorSection(_ref) {
  var descriptors = _ref.descriptors;
  return react_default.a.createElement("div", {
    className: "descriptors section"
  }, react_default.a.createElement("header", null, "Descriptors"), DISPLAY_ORDER.map(function (id) {
    return react_default.a.createElement(source_components_Descriptor, {
      key: id,
      model: descriptors.find(function (d) {
        return d.id === id;
      })
    });
  }));
};

/* harmony default export */ var source_components_DescriptorSection = (Object(mobx_react["observer"])(DescriptorSection_DescriptorSection));
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("QILm");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./source/components/LabeledEditable.scss
var LabeledEditable = __webpack_require__("Wv34");

// CONCATENATED MODULE: ./source/components/LabeledEditable.js




/* harmony default export */ var components_LabeledEditable = (function (_ref) {
  var caption = _ref.caption,
      className = _ref.className,
      props = objectWithoutProperties_default()(_ref, ["caption", "className"]);

  return react_default.a.createElement("label", {
    className: "labeled-editable ".concat(className).trim()
  }, typeof caption === 'string' ? react_default.a.createElement("span", {
    className: "caption"
  }, caption) : caption, react_default.a.createElement(Editable_Editable, props));
});
// CONCATENATED MODULE: ./source/utilities/itemRendering.js




function renderEditable(item, propName, props) {
  var loweredPropName = propName.toLowerCase();

  var passedProps = objectSpread_default()({}, props, {
    className: "".concat(props.className || '', " ").concat(loweredPropName).trim()
  });

  return react_default.a.createElement(components_LabeledEditable, extends_default()({
    caption: props.caption || react_default.a.createElement("i", {
      className: "icon-".concat(loweredPropName)
    }),
    className: loweredPropName,
    onChange: item["set".concat(propName)],
    value: item[loweredPropName]
  }, passedProps));
}
var itemRendering_renderPropWithIcon = function renderPropWithIcon(item, propName) {
  return renderEditable(item, propName, {
    caption: react_default.a.createElement("abbr", {
      className: "icon-".concat(propName.toLowerCase()),
      title: propName
    }),
    min: 0,
    type: 'number'
  });
};
// EXTERNAL MODULE: ./source/components/Card.scss
var components_Card = __webpack_require__("fq/P");

// CONCATENATED MODULE: ./source/components/Card.js







var Card_class, Card_temp, Card_class2;





var Card_Card = (Card_temp = Card_class = Object(mobx_react["observer"])(Card_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Card, _Component);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "state", {
      expanded: false
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "toggleExpanded", function () {
      _this.setState({
        expanded: !_this.state.expanded
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "render", function () {
      var _this$props = _this.props,
          className = _this$props.className,
          contentsClassName = _this$props.contentsClassName;
      var _this$props2 = _this.props,
          renderAlways = _this$props2.renderAlways,
          renderCollapsed = _this$props2.renderCollapsed,
          renderExpanded = _this$props2.renderExpanded;
      var expandedClassName = _this.state.expanded ? 'expanded' : 'collapsed';
      return react_default.a.createElement("div", {
        className: "card ".concat(expandedClassName, " ").concat(className || '').trim()
      }, react_default.a.createElement("div", {
        className: "expander icon-".concat(expandedClassName),
        onClick: _this.toggleExpanded
      }), react_default.a.createElement("div", {
        className: "card-contents ".concat(contentsClassName || '').trim()
      }, renderAlways(), _this.state.expanded ? renderExpanded() : renderCollapsed()));
    });

    return _this;
  }

  return Card;
}(react["Component"])) || Card_class2, defineProperty_default()(Card_class, "defaultProps", {
  renderAlways: noop,
  renderCollapsed: noop,
  renderExpanded: noop
}), Card_temp);

// EXTERNAL MODULE: ./source/components/Armor.scss
var components_Armor = __webpack_require__("6r6I");

// CONCATENATED MODULE: ./source/components/Armor.js







var Armor_class, Armor_temp, Armor_class2;








var components_Armor_Armor = (Armor_temp = Armor_class = Object(mobx_react["observer"])(Armor_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Armor, _Component);

  function Armor() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Armor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Armor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderAlways", function () {
      var _this$props = _this.props,
          item = _this$props.item,
          editing = _this$props.editing,
          onEditEnd = _this$props.onEditEnd,
          onEditStart = _this$props.onEditStart;
      return react_default.a.createElement(react["Fragment"], null, renderEditable(item, 'Equipped', {
        type: 'boolean'
      }), renderEditable(item, 'Name', {
        className: 'icon-armor',
        forceEditMode: editing,
        onEditEnd: onEditEnd,
        onEditStart: onEditStart
      }), renderEditable(item, 'Rating', {
        type: 'number',
        caption: 'Armor Rating:'
      }));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderExpanded", function () {
      var item = _this.props.item;
      return react_default.a.createElement(react["Fragment"], null, renderEditable(item, 'Description', {
        placeholder: 'Description'
      }));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "render", function () {
      return react_default.a.createElement(Card_Card, {
        className: "armor-card",
        contentsClassName: "item armor",
        renderAlways: _this.renderAlways,
        renderExpanded: _this.renderExpanded
      });
    });

    return _this;
  }

  return Armor;
}(react["Component"])) || Armor_class2, defineProperty_default()(Armor_class, "defaultProps", {
  editing: false,
  item: models_Armor.create(),
  onEditStart: noop,
  onEditEnd: noop
}), Armor_temp);

// EXTERNAL MODULE: ./source/components/Item.scss
var components_Item = __webpack_require__("k70h");

// CONCATENATED MODULE: ./source/components/Item.js







var Item_class, Item_temp, Item_class2;







var components_Item_Item = (Item_temp = Item_class = Object(mobx_react["observer"])(Item_class2 =
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

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderAlways", function () {
      var _this$props = _this.props,
          editing = _this$props.editing,
          onEditStart = _this$props.onEditStart,
          onEditEnd = _this$props.onEditEnd,
          item = _this$props.item;
      return react_default.a.createElement(react["Fragment"], null, renderEditable(item, 'Equipped', {
        type: 'boolean'
      }), renderEditable(item, 'Name', {
        className: 'icon-backpack',
        forceEditMode: editing,
        onEditEnd: onEditEnd,
        onEditStart: onEditStart
      }));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderExpanded", function () {
      var item = _this.props.item;
      var placeholder = item.description || 'Description';
      return renderEditable(item, 'Description', {
        placeholder: placeholder
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "render", function () {
      return react_default.a.createElement(Card_Card, {
        className: "item-card",
        contentsClassName: "item",
        renderAlways: _this.renderAlways,
        renderExpanded: _this.renderExpanded
      });
    });

    return _this;
  }

  return Item;
}(react["Component"])) || Item_class2, defineProperty_default()(Item_class, "defaultProps", {
  onEditStart: noop,
  onEditEnd: noop
}), Item_temp);

// EXTERNAL MODULE: ./source/components/Weapon.scss
var components_Weapon = __webpack_require__("jF55");

// CONCATENATED MODULE: ./source/components/Weapon.js







var Weapon_class, Weapon_temp, Weapon_class2;








var components_Weapon_Weapon = (Weapon_temp = Weapon_class = Object(mobx_react["observer"])(Weapon_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Weapon, _Component);

  function Weapon() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Weapon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Weapon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderAlways", function () {
      var _this$props = _this.props,
          editing = _this$props.editing,
          item = _this$props.item,
          onEditEnd = _this$props.onEditEnd,
          onEditStart = _this$props.onEditStart;
      return react_default.a.createElement(react["Fragment"], null, renderEditable(item, 'Equipped', {
        type: 'boolean'
      }), renderEditable(item, 'Name', {
        className: 'icon-weapon',
        forceEditMode: editing,
        onEditEnd: onEditEnd,
        onEditStart: onEditStart
      }), renderEditable(item, 'Damage', {
        type: 'number',
        caption: react_default.a.createElement("abbr", {
          title: "Damage"
        }, "Dmg:")
      }), renderEditable(item, 'Range', {
        type: 'number',
        caption: react_default.a.createElement("abbr", {
          title: "Range"
        }, "Rng:")
      }), renderEditable(item, 'Accuracy', {
        type: 'number',
        caption: react_default.a.createElement("abbr", {
          title: "Accuracy"
        }, "Acc:")
      }));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderExpanded", function () {
      var item = _this.props.item;
      var placeholder = item.description || 'Description';
      return renderEditable(item, 'Description', {
        placeholder: placeholder
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "render", function () {
      return react_default.a.createElement(Card_Card, {
        className: "item-card weapon-card",
        contentsClassName: "item weapon",
        renderAlways: _this.renderAlways,
        renderExpanded: _this.renderExpanded
      });
    });

    return _this;
  }

  return Weapon;
}(react["Component"])) || Weapon_class2, defineProperty_default()(Weapon_class, "defaultProps", {
  editing: false,
  item: models_Weapon.create(),
  onEditEnd: noop,
  onEditStart: noop
}), Weapon_temp);

// EXTERNAL MODULE: ./source/components/EquipmentSection.scss
var EquipmentSection = __webpack_require__("sRWG");

// CONCATENATED MODULE: ./source/components/EquipmentSection.js










var EquipmentSection_sortEquipment = function sortEquipment(equipment) {
  return equipment.slice().sort(compareBy('name')).sort(compareBy('equipped', true));
};

var REMOVERS = {};
var EquipmentSection_EquipmentSection = Object(mobx_react["observer"])(function (_ref) {
  var buttons = _ref.buttons,
      _ref$equipment = _ref.equipment,
      equipment = _ref$equipment === void 0 ? [] : _ref$equipment,
      _ref$layout = _ref.layout,
      layout = _ref$layout === void 0 ? 'large' : _ref$layout;
  var rows = layout === 'large' ? Math.ceil(equipment.length / 2) + 1 : equipment.length + 1;
  var style = {
    gridTemplateRows: "repeat(".concat(rows, ", auto)")
  };
  return react_default.a.createElement("div", {
    className: "equipment section",
    style: style
  }, react_default.a.createElement("header", {
    className: "icon-backpack"
  }, "Equipment", buttons), EquipmentSection_sortEquipment(equipment).map(function (item) {
    if (!REMOVERS[item.id]) {
      REMOVERS[item.id] = function () {
        if (item.name === '') item.remove();
      };
    }

    var props = {
      key: item.id,
      item: item,
      onEditEnd: REMOVERS[item.id]
    };
    var Type = components_Item_Item;
    if (models_Weapon.is(item)) Type = components_Weapon_Weapon;
    if (models_Armor.is(item)) Type = components_Armor_Armor;
    return react_default.a.createElement(Type, props);
  }));
});
EquipmentSection_EquipmentSection.displayName = 'EquipmentSection';
/* harmony default export */ var components_EquipmentSection = (EquipmentSection_EquipmentSection);
// EXTERNAL MODULE: ./source/components/HealthBar.scss
var components_HealthBar = __webpack_require__("TRUF");

// CONCATENATED MODULE: ./source/components/HealthBar.js







var HealthBar_class2;







var HealthBar_HealthBar = Object(mobx_react["observer"])(HealthBar_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(HealthBar, _Component);

  function HealthBar() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, HealthBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(HealthBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleClick", function (event) {
      // { target }) => {
      var health = _this.props.health;
      var index = parseInt(event.target.attributes.index.value, 10);
      var current = TYPES.indexOf(health.levels[index]);
      var next = current + 1;
      if (event.shiftKey) next = current - 1;
      if (event.ctrlKey) next = 0;
      if (next > TYPES.length - 1) next = 0;
      if (next < 0) next = TYPES.length - 1;
      health.setLevel(index + 1, TYPES[next]);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "render", function () {
      var health = _this.props.health;
      var rows = Math.ceil(health.max / 10);
      var cols = rows > 1 ? 10 : health.max;
      var style = {
        gridTemplateColumns: "repeat(".concat(cols, ", 1fr)"),
        gridTemplateRows: "repeat(".concat(rows, ", 1fr)")
      };
      return react_default.a.createElement("div", {
        className: "health-bar"
      }, react_default.a.createElement("div", {
        className: "header"
      }, "Health"), react_default.a.createElement("div", {
        className: "levels",
        style: style
      }, health.levels.map(function (level, ix) {
        return react_default.a.createElement("div", {
          className: "".concat(level, " icon-health"),
          index: ix,
          key: hash(ix),
          onClick: _this.handleClick
        });
      })));
    });

    return _this;
  }

  return HealthBar;
}(react["Component"])) || HealthBar_class2;


// EXTERNAL MODULE: ./source/components/PortraitSection.scss
var components_PortraitSection = __webpack_require__("J/AE");

// CONCATENATED MODULE: ./source/components/PortraitSection.js







var PortraitSection_class, PortraitSection_temp, PortraitSection_class2;






var DEFAULT_PORTRAIT_URL = '//via.placeholder.com/300x400/eeeeee?text=3x4+aspect+ratio';

var buildUrl = function buildUrl(url) {
  return "url(".concat(url || DEFAULT_PORTRAIT_URL, ")");
};

var PortraitSection_PortraitSection = (PortraitSection_temp = PortraitSection_class = Object(mobx_react["observer"])(PortraitSection_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(PortraitSection, _Component);

  function PortraitSection() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, PortraitSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(PortraitSection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "state", {
      editing: false
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "toggleEditing", function () {
      _this.setState({
        editing: !_this.state.editing
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderEditor", function () {
      return react_default.a.createElement(Editable_Editable, {
        forceEditMode: true,
        type: "multiline",
        onChange: _this.props.onChange,
        onEditEnd: _this.toggleEditing,
        value: _this.props.url
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "render", function () {
      return react_default.a.createElement("div", {
        className: "portrait section"
      }, react_default.a.createElement("header", null, "Portrait"), react_default.a.createElement("div", {
        className: "border-container"
      }, react_default.a.createElement("div", {
        className: "image",
        onClick: _this.toggleEditing,
        style: {
          backgroundImage: buildUrl(_this.props.url)
        }
      }, _this.state.editing && _this.renderEditor())));
    });

    return _this;
  }

  return PortraitSection;
}(react["Component"])) || PortraitSection_class2, defineProperty_default()(PortraitSection_class, "defaultProps", {
  onChange: noop,
  url: DEFAULT_PORTRAIT_URL
}), PortraitSection_temp);

// EXTERNAL MODULE: ./source/components/Skill.scss
var components_Skill = __webpack_require__("Mgl3");

// CONCATENATED MODULE: ./source/components/Skill.js







var Skill_class, Skill_temp, Skill_class2;






var components_Skill_Skill = (Skill_temp = Skill_class = Object(mobx_react["observer"])(Skill_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Skill, _Component);

  function Skill() {
    classCallCheck_default()(this, Skill);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Skill).apply(this, arguments));
  }

  createClass_default()(Skill, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          editing = _this$props.editing,
          onEditStart = _this$props.onEditStart,
          onEditEnd = _this$props.onEditEnd,
          skill = _this$props.skill;
      return react_default.a.createElement("div", {
        className: "skill"
      }, react_default.a.createElement(Editable_Editable, {
        className: "name",
        forceEditMode: editing,
        onChange: skill.setName,
        onEditStart: onEditStart,
        onEditEnd: onEditEnd,
        value: skill.name
      }), react_default.a.createElement(Editable_Editable, {
        className: "theory",
        max: 10,
        min: 0,
        type: "number",
        onChange: skill.setTheory,
        value: skill.theory || '-'
      }), react_default.a.createElement(Editable_Editable, {
        className: "mastery",
        max: 10,
        min: 0,
        type: "number",
        onChange: skill.setMastery,
        value: skill.mastery || '-'
      }));
    }
  }]);

  return Skill;
}(react["Component"])) || Skill_class2, defineProperty_default()(Skill_class, "defaultProps", {
  onEditStart: noop,
  onEditEnd: noop
}), Skill_temp);

// EXTERNAL MODULE: ./source/components/SkillSection.scss
var components_SkillSection = __webpack_require__("EvVW");

// CONCATENATED MODULE: ./source/components/SkillSection.js







var SkillSection_class2;






var compareByName = compareBy('name');
var SkillSection_REMOVERS = {};

var SkillSection_SkillSection = Object(mobx_react["observer"])(SkillSection_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(SkillSection, _Component);

  function SkillSection() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, SkillSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(SkillSection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "render", function () {
      var _this$props = _this.props,
          addSkill = _this$props.addSkill,
          _this$props$skills = _this$props.skills,
          skills = _this$props$skills === void 0 ? [] : _this$props$skills;
      var rows = Math.ceil(skills.length / 2);
      var style = {
        gridTemplateRows: "25px 25px repeat(".concat(rows || 1, ", 30px)")
      };
      return react_default.a.createElement("div", {
        className: "skills section",
        style: style
      }, react_default.a.createElement("header", null, "Skills", react_default.a.createElement("button", {
        className: "icon-add",
        onClick: addSkill
      })), react_default.a.createElement("header", {
        className: "subheader"
      }, react_default.a.createElement("div", {
        className: "skill"
      }, react_default.a.createElement("span", {
        className: "name"
      }, "Name"), react_default.a.createElement("abbr", {
        className: "theory",
        title: "Theory"
      }, "Th"), react_default.a.createElement("abbr", {
        className: "mastery",
        title: "Mastery"
      }, "Ms")), react_default.a.createElement("div", {
        className: "skill"
      }, react_default.a.createElement("span", {
        className: "name"
      }, "Name"), react_default.a.createElement("abbr", {
        className: "theory",
        title: "Theory"
      }, "Th"), react_default.a.createElement("abbr", {
        className: "mastery",
        title: "Mastery"
      }, "Ms"))), skills.slice().sort(compareByName).map(function (skill) {
        if (!SkillSection_REMOVERS[skill.id]) {
          SkillSection_REMOVERS[skill.id] = function () {
            if (skill.name === '') skill.remove();
          };
        }

        return react_default.a.createElement(components_Skill_Skill, {
          key: skill.id,
          skill: skill,
          onEditEnd: SkillSection_REMOVERS[skill.id]
        });
      }));
    });

    return _this;
  }

  return SkillSection;
}(react["Component"])) || SkillSection_class2;


// EXTERNAL MODULE: ./source/components/Spell.scss
var components_Spell = __webpack_require__("5PCg");

// CONCATENATED MODULE: ./source/components/Spell.js







var Spell_class, Spell_temp, Spell_class2;






var components_Spell_Spell = (Spell_temp = Spell_class = Object(mobx_react["observer"])(Spell_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Spell, _Component);

  function Spell() {
    classCallCheck_default()(this, Spell);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Spell).apply(this, arguments));
  }

  createClass_default()(Spell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          editing = _this$props.editing,
          onEditStart = _this$props.onEditStart,
          onEditEnd = _this$props.onEditEnd,
          spell = _this$props.spell;
      return react_default.a.createElement("div", {
        className: "spell"
      }, react_default.a.createElement(Editable_Editable, {
        className: "name",
        forceEditMode: editing,
        onChange: spell.setName,
        onEditStart: onEditStart,
        onEditEnd: onEditEnd,
        value: spell.name
      }), react_default.a.createElement(Editable_Editable, {
        className: "level",
        max: 9,
        min: 0,
        type: "number",
        onChange: spell.setLevel,
        value: spell.level || '-'
      }));
    }
  }]);

  return Spell;
}(react["Component"])) || Spell_class2, defineProperty_default()(Spell_class, "defaultProps", {
  onEditStart: noop,
  onEditEnd: noop
}), Spell_temp);

// EXTERNAL MODULE: ./source/components/SpellSection.scss
var components_SpellSection = __webpack_require__("q6KL");

// CONCATENATED MODULE: ./source/components/SpellSection.js







var SpellSection_class2;






var SpellSection_compareByName = compareBy('name');
var SpellSection_REMOVERS = {};

var SpellSection_SpellSection = Object(mobx_react["observer"])(SpellSection_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(SpellSection, _Component);

  function SpellSection() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, SpellSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(SpellSection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "render", function () {
      var _this$props = _this.props,
          addSpell = _this$props.addSpell,
          _this$props$spells = _this$props.spells,
          spells = _this$props$spells === void 0 ? [] : _this$props$spells;
      var rows = Math.ceil(spells.length / 2);
      var style = {
        gridTemplateRows: "25px 25px repeat(".concat(rows || 1, ", 30px)")
      };
      return react_default.a.createElement("div", {
        className: "spells section",
        style: style
      }, react_default.a.createElement("header", null, "Spells", react_default.a.createElement("button", {
        className: "icon-add",
        onClick: addSpell
      })), react_default.a.createElement("header", {
        className: "subheader"
      }, react_default.a.createElement("div", {
        className: "spell"
      }, react_default.a.createElement("span", {
        className: "name"
      }, "Name"), react_default.a.createElement("abbr", {
        className: "level",
        title: "Level"
      }, "Lv")), react_default.a.createElement("div", {
        className: "spell"
      }, react_default.a.createElement("span", {
        className: "name"
      }, "Name"), react_default.a.createElement("abbr", {
        className: "level",
        title: "Level"
      }, "Lv"))), spells.slice().sort(SpellSection_compareByName).map(function (spell) {
        if (!SpellSection_REMOVERS[spell.id]) {
          SpellSection_REMOVERS[spell.id] = function () {
            if (spell.name === '') spell.remove();
          };
        }

        return react_default.a.createElement(components_Spell_Spell, {
          key: spell.id,
          spell: spell,
          onEditEnd: SpellSection_REMOVERS[spell.id]
        });
      }));
    });

    return _this;
  }

  return SpellSection;
}(react["Component"])) || SpellSection_class2;


// EXTERNAL MODULE: ./source/components/Trait.scss
var components_Trait = __webpack_require__("+qVc");

// CONCATENATED MODULE: ./source/components/Trait.js







var Trait_class, Trait_temp, Trait_class2;






var components_Trait_Trait = (Trait_temp = Trait_class = Object(mobx_react["observer"])(Trait_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Trait, _Component);

  function Trait() {
    classCallCheck_default()(this, Trait);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Trait).apply(this, arguments));
  }

  createClass_default()(Trait, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          editing = _this$props.editing,
          onEditStart = _this$props.onEditStart,
          onEditEnd = _this$props.onEditEnd,
          trait = _this$props.trait;
      return react_default.a.createElement("div", {
        className: "trait"
      }, react_default.a.createElement(Editable_Editable, {
        className: "name",
        forceEditMode: editing,
        onChange: trait.setName,
        onEditStart: onEditStart,
        onEditEnd: onEditEnd,
        value: trait.name
      }), react_default.a.createElement(Editable_Editable, {
        className: "value",
        type: "number",
        onChange: trait.setValue,
        value: trait.value || '-'
      }));
    }
  }]);

  return Trait;
}(react["Component"])) || Trait_class2, defineProperty_default()(Trait_class, "defaultProps", {
  onEditStart: noop,
  onEditEnd: noop
}), Trait_temp);

// EXTERNAL MODULE: ./source/components/TraitSection.scss
var TraitSection = __webpack_require__("a8h2");

// CONCATENATED MODULE: ./source/components/TraitSection.js






var TraitSection_compareByName = compareBy('name');
var TraitSection_REMOVERS = {};
var TraitSection_TraitSection = Object(mobx_react["observer"])(function (_ref) {
  var _ref$addTrait = _ref.addTrait,
      addTrait = _ref$addTrait === void 0 ? noop : _ref$addTrait,
      _ref$layout = _ref.layout,
      layout = _ref$layout === void 0 ? 'large' : _ref$layout,
      _ref$traits = _ref.traits,
      traits = _ref$traits === void 0 ? [] : _ref$traits;
  var rows = layout === 'medium' ? Math.ceil(traits.length / 2) : traits.length;
  var style = {
    gridTemplateRows: "25px 25px repeat(".concat(rows || 1, ", 30px)")
  };
  return react_default.a.createElement("div", {
    className: "traits section",
    style: style
  }, react_default.a.createElement("header", null, "Traits", react_default.a.createElement("button", {
    className: "icon-add",
    onClick: addTrait
  })), react_default.a.createElement("header", {
    className: "subheader"
  }, react_default.a.createElement("div", {
    className: "trait"
  }, react_default.a.createElement("span", {
    className: "name"
  }, "Name"), react_default.a.createElement("span", {
    className: "value"
  }, "Cost")), react_default.a.createElement("div", {
    className: "trait"
  }, react_default.a.createElement("span", {
    className: "name"
  }, "Name"), react_default.a.createElement("span", {
    className: "value"
  }, "Cost"))), traits.slice().sort(TraitSection_compareByName).map(function (trait) {
    if (!TraitSection_REMOVERS[trait.id]) {
      TraitSection_REMOVERS[trait.id] = function () {
        if (trait.name === '') trait.remove();
      };
    }

    return react_default.a.createElement(components_Trait_Trait, {
      key: trait.id,
      trait: trait,
      onEditEnd: TraitSection_REMOVERS[trait.id]
    });
  }));
});
TraitSection_TraitSection.displayName = 'TraitSection';
/* harmony default export */ var components_TraitSection = (TraitSection_TraitSection);
// EXTERNAL MODULE: ./fontello/css/axis-sheet-embedded.css
var axis_sheet_embedded = __webpack_require__("gpkD");

// EXTERNAL MODULE: ./source/components/Sheet.scss
var components_Sheet = __webpack_require__("uR5A");

// CONCATENATED MODULE: ./source/components/Sheet.js








var Sheet_class, Sheet_temp, Sheet_class2;


















var Sheet_Sheet = (Sheet_temp = Sheet_class = Object(mobx_react["observer"])(Sheet_class2 =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Sheet, _Component);

  function Sheet(props) {
    var _this;

    classCallCheck_default()(this, Sheet);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Sheet).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "state", {
      sizeClass: 'large'
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleWindowResize", function () {
      if (!_this.container) return;
      var sheetWidth = _this.container.offsetWidth;
      var sizeIndex = bound(Math.floor(sheetWidth / 250), {
        min: 1,
        max: 3
      });
      var sizeClass = ['small', 'medium', 'large'][sizeIndex - 1];

      _this.setState({
        sizeClass: sizeClass
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "bindContainer", function (div) {
      _this.container = div;
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "render", function () {
      var c = _this.character;
      var readonly = _this.props.readonly;
      var _this$state$sizeClass = _this.state.sizeClass,
          sizeClass = _this$state$sizeClass === void 0 ? 'large' : _this$state$sizeClass;
      var classes = ['sheetforge sheet axis', sizeClass, readonly ? 'readonly' : ''].filter(Boolean).join(' ');
      /* eslint-disable max-len */

      return react_default.a.createElement("div", {
        className: classes,
        ref: _this.bindContainer
      }, react_default.a.createElement("header", null, react_default.a.createElement(Editable_Editable, {
        className: "character-name",
        value: c.name,
        onChange: c.setName
      }), react_default.a.createElement("div", {
        className: "xp attribute"
      }, react_default.a.createElement("span", {
        className: "name"
      }, "XP"), react_default.a.createElement(Editable_Editable, {
        min: 0,
        value: c.xp,
        onChange: c.setXP
      })), react_default.a.createElement("div", {
        className: "rp attribute"
      }, react_default.a.createElement("span", {
        className: "name"
      }, "RP"), react_default.a.createElement(Editable_Editable, {
        min: 0,
        max: 5,
        value: c.rp,
        onChange: c.setRP
      })), react_default.a.createElement("div", {
        className: "power attribute"
      }, react_default.a.createElement("div", {
        className: "name"
      }, "CP"), react_default.a.createElement(Editable_Editable, {
        value: c.power,
        readonly: true
      }))), react_default.a.createElement(PortraitSection_PortraitSection, {
        url: c.portraitURL,
        onChange: c.setPortraitURL
      }), react_default.a.createElement(HealthBar_HealthBar, {
        health: c.health
      }), react_default.a.createElement(source_components_DescriptorSection, {
        descriptors: c.descriptors
      }), react_default.a.createElement(AttributeSection_AttributeSection, {
        attributes: c.attributes,
        modifiers: c.modifiers
      }), react_default.a.createElement(components_TraitSection, {
        traits: c.traits,
        modifiers: c.modifiers,
        addTrait: c.addTrait,
        layout: sizeClass
      }), react_default.a.createElement(SkillSection_SkillSection, {
        skills: c.skills,
        modifiers: c.modifiers,
        addSkill: c.addSkill
      }), react_default.a.createElement(components_EquipmentSection, {
        buttons: react_default.a.createElement("div", {
          className: "buttons"
        }, "Add:", react_default.a.createElement("button", {
          className: "icon-weapon",
          onClick: c.addWeapon
        }), react_default.a.createElement("button", {
          className: "icon-armor",
          onClick: c.addArmor
        }), react_default.a.createElement("button", {
          className: "icon-add",
          onClick: c.addItem
        })),
        equipment: c.equipment,
        layout: sizeClass
      }), react_default.a.createElement(SpellSection_SpellSection, {
        spells: c.spells,
        modifiers: c.modifiers,
        addSpell: c.addSpell
      }));
      /* eslint-enable max-len */
    });

    _this.character = models_Character.create(props.character);
    _this.disposeOfSnapshotListener = Object(mobx_state_tree["onSnapshot"])(_this.character, props.onChange);
    window.addEventListener('resize', _this.handleWindowResize);
    return _this;
  }

  createClass_default()(Sheet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleWindowResize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.disposeOfSnapshotListener();
    }
  }]);

  return Sheet;
}(react["Component"])) || Sheet_class2, defineProperty_default()(Sheet_class, "displayName", 'Sheet'), defineProperty_default()(Sheet_class, "defaultProps", {
  character: {},
  onChange: noop,
  readonly: false
}), Sheet_temp);

// CONCATENATED MODULE: ./source/index.js
/* concated harmony reexport Character */__webpack_require__.d(__webpack_exports__, "Character", function() { return models_Character; });
/* concated harmony reexport Sheet */__webpack_require__.d(__webpack_exports__, "Sheet", function() { return Sheet_Sheet; });




/***/ }),

/***/ "5PCg":
/*!**************************************!*\
  !*** ./source/components/Spell.scss ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6r6I":
/*!**************************************!*\
  !*** ./source/components/Armor.scss ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "EvVW":
/*!*********************************************!*\
  !*** ./source/components/SkillSection.scss ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "EyWy":
/*!*****************************************!*\
  !*** ./source/components/Editable.scss ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "J/AE":
/*!************************************************!*\
  !*** ./source/components/PortraitSection.scss ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Mgl3":
/*!**************************************!*\
  !*** ./source/components/Skill.scss ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "TRUF":
/*!******************************************!*\
  !*** ./source/components/HealthBar.scss ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Wv34":
/*!************************************************!*\
  !*** ./source/components/LabeledEditable.scss ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "YwVW":
/*!*************************************************!*\
  !*** ./source/components/AttributeSection.scss ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a8h2":
/*!*********************************************!*\
  !*** ./source/components/TraitSection.scss ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bjTM":
/*!*******************************************!*\
  !*** ./source/components/Descriptor.scss ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fq/P":
/*!*************************************!*\
  !*** ./source/components/Card.scss ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "gpkD":
/*!**********************************************!*\
  !*** ./fontello/css/axis-sheet-embedded.css ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "jF55":
/*!***************************************!*\
  !*** ./source/components/Weapon.scss ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "k70h":
/*!*************************************!*\
  !*** ./source/components/Item.scss ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "kzPv":
/*!******************************************!*\
  !*** ./source/components/Attribute.scss ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "q6KL":
/*!*********************************************!*\
  !*** ./source/components/SpellSection.scss ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "sRWG":
/*!*************************************************!*\
  !*** ./source/components/EquipmentSection.scss ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "uR5A":
/*!**************************************!*\
  !*** ./source/components/Sheet.scss ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "x2/E":
/*!**************************************************!*\
  !*** ./source/components/DescriptorSection.scss ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=sheetforge.development.js.map