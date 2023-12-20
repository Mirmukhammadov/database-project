<template>
  <div class="container header-div">
    <p class="header-logo">Invoices</p>
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search"
        class="search_input"
      />

      <button class="add-member-btn" @click="$emit('addMemberBtn')">
        Add member
      </button>
    </div>
  </div>
</template>

<style scoped>
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
