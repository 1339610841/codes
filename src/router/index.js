import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home/index.vue";
import Login from "../pages/Login/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    name: "Login",
   component: () =>
      import(/* webpackChunkName: "about" */ "../pages/Login/index.vue")
  
  },
  {
    path: "/Home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/Home/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
