import Vue from 'vue';
import VueRouter from 'vue-router';
import TableView from '../views/TableView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/table',
  },
  {
    path: '/table',
    name: 'TableView',
    component: TableView,
  },
  {
    path: '/list',
    name: 'ListView',

    component: () => import(/* webpackChunkName: "about" */ '../views/ListView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
