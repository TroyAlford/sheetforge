(window.webpackJsonpsheetforge=window.webpackJsonpsheetforge||[]).push([[1],{"AD/C":function(e,t,n){"use strict";var r=n("uqjs"),a=n("vQEy"),o=n("RtsE"),i=n("kcWH");t.a=r.types.compose(i.a,Object(a.a)(),o.a,r.types.model({name:"New Descriptor...",value:""})).named("Descriptor")},Afd3:function(e,t,n){"use strict";var r=n("uqjs"),a=n("HyL6"),o=n("YFLu"),i=n("vQEy"),u=n("RtsE"),c=n("kcWH");t.a=r.types.compose(c.a,Object(i.a)(),u.a,r.types.model({description:"",effects:Object(o.a)(a.a),equipped:!1,name:"New Item..."})).named("Item")},DODz:function(e,t,n){"use strict";t.a=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter(function(e,t,n){return n.indexOf(e)===t})}},HcU2:function(e,t,n){"use strict";var r=n("uqjs");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Boolean;if(!Object(r.hasParent)(e))return null;for(var n=Object(r.getParent)(e);n;){if(t(n))return n;if(!Object(r.hasParent)(n))return null;n=Object(r.getParent)(n)}return null}},HyL6:function(e,t,n){"use strict";var r=n("uqjs"),a=n("mkTB"),o=n("YFLu"),i=n("RtsE"),u=n("kcWH"),c=n("HcU2");t.a=r.types.compose(u.a,i.a,r.types.model({condition:"",modifier:0,targetId:""}).actions(function(e){return{afterAttach:function(){!e.targetId&&e.available().length&&(e.targetId=e.available().first.id)},available:function(){var t=e.character();return t?t.attributes:Object(o.a)(a.a).create([])},character:function(){return Object(c.a)(e,function(e){return e.isCharacter})},isApplicable:function(){var t=e.character();return Boolean(!e.condition||t&&t.conditions.includes(e.condition))},source:function(){return Object(c.a)(e,function(e){return e.name})||null},sourceName:function(){return e.source()?e.source().name:"Unknown"},target:function(){var t=e.character();return t?t.attributes.findBy("name",e.targetId):null}}})).named("Effect")},ITKj:function(e,t,n){"use strict";var r=n("uqjs"),a=n("mkTB"),o=n("AD/C"),i=n("YFLu"),u=n("RtsE"),c=n("kcWH"),s=n("Afd3"),l=n("ZEI3"),f=n("vovD"),p=n("JCrA"),d=n("ZwSi");t.a=r.types.compose(c.a,u.a,r.types.model({attributes:Object(i.a)(a.a),conditions:Object(i.a)(r.types.string),descriptors:Object(i.a)(o.a),experience:0,items:Object(i.a)(s.a),resources:Object(i.a)(l.a),skills:Object(i.a)(f.a),spells:Object(i.a)(p.a),traits:Object(i.a)(d.a)}).volatile(function(){return{isCharacter:!0}}).actions(function(e){return{activeEffects:function(){return e.effects().filter(function(e){return e&&e.isApplicable()})},availableConditions:function(){return e.effects().map(function(e){return e.condition}).concat(e.conditions.asArray).sort().filter(function(e,t,n){return!t||e!==n[t-1]}).filter(Boolean)},effects:function(){return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0;if(!t||!Array.isArray(t))throw new TypeError("cannot flatten non-Array value ".concat(JSON.stringify(t)));return t.reduce(function(t,r){return n>1&&r&&Array.isArray(r)?t.concat(e(r,n-1)):t.concat(r)},[])}([e.traits.filter(Boolean).map(function(e){return e.effects.values}),e.spells.filter(function(e){return e.isActive}).map(function(e){return e.effects.values}),e.items.filter(function(e){return e.equipped}).map(function(e){return e.effects.values})]).filter(Boolean)}}})).named("Character")},ITnf:function(e,t,n){"use strict";var r=n("uqjs"),a=n("YFLu"),o=n("RtsE"),i=n("kcWH"),u=n("ZEI3"),c=n("HcU2");t.a=r.types.compose(i.a,o.a,r.types.model({amount:0,resourceName:""}).views(function(e){return{get available(){return e.character?e.character.resources:Object(a.a)(u.a).create([])},get character(){return Object(c.a)(e,function(e){return e.isCharacter})}}}).actions(function(e){return{afterAttach:function(){!e.resourceName&&e.available.length&&(e.resourceName=e.available.first.name)},resource:function(){return e.character?e.character.resources.findBy("name",e.resourceName):null}}})).named("Cost")},JCrA:function(e,t,n){"use strict";var r=n("uqjs"),a=n("HyL6"),o=n("YFLu"),i=n("vQEy"),u=n("RtsE"),c=n("kcWH"),s=n("ITnf"),l=n("HcU2");t.a=r.types.compose(c.a,Object(i.a)(function(e){return e.level}),u.a,r.types.model({costs:Object(o.a)(s.a),description:"",effects:Object(o.a)(a.a),isActive:!1,level:0,name:"New Spell..."}).views(function(e){return{get character(){return Object(l.a)(e,function(e){return e.isCharacter})}}}).actions(function(e){return{cast:function(){e.isAffordable()&&e.costs.forEach(function(e){var t=e.resource();t.set({current:t.current-e.amount})})},isAffordable:function(){return!e.character||!e.costs.length||e.costs.every(function(e){return e.resource()&&e.resource().current>=e.amount})}}})).named("Spell")},"O+tL":function(e,t,n){"use strict";n.d(t,"a",function(){return N});var r=n("cFUw"),a=n.n(r),o=n("/hBA"),i=n.n(o),u=n("Nogc"),c=n.n(u),s=n("WEGp"),l=n.n(s),f=n("Amxr"),p=n.n(f),d=n("o1mq"),v=n.n(d),m=n("cEnY"),g=n.n(m),y=n("itEV"),h=n.n(y),b=n("cNEE"),E=n.n(b),O=n("q1tI"),j=n.n(O),w=n("kIQV"),A=n("x6zz"),C=(n("S5k1"),["text","multiline","boolean","number","slider"]),N=function(e){function t(){var e,n;c()(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return n=p()(this,(e=v()(t)).call.apply(e,[this].concat(o))),E()(g()(n),"state",{editing:!1,resetValue:n.props.value}),E()(g()(n),"getEditorType",function(){var e=n.props.value,t=n.props.type;return void 0!==t&&C.includes(t)?t:"string"===(t=i()(e))?e.includes("\n")?"multiline":"text":["boolean","number"].includes(t)?t:"text"}),E()(g()(n),"resetChanges",function(){n.props.onChange(n.state.resetValue,n.props.value),n.handleToggleEditing()}),E()(g()(n),"createRefWithAutoFocus",function(e){e&&(n.editor=e,"boolean"!==n.getEditorType()&&"function"===typeof e.focus&&e.focus(),["boolean","number"].includes(n.getEditorType())||n.props.forceEditMode&&"function"===typeof e.setSelectionRange&&e.setSelectionRange(e.value.length,e.value.length))}),E()(g()(n),"handleChange",function(e){var t=e.target,r=n.props,a=r.min,o=r.max,i=t.value;switch(n.getEditorType()){case"slider":case"number":i=parseFloat(i||0),Number.isNaN(i)&&(i=n.props.value),i=Object(w.a)(i,{max:o,min:a})}n.props.onChange(i,n.state.resetValue)}),E()(g()(n),"handleKeys",function(e){var t=e.target,r=e.key,a=e.ctrlKey,o=e.metaKey;n.props.onKeyDown!==A.a&&(n.props.onKeyDown(e),e.isDefaultPrevented())||("Escape"===r&&n.resetChanges(),"Enter"===r&&("TEXTAREA"!==t.nodeName||a||o)&&n.handleToggleEditing())}),E()(g()(n),"handleReceivingFocus",function(){n.props.readOnly||n.state.editing||n.handleToggleEditing()}),E()(g()(n),"handleToggleEditing",function(){if(!n.props.readOnly){var e=!n.editing;n.setState({editing:e,resetValue:n.props.value},function(){n.state.editing?n.props.onEditStart():n.props.onEditEnd()})}}),E()(g()(n),"selectOnFocus",function(e){return e.target.select()}),E()(g()(n),"toggleBoolean",function(){n.props.onEditStart(),n.props.onChange(!n.props.value,n.props.value),n.props.onEditEnd()}),E()(g()(n),"renderBoolean",function(){return j.a.createElement("input",{type:"checkbox",checked:Boolean(n.props.value),disabled:n.props.readOnly,onChange:n.toggleBoolean,ref:n.createRefWithAutoFocus})}),E()(g()(n),"renderMultiline",function(){if(!n.editing){var e=(n.props.value||n.props.placeholder).split("\n").map(function(e,t){return j.a.createElement("p",{key:t},e)}),t=["multiline",n.props.value?"":"placeholder"].join(" ").trim();return j.a.createElement("div",{className:t,onClick:n.handleToggleEditing},e)}return j.a.createElement("textarea",{disabled:n.props.readOnly,onBlur:n.handleToggleEditing,onChange:n.handleChange,onFocus:n.selectOnFocus,onKeyDown:n.handleKeys,onKeyPress:n.props.onKeyPress,onKeyUp:n.props.onKeyUp,placeholder:n.props.placeholder,ref:n.createRefWithAutoFocus,rows:n.props.value.split("\n").length,value:n.props.value})}),E()(g()(n),"renderNumber",function(){return n.editing?j.a.createElement("input",{type:"number",disabled:n.props.readOnly,max:n.props.max,min:n.props.min,onBlur:n.handleToggleEditing,onChange:n.handleChange,onFocus:n.selectOnFocus,onKeyDown:n.handleKeys,onKeyPress:n.props.onKeyPress,onKeyUp:n.props.onKeyUp,placeholder:n.props.placeholder,ref:n.createRefWithAutoFocus,step:n.props.step,value:n.props.value}):n.renderStatic()}),E()(g()(n),"renderSlider",function(){return j.a.createElement("input",{type:"range",disabled:n.props.readOnly,max:n.props.max,min:n.props.min,onBlur:n.handleToggleEditing,onChange:n.handleChange,onKeyDown:n.props.onKeyDown,onKeyPress:n.props.onKeyPress,onKeyUp:n.props.onKeyUp,ref:n.createRefWithAutoFocus,step:n.props.step,value:n.props.value})}),E()(g()(n),"renderText",function(){return n.editing?j.a.createElement("input",{type:"text",disabled:n.props.readOnly,onBlur:n.handleToggleEditing,onChange:n.handleChange,onFocus:n.selectOnFocus,onKeyDown:n.handleKeys,onKeyPress:n.props.onKeyPress,onKeyUp:n.props.onKeyUp,placeholder:n.props.placeholder,ref:n.createRefWithAutoFocus,value:n.props.value}):n.renderStatic()}),E()(g()(n),"renderStatic",function(){var e=n.props,t=e.placeholder,r=e.readOnlyValue,a=e.value,o=t&&!a,i=void 0!==r?r:a,u=o?"placeholder":"";return j.a.createElement("span",{className:u,onClick:n.handleToggleEditing},o?t:i)}),E()(g()(n),"renderEditor",function(){switch(n.getEditorType()){case"boolean":return n.renderBoolean();case"slider":return n.renderSlider();case"multiline":return n.renderMultiline();case"number":return n.renderNumber();default:return n.renderText()}}),E()(g()(n),"render",function(){var e=n.props,t=e.className,r=e.readOnly,o=["editable",n.editing?"editing":"",t||"",r?"readonly":""].filter(Boolean),i={};return r||n.editing||(i={onFocus:n.handleReceivingFocus,tabIndex:"0"}),j.a.createElement("div",a()({className:o.join(" ")},i),n.renderEditor())}),n}return h()(t,e),l()(t,[{key:"editing",get:function(){return this.props.forceEditMode||this.state.editing}}]),t}(j.a.Component);E()(N,"displayName","Editable"),E()(N,"defaultProps",{className:"",forceEditMode:!1,max:void 0,min:void 0,onChange:A.a,onEditEnd:A.a,onEditStart:A.a,onKeyDown:A.a,onKeyPress:A.a,onKeyUp:A.a,placeholder:"",readOnly:!1,readOnlyValue:void 0,step:1,type:void 0,value:""})},RtsE:function(e,t,n){"use strict";var r=n("/hBA"),a=n.n(r),o=n("f66B"),i=n.n(o),u=n("Ta9u"),c=n("uqjs"),s=/([a-z0-9-_]+)(?![["'\].])*/gi,l=function(e){return"string"!==typeof e?null:e.match(s)},f=function(e,t){if("string"===typeof t){var n=l(t);if(Array.isArray(n)){var r=n.pop(),a=n.reduce(function(e,t){return e[t]||{}},e);return a?a[r]:void 0}}},p=c.types.model("IEditable",{}).volatile(function(){return{isIEditable:!0,savedVersion:{}}}).views(function(e){return{get isDirty(){return!i()(e.toJSON(),e.savedVersion)}}}).actions(function(e){return{afterCreate:function(){e.savedVersion=e.toJSON()},isPathDirty:function(t){var n=f(e.toJSON(),t),r=f(e.savedVersion,t);return!i()(n,r)},markAsClean:function(){e.savedVersion=e.toJSON(),Object.keys(e.savedVersion).forEach(function(t){var n=e[t];n&&(n.isIEditable?n.markAsClean():Object(u.isObservableArray)(n)&&n.forEach(function(e){return e&&e.isIEditable&&e.markAsClean()}))})},reset:function(){Object.assign(e,e.savedVersion)},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;"string"===typeof t&&void 0!==n?void 0!==e[t]?e[t]=n:function(e,t,n){var r=l(t),a=r.pop(),o=r.reduce(function(e,t){return e[t]||{}},e);o&&o.isIEditable?o.set(a,n):o[a]=n}(e,t,n):"object"===a()(t)&&void 0===n&&Object.assign(e,t)}}});t.a=p},S5k1:function(e,t,n){},YFLu:function(e,t,n){"use strict";var r=n("cNEE"),a=n.n(r),o=n("ubaz"),i=n.n(o),u=n("Ta9u"),c=n("uqjs");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=c.types.model({values:c.types.array(e)}).views(function(e){return{get asArray(){return e.values.slice()},get first(){return e.length?e.at(0):void 0},get last(){return e.length?e.at(e.length-1):void 0},get length(){return e.values.length}}}).actions(function(t){return{at:function(e){return t.values[e]},clear:function(){return t.values.clear()},delete:function(e){t.values.replace(t.values.filter(function(t){return t!==e}))},deleteAt:function(e){t.values.replace(t.values.filter(function(t,n){return n!==e}))},every:function(e){return t.values.every(e)},filter:function(e){return t.values.filter(e)},find:function(e){return t.values.find(e)},findBy:function(e,n){return t.find(function(t){return t[e]===n})},findById:function(n){return e.identifierAttribute&&t.find(function(t){return t[e.identifierAttribute]===n})||null},forEach:function(e){return t.values.forEach(e)},includes:function(e,n){return t.values.includes(e,n)},indexOf:function(e){return t.values.indexOf(e)},insert:function(e,n){return t.splice(n,0,e)},map:function(e){return t.values.map(e)},pop:function(){return t.values.pop()},push:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.values.replace([].concat(t.values,n))},reduce:function(e,n){return t.values.reduce(e,n)},replace:function(e){return t.values.replace(e)},shift:function(){return t.values.shift()},slice:function(e,n){return t.values.slice(e,n)},some:function(e){return t.values.some(e)},sortBy:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";if(!["asc","desc"].includes(n))throw new TypeError('direction must be "asc" or "desc", got: "'.concat(n,'"'));var r=t.values.slice().sort(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n,r){var a=String(n instanceof Map?n.get(e):n[e]),o=String(r instanceof Map?r.get(e):r[e]);return t?o.localeCompare(a):a.localeCompare(o)}}(e));return t.values.replace("desc"===n?r.reverse():r),t},splice:function(e,n,r){return t.values.splice(e,n,r)},toObject:function(e,n){return t.values.reduce(function(t,r){var o=r[e],u=void 0!==n?r[n]:r;return i()({},t,a()({},o,"function"===typeof u?u():u))},{})},unshift:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.values.replace([].concat(n,t.values))}}}).postProcessSnapshot(function(e){return e.values});return c.types.custom(i()({},t,{fromSnapshot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.create({values:e})},getValidationMessage:function(t){return t?(Object(u.isObservableArray)(t)||Array.isArray(t))&&t.every(function(t){return e.is(t)})?"":"Collection types must be assigned an array of values or null":""},isTargetType:function(e){return n.is(e)},name:t.name||"Collection"}))}},ZEI3:function(e,t,n){"use strict";var r=n("uqjs"),a=n("vQEy"),o=n("RtsE"),i=n("kcWH");t.a=r.types.compose(i.a,Object(a.a)(),o.a,r.types.model({current:0,maximum:10,name:"New Resource..."})).named("Resource")},ZwSi:function(e,t,n){"use strict";var r=n("uqjs"),a=n("HyL6"),o=n("YFLu"),i=n("vQEy"),u=n("RtsE"),c=n("kcWH");t.a=r.types.compose(c.a,Object(i.a)(function(e){return e.value}),u.a,r.types.model("Trait",{effects:Object(o.a)(a.a),name:"New Trait...",value:0})).named("Trait")},kIQV:function(e,t,n){"use strict";t.a=function(e,t){var n=t.min,r=t.max;return void 0!==n&&e<n?n:void 0!==r&&e>r?r:e}},kcWH:function(e,t,n){"use strict";var r=n("uqjs");var a=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=String(e),r=0;return n.split("").forEach(function(e){r=(r<<5)-r+e.charCodeAt(0),r&=r}),Math.abs(r).toString(t)}(Math.random().toString())};t.a=r.types.model({}).volatile(function(){return{hash:""}}).actions(function(e){return{afterCreate:function(){e.hash=a()}}})},maIC:function(e,t,n){"use strict";var r=n("yZWr"),a=n.n(r).a.create();a.import(n("Wbaz")),a.import(n("lFTT")),a.import(n("NEdZ")),a.import(n("EjzI")),a.import(n("rVKH")),a.import(n("QllX")),a.import(n("gV/b")),a.import(n("NU+P")),a.import(n("CaZ0")),a.import(n("N5iU")),a.import(n("O1N0")),a.import(n("BSwV")),a.import(n("itDh")),a.import(n("FC7u")),a.import(n("I5O3")),a.import(n("Z+cb")),a.import(n("R4H5")),a.import(n("ohYX")),a.import(n("ZS3Q")),t.a=a},mkTB:function(e,t,n){"use strict";var r=n("ubaz"),a=n.n(r),o=n("y9tM"),i=n.n(o),u=n("cNEE"),c=n.n(u),s=n("uqjs"),l=n("vQEy"),f=n("RtsE"),p=n("kcWH"),d=n("HcU2"),v=n("maIC"),m=function(e){var t=[],n=[];return v.a.parse(e).traverse(function(e){e.fn&&t.push(e.fn.name),"SymbolNode"!==e.type||n.includes(e.name)||t.includes(e.name)||n.push(e.name)}),n};t.a=s.types.compose(p.a,Object(l.a)(function(e){return e.modifiedValue()}),f.a,s.types.model({name:"New Attribute...",raw:s.types.optional(s.types.union(s.types.number,s.types.string),0)}).views(function(e){return{get character(){return Object(d.a)(e,function(e){return e.isCharacter})},get id(){return e.name.split(":").pop().trim().toLowerCase().replace(/[^a-z0-9]/gi,"")},get isComputed(){return"string"===typeof e.raw}}}).actions(function(e){var t=!1;return{effects:function(){return e.character?e.character.activeEffects().filter(function(t){return t.targetId===e.id}):[]},modifiedValue:function(){return(e.value()||0)+e.modifier()},modifier:function(){return v.a.sum(e.effects().map(function(e){return e.modifier}))},modifierText:function(){return e.effects().map(function(e){return"".concat(e.sourceName(),": ").concat(e.modifier)}).join(", ")},value:function(){if(!e.isComputed)return e.raw;if(null===e.character)return 0;if(t)return 0;t=!0;var n=0;try{var r=m(e.raw).reduce(function(t,n){var r=e.character.attributes.findBy("id",n);return Object.assign(t,c()({},n,r?r.modifiedValue():0))},{});n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{defaultSymbolValue:0},r=a()({},t);return m(e).forEach(function(e){void 0===r[e]&&(r[e]=n.defaultSymbolValue)}),v.a.eval(e,r)}(e.raw,r)}catch(o){0,n=0}return t=!1,n}}}).preProcessSnapshot(function(e){var t=e.value,n=i()(e,["value"]);return a()({},n,{raw:t})}).postProcessSnapshot(function(e){var t=e.raw,n=i()(e,["raw"]);return a()({},n,{value:t})})).named("Attribute")},vQEy:function(e,t,n){"use strict";var r=n("uqjs"),a=n("x6zz"),o=n("DODz");t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.a;return r.types.model({}).volatile(function(){return{isICategorizable:!0}}).views(function(t){function n(){if(!t.name)return[];var e=t.name.split(":");return e.pop(),Object(o.a)(e.map(function(e){return e.trim()}).filter(Boolean)).sort()}var r=t.name,a=n();return{get categories(){return t.name&&t.name!==r?(r=t.name,a=n()):a},get categoryValue(){return e(t)}}})}},vovD:function(e,t,n){"use strict";var r=n("uqjs"),a=n("vQEy"),o=n("RtsE"),i=n("kcWH");t.a=r.types.compose(i.a,Object(a.a)(function(e){return e.mastery}),o.a,r.types.model({mastery:1,name:"New Skill...",theory:0}).views(function(e){return{get isComplex(){return 0!==e.theory},get isSimple(){return 0===e.theory}}})).named("Skill")},x6zz:function(e,t,n){"use strict";t.a=function(){}}}]);
//# sourceMappingURL=components-attribute-attribute~components-effect-effect~components-item-item~components-sheet-sheet~~4405149b.4de42bb53ba2697eeb19.js.map