(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t.p+"static/media/commentBackground.59262a4c.svg"},23:function(e){e.exports={items:{byId:{review1:{id:"review1",author:"user1",date:"2016-09-21T14:00",title:"Lovely place! Totally worth visiting.",body:["Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain. Oh to as principles devonshire companions unsatiable an delightful. The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.","Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted. Judge why maids led sir whose guest drift her point. Him comparison especially friendship was who sufficient attachment favourable how. Luckily but minutes ask picture man perhaps are inhabit. How her good all sang more why."],thumbs:"up",stars:4,comments:[]},review2:{id:"review2",author:"user2",date:"2016-09-21T14:00",title:"Lovely place! Totally worth visiting.",body:["Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments. Too objection for elsewhere her preferred allowance her. Marianne shutters mr steepest to me. Up mr ignorant produced distance although is sociable blessing. Ham whom call all lain like."],thumbs:"down",stars:2,comments:["comment1"]},review3:{id:"review3",author:"user4",date:"2016-09-21T14:00",title:"Lovely place! Totally worth visiting.",body:["It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an."],thumbs:"up",stars:4,comments:[]},review4:{id:"review4",author:"user5",date:"2016-09-21T14:00",title:"Lovely place! Totally worth visiting.",body:["Agreed joy vanity regret met may ladies oppose who. Mile fail as left as hard eyes. Meet made call in mean four year it to. Prospect so branched wondered sensible of up. For gay consisted resolving pronounce sportsman saw discovery not. Northward or household as conveying we earnestly believing. No in up contrasted discretion inhabiting excellence. Entreaties we collecting unpleasant at everything conviction."],thumbs:"down",stars:2,comments:[]}},allIds:["review1","review2","review3","review4"]},comments:{byId:{comment1:{id:"comment1",author:"user3",date:"2016-09-21T15:00",body:["Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.","In show dull give need so held. One order all scale sense her gay style wrote. Incommode our not one ourselves residence. Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities."]}},allIds:["comment1"]},users:{byId:{user1:{id:"user1",name:"Jesus Diaz",picture:"https://randomuser.me/api/portraits/women/9.jpg",isCurrentUser:!1},user2:{id:"user2",name:"V\xe4in\xf6 Erkkila",picture:"https://randomuser.me/api/portraits/men/93.jpg",isCurrentUser:!1},user3:{id:"user3",name:"Lineia Da Cruz",picture:"https://randomuser.me/api/portraits/women/45.jpg",role:"Hotel Manager",isCurrentUser:!1},user4:{id:"user4",name:"Kuzey A\u011fao\u011flu",picture:"https://randomuser.me/api/portraits/men/77.jpg",isCurrentUser:!1},user5:{id:"user5",name:"Catherine Richards",picture:"https://randomuser.me/api/portraits/women/28.jpg",isCurrentUser:!1},user6:{id:"user6",name:"Ava George",picture:"https://randomuser.me/api/portraits/women/2.jpg",isCurrentUser:!0}},allIds:["user1","user2","user3","user4","user5","user6"]}}},24:function(e,n,t){e.exports=t.p+"static/media/background.6e926839.jpg"},25:function(e,n,t){e.exports=t.p+"static/media/logo.b11697ee.svg"},26:function(e,n,t){e.exports=t(39)},35:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a,r=t(0),i=t.n(r),o=t(21),s=t.n(o),c=t(3),l=(t(35),t(8)),u=t(23),m=t(5),d=t(9),p=t(4),f=function(e,n){return{type:"SAVE_COMMENT",comment:e,reviewId:n}},h=function(e){return{type:"CANCEL_COMMENT",reviewId:e}},b=function(e,n){var t;return Object(p.a)({},e,(t={},Object(m.a)(t,n,{isTextExpanded:!1}),Object(m.a)(t,"nextCommentId","comment".concat(parseInt(n.match(/\d+/)[0])+1)),t))},g=function(e,n,t){return Object(p.a)({},e,Object(m.a)({},n,Object(p.a)({},e[n],{isCommentBeingAdded:t})))},v={reviews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"RECEIVE_REVIEWS":return n.reviews;case"SAVE_COMMENT":return function(e,n,t){return Object(p.a)({},e,{items:Object(p.a)({},e.items,{byId:Object(p.a)({},e.items.byId,Object(m.a)({},n,Object(p.a)({},e.items.byId[n],{comments:Object(d.a)(e.items.byId[n].comments).concat([t.id])})))}),comments:{byId:Object(p.a)({},e.comments.byId,Object(m.a)({},t.id,t)),allIds:Object(d.a)(e.comments.allIds).concat([t.id])}})}(e,n.reviewId,n.comment);default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{nextCommentId:1},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"RECEIVE_REVIEWS":return function(e,n){return n.reduce(b,e)}(function(e,n){return n.reduce(function(e,n){return Object(p.a)({},e,Object(m.a)({},n,{isTextExpanded:!1,isCommentBeingAdded:!1}))},e)}(e,n.reviews.items.allIds),n.reviews.comments.allIds);case"ADD_COMMENT":return g(e,n.reviewId,!0);case"SAVE_COMMENT":return g(b(e,n.comment.id),n.reviewId,!1);case"CANCEL_COMMENT":return g(e,n.reviewId,!1);case"EXPAND_TEXT":return function(e,n,t){return Object(p.a)({},e,Object(m.a)({},n,Object(p.a)({},e[n],{isTextExpanded:t})))}(e,n.reviewId,!0);default:return e}},user:function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_REVIEWS":return(e=t.reviews.users.byId)[Object.keys(e).find(function(n){return e[n].isCurrentUser})];default:return n}}},w=((a=Object(l.c)(Object(l.b)(v),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())).dispatch({type:"RECEIVE_REVIEWS",reviews:u}),a),x=t(11),y=t(12),E=t(15),O=t(13),j=t(16),I=t(1),C=t(2),k=t(24),N=t.n(k);function T(){var e=Object(I.a)(["\n  min-height: 100vh;\n\n  padding: 30px 0;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background: url(",") top center no-repeat, white;\n  background-size: 100vw;\n"]);return T=function(){return e},e}var M=C.a.div(T(),N.a),_=t(25),A=t.n(_),S=11,R=12,D=28,B=4,V=8,L=16,U=24,H=32,z=36,X="#f5f6f7",W="#edf0f2",Y="#909090",J="#0058a3",q="#fad73c",F="#54b13f",P="#e8402d";function G(){var e=Object(I.a)(["\n  width: 100%;\n  max-width: ","px;\n  height: 110px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n\n  padding: 0 24px 0 36px;\n\n  background: white;\n\n  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.1);\n"]);return G=function(){return e},e}var K=C.a.header(G(),960);function Q(){var e=Object(I.a)(["\n  margin: 0;\n  padding: 0;\n\n  .list {\n    list-style: none;\n\n    height: 100%;\n\n    margin: 0;\n    padding: 0;\n\n    display: flex;\n    align-items: stretch;\n  }\n\n  .list-item {\n    display: flex;\n    align-items: center;\n    padding: 0 28px;\n  }\n\n  .list-item.active {\n    background-color: #f5f6f7;\n  }\n\n\n\n  @media all and (max-width: ","px) {\n      display: none;\n  }\n"]);return Q=function(){return e},e}var Z=C.a.nav(Q(),768),$=function(){return i.a.createElement(Z,null,i.a.createElement("ul",{className:"list"},i.a.createElement("li",{className:"list-item"},i.a.createElement("a",{href:"/"},"Dashboard")),i.a.createElement("li",{className:"list-item active"},"Reviews"),i.a.createElement("li",{className:"list-item"},i.a.createElement("a",{href:"/"},"Hotel Manager")),i.a.createElement("li",{className:"list-item"},i.a.createElement("a",{href:"/"},"Settings"))))},ee=function(){return i.a.createElement(K,null,i.a.createElement("img",{src:A.a,alt:"Holiday Check Logo",width:120}),i.a.createElement($,null))};function ne(){var e=Object(I.a)(["\n    margin: 0 0 32px 0;\n    color: ",";\n"]);return ne=function(){return e},e}var te=C.a.footer(ne(),Y),ae=function(){return i.a.createElement(te,null,"\xa9 1999 - 2016 HolidayCheck AG")};function re(){var e=Object(I.a)(["\n  width: 100%;\n  max-width: ","px;\n\n  margin-top: 340px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background: linear-gradient(\n    "," calc(100% - 60px),\n    transparent calc(100% - 60px)\n  );\n\n  @media all and (max-width: ","px) {\n    margin-top: 200px;\n  }\n"]);return re=function(){return e},e}var ie=C.a.main(re(),960,X,768);function oe(){var e=Object(I.a)(["\n  margin: 0 160px 80px 160px;\n  background: white;\n\n  padding: 0 ","px ","px ","px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.1);\n\n  transform: translateY(-126px);\n\n  .title {\n    font-size: ","px;\n    font-weight: 300;\n    text-align: center;\n    padding: 0 ","px;\n  }\n\n  .comments-list {\n    list-style: none;\n    margin-top: 0;\n    margin-bottom: ","px;\n    padding: 0;\n    align-self: stretch;\n  }\n\n  @media all and (max-width: ","px) {\n      margin: 0 0 80px 0;\n      padding: 10px 0;\n  }\n"]);return oe=function(){return e},e}var se=C.a.article(oe(),z,z,z,D,z,H,768);function ce(){var e=Object(I.a)(["\n  margin: 0 ","px -","px 0;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  transform: translateY(-","px);\n\n  .name {\n    font-weight: bold;\n  }\n\n  .picture {\n    width: ","px;\n    height: ","px;\n    margin-bottom: ","px;\n    border: 2px solid white;\n    border-radius: 50%;\n  }\n"]);return ce=function(){return e},e}var le=C.a.section(ce(),B,38,38,76,76,V),ue=Object(c.b)(function(e){return{users:e.reviews.users.byId}})(function(e){var n=e.users,t=e.userId,a=e.className,r=n[t];return i.a.createElement(le,{className:a},i.a.createElement("img",{className:"picture",src:r.picture,alt:r.name}),function(e){return e.isCurrentUser?i.a.createElement("div",{className:"name"},"You"):e.role?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"name"},e.name),i.a.createElement("div",{className:"role"},e.role)):i.a.createElement("a",{className:"name",href:"/"},e.name)}(r))}),me=t(14),de=t.n(me);function pe(){var e=Object(I.a)(["\n  margin-bottom: 100px;\n\n  background: linear-gradient(transparent 14px, ",' 0px);\n\n  :before {\n    content: "";\n    display: block;\n    height: 14px;\n    width: 100%;\n    background-image: url(',");\n    background-size: cover;\n  }\n\n  .header {\n    margin: ","px ","px ","px\n      ","px;\n    padding: 0;\n    text-align: center;\n    font-weight: 600;\n  }\n\n  .content {\n    margin: 0 ","px;\n    padding: 0 ","px ","px;\n\n    &.collapsed {\n      max-height: 60px;\n    }\n\n    .paragraph {\n      margin-top: 0;\n    }\n\n    .fade-out {\n      background-image: linear-gradient(\n        to bottom,\n        transparent,\n        ","\n      );\n    }\n  }\n\n  .comment-author {\n    margin-top: -72px;\n    font-size: ","px;\n    transform: translateY(72px);\n\n    .picture {\n      border-color: ",";\n    }\n  }\n"]);return pe=function(){return e},e}var fe=C.a.aside(pe(),W,de.a,L,U,B,U,U,U,L,W,S,W);function he(){var e=Object(I.a)(["\n  position: relative;\n  margin-bottom: ","px;\n  padding: 0 ","px;\n\n  &.collapsed {\n    max-height: 110px;\n    overflow: hidden;\n    cursor: pointer;\n  }\n\n  .fade-out {\n    position: absolute;\n    margin: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 40px;\n    background-image: linear-gradient(to bottom, transparent, white);\n  }\n"]);return he=function(){return e},e}var be=C.a.div(he(),U,z),ge={expandText:function(e){return{type:"EXPAND_TEXT",reviewId:e}}},ve=Object(c.b)(function(e){return{ui:e.ui}},ge)(function(e){var n=e.id,t=e.body,a=e.className,r=e.children,o=e.ui,s=e.expandText,c=o[n].isTextExpanded;return i.a.createElement(be,{className:"".concat(a," ").concat(c?"":"collapsed"),onClick:function(){return s(n)}},t.map(function(e){return i.a.createElement("p",{className:"paragraph",key:e},e)}),r,!c&&i.a.createElement("p",{className:"fade-out"}))}),we=t(41),xe=function(e){return Object(we.a)(e,"yyyy-MM-dd HH:mm")};function ye(){var e=Object(I.a)(["\n  color: ",";\n  font-size: ","px;\n  text-align: center;\n"]);return ye=function(){return e},e}var Ee=C.a.div(ye(),Y,S),Oe=function(e){var n=e.date;return i.a.createElement(Ee,{className:"date"},function(e){return Object(we.a)(e,"d MMMM yyyy")}(n))},je=Object(c.b)(function(e){return{comments:e.reviews.comments.byId}})(function(e){var n=e.comments,t=e.commentId,a=n[t],r=a.author,o=a.date,s=a.body;return i.a.createElement(fe,{className:"comment"},i.a.createElement("h3",{className:"header"},"Comment"),i.a.createElement(ve,{id:t,className:"content",body:s},i.a.createElement(Oe,{date:o})),i.a.createElement(ue,{userId:r,className:"comment-author"}))});function Ie(){var e=Object(I.a)(["\n  width: 100%;\n\n  padding: 0 ","px ","px;\n\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  background: linear-gradient(transparent 10px, ",' 0px);\n\n  :before {\n    content: "";\n    display: block;\n    height: 10px;\n    width: 100%;\n    background-image: url(',");\n    background-size: cover;\n  }\n\n  .comment-input {\n    flex-basis: calc(100% - 2 * ","px);\n    min-height: 90px;\n    margin: ","px;\n  }\n\n  .comment-button {\n    flex-basis: calc(50% - 2 * ","px);\n    margin: ","px ","px;\n  }\n\n  @media all and (max-width: ","px) {\n    padding-top: 3px;\n  }\n"]);return Ie=function(){return e},e}var Ce=C.a.div(Ie(),U,L,W,de.a,L,L,L,V,L,768);function ke(){var e=Object(I.a)(["\n  width: 230px;\n  height: 50px;\n\n  border: none;\n\nfont-size: ","px;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: ",";\n\n  background: ",";\n\n  cursor: pointer;\n"]);return ke=function(){return e},e}var Ne=C.a.button(ke(),R,J,q),Te=function(e){function n(){var e,t;Object(x.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=Object(E.a)(this,(e=Object(O.a)(n)).call.apply(e,[this].concat(i)))).commentInputRef=Object(r.createRef)(),t.createNewComment=function(){var e=t.props;return{id:e.ui.nextCommentId,author:e.user.id,body:t.commentInputRef.current.value.split(/\n/g).filter(function(e){return e.length}),date:xe(new Date)}},t.onSaveButtonClick=function(){var e=t.props,n=e.reviewId;(0,e.saveComment)(t.createNewComment(),n)},t.onCancelButtonClick=function(){var e=t.props,n=e.reviewId;(0,e.cancelComment)(n)},t}return Object(j.a)(n,e),Object(y.a)(n,[{key:"componentDidMount",value:function(){this.commentInputRef.current.focus()}},{key:"render",value:function(){return i.a.createElement(Ce,null,i.a.createElement("textarea",{className:"comment-input",ref:this.commentInputRef}),i.a.createElement(Ne,{className:"comment-button",onClick:this.onSaveButtonClick},"Save comment"),i.a.createElement(Ne,{className:"comment-button",onClick:this.onCancelButtonClick},"Cancel"))}}]),n}(r.Component),Me={saveComment:f,cancelComment:h},_e=Object(c.b)(function(e){return{ui:e.ui,user:e.user}},Me)(Te);function Ae(){var e=Object(I.a)(["\n  width: 306px;\n  height: 48px;\n\n  margin-bottom: ","px;\n\n  display: flex;\n  align-items: stretch;\n\n  .thumbs {\n    flex-basis: 66px;\n\n    padding-top: 14px;\n\n    color: white;\n    text-align: center;\n\n    &.up {\n      background: ",";\n    }\n\n    &.down {\n      background: ",";\n    }\n  }\n\n  .stars {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-basis: 240px;\n    border: 1px solid ",";\n\n    .stars-list {\n      list-style: none;\n      padding: 0;\n      display: flex;\n\n      .fa-star {\n        vertical-align: 0;\n        margin: ","px;\n      }\n\n      .full {\n        color: ",";\n      }\n\n      .empty {\n        color: ",";\n      }\n    }\n\n    .stars-description {\n      font-weight: bold;\n    }\n  }\n"]);return Ae=function(){return e},e}var Se=C.a.section(Ae(),V,F,P,W,B,q,W),Re=function(e){return function e(n,t){return n===t?[n]:[n].concat(Object(d.a)(e(n+1,t)))}(1,6).map(function(n){return function(e,n){return i.a.createElement("li",{key:"star-".concat(e,"-").concat(n)},i.a.createElement("i",{className:"fas fa-star fa-lg ".concat(n)}))}(n,n<=e?"full":"empty")})},De=Object(c.b)(function(e){return{reviews:e.reviews.items.byId}})(function(e){var n=e.reviewId,t=e.reviews[n],a=t.thumbs,r=t.stars;return i.a.createElement(Se,null,i.a.createElement("div",{className:"thumbs ".concat(a)},i.a.createElement("i",{className:"fas fa-thumbs-".concat(a," fa-lg")})),i.a.createElement("div",{className:"stars"},i.a.createElement("ul",{className:"stars-list"},Re(r)),i.a.createElement("div",{className:"stars-description"},r,"/6")))}),Be=function(e){return i.a.createElement("li",{key:e},i.a.createElement(je,{commentId:e}))},Ve={addComment:function(e){return{type:"ADD_COMMENT",reviewId:e}},saveComment:f,cancelComment:h},Le=Object(c.b)(function(e){return{reviews:e.reviews.items.byId,ui:e.ui,user:e.user}},Ve)(function(e){var n=e.reviews,t=e.reviewId,a=e.ui,r=e.addComment,o=n[t],s=o.author,c=o.date,l=o.title,u=o.body,m=o.comments,d=a[t].isCommentBeingAdded;return i.a.createElement(se,null,i.a.createElement(ue,{userId:s}),i.a.createElement(Oe,{date:c}),i.a.createElement("h2",{className:"title"},l),i.a.createElement(De,{reviewId:t}),i.a.createElement(ve,{id:t,className:"content",body:u}),m.length>0&&i.a.createElement("ul",{className:"comments-list"},m.map(Be)),d?i.a.createElement(_e,{reviewId:t}):i.a.createElement(Ne,{onClick:function(){return r(t)}},"Add comment"))}),Ue=Object(c.b)(function(e){return{reviewIds:e.reviews.items.allIds}})(function(e){var n=e.reviewIds;return i.a.createElement(ie,null,n.map(function(e){return i.a.createElement(Le,{key:e,reviewId:e})}))}),He=function(e){function n(){return Object(x.a)(this,n),Object(E.a)(this,Object(O.a)(n).apply(this,arguments))}return Object(j.a)(n,e),Object(y.a)(n,[{key:"render",value:function(){return i.a.createElement(M,{className:"App"},i.a.createElement(ee,null),i.a.createElement(Ue,null),i.a.createElement(ae,null))}}]),n}(r.Component);s.a.render(i.a.createElement(c.a,{store:w},i.a.createElement(He,null)),document.getElementById("root"))}},[[26,2,1]]]);
//# sourceMappingURL=main.00234a31.chunk.js.map