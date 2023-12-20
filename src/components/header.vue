<template>
  <div class="container header-div">
    <p class="header-logo">Fitness</p>
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search"
        class="search_input"
      />

      <button class="transaction-btn">Transaction</button>

      <button class="add-member-btn" @click="$emit('addMemberBtn')">
        Add member
      </button>
    </div>
  </div>
</template>

<style scoped>
.transaction-btn {
  width: 100px;
  height: auto;
  padding: 10px;
  border-radius: 24px;
  color: white;
  background: green;
  border: none;
  cursor: pointer;
  margin-right: 15px;
}
.add-member-btn {
  width: 150px;
  height: auto;
  padding: 10px;
  background: #7c5dfa;
  border-radius: 24px;
  color: white;
  border: none;
  cursor: pointer;
}

.header-div {
  display: flex;
  justify-content: space-between;
}

.header-logo {
  color: white;
  font-size: 36px;
  font-family: League Spartan;
  font-weight: 700;
  word-wrap: break-word;
}

.search_input {
  margin-right: 20px;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 24px;
  outline: none;
}
</style>
