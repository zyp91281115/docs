import{V as Oe,aQ as ze,ai as J,w as fe,aR as Ae,aS as Te,am as je,aF as ee,O as j,j as _,ap as ne,k as S,v as R,E as I,d as z,h as u,u as ye,al as Fe,G as Me,aC as H,aa as he,aT as te,a8 as G,y as xe,aU as Ee,aV as Le,aW as We,aX as He,aY as ke,m as x,af as oe,aZ as be,a2 as Ge,x as Ue,a_ as qe,a$ as Ve,b0 as Xe,b1 as Ze,b2 as Qe,b3 as Ye,b4 as Je,ae as eo,ad as O,l as Se,n as oo,I as se,b5 as Ne,b6 as no,b7 as to,q as E,b8 as me,Z as ro,_ as io,$ as ao,o as lo,g as L,a as W,f as ue,a1 as ce}from"./app-BYVCkMFV.js";import{N as so}from"./Icon-DbB4ZtOR.js";import{C as uo}from"./ChevronRight-Dir8Onm8.js";import{b as co,B as po}from"./Button-B9_OsJsT.js";import{N as fo}from"./Image-DH5uHYWu.js";function ho(e={},n){const r=Oe({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:i}=e,t=a=>{switch(a.key){case"Control":r.ctrl=!0;break;case"Meta":r.command=!0,r.win=!0;break;case"Shift":r.shift=!0;break;case"Tab":r.tab=!0;break}o!==void 0&&Object.keys(o).forEach(h=>{if(h!==a.key)return;const v=o[h];if(typeof v=="function")v(a);else{const{stop:N=!1,prevent:P=!1}=v;N&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},l=a=>{switch(a.key){case"Control":r.ctrl=!1;break;case"Meta":r.command=!1,r.win=!1;break;case"Shift":r.shift=!1;break;case"Tab":r.tab=!1;break}i!==void 0&&Object.keys(i).forEach(h=>{if(h!==a.key)return;const v=i[h];if(typeof v=="function")v(a);else{const{stop:N=!1,prevent:P=!1}=v;N&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},c=()=>{(n===void 0||n.value)&&(J("keydown",document,t),J("keyup",document,l)),n!==void 0&&fe(n,a=>{a?(J("keydown",document,t),J("keyup",document,l)):(ee("keydown",document,t),ee("keyup",document,l))})};return Ae()?(Te(c),je(()=>{(n===void 0||n.value)&&(ee("keydown",document,t),ee("keyup",document,l))})):c(),ze(r)}function vo(e,n,r){const o=j(e.value);let i=null;return fe(e,t=>{i!==null&&window.clearTimeout(i),t===!0?r&&!r.value?o.value=!0:i=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}function bo(e){return n=>{n?e.value=n.$el:e.value=null}}const b="0!important",_e="-1px!important";function V(e){return S(`${e}-type`,[R("& +",[_("button",{},[S(`${e}-type`,[I("border",{borderLeftWidth:b}),I("state-border",{left:_e})])])])])}function X(e){return S(`${e}-type`,[R("& +",[_("button",[S(`${e}-type`,[I("border",{borderTopWidth:b}),I("state-border",{top:_e})])])])])}const mo=_("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[_("button",[R("&:first-child:not(:last-child)",`
 margin-right: ${b};
 border-top-right-radius: ${b};
 border-bottom-right-radius: ${b};
 `),R("&:last-child:not(:first-child)",`
 margin-left: ${b};
 border-top-left-radius: ${b};
 border-bottom-left-radius: ${b};
 `),R("&:not(:first-child):not(:last-child)",`
 margin-left: ${b};
 margin-right: ${b};
 border-radius: ${b};
 `),V("default"),S("ghost",[V("primary"),V("info"),V("success"),V("warning"),V("error")])])])]),S("vertical",{flexDirection:"column"},[_("button",[R("&:first-child:not(:last-child)",`
 margin-bottom: ${b};
 margin-left: ${b};
 margin-right: ${b};
 border-bottom-left-radius: ${b};
 border-bottom-right-radius: ${b};
 `),R("&:last-child:not(:first-child)",`
 margin-top: ${b};
 margin-left: ${b};
 margin-right: ${b};
 border-top-left-radius: ${b};
 border-top-right-radius: ${b};
 `),R("&:not(:first-child):not(:last-child)",`
 margin: ${b};
 border-radius: ${b};
 `),X("default"),S("ghost",[X("primary"),X("info"),X("success"),X("warning"),X("error")])])])]),wo={size:{type:String,default:void 0},vertical:Boolean},go=z({name:"ButtonGroup",props:wo,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:r}=ye(e);return Fe("-button-group",mo,n),H(co,e),{rtlEnabled:Me("ButtonGroup",r,n),mergedClsPrefix:n}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),ve=he("n-dropdown-menu"),re=he("n-dropdown"),we=he("n-dropdown-option"),Pe=z({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),yo=z({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=G(ve),{renderLabelRef:r,labelFieldRef:o,nodePropsRef:i,renderOptionRef:t}=G(re);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:r,nodeProps:i,renderOption:t}},render(){var e;const{clsPrefix:n,hasSubmenu:r,showIcon:o,nodeProps:i,renderLabel:t,renderOption:l}=this,{rawNode:c}=this.tmNode,a=u("div",Object.assign({class:`${n}-dropdown-option`},i==null?void 0:i(c)),u("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},te(c.icon)),u("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(c):te((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),u("div",{class:[`${n}-dropdown-option-body__suffix`,r&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:a,option:c}):a}});function pe(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function xo(e){return e.type==="group"}function Re(e){return e.type==="divider"}function ko(e){return e.type==="render"}const $e=z({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=G(re),{hoverKeyRef:r,keyboardKeyRef:o,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:t,activeKeyPathRef:l,animatedRef:c,mergedShowRef:a,renderLabelRef:h,renderIconRef:v,labelFieldRef:N,childrenFieldRef:P,renderOptionRef:C,nodePropsRef:K,menuPropsRef:A}=n,k=G(we,null),m=G(ve),B=G(ke),Z=x(()=>e.tmNode.rawNode),Q=x(()=>{const{value:s}=P;return pe(e.tmNode.rawNode,s)}),ie=x(()=>{const{disabled:s}=e.tmNode;return s}),ae=x(()=>{if(!Q.value)return!1;const{key:s,disabled:y}=e.tmNode;if(y)return!1;const{value:D}=r,{value:F}=o,{value:le}=i,{value:M}=t;return D!==null?M.includes(s):F!==null?M.includes(s)&&M[M.length-1]!==s:le!==null?M.includes(s):!1}),de=x(()=>o.value===null&&!c.value),Y=vo(ae,300,de),U=x(()=>!!(k!=null&&k.enteringSubmenuRef.value)),q=j(!1);H(we,{enteringSubmenuRef:q});function T(){q.value=!0}function d(){q.value=!1}function g(){const{parentKey:s,tmNode:y}=e;y.disabled||a.value&&(i.value=s,o.value=null,r.value=y.key)}function f(){const{tmNode:s}=e;s.disabled||a.value&&r.value!==s.key&&g()}function p(s){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:y}=s;y&&!be({target:y},"dropdownOption")&&!be({target:y},"scrollbarRail")&&(r.value=null)}function $(){const{value:s}=Q,{tmNode:y}=e;a.value&&!s&&!y.disabled&&(n.doSelect(y.key,y.rawNode),n.doUpdateShow(!1))}return{labelField:N,renderLabel:h,renderIcon:v,siblingHasIcon:m.showIconRef,siblingHasSubmenu:m.hasSubmenuRef,menuProps:A,popoverBody:B,animated:c,mergedShowSubmenu:x(()=>Y.value&&!U.value),rawNode:Z,hasSubmenu:Q,pending:oe(()=>{const{value:s}=t,{key:y}=e.tmNode;return s.includes(y)}),childActive:oe(()=>{const{value:s}=l,{key:y}=e.tmNode,D=s.findIndex(F=>y===F);return D===-1?!1:D<s.length-1}),active:oe(()=>{const{value:s}=l,{key:y}=e.tmNode,D=s.findIndex(F=>y===F);return D===-1?!1:D===s.length-1}),mergedDisabled:ie,renderOption:C,nodeProps:K,handleClick:$,handleMouseMove:f,handleMouseEnter:g,handleMouseLeave:p,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:d}},render(){var e,n;const{animated:r,rawNode:o,mergedShowSubmenu:i,clsPrefix:t,siblingHasIcon:l,siblingHasSubmenu:c,renderLabel:a,renderIcon:h,renderOption:v,nodeProps:N,props:P,scrollable:C}=this;let K=null;if(i){const B=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);K=u(Ie,Object.assign({},B,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const A={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},k=N==null?void 0:N(o),m=u("div",Object.assign({class:[`${t}-dropdown-option`,k==null?void 0:k.class],"data-dropdown-option":!0},k),u("div",xe(A,P),[u("div",{class:[`${t}-dropdown-option-body__prefix`,l&&`${t}-dropdown-option-body__prefix--show-icon`]},[h?h(o):te(o.icon)]),u("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},a?a(o):te((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),u("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,c&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(so,null,{default:()=>u(uo,null)}):null)]),this.hasSubmenu?u(Ee,null,{default:()=>[u(Le,null,{default:()=>u("div",{class:`${t}-dropdown-offset-container`},u(We,{show:this.mergedShowSubmenu,placement:this.placement,to:C&&this.popoverBody||void 0,teleportDisabled:!C},{default:()=>u("div",{class:`${t}-dropdown-menu-wrapper`},r?u(He,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>K}):K)}))})]}):null);return v?v({node:m,option:o}):m}}),So=z({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:r}=this,{children:o}=e;return u(Ge,null,u(yo,{clsPrefix:r,tmNode:e,key:e.key}),o==null?void 0:o.map(i=>{const{rawNode:t}=i;return t.show===!1?null:Re(t)?u(Pe,{clsPrefix:r,key:i.key}):i.isGroup?(Ue("dropdown","`group` node is not allowed to be put in `group` node."),null):u($e,{clsPrefix:r,tmNode:i,parentKey:n,key:i.key})}))}}),No=z({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return u("div",n,[e==null?void 0:e()])}}),Ie=z({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:r}=G(re);H(ve,{showIconRef:x(()=>{const i=n.value;return e.tmNodes.some(t=>{var l;if(t.isGroup)return(l=t.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>i?i(a):a.icon);const{rawNode:c}=t;return i?i(c):c.icon})}),hasSubmenuRef:x(()=>{const{value:i}=r;return e.tmNodes.some(t=>{var l;if(t.isGroup)return(l=t.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>pe(a,i));const{rawNode:c}=t;return pe(c,i)})})});const o=j(null);return H(Xe,null),H(Ze,null),H(ke,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:r}=this,o=this.tmNodes.map(i=>{const{rawNode:t}=i;return t.show===!1?null:ko(t)?u(No,{tmNode:i,key:i.key}):Re(t)?u(Pe,{clsPrefix:n,key:i.key}):xo(t)?u(So,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key}):u($e,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key,props:t.props,scrollable:r})});return u("div",{class:[`${n}-dropdown-menu`,r&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},r?u(qe,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?Ve({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),_o=_("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Qe(),_("dropdown-option",`
 position: relative;
 `,[R("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[R("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),_("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[R("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ne("disabled",[S("pending",`
 color: var(--n-option-text-color-hover);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),R("&::before","background-color: var(--n-option-color-hover);")]),S("active",`
 color: var(--n-option-text-color-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),R("&::before","background-color: var(--n-option-color-active);")]),S("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),S("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),S("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[I("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[S("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),I("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[S("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),I("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[S("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),_("dropdown-menu","pointer-events: all;")]),_("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),_("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),_("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),R(">",[_("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ne("scrollable",`
 padding: var(--n-padding);
 `),S("scrollable",[I("content",`
 padding: var(--n-padding);
 `)])]),Po={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ro=Object.keys(Ne),$o=Object.assign(Object.assign(Object.assign({},Ne),Po),Se.props),Io=z({name:"Dropdown",inheritAttrs:!1,props:$o,setup(e){const n=j(!1),r=eo(O(e,"show"),n),o=x(()=>{const{keyField:d,childrenField:g}=e;return no(e.options,{getKey(f){return f[d]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[g]}})}),i=x(()=>o.value.treeNodes),t=j(null),l=j(null),c=j(null),a=x(()=>{var d,g,f;return(f=(g=(d=t.value)!==null&&d!==void 0?d:l.value)!==null&&g!==void 0?g:c.value)!==null&&f!==void 0?f:null}),h=x(()=>o.value.getPath(a.value).keyPath),v=x(()=>o.value.getPath(e.value).keyPath),N=oe(()=>e.keyboard&&r.value);ho({keydown:{ArrowUp:{prevent:!0,handler:ie},ArrowRight:{prevent:!0,handler:Q},ArrowDown:{prevent:!0,handler:ae},ArrowLeft:{prevent:!0,handler:Z},Enter:{prevent:!0,handler:de},Escape:B}},N);const{mergedClsPrefixRef:P,inlineThemeDisabled:C}=ye(e),K=Se("Dropdown","-dropdown",_o,to,e,P);H(re,{labelFieldRef:O(e,"labelField"),childrenFieldRef:O(e,"childrenField"),renderLabelRef:O(e,"renderLabel"),renderIconRef:O(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:l,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:h,activeKeyPathRef:v,animatedRef:O(e,"animated"),mergedShowRef:r,nodePropsRef:O(e,"nodeProps"),renderOptionRef:O(e,"renderOption"),menuPropsRef:O(e,"menuProps"),doSelect:A,doUpdateShow:k}),fe(r,d=>{!e.animated&&!d&&m()});function A(d,g){const{onSelect:f}=e;f&&se(f,d,g)}function k(d){const{"onUpdate:show":g,onUpdateShow:f}=e;g&&se(g,d),f&&se(f,d),n.value=d}function m(){t.value=null,l.value=null,c.value=null}function B(){k(!1)}function Z(){U("left")}function Q(){U("right")}function ie(){U("up")}function ae(){U("down")}function de(){const d=Y();d!=null&&d.isLeaf&&r.value&&(A(d.key,d.rawNode),k(!1))}function Y(){var d;const{value:g}=o,{value:f}=a;return!g||f===null?null:(d=g.getNode(f))!==null&&d!==void 0?d:null}function U(d){const{value:g}=a,{value:{getFirstAvailableNode:f}}=o;let p=null;if(g===null){const $=f();$!==null&&(p=$.key)}else{const $=Y();if($){let s;switch(d){case"down":s=$.getNext();break;case"up":s=$.getPrev();break;case"right":s=$.getChild();break;case"left":s=$.getParent();break}s&&(p=s.key)}}p!==null&&(t.value=null,l.value=p)}const q=x(()=>{const{size:d,inverted:g}=e,{common:{cubicBezierEaseInOut:f},self:p}=K.value,{padding:$,dividerColor:s,borderRadius:y,optionOpacityDisabled:D,[E("optionIconSuffixWidth",d)]:F,[E("optionSuffixWidth",d)]:le,[E("optionIconPrefixWidth",d)]:M,[E("optionPrefixWidth",d)]:Ce,[E("fontSize",d)]:Ke,[E("optionHeight",d)]:Be,[E("optionIconSize",d)]:De}=p,w={"--n-bezier":f,"--n-font-size":Ke,"--n-padding":$,"--n-border-radius":y,"--n-option-height":Be,"--n-option-prefix-width":Ce,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":le,"--n-option-icon-suffix-width":F,"--n-option-icon-size":De,"--n-divider-color":s,"--n-option-opacity-disabled":D};return g?(w["--n-color"]=p.colorInverted,w["--n-option-color-hover"]=p.optionColorHoverInverted,w["--n-option-color-active"]=p.optionColorActiveInverted,w["--n-option-text-color"]=p.optionTextColorInverted,w["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,w["--n-option-text-color-active"]=p.optionTextColorActiveInverted,w["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,w["--n-prefix-color"]=p.prefixColorInverted,w["--n-suffix-color"]=p.suffixColorInverted,w["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(w["--n-color"]=p.color,w["--n-option-color-hover"]=p.optionColorHover,w["--n-option-color-active"]=p.optionColorActive,w["--n-option-text-color"]=p.optionTextColor,w["--n-option-text-color-hover"]=p.optionTextColorHover,w["--n-option-text-color-active"]=p.optionTextColorActive,w["--n-option-text-color-child-active"]=p.optionTextColorChildActive,w["--n-prefix-color"]=p.prefixColor,w["--n-suffix-color"]=p.suffixColor,w["--n-group-header-text-color"]=p.groupHeaderTextColor),w}),T=C?oo("dropdown",x(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:P,mergedTheme:K,tmNodes:i,mergedShow:r,handleAfterLeave:()=>{e.animated&&m()},doUpdateShow:k,cssVars:C?void 0:q,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(o,i,t,l,c)=>{var a;const{mergedClsPrefix:h,menuProps:v}=this;(a=this.onRender)===null||a===void 0||a.call(this);const N=(v==null?void 0:v(void 0,this.tmNodes.map(C=>C.rawNode)))||{},P={ref:bo(i),class:[o,`${h}-dropdown`,this.themeClass],clsPrefix:h,tmNodes:this.tmNodes,style:[...t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:c};return u(Ie,xe(this.$attrs,P,N))},{mergedTheme:n}=this,r={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(Je,Object.assign({},Ye(this.$props,Ro),r),{trigger:()=>{var o,i;return(i=(o=this.$slots).default)===null||i===void 0?void 0:i.call(o)}})}}),ge="https://mirror.ghproxy.com/",Co=z({__name:"Desktop",async setup(e,{expose:n}){n();let r,o;const i=([r,o]=me(()=>fetch("https://ad-api.nn.ci/v0/app/latest")),r=await r,o(),r),t=([r,o]=me(()=>i.json()),r=await r,o(),r),l=t.version,c=[{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${l}_aarch64.dmg`},{key:"mac_x64",label:"MacOS (Intel)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${l}_x64.dmg`},{key:"win_x64",label:"Windows (X64)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${l}_x64_en-US.msi`},{key:"win_arm64",label:"Windows (ARM64)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${l}_arm64-setup.exe`},{key:"linux",label:"Linux",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${l}_amd64.deb`}],a=navigator.platform.toLowerCase(),h=j("win_x64");a.includes("win")?h.value="win_x64":a.includes("linux")?h.value="linux":a.includes("mac")&&(h.value="mac_arm64"),console.log(h.value);let v={down:"Download",website:"Website"};const N=x(()=>{var m;return(m=c.find(B=>B.key===h.value))==null?void 0:m.label}),P=x(()=>c.map(m=>({...m,label:`${m.label} ${h.value===m.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(v={down:"下载",website:"官网"});function C(){var B;const m=(B=c.find(Z=>Z.key===h.value))==null?void 0:B.url;window.open(`${ge}${m}`,"_blank")}function K(m){h.value=m}function A(){window.open("https://ad.nn.ci/","_blank")}const k={proxy:ge,res:i,data:t,version:l,raw:c,platform:a,plat:h,get text(){return v},set text(m){v=m},fullPlat:N,options:P,down:C,handleSelect:K,openWebsite:A,get NButtonGroup(){return go},get NImage(){return fo},get NSpace(){return ro},get NButton(){return po},get NDropdown(){return Io}};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}});function Ko(e,n,r,o,i,t){return lo(),ao(o.NSpace,{align:"center",vertical:"",size:"large"},{default:L(()=>[W(o.NSpace,{class:"btn"},{default:L(()=>[W(o.NButton,{size:"large",type:"info",onClick:o.openWebsite,tertiary:""},{default:L(()=>[ue(ce(o.text.website),1)]),_:1}),W(o.NButtonGroup,null,{default:L(()=>[W(o.NDropdown,{trigger:"hover",options:o.options,onSelect:o.handleSelect,size:"large"},{default:L(()=>[W(o.NButton,{size:"large",type:"primary",tertiary:""},{default:L(()=>[ue("💻"+ce(o.fullPlat),1)]),_:1})]),_:1},8,["options"]),W(o.NButton,{size:"large",onClick:o.down,type:"info",secondary:""},{default:L(()=>[ue(ce(o.text.down),1)]),_:1})]),_:1})]),_:1}),W(o.NImage,{src:"/img/guide/desktop.png"})]),_:1})}const To=io(Co,[["render",Ko],["__scopeId","data-v-89e2379f"],["__file","Desktop.vue"]]),jo="/img/desktop/mianbaoduo.png",Fo="/img/desktop/llemonsqueezy.png";export{To as D,Fo as _,jo as a};
