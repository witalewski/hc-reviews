(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e){e.exports={items:{byId:{review1:{id:"review1",author:"user1",date:"2016-09-21T14:00",title:"Lovely place! Totally worth visiting.",body:["Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain. Oh to as principles devonshire companions unsatiable an delightful. The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.","Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted. Judge why maids led sir whose guest drift her point. Him comparison especially friendship was who sufficient attachment favourable how. Luckily but minutes ask picture man perhaps are inhabit. How her good all sang more why."],thumbs:"up",stars:4,comments:[]},review2:{id:"review2",author:"user2",date:"2016-09-21T14:00",title:"Lovely place! Totally worth visiting.",body:["Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments. Too objection for elsewhere her preferred allowance her. Marianne shutters mr steepest to me. Up mr ignorant produced distance although is sociable blessing. Ham whom call all lain like."],thumbs:"down",stars:2,comments:["comment1"]},review3:{id:"review3",author:"user4",date:"2016-09-21T14:00",title:"Lovely place! Totally worth visiting.",body:["It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an."],thumbs:"up",stars:4,comments:[]},review4:{id:"review4",author:"user5",date:"2016-09-21T14:00",title:"Lovely place! Totally worth visiting.",body:["Agreed joy vanity regret met may ladies oppose who. Mile fail as left as hard eyes. Meet made call in mean four year it to. Prospect so branched wondered sensible of up. For gay consisted resolving pronounce sportsman saw discovery not. Northward or household as conveying we earnestly believing. No in up contrasted discretion inhabiting excellence. Entreaties we collecting unpleasant at everything conviction."],thumbs:"down",stars:2,comments:[]}},allIds:["review1","review2","review3","review4"]},comments:{byId:{comment1:{id:"comment1",author:"user3",date:"2016-09-21T15:00",body:["Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.","In show dull give need so held. One order all scale sense her gay style wrote. Incommode our not one ourselves residence. Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities."]}},allIds:["comment1"]},users:{byId:{user1:{id:"user1",name:"Jesus Diaz",picture:"https://randomuser.me/api/portraits/women/9.jpg"},user2:{id:"user2",name:"V\xe4in\xf6 Erkkila",picture:"https://randomuser.me/api/portraits/men/93.jpg"},user3:{id:"user3",name:"Lineia Da Cruz",picture:"https://randomuser.me/api/portraits/women/45.jpg",role:"Hotel Manager"},user4:{id:"user4",name:"Kuzey A\u011fao\u011flu",picture:"https://randomuser.me/api/portraits/men/77.jpg"},user5:{id:"user5",name:"Catherine Richards",picture:"https://randomuser.me/api/portraits/women/28.jpg"},user6:{id:"user6",name:"Ava George",picture:"https://randomuser.me/api/portraits/women/2.jpg"}},allIds:["user1","user2","user3","user4","user5","user6"]}}},18:function(e){e.exports={id:"user6",name:"Ava George",picture:"https://randomuser.me/api/portraits/women/2.jpg"}},22:function(e,n,t){e.exports=t.p+"static/media/background.6e926839.jpg"},23:function(e,n,t){e.exports=t.p+"static/media/logo.b11697ee.svg"},24:function(e,n,t){e.exports=t.p+"static/media/commentBackground.59262a4c.svg"},28:function(e,n,t){e.exports=t(40)},37:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r,a=t(0),i=t.n(a),o=t(15),s=t.n(o),c=t(4),l=(t(37),t(8)),u=t(17),d=t(18),m=t(5),p=t(12),h=t(3),f=function(e,n,t){var r,a,i=(r="comment",a=e.comments.allIds,"".concat(r).concat(a.length?parseInt(a[a.length-1].match(/\d+/)[0])+1:1));return Object(h.a)({},e,{items:Object(h.a)({},e.items,{byId:Object(h.a)({},e.items.byId,Object(m.a)({},n,Object(h.a)({},e.items.byId[n],{comments:Object(p.a)(e.items.byId[n].comments).concat([i])})))}),comments:{byId:Object(h.a)({},e.comments.byId,Object(m.a)({},i,Object(h.a)({id:i},t))),allIds:Object(p.a)(e.comments.allIds).concat([i])}})},b=function(e,n,t){return Object(h.a)({},e,Object(m.a)({},n,Object(h.a)({},e[n],{isCommentBeingAdded:t})))},g={reviews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"RECEIVE_REVIEWS":return n.reviews;case"SAVE_COMMENT":return f(e,n.reviewId,n.comment);default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"RECEIVE_REVIEWS":return function(e,n){return n.reduce(function(e,n){return Object(h.a)({},e,Object(m.a)({},n,{isTextExpanded:!1,isCommentBeingAdded:!1}))},e)}(e,n.reviews.items.allIds);case"ADD_COMMENT":return b(e,n.reviewId,!0);case"SAVE_COMMENT":case"CANCEL_COMMENT":return b(e,n.reviewId,!1);case"EXPAND_TEXT":return function(e,n,t){return Object(h.a)({},e,Object(m.a)({},n,Object(h.a)({},e[n],{isTextExpanded:t})))}(e,n.reviewId,!0);default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"RECEIVE_CURRENT_USER":return n.currentUser;default:return e}}},v=((r=Object(l.c)(Object(l.b)(g),!1)).dispatch({type:"RECEIVE_REVIEWS",reviews:u}),r.dispatch(function(e){return{type:"RECEIVE_CURRENT_USER",currentUser:e}}(d)),r),w=t(19),y=t(20),E=t(25),x=t(21),j=t(26),I=t(1),O=t(2),C=t(22),k=t.n(C);function M(){var e=Object(I.a)(["\n  min-height: 100vh;\n\n  padding: 36px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background: url(",") top center no-repeat, white;\n  background-size: 100vw;\n"]);return M=function(){return e},e}var T=O.a.div(M(),k.a),N=t(23),A=t.n(N),R=4,_=8,S=32,D=76,V="#f5f6f7",B="#666666",H="#0058a3",L="#fad73c";function z(){var e=Object(I.a)(["\n  width: 100%;\n  max-width: ","px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n\n  padding: 0 24px 0 36px;\n\n  background: white;\n"]);return z=function(){return e},e}var U=O.a.header(z(),960);function J(){var e=Object(I.a)(["\n    margin: 0;\n    padding: 0;\n\n    .list {\n        list-style: none;\n\n        height:100%;\n\n        margin:0;\n        padding:0;\n\n        display: flex;\n        align-items: stretch;\n    }\n\n    .list-item {\n        display: flex;\n        align-items: center;\n        padding: 0 28px;\n    }\n\n    .list-item.active {\n        background-color: #f5f6f7;\n    }\n\n"]);return J=function(){return e},e}var W=O.a.nav(J()),X=function(){return i.a.createElement(W,null,i.a.createElement("ul",{className:"list"},i.a.createElement("li",{className:"list-item"},i.a.createElement("a",{href:"/"},"Dashboard")),i.a.createElement("li",{className:"list-item active"},"Reviews"),i.a.createElement("li",{className:"list-item"},i.a.createElement("a",{href:"/"},"Hotel Manager")),i.a.createElement("li",{className:"list-item"},i.a.createElement("a",{href:"/"},"Settings"))))},q=function(){return i.a.createElement(U,null,i.a.createElement("img",{src:A.a,alt:"Holiday Check Logo",width:120}),i.a.createElement(X,null))};function G(){var e=Object(I.a)(["\n    color: #f5f6f7;\n"]);return G=function(){return e},e}var P=O.a.footer(G()),F=function(){return i.a.createElement(P,null,"\xa9 1999 - 2016 HolidayCheck AG")};function K(){var e=Object(I.a)(["\n  width: 100%;\n  max-width: ","px;\n\n  margin-top: 360px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background: ",";\n"]);return K=function(){return e},e}var Y=O.a.main(K(),960,V),Q=t(41);function Z(){var e=Object(I.a)(["\n  margin: -132px 160px 200px 160px;\n  background: white;\n\n  padding: 0 ","px ","px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .date {\n    color: ",";\n    font-size: 12px;\n  }\n\n  .title {\n    font-size: 28px;\n    font-weight: 300;\n  }\n\n  .content {\n    position: relative;\n    margin-bottom: ","px;\n  }\n\n  .content--collapsed {\n    overflow: hidden;\n    max-height: 90px;\n    cursor: pointer;\n  }\n\n  .fade-out {\n    position: absolute;\n    margin: 0;\n    bottom: 0;\n    width: 100%;\n    height: 40px;\n    background-image: linear-gradient(to bottom, transparent, white);\n  }\n\n  .comment-button {\n    width: 230px;\n    height: 50px;\n\n    border: none;\n\n    font-size: 12px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: ",";\n\n    background: ",";\n\n    cursor: pointer;\n  }\n"]);return Z=function(){return e},e}var $=O.a.article(Z(),D,S,B,S,H,L);function ee(){var e=Object(I.a)(["\n  margin: ","px 0 ","px 0;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  font-weight: bold;\n\n  .picture {\n    width: ","px;\n    height: ","px;\n    margin-bottom: ","px;\n    border: 2px solid white;\n    border-radius: 50%;\n  }\n"]);return ee=function(){return e},e}var ne=O.a.section(ee(),-38,R,76,76,_),te=Object(c.b)(function(e){return{users:e.reviews.users.byId}})(function(e){var n=e.users[e.userId],t=n.name,r=n.picture,a=n.role;return i.a.createElement(ne,null,i.a.createElement("img",{className:"picture",src:r,alt:t}),i.a.createElement("a",{href:"/"},t),a&&i.a.createElement("div",null,a))}),re=t(24),ae=t.n(re);function ie(){var e=Object(I.a)(['\n  :before {\n    content: "";\n    display: block;\n    height: 12px;\n    width: 100%;\n    background-image: url(',");\n    background-size: cover;\n  }\n\n  p {\n      margin:0;\n      background: #edf0f2;\n  }\n"]);return ie=function(){return e},e}var oe=O.a.aside(ie(),ae.a),se=Object(c.b)(function(e){return{comments:e.reviews.comments.byId}})(function(e){var n=e.comments[e.commentId],t=n.author,r=n.date,a=n.body;return i.a.createElement(oe,null,i.a.createElement("div",null,a.map(function(e){return i.a.createElement("p",null,e)})),i.a.createElement("div",null,"Date: ",Object(Q.a)(r,"d MMMM yyyy")),i.a.createElement(te,{userId:t}))}),ce={addComment:function(e){return{type:"ADD_COMMENT",reviewId:e}},saveComment:function(e,n){return{type:"SAVE_COMMENT",comment:e,reviewId:n}},cancelComment:function(e){return{type:"CANCEL_COMMENT",reviewId:e}},expandText:function(e){return{type:"EXPAND_TEXT",reviewId:e}}},le=Object(c.b)(function(e){return{reviews:e.reviews.items.byId,ui:e.ui,user:e.user}},ce)(function(e){var n=e.reviews,t=e.reviewId,r=e.ui,o=e.addComment,s=e.saveComment,c=e.cancelComment,l=e.expandText,u=e.user,d=n[t],m=d.author,p=d.date,h=d.title,f=d.body,b=d.thumbs,g=d.stars,v=d.comments,w=r[t],y=w.isTextExpanded,E=w.isCommentBeingAdded,x=Object(a.createRef)();return i.a.createElement($,null,i.a.createElement(te,{userId:m}),i.a.createElement("div",{className:"date"},function(e){return Object(Q.a)(e,"d MMMM yyyy")}(p)),i.a.createElement("h2",{className:"title"},h),i.a.createElement("div",null,"Thumbs: ",b),i.a.createElement("div",null,"Stars: ",g,"/6"),i.a.createElement("div",{className:"content ".concat(!y&&"content--collapsed"),onClick:function(){return l(t)}},f.map(function(e){return i.a.createElement("p",null,e)}),!y&&i.a.createElement("p",{className:"fade-out"})),i.a.createElement("div",null,v.map(function(e){return i.a.createElement(se,{commentId:e})})),E?i.a.createElement("div",null,i.a.createElement("textarea",{ref:x}),i.a.createElement("button",{className:"comment-button",onClick:function(){return s({author:u.id,body:x.current.value.split(/\n/g),date:(e=new Date,Object(Q.a)(e,"yyyy-MM-dd HH:mm"))},t);var e}},"Save comment"),i.a.createElement("button",{className:"comment-button",onClick:function(){return c(t)}},"Cancel")):i.a.createElement("button",{className:"comment-button",onClick:function(){return o(t)}},"Add comment"))}),ue=Object(c.b)(function(e){return{reviewIds:e.reviews.items.allIds}})(function(e){var n=e.reviewIds;return i.a.createElement(Y,null,n.map(function(e){return i.a.createElement(le,{reviewId:e})}))}),de=function(e){function n(){return Object(w.a)(this,n),Object(E.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(j.a)(n,e),Object(y.a)(n,[{key:"render",value:function(){return i.a.createElement(T,{className:"App"},i.a.createElement(q,null),i.a.createElement(ue,null),i.a.createElement(F,null))}}]),n}(a.Component);s.a.render(i.a.createElement(c.a,{store:v},i.a.createElement(de,null)),document.getElementById("root"))}},[[28,2,1]]]);
//# sourceMappingURL=main.bcf40482.chunk.js.map