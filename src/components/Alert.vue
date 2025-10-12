<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import Spinner from './Spinner.vue';

const props = defineProps({
  color: {
    type: String,
    default: 'info',
    validator: (value) =>
      [
        'info',
        'error',
        'warning',
        'success',
        'secondary',
      ].includes(value),
  },
  loading: Boolean,
  withClose: Boolean,
});
const emit = defineEmits(['close']);

const colorClass = computed(() => {
  return {
    info: 'bg-blue-100 border-blue-300 text-blue-600',
    error: 'bg-red-100 border-red-300 text-red-600',
    warning: 'bg-yellow-100 border-yellow-300 text-yellow-700',
    success: 'bg-green-100 border-green-300 text-green-600',
    secondary: 'bg-gray-100 border-gray-300 text-gray-600',
  }[props.color || 'info'];
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
  return {
    info: 'tabler:info-circle-filled',
    error: 'tabler:alert-circle-filled',
    warning: 'tabler:alert-circle-filled',
    success: 'tabler:circle-check-filled',
    secondary: 'tabler:info-circle-filled',
  }[props.color || 'info'];
});
</script>

<template>
  <div
    :class="[
      'px-4 py-3 rounded-md border flex items-start justify-between gap-2',
      colorClass,
    ]"
  >
    <div class="flex items-start gap-2">
      <Spinner
        v-if="loading"
        class="mt-1"
        :color="spinnerColor"
      />
      <Icon
        v-else
        :icon="icon"
        class="size-4 mt-1 shrink-0"
      />
      <slot />
    </div>
    <button
      v-if="withClose"
      class="mt-1 cursor-pointer"
      @click="emit('close')"
    >
      <Icon icon="tabler:x" />
    </button>
  </div>
</template>