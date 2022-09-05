<template>
  <div class="delete-order"
       @mouseenter="showTooltip"
       @mouseleave="isHovered = !isHovered;">
    <div class="delete-order__dots" ref="dots">
      <Dots />
    </div>
    <div
      class="delete-order__tooltip app-tile"
      v-if="isHovered"
      @click="$emit('onClick')"
      :style="{right: tooltipPosition}"
    >
      <Trash />
      <span>удалить</span>
    </div>
  </div>

</template>

<script>
import Dots from '@/components/icons/Dots.vue';
import Trash from '@/components/icons/Trash.vue';

export default {
  name: 'DeleteOrder',
  components: { Dots, Trash },
  data() {
    return {
      isHovered: false,
      tooltipPosition: 0,
    };
  },
  methods: {
    showTooltip() {
      this.tooltipPosition = `${this.$refs.dots.offsetLeft}px`;
      this.isHovered = !this.isHovered;
    },
  },
};
</script>
