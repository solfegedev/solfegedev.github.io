const e=(S,M=!1)=>{if(S>=864e5)return`${(S/864e5).toFixed(1)} days`;const _=Math.floor(S/36e5);S-=_*36e5;const o=Math.floor(S/6e4);S-=o*6e4;const N=Math.floor(S/1e3);let t="";return _>0?t+=`${_}h${String(o).padStart(2,"0")}m`:t+=`${o}m`,M&&(t+=`${String(N).padStart(2,"0")}s`),t};export{e as D};
