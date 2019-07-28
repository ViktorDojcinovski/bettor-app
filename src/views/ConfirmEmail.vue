<template>
  <div
    class="alert"
    v-bind:class="{ 'alert-success': !error, 'alert-danger': error }"
  >{{this.message}}</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      token: this.$route.query.token || "",
      message: ""
    };
  },
  methods: {
    ...mapActions(["confirmEmail"])
  },
  computed: {
    ...mapGetters(["error"])
  },
  mounted: function() {
    if (!this.token) {
      this.message = "Invalid URL";
    } else {
      let confirmationToken = {
        token: this.token
      };
      this.confirmEmail(confirmationToken).then(res => {
        this.message = res.data.message;
      });
    }
  }
};
</script>

<style>
</style>
