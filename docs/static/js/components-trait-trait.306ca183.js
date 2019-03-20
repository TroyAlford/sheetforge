exports.ids = [15];
exports.modules = {

/***/ "0dDA":
/*!******************************************************!*\
  !*** ./source/components/Expandable/Expandable.scss ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1T+A":
/*!******************************************************!*\
  !*** ./source/components/MultiToggle/MultiToggle.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiToggle; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "b696");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "Nogc");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "WEGp");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "Amxr");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "o1mq");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "cEnY");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "itEV");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "cNEE");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utilities/noop */ "x6zz");
/* harmony import */ var _MultiToggle_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MultiToggle.scss */ "djCb");
/* harmony import */ var _MultiToggle_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_MultiToggle_scss__WEBPACK_IMPORTED_MODULE_10__);
var MultiToggle=/*#__PURE__*/function(_Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(MultiToggle,_Component);function MultiToggle(){var _getPrototypeOf2;var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,MultiToggle);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,(_getPrototypeOf2=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(MultiToggle)).call.apply(_getPrototypeOf2,[this].concat(args)));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this),"state",{selected:null});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this),"handleOptionClick",function(_ref){var target=_ref.target;var index=_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(target.parentElement.children).indexOf(target);var selected=_this.props.options[index];if(_this.props.selected!==undefined){_this.props.onChange(selected);}else{_this.setState({selected:selected});}});return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MultiToggle,[{key:"render",value:function render(){var _this2=this;var _this$props=this.props,className=_this$props.className,options=_this$props.options;var selected=this.props.selected!==undefined?this.props.selected:this.state.selected;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"multi-toggle ".concat(className).trim()},options.map(function(option,key){return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"toggle ".concat(option===selected?'on':'off').trim(),key:key,onClick:_this2.handleOptionClick},option.display);}));}}]);return MultiToggle;}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(MultiToggle,"defaultProps",{className:'',onChange:_utilities_noop__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],options:[],selected:undefined});

/***/ }),

/***/ "5UjR":
/*!**********************************************!*\
  !*** ./source/components/Effect/Effect.scss ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "BSti":
/*!**************************************!*\
  !*** ./source/utilities/debounce.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
function debounce(func,wait,immediate){var _this=this;var timeout;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var later=function later(){timeout=null;if(!immediate)func.apply(_this,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(_this,args);};}

/***/ }),

/***/ "I7n6":
/*!****************************************************!*\
  !*** ./source/components/Expandable/Expandable.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expandable; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "cFUw");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "Nogc");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "WEGp");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "Amxr");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "o1mq");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "cEnY");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "itEV");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "cNEE");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utilities/noop */ "x6zz");
/* harmony import */ var _Expandable_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Expandable.scss */ "0dDA");
/* harmony import */ var _Expandable_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Expandable_scss__WEBPACK_IMPORTED_MODULE_11__);
var Expandable=/*#__PURE__*/function(_Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Expandable,_Component);function Expandable(){var _getPrototypeOf2;var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,Expandable);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,(_getPrototypeOf2=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Expandable)).call.apply(_getPrototypeOf2,[this].concat(args)));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this),"state",{expanded:false});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this),"expander",react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef());_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this),"handleToggle",function(){var classList=_this.expander.current.parentElement.classList;var expanded=_this.state.expanded;// eslint-disable-next-line react/no-access-state-in-setstate
_this.setState({expanded:!expanded},function(){_this.props.onToggle(!expanded);classList[!expanded?'add':'remove']('expanded');});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this),"renderExpanded",function(){var _this$props=_this.props,children=_this$props.children,omitItemWrapper=_this$props.omitItemWrapper;return omitItemWrapper?children:react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"expandable"}," ",children);});return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Expandable,[{key:"componentWillMount",value:function componentWillMount(){this.setState({expanded:this.props.expandByDefault});}},{key:"componentDidMount",value:function componentDidMount(){this.expander.current.parentElement.classList.add('expandable-wrapper');}},{key:"render",value:function render(){var _this$props2=this.props,toggleButtonParent=_this$props2.toggleButtonParent,toggleButtonText=_this$props2.toggleButtonText;var toggleState=this.state.expanded?'expanded':'collapsed';var buttonProps={className:"expandable-toggle icon-".concat(toggleState),onClick:this.handleToggle,ref:this.expander};var toggleButton=react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},buttonProps,{text:toggleButtonText}));return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"],null,toggleButtonParent?Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["createPortal"])(toggleButton,toggleButtonParent):toggleButton,this.state.expanded&&this.renderExpanded());}}]);return Expandable;}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Expandable,"defaultProps",{expandByDefault:false,omitItemWrapper:false,onToggle:_utilities_noop__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],toggleButtonParent:null,toggleButtonText:''});

/***/ }),

/***/ "M/4f":
/*!******************************************!*\
  !*** ./source/components/Trait/Trait.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "Nogc");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "WEGp");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "Amxr");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "o1mq");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "cEnY");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "itEV");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "cNEE");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "NbXW");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Editable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Editable */ "O+tL");
/* harmony import */ var _components_Effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Effect */ "a4BR");
/* harmony import */ var _components_Expandable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Expandable */ "I7n6");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/List */ "t524");
/* harmony import */ var _models_Effect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/models/Effect */ "HyL6");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/utilities/noop */ "x6zz");
/* harmony import */ var _Trait_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Trait.scss */ "sxfZ");
/* harmony import */ var _Trait_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Trait_scss__WEBPACK_IMPORTED_MODULE_15__);
var _class,_class2,_temp;var EffectList=Object(_components_List__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_models_Effect__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"],_components_Effect__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);var Trait=Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class=(_temp=_class2=/*#__PURE__*/function(_Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Trait,_Component);function Trait(){var _getPrototypeOf2;var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Trait);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,(_getPrototypeOf2=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Trait)).call.apply(_getPrototypeOf2,[this].concat(args)));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeName",function(name){return _this.props.model.set({name:name});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeValue",function(value){return _this.props.model.set({value:value});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleCommitName",function(){return _this.props.model.name===''&&_this.props.onDelete(_this.props.model);});return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Trait,[{key:"render",value:function render(){var _this2=this;var model=this.props.model;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"trait"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"name",onChange:this.handleChangeName,onEditEnd:this.handleCommitName,value:model.name}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"value",max:999,min:-99,onChange:this.handleChangeValue,value:model.value}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Expandable__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],{onToggle:function onToggle(expanded){return _this2.props.onToggleExpanded(model.hash,expanded);}},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(EffectList,{collection:model.effects,title:"Effects"})));}}]);return Trait;}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"defaultProps",{model:{},onDelete:_utilities_noop__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"],onToggleExpanded:_utilities_noop__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"]}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"sortOptions",[{display:'icon-sort-name-asc',getter:function getter(model){return model.name;}},{display:'icon-sort-value-asc',getter:function getter(model){return model.value;}}]),_temp))||_class;/* harmony default export */ __webpack_exports__["a"] = (Trait);

/***/ }),

/***/ "a4BR":
/*!********************************************!*\
  !*** ./source/components/Effect/Effect.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "Nogc");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "WEGp");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "Amxr");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "o1mq");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "cEnY");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "itEV");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "cNEE");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "NbXW");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Editable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Editable */ "O+tL");
/* harmony import */ var _Effect_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Effect.scss */ "5UjR");
/* harmony import */ var _Effect_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Effect_scss__WEBPACK_IMPORTED_MODULE_10__);
var _class,_class2,_temp;var Effect=Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class=(_temp=_class2=/*#__PURE__*/function(_Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Effect,_Component);function Effect(){var _getPrototypeOf2;var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Effect);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,(_getPrototypeOf2=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Effect)).call.apply(_getPrototypeOf2,[this].concat(args)));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeCondition",function(condition){return _this.props.model.set({condition:condition});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeModifier",function(modifier){return _this.props.model.set({modifier:modifier});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeTarget",function(_ref){var value=_ref.target.value;return _this.props.model.set({targetId:value});});return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Effect,[{key:"render",value:function render(){var _this$props$model=this.props.model,available=_this$props$model.available,_this$props$model$con=_this$props$model.condition,condition=_this$props$model$con===void 0?'':_this$props$model$con,isApplicable=_this$props$model.isApplicable,modifier=_this$props$model.modifier,targetId=_this$props$model.targetId;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"effect ".concat(isApplicable?'applicable':'').trim()},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select",{className:"target",value:targetId,onChange:this.handleChangeTarget},available().map(function(_ref2){var hash=_ref2.hash,id=_ref2.id,name=_ref2.name;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option",{key:hash,value:id},name);})),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"modifier",max:999,min:-99,onChange:this.handleChangeModifier,value:modifier}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"condition",onChange:this.handleChangeCondition,placeholder:"Any",value:condition}));}}]);return Effect;}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"defaultProps",{model:{}}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"sortOptions",[{display:'icon-sort-name-asc',getter:function getter(model){return[!model.targetId,model.targetId];}},{display:'icon-sort-value-asc',getter:function getter(model){return[!model.condition,model.modifier];}}]),_temp))||_class;/* harmony default export */ __webpack_exports__["a"] = (Effect);

/***/ }),

/***/ "djCb":
/*!********************************************************!*\
  !*** ./source/components/MultiToggle/MultiToggle.scss ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
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
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "lfjU":
/*!*******************************************!*\
  !*** ./source/components/Trait/Trait.mdx ***!
  \*******************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./.docz/app/imports.js (referenced with import()) */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./.docz/app/imports.js (referenced with import()) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "y9tM");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "Nogc");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "WEGp");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "Amxr");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "o1mq");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "itEV");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mdx-js/tag */ "6qfE");
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var docz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! docz */ "mcpE");
/* harmony import */ var docz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(docz__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _models_Character__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/models/Character */ "ITKj");
/* harmony import */ var _components_Trait__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Trait */ "M/4f");
/* harmony import */ var _models_Trait__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/models/Trait */ "ZwSi");
var layoutProps={};var MDXContent=/*#__PURE__*/function(_React$Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MDXContent,_React$Component);function MDXContent(props){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,MDXContent);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(MDXContent).call(this,props));_this.layout=null;return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MDXContent,[{key:"render",value:function render(){var _this$props=this.props,components=_this$props.components,props=_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_this$props,["components"]);return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"wrapper",components:components},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"h2",components:components,props:{"id":"trait"}},"Trait"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(docz__WEBPACK_IMPORTED_MODULE_8__["Playground"],{__position:0,__code:'() => {\n  const character = Character.create({\n    attributes: [\n      { name: \'Strength\', value: 2 },\n      { name: \'Dexterity\', value: 4 },\n      { name: \'Perception\', value: 3 },\n    ],\n    traits: [\n      { name: \'Magical Aptitude\', value: 4 },\n      {\n        effects: [\n          {\n            condition: \'Vision-based\',\n            modifier: -5,\n            modifies: \'Perception\',\n          },\n        ],\n        name: \'Blind\',\n        value: -3,\n      },\n    ],\n  })\n  return (\n    <>\n      <Trait model={character.traits.at(0)} />\n      <Trait model={character.traits.at(1)} />\n    </>\n  )\n}',__scope:{props:this?this.props:props,Character:_models_Character__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],Trait:_components_Trait__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],TraitModel:_models_Trait__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]}},function(){var character=_models_Character__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].create({attributes:[{name:'Strength',value:2},{name:'Dexterity',value:4},{name:'Perception',value:3}],traits:[{name:'Magical Aptitude',value:4},{effects:[{condition:'Vision-based',modifier:-5,modifies:'Perception'}],name:'Blind',value:-3}]});return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Trait__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],{model:character.traits.at(0)}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Trait__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],{model:character.traits.at(1)}));}));}}]);return MDXContent;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);MDXContent.__docgenInfo={"description":"","methods":[],"displayName":"MDXContent"};

/***/ }),

/***/ "sxfZ":
/*!********************************************!*\
  !*** ./source/components/Trait/Trait.scss ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "t524":
/*!****************************************!*\
  !*** ./source/components/List/List.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "b696");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "cFUw");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "Nogc");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "WEGp");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "Amxr");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "o1mq");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "cEnY");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "itEV");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "cNEE");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "ubaz");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sortablejs */ "U/5H");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_MultiToggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/MultiToggle */ "1T+A");
/* harmony import */ var _models_generic_Collection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/models/generic/Collection */ "YFLu");
/* harmony import */ var _utilities_debounce__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/utilities/debounce */ "BSti");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/utilities/noop */ "x6zz");
/* harmony import */ var _utilities_unique__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utilities/unique */ "DODz");
/* harmony import */ var _List_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./List.scss */ "e8LY");
/* harmony import */ var _List_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_List_scss__WEBPACK_IMPORTED_MODULE_18__);
var NO_CATEGORY='Uncategorized';var buildSorter=function buildSorter(getter){var reversed=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;return function(A,B){var a=getter(A);var b=getter(B);if(Array.isArray(a)&&Array.isArray(b)){for(var i=0;i<a.length;i+=1){if(a[i]!==b[i]){if(reversed)return b[i]<a[i]?-1:1;return a[i]<b[i]?-1:1;}}return 0;}if(typeof a==='number'&&typeof b==='number'){if(a===b)return 0;if(reversed)return b<a?-1:1;return a<b?-1:1;}var aString=String(a);var bString=String(b);if(reversed)return bString.localeCompare(aString);return aString.localeCompare(bString);};};/* harmony default export */ __webpack_exports__["a"] = (function(Model,Component){var _class,_temp;var props=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var sortOptions=(Component.sortOptions||[]).map(function(sorter){return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_9___default()({},sorter,{comparitor:buildSorter(sorter.getter),display:typeof sorter.display==='string'?react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span",{className:sorter.display}):sorter.display});});return _temp=_class=/*#__PURE__*/function(_React$Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(List,_React$Component);function List(){var _getPrototypeOf2;var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,List);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this,(_getPrototypeOf2=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(List)).call.apply(_getPrototypeOf2,[this].concat(args)));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"Component",Component);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"Model",Model);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"container",react__WEBPACK_IMPORTED_MODULE_11___default.a.createRef());_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"expandedItems",{});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"filterEl",react__WEBPACK_IMPORTED_MODULE_11___default.a.createRef());_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"onDataSnapshotDisposer",_utilities_noop__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"]);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"onLayoutSnapshotDisposer",_utilities_noop__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"]);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"sortable",null);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"state",{expanded:{},sortOption:null});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"getCategoryItems",function(items,category){return category&&category!==NO_CATEGORY?items.filter(function(item){return(item.categories||[]).includes(category);}):items.filter(function(item){return(item.categories||[]).length===0;});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"handleAdd",function(){_this.props.collection.push(Model.create({}));_this.forceUpdate();});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"handleDelete",function(_ref){var target=_ref.target;var index=parseInt(target.parentNode.getAttribute('data-index'),10);_this.props.collection.deleteAt(index);_this.forceUpdate();});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"handleFilterChange",function(_ref2){var target=_ref2.target;return _this.props.layout.set({filter:target.value});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"handleSort",function(){return _this.props.collection.sortBy('name');});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"handleSortChange",function(clicked){var current=_this.state.sortOption;_this.setState({sortOption:current===clicked?null:clicked},function(){_this.props.layout.set({sortOption:current===clicked?undefined:sortOptions.indexOf(clicked)});});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"handleToggleCategorized",function(){_this.props.layout.set({categorize:!_this.props.layout.categorize});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"handleToggleExpanded",function(hash,expanded){_this.setState(function(state){return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_9___default()({},state,{expanded:_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_9___default()({},state.expanded,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({},hash,expanded))});});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"renderCategoryWidget",function(){var layout=_this.props.layout;var _assertThisInitialize=_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),categories=_assertThisInitialize.categories;if(!categories.length)return null;var className=['categorize icon-categorize',layout.categorize?'on':'off'].join(' ');return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({className:className},{onClick:_this.handleToggleCategorized})),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("select",{className:"filter",onChange:_this.handleFilterChange,ref:_this.filterEl,tabIndex:-1,value:layout.filter},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("option",{value:""},"All"),categories.map(function(name){return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("option",{key:name,value:name},name);})));});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"renderSortWidget",function(){if(!_this.props.sortable)return null;if(!sortOptions.length)return null;return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_MultiToggle__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"],{className:"sorter",onChange:_this.handleSortChange,options:sortOptions,selected:_this.state.sortOption});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"renderCategory",function(category,data){var columns=_this.props.columns;var categoryItems=_this.getCategoryItems(data,category);if(!categoryItems.length)return null;var values=categoryItems.map(function(item){return item.categoryValue;});var min=Math.min.apply(Math,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(values));var max=Math.max.apply(Math,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(values));return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{key:category,className:"category"},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{className:"details"},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{className:"title"},"Category: ",category," (",categoryItems.length,")"),!Number.isNaN(min)&&!Number.isNaN(max)&&react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{className:"range"},min,"-",max)),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{className:"category-items",style:{columns:columns}},categoryItems.map(_this.renderItem)));});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"renderItem",function(model){var _this$props=_this.props,collection=_this$props.collection,layout=_this$props.layout,sortable=_this$props.sortable;var _this$state=_this.state,expanded=_this$state.expanded,sortOption=_this$state.sortOption;var sorted=sortable&&sortOption!==null;var categorized=layout&&layout.categorize;return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{className:"list-item-wrapper ".concat(expanded[model.hash]?'expanded':'').trim(),"data-index":collection.indexOf(model),key:model.hash},!sorted&&!categorized&&react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{className:"drag-handle"}),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Component,{model:model,onDelete:collection.delete,onToggleExpanded:_this.handleToggleExpanded}),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{className:"icon-remove",onClick:_this.handleDelete}));});return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(List,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(this.props.layout){var sortOptionIndex=this.props.layout.sortOption;if(sortOptions.length&&sortOptionIndex!==undefined){this.setState({sortOption:sortOptions[sortOptionIndex]||null});}this.onLayoutSnapshotDisposer=Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["onSnapshot"])(this.props.layout,Object(_utilities_debounce__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(function(){return _this2.forceUpdate();},100,true));}var sortable=this.props.sortable;if(sortable){this.sortable=sortablejs__WEBPACK_IMPORTED_MODULE_12___default.a.create(this.container.current,{disabled:!sortable,draggable:'.list-item-wrapper',handle:'.drag-handle',onEnd:function onEnd(){_this2.container.current.classList.remove('dragging');_this2.props.collection.replace(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this2.container.current.querySelectorAll('.list-item-wrapper')).map(function(item){return parseInt(item.getAttribute('data-index'),10);}).map(function(targetIndex){return _this2.props.collection.at(targetIndex);}));},onStart:function onStart(){return _this2.container.current.classList.add('dragging');}});}this.onDataSnapshotDisposer=Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_10__["onSnapshot"])(this.props.collection,function(){return _this2.forceUpdate();});}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(){if(this.sortable)this.sortable.option('disabled',!this.props.sortable);}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.sortable)this.sortable.destroy();this.onDataSnapshotDisposer();this.onLayoutSnapshotDisposer();}},{key:"render",value:function render(){var _this3=this;var _this$props2=this.props,_this$props2$classNam=_this$props2.className,className=_this$props2$classNam===void 0?'':_this$props2$classNam,columns=_this$props2.columns,_this$props2$layout=_this$props2.layout,layout=_this$props2$layout===void 0?{}:_this$props2$layout,title=_this$props2.title;var sortOption=this.state.sortOption;var categories=this.categories;var data=this.props.collection.asArray;if(sortOption!==null)data=data.sort(sortOption.comparitor);var hasCategories=Boolean(categories.length);if(hasCategories&&layout.filter){data=this.getCategoryItems(data,layout.filter);categories=[layout.filter];}var listStyle={columns:layout.categorize?1:columns};return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{className:"list ".concat(className).trim(),ref:this.container,style:listStyle},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{className:"title-bar"},this.renderSortWidget(),this.renderCategoryWidget(),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{className:"text"},title),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button",{className:"add icon-add",onClick:this.handleAdd})),hasCategories&&layout.categorize?categories.map(function(category){return _this3.renderCategory(category,data);}):data.map(this.renderItem));}},{key:"categories",get:function get(){var list=this.props.collection.asArray.reduce(function(all,next){return all.concat(next.categories||[]);},[]);if(!list.length)return[];return Object(_utilities_unique__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"])(list.filter(function(item){return item!==NO_CATEGORY;})).sort().concat(NO_CATEGORY);}}]);return List;}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_class,"defaultProps",_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_9___default()({className:'',collection:Object(_models_generic_Collection__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(Model).create([]),columns:1,layout:undefined,sortable:true,title:props.title||''},props)),_temp;});

/***/ })

};;
//# sourceMappingURL=components-trait-trait.7a43e2bc950fdb75f30a.js.map