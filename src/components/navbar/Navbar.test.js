import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Navbar from './Navbar.vue';
import vclickOutside from 'click-outside-vue3';
import Container from '../container/Container.vue';

describe('Navbar', () => {
  test('should render nav', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [vclickOutside],
      },
    });

    expect(wrapper.find('nav').exists()).toBe(true);
  });

  test('should render Container', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [vclickOutside],
      },
    });

    expect(wrapper.findComponent(Container).exists()).toBe(true);
  });

  test('should render toggle mobile sidebar button', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [vclickOutside],
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
        plugins: [vclickOutside],
      },
    });

    expect(wrapper.find('[data-test="brand"]').exists()).toBe(false);
  });

  test('should render brand', () => {
    const wrapper = mount(Navbar, {
      props: {
        brand: 'Test',
      },
      global: {
        plugins: [vclickOutside],
      },
    });

    const start = wrapper.find('[data-test="start"]');
    const brand = start.find('[data-test="brand"]');

    expect(brand.exists()).toBe(true);
    expect(brand.element.tagName).toEqual('A');
    expect(brand.text()).toEqual('Test');
  });

  test('should render brand link', () => {
    const wrapper = mount(Navbar, {
      props: {
        brand: 'Test',
        brandLink: '/home',
      },
      global: {
        plugins: [vclickOutside],
      },
    });

    const start = wrapper.find('[data-test="start"]');
    const brand = start.find('[data-test="brand"]');

    expect(brand.element.getAttribute('href')).toEqual('/home');
  });

  test('should render brand slot', () => {
    const wrapper = mount(Navbar, {
      props: {
        brand: 'Test',
        brandLink: '/home',
      },
      slots: {
        brand: '<button>Brand</button>',
      },
      global: {
        plugins: [vclickOutside],
      },
    });

    const start = wrapper.find('[data-test="start"]');
    const brand = start.find('[data-test="brand"]');

    expect(start.html()).toContain('<button>Brand</button>');
    expect(brand.exists()).toBe(false);
  });

  test('should hide start menu on desktop by default', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [vclickOutside],
      },
    });

    expect(wrapper.find('[data-test="start"]').classes()).toContain(
      'sm:hidden',
    );
  });

  test('should display start menu on desktop when brand is exists', () => {
    const wrapper = mount(Navbar, {
      props: {
        brand: 'Test',
      },
      global: {
        plugins: [vclickOutside],
      },
    });

    const start = wrapper.find('[data-test="start"]');

    expect(start.classes()).not.toContain('sm:hidden');
  });

  test('should render start slot', () => {
    const wrapper = mount(Navbar, {
      props: {
        brand: 'Test',
      },
      slots: {
        start: '<p>Test</p>',
      },
      global: {
        plugins: [vclickOutside],
      },
    });

    const start = wrapper.find('[data-test="start"]');

    expect(start.exists()).toBe(false);
    expect(wrapper.html()).toContain('<p>Test</p>');
  });

  test('should render end slot', () => {
    const wrapper = mount(Navbar, {
      slots: {
        end: '<p>Test</p>',
      },
      global: {
        plugins: [vclickOutside],
      },
    });

    expect(wrapper.html()).toContain('<p>Test</p>');
  });

  test('should bordered by default', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [vclickOutside],
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
        plugins: [vclickOutside],
      },
    });

    expect(wrapper.find('nav').classes()).not.toContain('border-b');
  });

  test('should apply container custom props', () => {
    const wrapper = mount(Navbar, {
      props: {
        containerProps: { maxScreen: 'md' },
      },
      global: {
        plugins: [vclickOutside],
      },
    });

    expect(wrapper.findComponent(Container).props('maxScreen')).toEqual('md');
  });

  test('should hide mobile sidebar menus by default', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [vclickOutside],
      },
    });

    const mobileSidebar = wrapper.find('[data-test="menus"]');

    expect(mobileSidebar.classes()).toContain('-left-full');
  });

  test('should open mobile sidebar menus when burger button is clicked', async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [vclickOutside],
      },
    });

    const toggleSidebarButton = wrapper.find(
      'button[aria-label="Toggle Sidebar"',
    );

    await toggleSidebarButton.trigger('click');

    const mobileSidebar = wrapper.find('[data-test="menus"]');

    expect(mobileSidebar.classes()).not.toContain('-left-full');
    expect(mobileSidebar.classes()).toContain('left-0');
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
        plugins: [vclickOutside],
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

  test('should display menus position in start by default', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [vclickOutside],
      },
    });

    const mobileSidebar = wrapper.find('[data-test="menus"]');

    expect(mobileSidebar.classes()).toContain('sm:static');
  });

  test('should display menus position in center when menu align is center', () => {
    const wrapper = mount(Navbar, {
      props: {
        menuAlign: 'center',
      },
      global: {
        plugins: [vclickOutside],
      },
    });

    const mobileSidebar = wrapper.find('[data-test="menus"]');

    expect(wrapper.findComponent(Container).classes()).toContain('relative');
    expect(mobileSidebar.classes()).toEqual(
      expect.arrayContaining(
        'sm:left-1/2 sm:-translate-x-1/2 sm:absolute'.split(' '),
      ),
    );
  });

  test('should highlight active menu', () => {
    const menus = [
      { id: 1, name: 'link 1', href: '/' },
      { id: 2, name: 'link 2', href: '/' },
      { id: 3, name: 'link 3', href: '/' },
    ];

    const wrapper = mount(Navbar, {
      props: {
        menus,
        activeMenu: 2,
      },
      global: {
        plugins: [vclickOutside],
      },
    });

    const [notActive, active] = wrapper.findAll('a');

    expect(notActive.classes()).toEqual(
      expect.arrayContaining(
        'rounded-md text-gray-900 hover:bg-gray-100 sm:text-gray-900 sm:hover:text-blue-600 sm:hover:bg-transparent'.split(
          ' ',
        ),
      ),
    );
    expect(active.classes()).toEqual(
      expect.arrayContaining(
        'font-bold rounded-md bg-blue-600 text-white sm:bg-transparent sm:text-blue-600'.split(
          ' ',
        ),
      ),
    );
  });

  test('should apply custom menu class', () => {
    const menus = [
      { id: 1, name: 'link 1', href: '/' },
      { id: 2, name: 'link 2', href: '/' },
      { id: 3, name: 'link 3', href: '/' },
    ];

    const wrapper = mount(Navbar, {
      props: {
        menus,
        activeMenu: 2,
        customClass: {
          menuDefault: 'text-red-100',
          menuActive: 'text-green-100',
        },
      },
      global: {
        plugins: [vclickOutside],
      },
    });

    const [notActive, active] = wrapper.findAll('a');

    expect(notActive.classes()).toContain('text-red-100');
    expect(active.classes()).toContain('text-green-100');
  });

  test('should render menu slot', () => {
    const menus = [
      { id: 1, name: 'link 1', href: '/' },
      { id: 2, name: 'link 2', href: '/' },
      { id: 3, name: 'link 3', href: '/' },
    ];

    const wrapper = mount(Navbar, {
      slots: {
        menu: `<template #menu="{ menu, classes, isActive }"><button :class="['menu-link', classes.menu, isActive ? 'bg-green-100' : 'bg-red-100']">{{ menu.name }}</button></template>`,
      },
      props: {
        menus,
        activeMenu: 2,
        customClass: {
          menuDefault: 'text-red-100',
          menuActive: 'text-green-100',
        },
      },
      global: {
        plugins: [vclickOutside],
      },
    });

    const links = wrapper.findAll('.menu-link');

    expect(links).toHaveLength(3);
    expect(links[0].classes()).toEqual(
      expect.arrayContaining(['text-red-100', 'bg-red-100']),
    );
    expect(links[1].classes()).toEqual(
      expect.arrayContaining(['text-green-100', 'bg-green-100']),
    );
  });
});
