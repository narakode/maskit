<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import { debounce } from '../../utils/debounce';

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  color: {
    type: String,
    default: 'light',
    validator: (value) =>
      ['secondary', 'primary', 'light', 'warning', 'success', 'error'].includes(
        value,
      ),
  },
  debounced: Boolean,
  width: {
    type: String,
    default: 'fit',
    validator: (val) => ['fit', 'full'].includes(val),
  },
  required: Boolean,
  name: String,
  id: String,
});
const emit = defineEmits(['change']);

const selected = defineModel();

const sizeClass = computed(() => {
  return {
    sm: 'h-8 text-sm px-2 pr-10',
    md: 'h-10 px-2.5 pr-10',
    lg: 'h-12 text-lg px-4 pr-10',
  }[props.size || 'md'];
});

const colorClass = computed(() => {
  return {
    secondary:
      'bg-gray-50 text-gray-700 border-gray-700 focus:outline-gray-600',
    primary: 'bg-blue-50 text-blue-700 border-blue-700 focus:outline-blue-600',
    light: 'bg-white text-gray-900 border-gray-300 focus:outline-blue-600',
    warning:
      'bg-yellow-50 text-yellow-700 border-yellow-700 focus:outline-yellow-600',
    success:
      'bg-green-50 text-green-700 border-green-700 focus:outline-green-600',
    error: 'bg-red-50 text-red-700 border-red-700 focus:outline-red-600',
  }[props.color || 'light'];
});

const chevronSize = computed(() => {
  return {
    sm: 'size-3 absolute top-2.5 right-2',
    md: 'size-4 absolute top-3 right-2.5',
    lg: 'size-4 absolute top-4 right-3',
  }[props.size || 'md'];
});

const chevronColor = computed(() => {
  return {
    secondary: 'text-gray-700',
    primary: 'text-blue-700',
    light: 'text-gray-900',
    warning: 'text-yellow-700',
    success: 'text-green-700',
    error: 'text-red-700',
  }[props.color || 'light'];
});

const debounceEmitChange = debounce(() => emit('change'), 500);

function onChange() {
  if (props.debounced) {
    debounceEmitChange();
  } else {
    emit('change');
  }
}
</script>

<template>
  <div :class="['relative', width === 'full' ? 'w-full' : 'w-fit']">
    <select
      :id="id"
      v-model="selected"
      :class="[
        'border rounded-md appearance-none',
        sizeClass,
        colorClass,
        width === 'full' ? 'w-full' : 'w-auto',
      ]"
      @change="onChange"
    >
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
    <Icon icon="tabler:chevron-down" :class="[chevronSize, chevronColor]" />
  </div>
</template>
