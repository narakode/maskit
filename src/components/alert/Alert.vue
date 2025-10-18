<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import Spinner from '../spinner/Spinner.vue';
import AlertConfig from './Alert.config';

const props = defineProps({
  color: {
    type: String,
    default: 'info',
    validator: (value) =>
      ['info', 'error', 'warning', 'success', 'secondary'].includes(value),
  },
  loading: Boolean,
  closable: Boolean,
});
const emit = defineEmits(['close']);

const colorClass = computed(() => {
  return AlertConfig.colors[props.color || 'info'];
});

const icon = computed(() => {
  return AlertConfig.iconNames[props.color || 'info'];
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
      <Spinner v-if="loading" class="mt-1" :color="color" />
      <Icon v-else :icon="icon" class="size-4 mt-1 shrink-0" />
      <slot />
    </div>
    <button v-if="closable" class="mt-1 cursor-pointer" @click="emit('close')">
      <Icon icon="tabler:x" />
    </button>
  </div>
</template>
