<template>
  <section>
    <div v-if="isLoading">Feed is Loading...</div>
    <div v-if="error">{{ Error }}</div>

    <article v-if="feedData">
      <article
        class="article-preview"
        v-for="(article, index) in feedData.articles"
        :key="index"
      >
        <div class="article-meta">
          <router-link
            class="nav-link"
            :to="{
              name: 'userProfile',
              params: {slug: article.author.username},
            }"
          >
            <img :src="article.author.image" />
          </router-link>

          <div class="info">
            <router-link
              class="author"
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username},
              }"
            >
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createAt }}</span>
          </div>
          <div class="pull-xs-right">add to favourite</div>
          <router-link
            class="preview-link"
            :to="{name: 'article', params: {slug: article.slug}}"
          >
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
            <span>Read more...</span>
            TAG LIST
          </router-link>
        </div>
      </article>
      <mcv-pagination
        :total="total"
        :limit="limit"
        :current-page="currentPage"
        :url="url"
      />
    </article>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/feed'
import McvPagination from '@/components/PaginationBlock'

export default {
  name: 'McvFeed',

  components: {
    McvPagination,
  },

  // Моковые данные
  data() {
    return {
      limit: 10,
      total: 200,
      currentPage: 5,
      url: '/tags/dragons',
    }
  },

  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },

  mounted() {
    this.$store.dispatch(actionTypes.getFeed, this.apiUrl)
  },

  computed: {
    ...mapState({
      feedData: (state) => state.feed.data,
      isLoading: (state) => state.feed.isLoading,
      error: (state) => state.feed.error,
    }),
  },
}
</script>
