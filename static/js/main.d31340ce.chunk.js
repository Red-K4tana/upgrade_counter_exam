(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],[,,function(e,t,a){e.exports={display:"Display_display__1xstH",number:"Display_number__1COkd",numberOver:"Display_numberOver__1iU4p",message:"Display_message__3IFST",errorMessage:"Display_errorMessage__2uVP3",input:"Display_input__29aiS",error:"Display_error__36oAM"}},,,,function(e,t,a){e.exports={button:"Button_button__1_xah"}},function(e,t,a){e.exports={settingField:"Setting_settingField__1s5H2"}},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(5),c=a.n(s),o=(a(12),a(3)),u=(a(13),a(2)),i=a.n(u),l=a(0),d=function(e){return Object(l.jsx)("div",{className:i.a.display,children:e.disButton()?e.disButton()?e.errorMessage()?Object(l.jsx)("div",{className:i.a.errorMessage,children:"incorrect value!"}):Object(l.jsx)("div",{className:e.value>=e.maxValue?i.a.numberOver:i.a.number,children:e.value}):void 0:Object(l.jsx)("div",{className:i.a.message,children:"enter values and press 'set'"})})},b=a(6),x=a.n(b),m=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("button",{disabled:e.dis,className:x.a.button,onClick:function(){e.callback()},children:e.name})})},j=function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)},p=function(e){var t=localStorage.getItem(e);if(null!==t)return JSON.parse(t)};j("startValue","0"),j("maxValue","5");var h=function(e){var t=Number(p("startValue")),a=Number(p("maxValue")),r=function(){var e=Math.floor(255*Math.random()),t=Math.floor(255*Math.random()),a=Math.floor(255*Math.random());return"rgb(".concat(e,",").concat(t,",").concat(a,")")},n={border:"2px solid ".concat(r()),display:"flex","justify-content":"space-around",margin:"10px",width:"auto",height:"30px","background-color":"".concat(r()),"border-radius":"5px"},s={margin:"30px",width:"200px",height:"150px",border:"2px solid ".concat(r()),"background-color":"".concat(r()),"border-radius":"10px","box-shadow":"0 0 30px 5px ".concat(r()),transition:"1s box-shadow"};return Object(l.jsxs)("div",{style:s,children:[Object(l.jsx)(d,{value:e.counter,maxValue:a,disButton:e.disButton,errorMessage:e.errorMessage}),Object(l.jsxs)("div",{style:n,children:[Object(l.jsx)(m,{name:"increase",callback:function(){e.setCounter(e.counter+1)},dis:!!(e.counter>=a||e.errorMessage())||!e.disButton()}),Object(l.jsx)(m,{name:"drop",callback:function(){e.setCounter(t)},dis:!(e.counter!==t&&!e.errorMessage())||!e.disButton()})]})]})},g=a(7),v=a.n(g),f=function(e){return Object(l.jsx)("input",{className:i.a.input,type:"number",value:e.value,onChange:function(t){e.changeValue(t.currentTarget.value)}})},O=function(e){var t=function(){var e=Math.floor(255*Math.random()),t=Math.floor(255*Math.random()),a=Math.floor(255*Math.random());return"rgb(".concat(e,",").concat(t,",").concat(a,")")},a={margin:"30px",width:"200px",height:"150px",border:"2px solid ".concat(t()),"background-color":"".concat(t()),"border-radius":"10px","box-shadow":"0 0 30px 5px ".concat(t()),transition:"1s box-shadow"};return Object(l.jsxs)("div",{style:a,children:[Object(l.jsxs)("div",{className:v.a.settingField,children:[Object(l.jsxs)("div",{children:["Max value",Object(l.jsx)(f,{changeValue:e.setMaxValue,value:e.maxValue})]}),Object(l.jsxs)("div",{children:["Start value",Object(l.jsx)(f,{changeValue:e.setStartValue,value:e.startValue})]})]}),Object(l.jsx)(m,{dis:e.disButton(),name:"set",callback:e.setValue})]})};var N=function(){var e=Object(r.useState)("5"),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)("0"),c=Object(o.a)(s,2),u=c[0],i=c[1],d=Object(r.useState)(Number(u)),b=Object(o.a)(d,2),x=b[0],m=b[1],g=function(){return Number(a)<=Number(u)||(Number(a)<0||Number(u)<0||Number(a)===Number(p("maxValue"))&&Number(u)===Number(p("startValue")))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(O,{setMaxValue:n,setStartValue:i,maxValue:a,startValue:u,setValue:function(){j("maxValue",a),j("startValue",u),m(Number(u))},disButton:g}),Object(l.jsx)(h,{setCounter:m,counter:x,disButton:g,errorMessage:function(){return Number(a)<=Number(u)||Number(a)===Number(u)||Number(a)<0||Number(u)<0}})]})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),_()}],[[15,1,2]]]);
//# sourceMappingURL=main.d31340ce.chunk.js.map