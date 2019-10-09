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

    <resultList v-if="shows.length > 0" :shows="shows"></resultList>

  </div>
</template>

<script>
import resultList from "@/components/ResultList.vue";
import EpisodesApi from "@/services/api/Episodes.js";

export default {
  name: "HomePage",
  components: {
    resultList
  },
  data() {
    return {
      query: "",
      shows: []
    };
  },
  methods: {
    searchForShows() {
      EpisodesApi.getShows(this.query).then(shows => {
        this.shows = shows;
      })
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