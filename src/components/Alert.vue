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
    <div>{{ msg }}</div>
  </div>
</template>
