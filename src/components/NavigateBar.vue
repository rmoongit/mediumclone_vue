<template>
  <header>
    <nav class="navbar navbar-light">
      <div class="container">
        <router-link class="navbar-brand" :to="{name: 'globalFeed'}"
          >conduit</router-link
        >

        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{name: 'globalFeed'}"
              active-class="active"
              exact
            >
              Home
            </router-link>
          </li>

          <template v-if="isLogin"
            ><li class="nav-item">
              <router-link
                class="nav-link"
                :to="{name: ''}"
                active-class="active"
              >
                <i class="ion-compose"></i> &nbsp; New article
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{name: ''}"
                active-class="active"
              >
                <i class="ion-gear-a"></i> &nbsp; Settings
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{name: '', params: {slug: user.username}}"
              >
                <img class="user-pic" :src="this.user.image" /> &nbsp;
                {{ this.user.username }}
              </router-link>
            </li>
          </template>

          <template v-if="isAnonymous">
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{name: 'login'}"
                active-class="active"
              >
                Sign in
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{name: 'register'}"
                active-class="active"
              >
                Sign up
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>

<script>
import {mapGetters} from 'vuex'
import {getterTypes} from '@/store/modules/auth'

export default {
  name: 'McvNavigateBar',

  computed: {
    ...mapGetters({
      isLogin: getterTypes.isLoggedIn,
      user: getterTypes.currentUser,
      isAnonymous: getterTypes.isAnonymous,
    }),
  },
}
</script>
