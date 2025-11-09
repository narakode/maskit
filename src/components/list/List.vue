<script setup>
import { computed } from 'vue';
import Card from '../card/Card.vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  striped: {
    type: Boolean,
    default: true,
  },
  hoverable: Boolean,
  emptyMessage: {
    type: String,
    default: "There's nothing here yet.",
  },
});

const classes = computed(() => {
  const itemSizes = {
    sm: 'px-3 py-2',
    md: 'p-4',
    lg: 'p-6',
  };

  return {
    item: [itemSizes[props.size], props.hoverable ? 'hover:bg-gray-50' : ''],
  };
});
</script>

<template>
  <Card paddless>
    <div
      data-test="wrapper"
      :class="[striped ? 'divide-y divide-gray-300' : '']"
    >
      <slot name="header" :classes="{ item: classes.item }" />
      <div
        v-if="!data.length"
        :class="[classes.item, 'text-gray-700 text-center']"
      >
        {{ emptyMessage }}
      </div>
      <slot :classes="{ item: classes.item }">
        <div
          v-for="(item, index) in data"
          :key="item.id"
          :class="classes.item"
          data-test="item"
        >
          <slot name="item" :index="index" :item="item" />
        </div>
      </slot>
      <slot name="footer" :classes="{ item: classes.item }" />
    </div>
  </Card>
</template>
