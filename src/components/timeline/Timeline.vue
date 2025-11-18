<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ol class="relative border-l border-gray-300 space-y-8">
    <li v-for="(item, index) in items" :key="item.id" class="ml-4">
      <div
        :class="[
          'absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white',
          index === 0 ? 'bg-blue-600' : 'bg-gray-200',
        ]"
      />
      <time class="mb-1 text-sm text-gray-400"> {{ item.time }}</time>
      <p data-test="name" class="font-bold text-gray-900 lg:text-lg">
        {{ item.name }}
      </p>
      <p v-if="item.text" data-test="text" class="text-gray-500">
        {{ item.text }}
      </p>
    </li>
  </ol>
</template>
