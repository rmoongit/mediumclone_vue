<template>
  <McvNavigateBar />
  <RouterView />
</template>

<style scoped></style>

<script>
import McvNavigateBar from '@/components/NavigateBar'

export default {
  name: 'McvApp',

  components: {
    McvNavigateBar,
  },
}
</script>
