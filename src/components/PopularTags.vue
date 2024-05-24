<template>
  <section>
    <mcv-loading v-if="isLoading" />
    <mcv-error v-if="error" />

    <div v-if="popularTags" class="sidebar">
      <p>Popular Tags</p>
      <ul class="tag-list">
        <li v-for="(tag, index) in filteredPopularTags" :key="index">
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
import McvLoading from '@/components/IsLoading'
import McvError from '@/components/IsError'

export default {
  name: 'McvPopularTags',

  components: {
    McvLoading,
    McvError,
  },

  beforeMount() {
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

    filteredPopularTags() {
      const filteredTags = this.popularTags.filter((tag) => tag)
      return filteredTags
    },
  },
}
</script>
