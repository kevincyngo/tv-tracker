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
  </div>
</template>

<script>
export default {
    name: 'HomePage',
  data() {
    return {
      query: ""
    };
  },
  methods: {
    searchForShows() {
      const Http = new XMLHttpRequest();
      const url = "http://api.tvmaze.com/search/shows?q=" + this.query;
      Http.open("GET", url);
      Http.responseType = "json";
      Http.send();

      Http.onload = function() {
        let responseObj = Http.response;
        console.log(responseObj); // Hello, world!
      };
    }
  }
};
</script>

<style scoped>
.search-container {
  margin-top: 10%;
  text-align: center;
  font-size: 15px;
}

#search-bar {
  font-size: 20px;
  font-family: "Oswald", sans-serif;
  width: 500px;
  border-radius: 5px;
  padding: 3px;
}
</style>