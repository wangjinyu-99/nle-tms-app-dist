import{B as w,O as h,Q as y,I as k,R as V,C as I,U as S,u as T,V as f,q as E,r as c,o as R,h as j,i as t,w as r,n as m,D as g,t as u,T as $,E as x,G as B}from"./vendor.9274bc82.js";/* empty css               *//* empty css              *//* empty css               *//* empty css               */import{N as C}from"./NavBar.e49fae70.js";import{_ as N,$ as A,O as F}from"./index.17765424.js";import{_ as L}from"./login-logo.929972a7.js";const U={name:"login",components:{NavBar:C,[w.name]:w,[h.name]:h,[y.name]:y,[k.name]:k,[V.name]:V},beforeRouteEnter(o,s,l){l(e=>{s.name==="ForgetPassword"?e.routerIsFrom=!0:e.routerIsFrom=!1})},setup(){const{t:o}=I(),s=S(),l=T(),e=f(!1),p=f(!1),v=n=>/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(n),i=n=>new RegExp(/^\S{6,}$/).test(n),_=E({username:"",password:"",checked:!1}),d=f("password");return{routerIsFrom:p,emailValidator:v,passValidator:i,viewType:d,state:_,onSubmit:async n=>{e.value=!0;try{const a=await A.login(n);a&&a.code===200&&($.success(o("loginSuccessful")),s.commit(F,a.data.access_token),s.dispatch("initCart",a.data),s.dispatch("getUserInfo"),p.value,p.value?l.push("/"):l.back()),e.value=!1}catch{e.value=!1}},submitLoading:e}}},P=o=>(x("data-v-5e831dc4"),o=o(),B(),o),q={class:"login",id:"container"},z=P(()=>m("div",{class:"logo"},[m("img",{src:L,style:{width:"100px"},alt:""}),m("h1",null,"\u7EA2\u5154TMS")],-1)),O={class:"forget"},D={style:{color:"rgb(17, 117, 170)"}};function Z(o,s,l,e,p,v){const i=c("van-field"),_=c("van-icon"),d=c("van-button"),b=c("van-checkbox"),n=c("van-form");return R(),j("div",q,[z,t(n,{onSubmit:e.onSubmit,class:"form"},{default:r(()=>[t(i,{modelValue:e.state.username,"onUpdate:modelValue":s[0]||(s[0]=a=>e.state.username=a),"left-icon":"../../public/login-icon/mail.png",name:"username",rules:[{required:!0,message:o.$t("pleaseInputYourEmail")}],label:o.$t("mail"),placeholder:o.$t("pleaseInputYourEmail")},null,8,["modelValue","rules","label","placeholder"]),t(i,{modelValue:e.state.password,"onUpdate:modelValue":s[2]||(s[2]=a=>e.state.password=a),"left-icon":"../../public/login-icon/password.png",name:"password",type:e.viewType,rules:[{required:!0,message:o.$t("pleaseEnterThePassword")}],label:o.$t("password"),placeholder:o.$t("pleaseEnterThePassword")},{"right-icon":r(()=>[t(_,{onClick:s[1]||(s[1]=a=>e.viewType=e.viewType==="password"?"text":"password"),name:e.viewType==="password"?"closed-eye":"eye-o"},null,8,["name"])]),_:1},8,["modelValue","type","rules","label","placeholder"]),m("div",O,[t(d,{class:"forget-btn",size:"small",to:"forget_Password"},{default:r(()=>[g(u(o.$t("retrievePassword")),1)]),_:1})]),t(d,{class:"btn",block:"",type:"success",round:"",loading:e.submitLoading,"native-type":"submit"},{default:r(()=>[g(u(o.$t("loginIn")),1)]),_:1},8,["loading"]),t(d,{class:"btn",block:"",type:"success",plain:"",round:"",loading:e.submitLoading,to:"register"},{default:r(()=>[g(u(o.$t("newUserRegistration")),1)]),_:1},8,["loading"]),t(i,{name:"checkbox",class:"checkbox",rules:[{required:!0,message:o.$t("pleaseCheckAgreement")}]},{input:r(()=>[t(b,{modelValue:e.state.checked,"onUpdate:modelValue":s[3]||(s[3]=a=>e.state.checked=a),"checked-color":"#58be6a"},{default:r(()=>[g(u(o.$t("haveReadAgree"))+" ",1),m("span",D,"\u300A"+u(o.$t("redRabbitRegistrationService"))+" \u300B ",1)]),_:1},8,["modelValue"])]),_:1},8,["rules"])]),_:1},8,["onSubmit"])])}var X=N(U,[["render",Z],["__scopeId","data-v-5e831dc4"]]);export{X as default};
