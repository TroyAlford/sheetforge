exports.ids = [11];
exports.modules = {

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

/***/ "ZcyS":
/*!*************************************************!*\
  !*** ./source/components/Resource/Resource.mdx ***!
  \*************************************************/
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
/* harmony import */ var _components_Resource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Resource */ "wryK");
/* harmony import */ var _models_Resource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/models/Resource */ "ZEI3");
var layoutProps={};var MDXContent=/*#__PURE__*/function(_React$Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MDXContent,_React$Component);function MDXContent(props){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,MDXContent);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(MDXContent).call(this,props));_this.layout=null;return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MDXContent,[{key:"render",value:function render(){var _this$props=this.props,components=_this$props.components,props=_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_this$props,["components"]);return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"wrapper",components:components},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_7__["MDXTag"],{name:"h2",components:components,props:{"id":"resource-tracker"}},"Resource Tracker"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(docz__WEBPACK_IMPORTED_MODULE_8__["Playground"],{__position:0,__code:'<Resource\n  model={ResourceModel.create({\n    current: 5,\n    maximum: 10,\n    name: \'New Resource\',\n  })}\n/>',__scope:{props:this?this.props:props,Resource:_components_Resource__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],ResourceModel:_models_Resource__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]}},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Resource__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],{model:_models_Resource__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].create({current:5,maximum:10,name:'New Resource'})})));}}]);return MDXContent;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);MDXContent.__docgenInfo={"description":"","methods":[],"displayName":"MDXContent"};

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

/***/ })

};;
//# sourceMappingURL=components-resource-resource.7a43e2bc950fdb75f30a.js.map