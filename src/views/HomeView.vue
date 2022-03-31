<template>
  <div class="home">
    <div class="text-center col-12">
      <h1 class="my-5">BERITA TERKINI</h1>      
    </div>
    <div class="container-fluid d-flex flex-wrap row mx-auto">
      <div v-for="(artic, index) in newsList" :key="index" class="col-12 col-sm-6 g-3">
        <div class="card col-12  d-flex flex-column flex-sm-row listNews" @click="toDetail(index)">
          <div class="boxImage col-12 col-sm-4">
            <img :src="artic.urlToImage" alt="Picture here" class="card-img-top">
          </div>
          <div class="m-1 d-flex flex-column justify-content-between p-3 text-truncate text-wrap boxNews">
            <span>{{artic.author}}</span>
            <h5 class="my-2 my-md-0 fw-bold">{{artic.title}}</h5>
            <small class="font-italics text-nowrap"><cite>{{artic.publishedAt}}</cite></small>
          </div>
        </div>
      </div>
      <div class="text-center">
        <h4 v-if="statusData" class="my-5">{{statusData}}</h4>
        <h4 v-else></h4>
      </div>
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
    fetchNews() {
      this.$store.dispatch('fetchList');
    },
    toDetail(newIndex) {
      this.$router.push('/detail');
      this.$store.dispatch('changeIndex', newIndex);
      console.log(newIndex);
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
  cursor: pointer;
}

.boxNews {
  height: 210px;
}

.boxNews h5 {
  height: 60%;
  font: 1.2em sans-serif;
  /* background-color: royalblue; */
  overflow: clip;
}

.boxNews small {
  height: 15%;
  color: rgb(84, 87, 87);
  /* background-color: green; */
  padding: 5px 0;
}

@media only screen and (max-width: 700px) {
  .listNews {
    height: 420px;
    width: 100%;
  }
  .boxImage {
    height: 200px;
  }
}
</style>
