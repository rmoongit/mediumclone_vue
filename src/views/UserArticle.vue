<template>
  <section class="article-page">
    <div class="banner">
      <div v-if="articleData" class="container">
        <h1>{{ articleData.title }}</h1>
        <div class="article-meta">
          <router-link
            :to="{name: 'userProfile', params: {slug: this.$route.params.slug}}"
          >
            <img :src="articleData.author.image" />
          </router-link>
          <div class="info">
            <router-link
              :to="{
                name: 'userProfile',
                params: {slug: this.$route.params.slug},
              }"
            >
              {{ articleData.author.username }}
            </router-link>
            <span class="date">{{
              dayjs(articleData.createdAt).format('MMMM DD, YYYY')
            }}</span>
          </div>
          <span v-if="!isAuthor">
            <mcv-follow-to-user :authorData="articleData.author" />
            <mcv-add-to-favorites
              :is-favorited="articleData.favorited"
              :is-favorites-count="articleData.favoritesCount"
              :article-slug="articleData.slug"
              :hasLabel="
                articleData.favorited
                  ? 'Unfavorite Article'
                  : 'Favorite Article'
              "
            />
          </span>
          <span v-if="isAuthor">
            <router-link
              class="btn btn-outline-secondary btn-sm"
              :to="{name: 'editArticle', params: {slug: articleData.slug}}"
            >
              <i class="ion-edit">Edit Article</i>
            </router-link>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="deleteArticle"
            >
              <i class="ion-trash-a">Delete Article</i>
            </button>
          </span>
        </div>
      </div>
    </div>

    <div class="container page">
      <mcv-loading v-if="isLoading" />
      <mcv-error v-if="error" :message="error" />

      <div v-if="articleData" class="row article-content">
        <div class="col-xs-12">
          <p>{{ articleData.body }}</p>
        </div>
        <mcv-tag-list :tags="articleData.tagList" />
      </div>
    </div>

    <hr />

    <mcv-article-comment-form v-if="articleData" :author="articleData.author" />
  </section>
</template>

<script>
import dayjs from 'dayjs'
import {mapState, mapGetters} from 'vuex'
import {actionTypes as articleActionTypes} from '@/store/modules/article'
import {getterTypes as authGetterTypes} from '@/store/modules/auth'
import McvLoading from '@/components/IsLoading'
import McvError from '@/components/IsError'
import McvTagList from '@/components/TagList'
import McvAddToFavorites from '@/components/AddToFavorites'
import McvFollowToUser from '@/components/FollowToUser'
import McvArticleCommentForm from '@/components/ArticleCommentForm'

export default {
  name: 'McvArticle',

  components: {
    McvLoading,
    McvError,
    McvTagList,
    McvAddToFavorites,
    McvFollowToUser,
    McvArticleCommentForm,
  },

  data() {
    return {
      dayjs,
    }
  },

  mounted() {
    this.$store.dispatch(articleActionTypes.getArticle, {
      slug: this.$route.params.slug,
    })
  },

  computed: {
    ...mapState({
      articleData: (state) => state.article.data,
      isLoading: (state) => state.article.isLoading,
      error: (state) => state.article.isError,
    }),

    ...mapGetters({
      currentUser: authGetterTypes.currentUser,
    }),

    isAuthor() {
      if (!this.currentUser || !this.articleData) {
        return false
      }

      return this.currentUser.username === this.articleData.author.username
    },
  },

  methods: {
    deleteArticle() {
      this.$store
        .dispatch(articleActionTypes.deleteArticle, {
          slug: this.$route.params.slug,
        })
        .then(() => this.$router.push({name: 'globalFeed'}))
    },
  },
}
</script>
