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

      <div class="card-wrapper" v-if="userComments">
        <div class="card" v-for="comment in userComments" :key="comment">
          <div class="card-block">
            <p class="card-text">
              {{ comment.body }}
            </p>
          </div>
          <div class="card-footer">
            <router-link
              :to="{
                name: 'userProfile',
                params: {slug: comment.author.username},
              }"
              class="comment-author"
            >
              <img :src="comment.author.image" class="comment-author-img" />
            </router-link>
            &nbsp;
            <router-link
              :to="{
                name: 'userProfile',
                params: {slug: comment.author.username},
              }"
              class="comment-author"
            >
              {{ comment.author.username }}
            </router-link>
            <span class="date-posted">{{
              dayjs(comment.createdAt).format('MMMM DD, YYYY')
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import commentFormApi from '@/api/articleCommentForm'
import {actionTypes as commentActionTypes} from '@/store/modules/articleCommentForm'

export default {
  name: 'McvArticleCommentForm',

  data() {
    return {
      dayjs,
      formData: {
        text: '',
      },
      userComments: [],
    }
  },

  props: {
    author: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    this.fetchComments()
  },

  methods: {
    async handlePost() {
      await this.$store.dispatch(commentActionTypes.commentCreate, {
        slug: this.$route.params,
        formData: this.formData.text,
      })

      await this.fetchComments()

      this.formData.text = ''
    },

    async fetchComments() {
      const slug = this.$route.params
      await commentFormApi
        .getComment(slug)
        .then((response) => {
          this.userComments = response.comments
        })
        .catch((error) => console.log('error', error))
    },
  },
}
</script>
