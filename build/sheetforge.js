(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("mobx-react"), require("mobx-state-tree"));
	else if(typeof define === 'function' && define.amd)
		define("sheetforge", ["react", "mobx-react", "mobx-state-tree"], factory);
	else if(typeof exports === 'object')
		exports["sheetforge"] = factory(require("react"), require("mobx-react"), require("mobx-state-tree"));
	else
		root["sheetforge"] = factory(root["react"], root["mobx-react"], root["mobx-state-tree"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bound = __webpack_require__(5);

var _bound2 = _interopRequireDefault(_bound);

var _noop = __webpack_require__(3);

var _noop2 = _interopRequireDefault(_noop);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TYPES = [
// Strings
'text', 'multiline',
// Checkboxes
'boolean',
// Numbers
'number', 'slider'];

var Editable = (_temp2 = _class = function (_React$Component) {
  _inherits(Editable, _React$Component);

  function Editable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Editable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Editable.__proto__ || Object.getPrototypeOf(Editable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      editing: false,
      resetValue: _this.props.value
    }, _this.getEditorType = function () {
      var value = _this.props.value;
      var type = _this.props.type;


      if (type !== undefined && TYPES.includes(type)) return type;

      type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
      if (type === 'string') return value.includes('\n') ? 'multiline' : 'text';
      if (['boolean', 'number'].includes(type)) return type;

      return 'text';
    }, _this.resetChanges = function () {
      _this.props.onChange(_this.state.resetValue, _this.props.value);
      _this.handleToggleEditing();
    }, _this.createRefWithAutoFocus = function (editor) {
      _this.editor = editor;
      if (!editor) return;

      if (typeof editor.focus === 'function') editor.focus();
      if (_this.props.forceEditMode && typeof editor.setSelectionRange === 'function') {
        editor.setSelectionRange(editor.value.length, editor.value.length);
      }
    }, _this.handleChange = function (_ref2) {
      var target = _ref2.target;
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max;
      var value = target.value;

      // eslint-disable-next-line default-case

      switch (_this.getEditorType()) {
        case 'slider':
        case 'number':
          value = parseInt(value || 0, 10);
          // eslint-disable-next-line prefer-destructuring
          if (Number.isNaN(value)) value = _this.props.value;
          value = (0, _bound2.default)(value, { min: min, max: max });
      }
      _this.props.onChange(value, _this.state.resetValue);
    }, _this.handleKeys = function (event) {
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
    }, _this.handleReceivingFocus = function () {
      if (_this.props.readonly) return;
      if (!_this.state.editing) _this.handleToggleEditing();
    }, _this.handleToggleEditing = function () {
      if (_this.props.readonly) return;

      var editing = !_this.editing;

      _this.setState({ editing: editing, resetValue: _this.props.value }, function () {
        if (_this.state.editing) {
          _this.props.onEditStart();
        } else {
          _this.props.onEditEnd();
        }
      });
    }, _this.selectOnFocus = function (event) {
      return event.target.select();
    }, _this.toggleBoolean = function () {
      _this.props.onEditStart();
      _this.props.onChange(!_this.props.value, _this.props.value);
      _this.props.onEditEnd();
    }, _this.renderBoolean = function () {
      return _react2.default.createElement('input', {
        type: 'checkbox',
        checked: Boolean(_this.props.value),
        disabled: _this.props.readonly,
        onChange: _this.toggleBoolean
      });
    }, _this.renderMultiline = function () {
      if (!_this.editing) {
        var lines = (_this.props.value || _this.props.placeholder).split('\n');
        var paragraphs = lines.map(function (line, index) {
          return _react2.default.createElement(
            'p',
            { key: index },
            line
          );
        });
        var className = ['multiline', _this.props.value ? '' : 'placeholder'].join(' ').trim();
        return _react2.default.createElement(
          'div',
          { className: className, onClick: _this.handleToggleEditing },
          paragraphs
        );
      }

      return _react2.default.createElement('textarea', {
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
    }, _this.renderNumber = function () {
      if (!_this.editing) return _this.renderStatic();

      return _react2.default.createElement('input', {
        type: 'number',
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
    }, _this.renderSlider = function () {
      return _react2.default.createElement('input', {
        type: 'range',
        disabled: _this.props.readonly,
        max: _this.props.max,
        min: _this.props.min,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        ref: _this.createRefWithAutoFocus,
        step: _this.props.step,
        value: _this.props.value
      });
    }, _this.renderText = function () {
      if (!_this.editing) return _this.renderStatic();

      return _react2.default.createElement('input', {
        type: 'text',
        disabled: _this.props.readonly,
        onBlur: _this.handleToggleEditing,
        onChange: _this.handleChange,
        onFocus: _this.selectOnFocus,
        onKeyDown: _this.handleKeys,
        placeholder: _this.props.placeholder,
        ref: _this.createRefWithAutoFocus,
        value: _this.props.value
      });
    }, _this.renderStatic = function () {
      var showPlaceholder = _this.props.placeholder && !_this.props.value;
      var className = showPlaceholder ? 'placeholder' : '';
      return _react2.default.createElement(
        'span',
        { className: className, onClick: _this.handleToggleEditing },
        showPlaceholder ? _this.props.placeholder : _this.props.value
      );
    }, _this.renderEditor = function () {
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
    }, _this.render = function () {
      var _this$props2 = _this.props,
          className = _this$props2.className,
          readonly = _this$props2.readonly;


      var classes = ['editable', _this.editing ? 'editing' : '', className || '', readonly ? 'readonly' : ''].filter(Boolean);

      var props = {};
      if (!readonly && !_this.editing) {
        props = { tabIndex: '0', onFocus: _this.handleReceivingFocus };
      }

      return _react2.default.createElement(
        'div',
        _extends({ className: classes.join(' ') }, props),
        _this.renderEditor()
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Editable, [{
    key: 'editing',
    get: function get() {
      return this.props.forceEditMode || this.state.editing;
    }
  }]);

  return Editable;
}(_react2.default.Component), _class.displayName = 'Editable', _class.defaultProps = {
  className: '',
  forceEditMode: false,
  max: undefined,
  min: undefined,
  onChange: _noop2.default,
  onEditStart: _noop2.default,
  onEditEnd: _noop2.default,
  placeholder: '',
  readonly: false,
  step: 1,
  type: undefined,
  value: ''
}, _temp2);

/* eslint-disable */

exports.default = Editable;
if (process.env.NODE_ENV !== 'production') {
  var PropTypes = __webpack_require__(31);

  Editable.propTypes = {
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
    type: PropTypes.oneOf(TYPES),
    value: PropTypes.any
  };
}
/* eslint-enable */
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value, _ref) {
  var min = _ref.min,
      max = _ref.max;

  if (min !== undefined && value < min) return min;
  if (max !== undefined && value > max) return max;
  return value;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoHash = undefined;

var _mobxStateTree = __webpack_require__(2);

var _hash = __webpack_require__(17);

// eslint-disable-next-line import/prefer-default-export
var autoHash = exports.autoHash = _mobxStateTree.types.optional(_mobxStateTree.types.identifier, _hash.randomHash);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ExperienceCost;

var _mobxStateTree = __webpack_require__(2);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ExperienceCost(calcFn) {
  var guardedActionNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var distanceToCharacter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

  return _mobxStateTree.types.model({}).views(function (self) {
    return {
      get xpCost() {
        return calcFn(self);
      }
    };
  }).actions(function (self) {
    var getCharacter = function getCharacter() {
      if (!distanceToCharacter) return self;
      try {
        return (0, _mobxStateTree.getParent)(self, distanceToCharacter);
      } catch (e) {
        console.warn('Failed to find character ' + distanceToCharacter + ' parents up from ExperienceCost model.');
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
      var _extends2;

      return _extends({}, map, (_extends2 = {}, _defineProperty(_extends2, name + 'Unguarded', self[name]), _defineProperty(_extends2, name, function () {
        var copy = (0, _mobxStateTree.clone)(self);
        copy[name + 'Unguarded'].apply(copy, arguments);

        var xpDelta = copy.xpCost - self.xpCost;
        adjustXP(-xpDelta);
        return self[name + 'Unguarded'].apply(self, arguments);
      }), _extends2));
    }, {});

    return _extends({}, guardedActions, {
      beforeDestroy: function beforeDestroy() {
        adjustXP(self.xpCost);
      },
      xpCostAfter: function xpCostAfter(xpFn) {
        var cloned = (0, _mobxStateTree.clone)(self);
        xpFn(cloned);
        return cloned.xpCost;
      },
      xpCostDelta: function xpCostDelta(xpFn) {
        return self.xpCostAfter(xpFn) - self.xpCost;
      }
    });
  });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobxStateTree = __webpack_require__(2);

var _Item = __webpack_require__(10);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var armorRating = _mobxStateTree.types.refinement(_mobxStateTree.types.number, function (n) {
  return n >= 0;
});

var Armor = _mobxStateTree.types.compose(_Item2.default, _mobxStateTree.types.model('Armor', {
  name: 'New Armor',
  rating: _mobxStateTree.types.optional(armorRating, 0),
  type: _mobxStateTree.types.optional(_mobxStateTree.types.literal('armor'), 'armor')
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    setRating: function setRating(rating) {
      self.rating = rating;
    }
  };
}
/* eslint-enable no-param-reassign */
));

exports.default = Armor;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobxStateTree = __webpack_require__(2);

var _types = __webpack_require__(6);

var _Equippable = __webpack_require__(23);

var _Equippable2 = _interopRequireDefault(_Equippable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = _mobxStateTree.types.compose(_mobxStateTree.types.model('Item', {
  id: _types.autoHash,
  description: '',
  name: 'New Item',
  quantity: _mobxStateTree.types.optional(_mobxStateTree.types.refinement(_mobxStateTree.types.number, function (n) {
    return n >= 0;
  }), 1),
  type: _mobxStateTree.types.optional(_mobxStateTree.types.literal('item'), 'item'),
  worth: _mobxStateTree.types.optional(_mobxStateTree.types.refinement(_mobxStateTree.types.number, function (n) {
    return n >= 0;
  }), 0)
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    remove: function remove() {
      return (0, _mobxStateTree.getParent)(self, 2).removeItem(self);
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
}
/* eslint-enable no-param-reassign */
), _Equippable2.default);

exports.default = Item;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobxStateTree = __webpack_require__(2);

var _Item = __webpack_require__(10);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var weaponArray = _mobxStateTree.types.refinement(_mobxStateTree.types.array(_mobxStateTree.types.number), function (a) {
  return a.length === 3;
});

var PROPS = {
  accuracy: 1,
  damage: 0,
  range: 2
};

var Weapon = _mobxStateTree.types.compose(_Item2.default, _mobxStateTree.types.model('Weapon', {
  name: 'New Weapon',
  type: _mobxStateTree.types.optional(_mobxStateTree.types.literal('weapon'), 'weapon'),
  values: _mobxStateTree.types.optional(weaponArray, [0, 0, 0])
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
}
/* eslint-enable no-param-reassign */
));

exports.default = Weapon;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (prop) {
  var reversed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (objectA, objectB) {
    var a = String(objectA instanceof Map ? objectA.get(prop) : objectA[prop]);
    var b = String(objectB instanceof Map ? objectB.get(prop) : objectB[prop]);

    if (reversed) return b.localeCompare(a);
    return a.localeCompare(b);
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderPropWithIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.renderEditable = renderEditable;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LabeledEditable = __webpack_require__(44);

var _LabeledEditable2 = _interopRequireDefault(_LabeledEditable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderEditable(item, propName, props) {
  var loweredPropName = propName.toLowerCase();
  var passedProps = _extends({}, props, {
    className: ((props.className || '') + ' ' + loweredPropName).trim()
  });
  return _react2.default.createElement(_LabeledEditable2.default, _extends({
    caption: props.caption || _react2.default.createElement('i', { className: 'icon-' + loweredPropName }),
    className: loweredPropName,
    onChange: item['set' + propName],
    value: item[loweredPropName]
  }, passedProps));
}
var renderPropWithIcon = exports.renderPropWithIcon = function renderPropWithIcon(item, propName) {
  return renderEditable(item, propName, {
    caption: _react2.default.createElement('abbr', { className: 'icon-' + propName.toLowerCase(), title: propName }),
    min: 0,
    type: 'number'
  });
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _noop = __webpack_require__(3);

var _noop2 = _interopRequireDefault(_noop);

__webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = (0, _mobxReact.observer)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: false }, _this.toggleExpanded = function () {
      _this.setState({ expanded: !_this.state.expanded });
    }, _this.render = function () {
      var _this$props = _this.props,
          className = _this$props.className,
          contentsClassName = _this$props.contentsClassName;
      var _this$props2 = _this.props,
          renderAlways = _this$props2.renderAlways,
          renderCollapsed = _this$props2.renderCollapsed,
          renderExpanded = _this$props2.renderExpanded;

      var expandedClassName = _this.state.expanded ? 'expanded' : 'collapsed';

      return _react2.default.createElement(
        'div',
        { className: ('card ' + expandedClassName + ' ' + (className || '')).trim() },
        _react2.default.createElement('div', { className: 'expander icon-' + expandedClassName, onClick: _this.toggleExpanded }),
        _react2.default.createElement(
          'div',
          { className: ('card-contents ' + (contentsClassName || '')).trim() },
          renderAlways(),
          _this.state.expanded ? renderExpanded() : renderCollapsed()
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Card;
}(_react.Component), _class2.defaultProps = {
  renderAlways: _noop2.default,
  renderCollapsed: _noop2.default,
  renderExpanded: _noop2.default
}, _temp2)) || _class;

exports.default = Card;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_DESCRIPTORS = exports.DERIVED_ATTRIBUTES = exports.SECONDARY_ATTRIBUTES = exports.PRIMARY_ATTRIBUTES = undefined;

var _mobxStateTree = __webpack_require__(2);

var _types = __webpack_require__(6);

var _math = __webpack_require__(21);

var _Attribute = __webpack_require__(22);

var _Attribute2 = _interopRequireDefault(_Attribute);

var _Armor = __webpack_require__(9);

var _Armor2 = _interopRequireDefault(_Armor);

var _Descriptor = __webpack_require__(24);

var _Descriptor2 = _interopRequireDefault(_Descriptor);

var _Item = __webpack_require__(10);

var _Item2 = _interopRequireDefault(_Item);

var _Health = __webpack_require__(19);

var _Health2 = _interopRequireDefault(_Health);

var _Skill = __webpack_require__(25);

var _Skill2 = _interopRequireDefault(_Skill);

var _Trait = __webpack_require__(26);

var _Trait2 = _interopRequireDefault(_Trait);

var _Weapon = __webpack_require__(11);

var _Weapon2 = _interopRequireDefault(_Weapon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var PRIMARY_ATTRIBUTES = exports.PRIMARY_ATTRIBUTES = ['acuity', 'agility', 'confidence', 'devotion', 'fitness', 'focus', 'intellect', 'intuition', 'strength'];
var SECONDARY_ATTRIBUTES = exports.SECONDARY_ATTRIBUTES = ['size', 'naturalArmor'];
var DERIVED_ATTRIBUTES = exports.DERIVED_ATTRIBUTES = ['body', 'mind', 'spirit', 'potency', 'reflex', 'resilience', 'accuracy', 'might', 'toughness', 'speed', 'power'];

var DEFAULT_DESCRIPTORS = exports.DEFAULT_DESCRIPTORS = ['age', 'concept', 'eyes', 'gender', 'hair', 'height', 'homeland', 'race', 'weight'];

var capitalize = function capitalize(s) {
  return s.replace(/^./, s.charAt(0).toUpperCase());
};

var primaries = PRIMARY_ATTRIBUTES.map(function (id) {
  return { id: id, type: 'primary', name: capitalize(id), value: -1 };
});
var secondaries = [{ id: 'size', type: 'secondary', name: 'Size', value: 0 }, { id: 'naturalArmor', type: 'secondary', name: 'N. Armor', value: 0 }];
var descriptors = DEFAULT_DESCRIPTORS.map(function (id) {
  return { id: id, name: capitalize(id), value: '' };
});

var Character = _mobxStateTree.types.model('Character', {
  id: _types.autoHash,
  name: 'Unnamed Character',
  rp: 0,
  xp: 0,

  portraitURL: '',
  primaryAttributes: _mobxStateTree.types.optional(_mobxStateTree.types.array(_Attribute2.default), primaries),
  secondaryAttributes: _mobxStateTree.types.optional(_mobxStateTree.types.array(_Attribute2.default), secondaries),
  descriptors: _mobxStateTree.types.optional(_mobxStateTree.types.array(_Descriptor2.default), descriptors),
  // effects: types.array(Effect, []),
  equipment: _mobxStateTree.types.optional(_mobxStateTree.types.array(_mobxStateTree.types.union(_Armor2.default, _Item2.default, _Weapon2.default)), []),
  health: _mobxStateTree.types.optional(_Health2.default, {}),
  skills: _mobxStateTree.types.optional(_mobxStateTree.types.array(_Skill2.default), []),
  traits: _mobxStateTree.types.optional(_mobxStateTree.types.array(_Trait2.default), [])
}).views(function (my) {
  var attr = function attr(id) {
    return (my.attribute(id) || {}).value || 0;
  };
  var attrs = function attrs() {
    for (var _len = arguments.length, ids = Array(_len), _key = 0; _key < _len; _key++) {
      ids[_key] = arguments[_key];
    }

    return ids.map(function (id) {
      return attr(id);
    });
  };

  /* eslint-disable max-len, object-property-newline */
  var computedAttributes = [_Attribute2.default.create({ id: 'body', value: function value() {
      return (0, _math.average)(attrs('agility', 'fitness', 'strength'));
    }, name: 'Body' }), _Attribute2.default.create({ id: 'mind', value: function value() {
      return (0, _math.average)(attrs('acuity', 'focus', 'intellect'));
    }, name: 'Mind' }), _Attribute2.default.create({ id: 'potency', value: function value() {
      return (0, _math.average)(attrs('confidence', 'intellect', 'strength'));
    }, name: 'Potency' }), _Attribute2.default.create({ id: 'reflex', value: function value() {
      return (0, _math.average)(attrs('acuity', 'agility', 'intuition'));
    }, name: 'Reflex' }), _Attribute2.default.create({ id: 'resilience', value: function value() {
      return (0, _math.average)(attrs('devotion', 'fitness', 'focus'));
    }, name: 'Resilience' }), _Attribute2.default.create({ id: 'speed', value: function value() {
      return (0, _math.sum)(6, attr('size'), Math.round(attr('fitness') / 2));
    }, name: 'Speed' }), _Attribute2.default.create({ id: 'spirit', value: function value() {
      return (0, _math.average)(attrs('confidence', 'devotion', 'intuition'));
    }, name: 'Spirit' })];
  /* eslint-enable max-len, object-property-newline */

  return {
    get attributes() {
      return [].concat(_toConsumableArray(my.primaryAttributes), _toConsumableArray(my.secondaryAttributes), computedAttributes);
    },
    get attributeIds() {
      return [].concat(_toConsumableArray(my.primaryAttributes.map(function (a) {
        return a.id;
      })), _toConsumableArray(computedAttributes.map(function (a) {
        return a.id;
      })));
    },
    get armor() {
      return my.equipment.filter(function (e) {
        return _Armor2.default.is(e);
      });
    },
    get armorRating() {
      return attr('naturalArmor') + (0, _math.sum)(my.armor.map(function (e) {
        return e.equipped ? e.rating : 0;
      }));
    },
    get equipped() {
      return my.equipment.filter(function (e) {
        return e.equipped;
      });
    },
    get power() {
      return (0, _math.sum)([].concat(_toConsumableArray(my.primaryAttributes.map(function (a) {
        return a.xpCost;
      })), _toConsumableArray(my.skills.map(function (s) {
        return s.xpCost;
      })), _toConsumableArray(my.traits.map(function (s) {
        return s.xpCost;
      }))));
    },
    get weapons() {
      return my.equipment.filter(function (e) {
        return _Weapon2.default.is(e);
      });
    }
  };
}).actions(function (my) {
  return {
    /* eslint-disable no-param-reassign */
    addArmor: function addArmor() {
      my.equipment.push(_Armor2.default.create());
    },
    addItem: function addItem() {
      my.equipment.push(_Item2.default.create());
    },
    addSkill: function addSkill() {
      my.skills.push(_Skill2.default.create());
    },
    addTrait: function addTrait() {
      my.traits.push(_Trait2.default.create());
    },
    addWeapon: function addWeapon() {
      my.equipment.push(_Weapon2.default.create());
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
}
/* eslint-enable no-param-reassign */
);

exports.default = Character;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hash;
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

var randomHash = exports.randomHash = function randomHash() {
  return hash(Math.random().toString());
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (start, end) {
  var step = start <= end ? 1 : -1;
  var length = Math.abs(end - start) / Math.abs(step) + 1;
  return Array.apply(undefined, _toConsumableArray(Array(length))).map(function (_, i) {
    return start + i * step;
  });
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPES = undefined;

var _mobxStateTree = __webpack_require__(2);

var _bound = __webpack_require__(5);

var _bound2 = _interopRequireDefault(_bound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var TYPES = exports.TYPES = ['ok', 'light', 'heavy', 'bane'];

var HealthValue = _mobxStateTree.types.enumeration('HealthValue', TYPES, 'ok');

var Health = _mobxStateTree.types.model('Health', {
  levels: _mobxStateTree.types.optional(_mobxStateTree.types.array(HealthValue), [])
}).volatile(function (self) {
  return {
    get parent() {
      return (0, _mobxStateTree.getParent)(self);
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
      return (0, _bound2.default)(5 + resilience + size, { min: 1 });
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
      damage.length -= (0, _bound2.default)(numberOfLevels, { max: damage.length });

      self.levels = [].concat(_toConsumableArray(Array(self.max - damage.length).fill('ok')), _toConsumableArray(damage.reverse()));
    },
    healAll: function healAll() {
      self.levels = Array(self.max).fill('ok');
    },
    setLevel: function setLevel(level, severityName) {
      if (!TYPES.includes(severityName)) return;

      var index = (0, _bound2.default)(level - 1, { min: 0, max: self.levels.length - 1 });
      var severity = TYPES.indexOf(severityName);
      var currentSeverity = TYPES.indexOf(self.levels[index]);

      if (severity === currentSeverity) return;
      var direction = severity > currentSeverity ? '↑' : '↓';

      self.levels = self.levels.map(function (lvl, i) {
        if (i === index) return severityName;

        var binding = {};

        if (direction === '↓' && i < index) {
          binding.max = (0, _bound2.default)(severity, { min: 0 });
        } else if (direction === '↑' && i > index) {
          binding.min = severity;
        }

        return TYPES[(0, _bound2.default)(TYPES.indexOf(lvl), binding)];
      });
    },

    // Lifecycle hooks
    afterAttach: function afterAttach() {
      (0, _mobxStateTree.onSnapshot)(self.parent, function () {
        return self.resizeValues();
      });
      self.resizeValues();
      self.levels.replace(self.levels.slice().sort().reverse());
    },
    resizeValues: function resizeValues() {
      var _self$levels;

      var max = self.max,
          levels = self.levels;

      if (levels.length < max) (_self$levels = self.levels).unshift.apply(_self$levels, _toConsumableArray(Array(max - levels.length).fill('ok')));

      // eslint-disable-next-line no-param-reassign
      if (self.levels.length > max) self.levels.length = max;
    }
  };
}
/* eslint-enable no-param-reassign */
);

exports.default = Health;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sheet = exports.Character = undefined;

var _Character = __webpack_require__(16);

var _Character2 = _interopRequireDefault(_Character);

var _Sheet = __webpack_require__(27);

var _Sheet2 = _interopRequireDefault(_Sheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Character = _Character2.default;
exports.Sheet = _Sheet2.default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var arrayFn = function arrayFn(fn) {
  return function (arg1) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (!args.length && Array.isArray(arg1)) return fn(arg1);
    return fn([arg1].concat(args));
  };
};

var sum = exports.sum = arrayFn(function (values) {
  return values.reduce(function (all, one) {
    return all + one;
  }, 0);
});
var average = exports.average = arrayFn(function (values) {
  return Math.round(sum.apply(undefined, _toConsumableArray(values)) / values.length);
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComputed = exports.Computed = exports.Secondary = exports.Primary = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mobxStateTree = __webpack_require__(2);

var _bound = __webpack_require__(5);

var _bound2 = _interopRequireDefault(_bound);

var _range = __webpack_require__(18);

var _range2 = _interopRequireDefault(_range);

var _ExperienceCost = __webpack_require__(8);

var _ExperienceCost2 = _interopRequireDefault(_ExperienceCost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Attribute = _mobxStateTree.types.model('Attribute', {
  id: _mobxStateTree.types.identifier,
  name: _mobxStateTree.types.string
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    setValue: function setValue(value) {
      var bounded = (0, _bound2.default)(value, { min: self.min, max: self.max });
      if (bounded === self.value) return;
      self.value = bounded;
    }
  };
}
/* eslint-enable no-param-reassign */
);

var Primary = _mobxStateTree.types.compose(_mobxStateTree.types.model('Attribute', {
  max: 10,
  min: -1,
  type: _mobxStateTree.types.literal('primary'),
  value: -1
}), Attribute, (0, _ExperienceCost2.default)(function (self) {
  var values = [];
  if (self.value >= 0) values.push.apply(values, _toConsumableArray((0, _range2.default)(0, self.value)));
  return values.reduce(function (total, value) {
    return total + (0, _bound2.default)(value * 5, { min: 5 });
  }, 0);
}, ['setValue']));
var Secondary = _mobxStateTree.types.compose(_mobxStateTree.types.model('Attribute', {
  type: _mobxStateTree.types.literal('secondary'),
  value: 0
}), Attribute);
var Computed = _mobxStateTree.types.model('Attribute', {
  id: _mobxStateTree.types.identifier,
  name: _mobxStateTree.types.string,
  type: _mobxStateTree.types.literal('computed')
});

var createComputed = function createComputed(fn) {
  return _mobxStateTree.types.compose(Computed, _mobxStateTree.types.model('Attribute', {}).views(function (self) {
    return {
      get value() {
        return fn(self);
      }
    };
  }));
};

var AttributeType = _mobxStateTree.types.union(Primary, Secondary, Computed, _mobxStateTree.types.custom({
  isTargetType: function isTargetType(value) {
    return Primary.is(value) || Secondary.is(value) || Computed.is(value);
  },
  fromSnapshot: function fromSnapshot(snapshot) {
    var model = Primary,
        type = 'primary';
    if (typeof snapshot.value === 'function') {
      model = createComputed(snapshot.value);
      type = 'computed';
    } else if (['size', 'naturalArmor'].includes(snapshot.id)) {
      model = Secondary;
      type = 'secondary';
    }

    return model.create(_extends({}, snapshot, { type: type }));
  },
  toSnapshot: function toSnapshot(value) {
    return value.toJSON();
  },
  getValidationMessage: function getValidationMessage(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? '' : '${value} is not an object.';
  }
}));

exports.default = AttributeType;
exports.Primary = Primary;
exports.Secondary = Secondary;
exports.Computed = Computed;
exports.createComputed = createComputed;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobxStateTree = __webpack_require__(2);

var Equippable = _mobxStateTree.types.model({
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
}
/* eslint-enable no-param-reassign */
);

exports.default = Equippable;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobxStateTree = __webpack_require__(2);

var Descriptor = _mobxStateTree.types.model('Descriptor', {
  id: _mobxStateTree.types.identifier,
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
}
/* eslint-enable no-param-reassign */
);

exports.default = Descriptor;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobxStateTree = __webpack_require__(2);

var _types = __webpack_require__(6);

var _bound = __webpack_require__(5);

var _bound2 = _interopRequireDefault(_bound);

var _range = __webpack_require__(18);

var _range2 = _interopRequireDefault(_range);

var _ExperienceCost = __webpack_require__(8);

var _ExperienceCost2 = _interopRequireDefault(_ExperienceCost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var between = function between(min, max) {
  var defaultTo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : min;
  return _mobxStateTree.types.optional(_mobxStateTree.types.refinement(_mobxStateTree.types.number, function (n) {
    return n === undefined || n >= min && n <= max;
  }), defaultTo);
};

var Skill = _mobxStateTree.types.compose(_mobxStateTree.types.model('Skill', {
  id: _types.autoHash,
  name: 'New Skill',
  theory: between(0, 10),
  mastery: between(0, 10)
}).views(function (self) {
  return {
    get modifier() {
      return (0, _mobxStateTree.getParent)(self, 2).modifierFor(self.name);
    }
  };
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    remove: function remove() {
      return (0, _mobxStateTree.getParent)(self, 2).removeSkill(self);
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
}
/* eslint-enable no-param-reassign */
), (0, _ExperienceCost2.default)(function (self) {
  var values = [];
  if (self.theory >= 1) values.push.apply(values, _toConsumableArray((0, _range2.default)(1, self.theory)));
  if (self.mastery >= 1) values.push.apply(values, _toConsumableArray((0, _range2.default)(1, self.mastery)));
  return values.reduce(function (total, next) {
    return total + (0, _bound2.default)(next * 3, { min: 3 });
  }, 0);
}, ['setMastery', 'setTheory']));

exports.default = Skill;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobxStateTree = __webpack_require__(2);

var _types = __webpack_require__(6);

var _ExperienceCost = __webpack_require__(8);

var _ExperienceCost2 = _interopRequireDefault(_ExperienceCost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Trait = _mobxStateTree.types.compose(_mobxStateTree.types.model('Trait', {
  id: _types.autoHash,
  name: 'New Trait',
  value: 0
}).actions(function (self) {
  return {
    /* eslint-disable no-param-reassign */
    remove: function remove() {
      return (0, _mobxStateTree.getParent)(self, 2).removeTrait(self);
    },
    setName: function setName(name) {
      self.name = name;
    },
    setValue: function setValue(value) {
      self.value = value;
    }
  };
}
/* eslint-enable no-param-reassign */
), (0, _ExperienceCost2.default)(function (self) {
  return self.value;
}, ['setValue']));

exports.default = Trait;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _mobxStateTree = __webpack_require__(2);

var _bound = __webpack_require__(5);

var _bound2 = _interopRequireDefault(_bound);

var _noop = __webpack_require__(3);

var _noop2 = _interopRequireDefault(_noop);

var _Character = __webpack_require__(16);

var _Character2 = _interopRequireDefault(_Character);

var _AttributeSection = __webpack_require__(28);

var _AttributeSection2 = _interopRequireDefault(_AttributeSection);

var _DescriptorSection = __webpack_require__(38);

var _DescriptorSection2 = _interopRequireDefault(_DescriptorSection);

var _Editable = __webpack_require__(4);

var _Editable2 = _interopRequireDefault(_Editable);

var _EquipmentSection = __webpack_require__(42);

var _EquipmentSection2 = _interopRequireDefault(_EquipmentSection);

var _HealthBar = __webpack_require__(53);

var _HealthBar2 = _interopRequireDefault(_HealthBar);

var _PortraitSection = __webpack_require__(55);

var _PortraitSection2 = _interopRequireDefault(_PortraitSection);

var _SkillSection = __webpack_require__(57);

var _SkillSection2 = _interopRequireDefault(_SkillSection);

var _TraitSection = __webpack_require__(61);

var _TraitSection2 = _interopRequireDefault(_TraitSection);

__webpack_require__(65);

__webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sheet = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Sheet, _Component);

  function Sheet(props) {
    _classCallCheck(this, Sheet);

    var _this = _possibleConstructorReturn(this, (Sheet.__proto__ || Object.getPrototypeOf(Sheet)).call(this, props));

    _this.state = { sizeClass: 'large' };

    _this.handleWindowResize = function () {
      if (!_this.container) return;
      var sheetWidth = _this.container.offsetWidth;
      var sizeIndex = (0, _bound2.default)(Math.floor(sheetWidth / 250), { min: 1, max: 3 });
      var sizeClass = ['small', 'medium', 'large'][sizeIndex - 1];

      _this.setState({ sizeClass: sizeClass });
    };

    _this.bindContainer = function (div) {
      _this.container = div;
    };

    _this.render = function () {
      var c = _this.character;
      var readonly = _this.props.readonly;
      var _this$state$sizeClass = _this.state.sizeClass,
          sizeClass = _this$state$sizeClass === undefined ? 'large' : _this$state$sizeClass;

      var classes = ['sheetforge sheet axis', sizeClass, readonly ? 'readonly' : ''].filter(Boolean).join(' ');

      /* eslint-disable max-len */
      return _react2.default.createElement(
        'div',
        { className: classes, ref: _this.bindContainer },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(_Editable2.default, { className: 'character-name', value: c.name, onChange: c.setName }),
          _react2.default.createElement(
            'div',
            { className: 'xp attribute' },
            _react2.default.createElement(
              'span',
              { className: 'name' },
              'XP'
            ),
            _react2.default.createElement(_Editable2.default, { min: 0, value: c.xp, onChange: c.setXP })
          ),
          _react2.default.createElement(
            'div',
            { className: 'rp attribute' },
            _react2.default.createElement(
              'span',
              { className: 'name' },
              'RP'
            ),
            _react2.default.createElement(_Editable2.default, { min: 0, max: 5, value: c.rp, onChange: c.setRP })
          ),
          _react2.default.createElement(
            'div',
            { className: 'power attribute' },
            _react2.default.createElement(
              'div',
              { className: 'name' },
              'CP'
            ),
            _react2.default.createElement(_Editable2.default, { value: c.power, readonly: true })
          )
        ),
        _react2.default.createElement(_PortraitSection2.default, { url: c.portraitURL, onChange: c.setPortraitURL }),
        _react2.default.createElement(_HealthBar2.default, { health: c.health }),
        _react2.default.createElement(_DescriptorSection2.default, { descriptors: c.descriptors }),
        _react2.default.createElement(_AttributeSection2.default, { attributes: c.attributes, modifiers: c.modifiers }),
        _react2.default.createElement(_TraitSection2.default, { traits: c.traits, modifiers: c.modifiers, addTrait: c.addTrait, layout: sizeClass }),
        _react2.default.createElement(_SkillSection2.default, { skills: c.skills, modifiers: c.modifiers, addSkill: c.addSkill }),
        _react2.default.createElement(_EquipmentSection2.default, {
          buttons: _react2.default.createElement(
            'div',
            { className: 'buttons' },
            'Add:',
            _react2.default.createElement('button', { className: 'icon-weapon', onClick: c.addWeapon }),
            _react2.default.createElement('button', { className: 'icon-armor', onClick: c.addArmor }),
            _react2.default.createElement('button', { className: 'icon-add', onClick: c.addItem })
          ),
          equipment: c.equipment,
          layout: sizeClass
        })
      );
      /* eslint-enable max-len */
    };

    _this.character = _Character2.default.create(props.character);
    _this.disposeOfSnapshotListener = (0, _mobxStateTree.onSnapshot)(_this.character, _this.props.onChange);

    window.addEventListener('resize', _this.handleWindowResize);
    return _this;
  }

  _createClass(Sheet, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleWindowResize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.disposeOfSnapshotListener();
    }
  }]);

  return Sheet;
}(_react.Component), _class2.displayName = 'Sheet', _class2.defaultProps = {
  character: {},
  onChange: _noop2.default,
  readonly: false
}, _temp)) || _class;

exports.default = Sheet;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Attribute = __webpack_require__(29);

var _Attribute2 = _interopRequireDefault(_Attribute);

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttributeSection = function (_Component) {
  _inherits(AttributeSection, _Component);

  function AttributeSection() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AttributeSection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AttributeSection.__proto__ || Object.getPrototypeOf(AttributeSection)).call.apply(_ref, [this].concat(args))), _this), _this.renderAttribute = function (id) {
      var attr = _this.props.attributes.find(function (a) {
        return a.id === id;
      });
      return _react2.default.createElement(_Attribute2.default, { model: attr, className: id });
    }, _this.renderComputed = function (id) {
      var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var attr = _this.props.attributes.find(function (a) {
        return a.id === id;
      });
      return _react2.default.createElement(_Attribute2.default, { model: attr, className: id + ' ' + className + ' computed', computed: true });
    }, _this.renderHeader = function (id, name) {
      return _react2.default.createElement(
        'div',
        { className: 'attribute ' + id + ' header highlight' },
        _react2.default.createElement(
          'span',
          { className: 'name' },
          name
        )
      );
    }, _this.render = function () {
      return _react2.default.createElement(
        'div',
        { className: 'attributes section' },
        _react2.default.createElement(
          'header',
          null,
          'Attributes'
        ),
        _this.renderComputed('potency', 'header highlight'),
        _this.renderComputed('reflex', 'header highlight'),
        _this.renderComputed('resilience', 'header highlight'),
        _this.renderComputed('body', 'header highlight'),
        _this.renderAttribute('strength'),
        _this.renderAttribute('agility'),
        _this.renderAttribute('fitness'),
        _this.renderComputed('mind', 'header highlight'),
        _this.renderAttribute('intellect'),
        _this.renderAttribute('acuity'),
        _this.renderAttribute('focus'),
        _this.renderComputed('spirit', 'header highlight'),
        _this.renderAttribute('confidence'),
        _this.renderAttribute('intuition'),
        _this.renderAttribute('devotion'),
        _react2.default.createElement('hr', { className: 'divider' }),
        _this.renderHeader('racial', 'Racial'),
        _this.renderAttribute('size'),
        _this.renderComputed('speed'),
        _this.renderAttribute('naturalArmor')
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return AttributeSection;
}(_react.Component);

exports.default = AttributeSection;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _class2, _temp2; /* eslint-disable react/prop-types */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _Editable = __webpack_require__(4);

var _Editable2 = _interopRequireDefault(_Editable);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Attribute = (0, _mobxReact.observer)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Attribute, _Component);

  function Attribute() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Attribute);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Attribute.__proto__ || Object.getPrototypeOf(Attribute)).call.apply(_ref, [this].concat(args))), _this), _this.renderValue = function () {
      var model = _this.props.model;
      var computed = model.computed,
          min = model.min,
          max = model.max,
          value = model.value;

      var modifier = 0;

      var current = typeof value !== 'function' ? value : value();
      var isModified = Boolean(!computed && modifier);
      var displayValue = computed ? current + modifier : current;
      var display = computed ? _react2.default.createElement(_Editable2.default, { max: max, min: min, readonly: true, value: displayValue }) : _react2.default.createElement(_Editable2.default, { max: max, min: min, onChange: model.setValue, value: current });

      var classes = ['value', isModified ? 'modified' : ''].filter(Boolean);

      return _react2.default.createElement(
        'div',
        { className: classes.join(' ') },
        display,
        isModified && _react2.default.createElement(
          _react.Fragment,
          null,
          '\u21A3',
          _react2.default.createElement(
            'span',
            { className: 'temporary' },
            modifier
          )
        )
      );
    }, _this.render = function () {
      var _this$props = _this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === undefined ? '' : _this$props$className,
          model = _this$props.model;

      return _react2.default.createElement(
        'div',
        { className: 'attribute ' + className + ' ' + model.id },
        _react2.default.createElement(
          'span',
          { className: 'name' },
          model.name
        ),
        _this.renderValue()
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Attribute;
}(_react.Component), _class2.defaultProps = {
  className: 'none',
  min: -10,
  max: 10,
  model: { id: 'none', name: '' },
  modifier: 0
}, _temp2)) || _class;

exports.default = Attribute;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(32)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(35)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(33);

var ReactPropTypesSecret = __webpack_require__(12);
var checkPropTypes = __webpack_require__(34);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(12);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(12);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _Descriptor = __webpack_require__(39);

var _Descriptor2 = _interopRequireDefault(_Descriptor);

__webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DISPLAY_ORDER = ['homeland', 'race', 'concept', 'height', 'weight', 'gender', 'eyes', 'hair', 'age'];

var DescriptorSection = function DescriptorSection(_ref) {
  var descriptors = _ref.descriptors;
  return _react2.default.createElement(
    'div',
    { className: 'descriptors section' },
    _react2.default.createElement(
      'header',
      null,
      'Descriptors'
    ),
    DISPLAY_ORDER.map(function (id) {
      return _react2.default.createElement(_Descriptor2.default, { key: id, model: descriptors.find(function (d) {
          return d.id === id;
        }) });
    })
  );
};

exports.default = (0, _mobxReact.observer)(DescriptorSection);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _Editable = __webpack_require__(4);

var _Editable2 = _interopRequireDefault(_Editable);

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prop-types */
var Descriptor = function Descriptor(_ref) {
  var model = _ref.model;
  return _react2.default.createElement(
    'div',
    { className: 'descriptor ' + model.id },
    _react2.default.createElement(
      'div',
      { className: 'name' },
      model.name
    ),
    _react2.default.createElement(_Editable2.default, { className: 'value', value: model.value, onChange: model.setValue })
  );
};

exports.default = (0, _mobxReact.observer)(Descriptor);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _compareBy = __webpack_require__(13);

var _compareBy2 = _interopRequireDefault(_compareBy);

var _Armor = __webpack_require__(43);

var _Armor2 = _interopRequireDefault(_Armor);

var _Armor3 = __webpack_require__(9);

var _Armor4 = _interopRequireDefault(_Armor3);

var _Item = __webpack_require__(48);

var _Item2 = _interopRequireDefault(_Item);

var _Weapon = __webpack_require__(50);

var _Weapon2 = _interopRequireDefault(_Weapon);

var _Weapon3 = __webpack_require__(11);

var _Weapon4 = _interopRequireDefault(_Weapon3);

__webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sortEquipment = function sortEquipment(equipment) {
  return equipment.slice().sort((0, _compareBy2.default)('name')).sort((0, _compareBy2.default)('equipped', true));
};

var REMOVERS = {};

var EquipmentSection = (0, _mobxReact.observer)(function (_ref) {
  var buttons = _ref.buttons,
      _ref$equipment = _ref.equipment,
      equipment = _ref$equipment === undefined ? [] : _ref$equipment,
      _ref$layout = _ref.layout,
      layout = _ref$layout === undefined ? 'large' : _ref$layout;

  var rows = layout === 'large' ? Math.ceil(equipment.length / 2) + 1 : equipment.length + 1;
  var style = { gridTemplateRows: 'repeat(' + rows + ', auto)' };

  return _react2.default.createElement(
    'div',
    { className: 'equipment section', style: style },
    _react2.default.createElement(
      'header',
      { className: 'icon-backpack' },
      'Equipment',
      buttons
    ),
    sortEquipment(equipment).map(function (item) {
      if (!REMOVERS[item.id]) {
        REMOVERS[item.id] = function () {
          if (item.name === '') item.remove();
        };
      }
      var props = { key: item.id, item: item, onEditEnd: REMOVERS[item.id] };

      var Type = _Item2.default;
      if (_Weapon4.default.is(item)) Type = _Weapon2.default;
      if (_Armor4.default.is(item)) Type = _Armor2.default;

      return _react2.default.createElement(Type, props);
    })
  );
});

EquipmentSection.displayName = 'EquipmentSection';
exports.default = EquipmentSection;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _itemRendering = __webpack_require__(14);

var _noop = __webpack_require__(3);

var _noop2 = _interopRequireDefault(_noop);

var _Card = __webpack_require__(15);

var _Card2 = _interopRequireDefault(_Card);

var _Armor = __webpack_require__(9);

var _Armor2 = _interopRequireDefault(_Armor);

__webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Armor = (0, _mobxReact.observer)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Armor, _Component);

  function Armor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Armor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Armor.__proto__ || Object.getPrototypeOf(Armor)).call.apply(_ref, [this].concat(args))), _this), _this.renderAlways = function () {
      var _this$props = _this.props,
          item = _this$props.item,
          editing = _this$props.editing,
          onEditEnd = _this$props.onEditEnd,
          onEditStart = _this$props.onEditStart;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        (0, _itemRendering.renderEditable)(item, 'Equipped', { type: 'boolean' }),
        (0, _itemRendering.renderEditable)(item, 'Name', { className: 'icon-armor', forceEditMode: editing, onEditEnd: onEditEnd, onEditStart: onEditStart }),
        (0, _itemRendering.renderEditable)(item, 'Rating', { type: 'number', caption: 'Armor Rating:' })
      );
    }, _this.renderExpanded = function () {
      var item = _this.props.item;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        (0, _itemRendering.renderEditable)(item, 'Description', { placeholder: 'Description' })
      );
    }, _this.render = function () {
      return _react2.default.createElement(_Card2.default, {
        className: 'armor-card',
        contentsClassName: 'item armor',
        renderAlways: _this.renderAlways,
        renderExpanded: _this.renderExpanded
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Armor;
}(_react.Component), _class2.defaultProps = {
  editing: false,
  item: _Armor2.default.create(),
  onEditStart: _noop2.default,
  onEditEnd: _noop2.default
}, _temp2)) || _class;

exports.default = Armor;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Editable = __webpack_require__(4);

var _Editable2 = _interopRequireDefault(_Editable);

__webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var caption = _ref.caption,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['caption', 'className']);

  return _react2.default.createElement(
    'label',
    { className: ('labeled-editable ' + className).trim() },
    typeof caption === 'string' ? _react2.default.createElement(
      'span',
      { className: 'caption' },
      caption
    ) : caption,
    _react2.default.createElement(_Editable2.default, props)
  );
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _itemRendering = __webpack_require__(14);

var _Card = __webpack_require__(15);

var _Card2 = _interopRequireDefault(_Card);

var _noop = __webpack_require__(3);

var _noop2 = _interopRequireDefault(_noop);

__webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = (0, _mobxReact.observer)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.renderAlways = function () {
      var _this$props = _this.props,
          editing = _this$props.editing,
          onEditStart = _this$props.onEditStart,
          onEditEnd = _this$props.onEditEnd,
          item = _this$props.item;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        (0, _itemRendering.renderEditable)(item, 'Equipped', { type: 'boolean' }),
        (0, _itemRendering.renderEditable)(item, 'Name', { className: 'icon-backpack', forceEditMode: editing, onEditEnd: onEditEnd, onEditStart: onEditStart })
      );
    }, _this.renderExpanded = function () {
      var item = _this.props.item;

      var placeholder = item.description || 'Description';
      return (0, _itemRendering.renderEditable)(item, 'Description', { placeholder: placeholder });
    }, _this.render = function () {
      return _react2.default.createElement(_Card2.default, {
        className: 'item-card',
        contentsClassName: 'item',
        renderAlways: _this.renderAlways,
        renderExpanded: _this.renderExpanded
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Item;
}(_react.Component), _class2.defaultProps = {
  onEditStart: _noop2.default,
  onEditEnd: _noop2.default
}, _temp2)) || _class;

exports.default = Item;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _itemRendering = __webpack_require__(14);

var _noop = __webpack_require__(3);

var _noop2 = _interopRequireDefault(_noop);

var _Card = __webpack_require__(15);

var _Card2 = _interopRequireDefault(_Card);

var _Weapon = __webpack_require__(11);

var _Weapon2 = _interopRequireDefault(_Weapon);

__webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weapon = (0, _mobxReact.observer)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Weapon, _Component);

  function Weapon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Weapon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Weapon.__proto__ || Object.getPrototypeOf(Weapon)).call.apply(_ref, [this].concat(args))), _this), _this.renderAlways = function () {
      var _this$props = _this.props,
          editing = _this$props.editing,
          item = _this$props.item,
          onEditEnd = _this$props.onEditEnd,
          onEditStart = _this$props.onEditStart;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        (0, _itemRendering.renderEditable)(item, 'Equipped', { type: 'boolean' }),
        (0, _itemRendering.renderEditable)(item, 'Name', { className: 'icon-weapon', forceEditMode: editing, onEditEnd: onEditEnd, onEditStart: onEditStart }),
        (0, _itemRendering.renderEditable)(item, 'Damage', { type: 'number', caption: _react2.default.createElement(
            'abbr',
            { title: 'Damage' },
            'Dmg:'
          ) }),
        (0, _itemRendering.renderEditable)(item, 'Range', { type: 'number', caption: _react2.default.createElement(
            'abbr',
            { title: 'Range' },
            'Rng:'
          ) }),
        (0, _itemRendering.renderEditable)(item, 'Accuracy', { type: 'number', caption: _react2.default.createElement(
            'abbr',
            { title: 'Accuracy' },
            'Acc:'
          ) })
      );
    }, _this.renderExpanded = function () {
      var item = _this.props.item;

      var placeholder = item.description || 'Description';
      return (0, _itemRendering.renderEditable)(item, 'Description', { placeholder: placeholder });
    }, _this.render = function () {
      return _react2.default.createElement(_Card2.default, {
        className: 'item-card weapon-card',
        contentsClassName: 'item weapon',
        renderAlways: _this.renderAlways,
        renderExpanded: _this.renderExpanded
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Weapon;
}(_react.Component), _class2.defaultProps = {
  editing: false,
  item: _Weapon2.default.create(),
  onEditEnd: _noop2.default,
  onEditStart: _noop2.default
}, _temp2)) || _class;

exports.default = Weapon;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _Health = __webpack_require__(19);

var _hash = __webpack_require__(17);

var _hash2 = _interopRequireDefault(_hash);

__webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HealthBar = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(HealthBar, _Component);

  function HealthBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HealthBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HealthBar.__proto__ || Object.getPrototypeOf(HealthBar)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      // { target }) => {
      var health = _this.props.health;

      var index = parseInt(event.target.attributes.index.value, 10);
      var current = _Health.TYPES.indexOf(health.levels[index]);
      var next = current + 1;
      if (event.shiftKey) next = current - 1;
      if (event.ctrlKey) next = 0;

      if (next > _Health.TYPES.length - 1) next = 0;
      if (next < 0) next = _Health.TYPES.length - 1;

      health.setLevel(index + 1, _Health.TYPES[next]);
    }, _this.render = function () {
      var health = _this.props.health;

      var rows = Math.ceil(health.max / 10);
      var cols = rows > 1 ? 10 : health.max;
      var style = {
        gridTemplateColumns: 'repeat(' + cols + ', 1fr)',
        gridTemplateRows: 'repeat(' + rows + ', 1fr)'
      };

      return _react2.default.createElement(
        'div',
        { className: 'health-bar' },
        _react2.default.createElement(
          'div',
          { className: 'header' },
          'Health'
        ),
        _react2.default.createElement(
          'div',
          { className: 'levels', style: style },
          health.levels.map(function (level, ix) {
            return _react2.default.createElement('div', {
              className: level + ' icon-health',
              index: ix,
              key: (0, _hash2.default)(ix),
              onClick: _this.handleClick
            });
          })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return HealthBar;
}(_react.Component)) || _class;

exports.default = HealthBar;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _Editable = __webpack_require__(4);

var _Editable2 = _interopRequireDefault(_Editable);

var _noop = __webpack_require__(3);

var _noop2 = _interopRequireDefault(_noop);

__webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PORTRAIT_URL = '//via.placeholder.com/300x400/eeeeee?text=3x4+aspect+ratio';

var buildUrl = function buildUrl(url) {
  return 'url(' + (url || DEFAULT_PORTRAIT_URL) + ')';
};

var PortraitSection = (0, _mobxReact.observer)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(PortraitSection, _Component);

  function PortraitSection() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PortraitSection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PortraitSection.__proto__ || Object.getPrototypeOf(PortraitSection)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      editing: false
    }, _this.toggleEditing = function () {
      _this.setState({ editing: !_this.state.editing });
    }, _this.renderEditor = function () {
      return _react2.default.createElement(_Editable2.default, {
        forceEditMode: true,
        type: 'multiline',
        onChange: _this.props.onChange,
        onEditEnd: _this.toggleEditing,
        value: _this.props.url
      });
    }, _this.render = function () {
      return _react2.default.createElement(
        'div',
        { className: 'portrait section' },
        _react2.default.createElement(
          'header',
          null,
          'Portrait'
        ),
        _react2.default.createElement(
          'div',
          { className: 'border-container' },
          _react2.default.createElement(
            'div',
            { className: 'image', onClick: _this.toggleEditing, style: { backgroundImage: buildUrl(_this.props.url) } },
            _this.state.editing && _this.renderEditor()
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return PortraitSection;
}(_react.Component), _class2.defaultProps = {
  onChange: _noop2.default,
  url: DEFAULT_PORTRAIT_URL
}, _temp2)) || _class;

exports.default = PortraitSection;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _compareBy = __webpack_require__(13);

var _compareBy2 = _interopRequireDefault(_compareBy);

var _Skill = __webpack_require__(58);

var _Skill2 = _interopRequireDefault(_Skill);

__webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var compareByName = (0, _compareBy2.default)('name');

var REMOVERS = {};

var SkillSection = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(SkillSection, _Component);

  function SkillSection() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SkillSection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SkillSection.__proto__ || Object.getPrototypeOf(SkillSection)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          addSkill = _this$props.addSkill,
          _this$props$skills = _this$props.skills,
          skills = _this$props$skills === undefined ? [] : _this$props$skills;

      var rows = Math.ceil(skills.length / 2);
      var style = { gridTemplateRows: '25px 25px repeat(' + (rows || 1) + ', 30px)' };

      return _react2.default.createElement(
        'div',
        { className: 'skills section', style: style },
        _react2.default.createElement(
          'header',
          null,
          'Skills',
          _react2.default.createElement('button', { className: 'icon-add', onClick: addSkill })
        ),
        _react2.default.createElement(
          'header',
          { className: 'subheader' },
          _react2.default.createElement(
            'div',
            { className: 'skill' },
            _react2.default.createElement(
              'span',
              { className: 'name' },
              'Name'
            ),
            _react2.default.createElement(
              'abbr',
              { className: 'theory', title: 'Theory' },
              'Th'
            ),
            _react2.default.createElement(
              'abbr',
              { className: 'mastery', title: 'Mastery' },
              'Ms'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'skill' },
            _react2.default.createElement(
              'span',
              { className: 'name' },
              'Name'
            ),
            _react2.default.createElement(
              'abbr',
              { className: 'theory', title: 'Theory' },
              'Th'
            ),
            _react2.default.createElement(
              'abbr',
              { className: 'mastery', title: 'Mastery' },
              'Ms'
            )
          )
        ),
        skills.slice().sort(compareByName).map(function (skill) {
          if (!REMOVERS[skill.id]) {
            REMOVERS[skill.id] = function () {
              if (skill.name === '') skill.remove();
            };
          }
          return _react2.default.createElement(_Skill2.default, { key: skill.id, skill: skill, onEditEnd: REMOVERS[skill.id] });
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return SkillSection;
}(_react.Component)) || _class;

exports.default = SkillSection;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _Editable = __webpack_require__(4);

var _Editable2 = _interopRequireDefault(_Editable);

var _noop = __webpack_require__(3);

var _noop2 = _interopRequireDefault(_noop);

__webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Skill = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Skill, _Component);

  function Skill() {
    _classCallCheck(this, Skill);

    return _possibleConstructorReturn(this, (Skill.__proto__ || Object.getPrototypeOf(Skill)).apply(this, arguments));
  }

  _createClass(Skill, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          editing = _props.editing,
          onEditStart = _props.onEditStart,
          onEditEnd = _props.onEditEnd,
          skill = _props.skill;


      return _react2.default.createElement(
        'div',
        { className: 'skill' },
        _react2.default.createElement(_Editable2.default, {
          className: 'name',
          forceEditMode: editing,
          onChange: skill.setName,
          onEditStart: onEditStart,
          onEditEnd: onEditEnd,
          value: skill.name
        }),
        _react2.default.createElement(_Editable2.default, {
          className: 'theory',
          max: 10,
          min: 0,
          type: 'number',
          onChange: skill.setTheory,
          value: skill.theory || '-'
        }),
        _react2.default.createElement(_Editable2.default, {
          className: 'mastery',
          max: 10,
          min: 0,
          type: 'number',
          onChange: skill.setMastery,
          value: skill.mastery || '-'
        })
      );
    }
  }]);

  return Skill;
}(_react.Component), _class2.defaultProps = {
  onEditStart: _noop2.default,
  onEditEnd: _noop2.default
}, _temp)) || _class;

exports.default = Skill;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _compareBy = __webpack_require__(13);

var _compareBy2 = _interopRequireDefault(_compareBy);

var _noop = __webpack_require__(3);

var _noop2 = _interopRequireDefault(_noop);

var _Trait = __webpack_require__(62);

var _Trait2 = _interopRequireDefault(_Trait);

__webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compareByName = (0, _compareBy2.default)('name');

var REMOVERS = {};

var TraitSection = (0, _mobxReact.observer)(function (_ref) {
  var _ref$addTrait = _ref.addTrait,
      addTrait = _ref$addTrait === undefined ? _noop2.default : _ref$addTrait,
      _ref$layout = _ref.layout,
      layout = _ref$layout === undefined ? 'large' : _ref$layout,
      _ref$traits = _ref.traits,
      traits = _ref$traits === undefined ? [] : _ref$traits;

  var rows = layout === 'medium' ? Math.ceil(traits.length / 2) : traits.length;
  var style = { gridTemplateRows: '25px 25px repeat(' + (rows || 1) + ', 30px)' };
  return _react2.default.createElement(
    'div',
    { className: 'traits section', style: style },
    _react2.default.createElement(
      'header',
      null,
      'Traits',
      _react2.default.createElement('button', { className: 'icon-add', onClick: addTrait })
    ),
    _react2.default.createElement(
      'header',
      { className: 'subheader' },
      _react2.default.createElement(
        'div',
        { className: 'trait' },
        _react2.default.createElement(
          'span',
          { className: 'name' },
          'Name'
        ),
        _react2.default.createElement(
          'span',
          { className: 'value' },
          'Cost'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'trait' },
        _react2.default.createElement(
          'span',
          { className: 'name' },
          'Name'
        ),
        _react2.default.createElement(
          'span',
          { className: 'value' },
          'Cost'
        )
      )
    ),
    traits.slice().sort(compareByName).map(function (trait) {
      if (!REMOVERS[trait.id]) {
        REMOVERS[trait.id] = function () {
          if (trait.name === '') trait.remove();
        };
      }
      return _react2.default.createElement(_Trait2.default, { key: trait.id, trait: trait, onEditEnd: REMOVERS[trait.id] });
    })
  );
});

TraitSection.displayName = 'TraitSection';
exports.default = TraitSection;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(1);

var _Editable = __webpack_require__(4);

var _Editable2 = _interopRequireDefault(_Editable);

var _noop = __webpack_require__(3);

var _noop2 = _interopRequireDefault(_noop);

__webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trait = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Trait, _Component);

  function Trait() {
    _classCallCheck(this, Trait);

    return _possibleConstructorReturn(this, (Trait.__proto__ || Object.getPrototypeOf(Trait)).apply(this, arguments));
  }

  _createClass(Trait, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          editing = _props.editing,
          onEditStart = _props.onEditStart,
          onEditEnd = _props.onEditEnd,
          trait = _props.trait;


      return _react2.default.createElement(
        'div',
        { className: 'trait' },
        _react2.default.createElement(_Editable2.default, {
          className: 'name',
          forceEditMode: editing,
          onChange: trait.setName,
          onEditStart: onEditStart,
          onEditEnd: onEditEnd,
          value: trait.name
        }),
        _react2.default.createElement(_Editable2.default, {
          className: 'value',
          type: 'number',
          onChange: trait.setValue,
          value: trait.value || '-'
        })
      );
    }
  }]);

  return Trait;
}(_react.Component), _class2.defaultProps = {
  onEditStart: _noop2.default,
  onEditEnd: _noop2.default
}, _temp)) || _class;

exports.default = Trait;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=sheetforge.js.map