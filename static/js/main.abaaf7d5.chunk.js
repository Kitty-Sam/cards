(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{11:function(e,t,n){e.exports={wrapper:"Common_wrapper__3tLSR"}},13:function(e,t,n){e.exports={content:"Sort_content__1Dxsr",btns:"Sort_btns__gMJjW",arrowUp:"Sort_arrowUp__2dk1S",arrowDown:"Sort_arrowDown__9-F3h",arrows:"Sort_arrows__3Xvp9"}},23:function(e,t,n){e.exports={avatar:"Profile_avatar__wG5ZD",btns:"Profile_btns__2r1E2"}},33:function(e,t,n){e.exports={btns:"Registration_btns__1rxbD"}},34:function(e,t,n){e.exports={content:"Packs_content__4rMPd"}},40:function(e,t,n){},41:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),s=n(18),o=n.n(s),i=(n(40),n(41),n(3)),d=n(5),l=n(11),u=n.n(l),j=n(6),b=n(4),O=n(2),h=n(12),p=n.n(h),g=p.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),f=function(e){return g.post("auth/login",e)},x=function(){return g.delete("auth/me",{})},v=function(){return g.post("auth/me",{})},m=function(e){return g.post("auth/register",e)},k={errorNetwork:""},C=function(e){return{type:"ERROR/SET_ERROR_NETWORK",error:e}};!function(e){e.idle="idle",e.loading="loading",e.succeeded="succeeded",e.failed="failed"}(c||(c={}));var _={status:c.idle},w=function(e){return{type:"APP/STATUS_TOGGLE",status:e}},S={isLoggedIn:!1,user:{}},P=function(e){return{type:"LOGIN/IS_LOGGED_IN",isLoggedIn:e}},T=function(e){return{type:"LOGIN/SET_USER_DATA",user:e}},E=n(0),A=function(){var e=Object(a.useState)("trolololo@gmail.com"),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)("123456789As"),o=Object(d.a)(s,2),l=o[0],O=o[1],h=Object(a.useState)(!1),p=Object(d.a)(h,2),g=p[0],x=p[1],v=Object(b.b)(),m=Object(b.c)((function(e){return e.login.isLoggedIn}));return console.log("checkBox",g),m?Object(E.jsx)(i.a,{to:"/"}):Object(E.jsxs)("div",{className:u.a.wrapper,children:[Object(E.jsx)("div",{children:"Learning game"}),Object(E.jsx)("div",{children:"Sign in"}),Object(E.jsx)("div",{children:Object(E.jsx)("input",{placeholder:"Email",value:n,onChange:function(e){r(e.currentTarget.value)}})}),Object(E.jsx)("div",{children:Object(E.jsx)("input",{placeholder:"Password",value:l,onChange:function(e){O(e.currentTarget.value)}})}),Object(E.jsx)("div",{children:Object(E.jsx)("input",{placeholder:"remember me",type:"checkbox",checked:g,onChange:function(e){x(e.currentTarget.checked)}})}),Object(E.jsx)(j.b,{to:"/recover",children:" Forgot your password? "}),Object(E.jsxs)("div",{children:[Object(E.jsx)("button",{onClick:function(){var e;v((e={email:n,password:l,rememberMe:g},function(t){t(w(c.loading)),f(e).then((function(e){console.log("user",e.data);var n=e.data;t(P(!0)),t(w(c.succeeded)),t(T(n))})).catch((function(e){t(w(c.failed));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");console.log(n),t(C(n))}))}))},children:"Login"})," "]}),Object(E.jsx)("div",{children:"Dont have an account"}),Object(E.jsx)(j.b,{to:"/registration",children:" Sign up "})]})},N=n(33),R=n.n(N),y={isAuth:!1},L=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),o=Object(d.a)(s,2),l=o[0],j=o[1],O=Object(a.useState)(""),h=Object(d.a)(O,2),p=h[0],g=h[1],f=Object(b.b)(),x=Object(b.c)((function(e){return e.register.isAuth})),v=Object(b.c)((function(e){return e.app.status})),k=Object(b.c)((function(e){return e.errors.errorNetwork}));return x?Object(E.jsx)(i.a,{to:"/login"}):Object(E.jsx)("div",{children:v===c.loading?Object(E.jsx)("div",{children:"Loading..."}):Object(E.jsxs)("div",{className:u.a.wrapper,children:[Object(E.jsx)("div",{children:"Learning game"}),Object(E.jsx)("div",{children:"Sign up"}),k?Object(E.jsx)("span",{children:k}):Object(E.jsx)("span",{}),Object(E.jsx)("div",{children:Object(E.jsx)("input",{placeholder:"Email",value:n,onChange:function(e){r(e.currentTarget.value)}})}),Object(E.jsx)("div",{children:Object(E.jsx)("input",{placeholder:"Password",value:l,onChange:function(e){j(e.currentTarget.value)}})}),Object(E.jsx)("div",{children:Object(E.jsx)("input",{placeholder:"Confirm password",value:p,onChange:function(e){g(e.currentTarget.value)}})}),Object(E.jsxs)("div",{className:R.a.btns,children:[Object(E.jsx)("div",{children:Object(E.jsx)("button",{onClick:function(){f(C(" ")),r(""),j(""),g("")},children:"Cancel"})}),Object(E.jsx)("div",{children:Object(E.jsx)("button",{onClick:function(){var e;f((e={email:n,password:l},function(t){t(w(c.loading)),m(e).then((function(){t({type:"REGISTER/AUTH_TOGGLE",isAuth:!0}),t(w(c.succeeded))})).catch((function(e){t(w(c.failed));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");console.log(n),t(C(n))}))}))},children:"Register"})})]})]})})},D=n(23),U=n.n(D),G=p.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),I=function(e){return G.put("auth/me",e)},K=function(){var e=Object(b.c)((function(e){return e.login.user})),t=Object(a.useState)(e.name),n=Object(d.a)(t,2),r=n[0],s=n[1],o=Object(a.useState)(e.email),l=Object(d.a)(o,2),O=l[0],h=l[1],p=Object(a.useState)(!1),g=Object(d.a)(p,2),f=g[0],v=g[1],m=Object(b.c)((function(e){return e.login.user.avatar})),k=Object(b.c)((function(e){return e.login.isLoggedIn})),_={avatar:"https://tlgrm.ru/_/stickers/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/2.jpg",name:r,email:O},S=function(){return v(!0)},A=function(){v(!1)},N=Object(b.b)();return k?Object(E.jsxs)("div",{className:u.a.wrapper,children:[Object(E.jsx)("h1",{children:"profile"}),Object(E.jsx)("div",{children:Object(E.jsx)("img",{src:m||"",alt:"userAvatar",className:U.a.avatar})}),f?Object(E.jsx)("div",{children:Object(E.jsx)("input",{name:"name",value:r,onChange:function(e){s(e.currentTarget.value)},onBlur:A})}):Object(E.jsxs)("span",{onDoubleClick:S,children:["userName: ",e.name]}),f?Object(E.jsx)("div",{children:Object(E.jsx)("input",{name:"email",value:O,onChange:function(e){h(e.currentTarget.value)},onBlur:A})}):Object(E.jsxs)("span",{onDoubleClick:S,children:["userEmail: ",e.email]}),Object(E.jsxs)("div",{className:U.a.btns,children:[Object(E.jsx)("button",{onClick:function(){N((function(e){e(w(c.loading)),x().then((function(t){e(P(!1)),console.log("user",t.data),e(w(c.succeeded))})).catch((function(t){e(w(c.failed));var n=t.response?t.response.data.error:"".concat(t.message,", more details in the console");console.log(n),e(C(n))}))}))},children:"LogOut"}),Object(E.jsx)("button",{onClick:function(){I(_).then((function(e){N(T(e.data.updatedUser))}))},children:"send"}),Object(E.jsx)(j.b,{to:"packs",children:" Packs "})]})]}):Object(E.jsx)(i.a,{to:"login"})},M=function(){return Object(E.jsx)("div",{className:u.a.wrapper,children:Object(E.jsx)("h1",{children:"404:page NOT found"})})},q=p.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),F=function(e){return q.post("auth/forgot",e)},B=function(e){return q.post("auth/set-new-password",e)},J=function(){var e=Object(a.useState)("samutic40@gmail.com"),t=Object(d.a)(e,2),n=t[0],c=t[1],r={email:n,from:"test-front-admin <samutic40@gmail.com>",message:"<div style='background-color: #ffd500; \npadding: 15px; \nborder-color: #ff9900; \nwidth: 250px;\nheight: 30px'> \npassword recovery link: <a href='http://localhost:3000/cards#/newPassword/$token$'> recovery link </a></div>"};return Object(E.jsxs)("div",{className:u.a.wrapper,children:[Object(E.jsx)("div",{children:"Learning game"}),Object(E.jsx)("div",{children:"Forgot your password?"}),Object(E.jsx)("div",{children:Object(E.jsx)("input",{placeholder:"Email",value:n,onChange:function(e){c(e.currentTarget.value)}})}),Object(E.jsx)("div",{children:"Enter your Email and we will send you further instructions"}),Object(E.jsxs)("div",{children:[Object(E.jsx)("button",{onClick:function(){F(r).then((function(e){console.log("res",e.data)}))},children:"Send instructions"})," "]}),Object(E.jsx)("div",{children:"Did you remember your password?"}),Object(E.jsx)(j.b,{to:"/login",children:" Try logging in "})]})},W=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(d.a)(r,2),o=s[0],l=s[1],j=(Object(b.b)(),{password:n,resetPasswordToken:Object(i.h)().token});return o?Object(E.jsx)(i.a,{to:"/login"}):Object(E.jsxs)("div",{className:u.a.wrapper,children:[Object(E.jsx)("div",{children:"Learning game"}),Object(E.jsx)("div",{children:"Create new password?"}),Object(E.jsx)("div",{children:Object(E.jsx)("input",{placeholder:"Password",onChange:function(e){c(e.currentTarget.value)},value:n})}),Object(E.jsx)("div",{children:"Create new password and we will send you further instructions to email"}),Object(E.jsxs)("div",{children:[Object(E.jsx)("button",{onClick:function(){B(j).then((function(e){l((function(e){return!0}))}))},children:"Create new password"})," "]})]})},H=n(19),V=p.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),$=function(e){return V.get("cards/pack",{params:Object(O.a)({},e)})},z=function(e){return V.delete("cards/pack?id=".concat(e))},X=function(e){return V.post("cards/pack",{cardsPack:e})},Z="PACKS/SET_CURRENT_PAGE",Q="PACKS_SET_TOTAL_COUNT",Y={cardPacks:[],cardPacksTotalCount:0,maxCardsCount:0,minCardsCount:0,page:1,pageCount:20},ee=function(e){return{type:"PACKS/SET_PACKS",payload:e}},te=function(e){return{type:Z,currentPage:e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(t,n){var a=n().packs,r=a.pageCount;a.cardPacksTotalCount;t(w(c.loading)),$({page:e,pageCount:r}).then((function(n){t(te(e)),t(ee(n.data)),t(w(c.succeeded))})).catch((function(e){t(w(c.failed));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");console.log(n),t(C(n))}))}},ce=function(e){return function(t,n){var a=n().packs,r=(a.cardPacks,a.page),s=a.pageCount;a.cardPacksTotalCount;t(w(c.loading)),$({sortPacks:e,page:r,pageCount:s}).then((function(e){console.log("res.data",e.data),t(ee(e.data)),t(w(c.succeeded))})).catch((function(e){t(w(c.failed));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");console.log(n),t(C(n))}))}},ae=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(E.jsxs)("div",{children:[n,Object(E.jsx)("input",{type:"range",onChange:function(e){c(+e.currentTarget.value)},value:n})]})},re=n(13),se=n.n(re),oe=function(){var e=Object(b.b)();return Object(E.jsxs)("div",{className:se.a.content,children:[Object(E.jsx)("div",{children:"Show packs cards"}),Object(E.jsxs)("div",{className:se.a.btns,children:[Object(E.jsx)("button",{onClick:function(){e((function(e,t){var n=t().packs,a=(n.cardPacks,n.page),r=n.pageCount,s=(n.cardPacksTotalCount,t().login.user._id);e(w(c.loading)),$({user_id:s,page:a,pageCount:r}).then((function(t){console.log("res.data",t.data),e(ee(t.data)),e(w(c.succeeded))})).catch((function(t){e(w(c.failed));var n=t.response?t.response.data.error:"".concat(t.message,", more details in the console");console.log(n),e(C(n))}))}))},children:"My"}),Object(E.jsx)("button",{onClick:function(){e(ne())},children:"All"})]}),Object(E.jsx)("span",{children:"Number of cards"}),Object(E.jsx)(ae,{})]})},ie=n(9),de=n.n(ie),le=function(e){var t=[];Math.ceil(e.totalCount/e.pageCount);!function(e,t,n){if(t>20)if(n>10)for(var c=n-4;c<=n+5&&(e.push(c),c!=t);c++);else for(var a=1;a<=15&&(e.push(a),a!=t);a++);else for(var r=1;r<=t;r++)e.push(r)}(t,e.totalCount,e.currentPage);var n=Object(b.b)();return Object(E.jsx)("div",{children:t.map((function(t,c){return Object(E.jsx)("button",{className:e.currentPage===t?de.a.selectedPage:"",onClick:function(){n(te(t)),n(ne(t))},children:t},c)}))})},ue=function(){var e=Object(b.b)();return Object(E.jsxs)("div",{className:se.a.arrows,children:[Object(E.jsx)("div",{className:se.a.arrowUp,onClick:function(){e(ce("0cardsCount"))}}),Object(E.jsx)("div",{className:se.a.arrowDown,onClick:function(){e(ce("1cardsCount"))}})]})},je=function(){var e=Object(b.c)((function(e){return e.packs.cardPacks})),t=Object(b.c)((function(e){return e.packs.page})),n=Object(b.c)((function(e){return e.packs.pageCount})),r=Object(b.c)((function(e){return e.packs.cardPacksTotalCount})),s=Object(a.useState)(""),o=Object(d.a)(s,2),i=o[0],l=o[1],u=Object(b.b)(),O=function(e){var t;u((t=e,function(e,n){var a=n().packs;a.cardPacks,a.page,a.pageCount,a.cardPacksTotalCount,e(w(c.loading)),z(t).then((function(t){e(ne()),e(w(c.succeeded))})).catch((function(t){e(w(c.failed));var n=t.response?t.response.data.error:"".concat(t.message,", more details in the console");console.log(n),e(C(n))}))}))},h=e.map((function(e){return Object(E.jsxs)("div",{className:de.a.table,children:[Object(E.jsx)("div",{className:de.a.tableEl,children:e.name}),Object(E.jsx)("div",{className:de.a.tableElSmall,children:e.cardsCount}),Object(E.jsx)("div",{className:de.a.tableEl,children:e.user_name}),Object(E.jsx)("div",{className:de.a.tableEl,children:e.updated}),Object(E.jsx)("div",{children:Object(E.jsx)("button",{onClick:function(){return O(e._id)},children:"del"})}),Object(E.jsx)("div",{children:Object(E.jsx)("button",{onClick:function(){},children:"update"})}),Object(E.jsx)(j.b,{to:"/cards",children:" cards "})]},e._id)}));return Object(E.jsxs)("div",{className:de.a.content,children:[Object(E.jsx)("button",{onClick:function(){u(ne())},children:"add packs"}),Object(E.jsx)("div",{children:" Packs list "}),Object(E.jsxs)("div",{children:[Object(E.jsx)("input",{placeholder:"search",value:i,onChange:function(e){l(e.currentTarget.value)},onKeyPress:function(e){13===e.charCode&&(u(function(e){return function(t,n){var a=n().packs,r=(a.cardPacks,a.page),s=a.pageCount;a.cardPacksTotalCount,t(w(c.loading)),$({packName:e,page:r,pageCount:s}).then((function(e){console.log("res.data",e.data),t(ee(e.data)),t(w(c.succeeded))})).catch((function(e){t(w(c.failed));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");console.log(n),t(C(n))}))}}(i)),l(""))}}),Object(E.jsx)("button",{onClick:function(){var e;u((e={},function(t,n){var a=n().packs;a.cardPacks,a.page,a.pageCount,a.cardPacksTotalCount,t(w(c.loading)),X(e).then((function(e){e.data.newCardsPack,t(ne()),t(w(c.succeeded))})).catch((function(e){t(w(c.failed));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");console.log(n),t(C(n))}))}))},children:"Add new pack"})]}),Object(E.jsx)(le,{pageCount:n,currentPage:t,totalCount:r},1e5*Math.random()),Object(E.jsxs)("div",{className:de.a.table,children:[Object(E.jsx)("div",{className:de.a.tableEl,children:"Name"}),Object(E.jsxs)("div",{className:de.a.tableElSmall,children:["CardsCount",Object(E.jsx)(ue,{})]}),Object(E.jsx)("div",{className:de.a.tableEl,children:"Created by"}),Object(E.jsxs)("div",{className:de.a.tableEl,children:["Updated",Object(E.jsx)(ue,{})]})]}),h]})},be=n(34),Oe=n.n(be),he=function(){return Object(b.c)((function(e){return e.login.isLoggedIn}))?Object(E.jsxs)("div",{className:Oe.a.content,children:[Object(E.jsx)(oe,{}),Object(E.jsx)(je,{})]}):Object(E.jsx)(i.a,{to:"login"})},pe=p.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),ge=function(e,t,n){return pe.get("cards/card",{params:{cardsPackId:e,answer:t,question:n}})},fe={cards:[],answer:"",question:"",cardsTotalCount:5,grade:5,shots:1,maxGrade:5,minGrade:3,page:1,pageCount:4,packUserId:""},xe=function(){var e=Object(b.c)((function(e){return e.cards.cards}));console.log("cards",e);var t=Object(b.b)(),n=(Object(i.g)(),Object(i.h)().cardsPack_id),r=e.map((function(e){return Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{children:e.name}),Object(E.jsx)("div",{children:e.question}),Object(E.jsx)("div",{children:e.answer}),Object(E.jsx)("div",{children:e.updated}),Object(E.jsxs)("div",{style:{display:"flex"},children:[Object(E.jsx)("button",{children:"updated"}),Object(E.jsx)("button",{children:"delete"})]})]})}));return Object(a.useEffect)((function(){var e;n&&t((e=n,function(t,n){var a=n().cards,r=a.answer,s=a.question;t(w(c.loading)),ge(e,r,s).then((function(n){t(function(e,t){return{type:"CARDS/SET_DATA_CARDS",cardsPackId:e,cards:t}}(e,n.data.data.cards)),t(w(c.succeeded))})).catch((function(e){t(w(c.failed)),e.response?e.response.data.error:"".concat(e.message,", more details in the console")}))}))}),[]),Object(E.jsxs)("div",{children:[Object(E.jsx)("button",{children:" add new card"}),r]})},ve=function(){return Object(E.jsxs)(i.d,{children:[Object(E.jsx)(i.b,{path:"login",element:Object(E.jsx)(A,{})}),Object(E.jsx)(i.b,{path:"registration",element:Object(E.jsx)(L,{})}),Object(E.jsx)(i.b,{path:"/",element:Object(E.jsx)(K,{})}),Object(E.jsx)(i.b,{path:"404",element:Object(E.jsx)(M,{})}),Object(E.jsx)(i.b,{path:"*",element:Object(E.jsx)(i.a,{to:"/404"})}),Object(E.jsx)(i.b,{path:"recover",element:Object(E.jsx)(J,{})}),Object(E.jsx)(i.b,{path:"packs",element:Object(E.jsx)(he,{})}),Object(E.jsx)(i.b,{path:"cards",element:Object(E.jsx)(xe,{}),children:Object(E.jsx)(i.b,{path:":cardsPack_id",element:Object(E.jsx)(xe,{})})}),Object(E.jsx)(i.b,{path:"newPassword",element:Object(E.jsx)(W,{}),children:Object(E.jsx)(i.b,{path:":token",element:Object(E.jsx)(W,{})})})]})};var me=function(){var e=Object(b.c)((function(e){return e.app.status})),t=Object(b.b)();return Object(a.useEffect)((function(){t((function(e){e(w(c.loading)),v().then((function(){e(w(c.succeeded))})).catch((function(t){e(w(c.failed));var n=t.response?t.response.data.error:"".concat(t.message,", more details in the console");console.log(n),e(C(n))}))}))}),[t]),Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{children:[Object(E.jsx)(j.c,{to:"login",children:"login"}),"---",Object(E.jsx)(j.c,{to:"/",children:"profile"}),"---",Object(E.jsx)(j.c,{to:"registration",children:"registration"}),"---",Object(E.jsx)(j.c,{to:"recover",children:"recover"}),"---",Object(E.jsx)(j.c,{to:"*",children:"404"}),"---",Object(E.jsx)(j.c,{to:"newPassword/:token",children:"create new"}),"---",Object(E.jsx)(j.c,{to:"packs",children:"packs"}),"----",Object(E.jsx)(j.c,{to:"cards",children:"cards"}),"----"]}),e===c.loading?Object(E.jsx)("div",{children:" loading... "}):Object(E.jsx)(ve,{})]})},ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},Ce=n(20),_e=n(35),we=Object(Ce.b)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARDS/SET_DATA_CARDS":return Object(O.a)(Object(O.a)({},e),t.cards);case"CARDS/REMOVE_CARD":return Object(O.a)(Object(O.a)({},e),{},{cards:e.cards.filter((function(e){return e._id!==t._id}))});case"CARDS/ADD_CARD":return Object(O.a)(Object(O.a)({},e),{},{cards:[t.card].concat(Object(H.a)(e.cards))});case"CARDS/UPDATE_CARD":return Object(O.a)(Object(O.a)({},e),{},{cards:e.cards.map((function(e){return e._id===t.dataUpdate._id?Object(O.a)(Object(O.a)({},e),{},{question:t.dataUpdate.question,answer:t.dataUpdate.answer}):e}))});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER/AUTH_TOGGLE":return Object(O.a)(Object(O.a)({},e),{},{isAuth:t.isAuth});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/STATUS_TOGGLE":return Object(O.a)(Object(O.a)({},e),{},{status:t.status});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR/SET_ERROR_NETWORK":return Object(O.a)(Object(O.a)({},e),{},{errorNetwork:t.error});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/IS_LOGGED_IN":return Object(O.a)(Object(O.a)({},e),{},{isLoggedIn:t.isLoggedIn});case"LOGIN/SET_USER_DATA":return Object(O.a)(Object(O.a)({},e),{},{user:t.user});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PACKS/SET_PACKS":return Object(O.a)(Object(O.a)({},e),t.payload);case Z:return Object(O.a)(Object(O.a)({},e),{},{page:t.currentPage});case Q:return Object(O.a)(Object(O.a)({},e),{},{cardPacksTotalCount:t.cardPacksTotalCount});case"PACKS/REMOVE_PACK":return Object(O.a)(Object(O.a)({},e),{},{cardPacks:e.cardPacks.filter((function(e){return e._id!==t.id}))});case"PACKS/ADD_PACK":return Object(O.a)(Object(O.a)({},e),{},{cardPacks:[t.pack].concat(Object(H.a)(e.cardPacks))});default:return e}}}),Se=Object(Ce.c)(we,Object(Ce.a)(_e.a)),Pe=Se;window.store=Se,o.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(j.a,{children:Object(E.jsx)(b.a,{store:Pe,children:Object(E.jsx)(me,{})})})}),document.getElementById("root")),ke()},9:function(e,t,n){e.exports={content:"Table_content__3zSW8",table:"Table_table__cJSbb",tableEl:"Table_tableEl__2LAda",tableElSmall:"Table_tableElSmall__19iaT",selectedPage:"Table_selectedPage__1Tqon"}}},[[67,1,2]]]);
//# sourceMappingURL=main.abaaf7d5.chunk.js.map