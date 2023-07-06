"use strict";(self.webpackChunkproject_task_pro=self.webpackChunkproject_task_pro||[]).push([[649],{8649:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ke}});var r=t(9439),a=t(2791),l=t(1413),s=t(5987);function i(e){return function(n){return!!n.type&&n.type.tabsRole===e}}var o=i("Tab"),c=i("TabList"),d=i("TabPanel");function u(e,n){return a.Children.map(e,(function(e){return null===e?null:function(e){return o(e)||c(e)||d(e)}(e)?n(e):e.props&&e.props.children&&"object"===typeof e.props.children?(0,a.cloneElement)(e,(0,l.Z)((0,l.Z)({},e.props),{},{children:u(e.props.children,n)})):e}))}function f(e,n){return a.Children.forEach(e,(function(e){null!==e&&(o(e)||d(e)?n(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(c(e)&&n(e),f(e.props.children,n)))}))}var p=t(8182);function h(e){var n=0;return f(e,(function(e){o(e)&&n++})),n}var m,b=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function x(e){return e&&"getAttribute"in e}function v(e){return x(e)&&e.getAttribute("data-rttab")}function g(e){return x(e)&&"true"===e.getAttribute("aria-disabled")}var Z={className:"react-tabs",focus:!1},j=function(e){var n=(0,a.useRef)([]),t=(0,a.useRef)([]),r=(0,a.useRef)();function i(n,t){n<0||n>=j()||(0,e.onSelect)(n,e.selectedIndex,t)}function f(e){for(var n=j(),t=e+1;t<n;t++)if(!g(C(t)))return t;for(var r=0;r<e;r++)if(!g(C(r)))return r;return e}function x(e){for(var n=e;n--;)if(!g(C(n)))return n;for(n=j();n-- >e;)if(!g(C(n)))return n;return e}function j(){return h(e.children)}function C(e){return n.current["tabs-".concat(e)]}function y(e){var n=e.target;do{if(w(n)){if(g(n))return;return void i([].slice.call(n.parentNode.children).filter(v).indexOf(n),e)}}while(null!=(n=n.parentNode))}function w(e){if(!v(e))return!1;var n=e.parentElement;do{if(n===r.current)return!0;if(n.getAttribute("data-rttabs"))break;n=n.parentElement}while(n);return!1}var N=(0,l.Z)((0,l.Z)({},Z),e),T=(N.children,N.className),k=(N.disabledTabClassName,N.domRef),R=(N.focus,N.forceRenderTabPanel,N.onSelect,N.selectedIndex,N.selectedTabClassName,N.selectedTabPanelClassName,N.environment,N.disableUpDownKeys,N.disableLeftRightKeys,(0,s.Z)(N,b));return a.createElement("div",Object.assign({},R,{className:(0,p.Z)(T),onClick:y,onKeyDown:function(n){var t=e.direction,r=e.disableUpDownKeys,a=e.disableLeftRightKeys;if(w(n.target)){var l=e.selectedIndex,s=!1,o=!1;"Space"!==n.code&&32!==n.keyCode&&"Enter"!==n.code&&13!==n.keyCode||(s=!0,o=!1,y(n)),(a||37!==n.keyCode&&"ArrowLeft"!==n.code)&&(r||38!==n.keyCode&&"ArrowUp"!==n.code)?(a||39!==n.keyCode&&"ArrowRight"!==n.code)&&(r||40!==n.keyCode&&"ArrowDown"!==n.code)?35===n.keyCode||"End"===n.code?(l=function(){for(var e=j();e--;)if(!g(C(e)))return e;return null}(),s=!0,o=!0):36!==n.keyCode&&"Home"!==n.code||(l=function(){for(var e=j(),n=0;n<e;n++)if(!g(C(n)))return n;return null}(),s=!0,o=!0):(l="rtl"===t?x(l):f(l),s=!0,o=!0):(l="rtl"===t?f(l):x(l),s=!0,o=!0),s&&n.preventDefault(),o&&i(l,n)}},ref:function(e){r.current=e,k&&k(e)},"data-rttabs":!0}),function(){var r=0,l=e.children,s=e.disabledTabClassName,i=e.focus,f=e.forceRenderTabPanel,p=e.selectedIndex,h=e.selectedTabClassName,b=e.selectedTabPanelClassName,x=e.environment;t.current=t.current||[];for(var v=t.current.length-j(),g=(0,a.useId)();v++<0;)t.current.push("".concat(g).concat(t.current.length));return u(l,(function(e){var l=e;if(c(e)){var v=0,g=!1;null==m&&function(e){var n=e||("undefined"!==typeof window?window:void 0);try{m=!("undefined"===typeof n||!n.document||!n.document.activeElement)}catch(t){m=!1}}(x);var Z=x||("undefined"!==typeof window?window:void 0);m&&Z&&(g=a.Children.toArray(e.props.children).filter(o).some((function(e,n){return Z.document.activeElement===C(n)}))),l=(0,a.cloneElement)(e,{children:u(e.props.children,(function(e){var r="tabs-".concat(v),l=p===v,o={tabRef:function(e){n.current[r]=e},id:t.current[v],selected:l,focus:l&&(i||g)};return h&&(o.selectedClassName=h),s&&(o.disabledClassName=s),v++,(0,a.cloneElement)(e,o)}))})}else if(d(e)){var j={id:t.current[r],selected:p===r};f&&(j.forceRender=f),b&&(j.selectedClassName=b),r++,l=(0,a.cloneElement)(e,j)}return l}))}())};j.propTypes={};var C=j,y=["children","defaultFocus","defaultIndex","focusTabOnClick","onSelect"],w={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},N=function(e){var n=(0,l.Z)((0,l.Z)({},w),e),t=n.children,i=n.defaultFocus,o=n.defaultIndex,c=n.focusTabOnClick,d=n.onSelect,u=(0,s.Z)(n,y),f=(0,a.useState)(i),p=(0,r.Z)(f,2),m=p[0],b=p[1],x=(0,a.useState)(function(e){return null===e.selectedIndex?1:0}(u)),v=(0,r.Z)(x,1)[0],g=(0,a.useState)(1===v?o||0:null),Z=(0,r.Z)(g,2),j=Z[0],N=Z[1];if((0,a.useEffect)((function(){b(!1)}),[]),1===v){var T=h(t);(0,a.useEffect)((function(){if(null!=j){var e=Math.max(0,T-1);N(Math.min(j,e))}}),[T])}var k=(0,l.Z)((0,l.Z)({},e),u);return k.focus=m,k.onSelect=function(e,n,t){"function"===typeof d&&!1===d(e,n,t)||(c&&b(!0),1===v&&N(e))},null!=j&&(k.selectedIndex=j),delete k.defaultFocus,delete k.defaultIndex,delete k.focusTabOnClick,a.createElement(C,k,t)};N.propTypes={},N.tabsRole="Tabs";var T=N,k=["children","className"],R={className:"react-tabs__tab-list"},E=function(e){var n=(0,l.Z)((0,l.Z)({},R),e),t=n.children,r=n.className,i=(0,s.Z)(n,k);return a.createElement("ul",Object.assign({},i,{className:(0,p.Z)(r),role:"tablist"}),t)};E.tabsRole="TabList",E.propTypes={};var I=E,S=t(4942),B=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"],L="react-tabs__tab",O={className:L,disabledClassName:"".concat(L,"--disabled"),focus:!1,id:null,selected:!1,selectedClassName:"".concat(L,"--selected")},_=function(e){var n,t=(0,a.useRef)(),r=(0,l.Z)((0,l.Z)({},O),e),i=r.children,o=r.className,c=r.disabled,d=r.disabledClassName,u=r.focus,f=r.id,h=r.selected,m=r.selectedClassName,b=r.tabIndex,x=r.tabRef,v=(0,s.Z)(r,B);return(0,a.useEffect)((function(){h&&u&&t.current.focus()}),[h,u]),a.createElement("li",Object.assign({},v,{className:(0,p.Z)(o,(n={},(0,S.Z)(n,m,h),(0,S.Z)(n,d,c),n)),ref:function(e){t.current=e,x&&x(e)},role:"tab",id:"tab".concat(f),"aria-selected":h?"true":"false","aria-disabled":c?"true":"false","aria-controls":"panel".concat(f),tabIndex:b||(h?"0":null),"data-rttab":!0}),i)};_.propTypes={},_.tabsRole="Tab";var A=_,K=["children","className","forceRender","id","selected","selectedClassName"],P="react-tabs__tab-panel",F={className:P,forceRender:!1,selectedClassName:"".concat(P,"--selected")},D=function(e){var n=(0,l.Z)((0,l.Z)({},F),e),t=n.children,r=n.className,i=n.forceRender,o=n.id,c=n.selected,d=n.selectedClassName,u=(0,s.Z)(n,K);return a.createElement("div",Object.assign({},u,{className:(0,p.Z)(r,(0,S.Z)({},d,c)),role:"tabpanel",id:"panel".concat(o),"aria-labelledby":"tab".concat(o)}),i||c?t:null)};D.tabsRole="TabPanel",D.propTypes={};var U,z,H,M,V,X,$,W,q,G,J=D,Q=t(7689),Y=t(1087),ee=t(168),ne=t(6088),te=ne.Z.div(U||(U=(0,ee.Z)(["\n  width: 424px;\n  height: fit-content;\n  border-radius: 8px;\n  padding: 40px;\n  background: #151515;\n"]))),re=t(1134),ae=t(4695),le=t(8687),se=t(9273),ie=t(139),oe=t(2554),ce=ne.Z.i(V||(V=(0,ee.Z)(["\n  position: absolute;\n  top: 27%;\n  right: 5%;\n"]))),de=ne.Z.form(X||(X=(0,ee.Z)(["\n  ","\n"])),(function(e){var n=e.theme;return(0,oe.iv)(z||(z=(0,ee.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 14px;\n  color: ",";\n  margin-top: 40px;\n  & > button {\n    margin-top: 10px;\n  }\n  & > label > div {\n    position: relative;\n  }\n"])),n.authColors.lightText)})),ue=ne.Z.input($||($=(0,ee.Z)(["\n  ","\n"])),(function(e){var n=e.theme;return(0,oe.iv)(H||(H=(0,ee.Z)(["\n  width: 100%;\n  padding: 14px 18px;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  color: ",";\n"])),n.authColors.inputBackground,n.authColors.lightButtonBackground,n.radii.md,n.authColors.lightText)})),fe=ne.Z.svg(W||(W=(0,ee.Z)(["\n  ","\n"])),(function(e){var n=e.theme;return(0,oe.iv)(M||(M=(0,ee.Z)(["\n  stroke: ",";\n"])),n.authColors.lightText)})),pe=ne.Z.button(G||(G=(0,ee.Z)(["\n  ","\n"])),(function(e){var n=e.theme;return(0,oe.iv)(q||(q=(0,ee.Z)(["\n  width: 100%;\n  padding: 14px 0;\n  border-radius: ",";\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: ",";\n\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n"])),n.radii.md,n.authColors.lightButtonBackground,n.authColors.darkText,n.fontSizes[3],n.fontWeights.medium)})),he=t(184);var me,be,xe,ve,ge,Ze,je,Ce,ye,we=function(e){var n=e.textBtn;return(0,he.jsx)(he.Fragment,{children:(0,he.jsx)(pe,{type:"submit",children:n})})},Ne=t(5561),Te=t(6696),ke=t(1362),Re=function(){var e,n,t=(0,le.I0)(),s=(0,Te.ZU)(),i=(0,re.cI)({defaultValues:{email:"",password:""},resolver:(0,ae.X)(ie.y1),mode:"onChange"}),o=i.register,c=i.handleSubmit,d=i.reset,u=i.formState.errors,f=(0,a.useState)(!1),p=(0,r.Z)(f,2),h=p[0],m=p[1];return(0,he.jsxs)(he.Fragment,{children:[s&&(0,he.jsx)(ke.Z,{}),(0,he.jsxs)(de,{onSubmit:c((function(e){t((0,se.n$)(e)),d()})),children:[(0,he.jsxs)("label",{children:[(0,he.jsx)(ue,(0,l.Z)({placeholder:"Enter your email"},o("email"))),(0,he.jsx)("p",{children:null===(e=u.email)||void 0===e?void 0:e.message})]}),(0,he.jsxs)("label",{children:[(0,he.jsxs)("div",{children:[(0,he.jsx)(ue,(0,l.Z)({type:h?"text":"password",placeholder:"Confirm a password"},o("password"))),(0,he.jsx)(ce,{onClick:function(){m(!h)},children:(0,he.jsx)(fe,{width:"20px",height:"20px",children:(0,he.jsx)("use",{href:Ne.Z+"#eye"})})})]}),(0,he.jsx)("p",{children:null===(n=u.password)||void 0===n?void 0:n.message})]}),(0,he.jsx)(we,{textBtn:"Log In Now"})]})]})},Ee=ne.Z.i(ve||(ve=(0,ee.Z)(["\n  position: absolute;\n  top: 27%;\n  right: 5%;\n"]))),Ie=ne.Z.form(ge||(ge=(0,ee.Z)(["\n  ","\n"])),(function(e){var n=e.theme;return(0,oe.iv)(me||(me=(0,ee.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 14px;\n  color: ",";\n  margin-top: 40px;\n  & > button {\n    margin-top: 10px;\n  }\n  & > label > div {\n    position: relative;\n  }\n"])),n.authColors.lightText)})),Se=ne.Z.input(Ze||(Ze=(0,ee.Z)(["\n  ","\n"])),(function(e){var n=e.theme;return(0,oe.iv)(be||(be=(0,ee.Z)(["\n  width: 100%;\n  padding: 14px 18px;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  color: ",";\n"])),n.authColors.inputBackground,n.authColors.lightButtonBackground,n.radii.md,n.authColors.lightText)})),Be=ne.Z.svg(je||(je=(0,ee.Z)(["\n  ","\n"])),(function(e){var n=e.theme;return(0,oe.iv)(xe||(xe=(0,ee.Z)(["\n  stroke: ",";\n"])),n.authColors.lightText)})),Le=function(){var e,n,t,s=(0,le.I0)(),i=(0,Te.ZU)(),o=(0,re.cI)({defaultValues:{name:"",email:"",password:""},resolver:(0,ae.X)(ie.bw),mode:"onChange"}),c=o.register,d=o.handleSubmit,u=o.reset,f=o.formState.errors,p=(0,a.useState)(!1),h=(0,r.Z)(p,2),m=h[0],b=h[1];return(0,he.jsxs)(he.Fragment,{children:[i&&(0,he.jsx)(ke.Z,{}),(0,he.jsxs)(Ie,{onSubmit:d((function(e){s((0,se.N$)(e)),u()})),children:[(0,he.jsxs)("label",{children:[(0,he.jsx)(Se,(0,l.Z)({placeholder:"Enter your name"},c("name"))),(0,he.jsx)("p",{children:null===(e=f.name)||void 0===e?void 0:e.message})]}),(0,he.jsxs)("label",{children:[(0,he.jsx)(Se,(0,l.Z)({placeholder:"Enter your email"},c("email"))),(0,he.jsx)("p",{children:null===(n=f.email)||void 0===n?void 0:n.message})]}),(0,he.jsxs)("label",{children:[(0,he.jsxs)("div",{children:[(0,he.jsx)(Se,(0,l.Z)({type:m?"text":"password",placeholder:"Confirm a password"},c("password"))),(0,he.jsx)(Ee,{onClick:function(){b(!m)},children:(0,he.jsx)(Be,{width:"20px",height:"20px",children:(0,he.jsx)("use",{href:Ne.Z+"#eye"})})})]}),(0,he.jsx)("p",{children:null===(t=f.password)||void 0===t?void 0:t.message})]}),(0,he.jsx)(we,{textBtn:"Register Now"})]})]})},Oe=function(){var e=(0,a.useState)(0),n=(0,r.Z)(e,2),t=n[0],l=n[1],s=(0,Q.TH)();return(0,a.useEffect)((function(){var e=s.pathname;"/register"===e?l(0):"/login"===e&&l(1)}),[s]),(0,he.jsx)(te,{children:(0,he.jsxs)(T,{selectedIndex:t,onSelect:function(e){l(e)},children:[(0,he.jsxs)(I,{children:[(0,he.jsx)(A,{children:(0,he.jsx)(Y.OL,{to:"/register",children:"Registration"})}),(0,he.jsx)(A,{children:(0,he.jsx)(Y.OL,{to:"/login",children:"Log In"})})]}),(0,he.jsx)(J,{children:(0,he.jsx)(Le,{})}),(0,he.jsx)(J,{children:(0,he.jsx)(Re,{})})]})})},_e=t(5474),Ae=ne.Z.div(ye||(ye=(0,ee.Z)(["\n  ",";\n"])),(function(e){var n=e.theme;return(0,oe.iv)(Ce||(Ce=(0,ee.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto;    \n    height: 100vh;\n\n    background: linear-gradient(\n      180deg,\n      rgba(196, 196, 196, 0) 25%,\n      #bedbb0 92.19%\n    );\n\n    @media screen and (min-width: ",") {\n      width: 344px;\n    }\n  "])),n.breakpoints[4])})),Ke=function(){return(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(Ae,{children:(0,he.jsx)(Oe,{})}),(0,he.jsx)(_e.y,{})]})}}}]);
//# sourceMappingURL=649.92a55bf9.chunk.js.map