(this.webpackJsonpiti_friday=this.webpackJsonpiti_friday||[]).push([[0],{12:function(e,t,n){e.exports={passwordNew:"PasswordNew_passwordNew__3Za9l",button:"PasswordNew_button__kp8yD",element:"PasswordNew_element__16pNw",oneSizeEl:"PasswordNew_oneSizeEl__2oSpF",input:"PasswordNew_input__65_-5",green:"PasswordNew_green__2XfFb",red:"PasswordNew_red__1h1_C"}},17:function(e,t,n){e.exports={header:"Header_header__ybBX3",links:"Header_links__1djiI",link:"Header_link__23Zun",logo:"Header_logo__1coaY"}},18:function(e,t,n){e.exports={passwordRecovery:"PasswordRecovery_passwordRecovery__1whVr",element:"PasswordRecovery_element__4HSGB",input:"PasswordRecovery_input__3gJPB",green:"PasswordRecovery_green__13Acw",red:"PasswordRecovery_red__3NsED"}},19:function(e,t,n){e.exports={pagination:"Pagination_pagination__2-hGZ",select:"Pagination_select__lHxGQ",item:"Pagination_item__1VjEB",btn:"Pagination_btn__3b7gO"}},20:function(e,t,n){e.exports={settings:"Settings_settings__On4tP",settingEl:"Settings_settingEl__1oX5s",radioLabel:"Settings_radioLabel__12VIB",input:"Settings_input__1dvdB"}},23:function(e,t,n){e.exports={block:"Registration_block__3Tll_",form:"Registration_form__2kEsu",text:"Registration_text__1SQGs",error:"Registration_error__3uPVx"}},25:function(e,t,n){e.exports={input:"SuperInputText_input__w07ee",superInput:"SuperInputText_superInput__2HlE6",errorInput:"SuperInputText_errorInput__1ozK1"}},26:function(e,t,n){e.exports={form:"Login_form__3Ue8W",border:"Login_border__2VO3F",text:"Login_text__7469u"}},27:function(e,t,n){e.exports={block:"Range_block__3VGWl",band:"Range_band__8DObD",slider:"Range_slider__3uXue",numSlider:"Range_numSlider__1Iu6g"}},28:function(e,t,n){e.exports={tableContent:"TableContent_tableContent___Z9BN",tableHeader:"TableContent_tableHeader__6R13q",tableBody:"TableContent_tableBody__3Wv8k",bodyModel:"TableContent_bodyModel__1Bdhl"}},32:function(e,t,n){e.exports={button:"SuperButton_button__3jpWt",default:"SuperButton_default__3yytt",red:"SuperButton_red__1kg3N"}},33:function(e,t,n){e.exports={label:"SuperCheckbox_label__3PNXY",checkbox:"SuperCheckbox_checkbox__wFLxS",spanClassName:"SuperCheckbox_spanClassName__wA-DT"}},34:function(e,t,n){e.exports={block:"SortPacks_block__1LiIP",btn:"SortPacks_btn__yUtML"}},41:function(e,t,n){e.exports={profileContainer:"profile_profileContainer__22CiP",profile:"profile_profile__10fn9"}},42:function(e,t,n){e.exports={select:"SuperSelect_select__VzKwG"}},43:function(e,t,n){e.exports={radio:"SuperRadio_radio__GhWCk",label:"SuperRadio_label__3IPyS"}},44:function(e,t,n){e.exports={block:"Search_block__396XV",search:"Search_search__EoK3V"}},59:function(e,t,n){e.exports={editableSpan:"SuperEditableSpan_editableSpan__18Wkb"}},60:function(e,t,n){e.exports={testForReducer:"TestForReducer_testForReducer__3EvIm"}},61:function(e,t,n){e.exports={container:"Container_container__2ztWT"}},68:function(e,t,n){},69:function(e,t,n){},8:function(e,t,n){e.exports={examples:"Examples_examples__2yY-S",column:"Examples_column__x_3zH",testSpanError:"Examples_testSpanError__1sOZm",blue:"Examples_blue__26Rzu",superButton:"Examples_superButton__6ZYvs",inputContainer:"Examples_inputContainer__2-1tf",SuperEditableSpanContainer:"Examples_SuperEditableSpanContainer__1hjBy",radioContainer:"Examples_radioContainer__26Dxf"}},9:function(e,t,n){e.exports={table:"Table_table__3mw9D",input:"Table_input__ZTPhL",button:"Table_button__3PIoL",selectedCardPackInfo:"Table_selectedCardPackInfo__3Aw59",element:"Table_element__3rdNr",elementHeader:"Table_elementHeader__1zHuN",elementValue:"Table_elementValue__2oUdI"}},97:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(31),s=n.n(r),o=(n(68),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))}),i=(n(69),n(7)),l=n(17),u=n.n(l),d=n(3),j=n(2),b=n(22),O=n.n(b),p=O.a.create({baseURL:"http://localhost:7542/2.0/",withCredentials:!0}),h=function(e){return p.post("/auth/login",e)},f=function(){return p.post("/auth/me",{})},m=function(){return p.delete("/auth/me")},x={avatar:"",email:"",name:"",publicCardPacksCount:0,_id:""},g=function(e){return{type:"profile/SET-PROFILE",avatar:e.avatar,email:e.email,name:e.name,publicCardPacksCount:e.publicCardPacksCount,_id:e._id}},_={isLoggedIn:!1,error:null,isInitilize:!1},v=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},C=function(e){return{type:"login/SET-IS-ERROR",error:e}},N=n(0),S=function(){var e=Object(d.b)();return Object(N.jsxs)("div",{className:u.a.header,children:[Object(N.jsx)(i.b,{to:"/profile",children:Object(N.jsx)("div",{className:u.a.logo,children:"BrightCards"})}),Object(N.jsxs)("div",{className:u.a.links,children:[Object(N.jsx)(i.b,{className:u.a.item,to:"/table",children:"Table"}),Object(N.jsx)(i.b,{className:u.a.item,to:"/login",children:"Login"}),Object(N.jsx)(i.b,{className:u.a.item,to:"/registration",children:"Registration"}),Object(N.jsx)(i.b,{className:u.a.item,to:"/profile",children:"Profile"}),Object(N.jsx)(i.b,{className:u.a.item,to:"/passwordrecovery",children:"PasswordRecovery"}),Object(N.jsx)(i.b,{className:u.a.item,to:"/tests",children:"Tests"}),Object(N.jsx)("a",{className:u.a.link,onClick:function(){e((function(e){m().then((function(t){e(v(!1))})).catch((function(t){t.response?e(C(t.response.data.error)):e(C(t.message+", more details in the console"))}))}))},children:"Log out"})]})]})},T=n(6),k=n(4),P=n(40),E=n.n(P),w=n(58),R=O.a.create({baseURL:"http://localhost:7542/2.0/",withCredentials:!0}),y=function(e,t){return R.post("auth/register",{email:e,password:t})},A={error:null,isRegistered:!1},I=function(e){return{type:"REGISTRATION-USER",isRegistered:e}},L=function(e){return{type:"SET-ERROR-MESSAGE",error:e}},B=n(14),D=n(25),F=n.n(D),M=["onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],H=function(e){var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,o=e.spanClassName,i=Object(B.a)(e,M),l="".concat(F.a.error," ").concat(o||""),u="".concat(F.a.input," ").concat(r?F.a.errorInput:F.a.superInput," ").concat(s);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("input",Object(j.a)({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:u},i)),r&&Object(N.jsx)("span",{className:l,children:r})]})},V=n(8),G=n.n(V),U=n(32),z=n.n(U),K=["red","className"],W=function(e){var t=e.red,n=e.className,a=Object(B.a)(e,K),c="".concat(z.a.button," ").concat(t?z.a.red:z.a.default," ").concat(n);return Object(N.jsx)("button",Object(j.a)({className:c},a))},Z=n(23),X=n.n(Z),Y=function(e){var t=e.email,n=e.setEmail,a=e.password,c=e.setPassword,r=e.repeatPassword,s=e.setRepeatPassword,o=e.register,i=Object(d.c)((function(e){return e.registration.error})),l=Object(d.b)();return Object(N.jsx)("div",{className:X.a.block,children:Object(N.jsxs)("div",{className:X.a.form,children:[Object(N.jsx)("p",{className:X.a.text,children:"Registration"}),Object(N.jsx)("label",{children:Object(N.jsx)(H,{value:t,onChange:function(e){n(e.currentTarget.value),l(L(""))},className:"".concat(G.a.testSpanError).concat(X.a.placeholder),placeholder:"enter your email"})}),Object(N.jsx)("label",{children:Object(N.jsx)(H,{type:"password",value:a,onChange:function(e){c(e.currentTarget.value),l(L(""))},className:G.a.testSpanError,placeholder:"enter  your password"})}),Object(N.jsx)("label",{children:Object(N.jsx)(H,{type:"password",value:r,onChange:function(e){s(e.currentTarget.value),l(L(""))},className:G.a.testSpanError,placeholder:"repeat  your password"})}),null!==i&&Object(N.jsx)("div",{className:X.a.error,children:i}),Object(N.jsx)("div",{children:Object(N.jsx)(W,{onClick:o,className:G.a.superButton,children:"registration"})})]})})},q=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(k.a)(r,2),o=s[0],i=s[1],l=Object(a.useState)(""),u=Object(k.a)(l,2),j=u[0],b=u[1],O=Object(d.b)();return Object(d.c)((function(e){return e.registration.isRegistered}))?Object(N.jsx)(T.a,{to:"/login"}):Object(N.jsx)("div",{children:Object(N.jsx)(Y,{email:n,setEmail:c,password:o,repeatPassword:j,setPassword:i,setRepeatPassword:b,register:function(){O(L(null)),O(o===j?function(e,t){return function(){var n=Object(w.a)(E.a.mark((function n(a){var c;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y(e,t);case 3:n.sent,a(I(!0)),n.next=12;break;case 7:n.prev=7,n.t0=n.catch(0),c=n.t0.response?n.t0.response.data.error:n.t0.message+", more details in the the console",a(L(c)),a(I(!1));case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(n,o):L("password mismatch")),c(""),i(""),b("")}})})},J=n(41),Q=n.n(J),$=function(){var e=Object(d.c)((function(e){return e.auth.isLoggedIn})),t=Object(d.c)((function(e){return e.profile})),n=t.avatar,a=(t.email,t.name),c=t.publicCardPacksCount;t._id;return e?Object(N.jsx)("div",{className:Q.a.profileContainer,children:Object(N.jsxs)("div",{className:Q.a.profile,children:[n?Object(N.jsx)("img",{src:n,alt:""}):null,Object(N.jsx)("span",{children:a}),Object(N.jsxs)("span",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u0440\u0442: ",c]})]})}):Object(N.jsx)(T.a,{to:"/login"})},ee=function(){return Object(N.jsx)("div",{children:"Page404"})},te=n(18),ne=n.n(te),ae=O.a.create(Object(j.a)({baseURL:"http://localhost:7542/2.0/"},{withCredentials:!0})),ce=function(e){var t={email:e,from:"Briws <brightwiths@gmail.com>",message:"<div>password recovery link:<a href='http://localhost:3000/#/passwordnew/$token$'>link</a></div>"};return ae.post("auth/forgot",t)},re=function(e,t){return ae.post("auth/set-new-password",{password:e,resetPasswordToken:t})},se=function(e,t,n,a,c,r,s,o){return ae.get("cards/pack",{params:{user_id:e,pageCount:t,page:n,cardPacksTotalCount:a,packName:c,sortPacks:r,min:s,max:o}})},oe=function(e){var t={cardsPack:{name:e}};return ae.post("cards/pack",t)},ie=function(e){return ae.delete("cards/pack?id=".concat(e))},le=function(e,t){var n={cardsPack:{_id:e,name:t}};return ae.put("cards/pack",n)},ue=function(e){return ae.get("/cards/card",{params:{cardsPack_id:e}})},de=function(e){var t={card:{cardsPack_id:e}};return ae.post("cards/card",t)},je=function(e){return ae.delete("cards/card?id=".concat(e))},be=function(e){var t={cardsPack:{_id:e}};return ae.put("cards/pack",t)},Oe={forgot:{info:"",errorText:""},setNew:{info:"",errorText:""}},pe=function(e,t){return{type:"FORGOT-PASS/SHOW-INFO-AND-ERROR",forgot:{infoText:e,errorText:t}}},he=function(e,t){return{type:"RESTORE-PASS/SHOW-INFO-AND-ERROR",setNew:{infoText:e,errorText:t}}},fe=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(d.b)(),s=Object(d.c)((function(e){return e.recoveryPassword.forgot.info})),o=Object(d.c)((function(e){return e.recoveryPassword.forgot.errorText})),i="",l="";""!==s?(i=s+" You need to click recover link in you email.",l=ne.a.green):(i=o,l=ne.a.red);return Object(N.jsxs)("div",{className:ne.a.passwordRecovery,children:[Object(N.jsx)("h1",{children:"This page will recover you password."}),Object(N.jsx)("p",{className:ne.a.element,children:"Please enter you email to input bellow and click recover."}),Object(N.jsx)("div",{className:ne.a.element,children:Object(N.jsxs)("label",{children:["Your email:",Object(N.jsx)(H,{value:n,onChangeText:c,className:ne.a.input})]})}),Object(N.jsx)("div",{className:ne.a.element,children:Object(N.jsx)(W,{onClick:function(){r(function(e){return function(t){ce(e).then((function(e){t(pe(e.data.info,""))})).catch((function(e){t(pe("",e.response.data.error))}))}}(n))},children:"Recover"})}),Object(N.jsx)("div",{className:l,children:i})]})},me=n(12),xe=n.n(me),ge=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(k.a)(r,2),o=s[0],i=s[1],l=Object(d.c)((function(e){return e.recoveryPassword.setNew.info})),u=Object(d.c)((function(e){return e.recoveryPassword.setNew.errorText})),j=Object(d.b)(),b=Object(a.useState)(""),O=Object(k.a)(b,2),p=O[0],h=O[1],f=Object(T.g)().token,m="",x="";return""!==l?(m=l,x=xe.a.green):(m=u,x=xe.a.red),Object(N.jsxs)("div",{className:xe.a.passwordNew,children:[Object(N.jsx)("h1",{children:"This page for changing you password."}),Object(N.jsx)("p",{className:xe.a.element,children:"It will take token from address link and new password from inputs and then new password will be set to you."}),Object(N.jsx)("div",{className:xe.a.element,children:Object(N.jsxs)("label",{className:xe.a.oneSizeEl,children:[Object(N.jsx)("div",{children:"New password:"}),Object(N.jsx)(H,{value:n,onChangeText:c,type:"password",className:xe.a.input})]})}),Object(N.jsx)("div",{className:xe.a.element,children:Object(N.jsxs)("label",{className:xe.a.oneSizeEl,children:[Object(N.jsx)("div",{children:"Password confirmation:"}),Object(N.jsx)(H,{value:o,onChangeText:i,type:"password",className:xe.a.input})]})}),Object(N.jsx)("div",{className:xe.a.element,children:Object(N.jsx)(W,{onClick:function(){var e,t;n!==o?h("passwords do not match"):(h(""),j((e=n,t=f,function(n){re(e,t).then((function(e){n(he(e.data.info,""))})).catch((function(e){n(he("",e.response.data.error))}))})))},className:xe.a.button,children:"Change password"})}),Object(N.jsx)("div",{className:xe.a.red,children:p}),Object(N.jsx)("div",{className:x,children:m})]})},_e=n(33),ve=n.n(_e),Ce=["type","onChange","onChangeChecked","className","spanClassName","children"],Ne=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(B.a)(e,Ce),s="".concat(ve.a.checkbox," ").concat(a||"");return Object(N.jsxs)("label",{className:ve.a.label,children:[Object(N.jsx)("input",Object(j.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(N.jsx)("span",{className:ve.a.spanClassName,children:c})]})},Se=n(59),Te=n.n(Se),ke=["autoFocus","onBlur","onEnter","spanProps"],Pe=["children","onDoubleClick","className"],Ee=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(B.a)(e,ke),s=Object(a.useState)(!1),o=Object(k.a)(s,2),i=o[0],l=o[1],u=c||{},d=u.children,b=u.onDoubleClick,O=u.className,p=Object(B.a)(u,Pe),h="".concat(Te.a.editableSpan," ").concat(O);return Object(N.jsx)(N.Fragment,{children:i?Object(N.jsx)(H,Object(j.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},r)):Object(N.jsxs)("span",Object(j.a)(Object(j.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:h},p),{},{children:["\u270e ",d||r.value]}))})},we=n(42),Re=n.n(we),ye=["options","onChange","onChangeOption"],Ae=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(B.a)(e,ye),r=t?t.map((function(e,t){return Object(N.jsx)("option",{className:Re.a.option,value:e,children:e},"option-"+t)})):[];return Object(N.jsx)("select",Object(j.a)(Object(j.a)({className:Re.a.select,onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},Ie=n(43),Le=n.n(Ie),Be=["type","name","options","value","onChange","onChangeOption"],De=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(B.a)(e,Be),function(e){c&&c(e),r&&r(e.currentTarget.value)}),o=n?n.map((function(e,n){return Object(N.jsxs)("label",{className:Le.a.label,children:[Object(N.jsx)("input",{className:Le.a.radio,type:"radio",name:t,checked:e===a,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(N.jsx)(N.Fragment,{children:o})},Fe={testValue:""},Me=n(60),He=n.n(Me),Ve=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.testReducer.testValue}));return Object(N.jsxs)("div",{className:He.a.testForReducer,children:[Object(N.jsx)("div",{children:"Hi, I am test for reducer. I will set 'test value' to state and will show it at the input, if you click the button."}),Object(N.jsxs)("div",{children:[Object(N.jsx)(H,{value:t}),Object(N.jsx)(W,{onClick:function(){e({type:"SET-TEST-VALUE",newValue:"test value"})},children:"Click Me"})]})]})},Ge=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(k.a)(r,2),o=s[0],i=s[1],l=Object(a.useState)(""),u=Object(k.a)(l,2),d=u[0],j=u[1],b=["x","y","z"],O=Object(a.useState)(b[1]),p=Object(k.a)(O,2),h=p[0],f=p[1],m=n?"":"error",x=function(){m?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)};return Object(N.jsxs)("div",{className:G.a.examples,children:[Object(N.jsx)(Ve,{}),Object(N.jsx)("h1",{children:"This is examples of common components."}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:G.a.column,children:[Object(N.jsx)("h2",{children:"\u04411-SuperInputText:"}),Object(N.jsx)("div",{className:G.a.inputContainer,children:Object(N.jsx)(H,{value:n,onChangeText:c,onEnter:x,error:m,spanClassName:G.a.testSpanError})}),Object(N.jsx)("div",{children:Object(N.jsx)(H,{className:G.a.blue})})]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:G.a.column,children:[Object(N.jsx)("h2",{children:"\u04412-SuperButton:"}),Object(N.jsx)(W,{className:G.a.superButton,children:"default"}),Object(N.jsx)(W,{red:!0,onClick:x,className:G.a.superButton,children:"delete "}),Object(N.jsx)(W,{disabled:!0,className:G.a.superButton,children:"disabled"})]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:G.a.column,children:[Object(N.jsx)("h2",{children:"\u04413-SuperCheckbox:"}),Object(N.jsx)(Ne,{checked:o,onChangeChecked:i,children:"some text "}),Object(N.jsx)(Ne,{checked:o,onChange:function(e){return i(e.currentTarget.checked)}})]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:"\u04414-SuperEditableSpan:"}),Object(N.jsx)("div",{className:G.a.SuperEditableSpanContainer,children:Object(N.jsx)(Ee,{value:d,onChangeText:j,spanProps:{children:d?void 0:"enter text..."}})})]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:G.a.column,children:[Object(N.jsx)("h2",{children:"\u04415-SuperSelect and SuperRadio:"}),Object(N.jsx)(Ae,{options:b,value:h,onChangeOption:f}),Object(N.jsx)("div",{className:G.a.radioContainer,children:Object(N.jsx)(De,{options:b,value:h,onChangeOption:f})})]})]})},Ue=n(26),ze=n.n(Ue),Ke=function(e){var t=Object(d.c)((function(e){return e.auth.error}));return Object(N.jsx)("div",{className:ze.a.form,children:Object(N.jsx)("form",{onSubmit:e.LoggedIn,children:Object(N.jsxs)("div",{className:ze.a.border,children:[Object(N.jsx)("div",{className:ze.a.text,children:"Sign In"}),Object(N.jsx)("div",{children:Object(N.jsx)(H,{value:e.email,onChange:function(t){e.setEmail(t.currentTarget.value)}})}),Object(N.jsx)("div",{children:Object(N.jsx)(H,{type:"password",value:e.password,onChange:function(t){e.setPassword(t.currentTarget.value)}})}),t?Object(N.jsx)("span",{children:t}):null,Object(N.jsx)("div",{children:Object(N.jsx)(Ne,{checked:e.rememberMe,onChange:function(t){e.setRememberMe(t.currentTarget.checked)},className:ze.a.checkbox,children:"Remember Me"})}),Object(N.jsx)("div",{children:Object(N.jsx)(W,{children:"Login"})}),Object(N.jsx)(i.b,{to:"/passwordrecovery",children:"Forgot password"})]})})})},We=function(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(k.a)(r,2),o=s[0],i=s[1],l=Object(a.useState)(!1),u=Object(k.a)(l,2),j=u[0],b=u[1],O=Object(d.b)();return Object(d.c)((function(e){return e.auth.isLoggedIn}))?Object(N.jsx)(T.a,{to:"/profile"}):Object(N.jsx)(Ke,{email:n,password:o,rememberMe:j,setEmail:c,setPassword:i,setRememberMe:b,LoggedIn:function(e){e.preventDefault(),O(function(e,t,n){return function(a){h({email:e,password:t,rememberMe:n}).then((function(e){a(v(!0)),a(g(e.data))})).catch((function(e){e.response?a(C(e.response.data.error)):a(C(e.message+", more details in the console"))}))}}(n,o,j)),c(""),i("")}})},Ze=n(61),Xe=n.n(Ze),Ye=n(9),qe=n.n(Ye),Je={cardPacks:[],cardPacksTotalCount:10,pageCount:5,page:1,userIdAfterRadio:"",packName:"",sortPacks:"",max:4,min:0},Qe=function(e){return{type:"TABLE/SET-CURRENT-PAGE",page:e}},$e=function(e){return{type:"TABLE/SET-USER-ID-AFTER-RADIO",userIdAfterRadio:e}},et=function(e){return{type:"TABLE/SORT-PACKS",sortPacks:e}},tt=function(){return function(e,t){var n=t().table.page,a=t().table.cardPacksTotalCount,c=t().table.packName,r=t().table.pageCount.toString(),s=t().table.userIdAfterRadio,o=t().table.sortPacks,i=t().table.min,l=t().table.max;se(s,r,n,a,c,o,i,l).then((function(t){e({type:"TABLE/SET-CARD-PACKS",cardPacs:t.data.cardPacks}),e(function(e){return{type:"TABLE/SET-TOTAL-COUNT",cardPacksTotalCount:e}}(t.data.cardPacksTotalCount)),e(Qe(t.data.page)),console.log("getCardsPack then:",t.data.cardPacks)})).catch((function(e){console.log("getCardsPack catch:",e.response.data.error)}))}},nt=n(19),at=n.n(nt),ct=function(){for(var e=Object(d.c)((function(e){return e.table.pageCount})),t=Object(d.c)((function(e){return e.table.cardPacksTotalCount})),n=Object(d.c)((function(e){return e.table.page})),c=Object(d.b)(),r=Math.ceil(t/e),s=[],o=1;o<=r;o++)s.push(o);var i=Math.ceil(r/10),l=Object(a.useState)(1),u=Object(k.a)(l,2),j=u[0],b=u[1],O=10*(j-1)+1,p=10*j,h=s.filter((function(e){return e?e>=O&&e<=p:""}));return Object(N.jsxs)("div",{className:at.a.pagination,children:[" ",j>1&&Object(N.jsx)(W,{onClick:function(){b(j-1)},className:at.a.btn,children:"Prev"}),h.map((function(e){return Object(N.jsx)("span",{className:"".concat(at.a.item," ").concat(n===e?at.a.select:at.a.item),onClick:function(){return function(e){c(Qe(e))}(e)},children:e},e)})),i>j&&Object(N.jsx)(W,{onClick:function(){b(j+1)},className:at.a.btn,children:"Next"})]})},rt=n(44),st=n.n(rt),ot=n(45),it=n(27),lt=n.n(it),ut=function(e){var t=e.values,n=e.setValues;return Object(N.jsxs)("div",{className:lt.a.block,children:[Object(N.jsx)("h3",{children:"amount of cards"}),Object(N.jsx)(ot.Range,{values:t,step:1,min:0,max:100,onChange:function(e){return n(e)},renderTrack:function(e){var n=e.props,a=e.children;return Object(N.jsx)("div",{onMouseDown:n.onMouseDown,onTouchStart:n.onTouchStart,className:lt.a.band,children:Object(N.jsx)("div",{ref:n.ref,style:{height:"5px",width:"100%",borderRadius:"4px",background:Object(ot.getTrackBackground)({values:t,colors:["#ccc","yellow","#ccc"],min:0,max:100}),alignSelf:"center"},children:a})})},renderThumb:function(e){var n=e.index,a=e.props,c=e.isDragged;return Object(N.jsxs)("div",Object(j.a)(Object(j.a)({},a),{},{className:lt.a.slider,children:[Object(N.jsx)("div",{className:lt.a.numSlider,children:t[n].toFixed(0)}),Object(N.jsx)("div",{style:{height:"16px",width:"5px",backgroundColor:c?"#fbbf62":"#CCC"}})]}))}})]})},dt=function(){var e=Object(d.b)(),t=Object(a.useState)(""),n=Object(k.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)([0,100]),o=Object(k.a)(s,2),i=o[0],l=o[1],u=function(){var t,n;e({type:"TABLE/SET-SEARCH-PACK-NAME",packName:c}),e((t=i[0],n=i[1],{type:"TABLE/SET-CARDS-COUNT",min:t,max:n})),r("")};return Object(N.jsxs)("div",{className:st.a.block,children:[Object(N.jsx)(H,{value:c,onChange:function(e){r(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&u()},placeholder:"enter name"}),Object(N.jsx)(ut,{values:i,setValues:l}),Object(N.jsx)(W,{onClick:u,className:st.a.search,children:"Search"})]})},jt=n(20),bt=n.n(jt),Ot=function(e){var t=Object(d.c)((function(e){return e.table.pageCount})).toString();return Object(N.jsxs)("div",{className:bt.a.settings,children:[Object(N.jsx)("h2",{children:"Settings:"}),Object(N.jsxs)("label",{className:bt.a.settingEl,children:["How much Card Packs to show:",Object(N.jsx)(H,{value:t,onChange:e.setPageCountHandler,className:bt.a.input,type:"number"})]}),Object(N.jsxs)("label",{className:"".concat(bt.a.radioLabel," ").concat(bt.a.settingEl),children:[Object(N.jsx)("div",{children:"Profile Card Packs only or Public:"}),Object(N.jsx)(De,{options:e.superRadioArr,value:e.profileOrPublic,onChangeOption:e.onChangeProfileOrPublic,className:bt.a.radio})]})]})},pt=n(28),ht=n.n(pt),ft=n(98),mt=n(34),xt=n.n(mt),gt=function(){var e=Object(d.b)();return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:xt.a.block,children:[Object(N.jsx)(W,{className:xt.a.btn,onClick:function(){e(et("0created"))},children:"^"}),Object(N.jsx)(W,{className:xt.a.btn,onClick:function(){e(et("1created"))},children:"v"})]})})},_t=function(e){Object(d.c)((function(e){return e.table.userIdAfterRadio})),Object(d.c)((function(e){return e.table.pageCount})).toString();return Object(N.jsxs)("div",{className:ht.a.tableContent,children:[Object(N.jsx)(gt,{}),Object(N.jsx)("div",{className:ht.a.tableHeader,children:e.headerModel.map((function(e){return Object(N.jsx)("div",{children:e.element},e.id)}))}),Object(N.jsx)("div",{className:ht.a.tableBody,children:e.bodyModel.map((function(e){return Object(N.jsx)("div",{className:ht.a.bodyModel,children:e.element.map((function(e){return Object(N.jsx)("div",{children:e},Object(ft.a)())}))},e.id)}))})]})},vt={cards:[]},Ct=function(e){return function(t,n){ue(e).then((function(e){console.log("getCardsTC then:",e.data),t({type:"CARDS/SET-CARDS",cards:e.data.cards})})).catch((function(e){console.log("getCardsTC catch:",e.response.data.error)}))}},Nt=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.table.cardPacks})),n=Object(d.c)((function(e){return e.profile._id})),c=Object(d.c)((function(e){return e.table.pageCount})).toString(),r=Object(d.c)((function(e){return e.table.page})),s=Object(d.c)((function(e){return e.table.packName})),o=["Profile","Public"],l=Object(d.c)((function(e){return e.table.sortPacks})),u=Object(d.c)((function(e){return e.table.min})),j=Object(d.c)((function(e){return e.table.max})),b=Object(d.c)((function(e){return e.cards.cards})),O=Object(a.useState)(o[0]),p=Object(k.a)(O,2),h=p[0],f=p[1],m=Object(T.g)().packid,x=t.find((function(e){return e._id===m}));Object(a.useEffect)((function(){e($e("Public"===h?"":n)),e(tt())}),[h,c,r,s,l,u,j]),Object(a.useEffect)((function(){console.log(m),m&&(console.log("packid",m),e(Ct(m))),console.log("!!!cards",b)}),[m]);var g=[{id:"1",element:"Name"},{id:"2",element:"cardsCount"},{id:"3",element:"updated"},{id:"4",element:Object(N.jsx)(W,{onClick:function(){var t;e((t="BrightPack",function(e,n){oe(t).then((function(t){console.log("addCardsPackTC then:",t),e(tt())})).catch((function(e){console.log("addCardsPackTC catch:",e.response.data.error)}))}))},children:"Add CardPack"})}],_=[{id:"1",element:"answer"},{id:"2",element:"question"},{id:"3",element:"created"},{id:"4",element:Object(N.jsx)(W,{onClick:function(){var t;e((t=m,function(e,n){de(t).then((function(n){console.log("addCardTC then:",n),e(Ct(t)),e(tt())})).catch((function(e){console.log("addCardTC catch:",e.response.data.error)}))}))},children:"Add Card"})}],v=_.map((function(e){return{id:Object(ft.a)(),element:e.element}})),C=function(t){e(function(e){return function(t,n){ie(e).then((function(e){console.log("deleteCardsPackTC then:",e),t(tt())})).catch((function(e){console.log("deleteCardsPackTC catch:",e.response.data.error)}))}}(t))},S=function(t){e(function(e,t){return function(n,a){le(e,t).then((function(e){console.log("updateCardPackTC then:",e),n(tt())})).catch((function(e){console.log("updateCardPackTC catch:",e.response.data.error)}))}}(t,"BrightUpdatedName"))},P=function(t){e(function(e){return function(t,n){je(e).then((function(n){t(Ct(e)),console.log("deleteCardTC then:",n)})).catch((function(e){console.log("deleteCardTC catch:",e.response.data.error)}))}}(t))},E=function(t){e(function(e){return function(t,n){be(e).then((function(e){console.log("updateCardTC then:",e)})).catch((function(e){console.log("updateCardTC catch:",e.response.data.error)}))}}(t))},w=t.map((function(e){return{id:e._id,element:[Object(N.jsx)(i.b,{className:qe.a.item,exact:!0,to:"/table/".concat(e._id),children:e.name}),e.cardsCount,e.updated,Object(N.jsxs)("div",{children:[Object(N.jsx)(W,{className:qe.a.button,onClick:function(){return C(e._id)},children:"del"}),Object(N.jsx)(W,{className:qe.a.button,onClick:function(){return S(e._id)},children:"update"})]})]}})),R=b.map((function(e){return{id:e._id,element:[e.question,e.answer,e.created,Object(N.jsxs)("div",{children:[Object(N.jsx)(W,{className:qe.a.button,onClick:function(){return P(e._id)},children:"del"}),Object(N.jsx)(W,{className:qe.a.button,onClick:function(){return E(e._id)},children:"update"})]})]}}));return console.log("cardsPackMapped",w),console.log("cardsMapped",R),Object(N.jsxs)("div",{className:"".concat(Xe.a.container," ").concat(qe.a.table),children:[Object(N.jsx)("h1",{children:"This is table of Card Packs."}),Object(N.jsx)(dt,{}),Object(N.jsx)(Ot,{setPageCountHandler:function(t){Number(t.currentTarget.value)<1&&(t.currentTarget.value="1"),e(function(e){return{type:"TABLE/SET-PAGE-COUNT",pageCount:e}}(Number(t.currentTarget.value)))},superRadioArr:o,profileOrPublic:h,onChangeProfileOrPublic:f}),Object(N.jsx)(_t,{headerModel:g,bodyModel:w}),Object(N.jsx)(ct,{}),Object(N.jsx)("h1",{children:"This is table of Cards for selected Card Pack."}),Object(N.jsxs)("div",{className:qe.a.selectedCardPackInfo,children:[Object(N.jsxs)("div",{className:qe.a.element,children:[Object(N.jsx)("div",{className:qe.a.elementHeader,children:"Selected CardPack Name:"}),Object(N.jsx)("div",{className:qe.a.elementValue,children:x?x.name:""})]}),Object(N.jsxs)("div",{className:qe.a.element,children:[Object(N.jsx)("div",{className:qe.a.elementHeader,children:"Selected CardPack updated:"}),Object(N.jsx)("div",{className:qe.a.elementValue,children:x?x.updated:""})]}),Object(N.jsxs)("div",{className:qe.a.element,children:[Object(N.jsx)("div",{className:qe.a.elementHeader,children:"Selected CardPack id:"}),Object(N.jsx)("div",{className:qe.a.elementValue,children:m})]})]}),Object(N.jsx)(_t,{headerModel:v,bodyModel:R})]})},St=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(S,{}),Object(N.jsxs)(T.d,{children:[Object(N.jsx)(T.b,{path:"/table/:packid?",render:function(){return Object(N.jsx)(Nt,{})}}),Object(N.jsx)(T.b,{exact:!0,path:"/login",render:function(){return Object(N.jsx)(We,{})}}),Object(N.jsx)(T.b,{exact:!0,path:"/registration",render:function(){return Object(N.jsx)(q,{})}}),Object(N.jsx)(T.b,{exact:!0,path:"/profile",render:function(){return Object(N.jsx)($,{})}}),Object(N.jsx)(T.b,{exact:!0,path:"/404",render:function(){return Object(N.jsx)(ee,{})}}),Object(N.jsx)(T.b,{exact:!0,path:"/passwordrecovery",render:function(){return Object(N.jsx)(fe,{})}}),Object(N.jsx)(T.b,{exact:!0,path:"/passwordnew/:token",render:function(){return Object(N.jsx)(ge,{})}}),Object(N.jsx)(T.b,{exact:!0,path:"/tests",render:function(){return Object(N.jsx)(Ge,{})}}),Object(N.jsx)(T.a,{exact:!0,from:"/",to:"/profile"}),Object(N.jsx)(T.a,{from:"*",to:"/404"})]})]})},Tt=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.auth.isInitilize}));return Object(a.useEffect)((function(){e((function(e){f().then((function(t){e(v(!0)),e(g(t.data))})).catch((function(t){e(v(!1))})).finally((function(){e({type:"login/SET-IS-INITIALIZE",isInitilize:!0})}))}))}),[]),Object(N.jsx)("div",{className:"App",children:t&&Object(N.jsx)(St,{})})},kt=n(35),Pt=n(62),Et=Object(kt.b)({testReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;return"SET-TEST-VALUE"===t.type?Object(j.a)(Object(j.a)({},e),{},{testValue:t.newValue}):e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION-USER":return Object(j.a)(Object(j.a)({},e),{},{isRegistered:t.isRegistered});case"SET-ERROR-MESSAGE":return Object(j.a)(Object(j.a)({},e),{},{error:t.error});default:return e}},recoveryPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT-PASS/SHOW-INFO-AND-ERROR":return Object(j.a)(Object(j.a)({},e),{},{forgot:{info:t.forgot.infoText,errorText:t.forgot.errorText}});case"RESTORE-PASS/SHOW-INFO-AND-ERROR":return Object(j.a)(Object(j.a)({},e),{},{setNew:{info:t.setNew.infoText,errorText:t.setNew.errorText}});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:t.value});case"login/SET-IS-ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:t.error});case"login/SET-IS-INITIALIZE":return Object(j.a)(Object(j.a)({},e),{},{isInitilize:t.isInitilize});default:return Object(j.a)({},e)}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return"profile/SET-PROFILE"===t.type?Object(j.a)(Object(j.a)({},e),{},{avatar:t.avatar,email:t.email,name:t.name,publicCardPacksCount:t.publicCardPacksCount,_id:t._id}):Object(j.a)({},e)},table:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TABLE/SET-CARD-PACKS":return Object(j.a)(Object(j.a)({},e),{},{cardPacks:t.cardPacs});case"TABLE/SET-CURRENT-PAGE":return Object(j.a)(Object(j.a)({},e),{},{page:t.page});case"TABLE/SET-TOTAL-COUNT":return Object(j.a)(Object(j.a)({},e),{},{cardPacksTotalCount:t.cardPacksTotalCount});case"TABLE/SET-PAGE-COUNT":return Object(j.a)(Object(j.a)({},e),{},{pageCount:t.pageCount});case"TABLE/SET-USER-ID-AFTER-RADIO":return Object(j.a)(Object(j.a)({},e),{},{userIdAfterRadio:t.userIdAfterRadio});case"TABLE/SET-SEARCH-PACK-NAME":return Object(j.a)(Object(j.a)({},e),{},{packName:t.packName});case"TABLE/SORT-PACKS":return Object(j.a)(Object(j.a)({},e),{},{sortPacks:t.sortPacks});case"TABLE/SET-CARDS-COUNT":return Object(j.a)(Object(j.a)({},e),{},{max:t.max,min:t.min});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;return"CARDS/SET-CARDS"===t.type?Object(j.a)(Object(j.a)({},e),{},{cards:t.cards}):e}}),wt=Object(kt.c)(Et,Object(kt.a)(Pt.a));window.store=wt,s.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(i.a,{children:Object(N.jsx)(d.a,{store:wt,children:Object(N.jsx)(Tt,{})})})}),document.getElementById("root")),o()}},[[97,1,2]]]);
//# sourceMappingURL=main.c579568e.chunk.js.map