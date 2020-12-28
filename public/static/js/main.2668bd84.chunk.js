(this["webpackJsonplift-tracker"]=this["webpackJsonplift-tracker"]||[]).push([[0],{197:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(14),i=n.n(r),l=n(4),o=n.n(l),d=n(9),u=n(2),j=n(8),b=n(5),h=n(70),x=n(71);function p(){var e=Object(h.a)(["\nhtml, body, #root{\n  // max-height: 100%;\n  // overflow: hidden;\n  // height: 100%;\n\n}\n@media screen and (max-width: 600px) {\n  .table {\n    font-size: .8em;\n  }\n  // .jumbotron {\n  //   margin: 0;\n  // }\n}\n\n .App {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 55px auto 100px;\n    min-height: 100vh;\n}\n\n.MainContent {\n  grid-row-start: 2;\n  margin-top: 1em;\n}\n\n.page {\n  position: absolute;\n\n}\n\n// .collapsed {\n//   // display: none;\n//   overflow: hidden;\n//   tranisition: max-height 3.9s ease;\n// }\n\n\n\n.fade-appear,\n.fade-enter {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n}\n.fade-appear-active,\n.fade-enter.fade-enter-active {\n  opacity: 1;\n  transition: opacity 300ms linear 150ms;\n\n}\n\n.fade-exit {\n  opacity: 1;\n  position: absolute;\n  width: 100%\n}\n.fade-exit.fade-exit-active {\n  opacity: 0;\n  transition: opacity 150ms linear;\n}\n\ncanvas {\n  height: 100%;\n  display: flex;\n}\n\nbody {\n  background-color: #f7f7f7\n}\n\nh2 {\n  font-weight: 600\n}\n\nh5 {\n  font-weight: 500\n}\n"]);return p=function(){return e},e}var m=Object(x.a)(p()),f="https://the-lift-tracker.herokuapp.com",O=s.a.createContext(null),g=function(e){for(var t=e.postsPerPage,n=e.totalPosts,c=e.paginate,s=[],r=1;r<=Math.ceil(n/t);r++)s.push(r);return Object(a.jsx)("nav",{children:Object(a.jsx)("ul",{className:"pagination ml-1 mt-3",children:s.map((function(e){return Object(a.jsx)("li",{className:"page-item",children:Object(a.jsx)("button",{onClick:function(){return c(e)},href:"!#",className:"page-link bg-dark text-white",children:e})},e)}))})})};function v(e){var t=e.userLifts,n=Object(c.useState)(t),s=Object(u.a)(n,2),r=s[0],i=s[1],l=Object(c.useState)(1),o=Object(u.a)(l,2),d=o[0],b=o[1],h=Object(c.useState)(5),x=Object(u.a)(h,1)[0],p=d*x,m=p-x,f=r.slice(m,p);Object(c.useEffect)((function(){i(t)}),[t]);return t.length<1?Object(a.jsxs)("div",{className:"jumbotron mx-0 pb-0",children:[Object(a.jsx)("div",{className:"display-4 ml-3",children:"Let's get started!"}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"container pb-5",children:"It doesn't look like you have any tracked lifts yet... Add one now and start tracking progress!"})]}):Object(a.jsxs)("div",{className:"jumbotron mx-0 pb-0",children:[Object(a.jsxs)("div",{className:"display-4 container",children:["Tracked lifts",Object(a.jsxs)("div",{style:{minWidth:"3em",maxWidth:"5em"},className:"input-group mt-4 float-right",children:[Object(a.jsx)("span",{className:"input-group-text",id:"SearchLifts",children:Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fillRule:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:[Object(a.jsx)("path",{fillRule:"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}),Object(a.jsx)("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"})]})}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Lifts","aria-label":"Search Lifts","aria-describedby":"Search Lifts",onChange:function(e){return function(e){var n=t.filter((function(t){return-1!==t.liftname.toLowerCase().indexOf(e.toLowerCase())}));n===[]||i(n)}(e.target.value)}})]})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"list-group container",children:[f.map((function(e){return Object(a.jsx)(j.b,{to:{pathname:"/lifts",liftId:e._id},className:"list-group-item bg-dark text-white list-group-item-action list-group-item-dark mt-2",style:{borderRadius:"5px",boxShadow:"2px 3px #888888"},children:e.liftname},e._id)})),Object(a.jsx)(g,{postsPerPage:x,totalPosts:r.length,paginate:function(e){return b(e)}})]})})]})}var N=n(6),k=n.n(N);function y(){var e=Object(c.useContext)(O).userData,t=Object(c.useState)([]),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(!1),l=Object(u.a)(i,2),h=l[0],x=l[1],p=Object(b.f)();return Object(c.useEffect)((function(){var t={headers:{"x-auth-token":e.token}};(function(){var e=Object(d.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(f,"/lifts"),t);case 2:200===(n=e.sent).status&&x(!0),r(n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),void 0===e.token&&p.push("/login")}),[e]),h?Object(a.jsx)("div",{className:"",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:"Lets get a good lift in!"}),Object(a.jsx)(j.b,{to:"/newLift",className:"btn btn-primary btn-med",children:"Add new Lift"}),Object(a.jsx)("hr",{}),Object(a.jsx)(v,{userLifts:s})]})}):Object(a.jsx)("div",{className:"h-100 w-100 justify-content-center align-items-center",style:{display:"flex"},children:Object(a.jsx)("div",{style:{width:"25em",height:"25em"},className:"spinner-grow text-center",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})})}var w=function(){var e=Object(c.useContext)(O).userData,t=Object(c.useState)(),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(),l=Object(u.a)(i,2),o=l[0],d=l[1],j=Object(b.f)(),h={liftdate:o,liftname:s};return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"container h-100",children:[Object(a.jsx)("h3",{children:"Add new lift..."}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text",children:"Lift Name"})}),Object(a.jsx)("input",{placeholder:"Bench...",type:"text",className:"form-control",onChange:function(e){return r(e.target.value)}})]}),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text",children:"Date"})}),Object(a.jsx)("input",{type:"date",onChange:function(e){return d(e.target.value)}})]}),Object(a.jsx)("button",{className:"btn btn-primary",onClick:function(t){return function(t){t.preventDefault();var n={headers:{"x-auth-token":e.token}};k.a.post("".concat(f,"/lifts/add"),h,n),j.push("/")}(t)},children:"Create new Lift"})]})]})})},C=n(18),S=n.n(C),D=n(75),L=function(e){var t=e.currentPosts,n=e.dataToGraph,c=[],s=[],r="",i="";switch(n){case"GraphWeight":t.forEach((function(e){var t=S()(e.liftDate).format("MMM D, YY");c.unshift(t),s.unshift(e.liftWeight),r="rgba(16, 77, 162, 0.56)",i="Weight"}));break;case"GraphRPE":t.forEach((function(e){var t=S()(e.liftDate).format("MMM D, YY");c.unshift(t),s.unshift(e.liftRPE),r="rgba(221, 189, 74, 0.73)",i="RPE"}));break;case"GraphVolume":t.forEach((function(e){var t=S()(e.liftDate).format("MMM D, YY");c.unshift(t),s.unshift(e.liftVolume),r="rgba(186, 48, 50, 0.65)",i="Total Volume"}));break;default:t.forEach((function(e){var t=S()(e.liftDate).format("MMM D, YY");c.unshift(t),s.unshift(e.liftWeight),r="rgba(16, 77, 162, 0.56)",i="Weight"}))}var l={labels:c,datasets:[{label:i,data:s,borderColor:"black",borderWidth:2,backgroundColor:r}]};return t.length<1?Object(a.jsx)("div",{className:"text-center py-4",children:Object(a.jsx)("h6",{children:"No workouts found... yet... Add one and start tracking now!"})}):Object(a.jsx)("div",{className:"chart-container",children:Object(a.jsx)(D.Line,{data:l,height:350,options:{scales:{xAxes:[{ticks:{fontSize:12}}],yAxes:[{ticks:{fontSize:12}}]},title:{display:!0,text:"Lift Progress Over Time",fontSize:25},legend:{display:!0,position:"bottom"},maintainAspectRatio:!1}})})},R=function(e){var t=e.open,n=e.onClose,c=e.workoutDetails,s=e.userData,r=e.currentLift,l=e.optimisticWorkoutRemoved,u=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({url:"".concat(f,"/workouts/delete/").concat(c._id),headers:{"x-auth-token":s.token},method:"delete",data:{liftId:r}});case 2:n(),l(c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=S()(c.liftDate).format("MMM D, YYYY");return t?i.a.createPortal(Object(a.jsx)("div",{style:{position:"fixed",zIndex:60,left:0,top:0,right:0,bottom:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.6)"},className:"h-100 d-flex justify-content-center align-items-center",children:Object(a.jsxs)("div",{className:"card mx-3",tabIndex:"-1",children:[Object(a.jsxs)("div",{className:"card-header",children:["Delete Workout",Object(a.jsx)("button",{onClick:n,className:"close","aria-label":"Close",children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:"Are you sure you want to delete this Workout?"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h6",{children:["Lift Date: ",j]}),Object(a.jsxs)("h6",{children:["Lift Weight: ",c.liftWeight]})]}),Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("hr",{}),Object(a.jsx)("button",{onClick:n,type:"button",className:"mr-2 btn btn-secondary",children:"Cancel"}),Object(a.jsx)("button",{onClick:u,className:"ml-2 btn btn-danger",children:"Delete Workout"})]})]})]})}),document.querySelector("#modal")):null},W=function(e){var t=e.open,n=e.onClose,c=e.liftDetails,s=e.userData,r=Object(b.f)();return t?i.a.createPortal(Object(a.jsx)("div",{style:{position:"fixed",zIndex:60,left:0,top:0,right:0,bottom:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.6)"},className:"h-100 d-flex justify-content-center align-items-center",children:Object(a.jsxs)("div",{className:"card mx-3",tabIndex:"-1",children:[Object(a.jsxs)("div",{className:"card-header",children:["Edit Lift",Object(a.jsx)("button",{onClick:n,className:"close","aria-label":"Close",children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:"Do you want to Edit or Delete this Lift?"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("button",{onClick:function(){k()({url:"".concat(f,"/lifts/delete/").concat(c._id),headers:{"x-auth-token":s.token},method:"delete"}),r.push("/")},className:"btn btn-danger",children:"Delete Lift"}),Object(a.jsx)(j.b,{to:{pathname:"/editlift",liftDetails:c},type:"button",className:"ml-3\r btn btn-dark",children:"Edit Lift"})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("button",{onClick:n,type:"button",className:"mr-2 btn btn-secondary",children:"Cancel"})]})]})}),document.querySelector("#modal")):null},M=function(e){var t=e.currentLift,n=e.userData,s=e.onOpen,r=e.onClose,i=e.confirmWorkoutAdded,l=e.optimisticWorkout,j=Object(c.useState)(""),b=Object(u.a)(j,2),h=b[0],x=b[1],p=Object(c.useState)(""),m=Object(u.a)(p,2),O=m[0],g=m[1],v=Object(c.useState)(""),N=Object(u.a)(v,2),y=N[0],w=N[1],C=Object(c.useState)(""),S=Object(u.a)(C,2),D=S[0],L=S[1],R=Object(c.useState)(""),W=Object(u.a)(R,2),M=W[0],E=W[1],P=function(){var e=Object(d.a)(o.a.mark((function e(a){var c,s,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),c={liftDate:h,liftSets:O,liftReps:y,liftRPE:M,liftWeight:D},s={liftdate:h,liftsets:O,liftreps:y,liftRPE:M,liftweight:D},e.next=5,k()({url:"/".concat(t._id),method:"post",headers:{"x-auth-token":n.token},baseURL:"".concat(f,"/lifts/update/"),data:s});case 5:d=e.sent,l(c),r(),console.log(d.data),i(d.status);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s?Object(a.jsxs)("div",{className:"card bg-light border-dark mt-2",children:[Object(a.jsx)("button",{onClick:r,className:"close mt-3","aria-label":"Close",children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("form",{className:"container",children:[Object(a.jsxs)("div",{className:"input-group mb-3 ",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text",children:"Date"})}),Object(a.jsx)("input",{onChange:function(e){return x(e.target.value)},className:"form-control",name:"lift",type:"date"})]}),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text",children:"Sets"})}),Object(a.jsx)("input",{onChange:function(e){return g(e.target.value)},className:"form-control",name:"lift",type:"number"})]}),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text",children:"Reps"})}),Object(a.jsx)("input",{onChange:function(e){return w(e.target.value)},className:"form-control",type:"number"})]}),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text",children:"RPE"})}),Object(a.jsx)("input",{onChange:function(e){return E(e.target.value)},className:"form-control",type:"number"})]}),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text",children:"Weight"})}),Object(a.jsx)("input",{onChange:function(e){return L(e.target.value)},className:"form-control",type:"number"})]}),Object(a.jsx)("button",{onClick:function(e){return P(e)},className:"btn btn-primary",children:"+"})]})})]}):null},E=function(e){var t=e.currentPosts,n=e.openDeleteWorkoutModel,c=e.deleteableWorkout,s=e.deleteClicked;return t.length<1?null:Object(a.jsxs)("table",{className:"table text-center table-sm table-borderless table-dark mb-2",style:{boxShadow:"2px 3px #666666",borderRadius:"5px"},children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{style:{borderRight:"2px solid #888888"},scope:"col",children:"Date"}),Object(a.jsx)("th",{style:{borderRight:"2px solid #888888"},scope:"col",children:"Weight"}),Object(a.jsx)("th",{style:{borderRight:"2px solid #888888"},scope:"col",children:"Sets"}),Object(a.jsx)("th",{style:{borderRight:"2px solid #888888"},scope:"col",children:"Reps"}),Object(a.jsx)("th",{style:{borderRight:"2px solid #888888"},scope:"col",children:"RPE"}),Object(a.jsx)("th",{style:{borderRight:"2px solid #888888"},scope:"col",children:"Total Volume"}),Object(a.jsx)("th",{scope:"col",children:"Edit"})]})}),Object(a.jsx)("tbody",{children:function(e){return e.map((function(e,t){var r=S()(e.liftDate).format("MMM D, YYYY");return Object(a.jsxs)("tr",{style:{borderTop:"1px solid #888888"},children:[Object(a.jsx)("td",{className:"text-center align-middle",style:{borderRight:"2px solid #888888"},children:r}),Object(a.jsx)("td",{className:"text-center align-middle",style:{borderRight:"2px solid #888888"},children:e.liftWeight}),Object(a.jsx)("td",{className:"text-center align-middle",style:{borderRight:"2px solid #888888"},children:e.liftSets}),Object(a.jsx)("td",{className:"text-center align-middle",style:{borderRight:"2px solid #888888"},children:e.liftReps}),Object(a.jsx)("td",{className:"text-center align-middle",style:{borderRight:"2px solid #888888"},children:e.liftRPE}),Object(a.jsx)("td",{className:"text-center align-middle mx-0",style:{borderRight:"2px solid #888888"},children:e.liftVolume}),Object(a.jsx)("td",{className:"text-center align-middle",children:e._id?Object(a.jsx)("button",{onClick:function(){return function(e){n(),s(),c(e)}(e)},className:"btn btn-sm btn-outline-danger",children:"delete"}):Object(a.jsx)("div",{class:"spinner-border mx-3",role:"status",children:Object(a.jsx)("span",{class:"sr-only",children:"Loading..."})})})]},e._id)}))}(t)})]})};function P(e){var t=Object(c.useState)({}),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),l=Object(u.a)(i,2),j=l[0],h=l[1],x=Object(c.useContext)(O).userData,p=Object(c.useState)(!1),m=Object(u.a)(p,2),v=m[0],N=m[1],y=Object(c.useState)({}),w=Object(u.a)(y,2),C=w[0],S=w[1],D=Object(c.useState)(!1),P=Object(u.a)(D,2),I=P[0],A=P[1],z=Object(c.useState)(!1),Y=Object(u.a)(z,2),_=Y[0],T=Y[1],G=Object(c.useState)(!1),V=Object(u.a)(G,2),q=V[0],B=V[1],U=Object(c.useState)(!1),H=Object(u.a)(U,2),J=(H[0],H[1]),F=Object(c.useState)(""),K=Object(u.a)(F,2),Q=K[0],X=K[1],Z=Object(c.useState)(""),$=Object(u.a)(Z,2),ee=$[0],te=($[1],Object(b.f)()),ne=Object(c.useState)(1),ae=Object(u.a)(ne,2),ce=ae[0],se=ae[1],re=Object(c.useState)(5),ie=Object(u.a)(re,2),le=ie[0],oe=ie[1],de=ce*le,ue=de-le,je=j.slice(ue,de);Object(c.useEffect)((function(){(function(){var t=Object(d.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.location.liftId,t.next=3,k()({url:"".concat(f,"/lifts/").concat(n),headers:{"x-auth-token":x.token}});case 3:a=t.sent,r(a.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),function(){var t=Object(d.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({baseURL:"".concat(f,"/workouts/").concat(e.location.liftId),headers:{"x-auth-token":x.token}});case 2:200===(n=t.sent).status&&X(!0),a=n.data.sort((function(e,t){return e.liftDate<t.liftDate?1:-1})),h(a);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),void 0===x.token&&te.push("/login")}),[e.location.liftId,x.token,q]);return Q?Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"container mb-5",children:[Object(a.jsx)(R,{open:v,onClose:function(){return N(!1)},workoutDetails:C,userData:x,currentLift:s._id,optimisticWorkoutRemoved:function(e){return function(e){var t=j.map((function(e){return e._id})).indexOf(e._id);j.splice(t,1),J(!0)}(e)}}),Object(a.jsx)(W,{open:I,onClose:function(){return A(!1)},liftDetails:s,userData:x}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:[s.liftname," - Lift Details "]}),Object(a.jsx)("button",{className:"btn btn-primary float-right",onClick:function(){return T(!0),void B(!1)},children:"Add workout"}),Object(a.jsxs)("button",{onClick:function(){return te.push("/")},className:"btn btn-secondary ml-2 ",children:[Object(a.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-left-square-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{"fill-rule":"evenodd",d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"})})," Back"]}),Object(a.jsx)("button",{onClick:function(){return A(!0)},className:"btn btn-dark mr-2 float-right",children:"Edit Lift"}),Object(a.jsx)("hr",{})]}),Object(a.jsx)("div",{children:Object(a.jsx)(M,{onOpen:_,onClose:function(){T(!1)},currentLift:s,userData:x,confirmWorkoutAdded:function(e){return function(e){200===e&&B(!0)}(e)},optimisticWorkout:function(e){return j.unshift(e)}})}),Object(a.jsxs)("div",{className:"jumbotron px-1 mb-0 pb-0",children:[Object(a.jsx)("h6",{className:"display-4 ml-4",children:"Workouts"}),Object(a.jsx)("div",{className:"float-right mt-4 mr-2",children:Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"pagination pagination-sm",children:[Object(a.jsx)("li",{className:"page-item","aria-current":"page",children:Object(a.jsx)("button",{className:"page-link bg-dark text-white",onClick:function(){return oe(5)},children:"5"})}),Object(a.jsx)("li",{className:"page-item","aria-current":"page",children:Object(a.jsx)("button",{className:"page-link bg-dark text-white",onClick:function(){return oe(10)},children:"10"})}),Object(a.jsx)("li",{className:"page-item","aria-current":"page",children:Object(a.jsx)("button",{className:"page-link bg-dark text-white",onClick:function(){return oe(20)},children:"20"})}),Object(a.jsx)("li",{className:"page-item","aria-current":"page",children:Object(a.jsx)("button",{className:"page-link bg-dark text-white",onClick:function(){return oe(j.length)},children:"All"})})]})})}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"".concat(Q?"":"collapsed"),children:[Object(a.jsx)("div",{className:"panel panel-default",children:Object(a.jsx)(E,{currentPosts:je,deleteableWorkout:S,openDeleteWorkoutModel:function(){return N(!0)},deleteClicked:function(){return J(!1)}})}),Object(a.jsx)(g,{postsPerPage:le,totalPosts:j.length,paginate:function(e){return se(e)}}),Object(a.jsx)("selectData",{}),Object(a.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(a.jsx)(L,{currentPosts:je,dataToGraph:ee,update:!0})})]})]})]})}):Object(a.jsxs)("div",{className:"h-100 text-center d-flex flex-column justify-content-center my-auto align-self-center",children:[Object(a.jsx)("h4",{className:"my-5",children:"Getting your workouts..."}),Object(a.jsx)("div",{className:"h-100",children:Object(a.jsx)("div",{style:{width:"20em",height:"20em"},className:"spinner-grow text-center",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})})]})}var I=function(e){var t=Object(c.useState)({}),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(""),l=Object(u.a)(i,2),o=l[0],d=l[1],j=Object(c.useContext)(O).userData,h=Object(b.f)();Object(c.useEffect)((function(){r(e.location.liftDetails)}),[e]);return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"card container",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h3",{children:"Edit Lift"}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text",children:"Edit Lift Name"})}),Object(a.jsx)("input",{placeholder:s.liftname,type:"text",className:"form-control",onChange:function(e){return d(e.target.value)}})]}),Object(a.jsxs)("button",{onClick:function(){return h.push("/")},className:"btn btn-secondary mr-2 ",children:[Object(a.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-arrow-left-square-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{"fill-rule":"evenodd",d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"})})," Go Back"]}),Object(a.jsx)("button",{className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault();var t={headers:{"x-auth-token":j.token}};k.a.put("".concat(f,"/lifts/edit/").concat(s._id),{liftname:o},t),h.push("/")}(e)},children:"Confirm Edit"})]})]})})})},A=function(){var e=Object(b.f)(),t=Object(c.useContext)(O),n=t.userData,s=t.setUserData;return Object(a.jsx)("div",{className:"navbar navbar-dark bg-dark",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(j.b,{to:"/",className:"navbar-brand",children:Object(a.jsx)("u",{children:"Lift Tracker"})}),n.user?Object(a.jsx)("button",{onClick:function(){window.gapi.auth2.getAuthInstance().signOut(),s({token:void 0,user:void 0}),localStorage.setItem("auth-token",""),e.push("/login")},className:"btn btn-primary",children:"Sign Out"}):Object(a.jsx)("button",{onClick:function(){return e.push("/login")},className:"btn btn-primary",children:"Sign in"})]})})};function z(){return Object(a.jsxs)("div",{style:{height:"100%",background:"#292b2c",fontSize:".7rem",position:"relative"},children:[Object(a.jsx)("div",{style:{padding:"5px",height:"75px",width:"100%",textAlign:"center",top:"0"},className:"text-white-50 d-flex align-items-center justify-content-center",children:Object(a.jsxs)("p",{className:"text-center",children:[Object(a.jsx)("i",{children:"\u201cStrength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.\u201d"}),"- Arnold Schwarzenegger"]})}),Object(a.jsx)("div",{style:{padding:"5px",position:"absolute",textAlign:"center",width:"100%",bottom:"0",backgroundColor:"#3f484f"},children:Object(a.jsx)("a",{className:"text-white-50",href:"http://www.oscarchavez.com",target:"_blank",rel:"noreferrer",children:"www.OscarChavez.com"})})]})}var Y=function(){var e=Object(b.f)(),t=Object(c.useState)(!1),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(!1),l=Object(u.a)(i,2),j=l[0],h=l[1],x=Object(c.useContext)(O),p=x.userData,m=x.setUserData;Object(c.useEffect)((function(){window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"1077904608925-4tg6bgj0o85bntc1i68kt6crvpqgqa7v.apps.googleusercontent.com",scope:"profile email"})}))}),[]);var g=function(){var t=Object(d.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=window.gapi.auth2.getAuthInstance()).signIn().then(Object(d.a)(o.a.mark((function t(){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.currentUser.get().getBasicProfile().getEmail();case 2:return t.t0=t.sent,t.next=5,n.currentUser.get().getId();case 5:return t.t1=t.sent,a={username:t.t0,password:t.t1},r(!0),t.next=10,k.a.post("".concat(f,"/users/signin"),a);case 10:c=t.sent,m({token:c.data.token,user:c.data.user}),200===c.status&&h(!0),e.push("/");case 14:case"end":return t.stop()}}),t)}))));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return s?Object(a.jsxs)("div",{className:"h-100 text-center d-flex flex-column justify-content-center my-auto align-self-center",children:[j?Object(a.jsx)("h4",{className:"mb-4",children:"Welcome!"}):Object(a.jsx)("h4",{className:"mb-4",children:"Loading..."}),Object(a.jsx)("div",{className:"h-100 w-100 justify-content-center align-items-center",children:Object(a.jsx)("div",{style:{width:"20em",height:"20em"},className:"spinner-grow text-center",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})})]}):void 0===p.token?Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container h-100 mt-5 d-flex justify-content-center align-items-center",children:Object(a.jsx)("div",{className:"mt-5 card text-center text-white bg-dark mx-auto",children:Object(a.jsxs)("div",{className:"card-body h-100 d-flex justify-content-center align-items-center",style:{flexDirection:"column"},children:[Object(a.jsx)("h1",{className:"card-title",children:"Welcome to LiftTracker!"}),Object(a.jsx)("h5",{children:"Create workouts and track your progress over time."}),Object(a.jsx)("p",{className:"card-text",children:"Sign in to start tracking your lifts!"}),Object(a.jsx)("button",{onClick:g,className:"btn btn-primary",style:{height:"4em"},children:"Sign-in or create an account with Google"})]})})})}):Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){window.gapi.auth2.getAuthInstance().signOut().then((function(){m({token:void 0,user:void 0}),localStorage.setItem("auth-token","")})),e.push("/login")},className:"btn btn-primary",children:"Welcome "})})},_=n(200),T=n(199),G=function(){var e=Object(c.useState)({token:void 0,user:void 0}),t=Object(u.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=localStorage.getItem("auth-token"))){e.next=8;break}return e.next=4,k.a.post("".concat(f,"/users/tokenIsValid"),null,{headers:{"x-auth-token":t}});case 4:e.sent.data&&(n=k.a.get("".concat(f,"/users/"),{headers:{"x-auth-token":t}}),s({token:t,user:n.data})),e.next=10;break;case 8:localStorage.setItem("auth-token",""),t="";case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j.a,{children:Object(a.jsxs)(O.Provider,{value:{userData:n,setUserData:s},children:[Object(a.jsx)(A,{}),Object(a.jsx)(b.a,{render:function(e){var t=e.location;return Object(a.jsx)(_.a,{className:"MainContent",children:Object(a.jsx)(T.a,{timeout:300,classNames:"fade",children:Object(a.jsxs)(b.c,{location:t,children:[Object(a.jsx)(b.a,{path:"/",exact:!0,component:y}),Object(a.jsx)(b.a,{path:"/login",component:Y}),Object(a.jsx)(b.a,{path:"/newlift",component:w}),Object(a.jsx)(b.a,{path:"/lifts",component:P}),Object(a.jsx)(b.a,{path:"/editlift",component:I})]})},t.key)})}}),Object(a.jsx)(m,{})]})}),Object(a.jsx)(z,{})]})};i.a.render(Object(a.jsx)(G,{}),document.querySelector("#root"))}},[[197,1,2]]]);
//# sourceMappingURL=main.2668bd84.chunk.js.map