<template>
  <div class="hello">
    <h1>Register</h1>
    <input
    type="email"
    name="email"
    v-model="email"
    placeholder="Enter email"
    id="email">
    <br/>
    <input
    type="password"
    name="password"
    v-model="password"
    placeholder="Enter password"
    id="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
// import AuthenticationService from '@services/AuthenticationService'
import AuthenticationService from '../services/AuthenticationService'
/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
  //   watch: {
  //     email(value) {
  //       console.log('email has changed', value)
  //     }
  //   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
