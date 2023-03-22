<script>
import NewsApi from "../services/NewsApi";
import DisplayArticleComponent from "../components/DisplayArticleComponent.vue";

export default {
  components: { DisplayArticleComponent },
  data() {
    return {
      news: [],
    };
  },
  async mounted() {
    try {
      this.news = await NewsApi.fetchArticles();
      console.log(this.news);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="news.length === 0" class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="h-64 bg-gray-400 flex items-center justify-center">
          <h1>Loading, please wait</h1>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div v-for="article in news" :key="article.id" class="bg-white rounded-lg shadow-lg overflow-hidden">
          <DisplayArticleComponent :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>
