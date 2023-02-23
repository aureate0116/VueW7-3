<template>
  登入畫面
  <div class="col-8">
    <form id="form" class="form-signin">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="username"
          v-model="user.username"
          placeholder="name@example.com"
          required
          autofocus
        />
        <label for="username">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="user.password"
          placeholder="Password"
          required
        />
        <label for="password">Password</label>
      </div>
      <!-- v-on:click="login"  -->
      <!-- @click.prevent="login" -->
      <button
        @click.prevent="login"
        class="btn btn-lg btn-primary w-100 mt-3"
        type="submit"
      >
        登入
      </button>
    </form>
  </div>
</template>

<script>
const { VITE_API_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      // this.user.username = document.querySelector('#username').value;
      // this.user.password = document.querySelector('#password').value;
      // console.log(`${apiUrl}/admin/signin`);
      this.$http
        .post(`${VITE_API_URL}/admin/signin`, this.user)
        .then((res) => {
          console.log(res);
          // 紀錄 token
          const { token, expired } = res.data;

          // 紀錄 cookie
          document.cookie = `userToken=${token};expires=${new Date(
            expired
          )}; path=/`;
          // this.checkAdmin();
          // window.location = 'products.html'
          this.$router.push("/admin/products");
        })
        .catch((err) => {
          // alert(err.data);
          alert(err.data.message);
          // console.log(err.data.message);
          // console.log(username.value);
          // console.log(password.value);
        });
    },
  },
};
</script>
