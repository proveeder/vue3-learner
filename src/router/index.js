import { createRouter, createWebHistory } from "vue-router";
import FrontView from "../views/FrontView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "frontpage",
      component: FrontView,
    },
    {
      path: "/sports",
      name: "sports",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SportsView.vue"),
    },
    {
      path: "/entertainment",
      name: "erntertainment",
      component: () => import("../views/EntertainmentView.vue"),
    },
    {
      path: "/science",
      name: "science",
      component: () => import("../views/ScienceView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
  ],
});

export default router;
