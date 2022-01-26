import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TrailsNew from "../views/TrailsNew.vue";
import TrailsIndex from "../views/TrailsIndex.vue";
import TrailsShow from "../views/TrailsShow.vue";
import TrailsEdit from "../views/TrailsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/trails/new",
    name: "trails-new",
    component: TrailsNew,
  },
  {
    path: "/trails",
    name: "trails-index",
    component: TrailsIndex,
  },
  {
    path: "/trails/:id",
    name: "trails-show",
    component: TrailsShow,
  },
  {
    path: "/trails/:id/edit",
    name: "trails-edit",
    component: TrailsEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
