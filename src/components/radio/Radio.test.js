import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Radio from './Radio.vue';

describe.only('Radio', () => {
  test('should render input radio', () => {
    const wrapper = mount(Radio);

    expect(wrapper.find('input[type=radio]').exists()).toBe(true);
  });

  test('should have default attributes', () => {
    const wrapper = mount(Radio);

    const radio = wrapper.find('input[type=radio]');

    expect(radio.element.disabled).toBe(false);
    expect(radio.element.name).toBe('');
    expect(radio.element.id).not.toBeNull();
  });

  test('should not render label by default', () => {
    const wrapper = mount(Radio);

    expect(wrapper.find('label').exists()).toBe(false);
  });
});
