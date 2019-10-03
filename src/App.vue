<template>
  <div id="app">
    <navBar></navBar>
    <searchBar></searchBar>
  </div>
</template>

<script>
import navBar from './components/navBar.vue'
import searchBar from './components/search.vue'

export default {
  name: 'app',
  components: {
    navBar, searchBar
  },
}
</script>

<style>
body {
  background: ghostwhite;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
