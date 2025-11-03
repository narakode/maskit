<script setup>
import Modal from '../modal/Modal.vue';
import Heading from '../heading/Heading.vue';
import Button from '../button/Button.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  confirmText: {
    type: String,
    default: 'Confirm',
  },
  confirmColor: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'error', 'warning', 'success'].includes(value),
  },
  cancelText: {
    type: String,
    default: 'Cancel',
  },
  loading: Boolean,
});
defineEmits(['confirmed']);

const visible = defineModel('visible');
</script>

<template>
  <Modal
    v-model:visible="visible"
    :with-container="false"
    :custom-class="{ container: 'w-fit mx-auto px-4' }"
    :card-props="{ paddless: true, class: 'p-8' }"
  >
    <div class="flex flex-col items-center justify-center text-center gap-4">
      <Heading :title="title" :level="4" />
      <p>{{ message }}</p>
      <div class="flex gap-2">
        <Button
          :color="confirmColor"
          :loading="loading"
          @click="$emit('confirmed')"
        >
          {{ confirmText }}
        </Button>
        <Button @click="visible = false">
          {{ cancelText }}
        </Button>
      </div>
    </div>
  </Modal>
</template>
