import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Button from './Button.vue';
import ButtonConfig from './Button.config';

describe.only('Button', () => {
  test('should render text', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Test',
      },
    });

    expect(wrapper.text()).toEqual('Test');
  });

  test('should have default color class', () => {
    const wrapper = mount(Button);

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(ButtonConfig.colors.secondary.split(' ')),
    );
  });

  test('should have color class by color prop', () => {
    const wrapper = mount(Button, {
      props: {
        color: 'error',
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(ButtonConfig.colors.error.split(' ')),
    );
  });

  test('should not have border class by default', () => {
    const wrapper = mount(Button);

    expect(wrapper.classes()).not.toEqual(expect.arrayContaining(['border']));
  });

  test('should have border class when bordered is true', () => {
    const wrapper = mount(Button, {
      props: {
        bordered: true,
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(ButtonConfig.borderColors.secondary.split(' ')),
    );
  });
});
