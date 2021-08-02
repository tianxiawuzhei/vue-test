import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import dragBall from "vue-drag-ball";

Vue.config.productionTip = false;

Vue.use(ElementUI);
// Vue.use(dragBall);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
