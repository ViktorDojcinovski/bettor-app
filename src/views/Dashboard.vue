<template>
  <div>
    <h2>Dashboard</h2>
    <div class="row">
      <div class="col-lg-8 col-sm-12">
        <Table />
      </div>
      <div class="col-lg-4 col-sm-12">
        <Calculator />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Table from "@/components/Table";
import Calculator from "@/components/Calculator";

export default Vue.extend({
  name: "dashboard",
  components: {
    Table,
    Calculator
  }
});
</script>

<style lang="scss">
h5 {
  font-size: 24px;
  text-align: left;
  margin: 20px 0;
}
</style>
