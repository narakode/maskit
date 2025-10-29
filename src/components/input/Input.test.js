import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Input from './Input.vue';

describe.only('Input', () => {
  test('should render input', () => {
    const wrapper = mount(Input);

    expect(wrapper.find('input').exists()).toBe(true);
  });

  test('test render textarea when tag is textarea', () => {
    const wrapper = mount(Input, {
      props: {
        tag: 'textarea',
      },
    });

    expect(wrapper.find('textarea').exists()).toBe(true);
  });
});
