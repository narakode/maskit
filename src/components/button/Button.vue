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
  type: String,
  icon: String,
  loading: Boolean,
  disabled: Boolean,
  iconOnly: Boolean,
  responsive: Boolean,
  iconPosition: {
    type: String,
    default: 'start',
    validator: (value) => ['start', 'end'].includes(value),
  },
  overrideColor: Boolean,
  tag: {
    default: 'button',
  },
});

const colorClass = computed(() => {
  if (props.overrideColor) {
    return '';
  }
  return [
    ButtonConfig.colors[props.color || 'secondary'],
    props.bordered
      ? ['border', ButtonConfig.borderColors[props.color || 'secondary']]
      : '',
  ];
});

const spinnerColor = computed(() => {
  return {
    secondary: 'light',
    primary: 'light-primary',
    light: 'light',
    warning: 'light-warning',
    success: 'light-success',
    error: 'light-error',
    transparent: 'light',
    bordered: 'light',
  }[props.color || 'secondary'];
});

const sizeClass = computed(() => {
  const defaultSizes = {
    sm: ['h-8 text-sm', props.iconOnly ? 'w-8' : 'px-3'],
    md: ['h-10', props.iconOnly ? 'w-10' : 'px-4'],
    lg: ['h-12 text-lg', props.iconOnly ? 'w-12' : 'px-5'],
  };
  const responsiveSizes = {
    sm: defaultSizes.sm,
    md: ['h-8 px-3 text-sm lg:px-4 lg:h-10 lg:text-base'],
    lg: [
      'h-10 xl:h-12 xl:text-lg',
      props.iconOnly ? 'w-10 xl:w-12' : 'px-4 xl:px-5',
    ],
  };

  if (props.responsive) {
    return responsiveSizes[props.size || 'md'];
  }

  return defaultSizes[props.size || 'md'];
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
    <Spinner v-if="loading" :color="spinnerColor" />
    <Icon v-if="!loading && icon && iconPosition === 'start'" :icon="icon" />
    <slot v-if="!iconOnly" />
    <Icon v-if="!loading && icon && iconPosition === 'end'" :icon="icon" />
  </component>
</template>
