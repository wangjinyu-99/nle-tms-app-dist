import{N as P}from"./NavBar.028a69d7.js";import{B as C,y as V,V as L,U as j,a1 as R,a8 as S,z as U,_ as F,G as z,E as p,H as E,r as l,o as m,h,i as s,n as t,t as r,F as b,Y as B,w as c,J as N,k as T,aa as q,ab as w,q as G,s as M}from"./vendor.f8b270cf.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{_ as H,$ as x}from"./index.9cf8458b.js";var J="/me-img/Paypal.png";const Y={components:{NavBar:P,[C.name]:C,[V.name]:V,[L.name]:L,[j.name]:j,[R.name]:R,[S.name]:S,[U.name]:U},setup(){const a=F(),i=z(()=>a.state.currencyUnit),d=p(!1),e=p({expect_amount:"",pay_type:1}),v=p([]),k=p([{value:30,id:1},{value:50,id:2},{value:100,id:3},{value:200,id:4},{value:300,id:5},{value:500,id:5}]),f=n=>{console.log("val"),console.log(n),/^100000$|^(\d|[1-9]\d)(\.\d{1,4})*$/.test(n)},u=()=>{!e.value||(d.value=!0,x.recharge(e.value).then(n=>{d.value=!1,n&&n.code==200&&x.paypal({bill_no:n.data.bill_no}).then(_=>{_.code==200&&(window.location.href=_.data.approvalUrl)})}).catch(()=>d.value=!1))},y=()=>{x.getDictionary().then(n=>{v.value=n.data.onlinePayTypeList})};return E(()=>{y()}),{currencyUnit:i,amountList:k,onlinePayTypeList:v,form:e,rechargeLoading:d,onRecharge:u,expectAmountValidator:f}}},$=a=>(G("data-v-1c83cd67"),a=a(),M(),a),K={class:"recharge"},O={class:"title"},Q={class:"amount-list"},W={class:"title"},X={class:"recharge-input"},Z={class:"payment-methods"},ee={class:"title"},ae={class:"radio-group"},oe=$(()=>t("img",{src:J,fit:"cover",class:"img"},null,-1)),te={class:"footer-btn"};function ne(a,i,d,e,v,k){const f=l("nav-bar"),u=l("van-button"),y=l("van-field"),n=l("van-radio"),_=l("van-cell"),A=l("van-cell-group"),D=l("van-radio-group"),I=l("van-form");return m(),h(b,null,[s(f,{title:a.$t("recharge")},null,8,["title"]),t("div",K,[t("div",O,r(a.$t("pleaseSelectRechargeAmount")),1),t("div",Q,[(m(!0),h(b,null,B(e.amountList,o=>(m(),T(u,{style:q(e.form.expect_amount==o.value?"background-color: #2DC18C;border-color:#2DC18C;;color:#fff;":""),onClick:g=>e.form.expect_amount=Number(o.value),key:o.id},{default:c(()=>[N(r(e.currencyUnit)+" "+r(o.value),1)]),_:2},1032,["style","onClick"]))),128))]),t("div",W,r(a.$t("otherRechargeAmount")),1),s(I,{onSubmit:e.onRecharge},{default:c(()=>[t("div",X,[s(y,{label:e.currencyUnit,"label-width":"50px",type:"number",modelValue:e.form.expect_amount,"onUpdate:modelValue":i[0]||(i[0]=o=>e.form.expect_amount=o),name:"expect_amount",placeholder:a.$t("pleaseEnterAnotherRechargeAmount"),rules:[{required:!0,validator:e.expectAmountValidator,message:a.$t("enterUpTo")}]},null,8,["label","modelValue","placeholder","rules"])]),t("div",Z,[t("div",ee,r(a.$t("paymentMethod")),1),t("div",ae,[s(D,{modelValue:e.form.pay_type,"onUpdate:modelValue":i[1]||(i[1]=o=>e.form.pay_type=o)},{default:c(()=>[(m(!0),h(b,null,B(e.onlinePayTypeList,(o,g)=>(m(),T(A,{key:o.id,border:!1,class:w(g===e.onlinePayTypeList.length-1?"radio-group-last":"")},{default:c(()=>[s(_,{clickable:"",onClick:le=>e.form.pay_type=o.id,class:w(g===e.onlinePayTypeList.length-1?"radius-last":"")},{title:c(()=>[oe,t("span",null,r(o.name),1)]),"right-icon":c(()=>[s(n,{name:o.id,"checked-color":"#2DC18C"},null,8,["name"])]),_:2},1032,["onClick","class"])]),_:2},1032,["class"]))),128))]),_:1},8,["modelValue"])])]),t("div",te,[s(u,{round:"",block:"",type:"success","native-type":"submit",loading:e.rechargeLoading},{default:c(()=>[N(r(a.$t("payImmediately")),1)]),_:1},8,["loading"])])]),_:1},8,["onSubmit"])])],64)}var ve=H(Y,[["render",ne],["__scopeId","data-v-1c83cd67"]]);export{ve as default};
