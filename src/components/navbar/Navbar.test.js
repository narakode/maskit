import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Navbar from './Navbar.vue';
import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import vclickOutside from 'click-outside-vue3';
import { h } from 'vue';
import Container from '../container/Container.vue';

const routes = [
  {
    path: '/',
    component: h('div'),
  },
];

describe.only('Navbar', () => {
  test('should render nav', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [
          createRouter({ history: createWebHistory(), routes }),
          vclickOutside,
        ],
      },
    });

    expect(wrapper.find('nav').exists()).toBe(true);
  });

  test('should render Container', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [
          createRouter({ history: createWebHistory(), routes }),
          vclickOutside,
        ],
      },
    });

    expect(wrapper.findComponent(Container).exists()).toBe(true);
  });

  test('should render toggle mobile sidebar button', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [
          createRouter({ history: createWebHistory(), routes }),
          vclickOutside,
        ],
      },
    });

    const toggleSidebarButton = wrapper.find(
      'button[aria-label="Toggle Sidebar"',
    );

    expect(toggleSidebarButton.exists()).toBe(true);
    expect(toggleSidebarButton.classes()).toContain('sm:hidden');
  });

  test('should not render brand by default', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [
          createRouter({ history: createWebHistory(), routes }),
          vclickOutside,
        ],
      },
    });

    expect(wrapper.find('[data-test="brand"]').exists()).toBe(false);
  });

  test('should hide start menu by default', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [
          createRouter({ history: createWebHistory(), routes }),
          vclickOutside,
        ],
      },
    });

    expect(wrapper.find('[data-test="start"]').classes()).toContain(
      'sm:hidden',
    );
  });
});
