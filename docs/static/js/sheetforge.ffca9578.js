(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("sheetforge", [], factory);
	else if(typeof exports === 'object')
		exports["sheetforge"] = factory();
	else
		root["sheetforge"] = factory();
})(global, function() {
return exports.ids = [18,1,2];
exports.modules = {

/***/ "05fm":
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/*! exports provided: AttributeModel, CharacterModel, DescriptorModel, EffectModel, ItemModel, LayoutModel, ResourceCostModel, ResourceModel, Sheet, SkillModel, SpellModel, TraitModel */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is an entry point */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fontello_css_sheetforge_embedded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fontello/css/sheetforge-embedded */ "H3yI");
/* harmony import */ var _fontello_css_sheetforge_embedded__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fontello_css_sheetforge_embedded__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Attribute */ "mkTB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeModel", function() { return _models_Attribute__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _models_Character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Character */ "ITKj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterModel", function() { return _models_Character__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _models_Descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/Descriptor */ "AD/C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptorModel", function() { return _models_Descriptor__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _models_Effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Effect */ "HyL6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EffectModel", function() { return _models_Effect__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _models_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/Item */ "Afd3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemModel", function() { return _models_Item__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _models_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/models/Layout */ "zZb/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutModel", function() { return _models_Layout__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _models_ResourceCost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/models/ResourceCost */ "ITnf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceCostModel", function() { return _models_ResourceCost__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _models_Resource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/models/Resource */ "ZEI3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceModel", function() { return _models_Resource__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _components_Sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Sheet */ "tqhn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sheet", function() { return _components_Sheet__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony import */ var _models_Skill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/models/Skill */ "vovD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkillModel", function() { return _models_Skill__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _models_Spell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/models/Spell */ "JCrA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpellModel", function() { return _models_Spell__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony import */ var _models_Trait__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/models/Trait */ "ZwSi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TraitModel", function() { return _models_Trait__WEBPACK_IMPORTED_MODULE_12__["a"]; });



/***/ }),

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

/***/ "AD/C":
/*!************************************************!*\
  !*** ./source/models/Descriptor/Descriptor.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_generic_ICategorizable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/generic/ICategorizable */ "vQEy");
/* harmony import */ var _models_generic_IEditable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/generic/IEditable */ "RtsE");
/* harmony import */ var _models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/generic/IIdentity */ "kcWH");
/* harmony default export */ __webpack_exports__["a"] = (mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].compose(_models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],Object(_models_generic_ICategorizable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(),_models_generic_IEditable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model({name:'New Descriptor...',value:''})).named('Descriptor'));

/***/ }),

/***/ "Afd3":
/*!************************************!*\
  !*** ./source/models/Item/Item.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Effect */ "HyL6");
/* harmony import */ var _models_generic_Collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/generic/Collection */ "YFLu");
/* harmony import */ var _models_generic_ICategorizable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/generic/ICategorizable */ "vQEy");
/* harmony import */ var _models_generic_IEditable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/generic/IEditable */ "RtsE");
/* harmony import */ var _models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/generic/IIdentity */ "kcWH");
/* harmony default export */ __webpack_exports__["a"] = (mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].compose(_models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],Object(_models_generic_ICategorizable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(),_models_generic_IEditable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model({description:'',effects:Object(_models_generic_Collection__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_models_Effect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]),equipped:false,name:'New Item...'})).named('Item'));

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

/***/ "DODz":
/*!************************************!*\
  !*** ./source/utilities/unique.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(){var array=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];return array.filter(function(item,index,all){return all.indexOf(item)===index;});});

/***/ }),

/***/ "H/3x":
/*!******************************************!*\
  !*** ./source/components/Item/Item.scss ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
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
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "HcU2":
/*!****************************************!*\
  !*** ./source/utilities/findParent.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["a"] = (function(child){var filterFunction=arguments.length>1&&arguments[1]!==undefined?arguments[1]:Boolean;if(!Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["hasParent"])(child)){return null;}var parent=Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["getParent"])(child);while(parent){if(filterFunction(parent)){return parent;}if(!Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["hasParent"])(parent)){return null;}parent=Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["getParent"])(parent);}return null;});

/***/ }),

/***/ "HyL6":
/*!****************************************!*\
  !*** ./source/models/Effect/Effect.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Attribute */ "mkTB");
/* harmony import */ var _models_generic_Collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/generic/Collection */ "YFLu");
/* harmony import */ var _models_generic_IEditable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/generic/IEditable */ "RtsE");
/* harmony import */ var _models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/generic/IIdentity */ "kcWH");
/* harmony import */ var _utilities_findParent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utilities/findParent */ "HcU2");
/* harmony default export */ __webpack_exports__["a"] = (mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].compose(_models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],_models_generic_IEditable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model({condition:'',modifier:0,targetId:''}).actions(function(self){return{afterAttach:function afterAttach(){if(!self.targetId&&self.available().length){// eslint-disable-next-line no-param-reassign
self.targetId=self.available().first.id;}},available:function available(){var character=self.character();return character?character.attributes:Object(_models_generic_Collection__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_models_Attribute__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).create([]);},character:function character(){return Object(_utilities_findParent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(self,function(p){return p.isCharacter;});},isApplicable:function isApplicable(){var character=self.character();return Boolean(!self.condition||character&&character.conditions.includes(self.condition));},source:function source(){return Object(_utilities_findParent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(self,function(p){return p.name;})||null;},sourceName:function sourceName(){return self.source()?self.source().name:'Unknown';},target:function target(){var character=self.character();return character?character.attributes.findBy('name',self.targetId):null;}};})).named('Effect'));

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

/***/ "ITKj":
/*!**********************************************************!*\
  !*** ./source/models/Character/Character.js + 1 modules ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Attribute/Attribute.js because of ./source/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Descriptor/Descriptor.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Item/Item.js because of ./source/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Resource/Resource.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Skill/Skill.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Spell/Spell.js because of ./source/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Trait/Trait.js because of ./source/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/generic/Collection/Collection.js because of ./source/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/generic/IEditable/IEditable.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/generic/IIdentity/IIdentity.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-state-tree/dist/mobx-state-tree.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/mobx-state-tree/dist/mobx-state-tree.js
var mobx_state_tree = __webpack_require__("uqjs");

// EXTERNAL MODULE: ./source/models/Attribute/Attribute.js + 2 modules
var Attribute = __webpack_require__("mkTB");

// EXTERNAL MODULE: ./source/models/Descriptor/Descriptor.js
var Descriptor = __webpack_require__("AD/C");

// EXTERNAL MODULE: ./source/models/generic/Collection/Collection.js + 1 modules
var Collection = __webpack_require__("YFLu");

// EXTERNAL MODULE: ./source/models/generic/IEditable/IEditable.js + 3 modules
var IEditable = __webpack_require__("RtsE");

// EXTERNAL MODULE: ./source/models/generic/IIdentity/IIdentity.js + 1 modules
var IIdentity = __webpack_require__("kcWH");

// EXTERNAL MODULE: ./source/models/Item/Item.js
var Item = __webpack_require__("Afd3");

// EXTERNAL MODULE: ./source/models/Resource/Resource.js
var Resource = __webpack_require__("ZEI3");

// EXTERNAL MODULE: ./source/models/Skill/Skill.js
var Skill = __webpack_require__("vovD");

// EXTERNAL MODULE: ./source/models/Spell/Spell.js
var Spell = __webpack_require__("JCrA");

// EXTERNAL MODULE: ./source/models/Trait/Trait.js
var Trait = __webpack_require__("ZwSi");

// CONCATENATED MODULE: ./source/utilities/flatten.js
function flatten(array){var depth=arguments.length>1&&arguments[1]!==undefined?arguments[1]:Infinity;if(!array||!Array.isArray(array)){throw new TypeError("cannot flatten non-Array value ".concat(JSON.stringify(array)));}return array.reduce(function(all,next){if(depth>1&&next&&Array.isArray(next)){return all.concat(flatten(next,depth-1));}return all.concat(next);},[]);}
// CONCATENATED MODULE: ./source/models/Character/Character.js
/* harmony default export */ var Character = __webpack_exports__["a"] = (mobx_state_tree["types"].compose(IIdentity["a" /* default */],IEditable["a" /* default */],mobx_state_tree["types"].model({attributes:Object(Collection["a" /* default */])(Attribute["a" /* default */]),conditions:Object(Collection["a" /* default */])(mobx_state_tree["types"].string),// ['vs Goblins', 'Crinos Form']
descriptors:Object(Collection["a" /* default */])(Descriptor["a" /* default */]),experience:0,items:Object(Collection["a" /* default */])(Item["a" /* default */]),// equipped / unequipped, have Effects
resources:Object(Collection["a" /* default */])(Resource["a" /* default */]),skills:Object(Collection["a" /* default */])(Skill["a" /* default */]),spells:Object(Collection["a" /* default */])(Spell["a" /* default */]),traits:Object(Collection["a" /* default */])(Trait["a" /* default */])// have Effects
}).volatile(function(){return{isCharacter:true};}).actions(function(self){return{activeEffects:function activeEffects(){return self.effects().filter(function(effect){return effect&&effect.isApplicable();});},availableConditions:function availableConditions(){return self.effects().map(function(e){return e.condition;}).concat(self.conditions.asArray).sort().filter(function(effect,i,all){return!i||effect!==all[i-1];}).filter(Boolean);},effects:function effects(){return flatten([// Trait Effects first, because they're inherent
self.traits.filter(Boolean).map(function(trait){return trait.effects.values;}),// Direct Effects second, because they're cast on the character
self.spells.filter(function(spell){return spell.isActive;}).map(function(spell){return spell.effects.values;}),// Item Effects third, because they're indirect
self.items.filter(function(item){return item.equipped;}).map(function(item){return item.effects.values;})]).filter(Boolean);}};})).named('Character'));

/***/ }),

/***/ "ITnf":
/*!****************************************************!*\
  !*** ./source/models/ResourceCost/ResourceCost.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_generic_Collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/generic/Collection */ "YFLu");
/* harmony import */ var _models_generic_IEditable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/generic/IEditable */ "RtsE");
/* harmony import */ var _models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/generic/IIdentity */ "kcWH");
/* harmony import */ var _models_Resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Resource */ "ZEI3");
/* harmony import */ var _utilities_findParent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utilities/findParent */ "HcU2");
/* harmony default export */ __webpack_exports__["a"] = (mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].compose(_models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],_models_generic_IEditable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model({amount:0,resourceName:''}).views(function(self){return{get available(){return self.character?self.character.resources:Object(_models_generic_Collection__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_models_Resource__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]).create([]);},get character(){return Object(_utilities_findParent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(self,function(p){return p.isCharacter;});}};}).actions(function(self){return{afterAttach:function afterAttach(){if(!self.resourceName&&self.available.length){// eslint-disable-next-line no-param-reassign
self.resourceName=self.available.first.name;}},resource:function resource(){if(!self.character)return null;return self.character.resources.findBy('name',self.resourceName);}};})).named('Cost'));

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

/***/ "JCrA":
/*!**************************************!*\
  !*** ./source/models/Spell/Spell.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Effect */ "HyL6");
/* harmony import */ var _models_generic_Collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/generic/Collection */ "YFLu");
/* harmony import */ var _models_generic_ICategorizable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/generic/ICategorizable */ "vQEy");
/* harmony import */ var _models_generic_IEditable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/generic/IEditable */ "RtsE");
/* harmony import */ var _models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/generic/IIdentity */ "kcWH");
/* harmony import */ var _models_ResourceCost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/models/ResourceCost */ "ITnf");
/* harmony import */ var _utilities_findParent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utilities/findParent */ "HcU2");
/* harmony default export */ __webpack_exports__["a"] = (mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].compose(_models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],Object(_models_generic_ICategorizable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(function(self){return self.level;}),_models_generic_IEditable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model({costs:Object(_models_generic_Collection__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_models_ResourceCost__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]),// Resources
description:'',effects:Object(_models_generic_Collection__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_models_Effect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]),isActive:false,level:0,name:'New Spell...'}).views(function(self){return{get character(){return Object(_utilities_findParent__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(self,function(p){return p.isCharacter;});}};}).actions(function(self){return{cast:function cast(){if(self.isAffordable()){self.costs.forEach(function(cost){var resource=cost.resource();resource.set({current:resource.current-cost.amount});});}},isAffordable:function isAffordable(){if(!self.character||!self.costs.length)return true;return self.costs.every(function(cost){return cost.resource()&&cost.resource().current>=cost.amount;});}};})).named('Spell'));

/***/ }),

/***/ "K0ru":
/*!********************************************************!*\
  !*** ./source/components/Rating/Rating.js + 1 modules ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/assertThisInitialized.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/getPrototypeOf.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/toConsumableArray.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./source/utilities/bound.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/utilities/math/math.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/utilities/noop.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Nogc");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

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

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./source/utilities/bound.js
var bound = __webpack_require__("kIQV");

// EXTERNAL MODULE: ./source/utilities/math/math.js
var math = __webpack_require__("maIC");

// EXTERNAL MODULE: ./source/utilities/noop.js
var noop = __webpack_require__("x6zz");

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("b696");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./source/utilities/range.js
/* harmony default export */ var range = (function(start,end){if(typeof start!=='number'||typeof end!=='number'||Math.round(start)!==start||Math.round(end)!==end){throw new TypeError('range(start, end) requires integer values for both start and end');}var step=start<=end?1:-1;var length=Math.floor(Math.abs(end-start)/Math.abs(step))+1;return Array.apply(void 0,toConsumableArray_default()(Array(length))).map(function(_,i){return start+i*step;});});
// EXTERNAL MODULE: ./source/components/Rating/Rating.scss
var Rating_Rating = __webpack_require__("VHFM");

// CONCATENATED MODULE: ./source/components/Rating/Rating.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating_Rating_Rating; });
var Rating_Rating_Rating=/*#__PURE__*/function(_Component){inherits_default()(Rating,_Component);function Rating(){var _getPrototypeOf2;var _this;classCallCheck_default()(this,Rating);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn_default()(this,(_getPrototypeOf2=getPrototypeOf_default()(Rating)).call.apply(_getPrototypeOf2,[this].concat(args)));defineProperty_default()(assertThisInitialized_default()(_this),"handleIconClick",function(event){var number=parseInt(event.target.getAttribute('data-number'),10);_this.props.onChange(number===_this.props.current?number-1:number);});defineProperty_default()(assertThisInitialized_default()(_this),"render",function(){var _this$props=_this.props,allowExcess=_this$props.allowExcess,current=_this$props.current,iconExcess=_this$props.iconExcess,iconOff=_this$props.iconOff,iconOn=_this$props.iconOn,maximum=_this$props.maximum;var total=allowExcess?math["a" /* default */].max(current,maximum):maximum;return react_default.a.createElement("div",{className:"rating"},total>0||allowExcess&&current>0?range(1,Math.ceil(Object(bound["a" /* default */])(total,{min:1}))).map(function(number){return react_default.a.createElement("span",{"data-number":number,key:number,onClick:_this.handleIconClick,title:number},number<=current&&number<=maximum&&iconOn,number>current&&number<=maximum&&iconOff,number>maximum&&iconExcess);}):null);});return _this;}return Rating;}(react["Component"]);defineProperty_default()(Rating_Rating_Rating,"defaultProps",{allowExcess:false,current:0,iconExcess:react_default.a.createElement("span",{className:"dot excess icon-add"}),iconOff:react_default.a.createElement("span",{className:"dot empty"}),iconOn:react_default.a.createElement("span",{className:"dot filled"}),maximum:5,onChange:noop["a" /* default */]});

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

/***/ "O+tL":
/*!************************************************!*\
  !*** ./source/components/Editable/Editable.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editable; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "cFUw");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "/hBA");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utilities_bound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utilities/bound */ "kIQV");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utilities/noop */ "x6zz");
/* harmony import */ var _Editable_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Editable.scss */ "S5k1");
/* harmony import */ var _Editable_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Editable_scss__WEBPACK_IMPORTED_MODULE_12__);
var TYPES=[// Strings
'text','multiline',// Checkboxes
'boolean',// Numbers
'number','slider'];var Editable=/*#__PURE__*/function(_React$Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Editable,_React$Component);function Editable(){var _getPrototypeOf2;var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,Editable);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this,(_getPrototypeOf2=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Editable)).call.apply(_getPrototypeOf2,[this].concat(args)));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"state",{editing:false,resetValue:_this.props.value});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"getEditorType",function(){var value=_this.props.value;var type=_this.props.type;if(type!==undefined&&TYPES.includes(type)){return type;}type=_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(value);if(type==='string'){return value.includes('\n')?'multiline':'text';}if(['boolean','number'].includes(type)){return type;}return'text';});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"resetChanges",function(){_this.props.onChange(_this.state.resetValue,_this.props.value);_this.handleToggleEditing();});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"createRefWithAutoFocus",function(editor){if(!editor){return;}_this.editor=editor;var editorType=_this.getEditorType();if(editorType!=='boolean'&&typeof editor.focus==='function'){editor.focus();}if(['boolean','number'].includes(_this.getEditorType())){return;}if(_this.props.forceEditMode&&typeof editor.setSelectionRange==='function'){editor.setSelectionRange(editor.value.length,editor.value.length);}});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"handleChange",function(_ref){var target=_ref.target;var _this$props=_this.props,min=_this$props.min,max=_this$props.max;var value=target.value;// eslint-disable-next-line default-case
switch(_this.getEditorType()){case'slider':case'number':value=parseFloat(value||0);// eslint-disable-next-line prefer-destructuring
if(Number.isNaN(value)){value=_this.props.value;}value=Object(_utilities_bound__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(value,{max:max,min:min});}_this.props.onChange(value,_this.state.resetValue);});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"handleKeys",function(event){var target=event.target,key=event.key,ctrlKey=event.ctrlKey,metaKey=event.metaKey;if(_this.props.onKeyDown!==_utilities_noop__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]){_this.props.onKeyDown(event);if(event.isDefaultPrevented())return;}if(key==='Escape'){_this.resetChanges();}if(key==='Enter'){if(target.nodeName!=='TEXTAREA'||ctrlKey||metaKey){_this.handleToggleEditing();}}});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"handleReceivingFocus",function(){if(_this.props.readOnly){return;}if(!_this.state.editing){_this.handleToggleEditing();}});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"handleToggleEditing",function(){if(_this.props.readOnly){return;}var editing=!_this.editing;_this.setState({editing:editing,resetValue:_this.props.value},function(){if(_this.state.editing){_this.props.onEditStart();}else{_this.props.onEditEnd();}});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"selectOnFocus",function(event){return event.target.select();});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"toggleBoolean",function(){_this.props.onEditStart();_this.props.onChange(!_this.props.value,_this.props.value);_this.props.onEditEnd();});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"renderBoolean",function(){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input",{type:"checkbox",checked:Boolean(_this.props.value),disabled:_this.props.readOnly,onChange:_this.toggleBoolean,ref:_this.createRefWithAutoFocus});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"renderMultiline",function(){if(!_this.editing){var lines=(_this.props.value||_this.props.placeholder).split('\n');var paragraphs=lines.map(function(line,index){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",{key:index},line);});var className=['multiline',_this.props.value?'':'placeholder'].join(' ').trim();return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:className,onClick:_this.handleToggleEditing},paragraphs);}return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea",{disabled:_this.props.readOnly,onBlur:_this.handleToggleEditing,onChange:_this.handleChange,onFocus:_this.selectOnFocus,onKeyDown:_this.handleKeys,onKeyPress:_this.props.onKeyPress,onKeyUp:_this.props.onKeyUp,placeholder:_this.props.placeholder,ref:_this.createRefWithAutoFocus,rows:_this.props.value.split('\n').length,value:_this.props.value});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"renderNumber",function(){if(!_this.editing){return _this.renderStatic();}return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input",{type:"number",disabled:_this.props.readOnly,max:_this.props.max,min:_this.props.min,onBlur:_this.handleToggleEditing,onChange:_this.handleChange,onFocus:_this.selectOnFocus,onKeyDown:_this.handleKeys,onKeyPress:_this.props.onKeyPress,onKeyUp:_this.props.onKeyUp,placeholder:_this.props.placeholder,ref:_this.createRefWithAutoFocus,step:_this.props.step,value:_this.props.value});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"renderSlider",function(){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input",{type:"range",disabled:_this.props.readOnly,max:_this.props.max,min:_this.props.min,onBlur:_this.handleToggleEditing,onChange:_this.handleChange,onKeyDown:_this.props.onKeyDown,onKeyPress:_this.props.onKeyPress,onKeyUp:_this.props.onKeyUp,ref:_this.createRefWithAutoFocus,step:_this.props.step,value:_this.props.value});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"renderText",function(){if(!_this.editing){return _this.renderStatic();}return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input",{type:"text",disabled:_this.props.readOnly,onBlur:_this.handleToggleEditing,onChange:_this.handleChange,onFocus:_this.selectOnFocus,onKeyDown:_this.handleKeys,onKeyPress:_this.props.onKeyPress,onKeyUp:_this.props.onKeyUp,placeholder:_this.props.placeholder,ref:_this.createRefWithAutoFocus,value:_this.props.value});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"renderStatic",function(){var _this$props2=_this.props,placeholder=_this$props2.placeholder,readOnlyValue=_this$props2.readOnlyValue,value=_this$props2.value;var showPlaceholder=placeholder&&!value;var displayValue=readOnlyValue!==undefined?readOnlyValue:value;var className=showPlaceholder?'placeholder':'';return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span",{className:className,onClick:_this.handleToggleEditing},showPlaceholder?placeholder:displayValue);});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"renderEditor",function(){switch(_this.getEditorType()){case'boolean':return _this.renderBoolean();case'slider':return _this.renderSlider();case'multiline':return _this.renderMultiline();case'number':return _this.renderNumber();default:return _this.renderText();}});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this),"render",function(){var _this$props3=_this.props,className=_this$props3.className,readOnly=_this$props3.readOnly;var classes=['editable',_this.editing?'editing':'',className||'',readOnly?'readonly':''].filter(Boolean);var props={};if(!readOnly&&!_this.editing){props={onFocus:_this.handleReceivingFocus,tabIndex:'0'};}return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({className:classes.join(' ')},props),_this.renderEditor());});return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Editable,[{key:"editing",get:function get(){return this.props.forceEditMode||this.state.editing;}}]);return Editable;}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(Editable,"displayName",'Editable');_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(Editable,"defaultProps",{className:'',forceEditMode:false,max:undefined,min:undefined,onChange:_utilities_noop__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],onEditEnd:_utilities_noop__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],onEditStart:_utilities_noop__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],onKeyDown:_utilities_noop__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],onKeyPress:_utilities_noop__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],onKeyUp:_utilities_noop__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],placeholder:'',readOnly:false,readOnlyValue:undefined,step:1,type:undefined,value:''});

/***/ }),

/***/ "RtsE":
/*!******************************************************************!*\
  !*** ./source/models/generic/IEditable/IEditable.js + 3 modules ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/deep-equal/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/typeof.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-state-tree/dist/mobx-state-tree.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx/lib/mobx.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("/hBA");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/deep-equal/index.js
var deep_equal = __webpack_require__("f66B");
var deep_equal_default = /*#__PURE__*/__webpack_require__.n(deep_equal);

// EXTERNAL MODULE: ./node_modules/mobx/lib/mobx.js
var mobx = __webpack_require__("Ta9u");

// EXTERNAL MODULE: ./node_modules/mobx-state-tree/dist/mobx-state-tree.js
var mobx_state_tree = __webpack_require__("uqjs");

// CONCATENATED MODULE: ./source/utilities/splitObjectPath.js
var PATH_SPLITTER=/([a-z0-9-_]+)(?![["'\].])*/ig;/* harmony default export */ var splitObjectPath = (function(path){if(typeof path!=='string')return null;return path.match(PATH_SPLITTER);});
// CONCATENATED MODULE: ./source/utilities/getPathValue.js
/* harmony default export */ var getPathValue = (function(object,path){if(typeof path!=='string')return undefined;var split=splitObjectPath(path);if(!Array.isArray(split))return undefined;var property=split.pop();var target=split.reduce(function(o,key){return o[key]||{};},object);if(target)return target[property];return undefined;});
// CONCATENATED MODULE: ./source/utilities/setPathValue.js
/* harmony default export */ var setPathValue = (function(object,path,value){var split=splitObjectPath(path);var property=split.pop();var target=split.reduce(function(o,key){return o[key]||{};},object);if(target&&target.isIEditable){target.set(property,value);}else{target[property]=value;}});
// CONCATENATED MODULE: ./source/models/generic/IEditable/IEditable.js
var IEditable=mobx_state_tree["types"].model('IEditable',{// Any
}).volatile(function(){return{isIEditable:true,savedVersion:{}};}).views(function(self){return{get isDirty(){return!deep_equal_default()(self.toJSON(),self.savedVersion);}};}).actions(function(self){return{/* eslint-disable no-param-reassign */afterCreate:function afterCreate(){self.savedVersion=self.toJSON();},isPathDirty:function isPathDirty(path){var current=getPathValue(self.toJSON(),path);var initial=getPathValue(self.savedVersion,path);return!deep_equal_default()(current,initial);},markAsClean:function markAsClean(){self.savedVersion=self.toJSON();Object.keys(self.savedVersion).forEach(function(key){var value=self[key];if(!value){return;}if(value.isIEditable){value.markAsClean();}else if(Object(mobx["isObservableArray"])(value)){value.forEach(function(child){return child&&child.isIEditable&&child.markAsClean();});}});},reset:function reset(){Object.assign(self,self.savedVersion);},set:function set(){var key=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var value=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined;if(typeof key==='string'&&value!==undefined){// allows: model.set('foo.bar', 'bar')
if(self[key]!==undefined){self[key]=value;}else{setPathValue(self,key,value);}}else if(typeof_default()(key)==='object'&&value===undefined){// allows: model.set({ foo: 'Foo', bar: 'Bar' })
Object.assign(self,key);}}};});/* harmony default export */ var IEditable_IEditable = __webpack_exports__["a"] = (IEditable);

/***/ }),

/***/ "S5k1":
/*!**************************************************!*\
  !*** ./source/components/Editable/Editable.scss ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
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
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Ut7+":
/*!****************************************************!*\
  !*** ./source/components/Descriptor/Descriptor.js ***!
  \****************************************************/
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
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utilities/noop */ "x6zz");
/* harmony import */ var _Descriptor_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Descriptor.scss */ "k8Dq");
/* harmony import */ var _Descriptor_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Descriptor_scss__WEBPACK_IMPORTED_MODULE_11__);
var _class,_class2,_temp;var Descriptor=Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class=(_temp=_class2=/*#__PURE__*/function(_Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Descriptor,_Component);function Descriptor(){var _getPrototypeOf2;var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Descriptor);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,(_getPrototypeOf2=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Descriptor)).call.apply(_getPrototypeOf2,[this].concat(args)));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeName",function(name){return _this.props.model.set({name:name});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeValue",function(value){return _this.props.model.set({value:value});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleCommitName",function(){return _this.props.model.name===''&&_this.props.onDelete(_this.props.model);});return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Descriptor,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"descriptor"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"name",onChange:this.handleChangeName,onEditEnd:this.handleCommitName,value:this.props.model.name}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"value",type:"text",onChange:this.handleChangeValue,value:this.props.model.value}));}}]);return Descriptor;}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"defaultProps",{model:{},onDelete:_utilities_noop__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"sortOptions",[{display:'icon-sort-name-asc',getter:function getter(model){return model.name;}},{display:'icon-sort-value-asc',getter:function getter(model){return model.value;}}]),_temp))||_class;/* harmony default export */ __webpack_exports__["a"] = (Descriptor);

/***/ }),

/***/ "VHFM":
/*!**********************************************!*\
  !*** ./source/components/Rating/Rating.scss ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "YFLu":
/*!********************************************************************!*\
  !*** ./source/models/generic/Collection/Collection.js + 1 modules ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/objectSpread.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-state-tree/dist/mobx-state-tree.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx/lib/mobx.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("cNEE");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("ubaz");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/mobx/lib/mobx.js
var mobx = __webpack_require__("Ta9u");

// EXTERNAL MODULE: ./node_modules/mobx-state-tree/dist/mobx-state-tree.js
var mobx_state_tree = __webpack_require__("uqjs");

// CONCATENATED MODULE: ./source/utilities/compareBy.js
/* harmony default export */ var compareBy = (function(prop){var reversed=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;return function(objectA,objectB){var a=String(objectA instanceof Map?objectA.get(prop):objectA[prop]);var b=String(objectB instanceof Map?objectB.get(prop):objectB[prop]);if(reversed)return b.localeCompare(a);return a.localeCompare(b);};});
// CONCATENATED MODULE: ./source/models/generic/Collection/Collection.js
/* harmony default export */ var Collection = __webpack_exports__["a"] = (function(TYPE){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var TypedArrayWrapper=mobx_state_tree["types"].model({values:mobx_state_tree["types"].array(TYPE)}).views(function(self){return{get asArray(){return self.values.slice();},get first(){return self.length?self.at(0):undefined;},get last(){return self.length?self.at(self.length-1):undefined;},get length(){return self.values.length;}};}).actions(function(self){return{/* eslint-disable no-param-reassign */at:function at(n){return self.values[n];},clear:function clear(){return self.values.clear();},delete:function _delete(object){self.values.replace(self.values.filter(function(item){return item!==object;}));},deleteAt:function deleteAt(index){self.values.replace(self.values.filter(function(_,n){return n!==index;}));},every:function every(fn){return self.values.every(fn);},filter:function filter(fn){return self.values.filter(fn);},find:function find(fn){return self.values.find(fn);},findBy:function findBy(key,value){return self.find(function(item){return item[key]===value;});},findById:function findById(id){if(!TYPE.identifierAttribute)return null;return self.find(function(item){return item[TYPE.identifierAttribute]===id;})||null;},forEach:function forEach(fn){return self.values.forEach(fn);},includes:function includes(searchElement,fromIndex){return self.values.includes(searchElement,fromIndex);},indexOf:function indexOf(element){return self.values.indexOf(element);},insert:function insert(object,index){return self.splice(index,0,object);},map:function map(fn){return self.values.map(fn);},pop:function pop(){return self.values.pop();},push:function push(){for(var _len=arguments.length,values=new Array(_len),_key=0;_key<_len;_key++){values[_key]=arguments[_key];}return self.values.replace([].concat(self.values,values));},reduce:function reduce(fn,initial){return self.values.reduce(fn,initial);},replace:function replace(values){return self.values.replace(values);},shift:function shift(){return self.values.shift();},slice:function slice(start,end){return self.values.slice(start,end);},some:function some(fn){return self.values.some(fn);},sortBy:function sortBy(property){var direction=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'asc';if(!['asc','desc'].includes(direction)){throw new TypeError("direction must be \"asc\" or \"desc\", got: \"".concat(direction,"\""));}var values=self.values.slice().sort(compareBy(property));self.values.replace(direction==='desc'?values.reverse():values);return self;},splice:function splice(index,deleteCount,value){return self.values.splice(index,deleteCount,value);},toObject:function toObject(keyProp,valueProp){return self.values.reduce(function(object,entry){var key=entry[keyProp];var value=valueProp!==undefined?entry[valueProp]:entry;return objectSpread_default()({},object,defineProperty_default()({},key,typeof value==='function'?value():value));},{});},unshift:function unshift(){for(var _len2=arguments.length,values=new Array(_len2),_key2=0;_key2<_len2;_key2++){values[_key2]=arguments[_key2];}return self.values.replace([].concat(values,self.values));}/* eslint-enable no-param-reassign */};}).postProcessSnapshot(function(_ref){var values=_ref.values;return values;});return mobx_state_tree["types"].custom(objectSpread_default()({},options,{fromSnapshot:function fromSnapshot(){var snapshot=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];return TypedArrayWrapper.create({values:snapshot});},getValidationMessage:function getValidationMessage(snapshot){if(!snapshot)return'';if(Object(mobx["isObservableArray"])(snapshot)||Array.isArray(snapshot)){if(snapshot.every(function(f){return TYPE.is(f);}))return'';}return'Collection types must be assigned an array of values or null';},isTargetType:function isTargetType(target){return TypedArrayWrapper.is(target);},name:options.name||'Collection'}));});

/***/ }),

/***/ "ZEI3":
/*!********************************************!*\
  !*** ./source/models/Resource/Resource.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_generic_ICategorizable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/generic/ICategorizable */ "vQEy");
/* harmony import */ var _models_generic_IEditable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/generic/IEditable */ "RtsE");
/* harmony import */ var _models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/generic/IIdentity */ "kcWH");
/* harmony default export */ __webpack_exports__["a"] = (mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].compose(_models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],Object(_models_generic_ICategorizable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(),_models_generic_IEditable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model({current:0,maximum:10,name:'New Resource...'})).named('Resource'));

/***/ }),

/***/ "Zsyy":
/*!******************************************************!*\
  !*** ./source/components/Conditions/Conditions.scss ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ZwSi":
/*!**************************************!*\
  !*** ./source/models/Trait/Trait.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Effect */ "HyL6");
/* harmony import */ var _models_generic_Collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/generic/Collection */ "YFLu");
/* harmony import */ var _models_generic_ICategorizable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/generic/ICategorizable */ "vQEy");
/* harmony import */ var _models_generic_IEditable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/generic/IEditable */ "RtsE");
/* harmony import */ var _models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/generic/IIdentity */ "kcWH");
/* harmony default export */ __webpack_exports__["a"] = (mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].compose(_models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],Object(_models_generic_ICategorizable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(function(self){return self.value;}),_models_generic_IEditable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('Trait',{effects:Object(_models_generic_Collection__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_models_Effect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]),name:'New Trait...',value:0})).named('Trait'));

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

/***/ "b/z0":
/*!******************************************!*\
  !*** ./source/components/Skill/Skill.js ***!
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
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utilities/noop */ "x6zz");
/* harmony import */ var _Skill_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Skill.scss */ "Upa8");
/* harmony import */ var _Skill_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Skill_scss__WEBPACK_IMPORTED_MODULE_11__);
var _class,_class2,_temp;var Skill=Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class=(_temp=_class2=/*#__PURE__*/function(_Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Skill,_Component);function Skill(){var _getPrototypeOf2;var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Skill);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,(_getPrototypeOf2=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Skill)).call.apply(_getPrototypeOf2,[this].concat(args)));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"onChangeName",function(name){return _this.props.model.set({name:name});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"onChangeMastery",function(mastery){return _this.props.model.set({mastery:mastery});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleCommitName",function(){return _this.props.model.name===''&&_this.props.onDelete(_this.props.model);});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"onChangeTheory",function(theory){return _this.props.model.set({theory:theory});});return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Skill,[{key:"render",value:function render(){var model=this.props.model;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"skill"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"name",onChange:this.onChangeName,onEditEnd:this.handleCommitName,value:model.name}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"theory ".concat(!model.theory&&'is-zero'||''),max:999,min:-99,onChange:this.onChangeTheory,value:model.theory}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"mastery",max:999,min:-99,onChange:this.onChangeMastery,value:model.mastery}));}}]);return Skill;}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"defaultProps",{model:{},onDelete:_utilities_noop__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"sortOptions",[{display:'icon-sort-name-asc',getter:function getter(model){return model.name;}},{display:'icon-sort-value-desc',getter:function getter(model){return[-model.theory,-model.mastery,model.name];}},{display:'icon-sort-size-desc',getter:function getter(model){return[-model.mastery,-model.theory,model.name];}}]),_temp))||_class;/* harmony default export */ __webpack_exports__["a"] = (Skill);

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

/***/ "i9wh":
/*!****************************************************!*\
  !*** ./source/components/Attribute/Attribute.scss ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
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
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "kIQV":
/*!***********************************!*\
  !*** ./source/utilities/bound.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(value,_ref){var min=_ref.min,max=_ref.max;if(min!==undefined&&value<min)return min;if(max!==undefined&&value>max)return max;return value;});

/***/ }),

/***/ "kcWH":
/*!******************************************************************!*\
  !*** ./source/models/generic/IIdentity/IIdentity.js + 1 modules ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-state-tree/dist/mobx-state-tree.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/mobx-state-tree/dist/mobx-state-tree.js
var mobx_state_tree = __webpack_require__("uqjs");

// CONCATENATED MODULE: ./source/utilities/hash.js
function hash(){var value=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var radix=arguments.length>1&&arguments[1]!==undefined?arguments[1]:16;var string=String(value);var h=0;string.split('').forEach(function(char){/* eslint-disable no-bitwise */h=(h<<5)-h+char.charCodeAt(0);h&=h;// Convert to 32-bit integer
/* eslint-enable no-bitwise */});return Math.abs(h).toString(radix);}var randomHash=function randomHash(){return hash(Math.random().toString());};
// CONCATENATED MODULE: ./source/models/generic/IIdentity/IIdentity.js
/* harmony default export */ var IIdentity = __webpack_exports__["a"] = (mobx_state_tree["types"].model({// Nothing
}).volatile(function(){return{hash:''};}).actions(function(self){return{afterCreate:function afterCreate(){self.hash=randomHash();}};}));

/***/ }),

/***/ "kvEc":
/*!**********************************************!*\
  !*** ./source/components/Layout/Layout.scss ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "mD9I":
/*!**************************************************!*\
  !*** ./source/components/Attribute/Attribute.js ***!
  \**************************************************/
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
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Editable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Editable */ "O+tL");
/* harmony import */ var _components_Rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Rating */ "K0ru");
/* harmony import */ var _utilities_bound__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utilities/bound */ "kIQV");
/* harmony import */ var _utilities_math__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utilities/math */ "maIC");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/utilities/noop */ "x6zz");
/* harmony import */ var _Attribute_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Attribute.scss */ "i9wh");
/* harmony import */ var _Attribute_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Attribute_scss__WEBPACK_IMPORTED_MODULE_15__);
var _class,_class2,_temp;var Attribute=Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class=(_temp=_class2=/*#__PURE__*/function(_Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Attribute,_Component);function Attribute(){var _getPrototypeOf2;var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Attribute);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,(_getPrototypeOf2=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Attribute)).call.apply(_getPrototypeOf2,[this].concat(args)));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"CACHE",{});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleSnapshot",function(snapshot){var effects=_this.props.model.effects().map(function(e){return e.toJSON();});if(JSON.stringify(effects)!==JSON.stringify(_this.CACHE.effects)||JSON.stringify(snapshot.conditions)!==_this.CACHE.conditions||_this.CACHE.value!==_this.props.model.value()){_this.CACHE.conditions=JSON.stringify(snapshot.conditions);_this.CACHE.effects=effects;_this.CACHE.value=_this.props.model.value();_this.forceUpdate();}});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeName",function(name){var id=_this.props.model.id;_this.props.model.set({name:name});_this.props.model.character.effects().filter(function(effect){return effect.targetId===id;}).forEach(function(effect){effect.set({targetId:''});effect.set({targetId:_this.props.model.id});});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleCommitName",function(){return _this.props.model.name===''&&_this.props.onDelete(_this.props.model);});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeValue",function(raw){var value=String(raw).replace(/[^a-z0-9+*()\-/, ]/gi,'');if(!Number.isNaN(Number(raw))){value=Object(_utilities_bound__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Number(raw)||'',{max:999,min:-99});}_this.props.model.set({raw:value});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleCommitValue",function(){if(String(_this.props.model.raw)==='')_this.props.model.set({raw:0});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleValueKeyDown",function(_ref){var key=_ref.key;var model=_this.props.model;if(model.isComputed)return;switch(key){case'ArrowUp':model.set({raw:model.value()+1});break;case'ArrowDown':model.set({raw:model.value()-1});break;default:}});return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Attribute,[{key:"componentDidMount",value:function componentDidMount(){this.onSnapshotDisposer=Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["onSnapshot"])(this.props.model.character,this.handleSnapshot);}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.onSnapshotDisposer();}},{key:"render",value:function render(){var _this$props=this.props,model=_this$props.model,rating=_this$props.rating;var modifiedValue=model.modifiedValue();var value=model.value();var className=['attribute',"as-".concat(rating?'rating':'numeric'),"".concat(model.isComputed?'is':'not',"-computed")].join(' ');var modifier=model.modifier();var modifierClassName=['modifier',modifier>0&&'positive',modifier<0&&'negative',modifier===0&&'zero'].filter(Boolean).join(' ');return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:className},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],{className:"name",onChange:this.handleChangeName,onEditEnd:this.handleCommitName,value:model.name}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],{className:"value rating",onChange:this.handleChangeValue,onEditEnd:this.handleCommitValue,onKeyDown:this.handleValueKeyDown,readOnlyValue:react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Rating__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],{allowExcess:true,current:modifiedValue,maximum:value}),type:"text",value:model.raw}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],{className:"value numeric",onChange:this.handleChangeValue,onEditEnd:this.handleCommitValue,onKeyDown:this.handleValueKeyDown,readOnlyValue:value,type:"text",value:model.raw}),model.effects().length!==0&&react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:modifierClassName,title:model.modifierText()},modifiedValue));}}]);return Attribute;}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"defaultProps",{model:{},onDelete:_utilities_noop__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"],rating:false}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"sortOptions",[{display:'icon-sort-name-asc',getter:function getter(model){return model.name;}},{display:'icon-sort-value-asc',getter:function getter(model){return model.modifiedValue();}}]),_temp))||_class;/* harmony default export */ __webpack_exports__["a"] = (Attribute);

/***/ }),

/***/ "maIC":
/*!***************************************!*\
  !*** ./source/utilities/math/math.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mathjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mathjs/core */ "yZWr");
/* harmony import */ var mathjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mathjs_core__WEBPACK_IMPORTED_MODULE_0__);
var math=mathjs_core__WEBPACK_IMPORTED_MODULE_0___default.a.create();math.import(__webpack_require__(/*! mathjs/lib/expression/function/eval */ "Wbaz"));math.import(__webpack_require__(/*! mathjs/lib/expression/function/parse */ "lFTT"));math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/add */ "NEdZ"));math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/ceil */ "EjzI"));math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/divide */ "rVKH"));math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/floor */ "QllX"));math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/mod */ "gV/b"));math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/multiply */ "NU+P"));math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/pow */ "CaZ0"));math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/round */ "N5iU"));math.import(__webpack_require__(/*! mathjs/lib/function/arithmetic/subtract */ "O1N0"));math.import(__webpack_require__(/*! mathjs/lib/function/logical */ "BSwV"));math.import(__webpack_require__(/*! mathjs/lib/function/statistics/max */ "itDh"));math.import(__webpack_require__(/*! mathjs/lib/function/statistics/mean */ "FC7u"));math.import(__webpack_require__(/*! mathjs/lib/function/statistics/min */ "I5O3"));math.import(__webpack_require__(/*! mathjs/lib/function/statistics/sum */ "Z+cb"));math.import(__webpack_require__(/*! mathjs/lib/type/matrix/function/matrix */ "R4H5"));math.import(__webpack_require__(/*! mathjs/lib/type/matrix/Matrix */ "ohYX"));math.import(__webpack_require__(/*! mathjs/lib/type/matrix/DenseMatrix */ "ZS3Q"));/* harmony default export */ __webpack_exports__["a"] = (math);

/***/ }),

/***/ "mkTB":
/*!**********************************************************!*\
  !*** ./source/models/Attribute/Attribute.js + 2 modules ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/objectSpread.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/generic/ICategorizable/ICategorizable.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/generic/IEditable/IEditable.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/generic/IIdentity/IIdentity.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/utilities/findParent.js because of ./source/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/utilities/math/math.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-state-tree/dist/mobx-state-tree.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("ubaz");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("y9tM");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("cNEE");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/mobx-state-tree/dist/mobx-state-tree.js
var mobx_state_tree = __webpack_require__("uqjs");

// EXTERNAL MODULE: ./source/models/generic/ICategorizable/ICategorizable.js
var ICategorizable = __webpack_require__("vQEy");

// EXTERNAL MODULE: ./source/models/generic/IEditable/IEditable.js + 3 modules
var IEditable = __webpack_require__("RtsE");

// EXTERNAL MODULE: ./source/models/generic/IIdentity/IIdentity.js + 1 modules
var IIdentity = __webpack_require__("kcWH");

// EXTERNAL MODULE: ./source/utilities/findParent.js
var findParent = __webpack_require__("HcU2");

// EXTERNAL MODULE: ./source/utilities/math/math.js
var math = __webpack_require__("maIC");

// CONCATENATED MODULE: ./source/utilities/math/toSymbols.js
/* harmony default export */ var toSymbols = (function(expression){var fns=[];var symbols=[];math["a" /* default */].parse(expression).traverse(function(node){if(node.fn){fns.push(node.fn.name);}if(node.type==='SymbolNode'&&!symbols.includes(node.name)&&!fns.includes(node.name)){symbols.push(node.name);}});return symbols;});
// CONCATENATED MODULE: ./source/utilities/math/calculate.js
/* harmony default export */ var calculate = (function(){var expression=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var data=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{defaultSymbolValue:0};var safeData=objectSpread_default()({},data);toSymbols(expression).forEach(function(symbol){if(typeof safeData[symbol]!=='number'||Number.isNaN(safeData[symbol])){safeData[symbol]=options.defaultSymbolValue;}});return math["a" /* default */].eval(expression,safeData);});
// CONCATENATED MODULE: ./source/models/Attribute/Attribute.js
/* harmony default export */ var Attribute = __webpack_exports__["a"] = (mobx_state_tree["types"].compose(IIdentity["a" /* default */],Object(ICategorizable["a" /* default */])(function(self){return self.modifiedValue();}),IEditable["a" /* default */],mobx_state_tree["types"].model({name:'New Attribute...',raw:mobx_state_tree["types"].optional(mobx_state_tree["types"].union(mobx_state_tree["types"].number,mobx_state_tree["types"].string),0)}).views(function(self){return{get character(){return Object(findParent["a" /* default */])(self,function(p){return p.isCharacter;});},get id(){return self.name.split(':').pop().trim().toLowerCase().replace(/[^a-z0-9]/ig,'');},get isComputed(){return typeof self.raw==='string';}};}).actions(function(self){var computing=false;return{effects:function effects(){if(!self.character)return[];return self.character.activeEffects().filter(function(effect){return effect.targetId===self.id;});},modifiedValue:function modifiedValue(){return(self.value()||0)+self.modifier();},modifier:function modifier(){return math["a" /* default */].sum(self.effects().map(function(effect){return effect.modifier;}));},modifierText:function modifierText(){return self.effects().map(function(effect){return"".concat(effect.sourceName(),": ").concat(effect.modifier);}).join(', ');},value:function value(){if(!self.isComputed)return self.raw;if(self.character===null)return 0;if(computing)return 0;computing=true;var computed=0;try{var values=toSymbols(self.raw).reduce(function(all,symbol){var attribute=self.character.attributes.findBy('id',symbol);return Object.assign(all,defineProperty_default()({},symbol,attribute?attribute.modifiedValue():0));},{});computed=calculate(self.raw,values);}catch(error){// eslint-disable-next-line no-undef
if(false){}computed=0;}computing=false;return computed;}};}).preProcessSnapshot(function(_ref){var value=_ref.value,snapshot=objectWithoutProperties_default()(_ref,["value"]);return objectSpread_default()({},snapshot,{raw:value});}).postProcessSnapshot(function(_ref2){var raw=_ref2.raw,snapshot=objectWithoutProperties_default()(_ref2,["raw"]);return objectSpread_default()({},snapshot,{value:raw});})).named('Attribute'));

/***/ }),

/***/ "p0Pd":
/*!****************************************!*\
  !*** ./source/components/Item/Item.js ***!
  \****************************************/
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
/* harmony import */ var _Item_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Item.scss */ "H/3x");
/* harmony import */ var _Item_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Item_scss__WEBPACK_IMPORTED_MODULE_15__);
var _class,_class2,_temp;var EffectList=Object(_components_List__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(_models_Effect__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"],_components_Effect__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],{className:'effect-list'});var Item=Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class=(_temp=_class2=/*#__PURE__*/function(_Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Item,_Component);function Item(){var _getPrototypeOf2;var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Item);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,(_getPrototypeOf2=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Item)).call.apply(_getPrototypeOf2,[this].concat(args)));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeDescription",function(description){return _this.props.model.set({description:description});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeName",function(name){return _this.props.model.set({name:name});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleCommitName",function(){return _this.props.model.name===''&&_this.props.onDelete(_this.props.model);});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleToggleEquipped",function(){return _this.props.model.set({equipped:!_this.props.model.equipped});});return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Item,[{key:"render",value:function render(){var _this2=this;var _this$props$model=this.props.model,description=_this$props$model.description,hash=_this$props$model.hash,name=_this$props$model.name,effects=_this$props$model.effects,equipped=_this$props$model.equipped;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"item ".concat(equipped?'':'un',"equipped")},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"equipped",onChange:this.handleToggleEquipped,value:equipped}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"name",onChange:this.handleChangeName,onEditEnd:this.handleCommitName,value:name}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Expandable__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],{onToggle:function onToggle(expanded){return _this2.props.onToggleExpanded(hash,expanded);}},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"description",type:"multiline",onChange:this.handleChangeDescription,placeholder:"Description...",value:description}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(EffectList,{collection:effects,title:"Effects"})));}}]);return Item;}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"defaultProps",{model:{},onDelete:_utilities_noop__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"],onToggleExpanded:_utilities_noop__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"]}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"sortOptions",[{display:'icon-sort-name-asc',getter:function getter(model){return model.name;}},{display:'icon-backpack',getter:function getter(model){return[!model.equipped,model.name];}}]),_temp))||_class;/* harmony default export */ __webpack_exports__["a"] = (Item);

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

/***/ }),

/***/ "tqhn":
/*!******************************************************!*\
  !*** ./source/components/Sheet/Sheet.js + 4 modules ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/assertThisInitialized.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/defineProperty.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/getPrototypeOf.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/docz-core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/Attribute/Attribute.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/Descriptor/Descriptor.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/Editable/Editable.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/Effect/Effect.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/Expandable/Expandable.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/Item/Item.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/List/List.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/Resource/Resource.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/Skill/Skill.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/Spell/Spell.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/components/Trait/Trait.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Attribute/Attribute.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Descriptor/Descriptor.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Effect/Effect.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Item/Item.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Resource/Resource.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Skill/Skill.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Spell/Spell.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/Trait/Trait.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/utilities/debounce.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/utilities/noop.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-state-tree/dist/mobx-state-tree.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/docz-core/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("cFUw");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

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

// EXTERNAL MODULE: ./source/components/Attribute/Attribute.js
var Attribute = __webpack_require__("mD9I");

// EXTERNAL MODULE: ./source/components/Descriptor/Descriptor.js
var Descriptor = __webpack_require__("Ut7+");

// EXTERNAL MODULE: ./source/components/Effect/Effect.js
var Effect = __webpack_require__("a4BR");

// EXTERNAL MODULE: ./source/components/Item/Item.js
var Item = __webpack_require__("p0Pd");

// EXTERNAL MODULE: ./source/components/Resource/Resource.js
var Resource = __webpack_require__("wryK");

// EXTERNAL MODULE: ./source/components/Skill/Skill.js
var Skill = __webpack_require__("b/z0");

// EXTERNAL MODULE: ./source/components/Spell/Spell.js + 1 modules
var Spell = __webpack_require__("8qIS");

// EXTERNAL MODULE: ./source/components/Trait/Trait.js
var Trait = __webpack_require__("M/4f");

// CONCATENATED MODULE: ./source/components/index.js
/* harmony default export */ var components = ({Attribute:Attribute["a" /* default */],Descriptor:Descriptor["a" /* default */],Effect:Effect["a" /* default */],Item:Item["a" /* default */],Resource:Resource["a" /* default */],Skill:Skill["a" /* default */],Spell:Spell["a" /* default */],Trait:Trait["a" /* default */]});
// EXTERNAL MODULE: ./source/components/Editable/Editable.js
var Editable = __webpack_require__("O+tL");

// EXTERNAL MODULE: ./source/components/Expandable/Expandable.js
var Expandable = __webpack_require__("I7n6");

// EXTERNAL MODULE: ./source/components/Conditions/Conditions.scss
var Conditions_Conditions = __webpack_require__("Zsyy");

// CONCATENATED MODULE: ./source/components/Conditions/Conditions.js
var _class,_temp;/* harmony default export */ var components_Conditions_Conditions = (Object(mobx_react["observer"])((_temp=_class=/*#__PURE__*/function(_Component){inherits_default()(Conditions,_Component);function Conditions(){var _getPrototypeOf2;var _this;classCallCheck_default()(this,Conditions);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn_default()(this,(_getPrototypeOf2=getPrototypeOf_default()(Conditions)).call.apply(_getPrototypeOf2,[this].concat(args)));defineProperty_default()(assertThisInitialized_default()(_this),"CACHE",{});defineProperty_default()(assertThisInitialized_default()(_this),"handleSnapshot",function(){var availableConditions=_this.props.model.availableConditions();var conditions=_this.props.model.conditions.asArray;if(JSON.stringify(availableConditions)!==JSON.stringify(_this.CACHE.availableConditions)||JSON.stringify(conditions)!==JSON.stringify(_this.CACHE.conditions)){_this.CACHE.availableConditions=availableConditions;_this.CACHE.conditions=conditions;_this.forceUpdate();}});defineProperty_default()(assertThisInitialized_default()(_this),"handleCheckbox",function(condition,value){var conditions=_this.props.model.conditions;if(value&&!conditions.includes(condition)){conditions.push(condition);}else if(typeof conditions.delete==='function'){conditions.delete(condition);}else{conditions.splice(conditions.indexOf(condition),1);}_this.forceUpdate();});defineProperty_default()(assertThisInitialized_default()(_this),"renderCondition",function(condition){var conditions=_this.props.model.conditions;var isCurrent=conditions.includes(condition);return react_default.a.createElement("div",{key:condition,className:"condition ".concat(isCurrent?'current':'available')},react_default.a.createElement(Editable["a" /* default */],{className:"current",onChange:function onChange(value){return _this.handleCheckbox(condition,value);},value:isCurrent}),react_default.a.createElement("div",{className:"name"},condition));});return _this;}createClass_default()(Conditions,[{key:"componentDidMount",value:function componentDidMount(){this.onSnapshotDisposer=Object(mobx_state_tree["onSnapshot"])(this.props.model,this.handleSnapshot);}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.onSnapshotDisposer();}},{key:"render",value:function render(){return react_default.a.createElement("div",{className:"conditions"},react_default.a.createElement(Expandable["a" /* default */],null,this.props.model.availableConditions().map(this.renderCondition)));}}]);return Conditions;}(react["Component"]),defineProperty_default()(_class,"defaultProps",{model:{}}),_temp)));
// EXTERNAL MODULE: ./source/utilities/noop.js
var noop = __webpack_require__("x6zz");

// EXTERNAL MODULE: ./source/components/Layout/Layout.scss
var Layout_Layout = __webpack_require__("kvEc");

// CONCATENATED MODULE: ./source/components/Layout/Layout.js
var Layout_Layout_Layout=/*#__PURE__*/function(_Component){inherits_default()(Layout,_Component);function Layout(){var _getPrototypeOf2;var _this;classCallCheck_default()(this,Layout);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=possibleConstructorReturn_default()(this,(_getPrototypeOf2=getPrototypeOf_default()(Layout)).call.apply(_getPrototypeOf2,[this].concat(args)));defineProperty_default()(assertThisInitialized_default()(_this),"titleBar",react_default.a.createRef());defineProperty_default()(assertThisInitialized_default()(_this),"onSnapshotDisposer",noop["a" /* default */]);defineProperty_default()(assertThisInitialized_default()(_this),"snapshot",null);defineProperty_default()(assertThisInitialized_default()(_this),"handleChangeTitle",function(title){return _this.props.model.set({title:title});});return _this;}createClass_default()(Layout,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;this.onSnapshotDisposer=Object(mobx_state_tree["onSnapshot"])(this.props.model,function(snapshot){var snapshotJSON=JSON.stringify(snapshot);if(_this2.snapshot!==snapshotJSON){_this2.snapshot=snapshotJSON;_this2.forceUpdate();}});this.forceUpdate();// Immediate redraw to place buttonParent
}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.onSnapshotDisposer();}},{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,parentColumns=_this$props.parentColumns;var _this$props$model=this.props.model,colSpan=_this$props$model.colSpan,title=_this$props$model.title;return react_default.a.createElement("div",{className:"layout",style:{width:"calc(100%/".concat(parentColumns,"*").concat(colSpan,")")}},title===undefined?children:react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",{className:"title-bar",ref:this.titleBar},react_default.a.createElement(Editable["a" /* default */],{className:"title",onChange:this.handleChangeTitle,placeholder:"Section Title",value:title})),react_default.a.createElement(Expandable["a" /* default */],{expandByDefault:true,omitItemWrapper:true,toggleButtonParent:this.titleBar.current},children)));}}]);return Layout;}(react["Component"]);
// EXTERNAL MODULE: ./source/components/List/List.js
var List_List = __webpack_require__("t524");

// EXTERNAL MODULE: ./source/models/Attribute/Attribute.js + 2 modules
var Attribute_Attribute = __webpack_require__("mkTB");

// EXTERNAL MODULE: ./source/models/Descriptor/Descriptor.js
var Descriptor_Descriptor = __webpack_require__("AD/C");

// EXTERNAL MODULE: ./source/models/Effect/Effect.js
var Effect_Effect = __webpack_require__("HyL6");

// EXTERNAL MODULE: ./source/models/Item/Item.js
var Item_Item = __webpack_require__("Afd3");

// EXTERNAL MODULE: ./source/models/Resource/Resource.js
var Resource_Resource = __webpack_require__("ZEI3");

// EXTERNAL MODULE: ./source/models/Skill/Skill.js
var Skill_Skill = __webpack_require__("vovD");

// EXTERNAL MODULE: ./source/models/Spell/Spell.js
var Spell_Spell = __webpack_require__("JCrA");

// EXTERNAL MODULE: ./source/models/Trait/Trait.js
var Trait_Trait = __webpack_require__("ZwSi");

// CONCATENATED MODULE: ./source/models/index.js
/* harmony default export */ var models = ({Attribute:Attribute_Attribute["a" /* default */],Descriptor:Descriptor_Descriptor["a" /* default */],Effect:Effect_Effect["a" /* default */],Item:Item_Item["a" /* default */],Resource:Resource_Resource["a" /* default */],Skill:Skill_Skill["a" /* default */],Spell:Spell_Spell["a" /* default */],Trait:Trait_Trait["a" /* default */]});
// EXTERNAL MODULE: ./source/utilities/debounce.js
var debounce = __webpack_require__("BSti");

// EXTERNAL MODULE: ./source/components/Sheet/Sheet.scss
var Sheet_Sheet = __webpack_require__("HYkr");

// CONCATENATED MODULE: ./source/components/Sheet/Sheet.js
var Sheet_class,_class2,Sheet_temp;var Sheet_Sheet_Sheet=Object(mobx_react["observer"])(Sheet_class=(Sheet_temp=_class2=/*#__PURE__*/function(_React$Component){inherits_default()(Sheet,_React$Component);function Sheet(props){var _this;classCallCheck_default()(this,Sheet);_this=possibleConstructorReturn_default()(this,getPrototypeOf_default()(Sheet).call(this,props));defineProperty_default()(assertThisInitialized_default()(_this),"state",{size:'large'});defineProperty_default()(assertThisInitialized_default()(_this),"handleWindowResize",Object(debounce["a" /* default */])(function(){var size='large';if(window.matchMedia('(min-width: 5in) and (max-width: 7.5in)').matches){size='medium';}else if(window.matchMedia('(max-width: 5in)').matches){size='small';}if(size!==_this.state.size)_this.setState({size:size});},250));defineProperty_default()(assertThisInitialized_default()(_this),"renderComponent",function(parent,model,key){if(model.type){var title=model.title;var typename=model.type.toLowerCase();var List=Object(List_List["a" /* default */])(models[model.type],components[model.type],{className:"".concat(typename,"-list")});var collection=_this.props.character["".concat(typename,"s")];return react_default.a.createElement(List,extends_default()({key:key,layout:model,title:title},{collection:collection,columns:model.columns}));}return react_default.a.createElement(Layout_Layout_Layout,{key:model.hash,model:model,parentColumns:parent.columns},model.children.map(function(child,i){return _this.renderComponent(model,child,i);}));});_this.onCharacterSnapshotDisposer=Object(mobx_state_tree["onSnapshot"])(_this.props.character,function(snapshot){_this.props.onChange(snapshot,_this.props.layout.toJSON(),assertThisInitialized_default()(_this));});_this.onLayoutSnapshotDisposer=Object(mobx_state_tree["onSnapshot"])(_this.props.layout,function(snapshot){_this.props.onChange(_this.props.character.toJSON(),snapshot,assertThisInitialized_default()(_this));});return _this;}createClass_default()(Sheet,[{key:"componentDidMount",value:function componentDidMount(){this.handleWindowResize();window.addEventListener('resize',this.handleWindowResize);this.props.onMount(this);}},{key:"componentWillUnmount",value:function componentWillUnmount(){window.removeEventListener('resize',this.handleWindowResize);this.onCharacterSnapshotDisposer();this.onLayoutSnapshotDisposer();}},{key:"render",value:function render(){var _this$props=this.props,character=_this$props.character,layout=_this$props.layout;var size=this.state.size;return react_default.a.createElement("div",{className:"sheetforge sheet ".concat(size)},react_default.a.createElement(components_Conditions_Conditions,{model:character}),layout.children.map(this.renderComponent.bind(null,layout)));}}]);return Sheet;}(react_default.a.Component),defineProperty_default()(_class2,"defaultProps",{character:{},layout:{},onChange:noop["a" /* default */],onMount:noop["a" /* default */]}),Sheet_temp))||Sheet_class;/* harmony default export */ var components_Sheet_Sheet = __webpack_exports__["a"] = (Sheet_Sheet_Sheet);

/***/ }),

/***/ "ulyj":
/*!**************************************************!*\
  !*** ./source/components/Resource/Resource.scss ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "vQEy":
/*!****************************************************************!*\
  !*** ./source/models/generic/ICategorizable/ICategorizable.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utilities/noop */ "x6zz");
/* harmony import */ var _utilities_unique__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utilities/unique */ "DODz");
/* harmony default export */ __webpack_exports__["a"] = (function(){var getValue=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_utilities_noop__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];return mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model({}).volatile(function(){return{isICategorizable:true};}).views(function(self){function getCategories(){if(!self.name)return[];var categories=self.name.split(':');categories.pop();// remove the name
return Object(_utilities_unique__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(categories.map(function(category){return category.trim();}).filter(Boolean)).sort();}var lastUsedName=self.name;var categories=getCategories();return{get categories(){if(!self.name||self.name===lastUsedName)return categories;lastUsedName=self.name;categories=getCategories();return categories;},get categoryValue(){return getValue(self);}};});});

/***/ }),

/***/ "vovD":
/*!**************************************!*\
  !*** ./source/models/Skill/Skill.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_generic_ICategorizable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/generic/ICategorizable */ "vQEy");
/* harmony import */ var _models_generic_IEditable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/generic/IEditable */ "RtsE");
/* harmony import */ var _models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/generic/IIdentity */ "kcWH");
/* harmony default export */ __webpack_exports__["a"] = (mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].compose(_models_generic_IIdentity__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],Object(_models_generic_ICategorizable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function(self){return self.mastery;}),_models_generic_IEditable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model({mastery:1,name:'New Skill...',theory:0}).views(function(self){return{get isComplex(){return self.theory!==0;},get isSimple(){return self.theory===0;}};})).named('Skill'));

/***/ }),

/***/ "wryK":
/*!************************************************!*\
  !*** ./source/components/Resource/Resource.js ***!
  \************************************************/
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
/* harmony import */ var _components_Rating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Rating */ "K0ru");
/* harmony import */ var _utilities_noop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utilities/noop */ "x6zz");
/* harmony import */ var _Resource_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Resource.scss */ "ulyj");
/* harmony import */ var _Resource_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Resource_scss__WEBPACK_IMPORTED_MODULE_12__);
var _class,_class2,_temp;var Resource=Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class=(_temp=_class2=/*#__PURE__*/function(_Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Resource,_Component);function Resource(){var _getPrototypeOf2;var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Resource);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,(_getPrototypeOf2=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Resource)).call.apply(_getPrototypeOf2,[this].concat(args)));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeCurrent",function(current){return _this.props.model.set({current:current});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeMaximum",function(maximum){return _this.props.model.set({maximum:maximum});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleChangeName",function(name){return _this.props.model.set({name:name});});_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this),"handleCommitName",function(){return _this.props.model.name===''&&_this.props.onDelete(_this.props.model);});return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Resource,[{key:"render",value:function render(){var _this$props$model=this.props.model,current=_this$props$model.current,name=_this$props$model.name,maximum=_this$props$model.maximum;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"resource"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"display"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"name",onChange:this.handleChangeName,onEditEnd:this.handleCommitName,value:name}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"current",max:999,min:0,onChange:this.handleChangeCurrent,value:current}),'of',react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Editable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{className:"maximum",max:999,min:0,onChange:this.handleChangeMaximum,value:maximum})),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Rating__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],{allowExcess:true,current:current,maximum:maximum,onChange:this.handleChangeCurrent}));}}]);return Resource;}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"defaultProps",{model:{},onDelete:_utilities_noop__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_class2,"sortOptions",[{display:'icon-sort-name-asc',getter:function getter(model){return model.name;}}]),_temp))||_class;/* harmony default export */ __webpack_exports__["a"] = (Resource);

/***/ }),

/***/ "x6zz":
/*!**********************************!*\
  !*** ./source/utilities/noop.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(){});

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

/***/ }),

/***/ "zZb/":
/*!****************************************************!*\
  !*** ./source/models/Layout/Layout.js + 1 modules ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/generic/Collection/Collection.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/generic/IEditable/IEditable.js */
/*! ModuleConcatenation bailout: Cannot concat with ./source/models/generic/IIdentity/IIdentity.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/mobx-state-tree/dist/mobx-state-tree.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/mobx-state-tree/dist/mobx-state-tree.js
var mobx_state_tree = __webpack_require__("uqjs");

// EXTERNAL MODULE: ./source/models/generic/Collection/Collection.js + 1 modules
var Collection = __webpack_require__("YFLu");

// EXTERNAL MODULE: ./source/models/generic/IEditable/IEditable.js + 3 modules
var IEditable = __webpack_require__("RtsE");

// EXTERNAL MODULE: ./source/models/generic/IIdentity/IIdentity.js + 1 modules
var IIdentity = __webpack_require__("kcWH");

// CONCATENATED MODULE: ./source/models/types/between.js
/* harmony default export */ var between = (function(min,max){var defaultTo=arguments.length>2&&arguments[2]!==undefined?arguments[2]:min;return mobx_state_tree["types"].optional(mobx_state_tree["types"].refinement(mobx_state_tree["types"].number,function(n){return n===undefined||n>=min&&n<=max;}),defaultTo);});
// CONCATENATED MODULE: ./source/models/Layout/Layout.js
var Layout=mobx_state_tree["types"].compose(IIdentity["a" /* default */],IEditable["a" /* default */],mobx_state_tree["types"].model({categorize:false,children:Object(Collection["a" /* default */])(mobx_state_tree["types"].late(function(){return Layout;})),colSpan:between(1,4,1),columns:between(1,4,1),filter:mobx_state_tree["types"].maybe(mobx_state_tree["types"].string),sortOption:mobx_state_tree["types"].maybe(mobx_state_tree["types"].number),title:mobx_state_tree["types"].union(mobx_state_tree["types"].maybe(mobx_state_tree["types"].string),mobx_state_tree["types"].literal(false)),type:mobx_state_tree["types"].maybe(mobx_state_tree["types"].string)})).named('Layout');/* harmony default export */ var Layout_Layout = __webpack_exports__["a"] = (Layout);

/***/ })

};;
});
//# sourceMappingURL=sheetforge.7a43e2bc950fdb75f30a.js.map