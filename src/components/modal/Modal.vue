<script setup>
import Container from '../container/Container.vue';
import Card from '../card/Card.vue';
import { Icon } from '@iconify/vue';
import { watch } from 'vue';

defineProps({
  withContainer: {
    type: Boolean,
    default: true,
  },
  customClass: {
    type: Object,
    default: () => ({
      container: '',
    }),
  },
  cardProps: null,
  containerProps: null,
  title: String,
  verticalAlign: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'center'].includes(value),
  },
});

const emit = defineEmits(['opened', 'closed']);

const visible = defineModel('visible');

function onClose() {
  visible.value = false;
}

watch(visible, (newValue) => {
  if (newValue) {
    emit('opened');
    document.body.classList.add('overflow-y-hidden');
  } else {
    emit('closed');
    document.body.classList.remove('overflow-y-hidden');
  }
});
</script>

<template>
  <div
    v-if="visible"
    :class="[
      'fixed inset-0 bg-black/30 py-20 z-9999 overflow-y-auto',
      verticalAlign === 'center' ? 'flex items-center' : '',
    ]"
  >
    <component
      :is="withContainer ? Container : 'div'"
      v-motion-slide-top
      :class="customClass.container"
      v-bind="containerProps"
    >
      <Card
        v-click-outside="onClose"
        :bordered="false"
        :title="title"
        v-bind="cardProps"
      >
        <template #action>
          <button class="cursor-pointer text-gray-900" @click="onClose">
            <Icon icon="tabler:x" />
          </button>
        </template>
        <slot />
      </Card>
    </component>
  </div>
</template>
