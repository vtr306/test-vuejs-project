import Vue from "vue";
import VueRouter from "vue-router";
import ProductsView from "../views/ProductsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "product",
    component: ProductsView,
  },
  {
    path: "/create",
    name: "createProduct",
    component: () =>
      import(
        /* webpackChunkName: "createProduct" */ "@/views/CreateProductView.vue"
      ),
  },
  {
    path: "/inactive",
    name: "inactiveProduct",
    component: () =>
      import(
        /* webpackChunkName: "inactiveProduct" */ "@/views/InactiveProductsView.vue"
      ),
  },
  {
    path: "/edit/:id",
    name: "editProduct",
    component: () =>
      import(
        /* webpackChunkName: "editProduct" */ "@/views/EditProductsView.vue"
      ),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
