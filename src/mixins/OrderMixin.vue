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
