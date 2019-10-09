<template>
  <div class="results">
    <div v-for="item in responseTxt" class="search-results">
      <div class="container">
        <div class="img-container">
          <img v-if="item.show.image != null" :src="item.show.image.medium" />
          
        </div>
        <div class="details-container"> <h2>{{item.show.name}}</h2>
            <span v-html="item.show.summary"></span>
            {{item.show}}
            <!-- show next episode (need to get another API call) -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resultList",
  props: ["responseTxt"]
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