<script setup>
import Spinner from '../spinner/Spinner.vue';

defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
  loading: Boolean,
  hoverable: {
    type: Boolean,
    default: true,
  },
});

const classes = {
  td: 'px-4 py-3 border-b border-gray-300 text-gray-900',
};
</script>

<template>
  <table class="w-full border border-gray-300">
    <thead>
      <tr>
        <th
          v-for="column in columns"
          :key="column.id"
          :class="[
            'bg-gray-100 border-b border-gray-300 px-4 py-3 text-gray-900',
            column.textAlign
              ? column.textAlign === 'right'
                ? 'text-right'
                : 'text-center'
              : 'text-left',
          ]"
        >
          {{ column.name }}
        </th>
      </tr>
    </thead>
    <tbody class="relative">
      <tr v-if="loading">
        <td>
          <div
            class="absolute inset-0 flex items-center justify-center bg-gray-200/50 z-10"
          >
            <Spinner size="lg" color="secondary" />
          </div>
        </td>
      </tr>
      <tr v-if="!data.length">
        <td class="px-4 py-3 text-center" :colspan="columns.length">No Data</td>
      </tr>
      <tr
        v-for="(item, index) in data"
        :key="item.id"
        :class="[hoverable ? 'hover:bg-gray-50' : '']"
      >
        <slot name="td" :item="item" :index="index" :classes="classes" />
      </tr>
    </tbody>
    <tfoot v-if="$slots.footer">
      <slot name="footer" :classes="classes" />
    </tfoot>
  </table>
</template>
