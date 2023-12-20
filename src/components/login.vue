<template>
  <div class="container login-form">
    <form @submit.prevent="login" class="">
      <h2>Login</h2>
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" required />

      <router-link :to="'/main'">
        <button type="submit" class="loginbutton">Login</button>
      </router-link>
    </form>
    <router-link :to="'/'">
      <button class="loginrouterlink">Are you not registered yet</button>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const email = ref();
const password = ref();

function login() {
  console.log(email.value, password.value);
  axios
    .post("http://localhost:8080/api/admin/login", {
      email: email.value,
      password: password.value,
    })
    .then((response) => {
      console.log(response);
    });
}
</script>

<style scoped>
.login-form {
  max-width: 300px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #3498db;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

.loginbutton {
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
}

.loginbutton:hover {
  background-color: #2980b9;
}

.loginrouterlink {
  background: none;
  border: none;
  color: red;
  padding-top: 10px;
  cursor: pointer;
}
</style>
