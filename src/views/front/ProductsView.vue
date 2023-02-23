<template>
  <h3 class="fw-bold">產品列表</h3>

  <table class="table table-striped">
    <thead>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td style="width: 200px">
          <div
            style="
              height: 100px;
              background-size: cover;
              background-position: center;
            "
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
          ></div>
        </td>
        <td>{{ product.title }}</td>
        <td>
          <!-- 判斷原價跟特價是否一樣 , 一樣的話只顯示一個價格 -->
          <div class="h5" v-if="product.price === product.origin_price">
            {{ product.price }} 元
          </div>
          <del class="h6">原價 {{ product.origin_price }} 元</del>
          <div class="h5">現在只要 {{ product.price }} 元</div>
        </td>
        <td>
          <div class="btn-group btn-group-sm">
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="openModal(product)"
            >
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="addToCart(product.id)"
              :disabled="product.id === loadingItem"
            >
              加到購物車
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            瀏覽產品
            <!-- <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span> -->
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <img
                  class="img-fluid"
                  :src="tempProduct.imageUrl"
                  :alt="tempProduct.title"
                />
              </div>
              <!-- <h2 class="fw-bold">多圖新增</h2> -->

              <!-- 判斷是否為陣列 -->
              <div v-if="Array.isArray(tempProduct.imagesUrl)">
                <!-- 為避免key 一樣可以在後面+數字 -->
                <div
                  v-for="(image, key) in tempProduct.imagesUrl"
                  :key="key + 1"
                >
                  <img class="img-fluid" :src="image" width="150" />
                </div>
              </div>
            </div>

            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題 : </label>
                {{ tempProduct.title }}
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類 : </label>
                  {{ tempProduct.category }}
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位 : </label>
                  {{ tempProduct.unit }}
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價 : </label>
                  {{ tempProduct.origin_price }}
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  {{ tempProduct.price }}
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                {{ tempProduct.description }}
              </div>
              <hr />
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                {{ tempProduct.content }}
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="addToCart(tempProduct.id)"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { RouterLink } from 'vue-router'
import * as bootstrap from "bootstrap";

// 取得環境變數 除了這樣寫 const url = import.meta.env.VITE_PATH;
// 也可以使用解構的方式把環境變數取出來
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;
let productModal = null;

export default {
  data() {
    return {
      products: [],
      productId: "",
      tempProduct: {
        imagesUrl: [],
      },
    };
  },
  methods: {
    getProducts() {
      // 用插件的方式使用 axios
      this.$http
        .get(`${VITE_API_URL}/api/${VITE_API_PATH}/products/all`)
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
          console.log(this.products);
        });
    },
    addToCart(id) {
      const data = {
        product_id: id,
        qty: 1,
      };
      this.$http
        .post(`${VITE_API_URL}/api/${VITE_API_PATH}/cart`, { data })
        .then((res) => {
          alert("已加入購物車");
          console.log(res);
        });
    },
    openModal(product) {
      //this.productId = id;
      this.tempProduct = { ...product };
      productModal.show();
    },
  },
  components: {
    // productModal,
  },
  mounted() {
    this.getProducts();
    productModal = new bootstrap.Modal(document.getElementById("productModal"));
  },
};
</script>
