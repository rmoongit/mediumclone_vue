<template>
  <section>
    <div v-if="isLoading">Tags is loading...</div>
    <div v-if="error">Error</div>

    <div v-if="popularTags" class="sidebar">
      <p>Popular Tags</p>
      <ul class="tag-list">
        <li v-for="(tag, index) in popularTags" :key="index">
          <router-link
            class="tag-pill tag-default"
            :to="{name: 'tag', params: {slug: tag}}"
            >{{ tag }}</router-link
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/popularTags'

export default {
  name: 'McvPopularTags',

  mounted() {
    this.fetchTags()
  },

  methods: {
    // Получаем теги
    fetchTags() {
      this.$store.dispatch(actionTypes.getTags)
    },
  },

  computed: {
    ...mapState({
      popularTags: (state) => state.popularTags.data,
      isLoading: (state) => state.popularTags.isLoading,
      error: (state) => state.popularTags.error,
    }),
  },
}
</script>
