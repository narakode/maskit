<script setup>
import Spinner from '../spinner/Spinner.vue';
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import ButtonConfig from './Button.config';

const props = defineProps({
  color: {
    type: String,
    default: 'secondary',
    validator: (value) =>
      [
        'secondary',
        'primary',
        'light',
        'warning',
        'success',
        'error',
        'transparent',
        'bordered',
      ].includes(value),
  },
  bordered: Boolean,
  transparent: Boolean,
  overrideColor: Boolean,
  responsive: Boolean,
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  width: {
    type: String,
    default: 'auto',
    validator: (value) => ['auto', 'full'].includes(value),
  },
  icon: String,
  iconOnly: Boolean,
  iconPosition: {
    type: String,
    default: 'start',
    validator: (value) => ['start', 'end'].includes(value),
  },
  disabled: Boolean,
  loading: Boolean,
  type: String,
  tag: {
    default: 'button',
  },
});

const colorClass = computed(() => {
  if (props.overrideColor) {
    return '';
  }

  if (props.transparent) {
    return 'bg-transparent';
  }

  return [
    ButtonConfig.colors[props.color || 'secondary'],
    props.bordered
      ? ['border', ButtonConfig.borderColors[props.color || 'secondary']]
      : '',
  ];
});

const sizeClass = computed(() => {
  if (props.responsive) {
    return ButtonConfig.sizes[
      props.iconOnly ? 'iconOnlyResponsive' : 'responsive'
    ][props.size || 'md'];
  }

  return ButtonConfig.sizes[props.iconOnly ? 'iconOnly' : 'default'][
    props.size || 'md'
  ];
});
</script>

<template>
  <component
    :is="tag"
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'rounded-md font-medium cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
      colorClass,
      sizeClass,
      width === 'full' ? 'w-full' : '',
    ]"
  >
    <Spinner v-if="loading" :color="color" />
    <Icon v-if="!loading && icon && iconPosition === 'start'" :icon="icon" />
    <slot v-if="!iconOnly" />
    <Icon v-if="!loading && icon && iconPosition === 'end'" :icon="icon" />
  </component>
</template>
