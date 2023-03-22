<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">
        <RouterLink to="/">News portal</RouterLink>
      </span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Sports
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Games
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Science
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Music
        </a>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped></style>
