(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={overlay:"Modal_overlay__3IOj2",modal:"Modal_modal__1AekT"}},12:function(e,t,a){e.exports={galleryItem:"ImageGalleryItem_galleryItem__39MY_",galleryItemImage:"ImageGalleryItem_galleryItemImage__3cEEj"}},24:function(e,t,a){e.exports={imageGalleryList:"ImageGallery_imageGalleryList__1vQCr"}},25:function(e,t,a){e.exports={button:"Button_button__3EJ11"}},26:function(e,t,a){e.exports={loader:"Loader_loader__2BRJL"}},31:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=(a(31),a(13)),s=a(5),l=a(6),u=a(8),h=a(7),d=a(3),g=(a(14),a(23)),m=a.n(g);var b={fetchImages:function(e){var t=e.searchQuery,a=e.page;return m.a.get("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("21726262-6f53751bde553225c4af8487e","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}},j=a(11),f=a.n(j),p=a(1),y=document.querySelector("#modal-root"),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(p.jsx)("div",{className:f.a.overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:f.a.modal,children:Object(p.jsx)("img",{src:this.props.largeImageURL,alt:""})})}),y)}}]),a}(n.Component),O=a(9),v=a.n(O),I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.onSubmit(e.state.query),e.setState({query:""})):d.b.info("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438")},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:v.a.searchbar,children:Object(p.jsxs)("form",{className:v.a.searchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:v.a.searchBtn,children:Object(p.jsx)("span",{className:v.a.searchLable,children:"Search"})}),Object(p.jsx)("input",{className:v.a.searchInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:this.state.query})]})})}}]),a}(n.Component),_=a(12),w=a.n(_),S=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.alt,r=void 0===n?"":n,c=e.getLargeImageURL;return Object(p.jsx)("li",{className:w.a.galleryItem,children:Object(p.jsx)("img",{src:t,alt:r,className:w.a.galleryItemImage,onClick:function(){return c(a)}})})},C=a(24),L=a.n(C),N=function(e){var t=e.images,a=e.onSelect;return Object(p.jsx)("ul",{className:L.a.imageGalleryList,children:t.map((function(e){return Object(p.jsx)(S,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,alt:e.tags,getLargeImageURL:a},e.id)}))})},M=a(25),k=a.n(M),R=function(e){var t=e.fetchImages;return Object(p.jsx)("button",{className:k.a.button,type:"button",onClick:t,children:"Load more"})},U=a(26),B=a.n(U),F=function(e){return Object(p.jsxs)("svg",{width:e.width,height:e.height,fill:e.color,viewBox:"0 0 135 140",xmlns:"http://www.w3.org/2000/svg","aria-label":e.label,className:B.a.loader,children:[Object(p.jsxs)("rect",{y:"10",width:"15",height:"120",rx:"6",children:[Object(p.jsx)("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),Object(p.jsx)("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),Object(p.jsxs)("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6",children:[Object(p.jsx)("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),Object(p.jsx)("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),Object(p.jsxs)("rect",{x:"60",width:"15",height:"140",rx:"6",children:[Object(p.jsx)("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),Object(p.jsx)("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),Object(p.jsxs)("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6",children:[Object(p.jsx)("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),Object(p.jsx)("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),Object(p.jsxs)("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6",children:[Object(p.jsx)("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),Object(p.jsx)("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]})]})};F.defaultProps={height:80,width:80,color:"green",label:"audio-loading"};var Q=F,q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,error:null,showModal:!1,searchQuery:"",page:1,selectedImage:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleSelectImage=function(t){e.setState({selectedImage:t}),e.toggleModal()},e.handleSubmit=function(t){e.setState({images:[],searchQuery:t,page:1})},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),b.fetchImages({searchQuery:a,page:n}).then((function(t){e.setState((function(e){return{images:[].concat(Object(o.a)(e.images),Object(o.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:d.b.error("No match!")})})).finally((function(){return e.setState({loading:!1})}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),2!==this.state.page&&t.page!==this.state.page&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=e.selectedImage,r=e.showModal,c=e.error;return Object(p.jsxs)(p.Fragment,{children:[c&&d.b.error("No match!"),Object(p.jsx)(I,{onSubmit:this.handleSubmit}),a&&Object(p.jsx)(Q,{}),Object(p.jsx)(N,{images:t,onSelect:this.handleSelectImage}),t.length>0&&Object(p.jsx)(R,{fetchImages:this.fetchImages}),r&&Object(p.jsx)(x,{onClose:this.toggleModal,largeImageURL:n}),Object(p.jsx)(d.a,{position:"bottom-left",autoClose:3e3})]})}}]),a}(n.Component),E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),E()},9:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__vOYf7",searchForm:"Searchbar_searchForm__1xjF8",searchBtn:"Searchbar_searchBtn__1cWxR",searchLable:"Searchbar_searchLable__3BzRQ",searchInput:"Searchbar_searchInput__MGQS2"}}},[[51,1,2]]]);
//# sourceMappingURL=main.11dcdeb9.chunk.js.map