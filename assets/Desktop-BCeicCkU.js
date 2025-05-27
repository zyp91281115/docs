import{j as Ae,aM as Te,aN as je,am as Fe,aG as Y,aL as Me,ad as ee,a5 as pe,r as j,p as N,ap as ne,q as k,s as R,K,d as D,h as s,y as ke,al as Le,X as Ee,aF as E,aa as fe,aO as te,a7 as H,x as Se,bd as He,be as We,bf as Ge,aU as Ue,a$ as _e,B as x,ag as oe,bg as ve,F as qe,v as Ve,bh as Xe,bi as Ze,aZ as Je,a_ as Qe,b1 as Ye,aW as eo,bj as oo,af as no,ae as O,bk as to,z as Ne,bl as ro,G as L,C as io,a3 as ue,bm as Pe,bn as be,c as ao,o as lo,w as U,a as q,u as T,N as me,e as we,t as ge,_ as so}from"./app-2EBey5uJ.js";import{b as uo,B as ye}from"./Button-B-SUXXFn.js";import{N as co}from"./Icon-CcBAIvgb.js";import{C as po}from"./ChevronRight-W2ymPyQa.js";import{N as fo}from"./Image-Bo8yuY4z.js";function ho(e={},o){const t=Ae({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,n=a=>{switch(a.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(y=>{if(y!==a.key)return;const v=r[y];if(typeof v=="function")v(a);else{const{stop:S=!1,prevent:P=!1}=v;S&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},u=a=>{switch(a.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}i!==void 0&&Object.keys(i).forEach(y=>{if(y!==a.key)return;const v=i[y];if(typeof v=="function")v(a);else{const{stop:S=!1,prevent:P=!1}=v;S&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},c=()=>{(o===void 0||o.value)&&(ee("keydown",document,n),ee("keyup",document,u)),o!==void 0&&pe(o,a=>{a?(ee("keydown",document,n),ee("keyup",document,u)):(Y("keydown",document,n),Y("keyup",document,u))})};return Te()?(je(c),Fe(()=>{(o===void 0||o.value)&&(Y("keydown",document,n),Y("keyup",document,u))})):c(),Me(t)}function vo(e,o,t){const r=j(e.value);let i=null;return pe(e,n=>{i!==null&&window.clearTimeout(i),n===!0?t&&!t.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function bo(e){return o=>{o?e.value=o.$el:e.value=null}}const h="0!important",Re="-1px!important";function V(e){return k(`${e}-type`,[R("& +",[N("button",{},[k(`${e}-type`,[K("border",{borderLeftWidth:h}),K("state-border",{left:Re})])])])])}function X(e){return k(`${e}-type`,[R("& +",[N("button",[k(`${e}-type`,[K("border",{borderTopWidth:h}),K("state-border",{top:Re})])])])])}const mo=N("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[N("button",[R("&:first-child:not(:last-child)",`
 margin-right: ${h};
 border-top-right-radius: ${h};
 border-bottom-right-radius: ${h};
 `),R("&:last-child:not(:first-child)",`
 margin-left: ${h};
 border-top-left-radius: ${h};
 border-bottom-left-radius: ${h};
 `),R("&:not(:first-child):not(:last-child)",`
 margin-left: ${h};
 margin-right: ${h};
 border-radius: ${h};
 `),V("default"),k("ghost",[V("primary"),V("info"),V("success"),V("warning"),V("error")])])])]),k("vertical",{flexDirection:"column"},[N("button",[R("&:first-child:not(:last-child)",`
 margin-bottom: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-bottom-left-radius: ${h};
 border-bottom-right-radius: ${h};
 `),R("&:last-child:not(:first-child)",`
 margin-top: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-top-left-radius: ${h};
 border-top-right-radius: ${h};
 `),R("&:not(:first-child):not(:last-child)",`
 margin: ${h};
 border-radius: ${h};
 `),X("default"),k("ghost",[X("primary"),X("info"),X("success"),X("warning"),X("error")])])])]),wo={size:{type:String,default:void 0},vertical:Boolean},go=D({name:"ButtonGroup",props:wo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=ke(e);return Le("-button-group",mo,o),E(uo,e),{rtlEnabled:Ee("ButtonGroup",t,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),he=fe("n-dropdown-menu"),re=fe("n-dropdown"),xe=fe("n-dropdown-option"),$e=D({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),yo=D({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=H(he),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:i,renderOptionRef:n}=H(re);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:i,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:r,nodeProps:i,renderLabel:n,renderOption:u}=this,{rawNode:c}=this.tmNode,a=s("div",Object.assign({class:`${o}-dropdown-option`},i==null?void 0:i(c)),s("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},te(c.icon)),s("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(c):te((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),s("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return u?u({node:a,option:c}):a}});function ce(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function xo(e){return e.type==="group"}function Ie(e){return e.type==="divider"}function ko(e){return e.type==="render"}const Ke=D({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=H(re),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:n,activeKeyPathRef:u,animatedRef:c,mergedShowRef:a,renderLabelRef:y,renderIconRef:v,labelFieldRef:S,childrenFieldRef:P,renderOptionRef:C,nodePropsRef:m,menuPropsRef:$}=o,_=H(xe,null),B=H(he),Z=H(_e),ie=x(()=>e.tmNode.rawNode),J=x(()=>{const{value:l}=P;return ce(e.tmNode.rawNode,l)}),ae=x(()=>{const{disabled:l}=e.tmNode;return l}),de=x(()=>{if(!J.value)return!1;const{key:l,disabled:g}=e.tmNode;if(g)return!1;const{value:z}=t,{value:F}=r,{value:se}=i,{value:M}=n;return z!==null?M.includes(l):F!==null?M.includes(l)&&M[M.length-1]!==l:se!==null?M.includes(l):!1}),le=x(()=>r.value===null&&!c.value),Q=vo(de,300,le),W=x(()=>!!(_!=null&&_.enteringSubmenuRef.value)),G=j(!1);E(xe,{enteringSubmenuRef:G});function A(){G.value=!0}function d(){G.value=!1}function w(){const{parentKey:l,tmNode:g}=e;g.disabled||a.value&&(i.value=l,r.value=null,t.value=g.key)}function f(){const{tmNode:l}=e;l.disabled||a.value&&t.value!==l.key&&w()}function p(l){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:g}=l;g&&!ve({target:g},"dropdownOption")&&!ve({target:g},"scrollbarRail")&&(t.value=null)}function I(){const{value:l}=J,{tmNode:g}=e;a.value&&!l&&!g.disabled&&(o.doSelect(g.key,g.rawNode),o.doUpdateShow(!1))}return{labelField:S,renderLabel:y,renderIcon:v,siblingHasIcon:B.showIconRef,siblingHasSubmenu:B.hasSubmenuRef,menuProps:$,popoverBody:Z,animated:c,mergedShowSubmenu:x(()=>Q.value&&!W.value),rawNode:ie,hasSubmenu:J,pending:oe(()=>{const{value:l}=n,{key:g}=e.tmNode;return l.includes(g)}),childActive:oe(()=>{const{value:l}=u,{key:g}=e.tmNode,z=l.findIndex(F=>g===F);return z===-1?!1:z<l.length-1}),active:oe(()=>{const{value:l}=u,{key:g}=e.tmNode,z=l.findIndex(F=>g===F);return z===-1?!1:z===l.length-1}),mergedDisabled:ae,renderOption:C,nodeProps:m,handleClick:I,handleMouseMove:f,handleMouseEnter:w,handleMouseLeave:p,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:d}},render(){var e,o;const{animated:t,rawNode:r,mergedShowSubmenu:i,clsPrefix:n,siblingHasIcon:u,siblingHasSubmenu:c,renderLabel:a,renderIcon:y,renderOption:v,nodeProps:S,props:P,scrollable:C}=this;let m=null;if(i){const Z=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);m=s(Ce,Object.assign({},Z,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const $={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},_=S==null?void 0:S(r),B=s("div",Object.assign({class:[`${n}-dropdown-option`,_==null?void 0:_.class],"data-dropdown-option":!0},_),s("div",Se($,P),[s("div",{class:[`${n}-dropdown-option-body__prefix`,u&&`${n}-dropdown-option-body__prefix--show-icon`]},[y?y(r):te(r.icon)]),s("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},a?a(r):te((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),s("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,c&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(co,null,{default:()=>s(po,null)}):null)]),this.hasSubmenu?s(He,null,{default:()=>[s(We,null,{default:()=>s("div",{class:`${n}-dropdown-offset-container`},s(Ge,{show:this.mergedShowSubmenu,placement:this.placement,to:C&&this.popoverBody||void 0,teleportDisabled:!C},{default:()=>s("div",{class:`${n}-dropdown-menu-wrapper`},t?s(Ue,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>m}):m)}))})]}):null);return v?v({node:B,option:r}):B}}),So=D({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:r}=e;return s(qe,null,s(yo,{clsPrefix:t,tmNode:e,key:e.key}),r==null?void 0:r.map(i=>{const{rawNode:n}=i;return n.show===!1?null:Ie(n)?s($e,{clsPrefix:t,key:i.key}):i.isGroup?(Ve("dropdown","`group` node is not allowed to be put in `group` node."),null):s(Ke,{clsPrefix:t,tmNode:i,parentKey:o,key:i.key})}))}}),_o=D({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return s("div",o,[e==null?void 0:e()])}}),Ce=D({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=H(re);E(he,{showIconRef:x(()=>{const i=o.value;return e.tmNodes.some(n=>{var u;if(n.isGroup)return(u=n.children)===null||u===void 0?void 0:u.some(({rawNode:a})=>i?i(a):a.icon);const{rawNode:c}=n;return i?i(c):c.icon})}),hasSubmenuRef:x(()=>{const{value:i}=t;return e.tmNodes.some(n=>{var u;if(n.isGroup)return(u=n.children)===null||u===void 0?void 0:u.some(({rawNode:a})=>ce(a,i));const{rawNode:c}=n;return ce(c,i)})})});const r=j(null);return E(Je,null),E(Qe,null),E(_e,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,r=this.tmNodes.map(i=>{const{rawNode:n}=i;return n.show===!1?null:ko(n)?s(_o,{tmNode:i,key:i.key}):Ie(n)?s($e,{clsPrefix:o,key:i.key}):xo(n)?s(So,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key}):s(Ke,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key,props:n.props,scrollable:t})});return s("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?s(Xe,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Ze({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),No=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ye(),N("dropdown-option",`
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
 `)]),N("dropdown-option-body",`
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
 `),ne("disabled",[k("pending",`
 color: var(--n-option-text-color-hover);
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),R("&::before","background-color: var(--n-option-color-hover);")]),k("active",`
 color: var(--n-option-text-color-active);
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),R("&::before","background-color: var(--n-option-color-active);")]),k("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),k("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[K("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[k("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),K("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[k("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),K("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),K("suffix",`
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
 `,[k("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),N("dropdown-menu","pointer-events: all;")]),N("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),N("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),N("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),R(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ne("scrollable",`
 padding: var(--n-padding);
 `),k("scrollable",[K("content",`
 padding: var(--n-padding);
 `)])]),Po={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ro=Object.keys(Pe),$o=Object.assign(Object.assign(Object.assign({},Pe),Po),Ne.props),Io=D({name:"Dropdown",inheritAttrs:!1,props:$o,setup(e){const o=j(!1),t=no(O(e,"show"),o),r=x(()=>{const{keyField:d,childrenField:w}=e;return to(e.options,{getKey(f){return f[d]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[w]}})}),i=x(()=>r.value.treeNodes),n=j(null),u=j(null),c=j(null),a=x(()=>{var d,w,f;return(f=(w=(d=n.value)!==null&&d!==void 0?d:u.value)!==null&&w!==void 0?w:c.value)!==null&&f!==void 0?f:null}),y=x(()=>r.value.getPath(a.value).keyPath),v=x(()=>r.value.getPath(e.value).keyPath),S=oe(()=>e.keyboard&&t.value);ho({keydown:{ArrowUp:{prevent:!0,handler:ae},ArrowRight:{prevent:!0,handler:J},ArrowDown:{prevent:!0,handler:de},ArrowLeft:{prevent:!0,handler:ie},Enter:{prevent:!0,handler:le},Escape:Z}},S);const{mergedClsPrefixRef:P,inlineThemeDisabled:C}=ke(e),m=Ne("Dropdown","-dropdown",No,ro,e,P);E(re,{labelFieldRef:O(e,"labelField"),childrenFieldRef:O(e,"childrenField"),renderLabelRef:O(e,"renderLabel"),renderIconRef:O(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:u,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:y,activeKeyPathRef:v,animatedRef:O(e,"animated"),mergedShowRef:t,nodePropsRef:O(e,"nodeProps"),renderOptionRef:O(e,"renderOption"),menuPropsRef:O(e,"menuProps"),doSelect:$,doUpdateShow:_}),pe(t,d=>{!e.animated&&!d&&B()});function $(d,w){const{onSelect:f}=e;f&&ue(f,d,w)}function _(d){const{"onUpdate:show":w,onUpdateShow:f}=e;w&&ue(w,d),f&&ue(f,d),o.value=d}function B(){n.value=null,u.value=null,c.value=null}function Z(){_(!1)}function ie(){W("left")}function J(){W("right")}function ae(){W("up")}function de(){W("down")}function le(){const d=Q();d!=null&&d.isLeaf&&t.value&&($(d.key,d.rawNode),_(!1))}function Q(){var d;const{value:w}=r,{value:f}=a;return!w||f===null?null:(d=w.getNode(f))!==null&&d!==void 0?d:null}function W(d){const{value:w}=a,{value:{getFirstAvailableNode:f}}=r;let p=null;if(w===null){const I=f();I!==null&&(p=I.key)}else{const I=Q();if(I){let l;switch(d){case"down":l=I.getNext();break;case"up":l=I.getPrev();break;case"right":l=I.getChild();break;case"left":l=I.getParent();break}l&&(p=l.key)}}p!==null&&(n.value=null,u.value=p)}const G=x(()=>{const{size:d,inverted:w}=e,{common:{cubicBezierEaseInOut:f},self:p}=m.value,{padding:I,dividerColor:l,borderRadius:g,optionOpacityDisabled:z,[L("optionIconSuffixWidth",d)]:F,[L("optionSuffixWidth",d)]:se,[L("optionIconPrefixWidth",d)]:M,[L("optionPrefixWidth",d)]:ze,[L("fontSize",d)]:Oe,[L("optionHeight",d)]:De,[L("optionIconSize",d)]:Be}=p,b={"--n-bezier":f,"--n-font-size":Oe,"--n-padding":I,"--n-border-radius":g,"--n-option-height":De,"--n-option-prefix-width":ze,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":se,"--n-option-icon-suffix-width":F,"--n-option-icon-size":Be,"--n-divider-color":l,"--n-option-opacity-disabled":z};return w?(b["--n-color"]=p.colorInverted,b["--n-option-color-hover"]=p.optionColorHoverInverted,b["--n-option-color-active"]=p.optionColorActiveInverted,b["--n-option-text-color"]=p.optionTextColorInverted,b["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,b["--n-option-text-color-active"]=p.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,b["--n-prefix-color"]=p.prefixColorInverted,b["--n-suffix-color"]=p.suffixColorInverted,b["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(b["--n-color"]=p.color,b["--n-option-color-hover"]=p.optionColorHover,b["--n-option-color-active"]=p.optionColorActive,b["--n-option-text-color"]=p.optionTextColor,b["--n-option-text-color-hover"]=p.optionTextColorHover,b["--n-option-text-color-active"]=p.optionTextColorActive,b["--n-option-text-color-child-active"]=p.optionTextColorChildActive,b["--n-prefix-color"]=p.prefixColor,b["--n-suffix-color"]=p.suffixColor,b["--n-group-header-text-color"]=p.groupHeaderTextColor),b}),A=C?io("dropdown",x(()=>`${e.size[0]}${e.inverted?"i":""}`),G,e):void 0;return{mergedClsPrefix:P,mergedTheme:m,tmNodes:i,mergedShow:t,handleAfterLeave:()=>{e.animated&&B()},doUpdateShow:_,cssVars:C?void 0:G,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){const e=(r,i,n,u,c)=>{var a;const{mergedClsPrefix:y,menuProps:v}=this;(a=this.onRender)===null||a===void 0||a.call(this);const S=(v==null?void 0:v(void 0,this.tmNodes.map(C=>C.rawNode)))||{},P={ref:bo(i),class:[r,`${y}-dropdown`,this.themeClass],clsPrefix:y,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:u,onMouseleave:c};return s(Ce,Se(this.$attrs,P,S))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(oo,Object.assign({},eo(this.$props,Ro),t),{trigger:()=>{var r,i;return(i=(r=this.$slots).default)===null||i===void 0?void 0:i.call(r)}})}}),To="/img/desktop/key_mbd.png",jo="/img/desktop/logIn_mbd.png",Fo="/img/desktop/key_lemonsqueezy.png",Mo="/img/desktop/login_lemonsqueezy.png",Lo="/img/desktop/mianbaoduo.png",Eo="/img/desktop/lemonsqueezy.png",Ko="https://ghfast.top/",Co=D({__name:"Desktop",async setup(e){let o,t;const r=([o,t]=be(()=>fetch("https://ad-api.nn.ci/v0/app/latest")),o=await o,t(),o),n=([o,t]=be(()=>r.json()),o=await o,t(),o).version,u=[{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_aarch64.dmg`},{key:"mac_x64",label:"MacOS (Intel)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_x64.dmg`},{key:"win_x64",label:"Windows (X64)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_x64_en-US.msi`},{key:"win_arm64",label:"Windows (ARM64)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_arm64-setup.exe`},{key:"linux",label:"Linux",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${n}_amd64.deb`}],c=navigator.platform.toLowerCase(),a=j("win_x64");c.includes("win")?a.value="win_x64":c.includes("linux")?a.value="linux":c.includes("mac")&&(a.value="mac_arm64"),console.log(a.value);let y={down:"Download"};const v=x(()=>{var m;return(m=u.find($=>$.key===a.value))==null?void 0:m.label}),S=x(()=>u.map(m=>({...m,label:`${m.label} ${a.value===m.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(y={down:"下载"});function P(){var $;const m=($=u.find(_=>_.key===a.value))==null?void 0:$.url;window.open(`${Ko}${m}`,"_blank")}function C(m){a.value=m}return(m,$)=>(lo(),ao(T(me),{align:"center",vertical:"",size:"large"},{default:U(()=>[q(T(me),{class:"btn"},{default:U(()=>[q(T(go),null,{default:U(()=>[q(T(Io),{trigger:"hover",options:S.value,onSelect:C,size:"large"},{default:U(()=>[q(T(ye),{size:"large",type:"primary",tertiary:""},{default:U(()=>[we("💻"+ge(v.value),1)]),_:1})]),_:1},8,["options"]),q(T(ye),{size:"large",onClick:P,type:"info",secondary:""},{default:U(()=>[we(ge(T(y).down),1)]),_:1})]),_:1})]),_:1}),q(T(fo),{src:"/img/guide/desktop.png"})]),_:1}))}}),Ho=so(Co,[["__scopeId","data-v-6337a610"]]);export{Ho as D,Fo as _,Mo as a,To as b,jo as c,Eo as d,Lo as e};
