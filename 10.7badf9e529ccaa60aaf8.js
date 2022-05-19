(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"Ta/C":function(e,r,t){"use strict";t.r(r),t.d(r,"AuthForgotPasswordModule",function(){return P});var o=t("tyNb"),s=t("bTqV"),a=t("kmnG"),i=t("NFeN"),n=t("qFsG"),l=t("Xa2L"),d=t("C1J2"),c=t("GazI"),m=t("PCNd"),b=t("3Pt+"),f=t("nYR2"),g=t("PVWW"),u=t("fXoL"),p=t("Vurf"),h=t("ofXK"),w=t("5GsA");const y=["forgotPasswordNgForm"];function v(e,r){if(1&e&&(u.Sb(0,"fuse-alert",36),u.Bc(1),u.Rb()),2&e){const e=u.dc();u.jc("appearance","outline")("showIcon",!1)("type",e.alert.type)("@shake","error"===e.alert.type),u.Bb(1),u.Dc(" ",e.alert.message," ")}}function x(e,r){1&e&&(u.Sb(0,"mat-error"),u.Bc(1," Email address is required "),u.Rb())}function R(e,r){1&e&&(u.Sb(0,"mat-error"),u.Bc(1," Please enter a valid email address "),u.Rb())}function S(e,r){1&e&&(u.Sb(0,"span"),u.Bc(1," Send reset link "),u.Rb())}function B(e,r){1&e&&u.Nb(0,"mat-progress-spinner",37),2&e&&u.jc("diameter",24)("mode","indeterminate")}const j=function(){return["/sign-in"]},F=[{path:"",component:(()=>{class e{constructor(e,r){this._authService=e,this._formBuilder=r,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.forgotPasswordForm=this._formBuilder.group({email:["",[b.q.required,b.q.email]]})}sendResetLink(){this.forgotPasswordForm.invalid||(this.forgotPasswordForm.disable(),this.showAlert=!1,this._authService.forgotPassword(this.forgotPasswordForm.get("email").value).pipe(Object(f.a)(()=>{this.forgotPasswordForm.enable(),this.forgotPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(e=>{this.alert={type:"success",message:"Password reset sent! You'll receive an email if you are registered on our system."}},e=>{this.alert={type:"error",message:"Email does not found! Are you sure you are already a member?"}}))}}return e.\u0275fac=function(r){return new(r||e)(u.Mb(p.a),u.Mb(b.c))},e.\u0275cmp=u.Gb({type:e,selectors:[["auth-forgot-password"]],viewQuery:function(e,r){if(1&e&&u.Ec(y,1),2&e){let e;u.pc(e=u.ac())&&(r.forgotPasswordNgForm=e.first)}},decls:52,vars:11,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["forgotPasswordNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(e,r){1&e&&(u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"div",2),u.Sb(3,"div",3),u.Nb(4,"img",4),u.Rb(),u.Sb(5,"div",5),u.Bc(6,"Forgot password?"),u.Rb(),u.Sb(7,"div",6),u.Bc(8,"Fill the form to reset your password"),u.Rb(),u.zc(9,v,2,5,"fuse-alert",7),u.Sb(10,"form",8,9),u.Sb(12,"mat-form-field",10),u.Sb(13,"mat-label"),u.Bc(14,"Email address"),u.Rb(),u.Nb(15,"input",11),u.zc(16,x,2,0,"mat-error",12),u.zc(17,R,2,0,"mat-error",12),u.Rb(),u.Sb(18,"button",13),u.Zb("click",function(){return r.sendResetLink()}),u.zc(19,S,2,0,"span",12),u.zc(20,B,1,2,"mat-progress-spinner",14),u.Rb(),u.Sb(21,"div",15),u.Sb(22,"span"),u.Bc(23,"Return to"),u.Rb(),u.Sb(24,"a",16),u.Bc(25,"sign in "),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(26,"div",17),u.cc(),u.Sb(27,"svg",18),u.Sb(28,"g",19),u.Nb(29,"circle",20),u.Nb(30,"circle",21),u.Rb(),u.Rb(),u.Sb(31,"svg",22),u.Sb(32,"defs"),u.Sb(33,"pattern",23),u.Nb(34,"rect",24),u.Rb(),u.Rb(),u.Nb(35,"rect",25),u.Rb(),u.bc(),u.Sb(36,"div",26),u.Sb(37,"div",27),u.Sb(38,"div"),u.Bc(39,"Welcome to"),u.Rb(),u.Sb(40,"div"),u.Bc(41,"our community"),u.Rb(),u.Rb(),u.Sb(42,"div",28),u.Bc(43," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),u.Rb(),u.Sb(44,"div",29),u.Sb(45,"div",30),u.Nb(46,"img",31),u.Nb(47,"img",32),u.Nb(48,"img",33),u.Nb(49,"img",34),u.Rb(),u.Sb(50,"div",35),u.Bc(51,"More than 17k people joined us, it's your turn"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&e&&(u.Bb(9),u.jc("ngIf",r.showAlert),u.Bb(1),u.jc("formGroup",r.forgotPasswordForm),u.Bb(5),u.jc("formControlName","email"),u.Bb(1),u.jc("ngIf",r.forgotPasswordForm.get("email").hasError("required")),u.Bb(1),u.jc("ngIf",r.forgotPasswordForm.get("email").hasError("email")),u.Bb(1),u.jc("color","primary")("disabled",r.forgotPasswordForm.disabled),u.Bb(1),u.jc("ngIf",!r.forgotPasswordForm.disabled),u.Bb(1),u.jc("ngIf",r.forgotPasswordForm.disabled),u.Bb(4),u.jc("routerLink",u.kc(10,j)))},directives:[h.m,b.r,b.m,b.g,a.d,a.g,n.a,b.b,b.l,b.f,s.b,o.g,w.a,a.c,l.a],encapsulation:2,data:{animation:g.a}}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=u.Kb({type:e}),e.\u0275inj=u.Jb({imports:[[o.h.forChild(F),s.c,a.f,i.b,n.b,l.b,d.a,c.a,m.a]]}),e})()}}]);