<template>
  <section class="home-page">
    BANNER
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed :api-url="apiUrl" />
        </div>
        <div class="col-md-3">POPULAR TEXT</div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

<script>
import McvFeed from '@/components/Feed.vue'

export default {
  name: 'McvGlobalFeed',

  components: {
    McvFeed,
  },

  data() {
    return {
      apiUrl: '/articles',
    }
  },
}
</script>
