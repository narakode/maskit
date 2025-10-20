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

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['border']));
  });

  test('should not have transparent class by default', () => {
    const wrapper = mount(Button);

    expect(wrapper.classes()).not.toEqual(
      expect.arrayContaining(['bg-transparent']),
    );
  });

  describe('when color prop exists', () => {
    test('should have color class', () => {
      const wrapper = mount(Button, {
        props: {
          color: 'error',
        },
      });

      expect(wrapper.classes()).toEqual(
        expect.arrayContaining(ButtonConfig.colors.error.split(' ')),
      );
    });

    test('should have border color class when bordered is true', () => {
      const wrapper = mount(Button, {
        props: {
          color: 'light',
          bordered: true,
        },
      });

      expect(wrapper.classes()).toEqual(
        expect.arrayContaining(ButtonConfig.borderColors.light.split(' ')),
      );
    });
  });

  describe('when transparent is true', () => {
    test('should have transparent class', () => {
      const wrapper = mount(Button, {
        props: {
          transparent: true,
        },
      });

      expect(wrapper.classes()).toEqual(
        expect.arrayContaining(['bg-transparent']),
      );
    });

    test('should not have color class', () => {
      const wrapper = mount(Button, {
        props: {
          transparent: true,
          color: 'primary',
        },
      });

      expect(wrapper.classes()).not.toEqual(
        expect.arrayContaining(ButtonConfig.colors.primary.split(' ')),
      );
    });
  });
});
