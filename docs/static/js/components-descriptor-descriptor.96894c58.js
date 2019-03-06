(window.webpackJsonpsheetforge=window.webpackJsonpsheetforge||[]).push([[5],{"AD/C":function(e,n,t){"use strict";var r=t("uqjs"),o=t("vQEy"),a=t("RtsE"),i=t("kcWH");n.a=r.types.compose(i.a,Object(o.a)(),a.a,r.types.model({name:"New Descriptor...",value:""})).named("Descriptor")},DODz:function(e,n,t){"use strict";n.a=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter(function(e,n,t){return t.indexOf(e)===n})}},"O+tL":function(e,n,t){"use strict";t.d(n,"a",function(){return w});var r=t("cFUw"),o=t.n(r),a=t("/hBA"),i=t.n(a),s=t("Nogc"),l=t.n(s),u=t("WEGp"),c=t.n(u),p=t("Amxr"),d=t.n(p),f=t("o1mq"),g=t.n(f),m=t("cEnY"),h=t.n(m),v=t("itEV"),y=t.n(v),E=t("cNEE"),b=t.n(E),C=t("q1tI"),O=t.n(C),K=t("kIQV"),D=t("x6zz"),N=(t("S5k1"),["text","multiline","boolean","number","slider"]),w=function(e){function n(){var e,t;l()(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=d()(this,(e=g()(n)).call.apply(e,[this].concat(a))),b()(h()(t),"state",{editing:!1,resetValue:t.props.value}),b()(h()(t),"getEditorType",function(){var e=t.props.value,n=t.props.type;return void 0!==n&&N.includes(n)?n:"string"===(n=i()(e))?e.includes("\n")?"multiline":"text":["boolean","number"].includes(n)?n:"text"}),b()(h()(t),"resetChanges",function(){t.props.onChange(t.state.resetValue,t.props.value),t.handleToggleEditing()}),b()(h()(t),"createRefWithAutoFocus",function(e){e&&(t.editor=e,"boolean"!==t.getEditorType()&&"function"===typeof e.focus&&e.focus(),["boolean","number"].includes(t.getEditorType())||t.props.forceEditMode&&"function"===typeof e.setSelectionRange&&e.setSelectionRange(e.value.length,e.value.length))}),b()(h()(t),"handleChange",function(e){var n=e.target,r=t.props,o=r.min,a=r.max,i=n.value;switch(t.getEditorType()){case"slider":case"number":i=parseFloat(i||0),Number.isNaN(i)&&(i=t.props.value),i=Object(K.a)(i,{max:a,min:o})}t.props.onChange(i,t.state.resetValue)}),b()(h()(t),"handleKeys",function(e){var n=e.target,r=e.key,o=e.ctrlKey,a=e.metaKey;t.props.onKeyDown!==D.a&&(t.props.onKeyDown(e),e.isDefaultPrevented())||("Escape"===r&&t.resetChanges(),"Enter"===r&&("TEXTAREA"!==n.nodeName||o||a)&&t.handleToggleEditing())}),b()(h()(t),"handleReceivingFocus",function(){t.props.readOnly||t.state.editing||t.handleToggleEditing()}),b()(h()(t),"handleToggleEditing",function(){if(!t.props.readOnly){var e=!t.editing;t.setState({editing:e,resetValue:t.props.value},function(){t.state.editing?t.props.onEditStart():t.props.onEditEnd()})}}),b()(h()(t),"selectOnFocus",function(e){return e.target.select()}),b()(h()(t),"toggleBoolean",function(){t.props.onEditStart(),t.props.onChange(!t.props.value,t.props.value),t.props.onEditEnd()}),b()(h()(t),"renderBoolean",function(){return O.a.createElement("input",{type:"checkbox",checked:Boolean(t.props.value),disabled:t.props.readOnly,onChange:t.toggleBoolean,ref:t.createRefWithAutoFocus})}),b()(h()(t),"renderMultiline",function(){if(!t.editing){var e=(t.props.value||t.props.placeholder).split("\n").map(function(e,n){return O.a.createElement("p",{key:n},e)}),n=["multiline",t.props.value?"":"placeholder"].join(" ").trim();return O.a.createElement("div",{className:n,onClick:t.handleToggleEditing},e)}return O.a.createElement("textarea",{disabled:t.props.readOnly,onBlur:t.handleToggleEditing,onChange:t.handleChange,onFocus:t.selectOnFocus,onKeyDown:t.handleKeys,onKeyPress:t.props.onKeyPress,onKeyUp:t.props.onKeyUp,placeholder:t.props.placeholder,ref:t.createRefWithAutoFocus,rows:t.props.value.split("\n").length,value:t.props.value})}),b()(h()(t),"renderNumber",function(){return t.editing?O.a.createElement("input",{type:"number",disabled:t.props.readOnly,max:t.props.max,min:t.props.min,onBlur:t.handleToggleEditing,onChange:t.handleChange,onFocus:t.selectOnFocus,onKeyDown:t.handleKeys,onKeyPress:t.props.onKeyPress,onKeyUp:t.props.onKeyUp,placeholder:t.props.placeholder,ref:t.createRefWithAutoFocus,step:t.props.step,value:t.props.value}):t.renderStatic()}),b()(h()(t),"renderSlider",function(){return O.a.createElement("input",{type:"range",disabled:t.props.readOnly,max:t.props.max,min:t.props.min,onBlur:t.handleToggleEditing,onChange:t.handleChange,onKeyDown:t.props.onKeyDown,onKeyPress:t.props.onKeyPress,onKeyUp:t.props.onKeyUp,ref:t.createRefWithAutoFocus,step:t.props.step,value:t.props.value})}),b()(h()(t),"renderText",function(){return t.editing?O.a.createElement("input",{type:"text",disabled:t.props.readOnly,onBlur:t.handleToggleEditing,onChange:t.handleChange,onFocus:t.selectOnFocus,onKeyDown:t.handleKeys,onKeyPress:t.props.onKeyPress,onKeyUp:t.props.onKeyUp,placeholder:t.props.placeholder,ref:t.createRefWithAutoFocus,value:t.props.value}):t.renderStatic()}),b()(h()(t),"renderStatic",function(){var e=t.props,n=e.placeholder,r=e.readOnlyValue,o=e.value,a=n&&!o,i=void 0!==r?r:o,s=a?"placeholder":"";return O.a.createElement("span",{className:s,onClick:t.handleToggleEditing},a?n:i)}),b()(h()(t),"renderEditor",function(){switch(t.getEditorType()){case"boolean":return t.renderBoolean();case"slider":return t.renderSlider();case"multiline":return t.renderMultiline();case"number":return t.renderNumber();default:return t.renderText()}}),b()(h()(t),"render",function(){var e=t.props,n=e.className,r=e.readOnly,a=["editable",t.editing?"editing":"",n||"",r?"readonly":""].filter(Boolean),i={};return r||t.editing||(i={onFocus:t.handleReceivingFocus,tabIndex:"0"}),O.a.createElement("div",o()({className:a.join(" ")},i),t.renderEditor())}),t}return y()(n,e),c()(n,[{key:"editing",get:function(){return this.props.forceEditMode||this.state.editing}}]),n}(O.a.Component);b()(w,"displayName","Editable"),b()(w,"defaultProps",{className:"",forceEditMode:!1,max:void 0,min:void 0,onChange:D.a,onEditEnd:D.a,onEditStart:D.a,onKeyDown:D.a,onKeyPress:D.a,onKeyUp:D.a,placeholder:"",readOnly:!1,readOnlyValue:void 0,step:1,type:void 0,value:""})},RtsE:function(e,n,t){"use strict";var r=t("/hBA"),o=t.n(r),a=t("f66B"),i=t.n(a),s=t("Ta9u"),l=t("uqjs"),u=/([a-z0-9-_]+)(?![["'\].])*/gi,c=function(e){return"string"!==typeof e?null:e.match(u)},p=function(e,n){if("string"===typeof n){var t=c(n);if(Array.isArray(t)){var r=t.pop(),o=t.reduce(function(e,n){return e[n]||{}},e);return o?o[r]:void 0}}},d=l.types.model("IEditable",{}).volatile(function(){return{isIEditable:!0,savedVersion:{}}}).views(function(e){return{get isDirty(){return!i()(e.toJSON(),e.savedVersion)}}}).actions(function(e){return{afterCreate:function(){e.savedVersion=e.toJSON()},isPathDirty:function(n){var t=p(e.toJSON(),n),r=p(e.savedVersion,n);return!i()(t,r)},markAsClean:function(){e.savedVersion=e.toJSON(),Object.keys(e.savedVersion).forEach(function(n){var t=e[n];t&&(t.isIEditable?t.markAsClean():Object(s.isObservableArray)(t)&&t.forEach(function(e){return e&&e.isIEditable&&e.markAsClean()}))})},reset:function(){Object.assign(e,e.savedVersion)},set:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;"string"===typeof n&&void 0!==t?void 0!==e[n]?e[n]=t:function(e,n,t){var r=c(n),o=r.pop(),a=r.reduce(function(e,n){return e[n]||{}},e);a&&a.isIEditable?a.set(o,t):a[o]=t}(e,n,t):"object"===o()(n)&&void 0===t&&Object.assign(e,n)}}});n.a=d},S5k1:function(e,n,t){},"Ut7+":function(e,n,t){"use strict";var r,o,a,i=t("Nogc"),s=t.n(i),l=t("WEGp"),u=t.n(l),c=t("Amxr"),p=t.n(c),d=t("o1mq"),f=t.n(d),g=t("cEnY"),m=t.n(g),h=t("itEV"),v=t.n(h),y=t("cNEE"),E=t.n(y),b=t("NbXW"),C=t("q1tI"),O=t.n(C),K=t("O+tL"),D=t("x6zz"),N=(t("k8Dq"),Object(b.observer)((a=o=function(e){function n(){var e,t;s()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=p()(this,(e=f()(n)).call.apply(e,[this].concat(o))),E()(m()(t),"handleChangeName",function(e){return t.props.model.set({name:e})}),E()(m()(t),"handleChangeValue",function(e){return t.props.model.set({value:e})}),E()(m()(t),"handleCommitName",function(){return""===t.props.model.name&&t.props.onDelete(t.props.model)}),t}return v()(n,e),u()(n,[{key:"render",value:function(){return O.a.createElement("div",{className:"descriptor"},O.a.createElement(K.a,{className:"name",onChange:this.handleChangeName,onEditEnd:this.handleCommitName,value:this.props.model.name}),O.a.createElement(K.a,{className:"value",type:"text",onChange:this.handleChangeValue,value:this.props.model.value}))}}]),n}(C.Component),E()(o,"defaultProps",{model:{},onDelete:D.a}),E()(o,"sortOptions",[{display:"icon-sort-name-asc",getter:function(e){return e.name}},{display:"icon-sort-value-asc",getter:function(e){return e.value}}]),r=a))||r);n.a=N},bzuU:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return C});var r=t("y9tM"),o=t.n(r),a=t("Nogc"),i=t.n(a),s=t("WEGp"),l=t.n(s),u=t("Amxr"),c=t.n(u),p=t("o1mq"),d=t.n(p),f=t("itEV"),g=t.n(f),m=t("q1tI"),h=t.n(m),v=t("6qfE"),y=t("mcpE"),E=t("Ut7+"),b=t("AD/C"),C=function(e){function n(e){var t;return i()(this,n),(t=c()(this,d()(n).call(this,e))).layout=null,t}return g()(n,e),l()(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=o()(e,["components"]);return h.a.createElement(v.MDXTag,{name:"wrapper",components:n},h.a.createElement(v.MDXTag,{name:"h2",components:n,props:{id:"descriptor"}},"Descriptor"),h.a.createElement(y.Playground,{__position:0,__code:"<Descriptor\n  model={DescriptorModel.create({\n    name: 'Hair Color',\n    value: 'Brown',\n  })}\n/>",__scope:{props:this?this.props:t,Descriptor:E.a,DescriptorModel:b.a}},h.a.createElement(E.a,{model:b.a.create({name:"Hair Color",value:"Brown"})})))}}]),n}(h.a.Component);C.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},k8Dq:function(e,n,t){},kIQV:function(e,n,t){"use strict";n.a=function(e,n){var t=n.min,r=n.max;return void 0!==t&&e<t?t:void 0!==r&&e>r?r:e}},kcWH:function(e,n,t){"use strict";var r=t("uqjs");var o=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,t=String(e),r=0;return t.split("").forEach(function(e){r=(r<<5)-r+e.charCodeAt(0),r&=r}),Math.abs(r).toString(n)}(Math.random().toString())};n.a=r.types.model({}).volatile(function(){return{hash:""}}).actions(function(e){return{afterCreate:function(){e.hash=o()}}})},vQEy:function(e,n,t){"use strict";var r=t("uqjs"),o=t("x6zz"),a=t("DODz");n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.a;return r.types.model({}).volatile(function(){return{isICategorizable:!0}}).views(function(n){function t(){if(!n.name)return[];var e=n.name.split(":");return e.pop(),Object(a.a)(e.map(function(e){return e.trim()}).filter(Boolean)).sort()}var r=n.name,o=t();return{get categories(){return n.name&&n.name!==r?(r=n.name,o=t()):o},get categoryValue(){return e(n)}}})}},x6zz:function(e,n,t){"use strict";n.a=function(){}}},0,[0,1,2,12,14,4,7,8,15,9,10,11,13,6]]);
//# sourceMappingURL=components-descriptor-descriptor.4de42bb53ba2697eeb19.js.map