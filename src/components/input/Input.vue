<script setup>
import { computed, ref } from 'vue';
// import { debounce } from 'src/utils/debounce'; // ← required utility

const props = defineProps({
  tag: {
    type: String,
    default: 'input',
    validator: (value) => ['input', 'textarea'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  width: {
    type: String,
    default: 'auto',
    validator: (value) => ['auto', 'fit', 'full'].includes(value),
  },
});
const emit = defineEmits(['input', 'input-debounce']);

const value = defineModel();
const input = ref();

const sizeClass = computed(() => {
  const sizes = {
    sm: [
      'text-sm px-2 rounded',
      props.tag === 'textarea' ? 'min-h-8 py-2' : 'h-8',
    ],
    md: [
      'px-2.5 rounded-md',
      props.tag === 'textarea' ? 'min-h-10 py-2' : 'h-10',
    ],
  };

  return sizes[props.size];
});
const widthClass = computed(() => {
  const widths = {
    auto: '',
    fit: 'w-fit',
    full: 'w-full',
  };

  return widths[props.width];
});
const classes = computed(() => {
  return [
    'bg-white border border-gray-300 text-gray-900 appearance-none focus:outline-blue-600 disabled:bg-gray-100 read-only:bg-gray-50',
    sizeClass.value,
    widthClass.value,
  ];
});

// const onInputDebounce = debounce(() => emit('input-debounce'), 500);

function onInput() {
  emit('input');
  //   onInputDebounce();
}

defineExpose({ input });
</script>

<template>
  <input
    v-if="tag === 'input'"
    ref="input"
    v-model="value"
    type="text"
    :class="classes"
    @input="onInput"
  />
  <textarea
    v-else
    ref="input"
    v-model="value"
    :class="classes"
    rows="4"
    @input="onInput"
  />
</template>
