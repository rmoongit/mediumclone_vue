<template>
  <section>
    <mcv-loading v-if="isLoading" />
    <mcv-error v-if="error" />

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
          <div class="pull-xs-right">
            <mcv-add-to-favorites
              :is-favorited="article.favorited"
              :is-favorites-count="article.favoritesCount"
              :article-slug="article.slug"
            />
          </div>
          <router-link
            class="preview-link"
            :to="{name: 'article', params: {slug: article.slug}}"
          >
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
            <span>Read more...</span>
            <mcv-tag-list :tags="article.tagList" />
          </router-link>
        </div>
      </article>
      <mcv-pagination
        :total="feedData.articlesCount"
        :limit="limit"
        :current-page="currentPage"
        :url="baseUrl"
      />
    </article>
  </section>
</template>

<script>
import McvPagination from '@/components/PaginationBlock'
import McvLoading from '@/components/IsLoading'
import McvError from '@/components/IsError'
import McvTagList from '@/components/TagList'
import McvAddToFavorites from '@/components/AddToFavorites'
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/feed'
import {limit} from '@/helpers/variables'
import queryString from 'query-string'

export default {
  name: 'McvFeed',

  components: {
    McvPagination,
    McvLoading,
    McvError,
    McvTagList,
    McvAddToFavorites,
  },

  data() {
    return {
      limit: limit,
    }
  },

  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },

  mounted() {
    this.fetchFeeds()
  },

  methods: {
    fetchFeeds() {
      const parsedUrl = queryString.parseUrl(this.apiUrl) // парсим основной url

      const stringifiedParams = queryString.stringify({
        limit: this.limit,
        offset: this.offset,
        ...parsedUrl.query,
      }) // приводим в параметры из наших значений

      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
      this.$store.dispatch(actionTypes.getFeed, apiUrlWithParams)
    },
  },

  computed: {
    ...mapState({
      feedData: (state) => state.feed.data,
      isLoading: (state) => state.feed.isLoading,
      error: (state) => state.feed.error,
    }),

    // Вычисляем currentPage
    currentPage() {
      return Number(this.$route.query.page) || 1
    },

    // Вычисляем baseURL
    baseUrl() {
      return this.$route.path
    },

    // Вычисляем Offset страницы
    offset() {
      return this.currentPage * this.limit - this.limit
    },
  },

  watch: {
    currentPage() {
      this.fetchFeeds()
    },

    apiUrl() {
      this.fetchFeeds()
    },
  },
}
</script>
