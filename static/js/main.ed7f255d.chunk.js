(this.webpackJsonpmater=this.webpackJsonpmater||[]).push([[0],{120:function(e,t,a){e.exports={ContextMenu:"ContextMenu_ContextMenu__1Z_Lz"}},121:function(e,t,a){e.exports={ContextItem:"ContextItem_ContextItem__2QGiA"}},123:function(e,t,a){e.exports={AddFolder:"AddFolder_AddFolder__3WeXx"}},124:function(e,t,a){e.exports={SelectColor:"SelectColor_SelectColor__SFlAX"}},125:function(e,t,a){e.exports=a.p+"static/media/13457.b7a04bd2.jpg"},126:function(e,t,a){e.exports=a.p+"static/media/16876.3a98759d.jpg"},127:function(e,t,a){e.exports={Alert:"Alert_Alert__2BVOW"}},128:function(e,t,a){e.exports=a.p+"static/media/spinner.b56228ae.svg"},129:function(e,t,a){e.exports={Button:"Button_Button__2v4ZM"}},130:function(e,t,a){e.exports=a.p+"static/media/settings.3feaa72e.svg"},131:function(e,t,a){e.exports=a.p+"static/media/key.7ba1a0c0.svg"},132:function(e,t,a){e.exports=a.p+"static/media/logout.be40430c.svg"},133:function(e,t,a){e.exports=a.p+"static/media/instruction.5e1425f7.svg"},134:function(e,t,a){e.exports=a.p+"static/media/menu.d6ad5ae1.svg"},135:function(e,t,a){e.exports=a.p+"static/media/play.ac64af35.svg"},137:function(e,t,a){e.exports={NonAuth:"NonAuth_NonAuth__3AJD8"}},152:function(e,t,a){e.exports=a(182)},157:function(e,t,a){},158:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(157),a(158),a(9)),s=a(86),u=a.n(s),i=a(90),d=a.n(i),m=a(46),p=a.n(m),b=a(120),O=a.n(b),f=function(e){var t=function(){e.closeEvent()},a=function(e){if(null!==e.target.parentElement)for(var a=0;a<e.target.parentElement.children.length;a++)e.target.classList[0]===e.target.parentElement.children[a].classList[0]&&t();else t()};return Object(n.useEffect)((function(){document.addEventListener("click",t),document.addEventListener("contextmenu",a)})),Object(n.useEffect)((function(){return function(){document.removeEventListener("click",t),document.removeEventListener("contextmenu",a)}})),r.a.createElement("div",{style:{top:e.position.y,left:e.position.x},className:O.a.ContextMenu},e.children)},E=a(121),_=a.n(E),k=function(e){return r.a.createElement("div",{onClick:e.clickEvent,className:_.a.ContextItem},e.children)},x=function(e){return{type:"ADD_FOLDER",payload:e}},v=function(e){return{type:"ADD_FOLDER_SUCCESS",payload:e}},j=function(e){return{type:"FOLDER_ERROR",payload:e}},h=function(e){return{type:"DELETE_FOLDER",payload:e}},A=function(e){return{type:"DELETE_FOLDER_SUCCESS",payload:e}},g=function(e){return{type:"ADD_TASK",payload:e}},S=function(e,t){return{type:"ADD_TASK_SUCCESS",payload:e,folderId:t}},I=function(e,t){return{type:"LOAD_TASK_SUCCESS",payload:e,folderId:t}},T=function(e){return{type:"TASK_ERROR",payload:e}},y=function(e){return{type:"LOAD_TASK",payload:e}},N=function(e,t){return{type:"DELETE_TASK",payload:e,folderId:t}},D=function(e,t){return{type:"DELETE_TASK_SUCCESS",payload:e,folderId:t}},w=function(e){return{type:"REGISTER",payload:e}},F=function(e){return{type:"AUTHENTICATE_TOAPI",payload:e}},C=function(e){return{type:"AUTHENTICATE_SUCCESS",payload:e}},L=function(e){return{type:"AUTHENTICATE_ERROR",payload:e}},R=function(e){return{type:"LOADING_START",payload:e}},H=a(22),G=a(20);var M=Object(H.b)(null,(function(e){return{onDelete:function(t){return e(h(t))}}}))((function(e){var t=[p.a.FolderItem],a=Object(G.g)();switch(e.folder.color.toLowerCase()){case"yellow":t.push(p.a.FolderItemYellow);break;case"white":t.push(p.a.FolderItemWhite);break;case"green":t.push(p.a.FolderItemGreen);break;case"purple":t.push(p.a.FolderItemPurple);break;case"blue":t.push(p.a.FolderItemBlue);break;case"red":t.push(p.a.FolderItemRed);break;default:t.push(p.a.FolderItemWhite)}var c=Object(n.useState)(!1),l=Object(o.a)(c,2),s=l[0],u=l[1],i=Object(n.useState)({x:0,y:0}),d=Object(o.a)(i,2),m=d[0],b=d[1],O=Object(n.useState)(-1),E=Object(o.a)(O,2),_=E[0],x=E[1],v=r.a.createElement(f,{position:m,closeEvent:function(){return u(!1)}},r.a.createElement(k,{clickEvent:function(){return e.onDelete(_)}},"Delete"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onContextMenu:e.folder.required?null:function(t){return function(e,t){e.preventDefault(),u(!0),b({x:e.pageX,y:e.pageY}),x(t)}(t,e.folder.id)},className:t.join(" ")},r.a.createElement("a",{href:"/"+e.folder.id,onClick:function(t){return function(e,t){e.preventDefault(),a.push({pathname:"/"+t})}(t,e.folder.id)}},r.a.createElement("i",{style:{color:"white"===e.folder.color.toLowerCase()?"lightgray":e.folder.color.toLowerCase(),marginRight:10},className:"material-icons"},"folder"),e.folder.name)),s?v:null)})),B=a(123),U=a.n(B),P=function(e){return r.a.createElement("div",{className:U.a.AddFolder},r.a.createElement("input",{value:e.value,onChange:function(t){return e.setName(t.target.value)},placeholder:"New Folder"}),r.a.createElement("button",{onClick:e.openModal},r.a.createElement("i",{style:{color:"white"===e.color?"rgb(189, 189, 189)":e.color},className:"material-icons"},"color_lens")),r.a.createElement("button",{onClick:e.addFolderClick},r.a.createElement("i",{className:"material-icons"},"add")))},W=a(95),K=a.n(W),Y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:K.a.Modal},e.children),r.a.createElement("div",{className:K.a.backgroudModal,onClick:function(){return e.modalHandler(!1)}}))},z=a(124),X=a.n(z),q=function(e){return r.a.createElement("div",{className:X.a.SelectColor},["white","yellow","red","green","purple","blue"].map((function(t){return r.a.createElement("button",{key:t,onClick:function(){return e.setColor(t)}},r.a.createElement("i",{style:{color:"white"===t?"rgb(189, 189, 189)":t},className:"material-icons"},"color_lens"),t)})))},V=a(222);var J=Object(H.b)((function(e){return{folders:e.folders}}),(function(e){return{onAdd:function(t){return e(x(t))}}}))((function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)("white"),u=Object(o.a)(s,2),i=u[0],m=u[1],p=Object(n.useState)(""),b=Object(o.a)(p,2),O=b[0],f=b[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:d.a.SlideNav},e.folders.map((function(e,t){return r.a.createElement(M,{key:t,folder:e})})),r.a.createElement(P,{color:i,addFolderClick:function(){e.onAdd({name:O,color:i}),m("white"),f("")},value:O,openModal:function(){return l(!0)},setName:f})),r.a.createElement("div",{onClick:e.closeHandler,className:d.a.BackgroundSlide}),r.a.createElement(V.a,{in:c,timeout:500,classNames:"modalFade",unmountOnExit:!0},r.a.createElement(Y,{modalHandler:l},r.a.createElement(q,{setColor:function(e){return m(e),l(!1)}}))))})),Q=a(81),Z=a.n(Q),$=a(125),ee=a.n($);var te=Object(H.b)(null,(function(e){return{onRegistration:function(t,a,n){return e(w({username:t,email:a,password:n}))}}}))((function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),i=u[0],d=u[1],m=Object(n.useState)(""),p=Object(o.a)(m,2),b=p[0],O=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Z.a.Authorization},r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.onRegistration(c,i,b)}(t)}},r.a.createElement("h2",null,"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"),r.a.createElement("input",{type:"text",placeholder:"Username",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{type:"email",placeholder:"Email",value:i,onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Password",value:b,onChange:function(e){return O(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Registration"}),r.a.createElement("button",{onClick:e.onToggle},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u0442\u0438\u0441\u044c")),r.a.createElement("div",null,r.a.createElement("img",{alt:"img",src:ee.a}))))})),ae=a(126),ne=a.n(ae);var re=Object(H.b)(null,(function(e){return{onAuthenticate:function(t,a){return e(F({email:t,password:a}))}}}))((function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),i=u[0],d=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Z.a.Authorization},r.a.createElement("div",null,r.a.createElement("img",{alt:"img",src:ne.a})),r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.onAuthenticate(c,i)}(t)}},r.a.createElement("h2",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u0442\u0438\u0441\u044c"),r.a.createElement("input",{type:"email",placeholder:"Email",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Password",value:i,onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Submit"}),r.a.createElement("button",{onClick:e.onToggle},"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"))))})),ce=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(te,{onToggle:function(){return c(!1)}}):r.a.createElement(re,{onToggle:function(){return c(!0)}}))},le=a(127),oe=a.n(le),se=a(128),ue=a.n(se),ie=function(e){var t=e.time,a=e.closeEvent;return Object(n.useEffect)((function(){var e=null;return 0!==t&&(e=setTimeout(a,t)),function(){null!=e&&clearTimeout(e)}}),[]),r.a.createElement("div",{className:oe.a.Alert},r.a.createElement("div",null,e.children),e.loading?r.a.createElement("img",{src:ue.a,alt:"Spin"}):r.a.createElement("i",{onClick:e.closeEvent,className:"material-icons"},"close"))},de=a(129),me=a.n(de),pe=function(e){return r.a.createElement("button",{onClick:e.onClick,className:me.a.Button},e.children)},be=a(130),Oe=a.n(be),fe=a(131),Ee=a.n(fe),_e=a(132),ke=a.n(_e),xe=a(133),ve=a.n(xe),je=a(134),he=a.n(je);var Ae=Object(H.b)((function(e){return{isAuthenticate:e.isAuthenticate,modalAuth:e.modalAuth,alert:e.alert,folders:e.folders}}),(function(e){return{onLogout:function(){return e({type:"LOGOUT"})},onModelOpen:function(t){return e({type:"MODAL_OPEN",payload:t})},onCloseAlert:function(){return e({type:"CLOSE_ALERT"})},onAuth:function(){return e({type:"AUTHENIICATE"})},loadAllFolders:function(){return e({type:"ADD_ALL_FOLDER"})}}}))((function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),d=i[0],m=i[1],p=Object(G.g)(),b=Object(G.h)().id;Object(n.useEffect)((function(){e.onAuth()}),[]),Object(n.useEffect)((function(){e.isAuthenticate&&e.loadAllFolders()}),[e.isAuthenticate]),Object(n.useEffect)((function(){for(var t=0;t<e.folders.length;t++)e.folders[t].id===b&&m(e.folders[t].name)}),[b,e.folders]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{in:e.modalAuth,timeout:500,classNames:"modalFade",unmountOnExit:!0},r.a.createElement(Y,{modalHandler:e.onModelOpen,open:e.modalAuth},r.a.createElement(ce,null))),r.a.createElement("div",{className:u.a.NavBar},r.a.createElement("div",{className:u.a.Container},e.isAuthenticate?r.a.createElement(pe,{onClick:function(){return l(!c)}},r.a.createElement("img",{src:he.a,alt:"B"})):null),r.a.createElement("div",null,r.a.createElement("h2",null,d)),r.a.createElement("div",{className:u.a.Container},r.a.createElement(pe,null,r.a.createElement("img",{src:ve.a,alt:"B"})),r.a.createElement(pe,null,r.a.createElement("img",{src:Oe.a,alt:"B"})),e.isAuthenticate?r.a.createElement(pe,{onClick:function(){p.push({pathname:"/"}),e.onLogout()}},r.a.createElement("img",{src:ke.a,alt:"B"})):r.a.createElement(pe,{onClick:function(){p.push({pathname:"/"}),e.onModelOpen(!0)}},r.a.createElement("img",{src:Ee.a,alt:"B"})))),e.isAuthenticate?r.a.createElement(V.a,{in:c,timeout:500,classNames:"slideFade",unmountOnExit:!0},r.a.createElement(J,{open:c,closeHandler:function(){return l(!1)}})):null,e.alert.status?r.a.createElement(ie,{time:e.alert.time,loading:e.alert.loading,closeEvent:e.onCloseAlert},e.alert.text):null)})),ge=a(36),Se=a(96),Ie=a.n(Se),Te=a(41),ye=a.n(Te),Ne=a(135),De=a.n(Ne);var we=Object(H.b)(null,(function(e){return{onDelete:function(t,a){return e(N(t,a))}}}))((function(e){var t=[ye.a.Task],a=Object(G.h)().id;switch(e.task.color.toLowerCase()){case"yellow":t.push(ye.a.TaskYellow);break;case"blue":t.push(ye.a.TaskBlue);break;case"purple":t.push(ye.a.TaskPurple);break;case"white":t.push(ye.a.TaskWhite);break;case"green":t.push(ye.a.TaskGreen);break;case"red":t.push(ye.a.TaskRed);break;default:t.push(ye.a.TaskWhite)}var c=Object(n.useState)(!1),l=Object(ge.a)(c,2),o=l[0],s=l[1],u=Object(n.useState)({x:0,y:0}),i=Object(ge.a)(u,2),d=i[0],m=i[1],p=Object(n.useState)(-1),b=Object(ge.a)(p,2),O=b[0],E=b[1],_=null;if(null!==e.task.dateTime){var x=e.task.dateTime.split("T");_=r.a.createElement(r.a.Fragment,null,"0001-01-01"!==x[0]?r.a.createElement("span",null,x[0]):null,"00:00:00"!==x[1]?r.a.createElement("span",null,x[1].split(":")[0]+":"+x[1].split(":")[1]):null)}var v=r.a.createElement(f,{position:d,closeEvent:function(){return s(!1)}},r.a.createElement(k,{clickEvent:function(){return e.onDelete(O,a)}},"Delete"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onContextMenu:function(t){return function(e,t){e.preventDefault(),s(!0),m({x:e.pageX,y:e.pageY}),E(t)}(t,e.task.id)},className:t.join(" ")},r.a.createElement("span",null,e.task.text),r.a.createElement("div",null,r.a.createElement(pe,null,r.a.createElement("img",{src:De.a,alt:"B"})),r.a.createElement("div",{className:ye.a.TaskTime},_))),o?v:null)})),Fe=a(31),Ce=a.n(Fe),Le=a(97),Re=a(220),He=a(21),Ge=a(217),Me=a(224),Be=a(219),Ue=a(225),Pe=function(e){var t=[Ce.a.AddTask];switch(e.color.toLowerCase()){case"yellow":t.push(Ce.a.AddTaskYellow);break;case"blue":t.push(Ce.a.AddTaskBlue);break;case"purple":t.push(Ce.a.AddTaskPurple);break;case"white":t.push(Ce.a.AddTaskWhite);break;case"green":t.push(Ce.a.AddTaskGreen);break;case"red":t.push(Ce.a.AddTaskRed);break;default:t.push(Ce.a.AddTaskWhite)}var a=Object(n.useState)(!1),c=Object(ge.a)(a,2),l=c[0],o=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.join(" ")},r.a.createElement(Re.a,{required:!0,className:Ce.a.TextField}),r.a.createElement("button",{onClick:function(){return o(!0)}},r.a.createElement("i",{style:{color:"white"===e.color?"rgb(189, 189, 189)":e.color},className:"material-icons"},"color_lens")),r.a.createElement(He.a,{utils:Le.a},r.a.createElement(Ge.a,{value:e.date,onChange:e.changeDate,animateYearScrolling:!0,format:"dd-MM-yyyy",autoOk:!0,minDate:new Date("2020-07-01"),emptyLabel:"Date",className:Ce.a.Picker})),r.a.createElement(He.a,{utils:Le.a},r.a.createElement(Me.a,{clearable:!0,ampm:!1,value:e.time,onChange:e.changeTime,emptyLabel:"Time",className:Ce.a.Picker})),r.a.createElement(Be.a,{value:"",className:Ce.a.Picker,displayEmpty:!0,inputProps:{"aria-label":"Without label"}},r.a.createElement(Ue.a,{value:"",disabled:!0},"Repeat"),r.a.createElement(Ue.a,{value:"Day"},"Every day"),r.a.createElement(Ue.a,{value:"Week"},"Every week"),r.a.createElement(Ue.a,{value:"Month"},"Every month")),r.a.createElement("button",{onClick:e.addTask},r.a.createElement("i",{className:"material-icons"},"add"))),r.a.createElement(V.a,{in:l,timeout:500,classNames:"modalFade",unmountOnExit:!0},r.a.createElement(Y,{modalHandler:o},r.a.createElement(q,{setColor:function(t){e.changeColor(t),o(!1)}}))))},We=a(223);var Ke=Object(H.b)((function(e){return{tasks:e.tasks}}),(function(e){return{onAdd:function(t){return e(g(t))},loadTask:function(t){return e(y(t))}}}))((function(e){var t=Object(G.h)().id;Object(n.useEffect)((function(){null!=e.tasks[t]&&void 0!==e.tasks[t]||e.loadTask(t)}),[t]);var a=Object(n.useState)("white"),c=Object(ge.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(""),u=Object(ge.a)(s,2),i=u[0],d=u[1],m=Object(n.useState)(null),p=Object(ge.a)(m,2),b=p[0],O=p[1],f=Object(n.useState)(null),E=Object(ge.a)(f,2),_=E[0],k=E[1];return r.a.createElement("div",{className:Ie.a.Tasks},r.a.createElement("div",{className:Ie.a.TaskList},r.a.createElement(We.a,null,void 0===e.tasks[t]?null:e.tasks[t].map((function(e,t){return r.a.createElement(V.a,{key:t,timeout:300,classNames:"item"},r.a.createElement(we,{task:e}))}))),r.a.createElement(Pe,{text:i,color:l,time:b,date:_,changeColor:function(e){return o(e)},changeText:function(e){return d(e)},changeDate:function(e){return k(e)},changeTime:function(e){return O(e)},addTask:function(){var a=null;if(null===_||""===_)a="0001-01-01T";else{var n=_.getMonth()<=9?"0"+(_.getMonth()+1):_.getMonth()+1,r=_.getDate()<=9?"0"+_.getDate():_.getDate();a=_.getFullYear()+"-"+n+"-"+r+"T"}null===b||""===b?a+="00:00":a+=(b.getHours()<=9?"0"+b.getHours():b.getHours())+":"+(b.getMinutes()<=9?"0"+b.getMinutes():b.getMinutes());e.onAdd({color:l,text:i,datetime:"0001-01-01T00:00"===a?null:a,FolderId:t}),o("white"),d(""),k(null),O(null)}})))})),Ye=a(62),ze=a(137),Xe=a.n(ze),qe=function(){return r.a.createElement("div",{className:Xe.a.NonAuth},"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0449\u043e\u0431 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044c \u0434\u0430\u043d\u0438\u043c \u0441\u0430\u0439\u0442\u043e\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u0442\u0438\u0441\u044c")};var Ve=Object(H.b)((function(e){return{isAuthenticate:e.isAuthenticate,fId:e.folders}}))((function(e){var t=r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,null),r.a.createElement(qe,null)),a=r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,null),r.a.createElement(Ke,null));return r.a.createElement(Ye.a,null,r.a.createElement(G.d,null,r.a.createElement(G.b,{path:"/:id"},e.isAuthenticate?a:t),void 0!==e.fId[0]&&!0===e.isAuthenticate?r.a.createElement(G.a,{to:"/"+e.fId[0].id}):r.a.createElement(G.b,{path:"/",exact:!0},t)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=a(51),Qe=a(10),Ze=a(13),$e={folders:[],tasks:{},isAuthenticate:!1,modalAuth:!1,alert:{status:!1,text:"",loading:!1,time:0}};var et=a(138),tt=a(19),at=a.n(tt),nt=a(33),rt=a(5),ct=a(35),lt=a.n(ct),ot="https://tasklistapirea.azurewebsites.net/api/",st=at.a.mark(mt),ut=at.a.mark(pt);function it(e){return lt.a.post(ot+"Login",{Email:e.payload.email,Password:e.payload.password})}function dt(e){return lt.a.post(ot+"Register",{Username:e.payload.username,Email:e.payload.email,Password:e.payload.password})}function mt(){var e,t,a=arguments;return at.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:F,n.prev=1,n.next=4,Object(rt.c)(R("\u0412\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u044f."));case 4:return n.next=6,Object(rt.b)(it,e);case 6:if((t=n.sent).error){n.next=14;break}return n.next=10,Object(rt.c)({type:"LOADING_FINISH"});case 10:return n.next=12,Object(rt.c)(C(t.data));case 12:n.next=18;break;case 14:return n.next=16,Object(rt.c)({type:"LOADING_FINISH"});case 16:return n.next=18,Object(rt.c)(L(t));case 18:n.next=40;break;case 20:if(n.prev=20,n.t0=n.catch(1),void 0!==n.t0.response){n.next=29;break}return n.next=25,Object(rt.c)({type:"LOADING_FINISH"});case 25:return n.next=27,Object(rt.c)(L("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 27:n.next=40;break;case 29:if(401!==n.t0.response.data.status){n.next=36;break}return n.next=32,Object(rt.c)({type:"LOADING_FINISH"});case 32:return n.next=34,Object(rt.c)(L("\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0437 \u0442\u0430\u043a\u0438\u043c\u0438 \u0434\u0430\u043d\u0438\u043c\u0438 \u043d\u0435 \u0456\u0441\u043d\u0443\u0454"));case 34:n.next=40;break;case 36:return n.next=38,Object(rt.c)({type:"LOADING_FINISH"});case 38:return n.next=40,Object(rt.c)(L("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 40:case"end":return n.stop()}}),st,null,[[1,20]])}function pt(){var e,t,a=arguments;return at.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:w,n.prev=1,n.next=4,Object(rt.c)(R("\u0412\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f."));case 4:return n.next=6,Object(rt.b)(dt,e);case 6:if((t=n.sent).error){n.next=14;break}return n.next=10,Object(rt.c)({type:"LOADING_FINISH"});case 10:return n.next=12,Object(rt.c)(C(t.data));case 12:n.next=18;break;case 14:return n.next=16,Object(rt.c)({type:"LOADING_FINISH"});case 16:return n.next=18,Object(rt.c)(L(t));case 18:n.next=38;break;case 20:if(n.prev=20,n.t0=n.catch(1),void 0!==n.t0.response){n.next=27;break}return n.next=25,Object(rt.c)({type:"LOADING_FINISH"});case 25:return n.next=27,Object(rt.c)(L("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 27:if("\u0414\u0430\u043d\u0438\u0439 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0443\u0436\u0435 \u0456\u0441\u043d\u0443\u0454"!==n.t0.response.data){n.next=34;break}return n.next=30,Object(rt.c)({type:"LOADING_FINISH"});case 30:return n.next=32,Object(rt.c)(L("\u0414\u0430\u043d\u0438\u0439 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0443\u0436\u0435 \u0456\u0441\u043d\u0443\u0454"));case 32:n.next=38;break;case 34:return n.next=36,Object(rt.c)({type:"LOADING_FINISH"});case 36:return n.next=38,Object(rt.c)(L("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 38:case"end":return n.stop()}}),ut,null,[[1,20]])}var bt=[Object(rt.d)("AUTHENTICATE_TOAPI",mt),Object(rt.d)("REGISTER",pt)],Ot=at.a.mark(vt),ft=at.a.mark(jt),Et=at.a.mark(ht);function _t(){return lt.a.get(ot+"Folder",{headers:{Authorization:"Bearer "+window.localStorage.token}})}function kt(e){return lt.a.post(ot+"Folder",{Color:e.payload.color,Name:e.payload.name},{headers:{Authorization:"Bearer "+window.localStorage.token}})}function xt(e){return lt.a.delete(ot+"Folder/"+e.payload,{headers:{Authorization:"Bearer "+window.localStorage.token}})}function vt(){var e;return at.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(rt.b)(_t);case 3:if((e=t.sent).error){t.next=9;break}return t.next=7,Object(rt.c)({type:"ADD_ALL_FOLDERS_SUCCESS",payload:e.data});case 7:t.next=11;break;case 9:return t.next=11,Object(rt.c)(j(e));case 11:t.next=22;break;case 13:if(t.prev=13,t.t0=t.catch(0),void 0!==t.t0.response){t.next=20;break}return t.next=18,Object(rt.c)(j("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 18:t.next=22;break;case 20:return t.next=22,Object(rt.c)(j("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 22:case"end":return t.stop()}}),Ot,null,[[0,13]])}function jt(){var e,t,a=arguments;return at.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:x,n.prev=1,n.next=4,Object(rt.c)(R("\u0414\u043e\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0441\u043f\u0438\u0441\u043e\u043a."));case 4:return n.next=6,Object(rt.b)(kt,e);case 6:if((t=n.sent).error){n.next=14;break}return n.next=10,Object(rt.c)({type:"LOADING_FINISH"});case 10:return n.next=12,Object(rt.c)(v(t.data));case 12:n.next=18;break;case 14:return n.next=16,Object(rt.c)({type:"LOADING_FINISH"});case 16:return n.next=18,Object(rt.c)(j(t));case 18:n.next=33;break;case 20:if(n.prev=20,n.t0=n.catch(1),void 0!==n.t0.response){n.next=29;break}return n.next=25,Object(rt.c)({type:"LOADING_FINISH"});case 25:return n.next=27,Object(rt.c)(j("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 27:n.next=33;break;case 29:return n.next=31,Object(rt.c)({type:"LOADING_FINISH"});case 31:return n.next=33,Object(rt.c)(j("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 33:case"end":return n.stop()}}),ft,null,[[1,20]])}function ht(){var e,t,a=arguments;return at.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:h,n.prev=1,n.next=4,Object(rt.c)(R("\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0441\u043f\u0438\u0441\u043a\u0430."));case 4:return n.next=6,Object(rt.b)(xt,e);case 6:if((t=n.sent).error){n.next=14;break}return n.next=10,Object(rt.c)({type:"LOADING_FINISH"});case 10:return n.next=12,Object(rt.c)(A(t.data));case 12:n.next=18;break;case 14:return n.next=16,Object(rt.c)({type:"LOADING_FINISH"});case 16:return n.next=18,Object(rt.c)(j(t));case 18:n.next=33;break;case 20:if(n.prev=20,n.t0=n.catch(1),void 0!==n.t0.response){n.next=29;break}return n.next=25,Object(rt.c)({type:"LOADING_FINISH"});case 25:return n.next=27,Object(rt.c)(j("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 27:n.next=33;break;case 29:return n.next=31,Object(rt.c)({type:"LOADING_FINISH"});case 31:return n.next=33,Object(rt.c)(j("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 33:case"end":return n.stop()}}),Et,null,[[1,20]])}var At=[Object(rt.d)("ADD_FOLDER",jt),Object(rt.d)("ADD_ALL_FOLDER",vt),Object(rt.d)("DELETE_FOLDER",ht)],gt=at.a.mark(Dt),St=at.a.mark(wt),It=at.a.mark(Ft);function Tt(e){return lt.a.get(ot+"Task/"+e.payload,{headers:{Authorization:"Bearer "+window.localStorage.token}})}function yt(e){return lt.a.post(ot+"Task",e.payload,{headers:{Authorization:"Bearer "+window.localStorage.token}})}function Nt(e){return lt.a.delete(ot+"Task/"+e.payload,{headers:{Authorization:"Bearer "+window.localStorage.token}})}function Dt(){var e,t,a,n=arguments;return at.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:y,r.prev=1,r.next=4,Object(rt.c)(R("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0437\u0430\u0434\u0430\u0447."));case 4:return r.next=6,Object(rt.b)(Tt,e);case 6:if(t=r.sent,a=e.payload,t.error){r.next=15;break}return r.next=11,Object(rt.c)({type:"LOADING_FINISH"});case 11:return r.next=13,Object(rt.c)(I(t.data,a));case 13:r.next=19;break;case 15:return r.next=17,Object(rt.c)({type:"LOADING_FINISH"});case 17:return r.next=19,Object(rt.c)(T(t));case 19:r.next=34;break;case 21:if(r.prev=21,r.t0=r.catch(1),void 0!==r.t0.response){r.next=30;break}return r.next=26,Object(rt.c)({type:"LOADING_FINISH"});case 26:return r.next=28,Object(rt.c)(T("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 28:r.next=34;break;case 30:return r.next=32,Object(rt.c)({type:"LOADING_FINISH"});case 32:return r.next=34,Object(rt.c)(T("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 34:case"end":return r.stop()}}),gt,null,[[1,21]])}function wt(){var e,t,a,n=arguments;return at.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:g,r.prev=1,r.next=4,Object(rt.c)(R("\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0437\u0430\u0434\u0430\u0447\u0456."));case 4:return r.next=6,Object(rt.b)(yt,e);case 6:if(t=r.sent,a=e.payload.FolderId,t.error){r.next=15;break}return r.next=11,Object(rt.c)({type:"LOADING_FINISH"});case 11:return r.next=13,Object(rt.c)(S(t.data,a));case 13:r.next=19;break;case 15:return r.next=17,Object(rt.c)({type:"LOADING_FINISH"});case 17:return r.next=19,Object(rt.c)(T(t));case 19:r.next=35;break;case 21:if(r.prev=21,r.t0=r.catch(1),void 0!==r.t0.response){r.next=31;break}return console.log(r.t0),r.next=27,Object(rt.c)({type:"LOADING_FINISH"});case 27:return r.next=29,Object(rt.c)(T("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 29:r.next=35;break;case 31:return r.next=33,Object(rt.c)({type:"LOADING_FINISH"});case 33:return r.next=35,Object(rt.c)(T("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 35:case"end":return r.stop()}}),St,null,[[1,21]])}function Ft(){var e,t,a,n=arguments;return at.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:N,r.prev=1,r.next=4,Object(rt.c)(R("\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u0434\u0430\u0447\u0456."));case 4:return r.next=6,Object(rt.b)(Nt,e);case 6:if(t=r.sent,a=e.folderId,t.error){r.next=15;break}return r.next=11,Object(rt.c)({type:"LOADING_FINISH"});case 11:return r.next=13,Object(rt.c)(D(t.data,a));case 13:r.next=19;break;case 15:return r.next=17,Object(rt.c)({type:"LOADING_FINISH"});case 17:return r.next=19,Object(rt.c)(T(t));case 19:r.next=34;break;case 21:if(r.prev=21,r.t0=r.catch(1),void 0!==r.t0.response){r.next=30;break}return r.next=26,Object(rt.c)({type:"LOADING_FINISH"});case 26:return r.next=28,Object(rt.c)(T("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 28:r.next=34;break;case 30:return r.next=32,Object(rt.c)({type:"LOADING_FINISH"});case 32:return r.next=34,Object(rt.c)(T("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 34:case"end":return r.stop()}}),It,null,[[1,21]])}var Ct=[Object(rt.d)("LOAD_TASK",Dt),Object(rt.d)("ADD_TASK",wt),Object(rt.d)("DELETE_TASK",Ft)],Lt=at.a.mark(Rt);function Rt(){return at.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rt.a)([].concat(Object(nt.a)(bt),Object(nt.a)(At),Object(nt.a)(Ct)));case 2:case"end":return e.stop()}}),Lt)}var Ht="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Je.c,Gt=Object(et.a)(),Mt=[Gt],Bt=Ht(Je.a.apply(void 0,Mt)),Ut=Object(Je.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ALL_FOLDERS_SUCCESS":return Object(Ze.a)({},e,{folders:t.payload});case"ADD_FOLDER_SUCCESS":return Object(Ze.a)({},e,{folders:e.folders.concat({id:t.payload.id,color:t.payload.color,name:t.payload.name})});case"FOLDER_ERROR":return Object(Ze.a)({},e,{alert:Object(Ze.a)({},e.alert,{text:t.payload,status:!0,time:2e3,loading:!1})});case"DELETE_FOLDER_SUCCESS":return Object(Ze.a)({},e,{folders:e.folders.filter((function(e){return e.id!==t.payload.id}))});case"LOAD_TASK_SUCCESS":var a=t.folderId.toString();if(0===t.payload.length)return Object(Ze.a)({},e,{tasks:Object(Ze.a)({},e.tasks,Object(Qe.a)({},a,[]))});var n=Object(Ze.a)({},e.tasks,Object(Qe.a)({},a,t.payload));return Object(Ze.a)({},e,{tasks:n});case"ADD_TASK_SUCCESS":var r=t.folderId.toString(),c=Object(Ze.a)({},e.tasks,Object(Qe.a)({},r,e.tasks[r].concat(t.payload)));return Object(Ze.a)({},e,{tasks:c});case"TASK_ERROR":return Object(Ze.a)({},e,{alert:Object(Ze.a)({},e.alert,{text:t.payload,status:!0,time:2e3,loading:!1})});case"DELETE_TASK_SUCCESS":var l=t.folderId.toString(),o=Object(Ze.a)({},e.tasks,Object(Qe.a)({},l,e.tasks[l].filter((function(e){return e.id!==t.payload.id}))));return Object(Ze.a)({},e,{tasks:o});case"AUTHENTICATE_SUCCESS":var s=new Date;return window.localStorage.setItem("token",t.payload.token),s.setMinutes(s.getMinutes()+Number(t.payload.expires)),window.localStorage.setItem("expires",s.toString()),Object(Ze.a)({},e,{alert:Object(Ze.a)({},e.alert,{text:"\u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u043b\u0438\u0441\u044c",status:!0,time:2e3,loading:!1}),isAuthenticate:!0,modalAuth:!1});case"AUTHENTICATE_ERROR":return Object(Ze.a)({},e,{alert:Object(Ze.a)({},e.alert,{text:t.payload,status:!0,time:2e3,loading:!1})});case"AUTHENIICATE":var u=new Date;return(null!==window.localStorage.getItem("token")||null!==window.localStorage.getItem("expires"))&&u<=new Date(window.localStorage.getItem("expires"))?Object(Ze.a)({},e,{isAuthenticate:!0}):Object(Ze.a)({},e,{isAuthenticate:!1});case"LOGOUT":return window.localStorage.removeItem("token"),window.localStorage.removeItem("expires"),Object(Ze.a)({},e,{isAuthenticate:!1,alert:Object(Ze.a)({},e.alert,{text:"\u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0439\u0448\u043b\u0438 \u0437 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443",status:!0,time:2e3,loading:!1})});case"LOADING_START":return Object(Ze.a)({},e,{alert:Object(Ze.a)({},e.alert,{text:t.payload,status:!0,time:0,loading:!0})});case"LOADING_FINISH":return Object(Ze.a)({},e,{alert:Object(Ze.a)({},e.alert,{status:!1,time:0,loading:!1,text:""})});case"MODAL_OPEN":return Object(Ze.a)({},e,{modalAuth:t.payload});case"CLOSE_ALERT":return Object(Ze.a)({},e,{alert:Object(Ze.a)({},e.alert,{status:!1})});default:return e}}),Bt);Gt.run(Rt);var Pt=r.a.createElement(H.a,{store:Ut},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ve,null)));l.a.render(Pt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,a){e.exports={AddTask:"AddTask_AddTask__1dcqp",TextField:"AddTask_TextField__1uKxN",Picker:"AddTask_Picker__5kLaq",AddTaskYellow:"AddTask_AddTaskYellow__3k30J",AddTaskRed:"AddTask_AddTaskRed__3ftDr",AddTaskGreen:"AddTask_AddTaskGreen__2VtKw",AddTaskWhite:"AddTask_AddTaskWhite__8FUA2",AddTaskPurple:"AddTask_AddTaskPurple__1XPTI",AddTaskBlue:"AddTask_AddTaskBlue__3Ma2E"}},41:function(e,t,a){e.exports={Task:"Task_Task__pX7RO",TaskYellow:"Task_TaskYellow__3me0n",TaskRed:"Task_TaskRed__p1B-N",TaskGreen:"Task_TaskGreen__2qR25",TaskWhite:"Task_TaskWhite__20Z2n",TaskPurple:"Task_TaskPurple__3gUS4",TaskBlue:"Task_TaskBlue__wNKbi",TaskTime:"Task_TaskTime__2T-4k"}},46:function(e,t,a){e.exports={FolderItem:"FolderItem_FolderItem__17tux",FolderItemWhite:"FolderItem_FolderItemWhite__u61ox",FolderItemYellow:"FolderItem_FolderItemYellow__bXtaa",FolderItemRed:"FolderItem_FolderItemRed__1uTTp",FolderItemGreen:"FolderItem_FolderItemGreen__3AUKg",FolderItemBlue:"FolderItem_FolderItemBlue__3Qd8B",FolderItemPurple:"FolderItem_FolderItemPurple__33PgZ"}},81:function(e,t,a){e.exports={Authorization:"Authorization_Authorization__2eQEQ"}},86:function(e,t,a){e.exports={NavBar:"NavBar_NavBar__11ZEV",Container:"NavBar_Container__3yHMY"}},90:function(e,t,a){e.exports={SlideNav:"SlideNav_SlideNav__1GuBP",SlideNavOpen:"SlideNav_SlideNavOpen__3x6Vt",SlideNavClose:"SlideNav_SlideNavClose__2tdCA",BackgroundSlide:"SlideNav_BackgroundSlide__1ks2H",BackgroundOpen:"SlideNav_BackgroundOpen__2aJSj",BackgroundClose:"SlideNav_BackgroundClose__1B2lR"}},95:function(e,t,a){e.exports={Modal:"Modal_Modal__2rRqh",modalClose:"Modal_modalClose__2atnG",modalOpen:"Modal_modalOpen__3W_Pi",backgroudModal:"Modal_backgroudModal__ObfNv",backgroudModalOpen:"Modal_backgroudModalOpen__ER9IQ",backgroudModalClose:"Modal_backgroudModalClose__2E8yL"}},96:function(e,t,a){e.exports={Tasks:"Tasks_Tasks__3x0A4",TaskList:"Tasks_TaskList__1Bwux"}}},[[152,1,2]]]);
//# sourceMappingURL=main.ed7f255d.chunk.js.map