import Vue from "vue";
import VueRouter from "vue-router";
import ProductsView from "../views/ProductsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "product",
    component: ProductsView,
    meta: {
      title: "Produtos",
    },
  },
  {
    path: "/create",
    name: "createProduct",
    component: () =>
      import(
        /* webpackChunkName: "createProduct" */ "@/views/CreateProductView.vue"
      ),
    meta: {
      title: "Adicionar Produto",
    },
  },
  {
    path: "/inactive",
    name: "inactiveProduct",
    component: () =>
      import(
        /* webpackChunkName: "inactiveProduct" */ "@/views/InactiveProductsView.vue"
      ),
    meta: {
      title: "Produtos Inativos",
    },
  },
  {
    path: "/edit/:id",
    name: "editProduct",
    component: () =>
      import(
        /* webpackChunkName: "editProduct" */ "@/views/EditProductsView.vue"
      ),
    props: true,
    meta: {
      title: "Editar Produto",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
