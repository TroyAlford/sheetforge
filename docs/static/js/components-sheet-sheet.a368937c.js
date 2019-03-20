exports.ids = [12];
exports.modules = {

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

/***/ "wwUJ":
/*!*******************************************!*\
  !*** ./source/components/Sheet/Sheet.mdx ***!
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
/* harmony import */ var _models_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/models/Layout */ "zZb/");
/* harmony import */ var _components_Sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/Sheet */ "tqhn");
var layoutProps={};var MDXContent=/*#__PURE__*/function(_React$Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MDXContent,_React$Component);function MDXContent(props){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,MDXContent);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(MDXContent).call(this,props));_this.layout=null;return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MDXContent,[{key:"render",value:function render(){var _this$props=this.props,components=_this$props.components,props=_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_this$props,["components"]);return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"wrapper",components:components},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"h2",components:components,props:{"id":"character-sheet"}},"Character Sheet"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Sheet__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"],{layout:_models_Layout__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].create({children:[{title:'Descriptors',children:[{columns:3,type:'Descriptor'}]},{title:'Attributes',children:[{columns:4,type:'Attribute'}]},{columns:3,children:[{colSpan:1,children:[{title:'Traits',children:[{type:'Trait'}]},{title:'Resources',children:[{type:'Resource'}]}]},{colSpan:2,children:[{title:'Skills',children:[{columns:2,type:'Skill'}]},{title:'Items',children:[{columns:1,type:'Item'}]},{title:'Spells',children:[{columns:1,type:'Spell'}]}]}]}]}),character:_models_Character__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].create({}),onChange:function onChange(character,layout){localStorage.setItem('sf-example',JSON.stringify({character:character,layout:layout}));},onMount:function onMount(self){var saved=localStorage.getItem('sf-example');if(saved){var example=JSON.parse(saved);self.props.character.set(example.character);self.props.layout.set(example.layout);}}}));}}]);return MDXContent;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);MDXContent.__docgenInfo={"description":"","methods":[],"displayName":"MDXContent"};

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
//# sourceMappingURL=components-sheet-sheet.7a43e2bc950fdb75f30a.js.map