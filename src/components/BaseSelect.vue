<template>
  <div class="select" :class="{'select--open' : isOpen, 'select--label-float' : isFloatLabel}">
    <span class="select__label">
      {{ labelText }}
    </span>
    <div class="select__box" v-clickoutside="close">
      <div class="select__wrapper" @click="open">
        <input
          type="text"
          class="select__selected"
          disabled
          :value="value"
          :placeholder="placeholder"
        >
        <Chevrone class="select__indicator" />
      </div>
      <ul
        class="select__options"
        v-show="isOpen"
      >
        <li
          class="select__option"
          :class="{
            'select__option--icon' : isOptionIcon,
            'select__option--active' : value === option.value
          }"
          v-for="(option, i) in options"
          :key="option.value"
          @click="select(option)"
        >{{ option.text }}
          <img v-if="isOptionIcon" :src="require(`@/assets/images/${icons[i]}.svg`)">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Chevrone from '@/components/icons/Chevrone.vue';

export default {
  name: 'BaseSelect',
  components: { Chevrone },
  props: {
    labelText: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    isOptionIcon: {
      type: Boolean,
      default: false,
    },
    icons: {
      type: Array,
      default: () => [],
    },
    isFloatLabel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    select(selectedOption) {
      this.$emit('update:select', selectedOption);
      this.close();
    },
  },
};
</script>
