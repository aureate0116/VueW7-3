import{_ as h,r as l,o as u,c as v,a as t,b as s,w as n,j as p,d as c}from"./index-75d2aa51.js";const{VITE_API_URL:r}={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"rena",BASE_URL:"/VueW7-3",MODE:"production",DEV:!1,PROD:!0,SSR:!1},m={methods:{logout(){this.$http.post(`${r}/logout`).then(e=>{document.cookie='userToken="" ;expires="" ; path=/',alert("已登出"),this.$router.push("/")}).catch(e=>{alert(e.response.data.message)})},checkAdmin(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e,this.$http.post(`${r}/api/user/check`).then(a=>{console.log(a),a.data.success||this.$router.push("/login")}).catch(a=>{alert(a.response.data.message),this.$router.push("/login")})}},mounted(){this.checkAdmin()}},b={class:"container-fluid"},g={class:"navbar navbar-expand-lg navbar-light bg-light"},f={class:"container-fluid"},k=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),$={class:"collapse navbar-collapse justify-content-between",id:"navbarNav"},x={class:"navbar-nav"},A={class:"nav-item"},V={class:"nav-item"},w={class:"navbar-nav"},T={class:"nav-item"},E={class:"nav-item"},I={class:"container py-5"};function N(e,a,P,R,B,i){const o=l("router-link"),d=l("router-view");return u(),v("div",b,[t("nav",g,[t("div",f,[s(o,{class:"navbar-brand fw-bold",to:"/"},{default:n(()=>[c("後台管理")]),_:1}),k,t("div",$,[t("ul",x,[t("li",A,[s(o,{class:"nav-link",to:"/admin/products"},{default:n(()=>[c("產品管理")]),_:1})]),t("li",V,[s(o,{class:"nav-link",to:"/admin/orders"},{default:n(()=>[c("訂單管理")]),_:1})])]),t("ul",w,[t("li",T,[s(o,{class:"nav-link",to:"/"},{default:n(()=>[c("回前台")]),_:1})]),t("li",E,[t("a",{href:"#",class:"nav-link",onClick:a[0]||(a[0]=p((..._)=>i.logout&&i.logout(..._),["prevent"]))},"登出")])])])])]),t("div",I,[s(d,{"check-admin":i.checkAdmin},null,8,["check-admin"])])])}const y=h(m,[["render",N]]);export{y as default};
