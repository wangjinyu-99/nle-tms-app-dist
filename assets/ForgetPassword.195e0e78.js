import{B as g,x as _,s as y,I as V,C,U as I,A as m,u as N,V as j,r as p,o as P,g as S,h as n,w as c,G as b,t as h,T as r,p as T,n as B,l as f}from"./vendor.08d73cb7.js";import{_ as k,$ as E}from"./index.44600073.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{N as R}from"./NavBar.73069699.js";import{_ as x}from"./login-logo.e632c361.js";const U={name:"register",components:{NavBar:R,[g.name]:g,[_.name]:_,[y.name]:y,[V.name]:V,[C.name]:C},setup(){const{t:s}=I(),o=m(60),w=N(),e=m(null),l=m(!1),i=j({email:"",code:"",new_password:"",confirm_new_password:""});return{viewType:m("password"),state:i,time:o,onRegister:async a=>{l.value=!0;try{const d=await E.getResetPassword(i);d&&d.code===200?(r.success(s("successful")),w.push("/login")):r(d.msg),l.value=!1}catch{l.value=!1}},submitLoading:l,sendEmailCode:async()=>{if(!e.value)try{const a=await E.getResetPasswordEmailCode({email:i.email});a&&a.code===200?(e.value=setInterval(()=>{o.value===0?(o.value=60,clearInterval(e.value),e.value=null):o.value-=1},1e3),r.success(s("successful"))):r(a.msg)}catch{r.fail("Sent fail")}}}}},q=s=>(T("data-v-6c8d9628"),s=s(),B(),s),F={class:"forget-password",id:"container"},L=q(()=>f("div",{class:"logo"},[f("img",{src:x,style:{width:"100px"},alt:""}),f("h1",null,"\u7EA2\u5154TMS")],-1));function Y(s,o,w,e,l,i){const u=p("van-button"),t=p("van-field"),v=p("van-form");return P(),S("div",F,[L,n(v,{onSubmit:e.onRegister,class:"form"},{default:c(()=>[n(t,{modelValue:e.state.email,"onUpdate:modelValue":o[0]||(o[0]=a=>e.state.email=a),"left-icon":"/login-icon/mail.png",name:"email",rules:[{required:!0,message:s.$t("pleaseInputYourEmail")}],placeholder:s.$t("pleaseInputYourEmail")},{button:c(()=>[n(u,{size:"small",type:"success",round:"",plain:"",onClick:e.sendEmailCode,disabled:e.time!==60},{default:c(()=>[b(h(e.time!==60?e.time:s.$t("verificationCode")),1)]),_:1},8,["onClick","disabled"])]),_:1},8,["modelValue","rules","placeholder"]),n(t,{modelValue:e.state.code,"onUpdate:modelValue":o[1]||(o[1]=a=>e.state.code=a),"left-icon":"/login-icon/verification-code.png",name:"code",rules:[{required:!0,message:s.$t("pleaseEnterVerificationCode")}],placeholder:s.$t("pleaseEnterVerificationCode")},null,8,["modelValue","rules","placeholder"]),n(t,{modelValue:e.state.new_password,"onUpdate:modelValue":o[2]||(o[2]=a=>e.state.new_password=a),"left-icon":"/login-icon/password.png",name:"new_password",type:e.viewType,rules:[{required:!0,message:s.$t("pleaseEnterNewPassword")}],placeholder:s.$t("pleaseEnterNewPassword")},null,8,["modelValue","type","rules","placeholder"]),n(t,{modelValue:e.state.confirm_new_password,"onUpdate:modelValue":o[3]||(o[3]=a=>e.state.confirm_new_password=a),"left-icon":"/login-icon/password.png",name:"confirm_new_password",type:e.viewType,rules:[{required:!0,message:s.$t("pleaseConfirmNewPassword")}],placeholder:s.$t("pleaseConfirmNewPassword")},null,8,["modelValue","type","rules","placeholder"]),n(u,{class:"btn",block:"",type:"success",round:"",loading:e.submitLoading,"native-type":"submit"},{default:c(()=>[b(h(s.$t("confirm")),1)]),_:1},8,["loading"])]),_:1},8,["onSubmit"])])}var Q=k(U,[["render",Y],["__scopeId","data-v-6c8d9628"]]);export{Q as default};
