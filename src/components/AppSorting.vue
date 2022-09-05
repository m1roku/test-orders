<template>
  <div class="sorting app-tile">
    <BaseSelect
      labelText="Сортировка"
      isOptionIcon
      isFloatLabel
      :icons="['ArrowDownUp', 'ArrowUpDown']"
      :options="$options.SORTING_OPTIONS"
      :value="sortedValue.value"
      v-bind:select.sync="sortedValue"
      class="sorting__select"
    />
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect.vue';
import { mapMutations } from 'vuex';

export default {
  SORTING_OPTIONS: [
    {
      text: 'Номер накладной',
      value: 'up',
    },
    {
      text: 'Номер накладной',
      value: 'down',
    },
  ],
  name: 'AppSorting',
  components: { BaseSelect },
  data() {
    return {
      sortedValue: {},
    };
  },
  watch: {
    sortedValue(val) {
      this.sortOrders(val.value);
    },
  },
  methods: {
    ...mapMutations({
      sortOrders: 'sortOrders',
    }),
  },

};
</script>
