"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[355],{5355:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var o,t,a,i,l,p,u=r(9439),c=r(2791),d=r(4420),x=r(2637),s=r(5335),f=r(2959),b=r(3820),g=r(3433),h=r(864),Z=r(168),m=r(7924),v=m.ZP.p(o||(o=(0,Z.Z)(["\nfont-family: Manrope;\nfont-weight: 500;\nfont-size: 14px;\ncolor: rgb(138, 138, 137);\nmargin-bottom: 8px;\n"]))),k=m.ZP.div(t||(t=(0,Z.Z)(["\ndisplay: flex;\nflex-direction: column;\n"]))),w=r(1413),j={option:function(n,e){return(0,w.Z)((0,w.Z)({},n),{},{padding:"8px 0",fontSize:"18px",color:e.isSelected?"#121417":"rgba(18, 20, 23, 0.20)",backgroundColor:"#ffffff",cursor:"pointer"})},singleValue:function(n){return(0,w.Z)((0,w.Z)({},n),{},{color:"#121417"})},menu:function(n){return(0,w.Z)((0,w.Z)({},n),{},{backgroundColor:"#ffffff",padding:"14px 8px 14px 18px",borderRadius:"14px",border:"1px solid rgba(18, 20, 23, 0.05)",boxShadow:"0px 4px 36px 0px, rgba(0, 0, 0, 0.02)"})},indicatorSeparator:function(n){return(0,w.Z)((0,w.Z)({},n),{},{backgroundColor:"transparent"})},dropdownIndicator:function(n){return(0,w.Z)((0,w.Z)({},n),{},{color:"#121417","&:hover":{color:"#121417"}})},container:function(n,e){return(0,w.Z)((0,w.Z)({},n),{},{color:"#121417",backgroundColor:"#F7F7FB",borderRadius:"14px",outline:"none"})},menuList:function(n){return(0,w.Z)((0,w.Z)({},n),{},{overflowY:"auto","&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-thumb":{background:"rgba(18, 20, 23, 0.05)",borderRadius:"10px"}})},placeholder:function(n){return(0,w.Z)((0,w.Z)({},n),{},{color:"#121417",fontSize:"18px",lineHeight:"1.11",margin:"0",padding:"0"})}},C=(0,w.Z)((0,w.Z)({},j),{},{control:function(n){return(0,w.Z)((0,w.Z)({},n),{},{cursor:"pointer",background:"transparent",appearance:"none",WebkitAppearance:"none",MozAppearance:"none",width:"224px",height:"48px",fontSize:"18px",lineHeight:"1.11",fontWeight:"500"})}}),y=r(184),S=function(n){var e=n.options,r=n.onChange,o=n.value,t=n.text;return(0,y.jsxs)(k,{children:[(0,y.jsx)(v,{children:t}),(0,y.jsx)(h.ZP,{styles:C,value:o,options:e,onChange:r,placeholder:o})]})},F=m.ZP.div(a||(a=(0,Z.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  gap: 18px;\n  margin-top: 50px;\n"]))),P=m.ZP.input(i||(i=(0,Z.Z)(["\n  padding: 0;\n  padding-left: 24px;\n  width: 136px;\n  height: 48px;\n  border: none;\n  background-color: rgb(247, 247, 251);\n  /* padding: 14px 115px 14px 24px; */\n\n  border-radius: 0px 14px 14px 0px;\n"]))),A=m.ZP.input(l||(l=(0,Z.Z)(["\n  padding: 0;\n  padding-left: 24px;\n\n  width: 136px;\n  height: 48px;\n\n  border-radius: 14px 0px 0px 14px;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  border-bottom: none;\n  border-left: none;\n  border-top: none;\n  background-color: rgb(247, 247, 251);\n\n"]))),z=m.ZP.button(p||(p=(0,Z.Z)(["\n  padding: 14px 44px;\n  margin-left: 18px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);\n  border: none;\n  border-radius: 12px;\n  background-color: rgb(52, 112, 255);\n  cursor: pointer;\n\n  &:hover {\n    background-color: #0b44cd;\n    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);\n  }\n\n  &:active {\n    box-shadow: none;\n  }\n"]))),I=function(n){for(var e=n.onFilterChange,r=(0,d.v9)(s.Wz),o=(0,c.useState)(""),t=(0,u.Z)(o,2),a=t[0],i=t[1],l=(0,c.useState)(""),p=(0,u.Z)(l,2),f=p[0],b=p[1],h=(0,d.v9)(s.hQ),Z=(0,d.v9)(s.ZH),m=(0,d.v9)(s.iV),v=(0,d.v9)(s.e$),k=(0,d.I0)(),w=[{value:"All Cars",label:"All Cars"}].concat((0,g.Z)((0,g.Z)(new Set(r.map((function(n){return n.make})))).map((function(n){return{value:n.toLowerCase(),label:n}})))),j=[],C=10;C<=100;C+=10)j.push({value:C,label:"".concat(C)});return(0,y.jsxs)(F,{children:[(0,y.jsx)(S,{options:w,value:h,onChange:function(n){k((0,x.XP)(n.label)),e(n.label,Z,m,v)},text:"Car brand"}),(0,y.jsx)(S,{options:[{value:"Any prices",label:"Any prices"}].concat(j),value:Z,onChange:function(n){k((0,x.G0)(n.label)),e(h,n.label,m,v)},text:"Price/ 1hour"}),(0,y.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=n.target.elements[0].value,o=n.target.elements[1].value;k((0,x.pt)(r)),k((0,x.H9)(o)),e(h,Z,r,o)},children:[(0,y.jsx)("label",{children:(0,y.jsx)(A,{type:"text",placeholder:"From",name:"mileageFrom",value:a,onChange:function(n){var e=n.target.value;i(e)},required:!0})}),(0,y.jsx)("label",{htmlFor:"",children:(0,y.jsx)(P,{type:"text",placeholder:"To",name:"mileageTo",value:f,onChange:function(n){var e=n.target.value;b(e)},required:!0})}),(0,y.jsx)(z,{type:"submit",children:"Search"})]})]})},H=function(){var n=(0,d.I0)(),e=(0,d.v9)(s.Wz),r=(0,c.useState)(e),o=(0,u.Z)(r,2),t=o[0],a=o[1];(0,c.useEffect)((function(){n((0,x.FF)())}),[n]),(0,c.useEffect)((function(){a(e)}),[e]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(I,{onFilterChange:function(n,r,o,t){var i=e;if("All Cars"!==n&&(i=i.filter((function(e){return e.make===n}))),"Any prices"!==r){var l=parseInt(r.replace("$",""));i=i.filter((function(n){return parseInt(n.rentalPrice.replace("$",""))===l}))}o&&t&&(i=i.filter((function(n){return n.mileage>=Number(o)&&n.mileage<=Number(t)}))),a(i)}}),0===t.length&&(0,y.jsx)("p",{children:"Sorry, There aren't any cars were found by your requests"}),t.length>0&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f.Z,{carsArray:t}),(0,y.jsx)(b.Z,{})]})]})}}}]);
//# sourceMappingURL=355.f2e72c2c.chunk.js.map