exports.ids = [1];
exports.modules = {

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

/***/ "x6zz":
/*!**********************************!*\
  !*** ./source/utilities/noop.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(){});

/***/ })

};;
//# sourceMappingURL=components-attribute-attribute~components-effect-effect~components-item-item~components-sheet-sheet~~4405149b.7a43e2bc950fdb75f30a.js.map