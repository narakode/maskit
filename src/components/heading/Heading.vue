<script setup>
import { computed } from 'vue';
import HeadingConfig from './Heading.config';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    default: 1,
    validator: (value) => value >= 1 && value <= 6,
  },
});

const tagName = computed(() => 'h' + props.level);
const titleSize = computed(() => {
  return HeadingConfig.sizes[props.level] || 'text-base';
});
</script>

<template>
  <div
    class="flex flex-col gap-4 sm:gap-2 sm:flex-row sm:items-center sm:justify-between"
  >
    <component :is="tagName" :class="['font-bold text-gray-900', titleSize]">
      {{ title }}
    </component>
    <slot name="action" />
  </div>
</template>
