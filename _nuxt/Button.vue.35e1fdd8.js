import{_ as s}from"./nuxt-link.12ade889.js";import{f as d,h as o,o as c,I as i,w as f,j as b,n as u,k as a,J as h}from"./entry.d6bcbaca.js";const x=d({__name:"Button",props:{to:[String,Object],secondary:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},box:{type:Boolean,default:!1},flatLeft:{type:Boolean,default:!1}},setup(t){const e=t,n=o(()=>[e.secondary?"bg-black text-white border-black border-2 hover:bg-accent hover:text-black":"border-2 border-black bg-white text-black hover:bg-accent",e.box?"rounded-md":"rounded-full",{"rounded-l-none":e.flatLeft},{"hover:text-[initial]":e.to&&!e.secondary}]),r=o(()=>e.to?s:"button");return(l,p)=>(c(),i(h(a(r)),{to:t.to,class:u(["relative flex items-center justify-center w-full py-4 px-8 overflow-hidden font-bold transition-all ease-out cursor-pointer hover:transform hover:-translate-x-1 hover:-translate-y-1 disabled:bg-opacity-80 hover:shadow-main active:shadow-none active:translate-x-0 active:translate-y-0 hover:before:hidden text-xl leading-none",a(n)]),disabled:t.disabled},{default:f(()=>[b(l.$slots,"default")]),_:3},8,["to","class","disabled"]))}});export{x as _};
