<template>
  <div class="filters app-tile">
    <h2 class="heading heading--h2 filters__heading">Фильтр</h2>
    <div class="filters__section">
      <BaseInput
        labelText="Номер накладной:"
        type="text"
        placeholder="Введите фрагмент"
        v-model="searchValue"
      />
    </div>
    <div class="filters__section">
      <BaseSelect
        labelText="Тип заказа:"
        placeholder="Выберите из списка"
        :options="$options.FILTER_OPTIONS"
        :value="filterValue.text"
        v-bind:select.sync="filterValue"
      />
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import { mapMutations } from 'vuex';

export default {
  FILTER_OPTIONS: [
    {
      text: 'Самовывоз',
      value: 'Pickup',
    },
    {
      text: 'Курьерская доставка',
      value: 'Delivery',
    },
    {
      text: 'Доставка в пункт выдачи',
      value: 'Pick-point',
    },
  ],
  name: 'AppFilters',
  components: { BaseSelect, BaseInput },
  data() {
    return {
      searchValue: '',
      filterValue: {},
    };
  },
  methods: {
    ...mapMutations({
      searchOrders: 'searchOrders',
      filterOrders: 'filterOrders',
    }),
  },
  watch: {
    searchValue(val) {
      this.searchOrders(val);
    },
    filterValue(val) {
      this.filterOrders(val.value);
    },
  },
};
</script>
