<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- Content that will be displayed app-wide -->
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">First page</RouterLink>
        <br>
        <RouterLink to="/second">Second page</RouterLink>
      </nav>
    </div>
  </header>

  <!-- This displays content for current page -->
  <RouterView />
</template>

<style scoped>
</style>
