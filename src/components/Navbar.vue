<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Home</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/login">
            Login
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/register">
            Register
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/dashboard">
            Dashboard
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/dashboard">
            Logout
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  }
};
</script>

<style>
</style>
