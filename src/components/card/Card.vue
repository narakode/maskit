<script setup>
defineProps({
  bordered: {
    type: Boolean,
    default: true,
  },
  rounded: {
    type: Boolean,
    default: true,
  },
  dimmed: Boolean,
  paddless: Boolean,
  hasShadow: Boolean,
  title: String,
  titleResponsive: Boolean,
  titleTag: {
    type: String,
    default: 'h2',
  },
  striped: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div
    :class="[
      bordered ? 'border border-gray-300' : '',
      hasShadow ? 'shadow-md' : '',
      rounded ? 'rounded-md' : '',
      dimmed ? 'bg-gray-100' : 'bg-white',
      'text-gray-900',
    ]"
  >
    <div
      v-if="title"
      :class="[
        striped ? 'border-b border-gray-300 p-4' : 'px-4 pt-4',
        'flex items-center justify-between',
      ]"
    >
      <component
        :is="titleTag"
        :class="[
          'font-bold',
          titleResponsive ? 'text-lg lg:text-xl' : 'text-xl',
        ]"
      >
        {{ title }}
      </component>

      <slot name="action" />
    </div>
    <div :class="[paddless ? '' : 'p-4']">
      <slot />
    </div>
    <div v-if="$slots.footer" class="border-t border-gray-300 p-4">
      <slot name="footer" />
    </div>
  </div>
</template>
