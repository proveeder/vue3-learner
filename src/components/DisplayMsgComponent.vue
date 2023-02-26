<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <p class="text-red-600">{{ msg }}</p>
  </div>
</template>

<style scoped>
</style>
