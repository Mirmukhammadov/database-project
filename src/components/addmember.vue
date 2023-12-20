<template>
  <div class="addmember-div">
    <div class="addmember-top">
      <h2 class="heading2">New member</h2>
      <button @click="$emit('closeModal')" class="paragraph">x</button>
    </div>

    <form action="" class="add-form">
      <label for="name">Client's name</label>
      <input type="text" id="name" v-model="clientName" required />

      <label for="email">Client's email</label>
      <input type="email" id="email" v-model="clientEmail" required />

      <label for="phone">Client's phone</label>
      <input type="number" id="phone" v-model="clientPhone" required />

      <label for="image">Client's image</label>
      <input type="file" accept=".jpg, .jpeg, .png" id="image" required />

      <label for="unit">Client's unit</label>
      <input type="number" id="unit" v-model="clientUnit" required min="0" />

      <button @submit.prevent="getClientvalue()" class="add-member-btn">
        save
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

let clientName = ref();
let clientEmail = ref();
let clientPhone = ref();
let clientUnit = ref();
let clientImage = ref();

function getClientvalue() {
  console.log(
    clientName.value,
    clientEmail.value,
    clientPhone.value,
    clientUnit.value
    // clientImage.value
  );
  console.log("pressed");
}
</script>

<style scoped>
.heading2 {
  color: white;
  font-size: 24px;
  font-family: League Spartan;
  font-weight: 700;
  line-height: 32px;
  word-wrap: break-word;
  display: block;
}

.addmember-div {
  padding: 20px 50px;
  background: #141625;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
}

.addmember-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.paragraph {
  color: white;
  font-size: 24px;
  border: none;
  background: none;
  cursor: pointer;
}
.add-form {
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.add-form > label {
  width: 504px;
  color: #dfe3fa;
  font-size: 13px;
  font-family: League Spartan;
  font-weight: 500;
  line-height: 15px;
  word-wrap: break-word;
  margin: 10px 0px;
}

.add-form > input {
  width: 504px;
  height: 48px;
  background: #1e2139;
  border-radius: 4px;
  border: 1px #252945 solid;
  outline: none;
  color: white;
  font-size: 15px;
  font-family: League Spartan;
  font-weight: 700;
  line-height: 15px;
  word-wrap: break-word;
  padding: 0px 5px;
}

.add-member-btn {
  width: 150px;
  height: auto;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 15px;
  padding: 15px 10px;
  background: #7c5dfa;
  border-radius: 24px;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
