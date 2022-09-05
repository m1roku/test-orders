import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    orders: [],
    sortedBy: '',
    searchedBy: '',
    filteredBy: 'all',
  },
  getters: {
    sortedOrders(state) {
      if (state.sortedBy.length) {
        const sorted = state.orders.sort((a, b) => (a.number > b.number ? 1 : -1));
        if (state.sortedBy === 'up') {
          return sorted;
        }
        return sorted.reverse();
      }
      return state.orders;
    },
    sortedAndSearchedOrders(state, getters) {
      const searchString = state.searchedBy.toLowerCase();
      return getters.sortedOrders.filter((o) => o.number.toLowerCase().includes(searchString));
    },
    sortedAndSearchedAndFilteredOrders(state, getters) {
      if (state.filteredBy !== 'all') {
        const filteredType = state.filteredBy.toLowerCase();
        return getters.sortedAndSearchedOrders.filter((o) => o.type.toLowerCase() === filteredType);
      }
      return getters.sortedAndSearchedOrders;
    },
  },
  mutations: {
    sortOrders(state, payload) {
      const sortBy = payload;
      state.sortedBy = sortBy;
    },
    searchOrders(state, payload) {
      const searchString = payload;
      state.searchedBy = searchString;
    },
    filterOrders(state, payload) {
      const filteredType = payload;
      state.filteredBy = filteredType;
    },
    setOrders(state, payload) {
      state.orders = [...payload];
    },
    deleteOrder(state, payload) {
      const deletingOrderID = payload;
      state.orders = [...state.orders].filter((o) => o.id !== deletingOrderID);
    },
  },
  actions: {
    async getOrders({ commit }) {
      setTimeout(() => {
        // eslint-disable-next-line global-require
        const data = require('@/data.json');
        commit('setOrders', data);
      }, Math.floor(Math.random() * 2000));
    },
  },
  modules: {
  },
});
