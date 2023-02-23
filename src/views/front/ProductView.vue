<template>
  單一產品
  <div>
    <img :src="product.imageUrl" alt="" width="500" />
    <img :src="product.imagesUrl" alt="" width="100" />
  </div>
  <div>
    <h2>{{ product.title }}</h2>
    {{ product.origin_price }} <br />
    {{ product.description }}
  </div>
</template>

<script>
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
      // 取得產品 id, 用 id 取得產品資料
      console.log(this.$route.params);
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_API_URL}/api/${VITE_API_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          console.log(res);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
