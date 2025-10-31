import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import FormItem from './FormItem.vue';

describe('FormItem', () => {
  test('should render label', () => {
    const wrapper = mount(FormItem, {
      props: {
        id: 'test',
        label: 'Test',
      },
    });

    const label = wrapper.find('label');

    expect(label.exists()).toBe(true);
    expect(label.text()).toEqual('Test');
    expect(label.attributes()).toHaveProperty('for');
    expect(label.attributes().for).toEqual('test');
  });

  test('should render slot', () => {
    const wrapper = mount(FormItem, {
      props: {
        id: 'test',
        label: 'Test',
      },
      slots: {
        default: `<template #default="{ id }"><input :id="id" /></template>`,
      },
    });

    const input = wrapper.find('input');

    expect(input.exists()).toBe(true);
    expect(input.attributes()).toHaveProperty('id');
    expect(input.attributes().id).toEqual('test');
  });
});
