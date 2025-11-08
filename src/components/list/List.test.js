import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import List from './List.vue';
import Card from '../card/Card.vue';

describe.only('List', () => {
  test('should render paddless Card', () => {
    const wrapper = mount(List);

    const card = wrapper.findComponent(Card);

    expect(card.exists()).toBe(true);
    expect(card.props('paddless')).toBe(true);
  });

  test('should render empty message on empty data', () => {
    const wrapper = mount(List);

    expect(wrapper.text()).toContain("There's nothing here yet.");
  });

  test('should render default slot', () => {
    const wrapper = mount(List, {
      props: {
        data: [{ id: 1, name: 'test' }],
      },
      slots: {
        default: `<template #default><p>Test</p></template>`,
      },
    });

    expect(wrapper.html()).toContain('<p>Test</p>');
  });

  test('should render item slot', () => {
    const wrapper = mount(List, {
      props: {
        data: [
          { id: 1, name: 'item 1' },
          { id: 2, name: 'item 2' },
        ],
      },
      slots: {
        item: `<template #item="{ item }"><p>{{item.name}}</p></template>`,
      },
    });

    expect(wrapper.html()).toContain('<p>item 1</p>');
    expect(wrapper.html()).toContain('<p>item 2</p>');
  });

  test('should render header slot', () => {
    const wrapper = mount(List, {
      slots: {
        header: `<template #header><p>test</p></template>`,
      },
    });

    expect(wrapper.html()).toContain('<p>test</p>');
  });

  test('should render footer slot', () => {
    const wrapper = mount(List, {
      slots: {
        footer: `<template #footer><p>test</p></template>`,
      },
    });

    expect(wrapper.html()).toContain('<p>test</p>');
  });

  test('should have default item size class', () => {
    const wrapper = mount(List, {
      props: {
        data: [{ id: 1, name: 'item 1' }],
      },
      slots: {
        item: `<template #item="{ classes, item }"><p>{{ item.name }}</p></template>`,
      },
    });

    const item = wrapper.find('[data-test="item"]');

    expect(item.classes()).toContain('p-4');
  });

  test('should have item size class by size prop', () => {
    const wrapper = mount(List, {
      props: {
        data: [{ id: 1, name: 'item 1' }],
        size: 'sm',
      },
      slots: {
        item: `<template #item="{ classes, item }"><p>{{ item.name }}</p></template>`,
      },
    });

    const item = wrapper.find('[data-test="item"]');

    expect(item.classes()).toEqual(
      expect.arrayContaining('px-3 py-2'.split(' ')),
    );
  });
});
