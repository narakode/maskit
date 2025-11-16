import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Sidebar from './Sidebar.vue';
import { Icon } from '@iconify/vue';

describe('Sidebar', () => {
  test('should render aside', () => {
    const wrapper = mount(Sidebar, {
      props: {
        brand: 'Test',
      },
    });

    const aside = wrapper.find('aside');

    expect(aside.exists()).toBe(true);
    expect(aside.classes()).toEqual(
      expect.arrayContaining([
        'w-72',
        'fixed',
        'top-0',
        'left-0',
        'bg-gray-900',
      ]),
    );
  });
  test('should render brand', () => {
    const wrapper = mount(Sidebar, {
      props: {
        brand: 'Test',
      },
    });

    const brand = wrapper.find('[data-test="brand"]');

    expect(brand.exists()).toBe(true);
    expect(brand.element.tagName).toEqual('A');
  });
  test('should render brand icon when exists', () => {
    const wrapper = mount(Sidebar, {
      props: {
        brand: 'Test',
        brandIcon: 'tabler:rocket',
      },
    });

    const brand = wrapper.find('[data-test="brand"]');
    const icon = wrapper.findComponent(Icon);

    expect(icon.exists()).toBe(true);
    expect(icon.props('icon')).toEqual('tabler:rocket');
  });
  test('should render menus', () => {
    const wrapper = mount(Sidebar, {
      props: {
        brand: 'Test',
        menus: [
          { id: 'dashboard', name: 'Dashboard', icon: 'tabler:dashboard' },
          { id: 'product', name: 'Product', icon: 'tabler:archive' },
          { id: 'setting', name: 'Setting', icon: 'tabler:setting' },
        ],
      },
    });

    const menus = wrapper.find('[data-test="menus"]');

    expect(menus.exists()).toBe(true);

    const links = menus.findAll('a');

    expect(
      links.map((link) => ({
        name: link.text(),
        icon: link.findComponent(Icon).props('icon'),
      })),
    ).toEqual(
      wrapper.props('menus').map((menu) => ({
        name: menu.name,
        icon: menu.icon,
      })),
    );
  });
  test('should not highlight any menu by default', () => {
    const wrapper = mount(Sidebar, {
      props: {
        brand: 'Test',
        menus: [
          { id: 'dashboard', name: 'Dashboard', icon: 'tabler:dashboard' },
          { id: 'product', name: 'Product', icon: 'tabler:archive' },
          { id: 'setting', name: 'Setting', icon: 'tabler:setting' },
        ],
      },
    });

    const menus = wrapper.find('[data-test="menus"]');

    expect(menus.find('a.bg-blue-600').exists()).toBe(false);
  });
  test('should highlight menu by activeMenu prop', () => {
    const wrapper = mount(Sidebar, {
      props: {
        brand: 'Test',
        menus: [
          { id: 'dashboard', name: 'Dashboard', icon: 'tabler:dashboard' },
          { id: 'product', name: 'Product', icon: 'tabler:archive' },
          { id: 'setting', name: 'Setting', icon: 'tabler:setting' },
        ],
        activeMenu: 'setting',
      },
    });

    const menus = wrapper.find('[data-test="menus"]');
    const activeMenu = menus.find('a.bg-blue-600');

    expect(activeMenu.exists()).toBe(true);
    expect(activeMenu.text()).toEqual('Setting');
  });
  test('should render menu slot', () => {
    const wrapper = mount(Sidebar, {
      props: {
        brand: 'Test',
        menus: [
          { id: 'dashboard', name: 'Dashboard', icon: 'tabler:dashboard' },
          { id: 'product', name: 'Product', icon: 'tabler:archive' },
          { id: 'setting', name: 'Setting', icon: 'tabler:setting' },
        ],
        activeMenu: 'setting',
      },
      slots: {
        menu: `<template #menu="{ menu, classes, isActive }"><button :class="[isActive ? 'text-red-900' : 'text-blue-900']">{{ menu.name }}</button></template>`,
      },
    });

    const menus = wrapper.find('[data-test="menus"]');
    const links = menus.findAll('button');

    expect(links).toHaveLength(3);
    expect(links[0].classes()).toContain('text-blue-900');
    expect(links[2].classes()).toContain('text-red-900');
  });
});
