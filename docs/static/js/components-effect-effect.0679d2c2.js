exports.ids = [7];
exports.modules = {

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

/***/ "Sfu5":
/*!*********************************************!*\
  !*** ./source/components/Effect/Effect.mdx ***!
  \*********************************************/
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
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _models_Character__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/models/Character */ "ITKj");
/* harmony import */ var _components_Effect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Effect */ "a4BR");
var layoutProps={};var MDXContent=/*#__PURE__*/function(_React$Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MDXContent,_React$Component);function MDXContent(props){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,MDXContent);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(MDXContent).call(this,props));_this.layout=null;return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MDXContent,[{key:"render",value:function render(){var _this$props=this.props,components=_this$props.components,props=_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_this$props,["components"]);return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"wrapper",components:components},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"h2",components:components,props:{"id":"effect-component"}},"Effect Component"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(docz__WEBPACK_IMPORTED_MODULE_8__["Playground"],{__position:0,__code:'() => {\n  const character = Character.create({\n    attributes: [{ name: \'Armor Rating\' }, { name: \'Charisma\' }],\n    resources: [{ current: 16, name: \'Mana\', maximum: 25 }],\n    spells: [\n      {\n        costs: [{ amount: 8, resource: \'Mana\' }],\n        name: \'Spell-Shield of the Magi\',\n        description:\n          \'A powerful shielding spell, which cloaks the enchanted in radiance.\',\n        effects: [\n          { modifier: 4, modifies: \'Armor Rating\' },\n          { modifier: 2, modifies: \'Charisma\' },\n        ],\n        isActive: true,\n        level: 7,\n      },\n    ],\n  })\n  return <Effect model={character.spells.at(0).effects.at(0)} />\n}',__scope:{props:this?this.props:props,types:mobx_state_tree__WEBPACK_IMPORTED_MODULE_9__["types"],Character:_models_Character__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],Effect:_components_Effect__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]}},function(){var character=_models_Character__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].create({attributes:[{name:'Armor Rating'},{name:'Charisma'}],resources:[{current:16,name:'Mana',maximum:25}],spells:[{costs:[{amount:8,resource:'Mana'}],name:'Spell-Shield of the Magi',description:'A powerful shielding spell, which cloaks the enchanted in radiance.',effects:[{modifier:4,modifies:'Armor Rating'},{modifier:2,modifies:'Charisma'}],isActive:true,level:7}]});return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Effect__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],{model:character.spells.at(0).effects.at(0)});}));}}]);return MDXContent;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);MDXContent.__docgenInfo={"description":"","methods":[],"displayName":"MDXContent"};

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

/***/ })

};;
//# sourceMappingURL=components-effect-effect.7a43e2bc950fdb75f30a.js.map