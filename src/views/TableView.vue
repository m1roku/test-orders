<template>
  <table class="table-view" v-if="isLoaded">
    <tr>
      <th>ID</th>
      <th>Номер накладной</th>
      <th>Тип заказа</th>
      <th>Дата создания</th>
      <th></th>
    </tr>
    <AppOrder v-for="order in orders" :key="order.id" :order="order" />
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import AppOrder from '@/components/AppOrder.vue';

export default {
  name: 'TableView',
  components: { AppOrder },
  computed: {
    ...mapGetters({
      orders: 'sortedAndSearchedAndFilteredOrders',
    }),
    isLoaded() {
      return this.orders.length;
    },
  },
};
</script>
