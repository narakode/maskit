<script setup>
import Container from './../container/Container.vue';
import { Icon } from '@iconify/vue';

defineProps({
  tag: {
    type: String,
    default: 'section',
  },
  title: String,
  titleIcon: String,
  titleLevel: {
    type: Number,
    default: 2,
    validator: (value) => value >= 1 && value <= 6,
  },
  hasVerticalPadding: {
    type: Boolean,
    default: true,
  },
  containerProps: Object,
  withContainer: {
    type: Boolean,
    default: true,
  },
  responsiveHeader: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <component
    :is="tag"
    :class="[
      hasVerticalPadding ? 'py-10 sm:py-12 md:py-14 xl:py-16 2xl:py-20' : '',
    ]"
  >
    <component :is="withContainer ? Container : 'div'" v-bind="containerProps">
      <div
        v-if="title"
        class="space-y-4 lg:space-y-6 2xl:space-y-8"
        data-test="main"
      >
        <header
          :class="[
            responsiveHeader
              ? 'flex flex-col items-start gap-2 justify-between sm:flex-row sm:items-center'
              : 'flex items-center gap-2 justify-between',
          ]"
        >
          <component
            :is="`h${titleLevel}`"
            class="flex items-center gap-2 font-bold text-gray-900 text-xl tracking-tight md:text-2xl lg:text-3xl xl:gap-4 2xl:text-4xl"
          >
            <Icon v-if="titleIcon" :icon="titleIcon" />
            {{ title }}
          </component>
          <slot name="action" />
        </header>
        <slot />
      </div>
      <slot v-else />
    </component>
  </component>
</template>
