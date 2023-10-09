import I from"./Icon.44f32133.js";import{_ as M}from"./nuxt-link.ee0c8685.js";import{_ as B}from"./Button.vue.c94b2e3d.js";import{y as k,z as N,A as j,k as P,f as V,h as E,o as w,c as g,a as h,b as r,w as a,d,B as C,_ as W,C as z}from"./entry.14b2aab2.js";import"./config.c5795656.js";function H(e){return N()?(j(e),!0):!1}function $(e){return typeof e=="function"?e():k(e)}const L=typeof window<"u"&&typeof document<"u",D=Object.prototype.toString,T=e=>D.call(e)==="[object Object]",A=()=>{},q=F();function F(){var e;return L&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function v(e){var l;const o=$(e);return(l=o==null?void 0:o.$el)!=null?l:o}const O=L?window:void 0;function b(...e){let l,o,s,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,s,u]=e,l=O):[l,o,s,u]=e,!l)return A;Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]);const f=[],c=()=>{f.forEach(m=>m()),f.length=0},_=(m,p,t,n)=>(m.addEventListener(p,t,n),()=>m.removeEventListener(p,t,n)),x=P(()=>[v(l),$(u)],([m,p])=>{if(c(),!m)return;const t=T(p)?{...p}:p;f.push(...o.flatMap(n=>s.map(i=>_(m,n,i,t))))},{immediate:!0,flush:"post"}),y=()=>{x(),c()};return H(y),y}let S=!1;function R(e,l,o={}){const{window:s=O,ignore:u=[],capture:f=!0,detectIframe:c=!1}=o;if(!s)return;q&&!S&&(S=!0,Array.from(s.document.body.children).forEach(t=>t.addEventListener("click",A)),s.document.documentElement.addEventListener("click",A));let _=!0;const x=t=>u.some(n=>{if(typeof n=="string")return Array.from(s.document.querySelectorAll(n)).some(i=>i===t.target||t.composedPath().includes(i));{const i=v(n);return i&&(t.target===i||t.composedPath().includes(i))}}),m=[b(s,"click",t=>{const n=v(e);if(!(!n||n===t.target||t.composedPath().includes(n))){if(t.detail===0&&(_=!x(t)),!_){_=!0;return}l(t)}},{passive:!0,capture:f}),b(s,"pointerdown",t=>{const n=v(e);n&&(_=!t.composedPath().includes(n)&&!x(t))},{passive:!0}),c&&b(s,"blur",t=>{setTimeout(()=>{var n;const i=v(e);((n=s.document.activeElement)==null?void 0:n.tagName)==="IFRAME"&&!(i!=null&&i.contains(s.document.activeElement))&&l(t)},0)})].filter(Boolean);return()=>m.forEach(t=>t())}const G={class:"z-[2] backdrop-blur-3xl"},J={class:"container flex items-center justify-between h-16 lg:h-[80px]"},K={class:"items-center space-x-10 text-lg font-bold hidden lg:flex"},Q={class:"hidden lg:flex items-center space-x-2"},U={key:0,class:"block lg:hidden fixed z-40 right-0 top-0 h-screen w-screen bg-black opacity-40"},X={class:"items-center my-auto text-lg font-bold flex flex-col space-y-8"},Y=V({__name:"Header",setup(e){const l=E(null),o=E(!1);return R(l,()=>o.value=!1),(s,u)=>{const f=I,c=M,_=B;return w(),g("div",G,[h("div",J,[r(c,{to:"/",class:"flex items-center"},{default:a(()=>[r(f,{name:"solar:code-circle-broken",class:"h-8 w-8 lg:h-12 lg:w-12 text-charcoal"})]),_:1}),h("div",K,[r(c,{to:"/"},{default:a(()=>[d(" Home ")]),_:1}),r(c,{to:"/"},{default:a(()=>[d(" About Me ")]),_:1}),r(c,{to:"/"},{default:a(()=>[d(" Services ")]),_:1}),r(c,{to:"/"},{default:a(()=>[d(" Works ")]),_:1}),r(c,{to:"/"},{default:a(()=>[d(" Contact Me ")]),_:1})]),h("div",Q,[r(_,{to:"/",class:"max-w-fit",secondary:""},{default:a(()=>[d(" Let's talk ")]),_:1})]),h("button",{onClick:u[0]||(u[0]=x=>o.value=!0),class:"max-w-fit block lg:hidden hover:text-primary"},[r(f,{name:"fa6-solid:bars-staggered",class:"h-6 w-6"})])]),k(o)?(w(),g("div",U)):C("",!0),k(o)?(w(),g("div",{key:1,ref_key:"menu",ref:l,class:"flex flex-col lg:hidden fixed right-0 top-0 h-screen max-w-lg w-full py-20 px-20 bg-white text-charcoal z-50 shadow-2xl shadow-charcoal"},[h("button",{onClick:u[1]||(u[1]=x=>o.value=!1),class:"self-end -mr-10 -mt-10"},[r(f,{name:"ic:sharp-close",class:"h-8 w-8"})]),h("div",X,[r(c,{to:"/"},{default:a(()=>[d(" Home ")]),_:1}),r(c,{to:"/"},{default:a(()=>[d(" About Me ")]),_:1}),r(c,{to:"/"},{default:a(()=>[d(" Services ")]),_:1}),r(c,{to:"/"},{default:a(()=>[d(" Works ")]),_:1}),r(c,{to:"/"},{default:a(()=>[d(" Contact Me ")]),_:1})])],512)):C("",!0)])}}}),Z={},ee={class:"flex flex-col min-h-screen"},te={class:"relative flex flex-col flex-1 h-full"};function oe(e,l){const o=Y;return w(),g("div",ee,[r(o,{class:"sticky top-0"}),h("div",te,[z(e.$slots,"default")])])}const ae=W(Z,[["render",oe]]);export{ae as default};
