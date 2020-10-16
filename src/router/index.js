import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cliente",
    name: "Cliente",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "cliente" */ "../views/Cliente.vue"),
  },
  {
    path: "/remitos",
    name: "Remitos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "remito" */ "../views/Remito.vue"),
  },
  {
    path: "/abmclientes",
    name: "abmclientes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "remito" */ "../views/AbmClientes.vue"),
  },
  {
    path: "/abmlocalidad",
    name: "abmlocalidad",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "remito" */ "../views/AbmCiudad.vue"),
    
  },
  {
    path: "/listar",
    name: "listar",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "lista" */ "../views/Lista.vue"),
    
  },
];

const router = new VueRouter({
  routes,
});

export default router;
