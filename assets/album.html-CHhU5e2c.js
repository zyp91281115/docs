import{v as l,j as z,B as W,C as Y,k as T,an as Q,d as p,h as y,u as X,l as w,G as $,m as P,n as ee,q as A,aO as re,aa as oe,O as x,ah as te,ac as le,_ as B,ad as k,o as g,g as a,a as d,ae as S,e as N,f as h,Y as C,c as R,aN as ne,af as ae,r as de}from"./app-K34Aos0E.js";import{B as ie}from"./Button-CkIOIhC-.js";import{N as se}from"./Input-04jHTtK1.js";import{N as ce}from"./Alert-CKlm5BJY.js";import"./browser-CYFPQBQD.js";const ue=l([z("table",`
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
 `)]),T("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[l("tr",[l("&:last-child",[l("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),T("single-line",[l("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),l("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),T("single-column",[l("tr",[l("&:not(:last-child)",[l("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),T("striped",[l("tr:nth-of-type(even)",[l("td","background-color: var(--n-td-color-striped)")])]),Q("bottom-bordered",[l("tr",[l("&:last-child",[l("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),W(z("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[l("th",`
 background-color: var(--n-th-color-modal);
 `),l("td",`
 background-color: var(--n-td-color-modal);
 `)])),Y(z("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[l("th",`
 background-color: var(--n-th-color-popover);
 `),l("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),be=Object.assign(Object.assign({},w.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),me=p({name:"Table",props:be,setup(s){const{mergedClsPrefixRef:r,inlineThemeDisabled:c,mergedRtlRef:e}=X(s),v=w("Table","-table",ue,re,s,r),f=$("Table",e,r),u=P(()=>{const{size:m}=s,{self:{borderColor:b,tdColor:_,tdColorModal:o,tdColorPopover:i,thColor:t,thColorModal:I,thColorPopover:L,thTextColor:G,tdTextColor:D,borderRadius:O,thFontWeight:U,lineHeight:j,borderColorModal:M,borderColorPopover:V,tdColorStriped:E,tdColorStripedModal:H,tdColorStripedPopover:J,[A("fontSize",m)]:F,[A("tdPadding",m)]:Z,[A("thPadding",m)]:q},common:{cubicBezierEaseInOut:K}}=v.value;return{"--n-bezier":K,"--n-td-color":_,"--n-td-color-modal":o,"--n-td-color-popover":i,"--n-td-text-color":D,"--n-border-color":b,"--n-border-color-modal":M,"--n-border-color-popover":V,"--n-border-radius":O,"--n-font-size":F,"--n-th-color":t,"--n-th-color-modal":I,"--n-th-color-popover":L,"--n-th-font-weight":U,"--n-th-text-color":G,"--n-line-height":j,"--n-td-padding":Z,"--n-th-padding":q,"--n-td-color-striped":E,"--n-td-color-striped-modal":H,"--n-td-color-striped-popover":J}}),n=c?ee("table",P(()=>s.size[0]),u,s):void 0;return{rtlEnabled:f,mergedClsPrefix:r,cssVars:c?void 0:u,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var s;const{mergedClsPrefix:r}=this;return(s=this.onRender)===null||s===void 0||s.call(this),y("table",{class:[`${r}-table`,this.themeClass,{[`${r}-table--rtl`]:this.rtlEnabled,[`${r}-table--bottom-bordered`]:this.bottomBordered,[`${r}-table--bordered`]:this.bordered,[`${r}-table--single-line`]:this.singleLine,[`${r}-table--single-column`]:this.singleColumn,[`${r}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),ge=p({name:"Tbody",render(){return y("tbody",null,this.$slots)}}),pe=p({name:"Td",render(){return y("td",null,this.$slots)}}),he=p({name:"Th",render(){return y("th",null,this.$slots)}}),ve=p({name:"Thead",render(){return y("thead",null,this.$slots)}}),fe=p({name:"Tr",render(){return y("tr",null,this.$slots)}}),_e=p({__name:"Album",setup(s,{expose:r}){r();const c=new URL(window.location.href),e=oe({client_id:"",client_secret:"",access_token:c.searchParams.get("access_token")||"",refresh_token:""}),v=x("access_token"),f=x(),u=x();let n=x([]);const m=async()=>{const i=new URLSearchParams;i.append("client_id",e.client_id),i.append("client_secret",e.client_secret),i.append("grant_type","refresh_token"),i.append("refresh_token",e.refresh_token),fetch("https://www.googleapis.com/oauth2/v4/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:i}).then(t=>t.json()).then(t=>{console.log(t),f.value=t,(typeof t.error>"u"||!t.error)&&(e.access_token=t.access_token,typeof t.access_token<"u"&&t.access_token&&b(null))})},b=async i=>{i==null&&(i=""),fetch(`https://photoslibrary.googleapis.com/v1/albums?pageToken=${i}&pageSize=50`,{method:"GET",headers:{Authorization:`Bearer ${e.access_token}`}}).then(t=>t.json()).then(t=>{console.log(t),u.value=t,(typeof t.error>"u"||!t.error)&&(n.value=n.value.concat(t.albums),console.log(n),typeof t.nextPageToken<"u"&&t.nextPageToken&&b(t.nextPageToken))})};e.access_token&&b(null);function _(){n.value=[],v.value=="refresh_token"?m():b(null)}const o={url:c,data:e,way:v,token:f,album:u,get albums(){return n},set albums(i){n=i},getToken:m,getAlbum:b,fetchAlbum:_,get NAlert(){return ce},get NSpace(){return le},get NTable(){return me},get NInput(){return se},get NButton(){return ie},get NSelect(){return te},get NThead(){return ve},get NTbody(){return ge},get NTh(){return he},get NTd(){return pe},get NTr(){return fe}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function ke(s,r,c,e,v,f){return g(),k(e.NSpace,{vertical:"",size:"large"},{default:a(()=>{var u,n,m,b,_;return[d(e.NSelect,{value:e.way,"onUpdate:value":r[0]||(r[0]=o=>e.way=o),size:"large",options:[{label:"Access token",value:"access_token"},{label:"Client & Refresh token",value:"refresh_token"}]},null,8,["value"]),e.way=="refresh_token"?(g(),k(e.NSpace,{key:0,vertical:"",size:"large"},{default:a(()=>[r[5]||(r[5]=N("h4",null,"client_id",-1)),d(e.NInput,{size:"large",value:e.data.client_id,"onUpdate:value":r[1]||(r[1]=o=>e.data.client_id=o)},null,8,["value"]),r[6]||(r[6]=N("h4",null,"client_secret",-1)),d(e.NInput,{size:"large",value:e.data.client_secret,"onUpdate:value":r[2]||(r[2]=o=>e.data.client_secret=o)},null,8,["value"]),r[7]||(r[7]=N("h4",null,"refresh_token",-1)),d(e.NInput,{size:"large",value:e.data.refresh_token,"onUpdate:value":r[3]||(r[3]=o=>e.data.refresh_token=o)},null,8,["value"])]),_:1})):(g(),k(e.NSpace,{key:1,vertical:"",size:"large"},{default:a(()=>[r[8]||(r[8]=N("h4",null,"access_token",-1)),d(e.NInput,{size:"large",value:e.data.access_token,"onUpdate:value":r[4]||(r[4]=o=>e.data.access_token=o)},null,8,["value"])]),_:1})),d(e.NButton,{size:"large",type:"primary",block:"",onClick:e.fetchAlbum},{default:a(()=>r[9]||(r[9]=[h("Fetch Album")])),_:1}),(u=e.token)!=null&&u.error||(n=e.token)!=null&&n.error_description?(g(),k(e.NAlert,{key:2,title:(m=e.token)==null?void 0:m.error,type:"error"},{default:a(()=>{var o;return[h(C((o=e.token)==null?void 0:o.error_description),1)]}),_:1},8,["title"])):S("",!0),(b=e.album)!=null&&b.error?(g(),k(e.NAlert,{key:3,title:(_=e.album)==null?void 0:_.error.status,type:"error"},{default:a(()=>{var o;return[h(C((o=e.album)==null?void 0:o.error.message),1)]}),_:1},8,["title"])):S("",!0),r[12]||(r[12]=N("h4",null,"Albums",-1)),d(e.NTable,{size:"large"},{default:a(()=>[d(e.NThead,null,{default:a(()=>[d(e.NTr,null,{default:a(()=>[d(e.NTh,null,{default:a(()=>r[10]||(r[10]=[h("Album Title")])),_:1}),d(e.NTh,null,{default:a(()=>r[11]||(r[11]=[h("Album ID")])),_:1})]),_:1})]),_:1}),d(e.NTbody,null,{default:a(()=>[(g(!0),R(ae,null,ne(e.albums,(o,i)=>(g(),k(e.NTr,null,{default:a(()=>[d(e.NTd,null,{default:a(()=>[h(C(o.title),1)]),_:2},1024),d(e.NTd,null,{default:a(()=>[h(C(o.id),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]}),_:1})}const ye=B(_e,[["render",ke],["__scopeId","data-v-1f1deabd"],["__file","Album.vue"]]),Ne=p({__name:"album.html",setup(s,{expose:r}){r();const c={get Album(){return ye}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}});function Te(s,r,c,e,v,f){const u=de("NaiveClient");return g(),R("div",null,[d(u,null,{default:a(()=>[d(e.Album)]),_:1})])}const Se=B(Ne,[["render",Te],["__file","album.html.vue"]]),we=JSON.parse('{"path":"/tool/google/album.html","title":"Get Google Photos Album ID","lang":"en-US","frontmatter":{"title":"Get Google Photos Album ID","toc":false,"head":[["meta",{"property":"og:url","content":"https://alist.nn.ci/tool/google/album.html"}],["meta",{"property":"og:site_name","content":"AList Docs"}],["meta",{"property":"og:title","content":"Get Google Photos Album ID"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-02-20T12:00:41.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-20T12:00:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Get Google Photos Album ID\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-20T12:00:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[],"git":{"createdTime":1676894441000,"updatedTime":1676894441000,"contributors":[{"name":"Jake Liu","username":"Jake Liu","email":"13583702+LittleJake@users.noreply.github.com","commits":1,"url":"https://github.com/Jake Liu"},{"name":"Andy Hsu","username":"Andy Hsu","email":"i@nn.ci","commits":1,"url":"https://github.com/Andy Hsu"}]},"readingTime":{"minutes":0.07,"words":21},"filePathRelative":"tool/google/album.md","localizedDate":"February 20, 2023"}');export{Se as comp,we as data};
