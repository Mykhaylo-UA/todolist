(this.webpackJsonpmater=this.webpackJsonpmater||[]).push([[0],{121:function(e,t,a){e.exports={ContextMenu:"ContextMenu_ContextMenu__1Z_Lz"}},122:function(e,t,a){e.exports={ContextItem:"ContextItem_ContextItem__2QGiA"}},124:function(e,t,a){e.exports={AddFolder:"AddFolder_AddFolder__3WeXx"}},125:function(e,t,a){e.exports={SelectColor:"SelectColor_SelectColor__SFlAX"}},126:function(e,t,a){e.exports=a.p+"static/media/13457.b7a04bd2.jpg"},127:function(e,t,a){e.exports=a.p+"static/media/16876.3a98759d.jpg"},128:function(e,t,a){e.exports={Alert:"Alert_Alert__2BVOW"}},129:function(e,t,a){e.exports=a.p+"static/media/spinner.b56228ae.svg"},130:function(e,t,a){e.exports={Button:"Button_Button__2v4ZM"}},131:function(e,t,a){e.exports=a.p+"static/media/settings.3feaa72e.svg"},132:function(e,t,a){e.exports=a.p+"static/media/key.7ba1a0c0.svg"},133:function(e,t,a){e.exports=a.p+"static/media/logout.be40430c.svg"},134:function(e,t,a){e.exports=a.p+"static/media/instruction.5e1425f7.svg"},135:function(e,t,a){e.exports=a.p+"static/media/menu.d6ad5ae1.svg"},136:function(e,t,a){e.exports={Pomodoro:"Pomodoro_Pomodoro__24rI0"}},138:function(e,t,a){e.exports=a.p+"static/media/play.ac64af35.svg"},139:function(e,t,a){e.exports={NonAuth:"NonAuth_NonAuth__3AJD8"}},154:function(e,t,a){e.exports=a(184)},159:function(e,t,a){},160:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),l=(a(159),a(160),a(27)),s=a(75),u=a.n(s),i=a(11),d=a(91),m=a.n(d),p=a(46),O=a.n(p),b=a(121),f=a.n(b),E=function(e){var t=function(){e.closeEvent()},a=function(e){if(null!==e.target.parentElement)for(var a=0;a<e.target.parentElement.children.length;a++)e.target.classList[0]===e.target.parentElement.children[a].classList[0]&&t();else t()};return Object(n.useEffect)((function(){document.addEventListener("click",t),document.addEventListener("contextmenu",a)})),Object(n.useEffect)((function(){return function(){document.removeEventListener("click",t),document.removeEventListener("contextmenu",a)}})),r.a.createElement("div",{style:{top:e.position.y,left:e.position.x},className:f.a.ContextMenu},e.children)},_=a(122),k=a.n(_),v=function(e){return r.a.createElement("div",{onClick:e.clickEvent,className:k.a.ContextItem},e.children)},j=function(e){return{type:"ADD_FOLDER",payload:e}},x=function(e){return{type:"ADD_FOLDER_SUCCESS",payload:e}},A=function(e){return{type:"FOLDER_ERROR",payload:e}},h=function(e){return{type:"DELETE_FOLDER",payload:e}},S=function(e){return{type:"DELETE_FOLDER_SUCCESS",payload:e}},T=function(e){return{type:"ADD_TASK",payload:e}},g=function(e,t){return{type:"ADD_TASK_SUCCESS",payload:e,folderId:t}},I=function(e,t){return{type:"LOAD_TASK_SUCCESS",payload:e,folderId:t}},y=function(e){return{type:"TASK_ERROR",payload:e}},N=function(e){return{type:"LOAD_TASK",payload:e}},D=function(e,t){return{type:"DELETE_TASK",payload:e,folderId:t}},w=function(e,t){return{type:"DELETE_TASK_SUCCESS",payload:e,folderId:t}},F=function(e){return{type:"REGISTER",payload:e}},C=function(e){return{type:"AUTHENTICATE_TOAPI",payload:e}},L=function(e){return{type:"AUTHENTICATE_SUCCESS",payload:e}},R=function(e){return{type:"AUTHENTICATE_ERROR",payload:e}},B=function(e){return{type:"LOADING_START",payload:e}},M=function(e){return{type:"POMODORO_START",payload:e}},H=function(){return{type:"POMODORO_LONG_BREAK_START"}},P=a(22),G=a(20);var U=Object(P.b)(null,(function(e){return{onDelete:function(t){return e(h(t))}}}))((function(e){var t=[O.a.FolderItem],a=Object(G.g)();switch(e.folder.color.toLowerCase()){case"yellow":t.push(O.a.FolderItemYellow);break;case"white":t.push(O.a.FolderItemWhite);break;case"green":t.push(O.a.FolderItemGreen);break;case"purple":t.push(O.a.FolderItemPurple);break;case"blue":t.push(O.a.FolderItemBlue);break;case"red":t.push(O.a.FolderItemRed);break;default:t.push(O.a.FolderItemWhite)}var o=Object(n.useState)(!1),c=Object(i.a)(o,2),l=c[0],s=c[1],u=Object(n.useState)({x:0,y:0}),d=Object(i.a)(u,2),m=d[0],p=d[1],b=Object(n.useState)(-1),f=Object(i.a)(b,2),_=f[0],k=f[1],j=r.a.createElement(E,{position:m,closeEvent:function(){return s(!1)}},r.a.createElement(v,{clickEvent:function(){return e.onDelete(_)}},"Delete"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onContextMenu:e.folder.required?null:function(t){return function(e,t){e.preventDefault(),s(!0),p({x:e.pageX,y:e.pageY}),k(t)}(t,e.folder.id)},className:t.join(" ")},r.a.createElement("a",{href:"/"+e.folder.id,onClick:function(t){return function(e,t){e.preventDefault(),a.push({pathname:"/"+t})}(t,e.folder.id)}},r.a.createElement("i",{style:{color:"white"===e.folder.color.toLowerCase()?"lightgray":e.folder.color.toLowerCase(),marginRight:10},className:"material-icons"},"folder"),e.folder.name)),l?j:null)})),K=a(124),W=a.n(K),Y=function(e){return r.a.createElement("div",{className:W.a.AddFolder},r.a.createElement("input",{value:e.value,onChange:function(t){return e.setName(t.target.value)},placeholder:"New Folder"}),r.a.createElement("button",{onClick:e.openModal},r.a.createElement("i",{style:{color:"white"===e.color?"rgb(189, 189, 189)":e.color},className:"material-icons"},"color_lens")),r.a.createElement("button",{onClick:e.addFolderClick},r.a.createElement("i",{className:"material-icons"},"add")))},z=a(96),X=a.n(z),q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:X.a.Modal},e.children),r.a.createElement("div",{className:X.a.backgroudModal,onClick:function(){return e.modalHandler(!1)}}))},V=a(125),J=a.n(V),Q=function(e){return r.a.createElement("div",{className:J.a.SelectColor},["white","yellow","red","green","purple","blue"].map((function(t){return r.a.createElement("button",{key:t,onClick:function(){return e.setColor(t)}},r.a.createElement("i",{style:{color:"white"===t?"rgb(189, 189, 189)":t},className:"material-icons"},"color_lens"),t)})))},Z=a(224);var $=Object(P.b)((function(e){return{folders:e.folders}}),(function(e){return{onAdd:function(t){return e(j(t))}}}))((function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)("white"),s=Object(i.a)(l,2),u=s[0],d=s[1],p=Object(n.useState)(""),O=Object(i.a)(p,2),b=O[0],f=O[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:m.a.SlideNav},e.folders.map((function(e,t){return r.a.createElement(U,{key:t,folder:e})})),r.a.createElement(Y,{color:u,addFolderClick:function(){e.onAdd({name:b,color:u}),d("white"),f("")},value:b,openModal:function(){return c(!0)},setName:f})),r.a.createElement("div",{onClick:e.closeHandler,className:m.a.BackgroundSlide}),r.a.createElement(Z.a,{in:o,timeout:500,classNames:"modalFade",unmountOnExit:!0},r.a.createElement(q,{modalHandler:c},r.a.createElement(Q,{setColor:function(e){return d(e),c(!1)}}))))})),ee=a(84),te=a.n(ee),ae=a(126),ne=a.n(ae);var re=Object(P.b)(null,(function(e){return{onRegistration:function(t,a,n){return e(F({username:t,email:a,password:n}))}}}))((function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),u=s[0],d=s[1],m=Object(n.useState)(""),p=Object(i.a)(m,2),O=p[0],b=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:te.a.Authorization},r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.onRegistration(o,u,O)}(t)}},r.a.createElement("h2",null,"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"),r.a.createElement("input",{type:"text",placeholder:"Username",value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"email",placeholder:"Email",value:u,onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Password",value:O,onChange:function(e){return b(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Registration"}),r.a.createElement("button",{onClick:e.onToggle},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u0442\u0438\u0441\u044c")),r.a.createElement("div",null,r.a.createElement("img",{alt:"img",src:ne.a}))))})),oe=a(127),ce=a.n(oe);var le=Object(P.b)(null,(function(e){return{onAuthenticate:function(t,a){return e(C({email:t,password:a}))}}}))((function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),u=s[0],d=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:te.a.Authorization},r.a.createElement("div",null,r.a.createElement("img",{alt:"img",src:ce.a})),r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.onAuthenticate(o,u)}(t)}},r.a.createElement("h2",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u0442\u0438\u0441\u044c"),r.a.createElement("input",{type:"email",placeholder:"Email",value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Password",value:u,onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Submit"}),r.a.createElement("button",{onClick:e.onToggle},"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"))))})),se=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(re,{onToggle:function(){return o(!1)}}):r.a.createElement(le,{onToggle:function(){return o(!0)}}))},ue=a(128),ie=a.n(ue),de=a(129),me=a.n(de),pe=function(e){var t=e.time,a=e.closeEvent;return Object(n.useEffect)((function(){var e=null;return 0!==t&&(e=setTimeout(a,t)),function(){null!=e&&clearTimeout(e)}}),[]),r.a.createElement("div",{className:ie.a.Alert},r.a.createElement("div",null,e.children),e.loading?r.a.createElement("img",{src:me.a,alt:"Spin"}):r.a.createElement("i",{onClick:e.closeEvent,className:"material-icons"},"close"))},Oe=a(130),be=a.n(Oe),fe=function(e){return r.a.createElement("button",{onClick:e.onClick,className:be.a.Button},e.children)},Ee=a(131),_e=a.n(Ee),ke=a(132),ve=a.n(ke),je=a(133),xe=a.n(je),Ae=a(134),he=a.n(Ae),Se=a(135),Te=a.n(Se),ge=a(136),Ie=a.n(ge),ye=a(212);var Ne=Object(P.b)((function(e){return{ticks:e.pomodoro.ticks,status:e.pomodoro.status}}),null)((function(e){var t=null;return"started"===e.status?t=r.a.createElement("h2",null,"Active"):"short_break"===e.status?t=r.a.createElement("h2",null,"Short Break"):"long_break"===e.status&&(t=r.a.createElement("h2",null,"Long break")),r.a.createElement("div",{className:Ie.a.Pomodoro},t,r.a.createElement("h1",null,e.ticks),r.a.createElement("div",null,r.a.createElement(ye.a,{variant:"contained",color:"secondary"},"Stop"),r.a.createElement(ye.a,{variant:"contained",color:"primary"},"Complete")))}));var De=Object(P.b)((function(e){return{isAuthenticate:e.isAuthenticate,modalAuth:e.modalAuth,alert:e.alert,folders:e.folders,pomodoro:e.pomodoro}}),(function(e){return{onLogout:function(){return e({type:"LOGOUT"})},onModelOpen:function(t){return e({type:"MODAL_OPEN",payload:t})},onCloseAlert:function(){return e({type:"CLOSE_ALERT"})},onAuth:function(){return e({type:"AUTHENIICATE"})},loadAllFolders:function(){return e({type:"ADD_ALL_FOLDER"})},pomodoroUpdateTicks:function(t){return e(function(e){return{type:"POMODORO_UPDATE_TICKS",payload:e}}(t))},pomodoroShortBreakStart:function(){return e({type:"POMODORO_SHORT_BREAK_START"})},pomodoroLongBreakStart:function(){return e(H)},pomodoroStart:function(t){return e(M(t))},pomodoroFinish:function(){return e({type:"POMODORO_FINISH"})}}}))((function(e){function t(a){var n=20,r=a;!function a(){if("new_started"!==e.pomodoro.status){var o=r-1;if(n--,e.pomodoroUpdateTicks(o.toString()+":"+(n<10?"0":"")+String(n)),n>0)setTimeout(a,1e3);else{if(!(r>1))return"started"===e.pomodoro.status?e.pomodoro.counterBreak>=4?void e.pomodoroLongBreakStart():void e.pomodoroShortBreakStart():void e.pomodoroStart(e.pomodoro.taskId);t(r-1)}}}()}Object(n.useEffect)((function(){"started"===e.pomodoro.status?t(25):"short_break"===e.pomodoro.status?t(5):"long_break"===e.pomodoro.status&&t(30)}),[e.pomodoro.status]);var a=Object(n.useState)(!1),o=Object(l.a)(a,2),c=o[0],s=o[1],i=Object(n.useState)(""),d=Object(l.a)(i,2),m=d[0],p=d[1],O=Object(n.useState)(!1),b=Object(l.a)(O,2),f=b[0],E=b[1],_=Object(G.g)(),k=Object(G.h)().id;Object(n.useEffect)((function(){e.onAuth()}),[]),Object(n.useEffect)((function(){e.isAuthenticate&&e.loadAllFolders()}),[e.isAuthenticate]),Object(n.useEffect)((function(){for(var t=0;t<e.folders.length;t++)e.folders[t].id===k&&p(e.folders[t].name)}),[k,e.folders]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{in:e.modalAuth,timeout:500,classNames:"modalFade",unmountOnExit:!0},r.a.createElement(q,{modalHandler:e.onModelOpen,open:e.modalAuth},r.a.createElement(se,null))),r.a.createElement("div",{className:u.a.NavBar},r.a.createElement("div",{className:u.a.Container},e.isAuthenticate?r.a.createElement(fe,{onClick:function(){return s(!c)}},r.a.createElement("img",{src:Te.a,alt:"B"})):null),r.a.createElement("div",null,r.a.createElement("h2",null,m)),r.a.createElement("div",{className:u.a.Container},r.a.createElement(fe,null,r.a.createElement("img",{src:he.a,alt:"B"})),r.a.createElement(fe,null,r.a.createElement("img",{src:_e.a,alt:"B"})),e.isAuthenticate?r.a.createElement(fe,{onClick:function(){_.push({pathname:"/"}),e.onLogout()}},r.a.createElement("img",{src:xe.a,alt:"B"})):r.a.createElement(fe,{onClick:function(){_.push({pathname:"/"}),e.onModelOpen(!0)}},r.a.createElement("img",{src:ve.a,alt:"B"})))),e.isAuthenticate?r.a.createElement(Z.a,{in:c,timeout:500,classNames:"slideFade",unmountOnExit:!0},r.a.createElement($,{open:c,closeHandler:function(){return s(!1)}})):null,e.alert.status?r.a.createElement(pe,{time:e.alert.time,loading:e.alert.loading,closeEvent:e.onCloseAlert},e.alert.text):null,"started"===e.pomodoro.status||"short_break"===e.pomodoro.status||"long_break"===e.pomodoro.status?r.a.createElement("div",{onClick:function(){return E(!0)},className:u.a.PomodoroButton},e.pomodoro.ticks):null,r.a.createElement(Z.a,{in:f,timeout:500,classNames:"modalFade",unmountOnExit:!0},r.a.createElement(q,{modalHandler:function(){return E(!1)}},r.a.createElement(Ne,null))))})),we=a(97),Fe=a.n(we),Ce=a(41),Le=a.n(Ce),Re=a(138),Be=a.n(Re);var Me=Object(P.b)((function(e){return{pomodoro:e.pomodoro}}),(function(e){return{onDelete:function(t,a){return e(D(t,a))},onStartPomodoro:function(t){return e(M(t))},onStartNewPomodoro:function(t){return e(function(e){return{type:"POMODORO_NEW_STARTED",payload:e}}(t))},openAlert:function(t){return e(function(e){return{type:"OPEN_ALERT",payload:e}}(t))}}}))((function(e){var t=[Le.a.Task],a=Object(G.h)().id;switch(e.task.color.toLowerCase()){case"yellow":t.push(Le.a.TaskYellow);break;case"blue":t.push(Le.a.TaskBlue);break;case"purple":t.push(Le.a.TaskPurple);break;case"white":t.push(Le.a.TaskWhite);break;case"green":t.push(Le.a.TaskGreen);break;case"red":t.push(Le.a.TaskRed);break;default:t.push(Le.a.TaskWhite)}var o=Object(n.useState)(!1),c=Object(l.a)(o,2),s=c[0],u=c[1],i=Object(n.useState)({x:0,y:0}),d=Object(l.a)(i,2),m=d[0],p=d[1],O=Object(n.useState)(-1),b=Object(l.a)(O,2),f=b[0],_=b[1],k=null;if(null!==e.task.dateTime){var j=e.task.dateTime.split("T");k=r.a.createElement(r.a.Fragment,null,"0001-01-01"!==j[0]?r.a.createElement("span",null,j[0]):null,"00:00:00"!==j[1]?r.a.createElement("span",null,j[1].split(":")[0]+":"+j[1].split(":")[1]):null)}var x=r.a.createElement(E,{position:m,closeEvent:function(){return u(!1)}},r.a.createElement(v,{clickEvent:function(){return e.onDelete(f,a)}},"Delete"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onContextMenu:function(t){return function(e,t){e.preventDefault(),u(!0),p({x:e.pageX,y:e.pageY}),_(t)}(t,e.task.id)},className:t.join(" ")},r.a.createElement("span",null,e.task.text),r.a.createElement("div",null,r.a.createElement(fe,{onClick:"stopped"===e.pomodoro.status?function(){return t=e.task.id,void e.onStartPomodoro(t);var t}:function(){return e.openAlert("\u0421\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0437\u0430\u0432\u0435\u0440\u0448\u0456\u0442\u044c \u0456\u043d\u0448\u0435 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f")}},r.a.createElement("img",{src:Be.a,alt:"B"})),r.a.createElement("div",{className:Le.a.TaskTime},k))),s?x:null)})),He=a(32),Pe=a.n(He),Ge=a(98),Ue=a(222),Ke=a(21),We=a(220),Ye=a(226),ze=a(221),Xe=a(227),qe=function(e){var t=[Pe.a.AddTask];switch(e.color.toLowerCase()){case"yellow":t.push(Pe.a.AddTaskYellow);break;case"blue":t.push(Pe.a.AddTaskBlue);break;case"purple":t.push(Pe.a.AddTaskPurple);break;case"white":t.push(Pe.a.AddTaskWhite);break;case"green":t.push(Pe.a.AddTaskGreen);break;case"red":t.push(Pe.a.AddTaskRed);break;default:t.push(Pe.a.AddTaskWhite)}var a=Object(n.useState)(!1),o=Object(l.a)(a,2),c=o[0],s=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.join(" ")},r.a.createElement(Ue.a,{required:!0,className:Pe.a.TextField}),r.a.createElement("button",{onClick:function(){return s(!0)}},r.a.createElement("i",{style:{color:"white"===e.color?"rgb(189, 189, 189)":e.color},className:"material-icons"},"color_lens")),r.a.createElement(Ke.a,{utils:Ge.a},r.a.createElement(We.a,{value:e.date,onChange:e.changeDate,animateYearScrolling:!0,format:"dd-MM-yyyy",autoOk:!0,minDate:new Date("2020-07-01"),emptyLabel:"Date",className:Pe.a.Picker})),r.a.createElement(Ke.a,{utils:Ge.a},r.a.createElement(Ye.a,{clearable:!0,ampm:!1,value:e.time,onChange:e.changeTime,emptyLabel:"Time",className:Pe.a.Picker})),r.a.createElement(ze.a,{value:"",className:Pe.a.Picker,displayEmpty:!0,inputProps:{"aria-label":"Without label"}},r.a.createElement(Xe.a,{value:"",disabled:!0},"Repeat"),r.a.createElement(Xe.a,{value:"Day"},"Every day"),r.a.createElement(Xe.a,{value:"Week"},"Every week"),r.a.createElement(Xe.a,{value:"Month"},"Every month")),r.a.createElement("button",{onClick:e.addTask},r.a.createElement("i",{className:"material-icons"},"add"))),r.a.createElement(Z.a,{in:c,timeout:500,classNames:"modalFade",unmountOnExit:!0},r.a.createElement(q,{modalHandler:s},r.a.createElement(Q,{setColor:function(t){e.changeColor(t),s(!1)}}))))},Ve=a(225);var Je=Object(P.b)((function(e){return{tasks:e.tasks}}),(function(e){return{onAdd:function(t){return e(T(t))},loadTask:function(t){return e(N(t))}}}))((function(e){var t=Object(G.h)().id;Object(n.useEffect)((function(){null!=e.tasks[t]&&void 0!==e.tasks[t]||e.loadTask(t)}),[t]);var a=Object(n.useState)("white"),o=Object(l.a)(a,2),c=o[0],s=o[1],u=Object(n.useState)(""),i=Object(l.a)(u,2),d=i[0],m=i[1],p=Object(n.useState)(null),O=Object(l.a)(p,2),b=O[0],f=O[1],E=Object(n.useState)(null),_=Object(l.a)(E,2),k=_[0],v=_[1];return r.a.createElement("div",{className:Fe.a.Tasks},r.a.createElement("div",{className:Fe.a.TaskList},r.a.createElement(Ve.a,null,void 0===e.tasks[t]?null:e.tasks[t].map((function(e,t){return r.a.createElement(Z.a,{key:t,timeout:300,classNames:"item"},r.a.createElement(Me,{task:e}))}))),r.a.createElement(qe,{text:d,color:c,time:b,date:k,changeColor:function(e){return s(e)},changeText:function(e){return m(e)},changeDate:function(e){return v(e)},changeTime:function(e){return f(e)},addTask:function(){var a=null;if(null===k||""===k)a="0001-01-01T";else{var n=k.getMonth()<=9?"0"+(k.getMonth()+1):k.getMonth()+1,r=k.getDate()<=9?"0"+k.getDate():k.getDate();a=k.getFullYear()+"-"+n+"-"+r+"T"}null===b||""===b?a+="00:00":a+=(b.getHours()<=9?"0"+b.getHours():b.getHours())+":"+(b.getMinutes()<=9?"0"+b.getMinutes():b.getMinutes());e.onAdd({color:c,text:d,datetime:"0001-01-01T00:00"===a?null:a,FolderId:t}),s("white"),m(""),v(null),f(null)}})))})),Qe=a(63),Ze=a(139),$e=a.n(Ze),et=function(){return r.a.createElement("div",{className:$e.a.NonAuth},"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0449\u043e\u0431 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044c \u0434\u0430\u043d\u0438\u043c \u0441\u0430\u0439\u0442\u043e\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u0442\u0438\u0441\u044c")};var tt=Object(P.b)((function(e){return{isAuthenticate:e.isAuthenticate,fId:e.folders}}))((function(e){var t=r.a.createElement(r.a.Fragment,null,r.a.createElement(De,null),r.a.createElement(et,null)),a=r.a.createElement(r.a.Fragment,null,r.a.createElement(De,null),r.a.createElement(Je,null));return r.a.createElement(Qe.a,null,r.a.createElement(G.d,null,r.a.createElement(G.b,{path:"/:id"},e.isAuthenticate?a:t),void 0!==e.fId[0]&&!0===e.isAuthenticate?r.a.createElement(G.a,{to:"/"+e.fId[0].id}):r.a.createElement(G.b,{path:"/",exact:!0},t)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var at=a(51),nt=a(62),rt=a(9),ot={folders:[],tasks:{},isAuthenticate:!1,modalAuth:!1,alert:{status:!1,text:"",loading:!1,time:0},pomodoro:{status:"stopped",timeout:25,taskId:null,ticks:"",couterBreak:0}};var ct=a(140),lt=a(19),st=a.n(lt),ut=a(34),it=a(5),dt=a(36),mt=a.n(dt),pt="https://tasklistapirea.azurewebsites.net/api/",Ot=st.a.mark(_t),bt=st.a.mark(kt);function ft(e){return mt.a.post(pt+"Login",{Email:e.payload.email,Password:e.payload.password})}function Et(e){return mt.a.post(pt+"Register",{Username:e.payload.username,Email:e.payload.email,Password:e.payload.password})}function _t(){var e,t,a=arguments;return st.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:C,n.prev=1,n.next=4,Object(it.c)(B("\u0412\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u044f."));case 4:return n.next=6,Object(it.b)(ft,e);case 6:if((t=n.sent).error){n.next=14;break}return n.next=10,Object(it.c)({type:"LOADING_FINISH"});case 10:return n.next=12,Object(it.c)(L(t.data));case 12:n.next=18;break;case 14:return n.next=16,Object(it.c)({type:"LOADING_FINISH"});case 16:return n.next=18,Object(it.c)(R(t));case 18:n.next=40;break;case 20:if(n.prev=20,n.t0=n.catch(1),void 0!==n.t0.response){n.next=29;break}return n.next=25,Object(it.c)({type:"LOADING_FINISH"});case 25:return n.next=27,Object(it.c)(R("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 27:n.next=40;break;case 29:if(401!==n.t0.response.data.status){n.next=36;break}return n.next=32,Object(it.c)({type:"LOADING_FINISH"});case 32:return n.next=34,Object(it.c)(R("\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0437 \u0442\u0430\u043a\u0438\u043c\u0438 \u0434\u0430\u043d\u0438\u043c\u0438 \u043d\u0435 \u0456\u0441\u043d\u0443\u0454"));case 34:n.next=40;break;case 36:return n.next=38,Object(it.c)({type:"LOADING_FINISH"});case 38:return n.next=40,Object(it.c)(R("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 40:case"end":return n.stop()}}),Ot,null,[[1,20]])}function kt(){var e,t,a=arguments;return st.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:F,n.prev=1,n.next=4,Object(it.c)(B("\u0412\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f."));case 4:return n.next=6,Object(it.b)(Et,e);case 6:if((t=n.sent).error){n.next=14;break}return n.next=10,Object(it.c)({type:"LOADING_FINISH"});case 10:return n.next=12,Object(it.c)(L(t.data));case 12:n.next=18;break;case 14:return n.next=16,Object(it.c)({type:"LOADING_FINISH"});case 16:return n.next=18,Object(it.c)(R(t));case 18:n.next=38;break;case 20:if(n.prev=20,n.t0=n.catch(1),void 0!==n.t0.response){n.next=27;break}return n.next=25,Object(it.c)({type:"LOADING_FINISH"});case 25:return n.next=27,Object(it.c)(R("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 27:if("\u0414\u0430\u043d\u0438\u0439 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0443\u0436\u0435 \u0456\u0441\u043d\u0443\u0454"!==n.t0.response.data){n.next=34;break}return n.next=30,Object(it.c)({type:"LOADING_FINISH"});case 30:return n.next=32,Object(it.c)(R("\u0414\u0430\u043d\u0438\u0439 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0443\u0436\u0435 \u0456\u0441\u043d\u0443\u0454"));case 32:n.next=38;break;case 34:return n.next=36,Object(it.c)({type:"LOADING_FINISH"});case 36:return n.next=38,Object(it.c)(R("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 38:case"end":return n.stop()}}),bt,null,[[1,20]])}var vt=[Object(it.d)("AUTHENTICATE_TOAPI",_t),Object(it.d)("REGISTER",kt)],jt=st.a.mark(gt),xt=st.a.mark(It),At=st.a.mark(yt);function ht(){return mt.a.get(pt+"Folder",{headers:{Authorization:"Bearer "+window.localStorage.token}})}function St(e){return mt.a.post(pt+"Folder",{Color:e.payload.color,Name:e.payload.name},{headers:{Authorization:"Bearer "+window.localStorage.token}})}function Tt(e){return mt.a.delete(pt+"Folder/"+e.payload,{headers:{Authorization:"Bearer "+window.localStorage.token}})}function gt(){var e;return st.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(it.b)(ht);case 3:if((e=t.sent).error){t.next=9;break}return t.next=7,Object(it.c)({type:"ADD_ALL_FOLDERS_SUCCESS",payload:e.data});case 7:t.next=11;break;case 9:return t.next=11,Object(it.c)(A(e));case 11:t.next=22;break;case 13:if(t.prev=13,t.t0=t.catch(0),void 0!==t.t0.response){t.next=20;break}return t.next=18,Object(it.c)(A("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 18:t.next=22;break;case 20:return t.next=22,Object(it.c)(A("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 22:case"end":return t.stop()}}),jt,null,[[0,13]])}function It(){var e,t,a=arguments;return st.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:j,n.prev=1,n.next=4,Object(it.c)(B("\u0414\u043e\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0441\u043f\u0438\u0441\u043e\u043a."));case 4:return n.next=6,Object(it.b)(St,e);case 6:if((t=n.sent).error){n.next=14;break}return n.next=10,Object(it.c)({type:"LOADING_FINISH"});case 10:return n.next=12,Object(it.c)(x(t.data));case 12:n.next=18;break;case 14:return n.next=16,Object(it.c)({type:"LOADING_FINISH"});case 16:return n.next=18,Object(it.c)(A(t));case 18:n.next=33;break;case 20:if(n.prev=20,n.t0=n.catch(1),void 0!==n.t0.response){n.next=29;break}return n.next=25,Object(it.c)({type:"LOADING_FINISH"});case 25:return n.next=27,Object(it.c)(A("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 27:n.next=33;break;case 29:return n.next=31,Object(it.c)({type:"LOADING_FINISH"});case 31:return n.next=33,Object(it.c)(A("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 33:case"end":return n.stop()}}),xt,null,[[1,20]])}function yt(){var e,t,a=arguments;return st.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:h,n.prev=1,n.next=4,Object(it.c)(B("\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0441\u043f\u0438\u0441\u043a\u0430."));case 4:return n.next=6,Object(it.b)(Tt,e);case 6:if((t=n.sent).error){n.next=14;break}return n.next=10,Object(it.c)({type:"LOADING_FINISH"});case 10:return n.next=12,Object(it.c)(S(t.data));case 12:n.next=18;break;case 14:return n.next=16,Object(it.c)({type:"LOADING_FINISH"});case 16:return n.next=18,Object(it.c)(A(t));case 18:n.next=33;break;case 20:if(n.prev=20,n.t0=n.catch(1),void 0!==n.t0.response){n.next=29;break}return n.next=25,Object(it.c)({type:"LOADING_FINISH"});case 25:return n.next=27,Object(it.c)(A("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 27:n.next=33;break;case 29:return n.next=31,Object(it.c)({type:"LOADING_FINISH"});case 31:return n.next=33,Object(it.c)(A("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 33:case"end":return n.stop()}}),At,null,[[1,20]])}var Nt=[Object(it.d)("ADD_FOLDER",It),Object(it.d)("ADD_ALL_FOLDER",gt),Object(it.d)("DELETE_FOLDER",yt)],Dt=st.a.mark(Bt),wt=st.a.mark(Mt),Ft=st.a.mark(Ht);function Ct(e){return mt.a.get(pt+"Task/"+e.payload,{headers:{Authorization:"Bearer "+window.localStorage.token}})}function Lt(e){return mt.a.post(pt+"Task",e.payload,{headers:{Authorization:"Bearer "+window.localStorage.token}})}function Rt(e){return mt.a.delete(pt+"Task/"+e.payload,{headers:{Authorization:"Bearer "+window.localStorage.token}})}function Bt(){var e,t,a,n=arguments;return st.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:N,r.prev=1,r.next=4,Object(it.c)(B("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0437\u0430\u0434\u0430\u0447."));case 4:return r.next=6,Object(it.b)(Ct,e);case 6:if(t=r.sent,a=e.payload,t.error){r.next=15;break}return r.next=11,Object(it.c)({type:"LOADING_FINISH"});case 11:return r.next=13,Object(it.c)(I(t.data,a));case 13:r.next=19;break;case 15:return r.next=17,Object(it.c)({type:"LOADING_FINISH"});case 17:return r.next=19,Object(it.c)(y(t));case 19:r.next=34;break;case 21:if(r.prev=21,r.t0=r.catch(1),void 0!==r.t0.response){r.next=30;break}return r.next=26,Object(it.c)({type:"LOADING_FINISH"});case 26:return r.next=28,Object(it.c)(y("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 28:r.next=34;break;case 30:return r.next=32,Object(it.c)({type:"LOADING_FINISH"});case 32:return r.next=34,Object(it.c)(y("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 34:case"end":return r.stop()}}),Dt,null,[[1,21]])}function Mt(){var e,t,a,n=arguments;return st.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:T,r.prev=1,r.next=4,Object(it.c)(B("\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0437\u0430\u0434\u0430\u0447\u0456."));case 4:return r.next=6,Object(it.b)(Lt,e);case 6:if(t=r.sent,a=e.payload.FolderId,t.error){r.next=15;break}return r.next=11,Object(it.c)({type:"LOADING_FINISH"});case 11:return r.next=13,Object(it.c)(g(t.data,a));case 13:r.next=19;break;case 15:return r.next=17,Object(it.c)({type:"LOADING_FINISH"});case 17:return r.next=19,Object(it.c)(y(t));case 19:r.next=35;break;case 21:if(r.prev=21,r.t0=r.catch(1),void 0!==r.t0.response){r.next=31;break}return console.log(r.t0),r.next=27,Object(it.c)({type:"LOADING_FINISH"});case 27:return r.next=29,Object(it.c)(y("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 29:r.next=35;break;case 31:return r.next=33,Object(it.c)({type:"LOADING_FINISH"});case 33:return r.next=35,Object(it.c)(y("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 35:case"end":return r.stop()}}),wt,null,[[1,21]])}function Ht(){var e,t,a,n=arguments;return st.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:D,r.prev=1,r.next=4,Object(it.c)(B("\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u0434\u0430\u0447\u0456."));case 4:return r.next=6,Object(it.b)(Rt,e);case 6:if(t=r.sent,a=e.folderId,t.error){r.next=15;break}return r.next=11,Object(it.c)({type:"LOADING_FINISH"});case 11:return r.next=13,Object(it.c)(w(t.data,a));case 13:r.next=19;break;case 15:return r.next=17,Object(it.c)({type:"LOADING_FINISH"});case 17:return r.next=19,Object(it.c)(y(t));case 19:r.next=34;break;case 21:if(r.prev=21,r.t0=r.catch(1),void 0!==r.t0.response){r.next=30;break}return r.next=26,Object(it.c)({type:"LOADING_FINISH"});case 26:return r.next=28,Object(it.c)(y("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0456"));case 28:r.next=34;break;case 30:return r.next=32,Object(it.c)({type:"LOADING_FINISH"});case 32:return r.next=34,Object(it.c)(y("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"));case 34:case"end":return r.stop()}}),Ft,null,[[1,21]])}var Pt=[Object(it.d)("LOAD_TASK",Bt),Object(it.d)("ADD_TASK",Mt),Object(it.d)("DELETE_TASK",Ht)],Gt=st.a.mark(Ut);function Ut(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.a)([].concat(Object(ut.a)(vt),Object(ut.a)(Nt),Object(ut.a)(Pt)));case 2:case"end":return e.stop()}}),Gt)}var Kt="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):at.c,Wt=Object(ct.a)(),Yt=[Wt],zt=Kt(at.a.apply(void 0,Yt)),Xt=Object(at.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ALL_FOLDERS_SUCCESS":return Object(rt.a)({},e,{folders:t.payload});case"ADD_FOLDER_SUCCESS":return Object(rt.a)({},e,{folders:e.folders.concat({id:t.payload.id,color:t.payload.color,name:t.payload.name})});case"FOLDER_ERROR":return Object(rt.a)({},e,{alert:Object(rt.a)({},e.alert,{text:t.payload,status:!0,time:2e3,loading:!1})});case"DELETE_FOLDER_SUCCESS":return Object(rt.a)({},e,{folders:e.folders.filter((function(e){return e.id!==t.payload.id}))});case"LOAD_TASK_SUCCESS":var a=t.folderId.toString();if(0===t.payload.length)return Object(rt.a)({},e,{tasks:Object(rt.a)({},e.tasks,Object(nt.a)({},a,[]))});var n=Object(rt.a)({},e.tasks,Object(nt.a)({},a,t.payload));return Object(rt.a)({},e,{tasks:n});case"ADD_TASK_SUCCESS":var r=t.folderId.toString(),o=Object(rt.a)({},e.tasks,Object(nt.a)({},r,e.tasks[r].concat(t.payload)));return Object(rt.a)({},e,{tasks:o});case"TASK_ERROR":return Object(rt.a)({},e,{alert:Object(rt.a)({},e.alert,{text:t.payload,status:!0,time:2e3,loading:!1})});case"DELETE_TASK_SUCCESS":var c=t.folderId.toString(),l=Object(rt.a)({},e.tasks,Object(nt.a)({},c,e.tasks[c].filter((function(e){return e.id!==t.payload.id}))));return Object(rt.a)({},e,{tasks:l});case"AUTHENTICATE_SUCCESS":var s=new Date;return window.localStorage.setItem("token",t.payload.token),s.setMinutes(s.getMinutes()+Number(t.payload.expires)),window.localStorage.setItem("expires",s.toString()),Object(rt.a)({},e,{alert:Object(rt.a)({},e.alert,{text:"\u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u043b\u0438\u0441\u044c",status:!0,time:2e3,loading:!1}),isAuthenticate:!0,modalAuth:!1});case"AUTHENTICATE_ERROR":return Object(rt.a)({},e,{alert:Object(rt.a)({},e.alert,{text:t.payload,status:!0,time:2e3,loading:!1})});case"AUTHENIICATE":var u=new Date;return(null!==window.localStorage.getItem("token")||null!==window.localStorage.getItem("expires"))&&u<=new Date(window.localStorage.getItem("expires"))?Object(rt.a)({},e,{isAuthenticate:!0}):Object(rt.a)({},e,{isAuthenticate:!1});case"LOGOUT":return window.localStorage.removeItem("token"),window.localStorage.removeItem("expires"),Object(rt.a)({},e,{isAuthenticate:!1,alert:Object(rt.a)({},e.alert,{text:"\u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0439\u0448\u043b\u0438 \u0437 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443",status:!0,time:2e3,loading:!1})});case"LOADING_START":return Object(rt.a)({},e,{alert:Object(rt.a)({},e.alert,{text:t.payload,status:!0,time:0,loading:!0})});case"LOADING_FINISH":return Object(rt.a)({},e,{alert:Object(rt.a)({},e.alert,{status:!1,time:0,loading:!1,text:""})});case"MODAL_OPEN":return Object(rt.a)({},e,{modalAuth:t.payload});case"CLOSE_ALERT":return Object(rt.a)({},e,{alert:Object(rt.a)({},e.alert,{status:!1})});case"OPEN_ALERT":return Object(rt.a)({},e,{alert:Object(rt.a)({},e.alert,{text:t.payload,status:!0,time:2e3,loading:!1})});case"POMODORO_START":return Object(rt.a)({},e,{pomodoro:Object(rt.a)({},e.pomodoro,{status:"started",timer:25,taskId:t.payload})});case"POMODORO_NEW_STARTED":return Object(rt.a)({},e,{pomodoro:Object(rt.a)({},e.pomodoro,{status:"new_started",timer:25,taskId:t.payload})});case"POMODORO_UPDATE_TICKS":return Object(rt.a)({},e,{pomodoro:Object(rt.a)({},e.pomodoro,{ticks:t.payload})});case"POMODORO_SHORT_BREAK_START":return Object(rt.a)({},e,{pomodoro:Object(rt.a)({},e.pomodoro,{status:"short_break",counterBreak:e.pomodoro.counterBreak+1})});case"POMODORO_LONG_BREAK_START":return Object(rt.a)({},e,{pomodoro:Object(rt.a)({},e.pomodoro,{status:"long_break",counterBreak:0})});case"POMODORO_FINISH":return Object(rt.a)({},e,{pomodoro:{status:"stopped",timeout:25,taskId:null,ticks:"",couterBreak:0}});default:return e}}),zt);Wt.run(Ut);var qt=r.a.createElement(P.a,{store:Xt},r.a.createElement(r.a.StrictMode,null,r.a.createElement(tt,null)));c.a.render(qt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,a){e.exports={AddTask:"AddTask_AddTask__1dcqp",TextField:"AddTask_TextField__1uKxN",Picker:"AddTask_Picker__5kLaq",AddTaskYellow:"AddTask_AddTaskYellow__3k30J",AddTaskRed:"AddTask_AddTaskRed__3ftDr",AddTaskGreen:"AddTask_AddTaskGreen__2VtKw",AddTaskWhite:"AddTask_AddTaskWhite__8FUA2",AddTaskPurple:"AddTask_AddTaskPurple__1XPTI",AddTaskBlue:"AddTask_AddTaskBlue__3Ma2E"}},41:function(e,t,a){e.exports={Task:"Task_Task__pX7RO",TaskYellow:"Task_TaskYellow__3me0n",TaskRed:"Task_TaskRed__p1B-N",TaskGreen:"Task_TaskGreen__2qR25",TaskWhite:"Task_TaskWhite__20Z2n",TaskPurple:"Task_TaskPurple__3gUS4",TaskBlue:"Task_TaskBlue__wNKbi",TaskTime:"Task_TaskTime__2T-4k"}},46:function(e,t,a){e.exports={FolderItem:"FolderItem_FolderItem__17tux",FolderItemWhite:"FolderItem_FolderItemWhite__u61ox",FolderItemYellow:"FolderItem_FolderItemYellow__bXtaa",FolderItemRed:"FolderItem_FolderItemRed__1uTTp",FolderItemGreen:"FolderItem_FolderItemGreen__3AUKg",FolderItemBlue:"FolderItem_FolderItemBlue__3Qd8B",FolderItemPurple:"FolderItem_FolderItemPurple__33PgZ"}},75:function(e,t,a){e.exports={NavBar:"NavBar_NavBar__11ZEV",Container:"NavBar_Container__3yHMY",PomodoroButton:"NavBar_PomodoroButton___cSWp"}},84:function(e,t,a){e.exports={Authorization:"Authorization_Authorization__2eQEQ"}},91:function(e,t,a){e.exports={SlideNav:"SlideNav_SlideNav__1GuBP",SlideNavOpen:"SlideNav_SlideNavOpen__3x6Vt",SlideNavClose:"SlideNav_SlideNavClose__2tdCA",BackgroundSlide:"SlideNav_BackgroundSlide__1ks2H",BackgroundOpen:"SlideNav_BackgroundOpen__2aJSj",BackgroundClose:"SlideNav_BackgroundClose__1B2lR"}},96:function(e,t,a){e.exports={Modal:"Modal_Modal__2rRqh",modalClose:"Modal_modalClose__2atnG",modalOpen:"Modal_modalOpen__3W_Pi",backgroudModal:"Modal_backgroudModal__ObfNv",backgroudModalOpen:"Modal_backgroudModalOpen__ER9IQ",backgroudModalClose:"Modal_backgroudModalClose__2E8yL"}},97:function(e,t,a){e.exports={Tasks:"Tasks_Tasks__3x0A4",TaskList:"Tasks_TaskList__1Bwux"}}},[[154,1,2]]]);
//# sourceMappingURL=main.ac7f9dcd.chunk.js.map