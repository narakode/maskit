<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import SpinnerConfig from './Spinner.config';

const props = defineProps({
  color: {
    type: String,
    default: 'light',
    validator: (value) =>
      [
        'info',
        'light-primary',
        'light',
        'light-warning',
        'light-success',
        'light-error',
        'secondary',
      ].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['md', 'lg'].includes(value),
  },
});

const colorClass = computed(() => {
  return SpinnerConfig.colors[props.color];
});
const sizeClass = computed(() => {
  return SpinnerConfig.sizes[props.size || 'md'];
});
</script>

<template>
  <Icon icon="tabler:loader" :class="['animate-spin', colorClass, sizeClass]" />
</template>
