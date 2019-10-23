<template>
  <div class="register">
    <div class="logo">
      <img src="../assets/placeholder-homepage-logo.png" />
    </div>
    <form method="post" action="http://localhost:3000/api/users">
      <div class="container">
        <h1>Sign Up</h1>
        <hr />

        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="password">
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" name="password" required />

        <label for="password-repeat">
          <b>Repeat Password</b>
        </label>
        <input type="password" placeholder="Repeat Password" name="password-repeat" required />

        <div class="clearfix">
          <button type="submit" class="signupbtn">Sign Up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      title: "Register For Account"
    };
  }
};
</script>

<style scoped>


* {
  box-sizing: border-box;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: lightblue;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

/* Float cancel and signup buttons and add an equal width */
.signupbtn {
  float: center;
  width: 100%;
}

/* Add padding to container elements */
.container {
  border: 1px solid black;
  border-radius: 10px;
  padding: 16px;
  width: 30%;
  margin: auto;
  text-align:left;

}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

h1 {
  text-align:center;
}
</style>