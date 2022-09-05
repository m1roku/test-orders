<template>
  <label class="input">
    <span class="input__label">{{ labelText }}</span>
    <input
      class="input__field"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('updateInput', $event.target.value)"
    >
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  model: {
    prop: 'value',
    event: 'updateInput',
  },
  props: {
    labelText: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>
