<template>
  <div>
    <input
      type="text"
      :placeholder="placeholder"
      :value="value"
      :format="format"
      @change="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "odd",
  props: ["placeholder", "value", "format"]
};
</script>

<style>
</style>
