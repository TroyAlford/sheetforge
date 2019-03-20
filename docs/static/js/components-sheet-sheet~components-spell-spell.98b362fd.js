exports.ids = [2];
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

/***/ "8qIS":
/*!******************************************************!*\
  !*** ./source/components/Spell/Spell.js + 1 modules ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/assertThisInitialized.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/getPrototypeOf.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/Editable/Editable.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/Effect/Effect.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/Expandable/Expandable.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/List/List.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Effect/Effect.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/ResourceCost/ResourceCost.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/utilities/noop.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-state-tree/dist/mobx-state-tree.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Nogc");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("WEGp");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("Amxr");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("o1mq");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("cEnY");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("itEV");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("cNEE");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/mobx-react/index.js
var mobx_react = __webpack_require__("NbXW");

// EXTERNAL MODULE: ./node_modules/mobx-state-tree/dist/mobx-state-tree.js
var mobx_state_tree = __webpack_require__("uqjs");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./source/components/Editable/Editable.js
var Editable = __webpack_require__("O+tL");

// EXTERNAL MODULE: ./source/components/Effect/Effect.js
var Effect = __webpack_require__("a4BR");

// EXTERNAL MODULE: ./source/components/Expandable/Expandable.js
var Expandable = __webpack_require__("I7n6");

// EXTERNAL MODULE: ./source/components/List/List.js
var List = __webpack_require__("t524");

// EXTERNAL MODULE: ./source/components/ResourceCost/ResourceCost.scss
var ResourceCost_ResourceCost = __webpack_require__("y+pi");

// CONCATENATED MODULE: ./source/components/ResourceCost/ResourceCost.js
var _class,_class2,_temp;var ResourceCost_ResourceCost_ResourceCost=Object(mobx_react["observer"])(_class=(_temp=_class2=/*#__PURE__*/function(_Component){inherits_default()(ResourceCost,_Component);function ResourceCost(){var _getPrototypeOf2;var _this;classCallCheck_default()(this,ResourceCost);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn_default()(this,(_getPrototypeOf2=getPrototypeOf_default()(ResourceCost)).call.apply(_getPrototypeOf2,[this].concat(args)));defineProperty_default()(assertThisInitialized_default()(_this),"handleChangeAmount",function(amount){return _this.props.model.set({amount:amount});});defineProperty_default()(assertThisInitialized_default()(_this),"handleChangeResource",function(_ref){var value=_ref.target.value;return _this.props.model.set({resourceName:value});});return _this;}createClass_default()(ResourceCost,[{key:"render",value:function render(){var _this$props$model=this.props.model,amount=_this$props$model.amount,available=_this$props$model.available,resourceName=_this$props$model.resourceName;return react_default.a.createElement("div",{className:"resource-cost"},react_default.a.createElement("select",{className:"resource-id",value:resourceName,onChange:this.handleChangeResource},available.map(function(_ref2){var name=_ref2.name;return react_default.a.createElement("option",{key:name,value:name},name);})),react_default.a.createElement(Editable["a" /* default */],{className:"amount",max:999,min:-99,onChange:this.handleChangeAmount,value:amount}));}}]);return ResourceCost;}(react["Component"]),defineProperty_default()(_class2,"defaultProps",{model:{}}),defineProperty_default()(_class2,"sortOptions",[{display:'icon-sort-name-asc',getter:function getter(model){return model.resourceName;}},{display:'icon-sort-value-asc',getter:function getter(model){return model.amount;}}]),_temp))||_class;/* harmony default export */ var components_ResourceCost_ResourceCost = (ResourceCost_ResourceCost_ResourceCost);
// EXTERNAL MODULE: ./source/models/Effect/Effect.js
var Effect_Effect = __webpack_require__("HyL6");

// EXTERNAL MODULE: ./source/models/ResourceCost/ResourceCost.js
var models_ResourceCost_ResourceCost = __webpack_require__("ITnf");

// EXTERNAL MODULE: ./source/utilities/noop.js
var noop = __webpack_require__("x6zz");

// EXTERNAL MODULE: ./source/components/Spell/Spell.scss
var Spell_Spell = __webpack_require__("IURI");

// CONCATENATED MODULE: ./source/components/Spell/Spell.js
var Spell_class,Spell_class2,Spell_temp;var EffectList=Object(List["a" /* default */])(Effect_Effect["a" /* default */],Effect["a" /* default */],{className:'effect-list'});var ListOfCosts=Object(List["a" /* default */])(models_ResourceCost_ResourceCost["a" /* default */],components_ResourceCost_ResourceCost,{className:'resource-cost-list'});var Spell_Spell_Spell=Object(mobx_react["observer"])(Spell_class=(Spell_temp=Spell_class2=/*#__PURE__*/function(_Component){inherits_default()(Spell,_Component);function Spell(){var _getPrototypeOf2;var _this;classCallCheck_default()(this,Spell);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn_default()(this,(_getPrototypeOf2=getPrototypeOf_default()(Spell)).call.apply(_getPrototypeOf2,[this].concat(args)));defineProperty_default()(assertThisInitialized_default()(_this),"onResourceSnapshotDisposer",noop["a" /* default */]);defineProperty_default()(assertThisInitialized_default()(_this),"handleCast",function(){_this.props.model.cast();_this.forceUpdate();});defineProperty_default()(assertThisInitialized_default()(_this),"handleChangeDescription",function(description){return _this.props.model.set({description:description});});defineProperty_default()(assertThisInitialized_default()(_this),"handleChangeLevel",function(level){return _this.props.model.set({level:level});});defineProperty_default()(assertThisInitialized_default()(_this),"handleChangeName",function(name){return _this.props.model.set({name:name});});defineProperty_default()(assertThisInitialized_default()(_this),"handleCommitName",function(){return _this.props.model.name===''&&_this.props.onDelete(_this.props.model);});defineProperty_default()(assertThisInitialized_default()(_this),"handleToggleActive",function(){return _this.props.model.set({isActive:!_this.props.model.isActive});});return _this;}createClass_default()(Spell,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;var resources=this.props.model.character.resources;this.onResourceSnapshotDisposer=Object(mobx_state_tree["onSnapshot"])(resources,function(){return _this2.forceUpdate();});}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.onResourceSnapshotDisposer();}},{key:"render",value:function render(){var _this3=this;var _this$props$model=this.props.model,costs=_this$props$model.costs,description=_this$props$model.description,name=_this$props$model.name,effects=_this$props$model.effects,hash=_this$props$model.hash,isActive=_this$props$model.isActive,isAffordable=_this$props$model.isAffordable,level=_this$props$model.level;return react_default.a.createElement("div",{className:"spell ".concat(isActive?'':'in',"active")},react_default.a.createElement(Editable["a" /* default */],{className:"is-active",onChange:this.handleToggleActive,value:isActive}),react_default.a.createElement(Editable["a" /* default */],{className:"name",onChange:this.handleChangeName,onEditEnd:this.handleCommitName,value:name}),react_default.a.createElement(Editable["a" /* default */],{className:"level",onChange:this.handleChangeLevel,value:level}),react_default.a.createElement("button",{className:"cast icon-magic",onClick:this.handleCast,disabled:!isAffordable()}),react_default.a.createElement(Expandable["a" /* default */],{onToggle:function onToggle(expanded){return _this3.props.onToggleExpanded(hash,expanded);}},react_default.a.createElement(Editable["a" /* default */],{className:"description",type:"multiline",onChange:this.handleChangeDescription,placeholder:"Description...",value:description}),react_default.a.createElement(ListOfCosts,{collection:costs,title:"Casting Costs"}),react_default.a.createElement(EffectList,{collection:effects,title:"Effects"})));}}]);return Spell;}(react["Component"]),defineProperty_default()(Spell_class2,"defaultProps",{model:{},onDelete:noop["a" /* default */],onToggleExpanded:noop["a" /* default */]}),defineProperty_default()(Spell_class2,"sortOptions",[{display:'icon-sort-name-asc',getter:function getter(model){return[model.name,model.level];}},{display:'icon-sort-value-asc',getter:function getter(model){return[model.level,model.name];}},{display:'icon-sort-value-desc',getter:function getter(model){return[-model.level,model.name];}}]),Spell_temp))||Spell_class;/* harmony default export */ var components_Spell_Spell = __webpack_exports__["a"] = (Spell_Spell_Spell);

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

/***/ "IURI":
/*!********************************************!*\
  !*** ./source/components/Spell/Spell.scss ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ }),

/***/ "y+pi":
/*!**********************************************************!*\
  !*** ./source/components/ResourceCost/ResourceCost.scss ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

};;
//# sourceMappingURL=components-sheet-sheet~components-spell-spell.7a43e2bc950fdb75f30a.js.map