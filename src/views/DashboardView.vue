<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand fw-bold" to="/">後台管理</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/products"
                >產品管理</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/orders"
                >訂單管理</router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">回前台</router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="logout">登出</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container py-5">
      <router-view :check-admin="checkAdmin"></router-view>
    </div>
  </div>
</template>

<script>
// import { RouterView } from 'vue-router'
const { VITE_API_URL } = import.meta.env;

export default {
  methods: {
    logout() {
      this.$http
        .post(`${VITE_API_URL}/logout`)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          document.cookie = `userToken="" ;expires="" ; path=/`;
          alert("已登出");
          this.$router.push("/");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    checkAdmin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common.Authorization = token;
      this.$http
        .post(`${VITE_API_URL}/api/user/check`)
        .then((res) => {
          //alert(res.data);
          console.log(res);
          if (!res.data.success) {
            this.$router.push("/login");
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.$router.push("/login");
        });
    },
  },
  mounted() {
    this.checkAdmin();
  },
};
</script>
