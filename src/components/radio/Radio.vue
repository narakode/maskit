<script setup>
import { useId } from 'vue';

defineProps({
  name: String,
  inputValue: null,
  label: String,
  disabled: Boolean,
  id: String,
});
const emit = defineEmits(['change']);

const defaultId = useId();
const selected = defineModel();
</script>

<template>
  <div class="flex items-center gap-2">
    <input
      :id="id || defaultId"
      v-model="selected"
      type="radio"
      :value="inputValue"
      :name="name"
      class="appearance-none relative w-4 h-4 shrink-0 rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-blue-600 checked:bg-blue-600"
      :disabled="disabled"
      @change="$emit('change')"
    />
    <label
      v-if="label"
      :for="id || defaultId"
      :class="[disabled ? 'text-gray-500' : 'text-gray-900']"
      >{{ label }}</label
    >
  </div>
</template>
