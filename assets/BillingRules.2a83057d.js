import{N as m}from"./NavBar.d75b5557.js";import{_ as f,G as d,E as v,H as b,r as y,o as a,h as o,i as U,n as t,t as e,F as g,Y as p}from"./vendor.4050523f.js";import{_ as k,$}from"./index.528285c3.js";const B={components:{NavBar:m},setup(){const n=f(),u=d(()=>n.state.currencyUnit),_=d(()=>n.state.volumeUnit),l=d(()=>n.state.weightUnit),i=v({}),h=()=>{$.getTransportPrice().then(r=>{i.value=r.data,console.log("res.data"),console.log(r.data)})};return b(()=>{h()}),{from:i,currencyUnit:u,volumeUnit:_,weightUnit:l}}},w={class:"billing-rules"},C={class:"billing"},N={border:"1",cellpadding:"10",cellspacing:"0",class:"table"},R={colspan:1},j={border:"1",cellpadding:"10",cellspacing:"0",class:"table"},F={colspan:1};function L(n,u,_,l,i,h){const r=y("nav-bar");return a(),o("div",w,[U(r,{title:n.$t("billingRules"),onClickLeft:()=>n.$router.push("/me")},null,8,["title","onClickLeft"]),t("div",C,[t("h3",null,e(n.$t("fixedCosts"))+" : "+e(l.currencyUnit)+e(l.from.starting_price),1),t("h3",null,e(n.$t("weightCharge")),1),t("div",null,[t("table",N,[t("thead",null,[t("tr",null,[t("th",null,e(n.$t("weightRange"))+"("+e(l.weightUnit)+")",1),t("th",null,e(n.$t("cost"))+"("+e(l.currencyUnit)+")",1)])]),t("tbody",null,[(a(!0),o(g,null,p(l.from.weight_list,(s,c)=>(a(),o("tr",{key:c},[t("td",R,e(s.start)+"~"+e(s.end),1),t("td",null,e(s.price),1)]))),128))])])]),t("h3",null,e(n.$t("mileageFee")),1),t("div",null,[t("table",j,[t("thead",null,[t("tr",null,[t("th",null,e(n.$t("mileageRange"))+"(km)",1),t("th",null,e(n.$t("cost"))+"("+e(l.currencyUnit)+")",1)])]),t("tbody",null,[(a(!0),o(g,null,p(l.from.km_list,(s,c)=>(a(),o("tr",{key:c,class:"table"},[t("td",F,e(s.start)+"~"+e(s.end),1),t("td",null,e(s.price),1)]))),128))])])]),t("h3",null,e(n.$t("billingMethod")),1),t("h6",null,e(l.from.type_name),1)])])}var S=k(B,[["render",L],["__scopeId","data-v-440aad30"]]);export{S as default};
