import{r as i,z as J,y as M,j as k,Y as V,I as B,m as D,J as R,bi as Z,q as C,L as F,p as P,M as Q,l as N,f as y}from"./index-Dz5EmVRQ.js";import{V as S,Y as j,X as z,P as ee,s as ne,Z as te,a3 as oe}from"./App-DNDmdQH0.js";function H(e){return e.substring(2).toLowerCase()}function re(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}function se(e){const{children:n,disableReactTree:s=!1,mouseEvent:o="onClick",onClickAway:l,touchEvent:u="onTouchEnd"}=e,h=i.useRef(!1),d=i.useRef(null),g=i.useRef(!1),v=i.useRef(!1);i.useEffect(()=>(setTimeout(()=>{g.current=!0},0),()=>{g.current=!1}),[]);const m=J(n.ref,d),f=M(a=>{const c=v.current;v.current=!1;const b=S(d.current);if(!g.current||!d.current||"clientX"in a&&re(a,b))return;if(h.current){h.current=!1;return}let t;a.composedPath?t=a.composedPath().indexOf(d.current)>-1:t=!b.documentElement.contains(a.target)||d.current.contains(a.target),!t&&(s||!c)&&l(a)}),x=a=>c=>{v.current=!0;const b=n.props[a];b&&b(c)},E={ref:m};return u!==!1&&(E[u]=x(u)),i.useEffect(()=>{if(u!==!1){const a=H(u),c=S(d.current),b=()=>{h.current=!0};return c.addEventListener(a,f),c.addEventListener("touchmove",b),()=>{c.removeEventListener(a,f),c.removeEventListener("touchmove",b)}}},[f,u]),o!==!1&&(E[o]=x(o)),i.useEffect(()=>{if(o!==!1){const a=H(o),c=S(d.current);return c.addEventListener(a,f),()=>{c.removeEventListener(a,f)}}},[f,o]),k.jsx(i.Fragment,{children:i.cloneElement(n,E)})}function ae(e={}){const{autoHideDuration:n=null,disableWindowBlurListener:s=!1,onClose:o,open:l,resumeHideDuration:u}=e,h=V();i.useEffect(()=>{if(!l)return;function t(r){r.defaultPrevented||(r.key==="Escape"||r.key==="Esc")&&(o==null||o(r,"escapeKeyDown"))}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[l,o]);const d=M((t,r)=>{o==null||o(t,r)}),g=M(t=>{!o||t==null||h.start(t,()=>{d(null,"timeout")})});i.useEffect(()=>(l&&g(n),h.clear),[l,n,g,h]);const v=t=>{o==null||o(t,"clickaway")},m=h.clear,f=i.useCallback(()=>{n!=null&&g(u??n*.5)},[n,u,g]),x=t=>r=>{const p=t.onBlur;p==null||p(r),f()},E=t=>r=>{const p=t.onFocus;p==null||p(r),m()},a=t=>r=>{const p=t.onMouseEnter;p==null||p(r),m()},c=t=>r=>{const p=t.onMouseLeave;p==null||p(r),f()};return i.useEffect(()=>{if(!s&&l)return window.addEventListener("focus",f),window.addEventListener("blur",m),()=>{window.removeEventListener("focus",f),window.removeEventListener("blur",m)}},[s,l,f,m]),{getRootProps:(t={})=>{const r=j({},z(e),z(t));return j({role:"presentation"},t,r,{onBlur:x(r),onFocus:E(r),onMouseEnter:a(r),onMouseLeave:c(r)})},onClickAway:v}}function ie(e){return D("MuiSnackbarContent",e)}B("MuiSnackbarContent",["root","message","action"]);const ce=["action","className","message","role"],le=e=>{const{classes:n}=e;return N({root:["root"],action:["action"],message:["message"]},ie,n)},ue=R(ee,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>{const n=e.palette.mode==="light"?.8:.98,s=Z(e.palette.background.default,n);return C({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(s),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:s,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),de=R("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),fe=R("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),pe=i.forwardRef(function(n,s){const o=F({props:n,name:"MuiSnackbarContent"}),{action:l,className:u,message:h,role:d="alert"}=o,g=P(o,ce),v=o,m=le(v);return k.jsxs(ue,C({role:d,square:!0,elevation:6,className:Q(m.root,u),ownerState:v,ref:s},g,{children:[k.jsx(de,{className:m.message,ownerState:v,children:h}),l?k.jsx(fe,{className:m.action,ownerState:v,children:l}):null]}))});function me(e){return D("MuiSnackbar",e)}B("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const he=["onEnter","onExited"],ge=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],ve=e=>{const{classes:n,anchorOrigin:s}=e,o={root:["root",`anchorOrigin${y(s.vertical)}${y(s.horizontal)}`]};return N(o,me,n)},A=R("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e;return[n.root,n[`anchorOrigin${y(s.anchorOrigin.vertical)}${y(s.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:n})=>{const s={left:"50%",right:"auto",transform:"translateX(-50%)"};return C({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},n.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},n.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},n.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:C({},n.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},n.anchorOrigin.horizontal==="center"&&s,n.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},n.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),ke=i.forwardRef(function(n,s){const o=F({props:n,name:"MuiSnackbar"}),l=ne(),u={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:h,anchorOrigin:{vertical:d,horizontal:g}={vertical:"bottom",horizontal:"left"},autoHideDuration:v=null,children:m,className:f,ClickAwayListenerProps:x,ContentProps:E,disableWindowBlurListener:a=!1,message:c,open:b,TransitionComponent:t=oe,transitionDuration:r=u,TransitionProps:{onEnter:p,onExited:O}={}}=o,W=P(o.TransitionProps,he),_=P(o,ge),w=C({},o,{anchorOrigin:{vertical:d,horizontal:g},autoHideDuration:v,disableWindowBlurListener:a,TransitionComponent:t,transitionDuration:r}),$=ve(w),{getRootProps:I,onClickAway:U}=ae(C({},w)),[X,T]=i.useState(!0),G=te({elementType:A,getSlotProps:I,externalForwardedProps:_,ownerState:w,additionalProps:{ref:s},className:[$.root,f]}),Y=L=>{T(!0),O&&O(L)},q=(L,K)=>{T(!1),p&&p(L,K)};return!b&&X?null:k.jsx(se,C({onClickAway:U},x,{children:k.jsx(A,C({},G,{children:k.jsx(t,C({appear:!0,in:b,timeout:r,direction:d==="top"?"down":"up",onEnter:q,onExited:Y},W,{children:m||k.jsx(pe,C({message:c,action:h},E))}))}))}))});export{ke as S};
