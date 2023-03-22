import axios from "axios";

const apiKey = "2f9fef651d7d4a469839aeeb7af6290a";

export default {
  async fetchArticles(category) {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${apiKey}`
      );
      return response.data.articles;
    } catch (error) {
      throw new Error(`API ${error}`);
    }
  },
};
