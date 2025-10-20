<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import BadgeConfig from './Badge.config';

const props = defineProps({
  color: {
    type: String,
    default: 'primary',
    validator: (val) =>
      ['primary', 'error', 'warning', 'success', 'secondary'].includes(val),
  },
  icon: String,
});

const colorClass = computed(() => {
  return BadgeConfig.colors[props.color];
});
</script>

<template>
  <span
    :class="[
      'h-6 px-2 inline-flex items-center justify-center text-sm rounded font-medium gap-2',
      colorClass,
    ]"
  >
    <Icon v-if="icon" :icon="icon" />
    <slot />
  </span>
</template>
