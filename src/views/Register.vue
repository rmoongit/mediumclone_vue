<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign Up</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'login'}">Have an account?</router-link>
          </p>
          <McvValidationErrors
            v-if="validationErrors"
            :validation-errors="validationErrors"
          />
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                v-model="username"
                class="form-control form-control-lg"
                type="text"
                placeholder="Username"
                required
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                v-model="email"
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                v-model="password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                minlength="4"
              />
            </fieldset>
            <button
              :disabled="isSubmitting"
              class="btn btn-lg btn-primary pull-xs-right"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import {mapState} from 'vuex'
import McvValidationErrors from '@/components/ValidationErrors'
import {actionTypes} from '@/store/modules/auth'

export default {
  name: 'McvRegister',

  components: {
    McvValidationErrors,
  },

  data() {
    return {
      email: '',
      password: '',
      username: '',
    }
  },

  computed: {
    // Храним наши функции в mapState и выполняем
    ...mapState({
      isSubmitting: (state) => state.auth.isSubmitting,
      validationErrors: (state) => state.auth.validationErrors,
    }),
  },

  methods: {
    onSubmit() {
      this.$store
        .dispatch(actionTypes.register, {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({name: 'globalFeed'})
        })
    },
  },
}
</script>
