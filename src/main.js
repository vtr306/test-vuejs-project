import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";

import "buefy/dist/buefy.css";

Vue.config.productionTip = false;

Vue.use(Buefy);

Vue.filter("formatBRL", (value) => {
  const formatBRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatBRL.format(value);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
