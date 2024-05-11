<template>
  <section class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
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
import McvFeed from '@/components/Feed.vue'
import McvPopularTags from '@/components/PopularTags'

export default {
  name: 'McvGlobalFeed',

  components: {
    McvFeed,
    McvPopularTags,
  },

  data() {
    return {
      articlesUrl: '/articles',
    }
  },
}
</script>
