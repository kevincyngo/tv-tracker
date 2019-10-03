<template>

  <div class="topnav">
  <a @click="selectNav($event)" href="#signup">Sign up</a>
  <a @click="selectNav($event)" href="#login">Log in</a>
  <a @click="selectNav($event)" class="active" href="#home">Home</a>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  props: {
    msg: String
  },
  methods: {
    selectNav(event) {
      document.querySelector(".active").className = "";
      event.target.className = "active";
    }
  }
}
</script>

<style scoped>

.topnav {
    background-color: #333;
    overflow: hidden;
    font-family: 'PT Sans', sans-serif;
  }

.topnav a {
    float: right;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 12px;
}
  


a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: teal;
}
</style>