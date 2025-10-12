<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

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
  return {
    light: 'text-gray-200',
    info: 'text-blue-600',
    'light-primary': 'text-blue-200',
    'light-error': 'text-red-200',
    'light-success': 'text-green-200',
    'light-warning': 'text-yellow-200',
    secondary: 'text-gray-700',
  }[props.color];
});
const sizeClass = computed(() => {
  return {
    md: 'w-4 h-4',
    lg: 'w-6 h-6',
  }[props.size || 'md'];
});
</script>

<template>
  <Icon
    icon="tabler:loader"
    :class="['animate-spin', colorClass, sizeClass]"
  />
</template>