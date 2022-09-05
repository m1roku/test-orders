<template>
  <div class="order-widget">
    <div class="order-widget__header">
      {{ order.id }}
      <div>
        <DeleteOrder @onClick="onDelete" />
      </div>
    </div>
    <div class="order-widget__body">
      <dl>
        <dt>Номер накладной:</dt>
        <dd>{{ order.number }}</dd>
        <dt>Тип заказа:</dt>
        <dd>{{ $options.ORDER_TYPES[order.type] }}</dd>
        <dt>Дата создания:</dt>
        <dd>{{ date }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import OrderMixin from '@/mixins/OrderMixin.vue';

export default {
  name: 'OrderWidget',
  mixins: [OrderMixin],
};
</script>
