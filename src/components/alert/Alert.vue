<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import Spinner from '../Spinner.vue';
import AlertConfig from './Alert.config';

const props = defineProps({
  color: {
    type: String,
    default: 'info',
    validator: (value) =>
      ['info', 'error', 'warning', 'success', 'secondary'].includes(value),
  },
  loading: Boolean,
  withClose: Boolean,
});
const emit = defineEmits(['close']);

const colorClass = computed(() => {
  return AlertConfig.colors[props.color || 'info'];
});

const spinnerColor = computed(() => {
  return {
    info: 'light-primary',
    error: 'light-error',
    warning: 'light-warning',
    success: 'light-success',
    secondary: 'light',
  }[props.color || 'info'];
});

const icon = computed(() => {
  return AlertConfig.iconNames[props.color || 'info'];
});
</script>

<template>
  <div :class="[AlertConfig.base, colorClass]">
    <div class="flex items-start gap-2">
      <Spinner v-if="loading" class="mt-1" :color="spinnerColor" />
      <Icon v-else :icon="icon" class="size-4 mt-1 shrink-0" />
      <slot />
    </div>
    <button v-if="withClose" class="mt-1 cursor-pointer" @click="emit('close')">
      <Icon icon="tabler:x" />
    </button>
  </div>
</template>
