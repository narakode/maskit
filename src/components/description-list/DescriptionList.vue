<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: null,
});
</script>

<template>
  <div>
    <dt class="text-gray-600">
      {{ label }}
    </dt>
    <dd class="text-gray-900 font-bold">
      <slot>{{ value }}</slot>
    </dd>
  </div>
</template>
