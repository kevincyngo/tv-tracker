<template>
  <div id="app">
    <navBar></navBar>
    <HelloWorld msg="Welcome to Your Vue.js App">
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import navBar from './components/navBar.vue'

export default {
  name: 'app',
  components: {
    HelloWorld, 
    navBar
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
