<template>
  <div class="home">
    <div class="text-center col-12">
      <h1 class="my-5">Berita Terkini</h1>      
    </div>
    <div class="container-fluid d-flex flex-wrap row mx-auto">
      <div v-for="(artic, index) in newsList" :key="index" class="col-12 col-sm-6 g-3">
        <div class="card col-12  d-flex flex-column flex-sm-row listNews">
          <div class="boxImage col-12 col-sm-4">
            <img :src="artic.urlToImage" alt="Picture here" class="card-img-top">
          </div>
          <div class="m-1 d-flex flex-column justify-content-between p-3 text-truncate text-wrap">
            <span>{{artic.author}}</span>
            <h5>{{artic.title}}</h5>
            <p>{{artic.publishedAt}}</p>
          </div>
        </div>
    </div>
    <p>{{statusData}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  computed: {
    newsList() {
      return this.$store.state.articles;
    },
    statusData() {
      return this.$store.state.statusPage;
    }
  },
  methods: {
    fetchNews(){
      this.$store.dispatch('fetchList');
    }
  },
  mounted() {
    this.fetchNews();
  }
}
</script>

<style scoped>
.boxImage img {
  height: 100%;
}

.listNews {
  background-color: rgb(241, 175, 168);
  height: 200px;
  box-sizing: border-box;
}

@media only screen and (max-width: 700px) {
  .listNews {
    height: 420px;
    width: 100%;
  }
}
</style>
