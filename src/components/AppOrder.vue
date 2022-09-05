<template>
  <tr>
    <td>{{ order.id }}</td>
    <td>{{ order.number }}</td>
    <td>{{ $options.ORDER_TYPES[order.type] }}</td>
    <td>{{ date }}</td>
    <td>
      <DeleteOrder @onClick="onDelete" />
    </td>
  </tr>
</template>

<script>
import DeleteOrder from '@/components/DeleteOrder.vue';
import { mapMutations } from 'vuex';

export default {
  ORDER_TYPES: {
    Pickup: 'Самовывоз',
    Delivery: 'Курьерская доставка',
    'Pick-point': 'Доставка в пункт выдачи',
  },
  name: 'AppOrder.vue',
  components: { DeleteOrder },
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      return new Date(this.order.creationDate).toLocaleDateString('en-EN', {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
      });
    },
  },
  methods: {
    ...mapMutations({
      deleteOrder: 'deleteOrder',
    }),
    onDelete() {
      this.deleteOrder(this.order.id);
    },
  },
};
</script>
