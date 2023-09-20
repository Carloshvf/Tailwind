import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlanView from "../views/PlanView.vue";
import AddOnView from "../views/Add-OnView.vue";
import SummaryView from "../views/SummaryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/plan",
      name: "plan",
      component: PlanView,
    },
    {
      path: "/add-on",
      name: "add-on",
      component: AddOnView,
    },
    {
      path: "/summary",
      name: "summary",
      component: SummaryView,
    },
  ],
});

export default router;
