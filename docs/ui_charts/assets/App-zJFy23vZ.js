import{j as n}from"./client-B8KsQLkO.js";import{I as m,A as s}from"./Comps-BT2nj_kh.js";import"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";const d=({all:a})=>{const r={weather:{name:"Weather",iconLink:"img/favicon_weather.png"},bookmarks:{name:"Bookmarks",icon:"🔖"},odds:{name:"Odds",icon:"🂡"},jobs:{name:"Jobs",icon:"👷"},cv_python:{name:"CV",iconLink:"img/favicon_cv.png"},gym:{name:"Gym",icon:"🏋"},map1:{name:"Car Parks Map",icon:"🗺"},calendar:{name:"Calendar",icon:"🗓"},articles:{name:"Articles",icon:"🗞"},colour:{name:"HSL Colour Picker",iconLink:"img/favicon_colour.png"},properties:{name:"Properties",icon:"🏘"},maja:{name:"Maja menu",iconLink:"img/favicon_bee.png"},index:{name:"Index",icon:"🌴"}};let o={};return a?o={...r}:["weather","gym","map1","odds","properties"].forEach(e=>o[e]=r[e]),n.jsx("div",{className:"x-shadow",children:n.jsx("ul",{style:{fontSize:"1.4rem",padding:"1rem"},children:Object.entries(o).map(([e,i],c)=>n.jsxs("li",{children:[i.icon??(i.iconLink&&n.jsx(m,{src:i.iconLink,style:{height:"2rem"}}))," ",n.jsx(s,{href:`./${e}`,children:i.name})]},c))})})};export{d as A};
