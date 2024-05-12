<template>
  <section class="home-page">
    <mcv-banner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed-toggler />
          <mcv-feed :api-url="feedUrl" />
        </div>
        <div class="col-md-3">
          <mcv-popular-tags />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

<script>
import McvBanner from '@/components/MainBanner'
import McvFeed from '@/components/Feed.vue'
import McvPopularTags from '@/components/PopularTags'
import McvFeedToggler from '@/components/FeedToggler'

export default {
  name: 'McvYourFeed',

  components: {
    McvFeed,
    McvPopularTags,
    McvBanner,
    McvFeedToggler,
  },

  data() {
    return {
      feedUrl: '/articles/feed',
    }
  },
}
</script>
