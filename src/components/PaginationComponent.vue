<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="getProducs(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="page + 'page'"
        :class="{ active: page === pages.current_page }"
      >
        <a class="page-link" href="#" @click.prevent="getProducts(page)">{{
          page
        }}</a>
      </li>

      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="getProducts(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["pages", "getProducts"],
  mounted() {
    //因為非同步關係，尚未抓到資料，所以會是空的 //
    console.log("page", this.pages);
  },
};
</script>
