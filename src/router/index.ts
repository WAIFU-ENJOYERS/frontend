import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import S3Demo from "../views/S3Demo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/s3demo",
      name: "s3demo",
      component: S3Demo,
    },
    
  ],
});

export default router;
