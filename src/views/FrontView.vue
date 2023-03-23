<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="bg-gray-100 h-screen">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900 mb-4">
        Welcome to News Portal
      </h1>
      <p class="max-w-2xl text-xl text-gray-500 mb-8">
        We bring you the latest news from around the world on sports, games, science, music and more!
      </p>
      <div class="space-x-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue">
          Log in
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue">
          <RouterLink to="/register">Sign up</RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>
