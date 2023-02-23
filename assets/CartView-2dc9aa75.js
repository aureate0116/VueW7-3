import{_ as g,o as n,c as l,d as m,a as t,F as u,e as _,f as $,t as o,g as b,v as C}from"./index-269edc5c.js";const{VITE_API_URL:d,VITE_API_PATH:r}={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"rena",BASE_URL:"/VueW7-3",MODE:"production",DEV:!1,PROD:!0,SSR:!1},I={data(){return{cart:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},user:{}}},methods:{getCarts(){this.$http.get(`${d}/api/${r}/cart`).then(e=>{console.log("購物車:",e),this.cart=e.data.data}).catch(e=>{console.log(e)})},updateCartItem(e){const c={product_id:e.product.id,qty:e.qty};this.$http.put(`${d}/api/${r}/cart/${e.id}`,{data:c}).then(h=>{this.cart=h.data.data,this.getCarts()})},deleteItem(e){this.$http.delete(`${d}/api/${r}/cart/${e.id}`).then(c=>{this.getCarts()})},clearCart(){this.$http.delete(`${d}/api/${r}/carts`).then(e=>{this.getCarts()})},onSubmit(){console.log("submit")}},mounted(){this.getCarts()}},f={class:"table align-middle"},V=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"小計")])],-1),v=["onClick","disabled"],y={class:"input-group input-group-sm"},x={class:"input-group mb-3"},E=["onUpdate:modelValue","disabled","onChange"],k=["value"],A={class:"input-group-text",id:"basic-addon2"},P={class:"text-end"},T=t("td",{colspan:"3",class:"text-end"},"總計",-1),S={class:"text-end"};function D(e,c,h,R,i,p){return n(),l(u,null,[m(" 購物車 "),t("table",f,[V,t("tbody",null,[i.cart.carts?(n(!0),l(u,{key:0},_(i.cart.carts,s=>(n(),l("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:a=>p.deleteItem(s),disabled:s.id===e.loadingItem}," x ",8,v)]),t("td",null,o(s.product.title)+" ",1),t("td",null,[t("div",y,[t("div",x,[b(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":a=>s.qty=a,disabled:s.id===e.loadingItem,onChange:a=>p.updateCartItem(s)},[(n(),l(u,null,_(20,a=>t("option",{value:a,key:`${a}122`},o(a),9,k)),64))],40,E),[[C,s.qty]]),t("span",A,o(s.product.unit),1)])])]),t("td",P,"$ "+o(s.total),1)]))),128)):$("",!0)]),t("tfoot",null,[t("tr",null,[T,t("td",S,"$ "+o(i.cart.total),1)])])])],64)}const q=g(I,[["render",D]]);export{q as default};