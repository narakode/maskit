<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  menus: {
    type: Array,
    default: () => [],
  },
  brand: {
    type: String,
    required: true,
  },
  brandIcon: String,
  activeMenu: String,
});

function getMenuClass(menu) {
  return [
    'flex items-center gap-2 px-4 py-2.5 rounded-lg',
    props.activeMenu === menu.id
      ? 'bg-blue-600 font-bold'
      : 'hover:bg-gray-600',
  ];
}
</script>

<template>
  <aside
    class="w-72 h-screen fixed top-0 left-0 bg-gray-900 text-white p-3 space-y-4"
  >
    <a
      href=""
      class="flex items-center gap-2 px-4 py-2.5 font-bold text-lg uppercase tracking-tight"
      data-test="brand"
    >
      <Icon v-if="brandIcon" :icon="brandIcon" class="size-5" />
      {{ brand }}
    </a>

    <div class="space-y-1" data-test="menus">
      <template v-for="menu in menus" :key="menu.id">
        <slot
          name="menu"
          :menu="menu"
          :classes="getMenuClass(menu)"
          :is-active="menu.id === activeMenu"
        >
          <a href="" :class="getMenuClass(menu)">
            <Icon :icon="menu.icon" class="size-5" />
            {{ menu.name }}
          </a>
        </slot>
      </template>
    </div>
  </aside>
</template>
