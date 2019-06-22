(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a(230)},112:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),i=a.n(r),s=(a(112),a(9)),c=function(e){var t=e.store,a=e.children;return o.a.createElement(s.a,{view:t.view,router:t.router,data:t.data,imgAddition:t.imgAddition},a)},l=a(287),u=a(285),d=a(101),m=a(97),g=a.n(m),p=a(54),h=a.n(p),b=a(96),f=a.n(b),v={bodyColor:{dark:h.a.A400,light:h.a[50]},palette:{primary:f.a,secondary:g.a,text:{primary:h.a[50]}}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u.a)(Object(d.a)(Object.assign({},e,v,{typography:{useNextVariants:!0}})))},k=Object(s.b)("view")(Object(s.c)(function(e){var t=e.view,a=e.children;return o.a.createElement(l.a,{theme:E({palette:{type:t.lightThemeActive?"light":"dark"}})},a)})),O=a(266),I=a(77),y=function(){return o.a.createElement(I.a,null,o.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}))},A=function(){return o.a.createElement(O.a,{color:"inherit","aria-label":"go to github",onClick:function(){return e="https://github.com/OriLev/edge-books",void window.open(e);var e}},o.a.createElement(y,null))},S=a(5),w=a(267),x=Object(S.a)(function(e){return{title:Object.assign({},e.mixins.gutters(),{flex:"1 1 auto"})}})(function(e){var t=e.classes,a=e.title;return o.a.createElement(w.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0},a)}),j=Object(s.b)("view")(Object(s.c)(function(e){var t=e.view;return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{title:t.currentPage.title}),o.a.createElement(A,null))})),R=a(53),B=a(98),L=a.n(B),_=Object(S.a)(function(){return{wrapper:{zIndex:1,height:"100vh",overflow:"auto",position:"relative",width:"100%"}}})(function(e){var t=e.classes,a=Object(R.a)(e,["classes"]);return o.a.createElement("div",Object.assign({className:t.wrapper},a))}),N=Object(s.b)("view")(function(e){var t=e.children,a=e.view;return o.a.createElement(_,null,t,o.a.createElement(L.a,{target:"window",onResize:a.onScreenResize}))}),P=a(268),T=a(269),U=Object(S.a)(function(){return{appBar:{right:0,left:"auto",position:"absolute"}}})(function(e){var t=e.classes,a=e.children;return o.a.createElement(P.a,{className:t.appBar},o.a.createElement(T.a,null,a))}),D=function(e){var t=e.classes,a=e.children,n=e.disableGutters;return o.a.createElement("main",{className:!n&&t.content},o.a.createElement("div",{className:t.toolbar}),a)};D.defaultProps={disableGutters:!1};var G=Object(S.a)(function(e){return{toolbar:e.mixins.toolbar,content:Object.assign({},e.mixins.gutters(),{backgroundColor:e.palette.background.default})}})(D),M=a(6),C=a.n(M),z=a(270),H=a(103),F=Object(S.a)(function(e){return{container:{padding:e.spacing(2),minHeight:"140px",display:"flex",flexDirection:"column",justifyContent:"space-around"}}})(function(e){var t=e.classes,a=e.title,n=e.author;return o.a.createElement(z.a,{className:t.container},o.a.createElement(w.a,{variant:"h3",color:"textSecondary"},a),o.a.createElement(w.a,{variant:"body2",color:"textSecondary"},"by"),o.a.createElement(w.a,{variant:"h5",color:"textSecondary"},n))}),W=a(271),V=a(272),K=a(274),X=a(286),Y=a(288),J=a(273),q=a(275),$=Object(W.a)(X.a)({color:"black",cursor:"pointer"}),Q=Object(W.a)("form")({display:"flex",flexDirection:"row",width:"80%",minHeight:"100px"}),Z=Object(W.a)(V.a)({flex:"1 0 auto",maxWidth:"calc(100% - 108px)"}),ee=Object(W.a)(J.a)({minWidth:"108px",marginTop:"16px",minHeight:"36px",maxHeight:"36px"}),te=Object(s.b)("imgAddition")(Object(s.c)(function(e){var t=e.bookId,a=e.imgAddition;return console.log("rendered"),o.a.createElement(Q,{onSubmit:function(e){e.preventDefault(),a.addImage(t)}},o.a.createElement(Z,{error:a.isErrorState},o.a.createElement(Y.a,{htmlFor:"image-url-input"},"Image URL"),o.a.createElement($,{id:"image-url-input",value:a.imgURL,onChange:function(e){console.log("input.value: ",e.target.value),a.updateImgURL(e.target.value)},type:"text"}),a.isErrorState?o.a.createElement(K.a,{id:"component-error-text"},a.errorMessage):null),o.a.createElement(ee,{color:"secondary",type:"submit"},a.postingInProgress?o.a.createElement(q.a,{size:20}):o.a.createElement(w.a,null,"Add Image")))})),ae=a(276),ne=a(99),oe=a.n(ne),re=Object(S.a)(function(e){return{backButton:{position:"absolute",left:e.spacing(2),top:e.spacing(2),transitionDelay:"".concat(e.transitions.duration.leavingScreen,"ms")}}})(function(e){var t=e.classes,a=e.goBack,n={color:"secondary",className:t.backButton,icon:o.a.createElement(oe.a,null),label:"Go back to Book List"};return o.a.createElement(ae.a,{"aria-label":n.label,className:n.className,color:n.color,onClick:function(){return a("/")},title:"Back to Book List"},n.icon)}),ie=a(277),se=a(278),ce=a(279),le=a(284),ue=function(e){var t=e.split("?")[1].split("").slice(0,2).join("");return"https://picsum.photos/id/".concat(t,"/300/400")},de=Object(S.a)(function(e){return{container:{marginTop:e.spacing(1),paddingBottom:e.spacing(2)},gridList:{width:"100%"},subHeader:{textAlign:"left",fontSize:"1.5rem",fontStyle:"italic"}}})(Object(le.a)()(function(e){var t=e.classes,a=e.images,n=e.width;return o.a.createElement(z.a,{className:t.container},o.a.createElement(ie.a,{cellHeight:"auto",spacing:16,className:t.gridList,cols:Object(le.b)("xl",n)?4:Object(le.b)("lg",n)?3:Object(le.b)("md",n)?2:1},o.a.createElement(se.a,{key:"Subheader",disableGutters:!0,style:{height:"auto",width:"100%"}},o.a.createElement(ce.a,{className:t.subHeader,component:"h4"},"Images:")),a.map(function(e){return o.a.createElement(se.a,{key:e,cols:1},o.a.createElement("img",{src:ue(e),alt:e}))})))})),me={API:{BASE_URL:"https://jsonapiplayground.reyesoft.com/v2"},ROUTING:{SINGLE_BOOK_ROUTE:"/book",MISSING_PARAMS_MSG:"Illegal Route (parameters missing)",TOO_MANY_PARAMS_MSG:"Illegal Route (too many parameters)"},REGEX:{URL_VALIDATION_REGX:new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i")},MESSAGES:{INVALID_URL_MESSAGE:"Please insert a valid URL",POST_IMAGE_FAILED:"Adding the image failed, try again later",POST_IMAGE_SUCCESSFUL:"Image posted successfully",NO_IMAGES_FOR_THIS_BOOK:"There are no images for this book... wanna add some? :)"}},ge=me.MESSAGES.NO_IMAGES_FOR_THIS_BOOK,pe=function(){return o.a.createElement(z.a,null,o.a.createElement(w.a,{variant:"h4",color:"primary"},ge))},he=Object(s.b)("data","router")(Object(S.a)(function(e){return{bookContainer:{paddingTop:e.spacing(8),paddingRight:e.spacing(2),paddingLeft:e.spacing(2),paddingBottom:e.spacing(2),marginBottom:e.spacing(2),minWidth:"80%",minHeight:"80vh",margin:"10px auto auto",overflow:"auto",border:"solid 1px rgba(0, 0, 0, 0.1)",borderRadius:"15px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",position:"relative",textAlign:"center",zIndex:50}}})(Object(s.c)(function(e){var t=e.classes,a=e.data,n=e.router,r=e.bookId;if(a.books.length>0){var i=a.getBookById(r),s=a.getBookPhotos(i);return o.a.createElement(H.a,{className:t.bookContainer,component:"div"},o.a.createElement(re,{goBack:n.goTo}),o.a.createElement(F,{title:a.getBookTitle(i),author:a.getBookAuthor(i)}),o.a.createElement(te,{bookId:r}),s.length>0?o.a.createElement(de,{images:s}):o.a.createElement(pe,null))}return null}))),be=a(283),fe=a(281),ve=a(280),Ee=a(282),ke=function(e){var t=e.classes,a=e.book,n=e.variant;return o.a.createElement(ve.a,{className:t.content},o.a.createElement(w.a,{gutterBottom:!0,align:"center",variant:"h5",component:"h5",color:"media"===n?"textPrimary":"textSecondary"},a.title),o.a.createElement(w.a,{gutterBottom:!0,variant:"body1",component:"p",color:"media"===n?"textPrimary":"textSecondary"},a.author),a.photos.length>1?o.a.createElement("span",{className:t.additionalImages},"+".concat(a.photos.length-1)):null)},Oe=function(e){var t=e.classes,a=e.book,n=e.component,r=e.onClick;return o.a.createElement(fe.a,{className:t.card,component:n,onClick:r},o.a.createElement(ke,{book:a,classes:t,variant:"plain"}))},Ie=function(e){var t=e.classes,a=e.book,n=e.component,r=e.onClick,i=ue(a.photos[0]);return o.a.createElement(fe.a,{className:t.card,component:n,onClick:r},o.a.createElement(Ee.a,{className:t.media,image:i,title:a.title},o.a.createElement(ke,{classes:t,book:a,variant:"media"})))},ye=Object(S.a)(function(e){return{card:{maxWidth:345,margin:"auto",height:400,overflow:"hidden",border:"solid 1px rgba(0, 0, 0, 0.1)",borderRadius:"15px",display:"flex",position:"relative",zIndex:50,textDecoration:"none",cursor:"pointer","&:hover":{borderColor:"rgba(0, 0, 0, 0.3)"}},media:{height:400,width:"100%",position:"absolute",zIndex:100,"&>div":{background:"rgba(0, 0, 0, 0.4)"}},content:{zIndex:5,width:"100%",boxSizing:"border-box",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.3)"}},additionalImages:{display:"flex",justifyContent:"center",alignItems:"center",width:"30px",height:"30px",borderRadius:"50%",backgroundColor:e.palette.grey[400],position:"absolute",right:"20px",bottom:"20px"}}})(function(e){var t=e.book,a=Object(R.a)(e,["book"]);return t.photos.length>0?o.a.createElement(Ie,Object.assign({},a,{book:t})):o.a.createElement(Oe,Object.assign({},a,{book:t}))}),Ae=me.ROUTING.SINGLE_BOOK_ROUTE,Se=Object(s.b)("data","router")(Object(S.a)(function(e){return{root:{flexGrow:1},paper:{padding:"".concat(e.spacing(2),"px"),margin:"auto",maxWidth:1300},container:{listStyle:"none"}}})(Object(s.c)(function(e){var t=e.data,a=e.router,n=e.classes;return o.a.createElement("div",{className:n.root},o.a.createElement(H.a,{className:n.paper},o.a.createElement(be.a,{container:!0,spacing:8,className:n.container,component:"ul"},t.books.map(function(e){return o.a.createElement(be.a,{key:e.id,item:!0,lg:4,md:6,xs:12,component:"li"},o.a.createElement(ye,{book:e,component:"a",role:"button",onClick:function(){return a.goTo("".concat(Ae,"/").concat(e.id))}}))}))))}))),we=function(e){var t=e.view;return o.a.createElement(o.a.Fragment,null,function(e){var t=e.currentPage,a=t.name,n=t.data,r=t.message;if(n){if("pending"===n.state)return o.a.createElement("span",null,"Loading");if("rejected"===n.state)return o.a.createElement("span",null,"Something went wrong... your data could not be fetched")}switch(a){case"Home":return o.a.createElement(Se,null);case"Book page":return o.a.createElement(he,{bookId:e.currentPage.bookId});default:return o.a.createElement("span",null,r)}}(t))};we.propTypes={view:C.a.shape({}).isRequired};var xe=Object(s.b)("view")(Object(s.c)(we)),je=function(e){var t=e.store;return o.a.createElement(c,{store:t},o.a.createElement(o.a.Fragment,null,o.a.createElement(k,null,o.a.createElement(N,null,o.a.createElement(U,null,o.a.createElement(j,null)),o.a.createElement(G,null,o.a.createElement(xe,null))))))},Re=a(20),Be=a(2),Le=a(36),_e=a(37),Ne=a.n(_e),Pe=a(70),Te=a(71),Ue=a.n(Te),De=me.API.BASE_URL,Ge=function(){var e=Object(Pe.a)(Ne.a.mark(function e(t){var a;return Ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if(!(a=e.sent).ok){e.next=8;break}return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:throw new Error("Your data could not be fetched");case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}(),Me=function(){var e=Object(Pe.a)(Ne.a.mark(function e(t,a){var n,o;return Ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",body:JSON.stringify(a),mode:"no-cors",headers:{"Content-Type":"application/vnd.api+json"}},e.prev=1,e.next=4,fetch(t,n);case 4:if(!(o=e.sent).ok){e.next=9;break}return e.next=8,o.json();case 8:return e.abrupt("return",e.sent);case 9:throw new Error("Your data could not be posted");case 12:throw e.prev=12,e.t0=e.catch(1),e.t0;case 15:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t,a){return e.apply(this,arguments)}}(),Ce=function(e,t){var a=function(e){return"".concat(De,"/books/").concat(e,"/relationships/photos")}(e);return Me(a,{data:{type:"photos",attributes:{title:"something",uri:t}}})},ze=function(){var e=function(e){var t=Ue.a.stringify({"page[number]":e,"page[size]":5,include:["author","photos"]},{arrayFormat:"comma"});return"".concat(De,"/books?").concat(t)}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);return Ge(e)},He=function(e){var t=function(e){var t=Ue.a.stringify({include:["author","photos"]},{arrayFormat:"comma"});return"".concat(De,"/books/").concat(e,"?").concat(t)}(e);return Ge(t)},Fe=function e(t){var a=this;Object(Re.a)(this,e),this.currentPage={},this.showHome=function(){a.currentPage={name:"Home",title:"Home",data:Object(Le.a)(ze())}},this.showBook=function(e){a.currentPage={name:"Book page",bookId:e,title:"Book #".concat(e),data:Object(Le.a)(He(e))}},this.showError=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong";a.currentPage={name:"error",message:e}},this.updateData=Object(Be.g)(function(){return a.currentPage.data&&"fulfilled"===a.currentPage.data.state?a.appStore.data.setData(a.currentPage.data.value):null}),this.appStore=t};Object(Be.k)(Fe,{currentPage:Be.x,showHome:Be.f,showBook:Be.f,showError:Be.f});var We=Fe,Ve=a(102),Ke=function e(t){var a=this;Object(Re.a)(this,e),this.pathname="",this.convertRouteToState=function(){var e=me.ROUTING,t=e.MISSING_PARAMS_MSG,n=e.TOO_MANY_PARAMS_MSG,o=a.pathname.split("/").slice(1),r=a.appStore.view,i=r.showHome,s=r.showBook,c=r.showError,l=function(e,a){return o.length===e?a():c(o.length<e?t:n)};switch(o[0]){case"":l(1,function(){return i()});break;case"book":l(2,function(){return s(o[1])});break;default:c("404 - route does not exist")}},this.goTo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";a.history.push(e)},this.setPathname=function(e){a.pathname=e,a.convertRouteToState()},this.appStore=t,this.history=Object(Ve.a)({basename:"/edge-books",forceRefresh:!1}),this.setPathname(this.history.location.pathname),this.history.listen(function(e){a.setPathname(e.pathname)})};Object(Be.k)(Ke,{pathname:Be.x,goTo:Be.f,setPathname:Be.f,convertRouteToState:Be.f});var Xe=Ke,Ye=a(52),Je=a(100),qe=a.n(Je),$e=function(){function e(t){var a=this;Object(Re.a)(this,e),this.rawData={},this.setData=function(e){a.rawData=e},this.getDataCollection=function(e){return a.normalizedData[e]?Object.values(a.normalizedData[e]):[]},this.getBookById=function(e){return a.normalizedData.books[e]},this.getBookId=function(e){return e.id},this.getBookTitle=function(e){return e.attributes.title},this.getBookAuthor=function(e){var t=a.getBookRelationshipData(e,"author"),n=t.type,o=t.id;return a.getAttributeByIdAndType({type:n,id:o,attribute:"name"})},this.getBookPhotos=function(e){return a.getBookRelationshipData(e,"photos").map(function(e){var t=e.type,n=e.id;return a.getAttributeByIdAndType({type:t,id:n,attribute:"uri"})})},this.getBookRelationshipData=function(e,t){return e.relationships[t].data},this.getAttributeByIdAndType=function(e){var t=e.type,n=e.id,o=e.attribute;return a.normalizedData[t][n].attributes[o]},this.appStore=t}return Object(Ye.a)(e,[{key:"normalizedData",get:function(){return this.rawData?qe()(this.rawData):{}}},{key:"books",get:function(){var e=this;return this.normalizedData.books?this.getDataCollection("books").map(function(t){return{id:e.getBookId(t),title:e.getBookTitle(t),author:e.getBookAuthor(t),photos:e.getBookPhotos(t)}}):[]}}]),e}();Object(Be.k)($e,{rawData:Be.x,normalizedData:Be.h,books:Be.h,setData:Be.f});var Qe=$e,Ze=me.REGEX.URL_VALIDATION_REGX,et=me.MESSAGES,tt=et.INVALID_URL_MESSAGE,at=et.POST_IMAGE_FAILED,nt=et.POST_IMAGE_SUCCESSFUL,ot=function(){function e(t){var a=this;Object(Re.a)(this,e),this.resetImagePostingStatus=Object(Be.g)(function(){a.imageAdditionResponse&&"rejected"===a.imageAdditionResponse.state&&setTimeout(function(){return a.setImageAdditionResponse({})},3e5),a.postingSuccessful&&setTimeout(function(){var e=a.appStore.data.books[0].id;a.resetObservables(),a.appStore.view.showBook(e)},3e3)}),this.resetObservables=function(){a.updateImgURL(""),a.setImageAdditionAttempted(!1),a.setImageAdditionResponse({})},this.appStore=t,this.resetFormState=Object(Be.g)(function(){"Book page"===a.appStore.view.currentPage.name&&a.resetObservables()})}return Object(Ye.a)(e,[{key:"setImageAdditionAttempted",value:function(e){this.imageAdditionAttempted=e}},{key:"setImageAdditionResponse",value:function(e){this.imageAdditionResponse=e}},{key:"addImage",value:function(e){if(this.setImageAdditionAttempted(!0),!this.isImgURLIllegal){var t=Object(Le.a)(Ce(e,this.imgURL));this.setImageAdditionResponse(t)}}},{key:"updateImgURL",value:function(e){this.imgURL=e,console.log("this.imgURL: ",this.imgURL)}},{key:"isImgURLIllegal",get:function(){return e=this.imgURL,!Ze.test(e);var e}},{key:"shouldShowURLInputError",get:function(){return this.isImgURLIllegal&&this.imageAdditionAttempted}},{key:"errorMessage",get:function(){return this.isImgURLIllegal?tt:"rejected"===this.imageAdditionResponse.state?at:this.postingSuccessful?nt:""}},{key:"postingInProgress",get:function(){return!(!this.imageAdditionResponse||"pending"!==this.imageAdditionResponse.state)}},{key:"postingSuccessful",get:function(){return!(!this.imageAdditionResponse||"fulfilled"!==this.imageAdditionResponse.state)}},{key:"isErrorState",get:function(){return this.shouldShowURLInputError||"rejected"===this.imageAdditionResponse.state}}]),e}();Object(Be.k)(ot,{imgURL:Be.x,imageAdditionAttempted:Be.x,imageAdditionResponse:Be.x,isImgURLIllegal:Be.h,errorMessage:Be.h,shouldShowURLInputError:Be.h,postingInProgress:Be.h,updateImgURL:Be.f,setImageAdditionAttempted:Be.f,setImageAdditionResponse:Be.f,addImage:Be.f,resetObservables:Be.f});var rt=ot;Object(Be.i)({enforceActions:"observed"});var it=new function e(){Object(Re.a)(this,e),this.view=new We(this),this.router=new Xe(this),this.data=new Qe(this),this.imgAddition=new rt(this)};i.a.render(o.a.createElement(je,{store:it}),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.e2157c45.chunk.js.map