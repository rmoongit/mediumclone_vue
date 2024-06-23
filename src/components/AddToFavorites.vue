<template>
  <button
    class="btn btn-sm"
    :class="{
      'btn-primary': isFavoritedOptimistic,
      'btn-outline-primary': !isFavoritedOptimistic,
    }"
    @click="handleLike"
  >
    <i class="ion-heart" />
    <span
      >&nbsp; <span v-if="hasLabel">{{ updateHasLabel }}</span>
      {{ isFavoritesCountOptimistic }}</span
    >
  </button>
</template>

<script>
import {actionTypes} from '@/store/modules/addToFavorites'

export default {
  name: 'McvAddToFavorites',

  props: {
    isFavorited: {
      type: Boolean,
      required: true,
    },

    isFavoritesCount: {
      type: Number,
      required: true,
    },

    articleSlug: {
      type: String,
      required: true,
    },

    hasLabel: {
      type: String,
      required: false,
      default: '',
    },
  },

  data() {
    return {
      isFavoritesCountOptimistic: this.isFavoritesCount,
      isFavoritedOptimistic: this.isFavorited,

      updateText: this.hasLabel,
    }
  },

  methods: {
    handleLike() {
      this.$store.dispatch(actionTypes.addToFavorite, {
        slug: this.articleSlug,
        isFavorited: this.isFavoritedOptimistic,
      })

      if (this.isFavoritedOptimistic) {
        this.isFavoritesCountOptimistic = this.isFavoritesCountOptimistic - 1
      } else {
        this.isFavoritesCountOptimistic = this.isFavoritesCountOptimistic + 1
      }

      this.isFavoritedOptimistic = !this.isFavoritedOptimistic
    },
  },

  computed: {
    updateHasLabel() {
      return this.isFavoritedOptimistic
        ? 'Unfavorite Article'
        : 'Favorite Article'
    },
  },
}
</script>
