import { createStore } from 'vuex';
import axios from 'axios';

// const API_KEY = 'a1723647754841d0ac7be4cf26cc87f0';

export default createStore({
  state: {
    articles: [],
    statusPage: '',
  },
  getters: {
  },
  mutations: {
    setNews(state, payload) {
      state.articles = payload;
    },
    setStatus(state, payload) {
      state.statusPage = payload;
  },
  },
  actions: {
    fetchList(store) {
      axios
        .get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=a1723647754841d0ac7be4cf26cc87f0`)
        .then((response) => {
          store.commit("setNews", response.data.articles);
        })
        .catch((error) => {
          store.commit("setStatus", error);
        });
  },
  },
  modules: {
  }
})
