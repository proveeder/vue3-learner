<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="container">
    <div>
      <h1>TODO LIST</h1>

      <!-- This displays content for current page -->
      <RouterView />
    </div>
  </main>
</template>
