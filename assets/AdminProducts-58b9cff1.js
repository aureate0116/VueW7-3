import{M as g}from"./bootstrap.esm-434bcbc7.js";import{p as M}from"./PaginationComponent-eb925a56.js";import{_ as V,r as P,o as d,c as i,b as f,a as t,F as h,e as v,g as r,i as a,f as y,k as L,d as k,t as m}from"./index-75d2aa51.js";const{VITE_API_URL:p,VITE_API_PATH:_}={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"rena",BASE_URL:"/VueW7-3",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let u=null,b=null;const C={props:["checkAdmin"],data(){return{products:[],isNew:!0,tempProduct:{imagesUrl:[]},isLoading:!1,page:{}}},components:{pagination:M},methods:{getProducts(l=1){this.isLoading=!0,this.$http.get(`${p}/api/${_}/admin/products?page=${l}`).then(e=>{this.products=e.data.products,this.page=e.data.pagination,this.isLoading=!1}).catch(e=>{this.isLoading=!1,console.log(e),alert(e.response.data.message)})},openModal(l,e){l==="new"?(this.isNew=!0,this.tempProduct={imagesUrl:[]},u.show()):l==="del"?(this.tempProduct={...e},b.show()):l==="edit"&&(this.isNew=!1,this.tempProduct={...e},u.show())},newOrEditProduct(){this.isNew?this.$http.post(`${p}/api/${_}/admin/product`,{data:this.tempProduct}).then(l=>{alert(l.data.message),u.hide(),this.getProducts()}).catch(l=>{alert(l.response.data.message)}):this.$http.put(`${p}/api/${_}/admin/product/${this.tempProduct.id}`,{data:this.tempProduct}).then(l=>{alert(l.data.message),u.hide(),this.getProducts()}).catch(l=>{alert(l.response.data.message)})},deleteProduct(){this.isLoading=!0,this.$http.delete(`${p}/api/${_}/admin/product/${this.tempProduct.id}`).then(l=>{alert(l.data.message),b.hide(),this.getProducts()}).catch(l=>{alert(l.response.data.message)})},createImgs(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")}},mounted(){this.checkAdmin(),this.getProducts(),u=new g(document.getElementById("productModal")),b=new g(document.getElementById("delProductModal"))}},E={class:"container"},I=t("h3",{class:"fw-bold"},"後台產品列表",-1),A={class:"text-end mt-4"},N={class:"table mt-4"},T=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),B={class:"text-end"},D={class:"text-end"},O={key:0,class:"text-success"},R={key:1},S={class:"btn-group"},F=["onClick"],H=["onClick"],z={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},W={class:"modal-dialog modal-xl"},j={class:"modal-content border-0"},q={class:"modal-header bg-dark text-white"},G={id:"productModalLabel",class:"modal-title"},J={key:0},K={key:1},Q=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),X={class:"modal-body"},Y={class:"row"},Z={class:"col-sm-4"},$={class:"mb-2"},tt={class:"mb-3"},et=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),st=["src","alt"],ot=t("h2",{class:"fw-bold"},"多圖新增",-1),lt={key:0},dt={class:"mb-3"},it=t("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),nt=["onUpdate:modelValue"],rt=["src"],at={key:0},ct={key:1},mt={key:1},ut={class:"col-sm-8"},pt={class:"mb-3"},_t=t("label",{for:"title",class:"form-label"},"標題",-1),ht={class:"row"},bt={class:"mb-3 col-md-6"},gt=t("label",{for:"category",class:"form-label"},"分類",-1),Pt={class:"mb-3 col-md-6"},ft=t("label",{for:"price",class:"form-label"},"單位",-1),vt={class:"row"},yt={class:"mb-3 col-md-6"},kt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),wt={class:"mb-3 col-md-6"},Ut=t("label",{for:"price",class:"form-label"},"售價",-1),xt=t("hr",null,null,-1),Mt={class:"mb-3"},Vt=t("label",{for:"description",class:"form-label"},"產品描述",-1),Lt={class:"mb-3"},Ct=t("label",{for:"content",class:"form-label"},"說明內容",-1),Et={class:"mb-3"},It={class:"form-check"},At=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Nt={class:"modal-footer"},Tt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),Bt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Dt={class:"modal-dialog"},Ot={class:"modal-content border-0"},Rt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),St={class:"modal-body"},Ft=t("strong",{class:"text-danger"},null,-1),Ht={class:"modal-footer"},zt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Wt(l,e,jt,qt,o,n){const w=P("Loading"),U=P("pagination");return d(),i(h,null,[f(w,{active:o.isLoading,"z-index":1060},null,8,["active"]),t("div",E,[I,t("div",A,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=s=>n.openModal("new"))}," 建立新的產品 ")]),t("table",N,[T,t("tbody",null,[(d(!0),i(h,null,v(o.products,s=>(d(),i("tr",{key:s.id},[t("td",null,m(s.category),1),t("td",null,m(s.title),1),t("td",B,m(s.origin_price),1),t("td",D,m(s.price),1),t("td",null,[s.is_enabled?(d(),i("span",O,"啟用")):(d(),i("span",R,"未啟用"))]),t("td",null,[t("div",S,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:c=>n.openModal("edit",s)}," 編輯 ",8,F),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:c=>n.openModal("del",s)}," 刪除 ",8,H)])])]))),128))])]),f(U,{pages:o.page,"get-products":n.getProducts},null,8,["pages","get-products"])]),t("div",z,[t("div",W,[t("div",j,[t("div",q,[t("h5",G,[o.isNew?(d(),i("span",J,"新增產品")):(d(),i("span",K,"編輯產品"))]),Q]),t("div",X,[t("div",Y,[t("div",Z,[t("div",$,[t("div",tt,[et,r(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=s=>o.tempProduct.imageUrl=s),class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[a,o.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:o.tempProduct.imageUrl,alt:o.tempProduct.title},null,8,st)]),ot,Array.isArray(o.tempProduct.imagesUrl)?(d(),i("div",lt,[(d(!0),i(h,null,v(o.tempProduct.imagesUrl,(s,c)=>(d(),i("div",{key:c+1},[t("div",dt,[it,r(t("input",{type:"text","onUpdate:modelValue":x=>o.tempProduct.imagesUrl[c]=x,class:"form-control",placeholder:"請輸入圖片連結"},null,8,nt),[[a,o.tempProduct.imagesUrl[c]]])]),t("img",{class:"img-fluid",src:s},null,8,rt)]))),128)),o.tempProduct.imagesUrl.length<5?(d(),i("div",at,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=s=>o.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):y("",!0),o.tempProduct.imagesUrl.length>0?(d(),i("div",ct,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=s=>o.tempProduct.imagesUrl.pop())}," 刪除圖片 ")])):y("",!0)])):(d(),i("div",mt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=(...s)=>n.createImgs&&n.createImgs(...s))}," 新增圖片 ")]))]),t("div",ut,[t("div",pt,[_t,r(t("input",{id:"title",type:"text","onUpdate:modelValue":e[5]||(e[5]=s=>o.tempProduct.title=s),class:"form-control",placeholder:"請輸入標題"},null,512),[[a,o.tempProduct.title]])]),t("div",ht,[t("div",bt,[gt,r(t("input",{id:"category",type:"text","onUpdate:modelValue":e[6]||(e[6]=s=>o.tempProduct.category=s),class:"form-control",placeholder:"請輸入分類"},null,512),[[a,o.tempProduct.category]])]),t("div",Pt,[ft,r(t("input",{id:"unit",type:"text","onUpdate:modelValue":e[7]||(e[7]=s=>o.tempProduct.unit=s),class:"form-control",placeholder:"請輸入單位"},null,512),[[a,o.tempProduct.unit]])])]),t("div",vt,[t("div",yt,[kt,r(t("input",{id:"origin_price",type:"number","onUpdate:modelValue":e[8]||(e[8]=s=>o.tempProduct.origin_price=s),min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[a,o.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",wt,[Ut,r(t("input",{id:"price",type:"number","onUpdate:modelValue":e[9]||(e[9]=s=>o.tempProduct.price=s),min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[a,o.tempProduct.price,void 0,{number:!0}]])])]),xt,t("div",Mt,[Vt,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":e[10]||(e[10]=s=>o.tempProduct.description=s),class:"form-control",placeholder:"請輸入產品描述"},`
                `,512),[[a,o.tempProduct.description]])]),t("div",Lt,[Ct,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":e[11]||(e[11]=s=>o.tempProduct.content=s),class:"form-control",placeholder:"請輸入說明內容"},`
                `,512),[[a,o.tempProduct.content]])]),t("div",Et,[t("div",It,[r(t("input",{id:"is_enabled",class:"form-check-input","onUpdate:modelValue":e[12]||(e[12]=s=>o.tempProduct.is_enabled=s),type:"checkbox","true-value":1,"false-value":0},null,512),[[L,o.tempProduct.is_enabled]]),At])])])])]),t("div",Nt,[Tt,t("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=(...s)=>n.newOrEditProduct&&n.newOrEditProduct(...s))}," 確認 ")])])])],512),t("div",Bt,[t("div",Dt,[t("div",Ot,[Rt,t("div",St,[k(" 是否刪除 "+m(o.tempProduct.title)+" ",1),Ft,k(" 商品(刪除後將無法恢復)。 ")]),t("div",Ht,[zt,t("button",{type:"button",class:"btn btn-danger",onClick:e[14]||(e[14]=(...s)=>n.deleteProduct&&n.deleteProduct(...s))}," 確認刪除 ")])])])],512)],64)}const Qt=V(C,[["render",Wt]]);export{Qt as default};
