<template>
  <div class="container">
    <div class="div">
      <Cheader @addMemberBtn="addMemberBtn" />
    </div>

    <ul
      class="card__list"
      :class="{ indexHovered: 'addMemberBtnBln' }"
      v-for="obj in clientInfo"
      :key="obj.id"
    >
      <li class="card__item">
        <p>{{ obj.id }}</p>
        <img src="https://picsum.photos/30/30" class="client-image" />
        <p>{{ obj.name }}</p>
        <p>{{ obj.number }}</p>
        <p>{{ obj.email }}</p>
        <p>{{ obj.isActive }}</p>
        <p>{{ obj.unit }}</p>

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
import { ref, onMounted } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/users";

const userStore = useUserStore();
// const clientInfo = userStore.clientInfo;
const clientInfo = [
  {
    id: 1,
    email: "2110117@neewuu.uz",
    image: null,
    isActive: true,
    name: "Davron",
    number: 1234567,
    unit: 40,
  },
  {
    email: "2110118@neewuu.uz",
    id: 2,
    image: null,
    isActive: true,
    name: "Ismoil",
    number: 122112,
    unit: 32,
  },
];
const addMemberBtnBln = ref(false);

function addMemberBtn() {
  addMemberBtnBln.value = true;
}
function closeModal() {
  addMemberBtnBln.value = false;
}

onMounted(() => {
  axios.get("http://localhost:8080/api/admin/getAllUsers").then((res) => {
    userStore.setClientInfo(res.data);
  });
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
