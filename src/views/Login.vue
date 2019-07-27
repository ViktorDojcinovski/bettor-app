<template>
  <div>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Login</h4>
        </div>
        <div class="card-body">
          <form>
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
            <button class="btn btn-primary">Login</button>
            <small class="p-4">
              <router-link to="/register">Register?</router-link>
            </small>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      password: ""
    };
  },
  methods: {}
};
</script>

<style scoped>
.card {
  width: 60%;
}
</style>
