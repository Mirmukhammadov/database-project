<template>
  <div class="signupdiv">
    <form @submit.prevent="signup">
      <h2>Sign Up</h2>
      <label for="username">Username:</label>
      <input type="text" v-model="username" required />

      <label for="email">Email:</label>
      <input type="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Sign Up</button>
    </form>

    <router-link :to="'/login'">
      <button class="signup-paragraph">Do you have a account</button>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import router from "@/router";

const username = ref();
const email = ref();
const password = ref();

function signup() {
  console.log(username.value, email.value, password.value);
  axios
    .post("http://localhost:8080/api/admin/register", {
      name: username.value,
      email: email.value,
      password: password.value,
    })
    .then((response) => {
      console.log(response);

      if (response.status == 200) {
        router.push({ path: "/main" });
      } else {
        alert(response.body.data);
      }
      console.log(response, "response");
    });
}
</script>

<style scoped>
.signupdiv {
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

form > button {
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
}

form > button:hover {
  background-color: #2980b9;
}

.signupdiv {
  margin-top: 150px;
}

.signup-paragraph {
  color: blue;
  text-align: center;
  padding-top: 10px;
  background: none;
  border: none;
  justify-content: center;
  display: flex;
  align-content: center;
  cursor: pointer;
}
</style>
