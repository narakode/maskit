import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Radio from './Radio.vue';

describe('Radio', () => {
  test('should render input radio', () => {
    const wrapper = mount(Radio);

    expect(wrapper.find('input[type=radio]').exists()).toBe(true);
  });

  test('should have default attributes', () => {
    const wrapper = mount(Radio);

    const radio = wrapper.find('input[type=radio]');

    expect(radio.element.disabled).toBe(false);
    expect(radio.element.name).toBe('');
    expect(radio.element.value).toBe('on');
    expect(radio.element.id).not.toBeNull();
  });

  test('should not render label by default', () => {
    const wrapper = mount(Radio);

    expect(wrapper.find('label').exists()).toBe(false);
  });

  test('should set input attributes', () => {
    const wrapper = mount(Radio, {
      props: {
        name: 'Test',
        inputValue: 'Test',
      },
    });

    const radio = wrapper.find('input[type=radio]');

    expect(radio.element.name).toBe('Test');
    expect(radio.element.value).toBe('Test');
  });

  test('should render label', () => {
    const wrapper = mount(Radio, {
      props: {
        label: 'Test',
      },
    });

    const radio = wrapper.find('input');
    const label = wrapper.find('label');

    expect(label.exists()).toBe(true);
    expect(label.text()).toEqual('Test');
    expect(label.element.getAttribute('for')).toEqual(radio.element.id);
  });

  test('should render id on input and for on label when id exists', () => {
    const wrapper = mount(Radio, {
      props: {
        id: 'test',
        label: 'Test',
      },
    });

    const radio = wrapper.find('input');
    const label = wrapper.find('label');

    expect(radio.element.id).toEqual('test');
    expect(label.element.getAttribute('for')).toEqual('test');
  });

  test('should disable input and label when disabled', () => {
    const wrapper = mount(Radio, {
      props: {
        label: 'Test',
        disabled: true,
      },
    });

    const radio = wrapper.find('input');
    const label = wrapper.find('label');

    expect(radio.element.disabled).toBe(true);
    expect(label.classes()).toContain('text-gray-500');
  });

  describe('when value changed', () => {
    test('should update modelValue', async () => {
      const wrapper = mount(Radio, {
        props: {
          inputValue: 'test',
          modelValue: '',
          'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
        },
      });

      const radio = wrapper.find('input');

      await radio.trigger('change');

      expect(wrapper.props('modelValue')).toEqual('test');
    });

    test('should emit change', () => {
      const wrapper = mount(Radio);

      const radio = wrapper.find('input');

      radio.trigger('change');

      expect(wrapper.emitted()).toHaveProperty('change');
    });
  });
});
