<template>
  <div class="list-view">
    <OrderWidget
      v-for="order in orders" :key="order.id" :order="order"
    />
  </div>
</template>

<script>
import OrderWidget from '@/components/OrderWidget.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ListView',
  components: { OrderWidget },
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
