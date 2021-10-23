"use strict";(self.webpackChunkapp_loja_product=self.webpackChunkapp_loja_product||[]).push([[668],{1668:(T,c,i)=>{i.r(c),i.d(c,{ProuctsModule:()=>A});var u=i(8583),d=i(5855),p=i(8239),g=i(5926),t=i(639),Z=i(8007),m=i(1841),r=i(665);const h=[{path:"details/:id",component:(()=>{class e{constructor(o,a,s,l){this.router=o,this.storage=a,this.hhtp=s,this.activatedRoute=l,this.qtd=1,this.isLoading=!0}ngOnInit(){var o=this;this.index=this.activatedRoute.snapshot.paramMap.get("id"),this.time=setInterval((0,p.Z)(function*(){try{o.hhtp.get(`${g.H.baseUrl}/products/${o.index}`).subscribe(a=>{o.product=a,o.isLoading=!1,o.time&&clearInterval(o.time)})}catch(a){console.log(a)}}),500),this.smallCar=null!==this.storage.getSmallCar()?this.storage.getSmallCar():[]}addItemInCar(){if(this.qtd>0){let o={id:this.product.id,name:this.product.name,imageView:this.product.imageView,qtd:this.qtd,value:this.product.value};console.log(o),this.smallCar=null!==this.storage.getSmallCar()?this.storage.getSmallCar():[],this.smallCar.push(o),this.storage.setSmallCar(this.smallCar),this.router.navigate([`/products/details/${this.product.id}`]).then(()=>{window.location.reload()})}}ngOnDestroy(){this.time&&clearInterval(this.time)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.F0),t.Y36(Z.m),t.Y36(m.eN),t.Y36(d.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-produto-details"]],decls:67,vars:10,consts:[["aria-label","breadcrumb",1,"breadcrumb-nav"],[1,"container"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","index.html"],[1,"container-box"],[1,"product-single-container","product-single-default"],[1,"row"],[1,"col-md-5"],[1,""],[1,"prod-full-screen"],[1,"icon-plus"],[1,"prod-thumbnail"],[3,"src"],[1,"col-md-7","product-single-details"],[1,"product-title"],[1,"ratings-container"],[1,"product-ratings"],[1,"ratings",2,"width","60%"],[1,"short-divider"],[1,"price-box"],[1,"product-price"],[1,"product-desc"],[1,"divider"],[1,"product-action"],[1,"product-single-qty",2,"margin-top","17px"],["type","number ",1,"horizontal-quantity","form-control",3,"ngModel","ngModelChange"],["title","Add to Cart ",1,"btn","btn-dark","add-cart","icon-shopping-cart",3,"click"],[1,"divider","mb-1"],[1,"product-single-tabs"],["role","tablist ",1,"nav","nav-tabs"],[1,"nav-item"],["id","product-tab-desc ","data-toggle","tab ","href","#product-desc-content ","role","tab ","aria-controls","product-desc-content ","aria-selected","true ",1,"nav-link","active"],["id","product-tab-more-info ","data-toggle","tab ","href","#product-more-info-content ","role","tab ","aria-controls","product-more-info-content ","aria-selected","false ",1,"nav-link"],[1,"tab-content"],["id","product-desc-content ","role","tabpanel ","aria-labelledby","product-tab-desc ",1,"tab-pane","fade","show","active"],[1,"product-desc-content"],["id","product-more-info-content ","role","tabpanel ","aria-labelledby","product-tab-more-info ",1,"tab-pane","fade","fade"],["id","product-tags-content ","role","tabpanel ","aria-labelledby","product-tab-tags ",1,"tab-pane","fade"],[1,"product-tags-content"],["action","# "],[1,"form-group"],["type","text ","required","",1,"form-control","form-control-sm"],["type","submit ","value","Add Tags ",1,"btn","btn-dark"],[1,"note"]],template:function(o,a){1&o&&(t.TgZ(0,"nav",0),t.TgZ(1,"div",1),t.TgZ(2,"ol",2),t.TgZ(3,"li",3),t.TgZ(4,"a",4),t._uU(5,"Home"),t.qZA(),t.qZA(),t.TgZ(6,"li",3),t._uU(7," Detalhes "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",1),t.TgZ(9,"div",5),t.TgZ(10,"div",6),t.TgZ(11,"div",7),t.TgZ(12,"div",8),t.TgZ(13,"div",9),t.TgZ(14,"span",10),t._UZ(15,"i",11),t.qZA(),t.qZA(),t.TgZ(16,"div",12),t.TgZ(17,"div",9),t._UZ(18,"img",13),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",14),t.TgZ(20,"h1",15),t._uU(21),t.qZA(),t.TgZ(22,"div",16),t.TgZ(23,"div",17),t._UZ(24,"span",18),t.qZA(),t.qZA(),t._UZ(25,"hr",19),t.TgZ(26,"div",20),t.TgZ(27,"span",21),t._uU(28),t.ALo(29,"currency"),t.qZA(),t.qZA(),t.TgZ(30,"div",22),t.TgZ(31,"p"),t._uU(32),t.qZA(),t.qZA(),t._UZ(33,"hr",23),t.TgZ(34,"div",24),t.TgZ(35,"div",25),t.TgZ(36,"input",26),t.NdJ("ngModelChange",function(l){return a.qtd=l}),t.qZA(),t.qZA(),t.TgZ(37,"button",27),t.NdJ("click",function(){return a.addItemInCar()}),t._uU(38,"Adicionar ao Carrinho"),t.qZA(),t.qZA(),t._UZ(39,"hr",28),t.qZA(),t.qZA(),t.qZA(),t.TgZ(40,"div",29),t.TgZ(41,"ul",30),t.TgZ(42,"li",31),t.TgZ(43,"a",32),t._uU(44,"Descri\xe7\xe3o"),t.qZA(),t.qZA(),t.TgZ(45,"li",31),t.TgZ(46,"a",33),t._uU(47,"Mais Informa\xe7\xf5es"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"div",34),t.TgZ(49,"div",35),t.TgZ(50,"div",36),t.TgZ(51,"p"),t._uU(52),t.qZA(),t.qZA(),t.qZA(),t.TgZ(53,"div",37),t.TgZ(54,"div",36),t.TgZ(55,"p"),t._uU(56),t.qZA(),t.qZA(),t.qZA(),t.TgZ(57,"div",38),t.TgZ(58,"div",39),t.TgZ(59,"form",40),t.TgZ(60,"h4"),t._uU(61,"Add Your Tags:"),t.qZA(),t.TgZ(62,"div",41),t._UZ(63,"input",42),t._UZ(64,"input",43),t.qZA(),t.qZA(),t.TgZ(65,"p",44),t._uU(66,"Use spaces to separate tags. Use single quotes (') for phrases."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(18),t.Q6J("src",a.product.imageView,t.LSH),t.xp6(3),t.hij("",a.product.name," "),t.xp6(7),t.hij("",t.xi3(29,7,a.product.value,"BRL")," "),t.xp6(4),t.hij(" ",a.product.description," "),t.xp6(4),t.Q6J("ngModel",a.qtd),t.xp6(16),t.hij(" ",a.product.description," "),t.xp6(4),t.hij(" ",a.product.description," "))},directives:[r.Fj,r.JJ,r.On,r._Y,r.JL,r.F],pipes:[u.H9],styles:[""]}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(h)],d.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,r.u5,v]]}),e})()}}]);