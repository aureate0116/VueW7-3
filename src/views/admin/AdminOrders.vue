<template>
  <h3 class="fw-bold">後台訂單列表</h3>
  {{ orders }}
  <table class="table table-striped mt-5">
    <thead>
      <tr>
        <th>訂單時間</th>
        <th>Email</th>
        <th>購買品項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>訂單時間</td>
        <td>Email</td>
        <td>購買品項</td>
        <td>應付金額</td>
        <td>是否付款</td>
        <td>編輯</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    // this.getOrders();
    this.checkAdmin();
  },
  methods: {
    checkAdmin() {
      // 取得token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common.Authorization = token;
      this.$http
        .post(`${VITE_API_URL}/api/user/check`)
        .then((res) => {
          this.getOrders();
          console.log(res);
          if (!res.data.success) {
            this.$router.push("/login");
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
          // console.log(err.response.data.message)
          this.$router.push("/login");
        });
    },
    getOrders() {
      this.$http
        .get(`${VITE_API_URL}/api/${VITE_API_PATH}/admin/orders`)
        .then((res) => {
          this.orders = res.data;
          console.log(res);
          console.log(res.data.orders);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
