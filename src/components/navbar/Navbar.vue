<script setup>
import { computed, ref, useTemplateRef } from 'vue';
import Container from '../container/Container.vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  containerProps: null,
  menus: {
    type: Array,
    default: () => [],
  },
  activeMenu: null,
  brand: String,
  brandLink: null,
  bordered: {
    type: Boolean,
    default: true,
  },
  menuAlign: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'center'].includes(value),
  },
  customClass: {
    type: Object,
    default: () => ({
      menuDefault: '',
      menuActive: '',
    }),
  },
});

const toggleSidebarButton = useTemplateRef('toggle-button');
const mobileSidebarVisible = ref(false);

const brandClass = 'font-bold text-lg flex items-center gap-2 lg:text-xl';
const menusDynamicPositionClass = computed(() => {
  const baseClass = [
    props.menuAlign === 'center'
      ? 'sm:left-1/2 sm:-translate-x-1/2 sm:absolute'
      : 'sm:left-0 sm:static',
  ];

  if (mobileSidebarVisible.value) {
    return ['left-0', baseClass];
  }

  return ['-left-full', baseClass];
});

function getMenuClass(menu) {
  return [
    'relative px-3 py-2 sm:p-0',
    props.activeMenu === menu.id
      ? [
          'font-bold rounded-md bg-blue-600 text-white sm:bg-transparent sm:text-blue-600',
          props.customClass.menuActive,
        ]
      : [
          'rounded-md text-gray-900 hover:bg-gray-100 sm:text-gray-900 sm:hover:text-blue-600 sm:hover:bg-transparent',
          props.customClass.menuDefault,
        ],
  ];
}
function onClickOutsideSidebar(e) {
  if (!toggleSidebarButton.value.contains(e.target)) {
    mobileSidebarVisible.value = false;
  }
}
</script>

<template>
  <nav
    :class="[
      'h-14 bg-white flex items-center lg:h-16 text-gray-900',
      bordered ? 'border-b border-gray-300' : '',
    ]"
  >
    <Container
      :class="[
        'flex items-center justify-between',
        props.menuAlign === 'center' ? 'relative' : '',
      ]"
      v-bind="containerProps"
    >
      <div class="flex items-center gap-6">
        <slot name="start">
          <div
            data-test="start"
            :class="[
              'flex items-center gap-4',
              brand || $slots.brand ? '' : 'sm:hidden',
            ]"
          >
            <!-- burger menu -->
            <button
              ref="toggle-button"
              class="text-gray-900 cursor-pointer flex items-center sm:hidden"
              aria-label="Toggle Sidebar"
              @click="mobileSidebarVisible = true"
            >
              <Icon icon="tabler:menu-2" class="size-5" />
            </button>
            <!-- end burger menu -->

            <!-- brand -->
            <slot name="brand" :classes="{ brand: brandClass }">
              <a
                v-if="brand"
                :href="brandLink"
                data-test="brand"
                :class="brandClass"
              >
                {{ brand }}
              </a>
            </slot>
            <!-- end brand -->
          </div>
        </slot>

        <!-- menus -->
        <div
          v-click-outside="onClickOutsideSidebar"
          data-test="menus"
          :class="[
            'fixed bg-white top-0 h-screen flex flex-col w-48 z-20 border-r border-gray-300 p-3 transition-all sm:transition-none sm:h-full sm:bg-transparent sm:border-0 sm:h-auto sm:w-auto sm:p-0 sm:flex-row sm:items-center sm:gap-4',
            menusDynamicPositionClass,
          ]"
        >
          <template v-for="menu in menus" :key="menu.id">
            <slot
              name="menu"
              :menu="menu"
              :classes="{ menu: getMenuClass(menu) }"
              :is-active="activeMenu === menu.id"
            >
              <a :href="menu.href" :class="getMenuClass(menu)">{{
                menu.name
              }}</a>
            </slot>
          </template>
        </div>
        <!-- end menus -->
      </div>
      <slot name="end" />
    </Container>
  </nav>
</template>
