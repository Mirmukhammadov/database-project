import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("users", () => {
  const clientInfo = ref([]);
  const setClientInfo = (data) => {
    clientInfo.value = data;
  };

  return { clientInfo, setClientInfo };
});
