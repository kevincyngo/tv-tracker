<template>
  <div class="air-dates">
      <p> {{previousAirDate}}</p>
      <p> {{nextAirDate}}</p>
  </div>
</template>

<script>
import EpisodesApi from "@/services/api/Episodes.js";

export default {
    name: 'airDates',
    props:[
        "episodeLinks"
    ],

    data() {
        return {
            previousAirDate: "1",
            nextAirDate: "2"
        }
    },
    async mount() {
        if (this.episodeLinks.previousepisode != null) {
                await EpisodesApi.getEpisode(this.episodeLinks.previousepisode.href).then(
                response => {
                    this.previousAirDate = response.airdate;
                });
        }

        if (this.episodeLinks.nextepisode != undefined) {
                await EpisodesApi.getEpisode(this.episodeLinks.nextepisode.href).then(
          response => {
            this.nextAirDate = response.airdate;
          }
        );
      } else {
        this.nextAirDate = "No more episodes."
      }

    },

    methods: {
        async queryPrevEpisode() {
            if (this.episodeLinks.previousepisode != null) {
                await EpisodesApi.getEpisode(this.episodeLinks.previousepisode.href).then(
                response => {
                    this.previousAirDate = response.airdate;
                });
            }
        },
        async queryNextEpisode() {
            if (this.episodeLinks.nextepisode != undefined) {
                await EpisodesApi.getEpisode(this.episodeLinks.nextepisode.href).then(
          response => {
            this.nextAirDate = response.airdate;
          }
        );
      } else {
        this.nextAirDate = "No more episodes."
      }
        }
    }

}
</script>

<style scoped>
</style>