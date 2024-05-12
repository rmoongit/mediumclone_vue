<template>
  <section class="home-page">
    <mcv-banner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed :api-url="tagUrl" />
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
  name: 'McvTagFeed',

  components: {
    McvFeed,
    McvPopularTags,
    McvBanner,
  },

  computed: {
    //Получаем новый Url тегов
    tagUrl() {
      const tagName = this.$route.params.slug
      return `/articles?tag=${tagName}`
    },
  },
}
</script>
