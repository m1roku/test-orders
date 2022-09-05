import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/styles.scss';

Vue.config.productionTip = false;

Vue.directive('clickoutside', {
  inserted: (el, binding, vnode) => {
    // eslint-disable-next-line no-param-reassign
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
    document.body.addEventListener('touchstart', el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
    document.body.removeEventListener('touchstart', el.clickOutsideEvent);
  },
  stopProp(event) {
    event.stopPropagation();
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
