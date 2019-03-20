exports.ids = [4];
exports.modules = {

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

/***/ "ZemV":
/*!***************************************************!*\
  !*** ./source/components/Attribute/Attribute.mdx ***!
  \***************************************************/
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
/* harmony import */ var _components_Attribute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Attribute */ "mD9I");
/* harmony import */ var _models_Attribute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/models/Attribute */ "mkTB");
/* harmony import */ var _models_Character__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/models/Character */ "ITKj");
var layoutProps={};var MDXContent=/*#__PURE__*/function(_React$Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MDXContent,_React$Component);function MDXContent(props){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,MDXContent);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(MDXContent).call(this,props));_this.layout=null;return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MDXContent,[{key:"render",value:function render(){var _this$props=this.props,components=_this$props.components,props=_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_this$props,["components"]);return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"wrapper",components:components},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"h2",components:components,props:{"id":"attribute"}},"Attribute"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"p",components:components},"The ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"inlineCode",components:components,parentName:"p"},"Attribute")," component displays the ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"inlineCode",components:components,parentName:"p"},"name")," and ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"inlineCode",components:components,parentName:"p"},"value")," of an ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"inlineCode",components:components,parentName:"p"},"Attribute")," model. If this ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"inlineCode",components:components,parentName:"p"},"Attribute")," model is part of a ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"inlineCode",components:components,parentName:"p"},"Character"),", it will also display any applicable ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"inlineCode",components:components,parentName:"p"},"Effect")," modifiers."),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"p",components:components},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"strong",components:components,parentName:"p"},"Note"),": You can hover your mouse over any of the modifier displays to see ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"em",components:components,parentName:"p"},"which effects")," caused that modifier to be applied."),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(docz__WEBPACK_IMPORTED_MODULE_8__["Playground"],{__position:0,__code:'() => {\n  const character = CharacterModel.create({\n    attributes: [\n      { name: \'Strength\', value: 4 },\n      { name: \'Dexterity\', value: 3 },\n      { name: \'Stamina\', value: 4 },\n      { name: \'Charisma\', value: 3 },\n    ],\n    items: [\n      {\n        equipped: true,\n        name: \'Belt of Dwarven Strength\',\n        effects: [{ targetId: \'Strength\', modifier: 2 }],\n      },\n      {\n        equipped: true,\n        name: \"Potion: Eagle\'s Splendor\",\n        effects: [{ targetId: \'Charisma\', modifier: 2 }],\n      },\n    ],\n    traits: [\n      {\n        name: \'Half Giant\',\n        effects: [{ targetId: \'Strength\', modifier: 4 }],\n      },\n    ],\n    spells: [\n      {\n        isActive: true,\n        name: \'Curse: Rotting Flesh\',\n        effects: [\n          { targetId: \'Stamina\', modifier: -2 },\n          { targetId: \'Charisma\', modifier: -2 },\n        ],\n      },\n    ],\n  })\n  return (\n    <>\n      <h2>Dexterity</h2>\n      <p>No modifiers.</p>\n      <Attribute model={character.attributes.findBy(\'name\', \'Dexterity\')} />\n      <Attribute\n        model={character.attributes.findBy(\'name\', \'Dexterity\')}\n        rating\n      />\n      <h2>Strength</h2>\n      <p>+2 from an equipped Item, +4 from a Trait</p>\n      <Attribute model={character.attributes.findBy(\'name\', \'Strength\')} />\n      <Attribute\n        model={character.attributes.findBy(\'name\', \'Strength\')}\n        rating\n      />\n\n      <h2>Stamina</h2>\n      <p>-2 from a Curse</p>\n      <Attribute model={character.attributes.findBy(\'name\', \'Stamina\')} />\n      <Attribute\n        model={character.attributes.findBy(\'name\', \'Stamina\')}\n        rating\n      />\n\n      <h2>Charisma</h2>\n      <p>+2 from an equipped Item, -2 from a Curse</p>\n      <Attribute model={character.attributes.findBy(\'name\', \'Charisma\')} />\n      <Attribute\n        model={character.attributes.findBy(\'name\', \'Charisma\')}\n        rating\n      />\n    </>\n  )\n}',__scope:{props:this?this.props:props,Attribute:_components_Attribute__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],AttributeModel:_models_Attribute__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],CharacterModel:_models_Character__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]}},function(){var character=_models_Character__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].create({attributes:[{name:'Strength',value:4},{name:'Dexterity',value:3},{name:'Stamina',value:4},{name:'Charisma',value:3}],items:[{equipped:true,name:'Belt of Dwarven Strength',effects:[{targetId:'Strength',modifier:2}]},{equipped:true,name:'Potion: Eagle\'s Splendor',effects:[{targetId:'Charisma',modifier:2}]}],traits:[{name:'Half Giant',effects:[{targetId:'Strength',modifier:4}]}],spells:[{isActive:true,name:'Curse: Rotting Flesh',effects:[{targetId:'Stamina',modifier:-2},{targetId:'Charisma',modifier:-2}]}]});return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2",null,"Dexterity"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"No modifiers."),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Attribute__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{model:character.attributes.findBy('name','Dexterity')}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Attribute__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{model:character.attributes.findBy('name','Dexterity'),rating:true}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2",null,"Strength"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"+2 from an equipped Item, +4 from a Trait"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Attribute__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{model:character.attributes.findBy('name','Strength')}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Attribute__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{model:character.attributes.findBy('name','Strength'),rating:true}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2",null,"Stamina"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"-2 from a Curse"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Attribute__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{model:character.attributes.findBy('name','Stamina')}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Attribute__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{model:character.attributes.findBy('name','Stamina'),rating:true}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2",null,"Charisma"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"+2 from an equipped Item, -2 from a Curse"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Attribute__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{model:character.attributes.findBy('name','Charisma')}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Attribute__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{model:character.attributes.findBy('name','Charisma'),rating:true}));}));}}]);return MDXContent;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);MDXContent.__docgenInfo={"description":"","methods":[],"displayName":"MDXContent"};

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

/***/ })

};;
//# sourceMappingURL=components-attribute-attribute.7a43e2bc950fdb75f30a.js.map