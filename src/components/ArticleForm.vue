<template>
  <section class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <mcv-validation-errors v-if="errors" />

          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article title"
                  v-model="title"
                />
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Description"
                  v-model="description"
                />
              </fieldset>

              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  placeholder="What is this article about?"
                  v-model="body"
                ></textarea>
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Enter text"
                  v-model="tagList"
                />
              </fieldset>

              <fieldset class="form-group">
                <button
                  type="submit"
                  class="btn btn-lg btn-xs-right btn-primary"
                  :disable="isSubmitting"
                >
                  Publish article
                </button>
              </fieldset>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import McvValidationErrors from '@/components/ValidationErrors'
export default {
  name: 'McvArticleForm',

  components: {
    McvValidationErrors,
  },

  props: {
    initialValues: {
      type: Object,
      required: true,
    },

    errors: {
      type: Object,
      required: false,
    },

    isSubmitting: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      title: '',
      description: '',
      body: '',
      tagList: '',
    }
  },

  methods: {
    onSubmit() {
      const form = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList,
      }
      this.$emit('articleSubmit', form)
    },
  },
}
</script>
