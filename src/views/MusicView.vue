<script>
import NewsApi from "../services/NewsApi";
import ArtcilesList from "../components/ArticlesListComponent.vue";

export default {
  components: { ArtcilesList },
  data() {
    return {
      articles: [],
    };
  },
  async mounted() {
    this.articles = await NewsApi.fetchArticles();
  },
};
</script>

<template>
  <ArtcilesList :articles="articles" />
</template>
e>