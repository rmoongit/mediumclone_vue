<template>
  <ul class="pagination">
    <li
      class="page-item"
      :class="{active: currentPage === page}"
      v-for="page in pages"
      :key="page"
    >
      <router-link class="page-link" :to="{path: url, query: {page: page}}">
        {{ page }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import {rangeFrom} from '@/helpers/util'

export default {
  name: 'McvPagination',

  props: {
    limit: {
      type: Number,
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },

    currentPage: {
      type: Number,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },
  },

  computed: {
    pages() {
      const pagesCount = Math.ceil(this.total / this.limit)
      return rangeFrom(1, pagesCount)
    },
  },
}
</script>
