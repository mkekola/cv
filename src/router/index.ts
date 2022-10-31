import {route} from 'quasar/wrappers';
import VueRouter from 'vue-router';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default route(function ({Vue}) {
  Vue.use(VueRouter);

  return new VueRouter({
    scrollBehavior: () => ({x: 0, y: 0}),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: 'history',
    base: process.env.VUE_ROUTER_BASE
  });
})
