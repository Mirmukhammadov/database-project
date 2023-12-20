<template>
  <div class="container">
    <div class="div">
      <Cheader @addMemberBtn="addMemberBtn" />
    </div>

    <ul
      class="card__list"
      :class="{ indexHovered: 'addMemberBtnBln' }"
      v-for="item in 6"
    >
      <li class="card__item">
        <p>id</p>
        <p>name</p>
        <p>status</p>
        <p>phone</p>
        <p>unit</p>
        <img src="https://picsum.photos/30/30" class="client-image" />
        <div>
          <button class="delete-btn">delete</button>
          <button class="edit-btn">edit</button>
          <button class="attendance-btn">atten</button>
        </div>
      </li>
    </ul>

    <addmember
      v-if="addMemberBtnBln"
      class="addmemberstyle"
      @closeModal="closeModal"
    />
  </div>
</template>

<script setup>
import index from "../pages/main.vue";
import Cheader from "../components/header.vue";
import login from "../components/login.vue";
import register from "../pages/index.vue";
import addmember from "../components/addmember.vue";
import { ref } from "vue";
import axios from "axios";
const addMemberBtnBln = ref(false);

function addMemberBtn() {
  addMemberBtnBln.value = true;
}

function closeModal() {
  addMemberBtnBln.value = false;
}

axios.get("http://localhost:8080/api/admin/getAllUsers").then((res) => {
  console.log(res.body);
});
</script>

<style scoped>
.div {
  margin: 20px 0px 50px;
  z-index: -1;
}

.addmemberstyle {
  transition: all;
  z-index: 999;
}

.indexHovered {
  z-index: -1;
}

button {
  cursor: pointer;
  border-radius: 4px;
}
.card__item {
  display: flex;
  justify-content: space-around;
  background-color: #1e2139;
  margin-bottom: 10px;
  padding: 15px 15px;
  color: white;
  align-items: center;
}

.card__list {
  width: 100%;
  margin: 0 auto;
}

.delete-btn {
  background: red;
  border: none;
  margin-right: 5px;
  padding: 0px 5px;
}

.edit-btn {
  background: yellow;
  border: none;
  padding: 0px 5px;
  margin-right: 5px;
}

.attendance-btn {
  background: green;
  border: none;
  padding: 0px 5px;
}

.client-image {
  border-radius: 50%;
  object-fit: cover;
}
</style>
