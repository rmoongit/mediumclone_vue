<template>
  <mcv-article-form
    :initial-values="initialValues"
    :errors="getErrorValidation"
    :is-submitting="isSubmitting"
    @articleSubmit="onSubmit"
  />
</template>

<script>
import McvArticleForm from '@/components/ArticleForm'

export default {
  name: 'McvCreateArticle',

  components: {
    McvArticleForm,
  },

  data() {
    return {
      getErrorValidation: null,
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
      isSubmitting: false,
    }
  },

  methods: {
    onSubmit(data) {
      console.log('on submit article', data)
    },
  },
}
</script>
