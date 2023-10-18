import I from"./Icon.9a7b80eb.js";import{_ as j}from"./nuxt-link.f527c806.js";import{_ as N}from"./Button.vue.c9dcf820.js";import{k as A,G as B,H,x as P,f as V,m as E,o as g,c as k,a as v,b as l,w as i,d,i as $,q as w,_ as W,j as z}from"./entry.47ff9369.js";import"./config.d3920fa6.js";function q(e){return B()?(H(e),!0):!1}function L(e){return typeof e=="function"?e():A(e)}const M=typeof window<"u"&&typeof document<"u",D=Object.prototype.toString,T=e=>D.call(e)==="[object Object]",C=()=>{},F=G();function G(){var e;return M&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function x(e){var c;const t=L(e);return(c=t==null?void 0:t.$el)!=null?c:t}const O=M?window:void 0;function b(...e){let c,t,r,n;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,r,n]=e,c=O):[c,t,r,n]=e,!c)return C;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const p=[],a=()=>{p.forEach(m=>m()),p.length=0},h=(m,_,o,s)=>(m.addEventListener(_,o,s),()=>m.removeEventListener(_,o,s)),f=P(()=>[x(c),L(n)],([m,_])=>{if(a(),!m)return;const o=T(_)?{..._}:_;p.push(...t.flatMap(s=>r.map(u=>h(m,s,u,o))))},{immediate:!0,flush:"post"}),y=()=>{f(),a()};return q(y),y}let S=!1;function R(e,c,t={}){const{window:r=O,ignore:n=[],capture:p=!0,detectIframe:a=!1}=t;if(!r)return;F&&!S&&(S=!0,Array.from(r.document.body.children).forEach(o=>o.addEventListener("click",C)),r.document.documentElement.addEventListener("click",C));let h=!0;const f=o=>n.some(s=>{if(typeof s=="string")return Array.from(r.document.querySelectorAll(s)).some(u=>u===o.target||o.composedPath().includes(u));{const u=x(s);return u&&(o.target===u||o.composedPath().includes(u))}}),m=[b(r,"click",o=>{const s=x(e);if(!(!s||s===o.target||o.composedPath().includes(s))){if(o.detail===0&&(h=!f(o)),!h){h=!0;return}c(o)}},{passive:!0,capture:p}),b(r,"pointerdown",o=>{const s=x(e);s&&(h=!o.composedPath().includes(s)&&!f(o))},{passive:!0}),a&&b(r,"blur",o=>{setTimeout(()=>{var s;const u=x(e);((s=r.document.activeElement)==null?void 0:s.tagName)==="IFRAME"&&!(u!=null&&u.contains(r.document.activeElement))&&c(o)},0)})].filter(Boolean);return()=>m.forEach(o=>o())}const J={class:"z-10 backdrop-blur-3xl"},K={class:"container flex items-center justify-between h-16 lg:h-[80px]"},Q={class:"items-center space-x-10 text-lg font-bold hidden lg:flex"},U={class:"hidden lg:flex items-center space-x-2"},X={key:0,class:"block lg:hidden fixed z-40 right-0 top-0 h-screen w-screen bg-black opacity-40"},Y={class:"items-center my-auto text-lg font-bold flex flex-col space-y-8"},Z=V({__name:"Header",setup(e){const c=E(null),t=E(!1);return R(c,()=>t.value=!1),(r,n)=>{const p=I,a=j,h=N;return g(),k("div",J,[v("div",K,[l(a,{to:"/",class:"flex items-center"},{default:i(()=>[l(p,{name:"solar:code-circle-broken",class:"h-8 w-8 lg:h-12 lg:w-12 text-charcoal"})]),_:1}),v("div",Q,[l(a,{to:"/"},{default:i(()=>[d(" Home ")]),_:1}),l(a,{to:{path:"/",hash:"#about"}},{default:i(()=>[d(" About Me ")]),_:1}),l(a,{to:{path:"/",hash:"#services"}},{default:i(()=>[d(" Services ")]),_:1}),l(a,{to:{path:"/",hash:"#works"}},{default:i(()=>[d(" Works ")]),_:1}),l(a,{to:{path:"/",hash:"#contact"}},{default:i(()=>[d(" Contact Me ")]),_:1})]),v("div",U,[l(h,{to:"/",class:"max-w-fit",secondary:""},{default:i(()=>[d(" Let's talk ")]),_:1})]),v("button",{onClick:n[0]||(n[0]=f=>t.value=!0),class:"max-w-fit block lg:hidden hover:text-primary"},[l(p,{name:"fa6-solid:bars-staggered",class:"h-6 w-6"})])]),A(t)?(g(),k("div",X)):$("",!0),A(t)?(g(),k("div",{key:1,ref_key:"menu",ref:c,class:"flex flex-col lg:hidden fixed right-0 top-0 h-screen max-w-lg w-full py-20 px-20 bg-white text-charcoal z-50 shadow-2xl shadow-charcoal"},[v("button",{onClick:n[1]||(n[1]=f=>t.value=!1),class:"self-end -mr-10 -mt-10"},[l(p,{name:"ic:sharp-close",class:"h-8 w-8"})]),v("div",Y,[l(a,{to:"/"},{default:i(()=>[d(" Home ")]),_:1}),l(a,{to:{path:"/",hash:"#about"},onClick:n[2]||(n[2]=w(f=>t.value=!1,["prevent"]))},{default:i(()=>[d(" About Me ")]),_:1}),l(a,{to:{path:"/",hash:"#services"},onClick:n[3]||(n[3]=w(f=>t.value=!1,["prevent"]))},{default:i(()=>[d(" Services ")]),_:1}),l(a,{to:{path:"/",hash:"#works"},onClick:n[4]||(n[4]=w(f=>t.value=!1,["prevent"]))},{default:i(()=>[d(" Works ")]),_:1}),l(a,{to:{path:"/",hash:"#contact"},onClick:n[5]||(n[5]=w(f=>t.value=!1,["prevent"]))},{default:i(()=>[d(" Contact Me ")]),_:1})])],512)):$("",!0)])}}}),ee={},te={class:"flex flex-col min-h-screen"},oe={class:"relative flex flex-col flex-1 h-full"};function ne(e,c){const t=Z;return g(),k("div",te,[l(t,{class:"sticky top-0"}),v("div",oe,[z(e.$slots,"default")])])}const ie=W(ee,[["render",ne]]);export{ie as default};