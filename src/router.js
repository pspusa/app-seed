import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return to.hash ? resolve({ selector: to.hash }) : resolve({ x: 0, y: 0 });
      }, 250);
    });
  }
});
