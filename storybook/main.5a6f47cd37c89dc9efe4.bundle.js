(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",function(){return SAVE_COMMENT}),__webpack_require__.d(__webpack_exports__,"a",function(){return ADD_COMMENT}),__webpack_require__.d(__webpack_exports__,"b",function(){return CANCEL_COMMENT}),__webpack_require__.d(__webpack_exports__,"f",function(){return saveComment}),__webpack_require__.d(__webpack_exports__,"d",function(){return addComment}),__webpack_require__.d(__webpack_exports__,"e",function(){return cancelComment});var SAVE_COMMENT="SAVE_COMMENT",ADD_COMMENT="ADD_COMMENT",CANCEL_COMMENT="CANCEL_COMMENT",saveComment=function(comment,reviewId){return{type:SAVE_COMMENT,comment:comment,reviewId:reviewId}},addComment=function(reviewId){return{type:ADD_COMMENT,reviewId:reviewId}},cancelComment=function(reviewId){return{type:CANCEL_COMMENT,reviewId:reviewId}}},2:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",function(){return maxContainerWidth}),__webpack_require__.d(__webpack_exports__,"d",function(){return imageDimensions}),__webpack_require__.d(__webpack_exports__,"a",function(){return breakpoint}),__webpack_require__.d(__webpack_exports__,"c",function(){return fontSize}),__webpack_require__.d(__webpack_exports__,"f",function(){return spacing}),__webpack_require__.d(__webpack_exports__,"b",function(){return colors});var maxContainerWidth=960,imageDimensions=76,breakpoint=768,fontSize={smaller:11,small:12,normal:14,large:28},spacing={smallest:4,smaller:8,small:16,mediumSmall:24,medium:32,mediumLarge:36,large:48,larger:76},colors={lightGray:"#f5f6f7",mediumLightGray:"#edf0f2",darkGray:"#909090",blue:"#0058a3",yellow:"#fad73c",green:"#54b13f",red:"#e8402d"}},24:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(1),react_default=__webpack_require__.n(react),lib=__webpack_require__(15),taggedTemplateLiteral=__webpack_require__(6),styled_browser_cjs=__webpack_require__(7),styled_browser_cjs_default=__webpack_require__.n(styled_browser_cjs),styleConstants=__webpack_require__(2);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  margin: 0 ","px -","px 0;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  transform: translateY(-","px);\n\n  .name {\n    font-weight: bold;\n  }\n\n  .picture {\n    width: ","px;\n    height: ","px;\n    margin-bottom: ","px;\n    border: 2px solid white;\n    border-radius: 50%;\n  }\n"]);return _templateObject=function(){return data},data}var UserStyled=styled_browser_cjs_default.a.section(_templateObject(),styleConstants.f.smallest,styleConstants.d/2,styleConstants.d/2,styleConstants.d,styleConstants.d,styleConstants.f.smaller),User_User=function(_ref){var users=_ref.users,userId=_ref.userId,className=_ref.className,user=users[userId];return react_default.a.createElement(UserStyled,{className:className},react_default.a.createElement("img",{className:"picture",src:user.picture,alt:user.name}),function(user){return user.isCurrentUser?react_default.a.createElement("div",{className:"name"},"You"):user.role?react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",{className:"name"},user.name),react_default.a.createElement("div",{className:"role"},user.role)):react_default.a.createElement("a",{className:"name",href:"/hc-reviews"},user.name)}(user))},UserConnected=Object(lib.connect)(function(state){return{users:state.reviews.users.byId}})(User_User);User_User.__docgenInfo={description:"",methods:[],displayName:"User"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/User/User.js"]={name:"User",docgenInfo:User_User.__docgenInfo,path:"src/components/User/User.js"}),__webpack_require__.d(__webpack_exports__,"a",function(){return UserConnected})},243:function(module){module.exports={items:{byId:{review1:{id:"review1",author:"user1",date:"2016-09-21T14:00",title:"Lovely place! Totally worth visiting.",body:["Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain. Oh to as principles devonshire companions unsatiable an delightful. The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.","Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted. Judge why maids led sir whose guest drift her point. Him comparison especially friendship was who sufficient attachment favourable how. Luckily but minutes ask picture man perhaps are inhabit. How her good all sang more why."],thumbs:"up",stars:4,comments:[]},review2:{id:"review2",author:"user2",date:"2016-09-21T14:00",title:"Lovely place! Totally worth visiting.",body:["Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments. Too objection for elsewhere her preferred allowance her. Marianne shutters mr steepest to me. Up mr ignorant produced distance although is sociable blessing. Ham whom call all lain like."],thumbs:"down",stars:2,comments:["comment1"]},review3:{id:"review3",author:"user4",date:"2016-09-21T14:00",title:"Lovely place! Totally worth visiting.",body:["It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. Removing yourself be in answered he. Consider occasion get improved him she eat. Letter by lively oh denote an."],thumbs:"up",stars:4,comments:[]},review4:{id:"review4",author:"user5",date:"2016-09-21T14:00",title:"Lovely place! Totally worth visiting.",body:["Agreed joy vanity regret met may ladies oppose who. Mile fail as left as hard eyes. Meet made call in mean four year it to. Prospect so branched wondered sensible of up. For gay consisted resolving pronounce sportsman saw discovery not. Northward or household as conveying we earnestly believing. No in up contrasted discretion inhabiting excellence. Entreaties we collecting unpleasant at everything conviction."],thumbs:"down",stars:2,comments:[]}},allIds:["review1","review2","review3","review4"]},comments:{byId:{comment1:{id:"comment1",author:"user3",date:"2016-09-21T15:00",body:["Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.","In show dull give need so held. One order all scale sense her gay style wrote. Incommode our not one ourselves residence. Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities."]}},allIds:["comment1"]},users:{byId:{user1:{id:"user1",name:"Jesus Diaz",picture:"https://randomuser.me/api/portraits/women/9.jpg",isCurrentUser:!1},user2:{id:"user2",name:"Väinö Erkkila",picture:"https://randomuser.me/api/portraits/men/93.jpg",isCurrentUser:!1},user3:{id:"user3",name:"Lineia Da Cruz",picture:"https://randomuser.me/api/portraits/women/45.jpg",role:"Hotel Manager",isCurrentUser:!1},user4:{id:"user4",name:"Kuzey Ağaoğlu",picture:"https://randomuser.me/api/portraits/men/77.jpg",isCurrentUser:!1},user5:{id:"user5",name:"Catherine Richards",picture:"https://randomuser.me/api/portraits/women/28.jpg",isCurrentUser:!1},user6:{id:"user6",name:"Ava George",picture:"https://randomuser.me/api/portraits/women/2.jpg",isCurrentUser:!0}},allIds:["user1","user2","user3","user4","user5","user6"]}}},244:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo.b11697ee.svg"},248:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(1),react_default=__webpack_require__.n(react),logo=__webpack_require__(244),logo_default=__webpack_require__.n(logo),taggedTemplateLiteral=__webpack_require__(6),styled_browser_cjs=__webpack_require__(7),styled_browser_cjs_default=__webpack_require__.n(styled_browser_cjs),styleConstants=__webpack_require__(2);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  width: 100%;\n  max-width: ","px;\n  height: 110px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n\n  padding: 0 24px 0 36px;\n\n  background: white;\n\n  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.1);\n"]);return _templateObject=function(){return data},data}var HeaderStyled=styled_browser_cjs_default.a.header(_templateObject(),styleConstants.e);function NavStyled_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  margin: 0;\n  padding: 0;\n\n  .list {\n    list-style: none;\n\n    height: 100%;\n\n    margin: 0;\n    padding: 0;\n\n    display: flex;\n    align-items: stretch;\n  }\n\n  .list-item {\n    display: flex;\n    align-items: center;\n    padding: 0 28px;\n  }\n\n  .list-item.active {\n    background-color: #f5f6f7;\n  }\n\n\n\n  @media all and (max-width: ","px) {\n      display: none;\n  }\n"]);return NavStyled_templateObject=function(){return data},data}var NavStyled=styled_browser_cjs_default.a.nav(NavStyled_templateObject(),styleConstants.a),Nav_Nav=function(){return react_default.a.createElement(NavStyled,null,react_default.a.createElement("ul",{className:"list"},react_default.a.createElement("li",{className:"list-item"},react_default.a.createElement("a",{href:"/hc-reviews"},"Dashboard")),react_default.a.createElement("li",{className:"list-item active"},"Reviews"),react_default.a.createElement("li",{className:"list-item"},react_default.a.createElement("a",{href:"/hc-reviews"},"Hotel Manager")),react_default.a.createElement("li",{className:"list-item"},react_default.a.createElement("a",{href:"/hc-reviews"},"Settings"))))};Nav_Nav.__docgenInfo={description:"",methods:[],displayName:"Nav"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Nav/Nav.js"]={name:"Nav",docgenInfo:Nav_Nav.__docgenInfo,path:"src/components/Nav/Nav.js"});var Header_Header=function(){return react_default.a.createElement(HeaderStyled,null,react_default.a.createElement("img",{src:logo_default.a,alt:"Holiday Check Logo",width:120}),react_default.a.createElement(Nav_Nav,null))};Header_Header.__docgenInfo={description:"",methods:[],displayName:"Header"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Header/Header.js"]={name:"Header",docgenInfo:Header_Header.__docgenInfo,path:"src/components/Header/Header.js"}),__webpack_require__.d(__webpack_exports__,"a",function(){return Header_Header})},249:function(module,__webpack_exports__,__webpack_require__){"use strict";var redux=__webpack_require__(75),reviews=__webpack_require__(243),defineProperty=__webpack_require__(23),toConsumableArray=__webpack_require__(76),objectSpread=__webpack_require__(20),commentActions=__webpack_require__(19),initialState={items:{byId:{},allIds:[]},comments:{byId:{},allIds:[]},users:{byId:{},allIds:[]}},uiActions=__webpack_require__(95),uiReducer_addCommentEntry=function(state,comentId){var _objectSpread3;return Object(objectSpread.a)({},state,(_objectSpread3={},Object(defineProperty.a)(_objectSpread3,comentId,{isTextExpanded:!1}),Object(defineProperty.a)(_objectSpread3,"nextCommentId","comment".concat(parseInt(comentId.match(/\d+/)[0])+1)),_objectSpread3))},uiReducer_setIsCommentBeingAdded=function(state,reviewId,isCommentBeingAdded){return Object(objectSpread.a)({},state,Object(defineProperty.a)({},reviewId,Object(objectSpread.a)({},state[reviewId],{isCommentBeingAdded:isCommentBeingAdded})))},uiReducer_initialState={nextCommentId:1};__webpack_require__.d(__webpack_exports__,"a",function(){return store_store});var store,reducers={reviews:function(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"RECEIVE_REVIEWS":return action.reviews;case commentActions.c:return function(state,reviewId,comment){return Object(objectSpread.a)({},state,{items:Object(objectSpread.a)({},state.items,{byId:Object(objectSpread.a)({},state.items.byId,Object(defineProperty.a)({},reviewId,Object(objectSpread.a)({},state.items.byId[reviewId],{comments:Object(toConsumableArray.a)(state.items.byId[reviewId].comments).concat([comment.id])})))}),comments:{byId:Object(objectSpread.a)({},state.comments.byId,Object(defineProperty.a)({},comment.id,comment)),allIds:Object(toConsumableArray.a)(state.comments.allIds).concat([comment.id])}})}(state,action.reviewId,action.comment);default:return state}},ui:function(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:uiReducer_initialState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"RECEIVE_REVIEWS":return function(state,commentIds){return commentIds.reduce(uiReducer_addCommentEntry,state)}(function(state,reviewIds){return reviewIds.reduce(function(acc,id){return Object(objectSpread.a)({},acc,Object(defineProperty.a)({},id,{isTextExpanded:!1,isCommentBeingAdded:!1}))},state)}(state,action.reviews.items.allIds),action.reviews.comments.allIds);case commentActions.a:return uiReducer_setIsCommentBeingAdded(state,action.reviewId,!0);case commentActions.c:return uiReducer_setIsCommentBeingAdded(uiReducer_addCommentEntry(state,action.comment.id),action.reviewId,!1);case commentActions.b:return uiReducer_setIsCommentBeingAdded(state,action.reviewId,!1);case uiActions.a:return function(state,reviewId,isTextExpanded){return Object(objectSpread.a)({},state,Object(defineProperty.a)({},reviewId,Object(objectSpread.a)({},state[reviewId],{isTextExpanded:isTextExpanded})))}(state,action.reviewId,!0);default:return state}},user:function(){var usersById,state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"RECEIVE_REVIEWS":return(usersById=action.reviews.users.byId)[Object.keys(usersById).filter(function(userId){return usersById[userId].isCurrentUser})[0]];default:return state}}},store_store=((store=Object(redux.createStore)(Object(redux.combineReducers)(reducers),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())).dispatch(function(reviews){return{type:"RECEIVE_REVIEWS",reviews:reviews}}(reviews)),store)},252:function(module,exports,__webpack_require__){__webpack_require__(253),__webpack_require__(326),module.exports=__webpack_require__(327)},327:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(39);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){__webpack_require__(449)},module)}.call(this,__webpack_require__(152)(module))},33:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(1),react_default=__webpack_require__.n(react),lib=__webpack_require__(15),toConsumableArray=__webpack_require__(76),taggedTemplateLiteral=__webpack_require__(6),styled_browser_cjs=__webpack_require__(7),styled_browser_cjs_default=__webpack_require__.n(styled_browser_cjs),styleConstants=__webpack_require__(2);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  width: 306px;\n  height: 48px;\n\n  margin-bottom: ","px;\n\n  display: flex;\n  align-items: stretch;\n\n  .thumbs {\n    flex-basis: 66px;\n\n    padding-top: 14px;\n\n    color: white;\n    text-align: center;\n\n    &.up {\n      background: ",";\n    }\n\n    &.down {\n      background: ",";\n    }\n  }\n\n  .stars {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-basis: 240px;\n    border: 1px solid ",";\n\n    .stars-list {\n      list-style: none;\n      padding: 0;\n      display: flex;\n\n      .fa-star {\n        vertical-align: 0;\n        margin: ","px;\n      }\n\n      .full {\n        color: ",";\n      }\n\n      .empty {\n        color: ",";\n      }\n    }\n\n    .stars-description {\n      font-weight: bold;\n    }\n  }\n"]);return _templateObject=function(){return data},data}var RatingStyled=styled_browser_cjs_default.a.section(_templateObject(),styleConstants.f.smaller,styleConstants.b.green,styleConstants.b.red,styleConstants.b.mediumLightGray,styleConstants.f.smallest,styleConstants.b.yellow,styleConstants.b.mediumLightGray);__webpack_require__.d(__webpack_exports__,"a",function(){return Rating_Rating}),__webpack_require__.d(__webpack_exports__,"b",function(){return RatingConnected});var Rating_createStars=function(starRating){return function range(start,end){return start===end?[start]:[start].concat(Object(toConsumableArray.a)(range(start+1,end)))}(1,6).map(function(i){return function(i,className){return react_default.a.createElement("li",{key:"star-".concat(i,"-").concat(className)},react_default.a.createElement("i",{className:"fas fa-star fa-lg ".concat(className)}))}(i,i<=starRating?"full":"empty")})},Rating_Rating=function(_ref){var reviewId=_ref.reviewId,_reviews$reviewId=_ref.reviews[reviewId],thumbs=_reviews$reviewId.thumbs,stars=_reviews$reviewId.stars;return react_default.a.createElement(RatingStyled,null,react_default.a.createElement("div",{className:"thumbs ".concat(thumbs)},react_default.a.createElement("i",{className:"fas fa-thumbs-".concat(thumbs," fa-lg")})),react_default.a.createElement("div",{className:"stars"},react_default.a.createElement("ul",{className:"stars-list"},Rating_createStars(stars)),react_default.a.createElement("div",{className:"stars-description"},stars,"/6")))},RatingConnected=Object(lib.connect)(function(state){return{reviews:state.reviews.items.byId}})(Rating_Rating);Rating_Rating.__docgenInfo={description:"",methods:[],displayName:"Rating"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Rating/Rating.js"]={name:"Rating",docgenInfo:Rating_Rating.__docgenInfo,path:"src/components/Rating/Rating.js"})},449:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(39),_global_styleConstants__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(466),__webpack_require__(2)),_state_store__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(249),_components_Header__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(248),_components_Review__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(77),_components_ExpandableContent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(58),_components_User__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(24),_components_Rating_Rating__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(33),providerDecorator=function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider,{store:_state_store__WEBPACK_IMPORTED_MODULE_5__.a},story())},centeredWithTopMarginDecorator=function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:24}},story())};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Header",module).addDecorator(centeredWithTopMarginDecorator).add("Header",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_6__.a,null)}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("User",module).addDecorator(providerDecorator).addDecorator(function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{marginTop:200,marginBottom:200,background:_global_styleConstants__WEBPACK_IMPORTED_MODULE_4__.b.lightGray}},story())}).add("User 1",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_User__WEBPACK_IMPORTED_MODULE_9__.a,{userId:"user1"})}).add("User 2",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_User__WEBPACK_IMPORTED_MODULE_9__.a,{userId:"user2"})}).add("User 3",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_User__WEBPACK_IMPORTED_MODULE_9__.a,{userId:"user3"})}).add("User 4",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_User__WEBPACK_IMPORTED_MODULE_9__.a,{userId:"user4"})}).add("User 5",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_User__WEBPACK_IMPORTED_MODULE_9__.a,{userId:"user5"})}).add("User 6",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_User__WEBPACK_IMPORTED_MODULE_9__.a,{userId:"user6"})}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("ExpandableContent",module).addDecorator(providerDecorator).add("Sample",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExpandableContent__WEBPACK_IMPORTED_MODULE_8__.a,{id:"review1",body:["Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year. An from mean on with when sing pain. Oh to as principles devonshire companions unsatiable an delightful. The ourselves suffering the sincerity. Inhabit her manners adapted age certain. Debating offended at branched striking be subjects.","Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted. Judge why maids led sir whose guest drift her point. Him comparison especially friendship was who sufficient attachment favourable how. Luckily but minutes ask picture man perhaps are inhabit. How her good all sang more why."]})}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Rating",module).addDecorator(centeredWithTopMarginDecorator).add("6/6, thumbs up",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Rating_Rating__WEBPACK_IMPORTED_MODULE_10__.a,{reviewId:"review1",reviews:{review1:{thumbs:"up",stars:6}}})}).add("5/6, thumbs up",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Rating_Rating__WEBPACK_IMPORTED_MODULE_10__.a,{reviewId:"review1",reviews:{review1:{thumbs:"up",stars:5}}})}).add("4/6, thumbs up",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Rating_Rating__WEBPACK_IMPORTED_MODULE_10__.a,{reviewId:"review1",reviews:{review1:{thumbs:"up",stars:4}}})}).add("3/6, thumbs up",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Rating_Rating__WEBPACK_IMPORTED_MODULE_10__.a,{reviewId:"review1",reviews:{review1:{thumbs:"up",stars:3}}})}).add("2/6, thumbs down",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Rating_Rating__WEBPACK_IMPORTED_MODULE_10__.a,{reviewId:"review1",reviews:{review1:{thumbs:"down",stars:2}}})}).add("1/6, thumbs down",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Rating_Rating__WEBPACK_IMPORTED_MODULE_10__.a,{reviewId:"review1",reviews:{review1:{thumbs:"down",stars:1}}})}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Review",module).addDecorator(providerDecorator).addDecorator(function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{paddingTop:200,paddingBottom:200,background:_global_styleConstants__WEBPACK_IMPORTED_MODULE_4__.b.lightGray}},story())}).add("Review 1",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Review__WEBPACK_IMPORTED_MODULE_7__.a,{reviewId:"review1"})}).add("Review 2",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Review__WEBPACK_IMPORTED_MODULE_7__.a,{reviewId:"review2"})}).add("Review 3",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Review__WEBPACK_IMPORTED_MODULE_7__.a,{reviewId:"review3"})}).add("Review 4",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Review__WEBPACK_IMPORTED_MODULE_7__.a,{reviewId:"review4"})})}.call(this,__webpack_require__(152)(module))},466:function(module,exports,__webpack_require__){},58:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(1),react_default=__webpack_require__.n(react),lib=__webpack_require__(15),uiActions=__webpack_require__(95),taggedTemplateLiteral=__webpack_require__(6),styled_browser_cjs=__webpack_require__(7),styled_browser_cjs_default=__webpack_require__.n(styled_browser_cjs),styleConstants=__webpack_require__(2);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  position: relative;\n  margin-bottom: ","px;\n  padding: 0 ","px;\n\n  &.collapsed {\n    max-height: 110px;\n    overflow: hidden;\n    cursor: pointer;\n  }\n\n  .fade-out {\n    position: absolute;\n    margin: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 40px;\n    background-image: linear-gradient(\n      to bottom,\n      rgba(255, 255, 255, 0),\n      rgba(255, 255, 255, 1)\n    );\n  }\n"]);return _templateObject=function(){return data},data}var ExpandableContentStyled=styled_browser_cjs_default.a.div(_templateObject(),styleConstants.f.mediumSmall,styleConstants.f.mediumLarge),ExpandableContent_ExpandableContent=function(_ref){var id=_ref.id,body=_ref.body,className=_ref.className,children=_ref.children,ui=_ref.ui,expandText=_ref.expandText,isTextExpanded=ui[id].isTextExpanded;return react_default.a.createElement(ExpandableContentStyled,{className:"".concat(className," ").concat(isTextExpanded?"":"collapsed"),onClick:function(){return expandText(id)}},body.map(function(line){return react_default.a.createElement("p",{className:"paragraph",key:line},line)}),children,!isTextExpanded&&react_default.a.createElement("p",{className:"fade-out"}))},mapDispatchToProps={expandText:uiActions.b},ExpandableContentConnected=Object(lib.connect)(function(state){return{ui:state.ui}},mapDispatchToProps)(ExpandableContent_ExpandableContent);ExpandableContent_ExpandableContent.__docgenInfo={description:"",methods:[],displayName:"ExpandableContent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ExpandableContent/ExpandableContent.js"]={name:"ExpandableContent",docgenInfo:ExpandableContent_ExpandableContent.__docgenInfo,path:"src/components/ExpandableContent/ExpandableContent.js"}),__webpack_require__.d(__webpack_exports__,"a",function(){return ExpandableContentConnected})},77:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(1),react_default=__webpack_require__.n(react),lib=__webpack_require__(15),commentActions=__webpack_require__(19),taggedTemplateLiteral=__webpack_require__(6),styled_browser_cjs=__webpack_require__(7),styled_browser_cjs_default=__webpack_require__.n(styled_browser_cjs),styleConstants=__webpack_require__(2);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  margin: 0 160px 80px 160px;\n  background: white;\n\n  padding: 0 ","px ","px ","px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.1);\n\n  transform: translateY(-126px);\n\n  .title {\n    font-size: ","px;\n    font-weight: 300;\n    text-align: center;\n    padding: 0 ","px;\n  }\n\n  .comments-list {\n    list-style: none;\n    margin-top: 0;\n    margin-bottom: ","px;\n    padding: 0;\n    align-self: stretch;\n  }\n\n  @media all and (max-width: ","px) {\n      margin: 0 0 80px 0;\n      padding: 10px 0;\n  }\n"]);return _templateObject=function(){return data},data}var ReviewStyled=styled_browser_cjs_default.a.article(_templateObject(),styleConstants.f.mediumLarge,styleConstants.f.mediumLarge,styleConstants.f.mediumLarge,styleConstants.c.large,styleConstants.f.mediumLarge,styleConstants.f.medium,styleConstants.a),User=__webpack_require__(24),commentBackground=__webpack_require__(96),commentBackground_default=__webpack_require__.n(commentBackground);function CommentStyled_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  margin-bottom: 120px;\n\n  background: linear-gradient(transparent 14px, ",' 0px);\n\n  :before {\n    content: "";\n    display: block;\n    height: 14px;\n    width: 100%;\n    background-image: url(',");\n    background-size: cover;\n  }\n\n  .header {\n    margin: ","px ","px ","px\n      ","px;\n    padding: 0;\n    text-align: center;\n    font-weight: 600;\n  }\n\n  .content {\n    margin: 0 ","px;\n    padding: 0 ","px ","px;\n\n    &.collapsed {\n      max-height: 60px;\n    }\n\n    .paragraph {\n      margin-top: 0;\n    }\n\n    .fade-out {\n      background-image: linear-gradient(\n        to bottom,\n        rgba(237, 240, 242, 0),\n        rgba(237, 240, 242, 1)\n      );\n    }\n  }\n\n  .comment-author {\n    margin-top: -72px;\n    font-size: ","px;\n    transform: translateY(72px);\n\n    .picture {\n      border-color: ",";\n    }\n  }\n"]);return CommentStyled_templateObject=function(){return data},data}var CommentStyled=styled_browser_cjs_default.a.aside(CommentStyled_templateObject(),styleConstants.b.mediumLightGray,commentBackground_default.a,styleConstants.f.small,styleConstants.f.mediumSmall,styleConstants.f.smallest,styleConstants.f.mediumSmall,styleConstants.f.mediumSmall,styleConstants.f.mediumSmall,styleConstants.f.small,styleConstants.c.smaller,styleConstants.b.mediumLightGray),ExpandableContent=__webpack_require__(58),date_fns=__webpack_require__(139),dateFormatter_formatDateForPersistence=function(date){return Object(date_fns.format)(date,"yyyy-MM-dd HH:mm")};function DateStyled_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  color: ",";\n  font-size: ","px;\n  text-align: center;\n"]);return DateStyled_templateObject=function(){return data},data}var DateStyled=styled_browser_cjs_default.a.div(DateStyled_templateObject(),styleConstants.b.darkGray,styleConstants.c.smaller),Date_Date=function(_ref){var date=_ref.date;return react_default.a.createElement(DateStyled,{className:"date"},function(date){return Object(date_fns.format)(date,"d MMMM yyyy")}(date))};Date_Date.__docgenInfo={description:"",methods:[],displayName:"Date"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Date/Date.js"]={name:"Date",docgenInfo:Date_Date.__docgenInfo,path:"src/components/Date/Date.js"});var Comment_Comment=function(_ref){var comments=_ref.comments,commentId=_ref.commentId,_comments$commentId=comments[commentId],author=_comments$commentId.author,date=_comments$commentId.date,body=_comments$commentId.body;return react_default.a.createElement(CommentStyled,{className:"comment"},react_default.a.createElement("h3",{className:"header"},"Comment"),react_default.a.createElement(ExpandableContent.a,{id:commentId,className:"content",body:body},react_default.a.createElement(Date_Date,{date:date})),react_default.a.createElement(User.a,{userId:author,className:"comment-author"}))},CommentConnected=Object(lib.connect)(function(state){return{comments:state.reviews.comments.byId}})(Comment_Comment);Comment_Comment.__docgenInfo={description:"",methods:[],displayName:"Comment"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Comment/Comment.js"]={name:"Comment",docgenInfo:Comment_Comment.__docgenInfo,path:"src/components/Comment/Comment.js"});var classCallCheck=__webpack_require__(245),createClass=__webpack_require__(246),possibleConstructorReturn=__webpack_require__(250),getPrototypeOf=__webpack_require__(247),inherits=__webpack_require__(251);function NewCommentStyled_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  width: 100%;\n\n  padding: 0 ","px ","px;\n\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  background: linear-gradient(transparent 10px, ",' 0px);\n\n  :before {\n    content: "";\n    display: block;\n    height: 10px;\n    width: 100%;\n    background-image: url(',");\n    background-size: cover;\n  }\n\n  .comment-input {\n    flex-basis: calc(100% - 2 * ","px);\n    min-height: 90px;\n    margin: ","px;\n  }\n\n  .comment-button {\n    flex-basis: calc(50% - 2 * ","px);\n    margin: ","px ","px;\n  }\n\n  @media all and (max-width: ","px) {\n    padding-top: 3px;\n  }\n"]);return NewCommentStyled_templateObject=function(){return data},data}var NewCommentStyled=styled_browser_cjs_default.a.div(NewCommentStyled_templateObject(),styleConstants.f.mediumSmall,styleConstants.f.small,styleConstants.b.mediumLightGray,commentBackground_default.a,styleConstants.f.small,styleConstants.f.small,styleConstants.f.small,styleConstants.f.smaller,styleConstants.f.small,styleConstants.a);function ActionButton_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  width: 230px;\n  height: 50px;\n\n  border: none;\n\nfont-size: ","px;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: ",";\n\n  background: ",";\n\n  cursor: pointer;\n"]);return ActionButton_templateObject=function(){return data},data}var ActionButton=styled_browser_cjs_default.a.button(ActionButton_templateObject(),styleConstants.c.small,styleConstants.b.blue,styleConstants.b.yellow),NewComment_NewComment=function(_Component){function NewComment(){var _getPrototypeOf2,_this;Object(classCallCheck.a)(this,NewComment);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=Object(possibleConstructorReturn.a)(this,(_getPrototypeOf2=Object(getPrototypeOf.a)(NewComment)).call.apply(_getPrototypeOf2,[this].concat(args)))).commentInputRef=Object(react.createRef)(),_this.createNewComment=function(){var _this$props=_this.props;return{id:_this$props.ui.nextCommentId,author:_this$props.user.id,body:_this.commentInputRef.current.value.split(/\n/g).filter(function(line){return line.length}),date:dateFormatter_formatDateForPersistence(new Date)}},_this.onSaveButtonClick=function(){var _this$props2=_this.props,reviewId=_this$props2.reviewId;(0,_this$props2.saveComment)(_this.createNewComment(),reviewId)},_this.onCancelButtonClick=function(){var _this$props3=_this.props,reviewId=_this$props3.reviewId;(0,_this$props3.cancelComment)(reviewId)},_this}return Object(inherits.a)(NewComment,_Component),Object(createClass.a)(NewComment,[{key:"componentDidMount",value:function(){this.commentInputRef.current.focus()}},{key:"render",value:function(){return react_default.a.createElement(NewCommentStyled,null,react_default.a.createElement("textarea",{className:"comment-input",ref:this.commentInputRef}),react_default.a.createElement(ActionButton,{className:"comment-button",onClick:this.onSaveButtonClick},"Save comment"),react_default.a.createElement(ActionButton,{className:"comment-button",onClick:this.onCancelButtonClick},"Cancel"))}}]),NewComment}(react.Component),mapDispatchToProps={saveComment:commentActions.f,cancelComment:commentActions.e},NewCommentConnected=Object(lib.connect)(function(state){return{ui:state.ui,user:state.user}},mapDispatchToProps)(NewComment_NewComment),Rating=__webpack_require__(33),Review_getCommentListItem=function(commentId){return react_default.a.createElement("li",{key:commentId},react_default.a.createElement(CommentConnected,{commentId:commentId}))},Review_Review=function(_ref){var reviews=_ref.reviews,reviewId=_ref.reviewId,ui=_ref.ui,addComment=_ref.addComment,_reviews$reviewId=reviews[reviewId],author=_reviews$reviewId.author,date=_reviews$reviewId.date,title=_reviews$reviewId.title,body=_reviews$reviewId.body,comments=_reviews$reviewId.comments,isCommentBeingAdded=ui[reviewId].isCommentBeingAdded;return react_default.a.createElement(ReviewStyled,null,react_default.a.createElement(User.a,{userId:author}),react_default.a.createElement(Date_Date,{date:date}),react_default.a.createElement("h2",{className:"title"},title),react_default.a.createElement(Rating.b,{reviewId:reviewId}),react_default.a.createElement(ExpandableContent.a,{id:reviewId,className:"content",body:body}),comments.length>0&&react_default.a.createElement("ul",{className:"comments-list"},comments.map(Review_getCommentListItem)),isCommentBeingAdded?react_default.a.createElement(NewCommentConnected,{reviewId:reviewId}):react_default.a.createElement(ActionButton,{onClick:function(){return addComment(reviewId)}},"Add comment"))},Review_mapDispatchToProps={addComment:commentActions.d,saveComment:commentActions.f,cancelComment:commentActions.e},ReviewConnected=Object(lib.connect)(function(state){return{reviews:state.reviews.items.byId,ui:state.ui,user:state.user}},Review_mapDispatchToProps)(Review_Review);Review_Review.__docgenInfo={description:"",methods:[],displayName:"Review"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Review/Review.js"]={name:"Review",docgenInfo:Review_Review.__docgenInfo,path:"src/components/Review/Review.js"}),__webpack_require__.d(__webpack_exports__,"a",function(){return ReviewConnected})},95:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return EXPAND_TEXT}),__webpack_require__.d(__webpack_exports__,"b",function(){return expandText});var EXPAND_TEXT="EXPAND_TEXT",expandText=function(reviewId){return{type:EXPAND_TEXT,reviewId:reviewId}}},96:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/commentBackground.59262a4c.svg"}},[[252,1,2]]]);
//# sourceMappingURL=main.5a6f47cd37c89dc9efe4.bundle.js.map