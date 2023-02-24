<template>
  <h3 class="fw-bold">購物車</h3>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>小計</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.carts">
        <tr v-for="item in cart.carts" :key="item.id">
          <td>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="deleteItem(item)"
              :disabled="item.id === loadingItem"
            >
              <!-- <i class="fas fa-spinner fa-pulse"></i> -->
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <!-- <div class="text-success">
                      已套用優惠券
                    </div> -->
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <!-- <input min="1" type="number" class="form-control"> -->
                <select
                  name=""
                  id=""
                  class="form-select"
                  v-model="item.qty"
                  :disabled="item.id === loadingItem"
                  @change="updateCartItem(item)"
                >
                  <option :value="i" v-for="i in 20" :key="`${i}122`">
                    {{ i }}
                  </option>
                </select>
                <span class="input-group-text" id="basic-addon2">{{
                  item.product.unit
                }}</span>
              </div>
            </div>
          </td>
          <td class="text-end">$ {{ item.total }}</td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">$ {{ cart.total }}</td>
      </tr>
    </tfoot>
  </table>

  <!-- 收件人資料 -->
  <div class="my-5 row justify-content-center">
    <v-form ref="form" class="col-md-6" v-slot="{ errors }" @submit="onSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <v-field
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="user.email"
        ></v-field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <v-field
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
          v-model="user.name"
        ></v-field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <v-field
          id="tel"
          name="電話"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話"
          :rules="isPhone"
          v-model="user.phone"
        ></v-field>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <v-field
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址"
          rules="required|required"
          v-model="user.address"
        ></v-field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea
          id="message"
          class="form-control"
          cols="30"
          rows="10"
          v-model="user.message"
        ></textarea>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-danger">送出訂單</button>
      </div>
    </v-form>
  </div>
</template>

<script>
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      cart: {},
      // form: {
      //   user: {
      //     name: "",
      //     email: "",
      //     tel: "",
      //     address: "",
      //   },
      //   message: "",
      // },
      user: {},
    };
  },
  // components: {
  //   ValidationProvider,
  // },
  methods: {
    getCarts() {
      this.$http
        .get(`${VITE_API_URL}/api/${VITE_API_PATH}/cart`)
        .then((res) => {
          console.log("購物車:", res);
          this.cart = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateCartItem(item) {
      // 購物車內有兩個id :  購物車id  & 產品id
      const data = {
        product_id: item.product.id, // 產品id
        qty: item.qty,
      };
      // console.log("更新項目: ",data, item.id);
      this.$http
        .put(`${VITE_API_URL}/api/${VITE_API_PATH}/cart/${item.id}`, { data }) // 要帶購物車id
        .then((res) => {
          // console.log("購物車:", res.data);
          this.cart = res.data.data;
          this.getCarts();
        });
    },
    deleteItem(item) {
      this.$http
        .delete(`${VITE_API_URL}/api/${VITE_API_PATH}/cart/${item.id}`)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          this.getCarts();
        });
    },
    clearCart() {
      this.$http
        .delete(`${VITE_API_URL}/api/${VITE_API_PATH}/carts`)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          this.getCarts();
        });
    },
    onSubmit() {
      this.$http
        .post(`${VITE_API_URL}/api/${VITE_API_PATH}/order`, {
          data: {
            user: {
              name: this.user.name,
              email: this.user.email,
              tel: this.user.phone,
              address: this.user.address,
            },
            message: this.user.message,
          },
        })
        .then((res) => {
          alert(`送出訂單! ${res.data.message}`);
          this.user.name = "";
          this.user.email = "";
          this.user.phone = "";
          this.user.address = "";
          this.user.message = "";
          this.clearCart();
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>
