<script setup>
import { computed } from 'vue';
import ContainerConfig from './Container.config';

const props = defineProps({
  maxScreen: {
    type: String,
    validator: (val) => ['sm', 'md', 'lg', 'xl'].includes(val),
  },
  tag: {
    type: String,
    default: 'div',
  },
});

const containerClass = computed(() => {
  if (!props.maxScreen) {
    return '';
  }

  return ContainerConfig.maxScreenBreakpoints[props.maxScreen];
});
</script>

<template>
  <component :is="tag" :class="[ContainerConfig.baseClass, containerClass]">
    <slot />
  </component>
</template>
