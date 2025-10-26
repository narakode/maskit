<script setup>
import { computed, ref } from 'vue';
import DropdownConfig from './Dropdown.config';

const props = defineProps({
  options: Array,
  overrideWidth: Boolean,
  customClass: {
    type: Object,
    default: () => ({
      content: '',
    }),
  },
});

const visible = ref(false);

const classes = computed(() => {
  return {
    content: [
      'absolute top-8 right-0 w-fit bg-white rounded-md border z-10 border-gray-300',
      props.overrideWidth ? '' : 'min-w-40',
      props.customClass.content,
    ],
    header: 'px-3 py-2 border-b border-gray-300',
    option: DropdownConfig.classes.option,
  };
});

function onClose() {
  visible.value = false;
}
function onToggle() {
  visible.value = !visible.value;
}
</script>

<template>
  <div class="relative">
    <slot name="trigger" :toggle="onToggle" />
    <div
      v-if="visible"
      v-motion-slide-top
      v-click-outside="onClose"
      :class="classes.content"
    >
      <slot name="header" :classes="classes" />
      <div class="py-1">
        <slot :classes="classes">
          <div v-for="option in options" :key="option.id">
            <slot name="option" :option="option" :classes="classes" />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
