import{j as A,as as X,U as u,a8 as G,aY as H,aZ as Te,aC as k,a_ as oe,ap as B,av as W,aq as ne,a$ as Be,at as Ie,ad as $e,ae as we,ac as se,m as q,r as ue,g as L,u as ie,ay as re,A as E,b as i,q as J,E as Ce,G as ke,l as Ae,aA as Pe,ar as Y,M as Re,O as Le,y as Ee,C as Me,D as K,b0 as ze,b1 as Ne,aa as D,b2 as He,Z as Oe,aw as De,a9 as Ue,aF as ce,$ as ve,_ as de,o as me,a1 as qe,w as O,a6 as Fe,d as Ze,c as je,b3 as Ke}from"./entry.d195d1e7.js";import{V as Ye}from"./VImg.2a102b3e.js";const U=Symbol.for("vuetify:layout"),fe=Symbol.for("vuetify:layout-item"),ae=1e3,Xe=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ge=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function We(){const e=X(U);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Je(e){const o=X(U);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${Ie()}`,n=oe("useLayoutItem");ne(fe,{id:t});const l=B(!1);$e(()=>l.value=!0),we(()=>l.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:s}=o.register(n,{...e,active:u(()=>l.value?!1:e.active.value),id:t});return se(()=>o.unregister(t)),{layoutItemStyles:a,layoutRect:o.layoutRect,layoutItemScrimStyles:s}}const Qe=(e,o,t,n)=>{let l={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...l}}];for(const s of e){const d=o.get(s),g=t.get(s),h=n.get(s);if(!d||!g||!h)continue;const m={...l,[d.value]:parseInt(l[d.value],10)+(h.value?parseInt(g.value,10):0)};a.push({id:s,layer:m}),l=m}return a};function et(e){const o=X(U,null),t=u(()=>o?o.rootZIndex.value-100:ae),n=G([]),l=H(new Map),a=H(new Map),s=H(new Map),d=H(new Map),g=H(new Map),{resizeRef:h,contentRect:m}=Te(),I=u(()=>{const v=new Map,x=e.overlaps??[];for(const r of x.filter(b=>b.includes(":"))){const[b,y]=r.split(":");if(!n.value.includes(b)||!n.value.includes(y))continue;const $=l.get(b),R=l.get(y),M=a.get(b),z=a.get(y);!$||!R||!M||!z||(v.set(y,{position:$.value,amount:parseInt(M.value,10)}),v.set(b,{position:R.value,amount:-parseInt(z.value,10)}))}return v}),p=u(()=>{const v=[...new Set([...s.values()].map(r=>r.value))].sort((r,b)=>r-b),x=[];for(const r of v){const b=n.value.filter(y=>{var $;return(($=s.get(y))==null?void 0:$.value)===r});x.push(...b)}return Qe(x,l,a,d)}),f=u(()=>!Array.from(g.values()).some(v=>v.value)),S=u(()=>p.value[p.value.length-1].layer),w=u(()=>({"--v-layout-left":k(S.value.left),"--v-layout-right":k(S.value.right),"--v-layout-top":k(S.value.top),"--v-layout-bottom":k(S.value.bottom),...f.value?void 0:{transition:"none"}})),_=u(()=>p.value.slice(1).map((v,x)=>{let{id:r}=v;const{layer:b}=p.value[x],y=a.get(r),$=l.get(r);return{id:r,...b,size:Number(y.value),position:$.value}})),c=v=>_.value.find(x=>x.id===v),V=oe("createLayout"),C=B(!1);W(()=>{C.value=!0}),ne(U,{register:(v,x)=>{let{id:r,order:b,position:y,layoutSize:$,elementSize:R,active:M,disableTransitions:z,absolute:Se}=x;s.set(r,b),l.set(r,y),a.set(r,$),d.set(r,M),z&&g.set(r,z);const Q=Be(fe,V==null?void 0:V.vnode).indexOf(v);Q>-1?n.value.splice(Q,0,r):n.value.push(r);const ee=u(()=>_.value.findIndex(N=>N.id===r)),F=u(()=>t.value+p.value.length*2-ee.value*2),xe=u(()=>{const N=y.value==="left"||y.value==="right",Z=y.value==="right",_e=y.value==="bottom",te={[y.value]:0,zIndex:F.value,transform:`translate${N?"X":"Y"}(${(M.value?0:-110)*(Z||_e?-1:1)}%)`,position:Se.value||t.value!==ae?"absolute":"fixed",...f.value?void 0:{transition:"none"}};if(!C.value)return te;const T=_.value[ee.value];if(!T)throw new Error(`[Vuetify] Could not find layout item "${r}"`);const j=I.value.get(r);return j&&(T[j.position]+=j.amount),{...te,height:N?`calc(100% - ${T.top}px - ${T.bottom}px)`:R.value?`${R.value}px`:void 0,left:Z?void 0:`${T.left}px`,right:Z?`${T.right}px`:void 0,top:y.value!=="bottom"?`${T.top}px`:void 0,bottom:y.value!=="top"?`${T.bottom}px`:void 0,width:N?R.value?`${R.value}px`:void 0:`calc(100% - ${T.left}px - ${T.right}px)`}}),Ve=u(()=>({zIndex:F.value-1}));return{layoutItemStyles:xe,layoutItemScrimStyles:Ve,zIndex:F}},unregister:v=>{s.delete(v),l.delete(v),a.delete(v),d.delete(v),g.delete(v),n.value=n.value.filter(x=>x!==v)},mainRect:S,mainStyles:w,getLayoutItem:c,items:_,layoutRect:m,rootZIndex:t});const P=u(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),be=u(()=>({zIndex:o?t.value:void 0,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:P,layoutStyles:be,getLayoutItem:c,items:_,layoutRect:m,layoutRef:h}}const tt=A({...q(),...Xe({fullHeight:!0}),...ue()},"VApp"),at=L()({name:"VApp",props:tt(),setup(e,o){let{slots:t}=o;const n=ie(e),{layoutClasses:l,getLayoutItem:a,items:s,layoutRef:d}=et(e),{rtlClasses:g}=re();return E(()=>{var h;return i("div",{ref:d,class:["v-application",n.themeClasses.value,l.value,g.value,e.class],style:[e.style]},[i("div",{class:"v-application__wrap"},[(h=t.default)==null?void 0:h.call(t)])])}),{getLayoutItem:a,items:s,theme:n}}});const ye=A({text:String,...q(),...J()},"VToolbarTitle"),ge=L()({name:"VToolbarTitle",props:ye(),setup(e,o){let{slots:t}=o;return E(()=>{const n=!!(t.default||t.text||e.text);return i(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[n&&i("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),lt=[null,"prominent","default","comfortable","compact"],pe=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>lt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ce(),...q(),...ke(),...Ae(),...J({tag:"header"}),...ue()},"VToolbar"),le=L()({name:"VToolbar",props:pe(),setup(e,o){var f;let{slots:t}=o;const{backgroundColorClasses:n,backgroundColorStyles:l}=Pe(Y(e,"color")),{borderClasses:a}=Re(e),{elevationClasses:s}=Le(e),{roundedClasses:d}=Ee(e),{themeClasses:g}=ie(e),{rtlClasses:h}=re(),m=B(!!(e.extended||(f=t.extension)!=null&&f.call(t))),I=u(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),p=u(()=>m.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Me({VBtn:{variant:"text"}}),E(()=>{var c;const S=!!(e.title||t.title),w=!!(t.image||e.image),_=(c=t.extension)==null?void 0:c.call(t);return m.value=!!(e.extended||_),i(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,a.value,s.value,d.value,g.value,h.value,e.class],style:[l.value,e.style]},{default:()=>[w&&i("div",{key:"image",class:"v-toolbar__image"},[t.image?i(K,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):i(Ye,{key:"image-img",cover:!0,src:e.image},null)]),i(K,{defaults:{VTabs:{height:k(I.value)}}},{default:()=>{var V,C,P;return[i("div",{class:"v-toolbar__content",style:{height:k(I.value)}},[t.prepend&&i("div",{class:"v-toolbar__prepend"},[(V=t.prepend)==null?void 0:V.call(t)]),S&&i(ge,{key:"title",text:e.title},{text:t.title}),(C=t.default)==null?void 0:C.call(t),t.append&&i("div",{class:"v-toolbar__append"},[(P=t.append)==null?void 0:P.call(t)])])]}}),i(K,{defaults:{VTabs:{height:k(p.value)}}},{default:()=>[i(ze,null,{default:()=>[m.value&&i("div",{class:"v-toolbar__extension",style:{height:k(p.value)}},[_])]})]})]})}),{contentHeight:I,extensionHeight:p}}}),ot=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function nt(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=o;let n=0;const l=G(null),a=B(0),s=B(0),d=B(0),g=B(!1),h=B(!1),m=u(()=>Number(e.scrollThreshold)),I=u(()=>Ne((m.value-a.value)/m.value||0)),p=()=>{const f=l.value;!f||t&&!t.value||(n=a.value,a.value="window"in f?f.pageYOffset:f.scrollTop,h.value=a.value<n,d.value=Math.abs(a.value-m.value))};return D(h,()=>{s.value=s.value||a.value}),D(g,()=>{s.value=0}),W(()=>{D(()=>e.scrollTarget,f=>{var w;const S=f?document.querySelector(f):window;S&&S!==l.value&&((w=l.value)==null||w.removeEventListener("scroll",p),l.value=S,l.value.addEventListener("scroll",p,{passive:!0}))},{immediate:!0})}),se(()=>{var f;(f=l.value)==null||f.removeEventListener("scroll",p)}),t&&D(t,p,{immediate:!0}),{scrollThreshold:m,currentScroll:a,currentThreshold:d,isScrollActive:g,scrollRatio:I,isScrollingUp:h,savedScroll:s}}function he(){const e=B(!1);return W(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:u(()=>e.value?void 0:{transition:"none !important"}),isBooted:He(e)}}const st=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...pe(),...Ge(),...ot(),height:{type:[Number,String],default:64}},"VAppBar"),ut=L()({name:"VAppBar",props:st(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=G(),l=Oe(e,"modelValue"),a=u(()=>{var V;const c=new Set(((V=e.scrollBehavior)==null?void 0:V.split(" "))??[]);return{hide:c.has("hide"),inverted:c.has("inverted"),collapse:c.has("collapse"),elevate:c.has("elevate"),fadeImage:c.has("fade-image")}}),s=u(()=>{const c=a.value;return c.hide||c.inverted||c.collapse||c.elevate||c.fadeImage||!l.value}),{currentScroll:d,scrollThreshold:g,isScrollingUp:h,scrollRatio:m}=nt(e,{canScroll:s}),I=u(()=>e.collapse||a.value.collapse&&(a.value.inverted?m.value>0:m.value===0)),p=u(()=>e.flat||a.value.elevate&&(a.value.inverted?d.value>0:d.value===0)),f=u(()=>a.value.fadeImage?a.value.inverted?1-m.value:m.value:void 0),S=u(()=>{var C,P;if(a.value.hide&&a.value.inverted)return 0;const c=((C=n.value)==null?void 0:C.contentHeight)??0,V=((P=n.value)==null?void 0:P.extensionHeight)??0;return c+V});De(u(()=>!!e.scrollBehavior),()=>{Ue(()=>{a.value.hide?a.value.inverted?l.value=d.value>g.value:l.value=h.value||d.value<g.value:l.value=!0})});const{ssrBootStyles:w}=he(),{layoutItemStyles:_}=Je({id:e.name,order:u(()=>parseInt(e.order,10)),position:Y(e,"location"),layoutSize:S,elementSize:B(void 0),active:l,absolute:Y(e,"absolute")});return E(()=>{const[c]=le.filterProps(e);return i(le,ce({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{..._.value,"--v-toolbar-image-opacity":f.value,height:void 0,...w.value},e.style]},c,{collapse:I.value,flat:p.value}),t)}),{}}}),it=L()({name:"VAppBarTitle",props:ye(),setup(e,o){let{slots:t}=o;return E(()=>i(ge,ce(e,{class:"v-app-bar-title"}),t)),{}}});const rt=A({scrollable:Boolean,...q(),...J({tag:"main"})},"VMain"),ct=L()({name:"VMain",props:rt(),setup(e,o){let{slots:t}=o;const{mainStyles:n}=We(),{ssrBootStyles:l}=he();return E(()=>i(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,l.value,e.style]},{default:()=>{var a,s;return[e.scrollable?i("div",{class:"v-main__scroller"},[(a=t.default)==null?void 0:a.call(t)]):(s=t.default)==null?void 0:s.call(t)]}})),{}}}),vt=ve({emits:{},computed:{},data(){return{}},methods:{},components:{}});function dt(e,o,t,n,l,a){return me(),qe(ut,{elevation:2,color:"primary"},{prepend:O(()=>[i(Fe,{icon:"mdi-menu"})]),default:O(()=>[i(it,null,{default:O(()=>[Ze(" Главная страница ")]),_:1})]),_:1})}const mt=de(vt,[["render",dt]]),ft=ve({props:{},emits:{},computed:{},data(){return{}},methods:{},components:{}});function yt(e,o,t,n,l,a){const s=mt;return me(),je("div",null,[i(at,null,{default:O(()=>[i(ct,null,{default:O(()=>[i(s),Ke(e.$slots,"default")]),_:3})]),_:3})])}const bt=de(ft,[["render",yt]]);export{bt as default};
