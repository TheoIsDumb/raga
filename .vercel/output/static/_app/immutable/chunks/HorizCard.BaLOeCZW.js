import{s as V,n as k,a as x}from"./scheduler.C6UnpWtt.js";import{S as j,i as z,e as v,t as A,s as y,c as p,a as w,b as C,d as g,f as E,m as f,g as S,h as d,j as G,n as L,H as M,o as N}from"./index.C08rKovH.js";import{e as I}from"./each.BhP_wiSw.js";function q(i,a,r){const s=i.slice();return s[3]=a[r],s}function D(i){let a,r,s,u,h,n,e,l,c=i[3].title+"",t,m;return{c(){a=v("a"),r=v("div"),s=v("img"),n=y(),e=v("span"),l=new M(!1),t=y(),this.h()},l(o){a=p(o,"A",{class:!0,href:!0});var _=w(a);r=p(_,"DIV",{class:!0});var b=w(r);s=p(b,"IMG",{class:!0,loading:!0,src:!0,alt:!0}),n=E(b),e=p(b,"SPAN",{class:!0});var H=w(e);l=N(H,!1),H.forEach(g),b.forEach(g),t=E(_),_.forEach(g),this.h()},h(){f(s,"class","rounded aspect-square object-cover w-32 xl:w-40"),f(s,"loading","lazy"),x(s.src,u=i[3].image)||f(s,"src",u),f(s,"alt",h=i[3].title),l.a=null,f(e,"class","truncate text-xs font-bold"),f(r,"class","iteminner flex flex-col hover gap-2 w-32 xl:w-40"),f(a,"class","item inline-block mr-2 rounded"),f(a,"href",m=i[2](i[3].type,i[3].id))},m(o,_){S(o,a,_),d(a,r),d(r,s),d(r,n),d(r,e),l.m(c,e),d(a,t)},p(o,_){_&1&&!x(s.src,u=o[3].image)&&f(s,"src",u),_&1&&h!==(h=o[3].title)&&f(s,"alt",h),_&1&&c!==(c=o[3].title+"")&&l.p(c),_&1&&m!==(m=o[2](o[3].type,o[3].id))&&f(a,"href",m)},d(o){o&&g(a)}}}function P(i){let a,r,s,u,h,n=I(i[0]),e=[];for(let l=0;l<n.length;l+=1)e[l]=D(q(i,n,l));return{c(){a=v("div"),r=v("h1"),s=A(i[1]),u=y(),h=v("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){a=p(l,"DIV",{class:!0});var c=w(a);r=p(c,"H1",{class:!0});var t=w(r);s=C(t,i[1]),t.forEach(g),u=E(c),h=p(c,"DIV",{class:!0});var m=w(h);for(let o=0;o<e.length;o+=1)e[o].l(m);m.forEach(g),c.forEach(g),this.h()},h(){f(r,"class","play m-0 lowercase font-bold text-2xl xl:text-3xl"),f(h,"class","hscroll overflow-x-auto overflow-y-hidden whitespace-nowrap h-40 xl:h-[12rem]"),f(a,"class","scroll_container")},m(l,c){S(l,a,c),d(a,r),d(r,s),d(a,u),d(a,h);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(h,null)},p(l,[c]){if(c&2&&G(s,l[1]),c&5){n=I(l[0]);let t;for(t=0;t<n.length;t+=1){const m=q(l,n,t);e[t]?e[t].p(m,c):(e[t]=D(m),e[t].c(),e[t].m(h,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=n.length}},i:k,o:k,d(l){l&&g(a),L(e,l)}}}function T(i,a,r){let{array:s}=a,{name:u}=a;const h=(n,e)=>{if(n==="album")return`/album/${e}`;if(n==="playlist")return`/playlist/${e}`;if(n==="song")return`/song/${e}`};return i.$$set=n=>{"array"in n&&r(0,s=n.array),"name"in n&&r(1,u=n.name)},[s,u,h]}class K extends j{constructor(a){super(),z(this,a,T,P,V,{array:0,name:1})}}export{K as H};