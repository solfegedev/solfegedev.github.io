const d=window.matchMedia("(min-width: 576px)").matches,M=1e3,e=6e4,r=36e5,i=864e5,h=(t,S=!1)=>{const n=Math.floor(t/i);t-=n*i;const s=Math.floor(t/r);t-=s*r;const a=Math.floor(t/e);t-=a*e;const c=Math.floor(t/M);if(n>0)return`${n.toFixed(1)} days`;{let o="";return s>0&&(o+=`${s}h`),o+=`${String(a).padStart(2,"0")}m`,S&&(o+=`${String(c).padStart(2,"0")}s`),o}};export{h as D,d as i};