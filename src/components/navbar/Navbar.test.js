import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Navbar from './Navbar.vue';
import { createRouter, RouterLink } from 'vue-router';
import { createWebHistory } from 'vue-router';
import vclickOutside from 'click-outside-vue3';
import Container from '../container/Container.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: {
      template: '<div></div>',
    },
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

  test('should hide start menu on desktop by default', () => {
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

  test('should render brand', () => {
    const wrapper = mount(Navbar, {
      props: {
        brand: 'Test',
        brandRoute: {
          name: 'home',
        },
      },
      global: {
        plugins: [
          createRouter({ history: createWebHistory(), routes }),
          vclickOutside,
        ],
      },
    });

    const start = wrapper.find('[data-test="start"]');
    const brand = start.findComponent(RouterLink);

    expect(brand.exists()).toBe(true);
    expect(brand.props('to')).toEqual({ name: 'home' });
    expect(brand.text()).toEqual('Test');
  });

  test('should display start menu on desktop when brand is exists', () => {
    const wrapper = mount(Navbar, {
      props: {
        brand: 'Test',
        brandRoute: {
          name: 'home',
        },
      },
      global: {
        plugins: [
          createRouter({ history: createWebHistory(), routes }),
          vclickOutside,
        ],
      },
    });

    const start = wrapper.find('[data-test="start"]');

    expect(start.classes()).not.toContain('sm:hidden');
  });

  test('should render start slot', () => {
    const wrapper = mount(Navbar, {
      props: {
        brand: 'Test',
        brandRoute: {
          name: 'home',
        },
      },
      slots: {
        start: '<p>Test</p>',
      },
      global: {
        plugins: [
          createRouter({ history: createWebHistory(), routes }),
          vclickOutside,
        ],
      },
    });

    const start = wrapper.find('[data-test="start"]');

    expect(start.exists()).toBe(false);
    expect(wrapper.html()).toContain('<p>Test</p>');
  });

  test('should render menu links', () => {
    const menus = [
      { id: 1, name: 'link 1', href: 'link 1' },
      { id: 2, name: 'link 2', href: 'link 2' },
      { id: 3, name: 'link 3', href: 'link 3' },
    ];

    const wrapper = mount(Navbar, {
      props: {
        menus,
      },
      global: {
        plugins: [
          createRouter({ history: createWebHistory(), routes }),
          vclickOutside,
        ],
      },
    });

    const links = wrapper.findAll('a');

    expect(links).toHaveLength(3);
    expect(
      links.map((link) => ({
        href: link.element.getAttribute('href'),
        name: link.text(),
      })),
    ).toEqual(menus.map((menu) => ({ href: menu.href, name: menu.name })));
  });

  test('should render menu route links', () => {
    const menus = [
      { id: 1, name: 'link 1', to: { name: 'home' } },
      { id: 2, name: 'link 2', to: { name: 'home' } },
      { id: 3, name: 'link 3', to: { name: 'home' } },
    ];

    const wrapper = mount(Navbar, {
      props: {
        menus,
      },
      global: {
        plugins: [
          createRouter({ history: createWebHistory(), routes }),
          vclickOutside,
        ],
      },
    });

    const links = wrapper.findAllComponents(RouterLink);

    expect(links).toHaveLength(3);
    expect(
      links.map((link) => ({ to: link.props('to'), name: link.text() })),
    ).toEqual(menus.map((menu) => ({ to: menu.to, name: menu.name })));
  });

  test('should render end slot', () => {
    const wrapper = mount(Navbar, {
      slots: {
        end: '<p>Test</p>',
      },
      global: {
        plugins: [
          createRouter({ history: createWebHistory(), routes }),
          vclickOutside,
        ],
      },
    });

    expect(wrapper.html()).toContain('<p>Test</p>');
  });

  test('should bordered by default', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [
          createRouter({ history: createWebHistory(), routes }),
          vclickOutside,
        ],
      },
    });

    expect(wrapper.find('nav').classes()).toContain('border-b');
  });

  test('should not bordered when bordered is false', () => {
    const wrapper = mount(Navbar, {
      props: {
        bordered: false,
      },
      global: {
        plugins: [
          createRouter({ history: createWebHistory(), routes }),
          vclickOutside,
        ],
      },
    });

    expect(wrapper.find('nav').classes()).not.toContain('border-b');
  });
});
