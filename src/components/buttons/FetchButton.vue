<script>
export default {
  emits: ['requireFetch']
}
</script>

<template>
  <div>
    <button class="contrast"
      @click="this.$emit('requireFetch')">
      Fetch TODO
    </button>
  </div>
</template>
