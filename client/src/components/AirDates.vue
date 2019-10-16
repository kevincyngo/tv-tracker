<template>
  <div v-cloak class="air-dates">
    <span v-cloak >
      Previous air date: {{previousAirDate}} 
      <span v-if="previousAirDate">
      (<a :href="previousEpisodeURL" target="_blank">{{previousEpisodeName}}</a>)
      </span>
    </span>
    <br />
    <span v-cloak >
      Next air date: {{nextAirDate}}
      <span v-if="nextEpisodeName != ''">
        (<a :href="nextEpisodeURL" target="_blank">{{nextEpisodeName}}</a>)
      </span>
    </span>
  </div>
</template>

<script>
import EpisodesApi from "@/services/api/Episodes.js";

export default {
  name: "airDates",
  props: ["episodeLinks"],

  data() {
    return {
      previousAirDate: "",
      previousEpisodeName: "",
      previousEpisodeURL: "",
      nextAirDate: "",
      nextEpisodeName: "",
      nextEpisodeURL: ""
    };
  },
  async mounted() {
    if (this.episodeLinks.previousepisode != null) {
      await EpisodesApi.getEpisode(this.episodeLinks.previousepisode.href).then(
        response => {
          this.previousEpisodeName = response.name;
          this.previousAirDate = response.airdate;
          this.previousEpisodeURL = response.url;
        }
      );
    }

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
  }
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>