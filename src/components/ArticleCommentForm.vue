<template>
  <div class="row">
    <div class="col-xs-12 col-md-8 offset-md-2">
      <form class="card comment-form" @submit.prevent="handlePost">
        <div class="card-block">
          <textarea
            v-model="formData.text"
            class="form-control"
            placeholder="Write a comment..."
            rows="3"
          ></textarea>
        </div>
        <div class="card-footer">
          <img :src="author.image" class="comment-author-img" />
          <button class="btn btn-sm btn-primary">Post Comment</button>
        </div>
      </form>

      <!-- <div class="card">
        <div class="card-block">
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
        <div class="card-footer">
          <a href="/profile/author" class="comment-author">
            <img
              src="http://i.imgur.com/Qr71crq.jpg"
              class="comment-author-img"
            />
          </a>
          &nbsp;
          <a href="/profile/jacob-schmidt" class="comment-author"
            >Jacob Schmidt</a
          >
          <span class="date-posted">Dec 29th</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import {actionTypes as commentActionTypes} from '@/store/modules/articleCommentForm'

export default {
  name: 'McvArticleCommentForm',

  data() {
    return {
      formData: {
        text: '',
      },
    }
  },

  props: {
    author: {
      type: Object,
      required: true,
    },
  },

  methods: {
    handlePost() {
      this.$store.dispatch(commentActionTypes.commentCreate, {
        slug: this.$route.params,
        formData: this.formData.text,
      })

      this.formData.text = ''
    },
  },
}
</script>
