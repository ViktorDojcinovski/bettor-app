<template>
  <div>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Register</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                id="firstname"
                type="text"
                placeholder="name"
                name="firstname"
                v-model="firstname"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="name">Lastname</label>
              <input
                id="lastname"
                type="text"
                placeholder="lastname"
                name="lastname"
                v-model="lastname"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="name">Email</label>
              <input
                id="email"
                type="email"
                placeholder="email"
                name="email"
                v-model="email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="name">Username</label>
              <input
                id="username"
                type="text"
                placeholder="username"
                name="username"
                v-model="username"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="name">Password</label>
              <input
                id="password"
                type="password"
                placeholder="password"
                name="password"
                v-model="password"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="name">Confirm password</label>
              <input
                id="confirm_password"
                type="password"
                placeholder="confirm password"
                name="confirm_password"
                v-model="confirm_password"
                class="form-control"
              />
            </div>
            <vue-recaptcha
              :sitekey="this.captcha_key"
              :loadRecaptchaScript="true"
              @verify="verifyRecaptcha"
            ></vue-recaptcha>
            <button :disabled="!this.recaptcha_verified" class="btn btn-primary">Register</button>
            <small class="p-4">
              <router-link to="/login">Already have account?</router-link>
            </small>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
import VueHead from "vue-head";
import VueRecaptcha from "vue-recaptcha";

Vue.use(VueHead);

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      recaptcha_verified: false,
      captcha_key: process.env.VUE_APP_SITE_KEY_GOOGLE_RECAPTCHA
    };
  },
  components: {
    VueRecaptcha
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let userData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password
      };
      this.register(userData);
    },
    verifyRecaptcha() {
      this.recaptcha_verified = true;
    }
  },
  mounted: function() {
    console.log(this.captcha_key);
  }
};
</script>

<style scoped>
.card {
  width: 50%;
}
</style>
