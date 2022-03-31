<template>
  <div class="detail container-xxl">
    <div class="justify-content-center overflow-hidden boxImg">
      <div class="h-100 text-center">
        <img :src="newsList[currentIndex].urlToImage" alt="Banner here">
      </div>
    </div>
    <div>
      <div class="boxJudul p-2">
        <h4 class="pb-2">{{newsList[currentIndex].title}}</h4>
        <div class="d-flex justify-content-between">
          <span>{{newsList[currentIndex].author}}</span>
          <span><cite>{{newsList[currentIndex].publishedAt}}</cite></span>
        </div>
      </div>
      <div class="px-2 pb-5 pt-3">
        <span>Descripsi :</span>
        <p class="descripsi-news">{{newsList[currentIndex].content}}</p>
        <p>Lanjut cara <a :href="newsList[currentIndex].url">Disini</a></p>
        <div class="pb-5">
          <button @click="toHome('/')" class="btn btn-danger my-4">Kembali</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewsDetail',
  methods: {
    toHome(path) {
      this.$router.push(path);
    }
  },
  computed: {
    newsList() {
      return this.$store.state.articles;
    },
    currentIndex() {
      return this.$store.state.index;
    }
  }

}
</script>

<style scoped>
.descripsi-news {
  text-align: justify;
}
.boxImg {
  background-color: rgb(31, 29, 29);
  width: 100%;
  height: auto;
}
img {
  width: 50%;
  height: auto;
}
.boxJudul {
  background-color: royalBlue;
  color: aliceblue;
}

@media only screen and (max-width: 700px) {
  .boxImg {
    background-color: rgb(31, 29, 29);
    width: 100%;
    height: auto;
  }
  img {
    width: 100%;
    height: auto;
  }
}
</style>



