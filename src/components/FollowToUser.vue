<template>
  <button class="btn btn-sm btn-outline-secondary" @click="followHandler">
    <i class="ion-plus-round"></i>
    &nbsp; {{ isFollowedOptimistic ? 'Unfollow from' : 'Follow to' }}
    {{ authorData.username }}
  </button>
</template>

<script>
import {actionTypes as followTypes} from '@/store/modules/followToUser'

export default {
  name: 'McvFollowToUser',

  data() {
    return {
      isFollowedOptimistic: this.authorData.following,
    }
  },

  props: {
    authorData: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async followHandler() {
      const authorOfArticle = this.authorData.username

      if (this.isFollowedOptimistic) {
        await this.$store.dispatch(followTypes.unFollowFromUser, {
          slug: authorOfArticle,
        })
      } else {
        await this.$store.dispatch(followTypes.followToUser, {
          slug: authorOfArticle,
        })
      }

      this.isFollowedOptimistic = !this.isFollowedOptimistic
    },
  },
}
</script>
