<template>
  <div class="results">
    <div v-for="(show) in shows" class="search-results" :key="show.show.id" v-cloak>
      <resultDetails :episodeLinks="show.show._links" :show="show.show"></resultDetails>
    </div>
  </div>
</template>

<script>
import resultDetails from "@/components/ResultDetails.vue";

export default {
  name: "resultList",
  components: {
    resultDetails
  },
  props: ["shows"],
  data() {
    return {
      nextEpisode: [],
      prevResponse: []
    };
  }
};
</script>

<style scoped>
.search-results {
  text-align: left;
  margin: 40px 20px 40px 20px;
}

</style>