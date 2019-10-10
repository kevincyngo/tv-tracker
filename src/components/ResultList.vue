<template>
  <div class="results">
    <div v-for="(show) in shows" class="search-results" :key="show.id">
      <div class="container">
        <div class="img-container">
          <img v-if="show.show.image != null" :src="show.show.image.medium" />
        </div>
        <div class="details-container">
          <h3>{{show.show.name}}</h3>
          <span v-if="show.show.summary != null" v-html="show.show.summary"></span>
          <span v-else><p>Summary not available.</p></span>
          <span v-if="show.show.status != null"> Status: {{show.show.status}}</span>
          <p v-if="show.show.status != 'Ended' && show.show.status != null">
              <airDates :episodeLinks="show.show._links"></airDates>

          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EpisodesApi from "@/services/api/Episodes.js";
import airDates from "@/components/AirDates.vue";

export default {
  name: "resultList",
  components: {
      airDates
  },
  props: ["shows"],
  async mounted() {
    for (var show of this.shows) {
      if (show.show._links.previousepisode != null) {
        EpisodesApi.getEpisode(show.show._links.previousepisode.href).then(
          response => {
            this.prevResponse.push(response.airdate);
          }
        );
      }
      if (show.show._links.nextepisode != undefined) {
        await EpisodesApi.getEpisode(show.show._links.nextepisode.href).then(
          response => {
            this.nextEpisode.push(response.airdate);
          }
        );
      } else {
        this.nextEpisode.push("N/A");
      }
      
    }
  },

  data() {
    return {
      nextEpisode: [],
      prevResponse: []
    };
  },
  methods: {
    async loadData() {
    for (var show of this.shows) {
      if (show.show._links.previousepisode != null) {
        await EpisodesApi.getEpisode(show.show._links.previousepisode.href).then(
          response => {
            this.prevResponse.push(response.airdate);
          }
        );
      }
      if (show.show._links.nextepisode != undefined) {
        await EpisodesApi.getEpisode(show.show._links.nextepisode.href).then(
          response => {
            this.nextEpisode.push(response.airdate);
          }
        );
      } else {
        this.nextEpisode.push("N/A");
      }
    }
  }
  }
};
</script>

<style scoped>
.search-results {
  text-align: left;
  margin: 40px 20px 40px 20px;
}

.container {
  border: 1px solid black;
  display: flex;
  flex-direction: row;
}

.img-container {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.details-container {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}


</style>