<template>
  <div>
    <input
      type="text"
      :placeholder="placeholder"
      :value="value"
      @change="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "odd",
  props: ["placeholder", "value"]
};
</script>

<style>
</style>
