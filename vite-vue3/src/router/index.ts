import { createWebHistory, createRouter, RouteRecordRaw, } from "vue-router";

import Layout from "../layout/index.vue";

const routes: RouteRecordRaw[] = [
  {
    component: () => import("../views/Login/index.vue"),
    path: "/login"
  },
  {
    component: () => import("../views/Regist/index.vue"),
    path: "/regist"
  },
  {
    component: Layout,
    path: "/",
    children: [
      {
        component: () => import("../views/Home/index.vue"),
        path: "/",
        alias: "home"
      },
      {
        component: () => import("../views/Home/index.vue"),
        path: "home",
      },
      {
        component: () => import("../views/Cart/index.vue"),
        path: "cart",
      },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router