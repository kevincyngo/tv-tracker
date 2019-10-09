<template>
  <div class="search-container">
    <div class="logo">
      <img src="../assets/placeholder-homepage-logo.png" />
    </div>
    <div class="search">
      <input
        id="search-bar"
        v-on:keyup.enter="searchForShows()"
        v-model="query"
        type="text"
        placeholder="Search for tv show..."
      />
    </div>

    <resultList :responseTxt="responseObj"></resultList>

  </div>
</template>

<script>
import resultList from "@/components/ResultList.vue";

export default {
  name: "HomePage",
  components: {
    resultList
  },
  data() {
    return {
      query: "",
      responseObj: ""
    };
  },
  methods: {
    searchForShows() {
      const Http = new XMLHttpRequest();
      const url = "http://api.tvmaze.com/search/shows?q=" + this.query;
      console.log(url);
      Http.open("GET", url);
      Http.responseType = "json";
      Http.send();
      Http.onload = () => {
        this.responseObj = Http.response;
      };
    }
  }
};
</script>

<style scoped>


.search-container {
  text-align: center;
  font-size: 15px;
}

#search-bar {
  font-size: 24px;
  font-family: "Oswald", sans-serif;
  width: 800px;
  border-radius: 5px;
  padding: 15px;
}
</style>