<template>
  <section class="home-page">
    <mcv-banner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed :api-url="articlesUrl" />
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

export default {
  name: 'McvGlobalFeed',

  components: {
    McvFeed,
    McvPopularTags,
    McvBanner,
  },

  data() {
    return {
      articlesUrl: '/articles',
    }
  },
}
</script>
