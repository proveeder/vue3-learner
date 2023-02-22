<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="alert">
    {{ msg }}
  </div>
</template>

<style scoped>
.alert {
  background-color: #f44336;
  color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 7px;
}
</style>
