import*as b from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{P as o,D as j,r as w,s as y}from"./Dropdown-DDJnZx1C.js";import{j as r}from"./client-B8KsQLkO.js";const e=o.oneOf(["start","end"]),T=o.oneOfType([e,o.shape({sm:e}),o.shape({md:e}),o.shape({lg:e}),o.shape({xl:e}),o.shape({xxl:e}),o.object]),v={id:o.string,href:o.string,onClick:o.func,title:o.node.isRequired,disabled:o.bool,align:T,menuRole:o.string,renderMenuOnMount:o.bool,rootCloseEvent:o.string,menuVariant:o.oneOf(["dark"]),flip:o.bool,bsPrefix:o.string,variant:o.string,size:o.string},n=b.forwardRef(({title:s,children:i,bsPrefix:t,rootCloseEvent:a,variant:p,size:l,menuRole:d,renderMenuOnMount:f,disabled:c,href:g,id:m,menuVariant:h,flip:u,...x},D)=>r.jsxs(j,{ref:D,...x,children:[r.jsx(w,{id:m,href:g,size:l,variant:p,disabled:c,childBsPrefix:t,children:s}),r.jsx(y,{role:d,renderOnMount:f,rootCloseEvent:a,variant:h,flip:u,children:i})]}));n.displayName="DropdownButton";n.propTypes=v;export{n as D};