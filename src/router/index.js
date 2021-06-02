import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/list.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/coupon",
    name: "coupon",
    component: () => import("../views/coupon"),
  },
  {
    path: "/order",
    name: "order",
    component: () => import("../views/order"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
