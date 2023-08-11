import Vue from "vue";
import Vuex from "vuex";

import products from "./products/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { products },
});
