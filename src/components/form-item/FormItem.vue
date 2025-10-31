<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <label :for="id">{{ label }}</label>
    <slot :id="id" />
  </div>
</template>
