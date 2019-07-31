<template>
  <div id="app">
    <Navbar msg="Welcome to Your Vue.js + TypeScript App" />
    <Errors v-if="this.error" :msg="error" />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapGetters } from "vuex";

import Navbar from "@/components/Navbar";
import Errors from "@/components/Errors";

export default Vue.extend({
  name: "app",
  components: {
    Navbar,
    Errors
  },
  computed: {
    ...mapGetters(["error"])
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
