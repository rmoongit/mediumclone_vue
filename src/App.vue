<template>
  <McvNavigateBar />
  <RouterView />
</template>

<style scoped></style>

<script>
import {actionTypes} from './store/modules/auth'
import McvNavigateBar from '@/components/NavigateBar'

export default {
  name: 'McvApp',

  components: {
    McvNavigateBar,
  },

  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  },
}
</script>
