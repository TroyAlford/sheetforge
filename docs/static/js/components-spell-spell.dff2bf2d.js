exports.ids = [14];
exports.modules = {

/***/ "Ogqk":
/*!*******************************************!*\
  !*** ./source/components/Spell/Spell.mdx ***!
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
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-state-tree */ "uqjs");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _models_Character__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/models/Character */ "ITKj");
/* harmony import */ var _components_Spell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Spell */ "8qIS");
var layoutProps={};var MDXContent=/*#__PURE__*/function(_React$Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MDXContent,_React$Component);function MDXContent(props){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,MDXContent);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(MDXContent).call(this,props));_this.layout=null;return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MDXContent,[{key:"render",value:function render(){var _this$props=this.props,components=_this$props.components,props=_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_this$props,["components"]);return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"wrapper",components:components},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"h2",components:components,props:{"id":"spell-component"}},"Spell Component"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(docz__WEBPACK_IMPORTED_MODULE_8__["Playground"],{__position:0,__code:'() => {\n  const character = Character.create({\n    attributes: [{ name: \'Armor Rating\' }, { name: \'Charisma\' }],\n    resources: [\n      { current: 16, maximum: 25, name: \'Mana\' },\n      { current: 5, maximum: 5, name: \'Rage\' },\n      { current: 10, maximum: 10, name: \'Willpower\' },\n    ],\n    spells: [\n      {\n        costs: [{ amount: 8, resource: \'Mana\' }],\n        description:\n          \'A powerful shielding spell, which cloaks the enchanted in radiance.\',\n        effects: [\n          { modifier: 4, modifies: \'Armor Rating\' },\n          { modifier: 2, modifies: \'Charisma\' },\n        ],\n        isActive: true,\n        level: 7,\n        name: \'Spell-Shield of the Magi\',\n      },\n    ],\n  })\n  return <Spell model={character.spells.at(0)} />\n}',__scope:{props:this?this.props:props,types:mobx_state_tree__WEBPACK_IMPORTED_MODULE_9__["types"],Character:_models_Character__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],Spell:_components_Spell__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]}},function(){var character=_models_Character__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].create({attributes:[{name:'Armor Rating'},{name:'Charisma'}],resources:[{current:16,maximum:25,name:'Mana'},{current:5,maximum:5,name:'Rage'},{current:10,maximum:10,name:'Willpower'}],spells:[{costs:[{amount:8,resource:'Mana'}],description:'A powerful shielding spell, which cloaks the enchanted in radiance.',effects:[{modifier:4,modifies:'Armor Rating'},{modifier:2,modifies:'Charisma'}],isActive:true,level:7,name:'Spell-Shield of the Magi'}]});return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Spell__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],{model:character.spells.at(0)});}));}}]);return MDXContent;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);MDXContent.__docgenInfo={"description":"","methods":[],"displayName":"MDXContent"};

/***/ })

};;
//# sourceMappingURL=components-spell-spell.7a43e2bc950fdb75f30a.js.map