<script>
export default {
  props: {
    article: Object,
  },
};
</script>

<template>
  <div class="h-64 bg-gray-400 flex items-center justify-center">
    <img :src="article.urlToImage" alt="article image" class="w-full h-full object-cover">
  </div>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-2">{{ article.title }}</h1>
    <p class="text-gray-600 mb-2">{{ article.description }}</p>
    <a :href="article.url" class="text-blue-500 hover:underline hover:text-blue-600">Read more</a>
  </div>
</template>
