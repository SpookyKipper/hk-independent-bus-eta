import{r as S,b8 as be,A as St,z as nt,x as Lt,y as Ge,N as Re,I as Pt,m as Ct,M as le,j as C,J as Q,f as B,q as u,b0 as $t,b1 as Tt,K as lt,a2 as dt,L as wt,p as Rt,l as _t}from"./index-Dz5EmVRQ.js";import{w as It,V as _e,X as Je,Y as ne,v as At,s as Mt,Z as Y}from"./App-DNDmdQH0.js";function zt(e,t,n=(s,c)=>s===c){return e.length===t.length&&e.every((s,c)=>n(s,t[c]))}const Nt=2;function pt(e,t){return e-t}function st(e,t){var n;const{index:s}=(n=e.reduce((c,L,$)=>{const h=Math.abs(t-L);return c===null||h<c.distance||h===c.distance?{distance:h,index:$}:c},null))!=null?n:{};return s}function Ce(e,t){if(t.current!==void 0&&e.changedTouches){const n=e;for(let s=0;s<n.changedTouches.length;s+=1){const c=n.changedTouches[s];if(c.identifier===t.current)return{x:c.clientX,y:c.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function Ie(e,t,n){return(e-t)*100/(n-t)}function Vt(e,t,n){return(n-t)*e+t}function Et(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),s=n[0].split(".")[1];return(s?s.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Ft(e,t,n){const s=Math.round((e-n)/t)*t+n;return Number(s.toFixed(Et(t)))}function it({values:e,newValue:t,index:n}){const s=e.slice();return s[n]=t,s.sort(pt)}function $e({sliderRef:e,activeIndex:t,setActive:n}){var s,c;const L=_e(e.current);if(!((s=e.current)!=null&&s.contains(L.activeElement))||Number(L==null||(c=L.activeElement)==null?void 0:c.getAttribute("data-index"))!==t){var $;($=e.current)==null||$.querySelector(`[type="range"][data-index="${t}"]`).focus()}n&&n(t)}function Te(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?zt(e,t):!1}const Ht={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},jt=e=>e;let we;function ct(){return we===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?we=CSS.supports("touch-action","none"):we=!0),we}function Dt(e){const{"aria-labelledby":t,defaultValue:n,disabled:s=!1,disableSwap:c=!1,isRtl:L=!1,marks:$=!1,max:h=100,min:f=0,name:K,onChange:se,onChangeCommitted:U,orientation:ee="horizontal",rootRef:he,scale:ie=jt,step:A=1,shiftStep:ce=10,tabIndex:ve,value:ge}=e,E=S.useRef(),[X,j]=S.useState(-1),[ke,D]=S.useState(-1),[ue,de]=S.useState(!1),W=S.useRef(0),[T,pe]=It({controlled:ge,default:n??f,name:"Slider"}),M=se&&((o,r,a)=>{const i=o.nativeEvent||o,p=new i.constructor(i.type,i);Object.defineProperty(p,"target",{writable:!0,value:{value:r,name:K}}),se(p,r,a)}),q=Array.isArray(T);let g=q?T.slice().sort(pt):[T];g=g.map(o=>o==null?f:be(o,f,h));const fe=$===!0&&A!==null?[...Array(Math.floor((h-f)/A)+1)].map((o,r)=>({value:f+A*r})):$||[],w=fe.map(o=>o.value),{isFocusVisibleRef:R,onBlur:z,onFocus:Ae,ref:Me}=St(),[xe,te]=S.useState(-1),P=S.useRef(),ye=nt(Me,P),me=nt(he,ye),ze=o=>r=>{var a;const i=Number(r.currentTarget.getAttribute("data-index"));Ae(r),R.current===!0&&te(i),D(i),o==null||(a=o.onFocus)==null||a.call(o,r)},oe=o=>r=>{var a;z(r),R.current===!1&&te(-1),D(-1),o==null||(a=o.onBlur)==null||a.call(o,r)},G=(o,r)=>{const a=Number(o.currentTarget.getAttribute("data-index")),i=g[a],p=w.indexOf(i);let l=r;if(fe&&A==null){const _=w[w.length-1];l>_?l=_:l<w[0]?l=w[0]:l=l<i?w[p-1]:w[p+1]}if(l=be(l,f,h),q){c&&(l=be(l,g[a-1]||-1/0,g[a+1]||1/0));const _=l;l=it({values:g,newValue:l,index:a});let V=a;c||(V=l.indexOf(_)),$e({sliderRef:P,activeIndex:V})}pe(l),te(a),M&&!Te(l,T)&&M(o,l,a),U&&U(o,l)},Ne=o=>r=>{var a;if(A!==null){const i=Number(r.currentTarget.getAttribute("data-index")),p=g[i];let l=null;(r.key==="ArrowLeft"||r.key==="ArrowDown")&&r.shiftKey||r.key==="PageDown"?l=Math.max(p-ce,f):((r.key==="ArrowRight"||r.key==="ArrowUp")&&r.shiftKey||r.key==="PageUp")&&(l=Math.min(p+ce,h)),l!==null&&(G(r,l),r.preventDefault())}o==null||(a=o.onKeyDown)==null||a.call(o,r)};Lt(()=>{if(s&&P.current.contains(document.activeElement)){var o;(o=document.activeElement)==null||o.blur()}},[s]),s&&X!==-1&&j(-1),s&&xe!==-1&&te(-1);const Ve=o=>r=>{var a;(a=o.onChange)==null||a.call(o,r),G(r,r.target.valueAsNumber)},Se=S.useRef();let re=ee;L&&ee==="horizontal"&&(re+="-reverse");const F=({finger:o,move:r=!1})=>{const{current:a}=P,{width:i,height:p,bottom:l,left:_}=a.getBoundingClientRect();let V;re.indexOf("vertical")===0?V=(l-o.y)/p:V=(o.x-_)/i,re.indexOf("-reverse")!==-1&&(V=1-V);let k;if(k=Vt(V,f,h),A)k=Ft(k,A,f);else{const Z=st(w,k);k=w[Z]}k=be(k,f,h);let b=0;if(q){r?b=Se.current:b=st(g,k),c&&(k=be(k,g[b-1]||-1/0,g[b+1]||1/0));const Z=k;k=it({values:g,newValue:k,index:b}),c&&r||(b=k.indexOf(Z),Se.current=b)}return{newValue:k,activeIndex:b}},m=Ge(o=>{const r=Ce(o,E);if(!r)return;if(W.current+=1,o.type==="mousemove"&&o.buttons===0){d(o);return}const{newValue:a,activeIndex:i}=F({finger:r,move:!0});$e({sliderRef:P,activeIndex:i,setActive:j}),pe(a),!ue&&W.current>Nt&&de(!0),M&&!Te(a,T)&&M(o,a,i)}),d=Ge(o=>{const r=Ce(o,E);if(de(!1),!r)return;const{newValue:a}=F({finger:r,move:!0});j(-1),o.type==="touchend"&&D(-1),U&&U(o,a),E.current=void 0,N()}),O=Ge(o=>{if(s)return;ct()||o.preventDefault();const r=o.changedTouches[0];r!=null&&(E.current=r.identifier);const a=Ce(o,E);if(a!==!1){const{newValue:p,activeIndex:l}=F({finger:a});$e({sliderRef:P,activeIndex:l,setActive:j}),pe(p),M&&!Te(p,T)&&M(o,p,l)}W.current=0;const i=_e(P.current);i.addEventListener("touchmove",m,{passive:!0}),i.addEventListener("touchend",d,{passive:!0})}),N=S.useCallback(()=>{const o=_e(P.current);o.removeEventListener("mousemove",m),o.removeEventListener("mouseup",d),o.removeEventListener("touchmove",m),o.removeEventListener("touchend",d)},[d,m]);S.useEffect(()=>{const{current:o}=P;return o.addEventListener("touchstart",O,{passive:ct()}),()=>{o.removeEventListener("touchstart",O),N()}},[N,O]),S.useEffect(()=>{s&&N()},[s,N]);const J=o=>r=>{var a;if((a=o.onMouseDown)==null||a.call(o,r),s||r.defaultPrevented||r.button!==0)return;r.preventDefault();const i=Ce(r,E);if(i!==!1){const{newValue:l,activeIndex:_}=F({finger:i});$e({sliderRef:P,activeIndex:_,setActive:j}),pe(l),M&&!Te(l,T)&&M(r,l,_)}W.current=0;const p=_e(P.current);p.addEventListener("mousemove",m,{passive:!0}),p.addEventListener("mouseup",d)},Le=Ie(q?g[0]:f,f,h),y=Ie(g[g.length-1],f,h)-Le,ae=(o={})=>{const r=Je(o),a={onMouseDown:J(r||{})},i=ne({},r,a);return ne({},o,{ref:me},i)},Ee=o=>r=>{var a;(a=o.onMouseOver)==null||a.call(o,r);const i=Number(r.currentTarget.getAttribute("data-index"));D(i)},Fe=o=>r=>{var a;(a=o.onMouseLeave)==null||a.call(o,r),D(-1)};return{active:X,axis:re,axisProps:Ht,dragging:ue,focusedThumbIndex:xe,getHiddenInputProps:(o={})=>{var r;const a=Je(o),i={onChange:Ve(a||{}),onFocus:ze(a||{}),onBlur:oe(a||{}),onKeyDown:Ne(a||{})},p=ne({},a,i);return ne({tabIndex:ve,"aria-labelledby":t,"aria-orientation":ee,"aria-valuemax":ie(h),"aria-valuemin":ie(f),name:K,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(r=e.step)!=null?r:void 0,disabled:s},o,p,{style:ne({},At,{direction:L?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:ae,getThumbProps:(o={})=>{const r=Je(o),a={onMouseOver:Ee(r||{}),onMouseLeave:Fe(r||{})};return ne({},o,r,a)},marks:fe,open:ke,range:q,rootRef:me,trackLeap:y,trackOffset:Le,values:g,getThumbStyle:o=>({pointerEvents:X!==-1&&X!==o?"none":void 0})}}const Ot=e=>!e||!Re(e);function Yt(e){return Ct("MuiSlider",e)}const I=Pt("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),Bt=e=>{const{open:t}=e;return{offset:le(t&&I.valueLabelOpen),circle:I.valueLabelCircle,label:I.valueLabelLabel}};function Kt(e){const{children:t,className:n,value:s}=e,c=Bt(e);return t?S.cloneElement(t,{className:le(t.props.className)},C.jsxs(S.Fragment,{children:[t.props.children,C.jsx("span",{className:le(c.offset,n),"aria-hidden":!0,children:C.jsx("span",{className:c.circle,children:C.jsx("span",{className:c.label,children:s})})})]})):null}const Ut=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function ut(e){return e}const Xt=Q("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`color${B(n.color)}`],n.size!=="medium"&&t[`size${B(n.size)}`],n.marked&&t.marked,n.orientation==="vertical"&&t.vertical,n.track==="inverted"&&t.trackInverted,n.track===!1&&t.trackFalse]}})(({theme:e,ownerState:t})=>u({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[t.color].main,WebkitTapHighlightColor:"transparent"},t.orientation==="horizontal"&&u({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},t.size==="small"&&{height:2},t.marked&&{marginBottom:20}),t.orientation==="vertical"&&u({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},t.size==="small"&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${I.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${I.dragging}`]:{[`& .${I.thumb}, & .${I.track}`]:{transition:"none"}}})),Wt=Q("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})(({ownerState:e})=>u({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),qt=Q("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?$t(e.palette[t.color].main,.62):Tt(e.palette[t.color].main,.5);return u({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{border:"none"},t.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},t.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},t.track===!1&&{display:"none"},t.track==="inverted"&&{backgroundColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:n,borderColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:n})}),Gt=Q("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.thumb,t[`thumbColor${B(n.color)}`],n.size!=="medium"&&t[`thumbSize${B(n.size)}`]]}})(({theme:e,ownerState:t})=>u({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{width:12,height:12},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&::before":u({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},t.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${I.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:lt(e.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${I.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:lt(e.palette[t.color].main,.16)}`},[`&.${I.disabled}`]:{"&:hover":{boxShadow:"none"}}})),Jt=Q(Kt,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e,ownerState:t})=>u({[`&.${I.valueLabelOpen}`]:{transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(1)`},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(0)`,position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},t.orientation==="horizontal"&&{top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},t.orientation==="vertical"&&{right:t.size==="small"?"20px":"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"}},t.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),Zt=Q("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>dt(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:n}=e;return[t.mark,n&&t.markActive]}})(({theme:e,ownerState:t,markActive:n})=>u({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},n&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8})),Qt=Q("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>dt(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e,ownerState:t,markLabelActive:n})=>u({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},t.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},t.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},n&&{color:(e.vars||e).palette.text.primary})),eo=e=>{const{disabled:t,dragging:n,marked:s,orientation:c,track:L,classes:$,color:h,size:f}=e,K={root:["root",t&&"disabled",n&&"dragging",s&&"marked",c==="vertical"&&"vertical",L==="inverted"&&"trackInverted",L===!1&&"trackFalse",h&&`color${B(h)}`,f&&`size${B(f)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",f&&`thumbSize${B(f)}`,h&&`thumbColor${B(h)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return _t(K,Yt,$)},to=({children:e})=>e,ao=S.forwardRef(function(t,n){var s,c,L,$,h,f,K,se,U,ee,he,ie,A,ce,ve,ge,E,X,j,ke,D,ue,de,W;const T=wt({props:t,name:"MuiSlider"}),M=Mt().direction==="rtl",{"aria-label":q,"aria-valuetext":g,"aria-labelledby":fe,component:w="span",components:R={},componentsProps:z={},color:Ae="primary",classes:Me,className:xe,disableSwap:te=!1,disabled:P=!1,getAriaLabel:ye,getAriaValueText:me,marks:ze=!1,max:oe=100,min:G=0,orientation:Ne="horizontal",shiftStep:Ve=10,size:Se="medium",step:re=1,scale:F=ut,slotProps:m,slots:d,track:O="normal",valueLabelDisplay:N="off",valueLabelFormat:J=ut}=T,Le=Rt(T,Ut),y=u({},T,{isRtl:M,max:oe,min:G,classes:Me,disabled:P,disableSwap:te,orientation:Ne,marks:ze,color:Ae,size:Se,step:re,shiftStep:Ve,scale:F,track:O,valueLabelDisplay:N,valueLabelFormat:J}),{axisProps:ae,getRootProps:Ee,getHiddenInputProps:Fe,getThumbProps:Ze,open:Qe,active:He,axis:o,focusedThumbIndex:r,range:a,dragging:i,marks:p,values:l,trackOffset:_,trackLeap:V,getThumbStyle:k}=Dt(u({},y,{rootRef:n}));y.marked=p.length>0&&p.some(v=>v.label),y.dragging=i,y.focusedThumbIndex=r;const b=eo(y),Z=(s=(c=d==null?void 0:d.root)!=null?c:R.Root)!=null?s:Xt,et=(L=($=d==null?void 0:d.rail)!=null?$:R.Rail)!=null?L:Wt,tt=(h=(f=d==null?void 0:d.track)!=null?f:R.Track)!=null?h:qt,ot=(K=(se=d==null?void 0:d.thumb)!=null?se:R.Thumb)!=null?K:Gt,rt=(U=(ee=d==null?void 0:d.valueLabel)!=null?ee:R.ValueLabel)!=null?U:Jt,je=(he=(ie=d==null?void 0:d.mark)!=null?ie:R.Mark)!=null?he:Zt,De=(A=(ce=d==null?void 0:d.markLabel)!=null?ce:R.MarkLabel)!=null?A:Qt,at=(ve=(ge=d==null?void 0:d.input)!=null?ge:R.Input)!=null?ve:"input",Oe=(E=m==null?void 0:m.root)!=null?E:z.root,ft=(X=m==null?void 0:m.rail)!=null?X:z.rail,Ye=(j=m==null?void 0:m.track)!=null?j:z.track,Be=(ke=m==null?void 0:m.thumb)!=null?ke:z.thumb,Ke=(D=m==null?void 0:m.valueLabel)!=null?D:z.valueLabel,mt=(ue=m==null?void 0:m.mark)!=null?ue:z.mark,bt=(de=m==null?void 0:m.markLabel)!=null?de:z.markLabel,ht=(W=m==null?void 0:m.input)!=null?W:z.input,vt=Y({elementType:Z,getSlotProps:Ee,externalSlotProps:Oe,externalForwardedProps:Le,additionalProps:u({},Ot(Z)&&{as:w}),ownerState:u({},y,Oe==null?void 0:Oe.ownerState),className:[b.root,xe]}),gt=Y({elementType:et,externalSlotProps:ft,ownerState:y,className:b.rail}),kt=Y({elementType:tt,externalSlotProps:Ye,additionalProps:{style:u({},ae[o].offset(_),ae[o].leap(V))},ownerState:u({},y,Ye==null?void 0:Ye.ownerState),className:b.track}),Ue=Y({elementType:ot,getSlotProps:Ze,externalSlotProps:Be,ownerState:u({},y,Be==null?void 0:Be.ownerState),className:b.thumb}),xt=Y({elementType:rt,externalSlotProps:Ke,ownerState:u({},y,Ke==null?void 0:Ke.ownerState),className:b.valueLabel}),Xe=Y({elementType:je,externalSlotProps:mt,ownerState:y,className:b.mark}),We=Y({elementType:De,externalSlotProps:bt,ownerState:y,className:b.markLabel}),yt=Y({elementType:at,getSlotProps:Fe,externalSlotProps:ht,ownerState:y});return C.jsxs(Z,u({},vt,{children:[C.jsx(et,u({},gt)),C.jsx(tt,u({},kt)),p.filter(v=>v.value>=G&&v.value<=oe).map((v,x)=>{const qe=Ie(v.value,G,oe),Pe=ae[o].offset(qe);let H;return O===!1?H=l.indexOf(v.value)!==-1:H=O==="normal"&&(a?v.value>=l[0]&&v.value<=l[l.length-1]:v.value<=l[0])||O==="inverted"&&(a?v.value<=l[0]||v.value>=l[l.length-1]:v.value>=l[0]),C.jsxs(S.Fragment,{children:[C.jsx(je,u({"data-index":x},Xe,!Re(je)&&{markActive:H},{style:u({},Pe,Xe.style),className:le(Xe.className,H&&b.markActive)})),v.label!=null?C.jsx(De,u({"aria-hidden":!0,"data-index":x},We,!Re(De)&&{markLabelActive:H},{style:u({},Pe,We.style),className:le(b.markLabel,We.className,H&&b.markLabelActive),children:v.label})):null]},x)}),l.map((v,x)=>{const qe=Ie(v,G,oe),Pe=ae[o].offset(qe),H=N==="off"?to:rt;return C.jsx(H,u({},!Re(H)&&{valueLabelFormat:J,valueLabelDisplay:N,value:typeof J=="function"?J(F(v),x):J,index:x,open:Qe===x||He===x||N==="on",disabled:P},xt,{children:C.jsx(ot,u({"data-index":x},Ue,{className:le(b.thumb,Ue.className,He===x&&b.active,r===x&&b.focusVisible),style:u({},Pe,k(x),Ue.style),children:C.jsx(at,u({"data-index":x,"aria-label":ye?ye(x):q,"aria-valuenow":F(v),"aria-labelledby":fe,"aria-valuetext":me?me(F(v),x):g,value:l[x]},yt))}))}),x)})]}))});export{ao as S};
