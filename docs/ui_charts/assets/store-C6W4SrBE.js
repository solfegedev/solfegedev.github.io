const o=()=>new URLSearchParams(window.location.search),s=a=>{const t=window.location.origin+window.location.pathname+(a.size>0?"?"+a.toString():"");window.history.replaceState({path:t},"",t)},n=(a,t)=>{const e=o();t===null?e.delete(a):e.set(a,t),s(e)};export{s as a,o as g,n as s};
