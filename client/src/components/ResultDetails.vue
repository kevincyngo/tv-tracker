<template>
  <div id="result-details">
    <div class="img-container" v-if="image">
      <img v-if="image == default_image" src="../assets/noimage.jpeg" />
      <img v-else :src="image" />
    </div>
    <div class="details-container" v-if="is_data_fetched">
      <h3>{{show.name}}</h3>
      <span v-if="show.summary != null" v-html="show.summary"></span>
      <span v-else>
        <p>Summary not available.</p>
      </span>
      <span v-if="show.status != null">Status: {{show.status}}</span>
      <br>
      <div class="air-dates">
        <span>
          Previous air date: {{previousAirDate}}
          <span v-if="previousAirDate">
            (<a :href="previousEpisodeURL" target="_blank">{{previousEpisodeName}}</a>)
          </span>
        </span>
        <span>
          Next air date: {{nextAirDate}}
          <span v-if="nextEpisodeName != ''">
            (<a :href="nextEpisodeURL" target="_blank">{{nextEpisodeName}}</a>)
          </span>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import EpisodesApi from "@/services/api/Episodes.js";

export default {
  name: "resultDetails",
  props: ["episodeLinks", "show"],
  data() {
    return {
      image: null,
      default_image: '../assets/noimage.jpeg',
      previousAirDate: "",
      previousEpisodeName: "",
      previousEpisodeURL: "",
      nextAirDate: "",
      nextEpisodeName: "",
      nextEpisodeURL: "",
      is_data_fetched: false
    };
  },

  async mounted() {
    if (this.show.image != null) {
      this.image = this.show.image.medium;
    } else {
      this.image = this.default_image;
    }
    //get previous episode
    if (this.episodeLinks.previousepisode != null) {
      await EpisodesApi.getEpisode(this.episodeLinks.previousepisode.href).then(
        response => {
          this.previousEpisodeName = response.name;
          this.previousAirDate = response.airdate;
          this.previousEpisodeURL = response.url;
        }
      );
    }

    //get next episode
    if (this.episodeLinks.nextepisode != undefined) {
      await EpisodesApi.getEpisode(this.episodeLinks.nextepisode.href).then(
        response => {
          this.nextEpisodeName = response.name;
          this.nextAirDate = response.airdate;
          this.nextEpisodeURL = response.url;
        }
      );
    } else {
      this.nextAirDate = "No more episodes.";
    }
    this.is_data_fetched = true;
  }
};
</script>


<style scoped>
#result-details {
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
  margin-right: 10px;
}

.air-dates {
  display: flex;
  flex-direction: column;
}
</style>