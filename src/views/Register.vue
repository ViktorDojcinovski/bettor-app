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
            <button class="btn btn-primary">Register</button>
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirm_password: ""
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let userData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password
      };
      this.register(userData).then(res => {
        if (res.data.success) {
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>

<style scoped>
.card {
  width: 50%;
}
</style>
