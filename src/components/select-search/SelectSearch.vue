<script setup>
import { Icon } from '@iconify/vue';
import BaseInput from '../input//Input.vue';
import Spinner from '../spinner/Spinner.vue';
import { ref, useTemplateRef, watch } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  placeholder: String,
  withSearchEmptyCreate: Boolean,
  required: Boolean,
});
const emit = defineEmits([
  'opened',
  'search-debounce',
  'scroll-bottom',
  'create-empty-search-item',
  'change',
]);

const visible = ref(false);
const itemsWrapper = useTemplateRef('items-wrapper');
const itemsDiv = useTemplateRef('items-div');
const searchInput = useTemplateRef('search-input');
const currentHoverItem = ref(null);
const selected = defineModel();
const search = defineModel('search');
const loading = defineModel('loading');

function scrollItemVisibility() {
  const container = itemsWrapper.value;
  const element = itemsDiv.value[currentHoverItem.value];

  const containerTop = container.scrollTop;
  const containerBottom = containerTop + container.clientHeight;

  const elementTop = element.offsetTop;
  const elementBottom = elementTop + element.offsetHeight;

  if (elementTop < containerTop) {
    container.scrollTo({ top: elementTop, behavior: 'smooth' });
  } else if (elementBottom > containerBottom) {
    container.scrollTo({
      top: elementBottom - container.clientHeight,
      behavior: 'smooth',
    });
  }
}

function onClose() {
  visible.value = false;
}
function onHoveritem(i) {
  currentHoverItem.value = i;
}
function onKeydownInput(e) {
  if (e.key === 'ArrowDown') {
    e.preventDefault();

    if (currentHoverItem.value < props.items.length - 1) {
      currentHoverItem.value = currentHoverItem.value
        ? currentHoverItem.value + 1
        : (currentHoverItem.value = 1);

      scrollItemVisibility();
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();

    if (currentHoverItem.value > 0) {
      currentHoverItem.value = currentHoverItem.value
        ? currentHoverItem.value - 1
        : (currentHoverItem.value = 1);

      scrollItemVisibility();
    }
  } else if (e.key === 'Enter') {
    e.preventDefault();

    const item = props.items[currentHoverItem.value];

    selected.value = {
      id: item.id,
      name: item.name,
    };
    visible.value = false;
    searchInput.value.input.blur();

    emit('change');
  } else if (e.key === 'Tab') {
    visible.value = false;
  }
}
function onClickItem(item) {
  selected.value = {
    id: item.id,
    name: item.name,
  };
  visible.value = false;

  emit('change');
}
function onClear() {
  selected.value = null;
  visible.value = false;

  emit('change');
}
function onSearchDebounce() {
  currentHoverItem.value = null;
  emit('search-debounce');
}
function onScrollWrapper(e) {
  const scroll = e.target.scrollTop + e.target.clientHeight;
  const bottom = e.target.scrollHeight - 5;

  if (scroll > bottom) {
    emit('scroll-bottom');
  }
}
function onCreateEmptySearchItem() {
  emit('create-empty-search-item');

  visible.value = false;
}

watch(
  selected,
  (newSelected) => {
    if (newSelected) {
      search.value = newSelected.name;
    } else {
      search.value = null;
    }
  },
  { immediate: true },
);
watch(visible, (newVisible) => {
  if (!newVisible) {
    search.value = selected.value ? selected.value.name : null;
  } else {
    emit('opened');
  }
});
</script>

<template>
  <div v-click-outside="onClose" class="relative">
    <div class="relative">
      <BaseInput
        ref="search-input"
        v-model="search"
        width="full"
        :placeholder="placeholder"
        :required="required"
        @focus="visible = true"
        @keydown="onKeydownInput"
        @input-debounce="onSearchDebounce"
      />
      <spinner
        v-if="loading"
        color="secondary"
        class="absolute top-3 right-2"
      />
      <button
        v-else-if="selected"
        tabindex="-1"
        class="cursor-pointer text-gray-700 absolute top-3 right-2"
        type="button"
        aria-label="Clear selected"
        @click="onClear"
      >
        <Icon icon="tabler:x" class="w-4 h-4" />
      </button>
    </div>
    <div
      v-if="visible"
      ref="items-wrapper"
      v-motion-slide-top
      class="bg-white rounded-md border border-gray-300 absolute w-full z-10 mt-2.5 py-1 max-h-[200px] overflow-y-auto"
      tabindex="-1"
      @scroll="onScrollWrapper"
    >
      <p
        v-if="!items.length && (withSearchEmptyCreate ? !search : true)"
        class="px-3 py-2 text-gray-700 text-center"
      >
        No results found
      </p>
      <a
        v-else-if="!items.length && search && withSearchEmptyCreate"
        class="px-3 py-2 text-gray-700 text-center flex items-center justify-center gap-2 cursor-pointer"
        @click.prevent="onCreateEmptySearchItem"
      >
        <Icon icon="tabler:plus" />
        Add <span class="text-blue-600">"{{ search }}"</span> as new item
      </a>
      <div
        v-for="(item, index) in items"
        :key="item.id"
        ref="items-div"
        :class="[
          'px-3 py-2 text-gray-900',
          currentHoverItem === index ? 'bg-gray-50' : '',
        ]"
        @mouseenter="onHoveritem(index)"
        @click="onClickItem(item)"
      >
        <slot name="item" :item="item">{{ item.name }}</slot>
      </div>
    </div>
  </div>
</template>
