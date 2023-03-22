import axios from "axios";

const apiKey = "2f9fef651d7d4a469839aeeb7af6290a"; // Replace with your NewsAPI API Key

export default {
  async fetchArticles() {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
      );
      return response.data.articles;
    } catch (error) {
      throw new Error(`API ${error}`);
    }
  },
};
