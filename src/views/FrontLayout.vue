<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Logo</router-link>
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
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products"
                >產品列表</router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">購物車</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">登入</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/products"
                >後台產品列表</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container py-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import { RouterView } from 'vue-router'

// export default {
//   components: {
//     RouterView
//   }
// }
</script>
