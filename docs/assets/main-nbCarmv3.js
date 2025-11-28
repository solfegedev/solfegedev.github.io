import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */const a=document.getElementById("root");if(!a)throw new Error("Landing page element #root not found");document.body.classList.add("landing-page");a.classList.add("landing-page__hero");const r=t=>{const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),n=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-n);const o=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e.getTime()-o.getTime())/864e5+1)/7)},s=new Intl.DateTimeFormat(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),g=()=>{const t=new Date,e=r(t);a.innerHTML=`
    <span class="landing-page__date">${s.format(t)}</span>
    <span class="landing-page__week">Week ${e}</span>
  `};g();
