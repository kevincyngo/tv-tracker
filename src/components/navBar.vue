<template>
  <div class="topnav">
    <router-link class="nav-link" to="/register">Register</router-link>
    <router-link class="nav-link" to="/login">Login</router-link>
    <router-link class="nav-link" to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "navBar",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.topnav {
  background-color: #333;
  overflow: hidden;
  font-family: "PT Sans", sans-serif;
  list-style-type: none;
}

.nav-link {
  float: right;
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 14px 16px;
  font-size: 25px;
}

li:hover:not(.active) {
  background-color: #111;
}

.router-link-exact-active {
  background-color: teal;
}

.active {
  font-size: 255px;
}
</style>