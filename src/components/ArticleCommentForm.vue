<template>
  <div class="row">
    <div class="col-xs-12 col-md-8 offset-md-2">
      <mcv-validation-errors
        v-if="commentError"
        :validationErrors="commentError"
      />
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
        <div
          class="card"
          v-for="comment in sortedCommentsByDate"
          :key="comment"
        >
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
            <span class="mod-options">
              <i class="ion-trash-a" @click="handlePostDelete(comment.id)"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import {mapState} from 'vuex'
import commentFormApi from '@/api/articleCommentForm'
import {actionTypes as commentActionTypes} from '@/store/modules/articleCommentForm'
import McvValidationErrors from '@/components/ValidationErrors'

export default {
  name: 'McvArticleCommentForm',

  components: {
    McvValidationErrors,
  },

  data() {
    return {
      dayjs,
      slug: this.$route.params,

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

  computed: {
    ...mapState({
      commentError: (state) => state.articleCommentForm.validationErrors,
    }),

    sortedCommentsByDate() {
      return this.userComments
        .slice()
        .sort(
          (itemA, itemB) =>
            new Date(itemB.createdAt) - new Date(itemA.createdAt)
        )
    },
  },

  methods: {
    async handlePost() {
      await this.$store.dispatch(commentActionTypes.commentCreate, {
        slug: this.slug,
        formData: this.formData.text,
      })

      this.fetchComments()

      this.formData.text = ''
    },

    async handlePostDelete(commentId) {
      if (commentId) {
        await this.$store.dispatch(commentActionTypes.commentDelete, {
          slug: this.slug,
          id: commentId,
        })

        this.fetchComments()
      }
      return
    },

    fetchComments() {
      commentFormApi.getComment(this.slug).then((response) => {
        this.userComments = response.comments
      })
    },
  },
}
</script>
