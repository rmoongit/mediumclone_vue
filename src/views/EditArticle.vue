<template>
  <div>
    <mcv-loading v-if="isLoading" />
    <mcv-article-form
      v-if="initialValues"
      :initial-values="initialValues"
      :errors="validationErrors"
      :is-submitting="isSubmitting"
      @articleSubmit="onSubmit"
    />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/editArticle'
import McvArticleForm from '@/components/ArticleForm'
import McvLoading from '@/components/IsLoading'

export default {
  name: 'McvEditArticle',

  components: {
    McvArticleForm,
    McvLoading,
  },

  computed: {
    ...mapState({
      isSubmitting: (state) => state.editArticle.isSubmitting,
      validationErrors: (state) => state.editArticle.validationErrors,
      isLoading: (state) => state.editArticle.isLoading,
      article: (state) => state.editArticle.article,
    }),

    initialValues() {
      if (!this.article) {
        return null
      }

      return {
        title: this.article.title,
        description: this.article.description,
        body: this.article.body,
        tagList: this.article.tagList,
      }
    },
  },

  mounted() {
    this.$store.dispatch(actionTypes.getArticle, {
      slug: this.$route.params.slug,
    })
  },

  methods: {
    onSubmit(articleInput) {
      const slug = this.$route.params.slug

      this.$store
        .dispatch(actionTypes.updateArticle, {slug, articleInput})
        .then((article) => {
          this.$router.push({name: 'article', params: {slug: article.slug}})
        })
    },
  },
}
</script>
