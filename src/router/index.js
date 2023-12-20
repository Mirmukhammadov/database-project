import { createRouter, createWebHistory } from "vue-router";
import home from "../pages/main.vue";
import register from "../pages/index.vue";
import login from "../components/login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/main",
      name: "home",
      component: home,
    },
    {
      path: "/",
      name: "register",
      component: register,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },

    {
      path: "/login",
      name: "login",
      component: login,
    },
  ],
});

export default router;
