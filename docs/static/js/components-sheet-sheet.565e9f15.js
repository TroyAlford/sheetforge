(window.webpackJsonpsheetforge=window.webpackJsonpsheetforge||[]).push([[11],{"2jVx":function(e,t,a){},"5Iz4":function(e,t,a){},HYkr:function(e,t,a){},Zsyy:function(e,t,a){},fbMO:function(e,t,a){},wwUJ:function(e,t,a){"use strict";a.r(t);var n,i,r,o,l,s=a("y9tM"),c=a.n(s),m=a("q1tI"),u=a.n(m),p=a("6qfE"),d=(a("mcpE"),a("uqjs")),h=a("ITKj"),y=a("cFUw"),f=a.n(y),v=a("Nogc"),g=a.n(v),S=a("WEGp"),C=a.n(S),E=a("Amxr"),b=a.n(E),w=a("o1mq"),A=a.n(w),k=a("itEV"),I=a.n(k),N=a("cEnY"),O=a.n(N),M=a("cNEE"),x=a.n(M),H=a("NbXW"),D=a("mD9I"),R=a("Ut7+"),z=a("a4BR"),B=a("gtIf"),j=a("p0Pd"),J=a("wryK"),P=(a("2jVx"),a("5Iz4"),a("I7n6")),W=(a("fbMO"),function(e){function t(){var e,a;g()(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=b()(this,(e=A()(t)).call.apply(e,[this].concat(i))),x()(O()(O()(a)),"titleBar",u.a.createRef()),a}return I()(t,e),C()(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.flex,n=void 0===a?1:a,i=e.title;return u.a.createElement("div",{className:"section",style:{flex:n}},i&&u.a.createElement("h1",{ref:this.titleBar},i),u.a.createElement(P.a,{expandByDefault:!0,omitItemWrapper:!0,toggleButtonParent:this.titleBar.current},t))}}]),t}(m.Component)),q=a("b/z0"),L=a("8qIS"),T=a("M/4f"),U={Attribute:D.a,Column:function(e){var t=e.children,a=e.flex;return u.a.createElement("div",{className:"column",style:{flex:a}},t)},Descriptor:R.a,Effect:z.a,HealthBar:B.a,Item:j.a,Resource:J.a,Row:function(e){var t=e.children;return u.a.createElement("div",{className:"row"},t)},Section:W,Skill:q.a,Spell:L.a,Trait:T.a},Q=a("O+tL"),F=(a("Zsyy"),Object(H.observer)((i=n=function(e){function t(){var e,a;g()(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=b()(this,(e=A()(t)).call.apply(e,[this].concat(i))),x()(O()(O()(a)),"CACHE",{}),x()(O()(O()(a)),"handleSnapshot",function(){var e=a.props.model.availableConditions(),t=a.props.model.conditions.asArray;JSON.stringify(e)===JSON.stringify(a.CACHE.availableConditions)&&JSON.stringify(t)===JSON.stringify(a.CACHE.conditions)||(a.CACHE.availableConditions=e,a.CACHE.conditions=t,a.forceUpdate())}),x()(O()(O()(a)),"handleCheckbox",function(e,t){var n=a.props.model.conditions;t&&!n.includes(e)?n.push(e):"function"===typeof n.delete?n.delete(e):n.splice(n.indexOf(e),1),a.forceUpdate()}),x()(O()(O()(a)),"renderCondition",function(e){var t=a.props.model.conditions.includes(e);return u.a.createElement("div",{key:e,className:"condition ".concat(t?"current":"available")},u.a.createElement(Q.a,{className:"current",onChange:function(t){return a.handleCheckbox(e,t)},value:t}),u.a.createElement("div",{className:"name"},e))}),a}return I()(t,e),C()(t,[{key:"componentDidMount",value:function(){this.onSnapshotDisposer=Object(d.onSnapshot)(this.props.model,this.handleSnapshot)}},{key:"componentWillUnmount",value:function(){this.onSnapshotDisposer()}},{key:"render",value:function(){return u.a.createElement("div",{className:"conditions"},u.a.createElement(P.a,null,this.props.model.availableConditions().map(this.renderCondition)))}}]),t}(m.Component),x()(n,"defaultProps",{model:{}}),i))),V=a("t524"),G=a("mkTB"),Z=a("AD/C"),X=a("HyL6"),Y=a("+bV0"),K=a("Afd3"),$=a("ZEI3"),_=a("vovD"),ee=a("JCrA"),te=a("ZwSi"),ae={Attribute:G.a,Descriptor:Z.a,Effect:X.a,HealthLevel:Y.a,Item:K.a,Resource:$.a,Skill:_.a,Spell:ee.a,Trait:te.a},ne=a("VB1/"),ie=a("x6zz"),re=(a("HYkr"),Object(H.observer)((l=o=function(e){function t(e){var a;return g()(this,t),a=b()(this,A()(t).call(this,e)),x()(O()(O()(a)),"state",{size:"large"}),x()(O()(O()(a)),"handleWindowResize",function(){var e="large";window.matchMedia("(min-width: 5in) and (max-width: 7.5in)").matches?e="medium":window.matchMedia("(max-width: 5in)").matches&&(e="small"),a.setState({size:e})}),x()(O()(O()(a)),"renderComponent",function(e,t){var n=e.children,i=e.list,r=e.lookup,o=e.path,l=e.type,s=c()(e,["children","list","lookup","path","type"]),m=U[l],p=Object(ne.a)(a.props.character,o);if(Object.assign(s,{size:a.state.size}),i){var d=ae[l],h=Object(V.a)(d,m,{className:"".concat(l.toLowerCase(),"-list")});return u.a.createElement(h,f()({key:t,collection:p},s))}return r?u.a.createElement(m,f()({key:t,model:p.findById(r)},s)):p?u.a.createElement(m,f()({key:t,model:p},s)):u.a.createElement(m,f()({key:t},s),n.map(a.renderComponent))}),a.disposeOfSnapshotListener=Object(d.onSnapshot)(a.props.character,function(e){a.props.onChange(e,a.props.layout)}),window.addEventListener("resize",a.handleWindowResize),a}return I()(t,e),C()(t,[{key:"componentDidMount",value:function(){this.handleWindowResize()}},{key:"componentWillUnmount",value:function(){this.disposeOfSnapshotListener()}},{key:"render",value:function(){var e=this.props,t=e.character,a=e.layout,n=void 0===a?[]:a,i=this.state.size;return u.a.createElement("div",{className:"sheetforge sheet ".concat(i)},n.map(this.renderComponent),u.a.createElement(F,{model:t}))}}]),t}(u.a.Component),x()(o,"defaultProps",{character:{},onChange:ie.a}),r=l))||r);t.default=function(e){var t=e.components;c()(e,["components"]);return u.a.createElement(p.MDXTag,{name:"wrapper",components:t},u.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"character-sheet"}},"Character Sheet"),u.a.createElement(re,{layout:localStorage.getItem("sf-layout")?JSON.parse(localStorage.getItem("sf-layout")):[{type:"Section",title:"Descriptors",children:[{type:"Descriptor",list:!0,path:"descriptors"}]},{type:"Section",title:"Attributes",children:[{type:"Attribute",list:!0,path:"attributes"},{type:"HealthBar",path:"health"}]},{type:"Row",children:[{type:"Column",flex:1,children:[{type:"Section",title:"Traits",children:[{type:"Trait",list:!0,path:"traits"}]},{type:"Section",title:"Resources",children:[{type:"Resource",list:!0,path:"resources"}]}]},{type:"Column",flex:2,title:"Skills",children:[{type:"Section",title:"Skills",children:[{type:"Skill",list:!0,path:"skills"}]},{type:"Section",title:"Inventory",children:[{type:"Item",list:!0,path:"items"}]},{type:"Section",title:"Spellbook",children:[{type:"Spell",list:!0,path:"spells"}]}]}]}],character:h.a.create(localStorage.getItem("sf-character")?JSON.parse(localStorage.getItem("sf-character")):{attributes:[{name:"",value:""},{name:"Body",value:"round(mean(agility, fitness, strength))"},{name:"Mind",value:"round(mean(acuity, focus, intellect))"},{name:"Spirit",value:"round(mean(confidence, devotion, intuition))"},{name:"Potency",value:"round(mean(confidence, intellect, strength))"},{name:"Strength",value:1},{name:"Intellect",value:5},{name:"Confidence",value:3},{name:"Reflex",value:"round(mean(acuity, agility, intuition))"},{name:"Agility",value:2},{name:"Acuity",value:3},{name:"Intuition",value:3},{name:"Resilience",value:"round(mean(devotion, fitness, focus))"},{name:"Fitness",value:2},{name:"Focus",value:4},{name:"Devotion",value:2},{name:"Size",value:0},{name:"Speed",value:"6 + size + round(fitness / 2)"},{name:"Natural Armor",value:0}],descriptors:[{name:"Age",value:"27"},{name:"Concept",value:"Merchant Mage"},{name:"Eyes",value:"Green"},{name:"Gender",value:"Female"},{name:"Hair",value:"Blonde"},{name:"Height",value:"5'6\""},{name:"Homeland",value:"Alloria"},{name:"Race",value:"Human"},{name:"Weight",value:"110lbs"}],experience:11,health:[{name:"Healthy",penalty:0},{name:"Healthy",penalty:0},{name:"Healthy",penalty:0},{name:"Bruised",penalty:-1},{name:"Bruised",penalty:-1},{name:"Injured",penalty:-2},{name:"Crippled",penalty:-3},{name:"Incapacitated",penalty:-5}],items:[{name:"Ring of Fire Immunity",equipped:!0},{name:"Ring of Lightning Immunity",equipped:!0},{name:"Sentinel of Shul's Spear",equipped:!0},{name:"Artifact: Staff of Pan",equipped:!0}],resources:[{name:"Mana",current:40,maximum:40},{name:"Willpower",current:8,maximum:8}],skills:[{name:"Academics",mastery:5},{name:"Alchemy",mastery:3},{name:"Arcane: Abjuration",mastery:6},{name:"Arcane: Conjuration",mastery:8},{name:"Arcane: Divination",mastery:6},{name:"Arcane: Evocation",mastery:1},{name:"Arcane: Transmutation",mastery:2},{name:"Combat: Dodge",mastery:1},{name:"Craft: Gem Cutting",mastery:3},{name:"Empathy",mastery:3},{name:"Investigation",mastery:4},{name:"Magic: Quasith to Mana",mastery:4},{name:"Quasith: Body",mastery:2},{name:"Quasith: Evocation",mastery:2},{name:"Quasith: Mind",mastery:2},{name:"Quasith: Recondite",mastery:3},{name:"Quasith: Substance",mastery:2},{name:"Medicine",mastery:1},{name:"Occult",mastery:3},{name:"Persuasion",mastery:3},{name:"Sleight of Hand",mastery:4},{name:"Streetwise",mastery:3},{name:"Subterfuge",mastery:4}],spells:[{name:"Mage Armor",effects:[{target:"Armor",modifier:8}]}],traits:[{name:"Permanent: Comprehend Languages",value:5,effects:[{targetName:"Acuity",modifier:3,condition:"always"}]},{name:"Permanent: Detect Magic",value:5},{name:"Permanent: Read Magic",value:5}]}),onChange:function(e,t){localStorage.setItem("sf-character",JSON.stringify(e)),localStorage.setItem("sf-layout",JSON.stringify(t))}}))}}}]);
//# sourceMappingURL=components-sheet-sheet.3a9267a86ef6f92e2af0.js.map