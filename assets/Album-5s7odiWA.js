import{v as l,j as z,B as W,C as Z,k as y,ap as J,d as v,h as k,u as Q,l as P,G as X,m as S,n as Y,q as w,aH as $,V as ee,O as x,a6 as re,Z as oe,_ as te,$ as p,o as g,g as a,a as s,a0 as B,e as T,f as m,a1 as C,c as le,aI as ne,a2 as ae}from"./app-BYVCkMFV.js";import{B as de}from"./Button-B9_OsJsT.js";import{N as se}from"./Input-BPd0b8cx.js";import{N as ie}from"./Alert-CJ91sK0L.js";const ce=l([z("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[l("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[l("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),l("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[l("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),y("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[l("tr",[l("&:last-child",[l("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),y("single-line",[l("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),l("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),y("single-column",[l("tr",[l("&:not(:last-child)",[l("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),y("striped",[l("tr:nth-of-type(even)",[l("td","background-color: var(--n-td-color-striped)")])]),J("bottom-bordered",[l("tr",[l("&:last-child",[l("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),W(z("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[l("th",`
 background-color: var(--n-th-color-modal);
 `),l("td",`
 background-color: var(--n-td-color-modal);
 `)])),Z(z("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[l("th",`
 background-color: var(--n-th-color-popover);
 `),l("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),be=Object.assign(Object.assign({},P.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),ue=v({name:"Table",props:be,setup(i){const{mergedClsPrefixRef:r,inlineThemeDisabled:h,mergedRtlRef:e}=Q(i),_=P("Table","-table",ce,$,i,r),N=X("Table",e,r),u=S(()=>{const{size:b}=i,{self:{borderColor:c,tdColor:f,tdColorModal:o,tdColorPopover:d,thColor:t,thColorModal:A,thColorPopover:R,thTextColor:I,tdTextColor:V,borderRadius:M,thFontWeight:U,lineHeight:j,borderColorModal:E,borderColorPopover:L,tdColorStriped:O,tdColorStripedModal:D,tdColorStripedPopover:F,[w("fontSize",b)]:H,[w("tdPadding",b)]:G,[w("thPadding",b)]:q},common:{cubicBezierEaseInOut:K}}=_.value;return{"--n-bezier":K,"--n-td-color":f,"--n-td-color-modal":o,"--n-td-color-popover":d,"--n-td-text-color":V,"--n-border-color":c,"--n-border-color-modal":E,"--n-border-color-popover":L,"--n-border-radius":M,"--n-font-size":H,"--n-th-color":t,"--n-th-color-modal":A,"--n-th-color-popover":R,"--n-th-font-weight":U,"--n-th-text-color":I,"--n-line-height":j,"--n-td-padding":G,"--n-th-padding":q,"--n-td-color-striped":O,"--n-td-color-striped-modal":D,"--n-td-color-striped-popover":F}}),n=h?Y("table",S(()=>i.size[0]),u,i):void 0;return{rtlEnabled:N,mergedClsPrefix:r,cssVars:h?void 0:u,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var i;const{mergedClsPrefix:r}=this;return(i=this.onRender)===null||i===void 0||i.call(this),k("table",{class:[`${r}-table`,this.themeClass,{[`${r}-table--rtl`]:this.rtlEnabled,[`${r}-table--bottom-bordered`]:this.bottomBordered,[`${r}-table--bordered`]:this.bordered,[`${r}-table--single-line`]:this.singleLine,[`${r}-table--single-column`]:this.singleColumn,[`${r}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),ge=v({name:"Tbody",render(){return k("tbody",null,this.$slots)}}),me=v({name:"Td",render(){return k("td",null,this.$slots)}}),ve=v({name:"Th",render(){return k("th",null,this.$slots)}}),he=v({name:"Thead",render(){return k("thead",null,this.$slots)}}),fe=v({name:"Tr",render(){return k("tr",null,this.$slots)}}),pe=v({__name:"Album",setup(i,{expose:r}){r();const h=new URL(window.location.href),e=ee({client_id:"",client_secret:"",access_token:h.searchParams.get("access_token")||"",refresh_token:""}),_=x("access_token"),N=x(),u=x();let n=x([]);const b=async()=>{const d=new URLSearchParams;d.append("client_id",e.client_id),d.append("client_secret",e.client_secret),d.append("grant_type","refresh_token"),d.append("refresh_token",e.refresh_token),fetch("https://www.googleapis.com/oauth2/v4/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:d}).then(t=>t.json()).then(t=>{console.log(t),N.value=t,(typeof t.error>"u"||!t.error)&&(e.access_token=t.access_token,typeof t.access_token<"u"&&t.access_token&&c(null))})},c=async d=>{d==null&&(d=""),fetch(`https://photoslibrary.googleapis.com/v1/albums?pageToken=${d}&pageSize=50`,{method:"GET",headers:{Authorization:`Bearer ${e.access_token}`}}).then(t=>t.json()).then(t=>{console.log(t),u.value=t,(typeof t.error>"u"||!t.error)&&(n.value=n.value.concat(t.albums),console.log(n),typeof t.nextPageToken<"u"&&t.nextPageToken&&c(t.nextPageToken))})};e.access_token&&c(null);function f(){n.value=[],_.value=="refresh_token"?b():c(null)}const o={url:h,data:e,way:_,token:N,album:u,get albums(){return n},set albums(d){n=d},getToken:b,getAlbum:c,fetchAlbum:f,get NAlert(){return ie},get NSpace(){return oe},get NTable(){return ue},get NInput(){return se},get NButton(){return de},get NSelect(){return re},get NThead(){return he},get NTbody(){return ge},get NTh(){return ve},get NTd(){return me},get NTr(){return fe}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function ke(i,r,h,e,_,N){return g(),p(e.NSpace,{vertical:"",size:"large"},{default:a(()=>{var u,n,b,c,f;return[s(e.NSelect,{value:e.way,"onUpdate:value":r[0]||(r[0]=o=>e.way=o),size:"large",options:[{label:"Access token",value:"access_token"},{label:"Client & Refresh token",value:"refresh_token"}]},null,8,["value"]),e.way=="refresh_token"?(g(),p(e.NSpace,{key:0,vertical:"",size:"large"},{default:a(()=>[r[5]||(r[5]=T("h4",null,"client_id",-1)),s(e.NInput,{size:"large",value:e.data.client_id,"onUpdate:value":r[1]||(r[1]=o=>e.data.client_id=o)},null,8,["value"]),r[6]||(r[6]=T("h4",null,"client_secret",-1)),s(e.NInput,{size:"large",value:e.data.client_secret,"onUpdate:value":r[2]||(r[2]=o=>e.data.client_secret=o)},null,8,["value"]),r[7]||(r[7]=T("h4",null,"refresh_token",-1)),s(e.NInput,{size:"large",value:e.data.refresh_token,"onUpdate:value":r[3]||(r[3]=o=>e.data.refresh_token=o)},null,8,["value"])]),_:1})):(g(),p(e.NSpace,{key:1,vertical:"",size:"large"},{default:a(()=>[r[8]||(r[8]=T("h4",null,"access_token",-1)),s(e.NInput,{size:"large",value:e.data.access_token,"onUpdate:value":r[4]||(r[4]=o=>e.data.access_token=o)},null,8,["value"])]),_:1})),s(e.NButton,{size:"large",type:"primary",block:"",onClick:e.fetchAlbum},{default:a(()=>r[9]||(r[9]=[m("Fetch Album")])),_:1}),(u=e.token)!=null&&u.error||(n=e.token)!=null&&n.error_description?(g(),p(e.NAlert,{key:2,title:(b=e.token)==null?void 0:b.error,type:"error"},{default:a(()=>{var o;return[m(C((o=e.token)==null?void 0:o.error_description),1)]}),_:1},8,["title"])):B("",!0),(c=e.album)!=null&&c.error?(g(),p(e.NAlert,{key:3,title:(f=e.album)==null?void 0:f.error.status,type:"error"},{default:a(()=>{var o;return[m(C((o=e.album)==null?void 0:o.error.message),1)]}),_:1},8,["title"])):B("",!0),r[12]||(r[12]=T("h4",null,"Albums",-1)),s(e.NTable,{size:"large"},{default:a(()=>[s(e.NThead,null,{default:a(()=>[s(e.NTr,null,{default:a(()=>[s(e.NTh,null,{default:a(()=>r[10]||(r[10]=[m("Album Title")])),_:1}),s(e.NTh,null,{default:a(()=>r[11]||(r[11]=[m("Album ID")])),_:1})]),_:1})]),_:1}),s(e.NTbody,null,{default:a(()=>[(g(!0),le(ae,null,ne(e.albums,(o,d)=>(g(),p(e.NTr,null,{default:a(()=>[s(e.NTd,null,{default:a(()=>[m(C(o.title),1)]),_:2},1024),s(e.NTd,null,{default:a(()=>[m(C(o.id),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]}),_:1})}const xe=te(pe,[["render",ke],["__scopeId","data-v-1f1deabd"],["__file","Album.vue"]]);export{xe as A};
