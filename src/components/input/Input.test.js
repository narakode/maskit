import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Input from './Input.vue';
import InputConfig from './Input.config';

describe.only('Input', () => {
  test('should render input', () => {
    const wrapper = mount(Input);

    expect(wrapper.find('input').exists()).toBe(true);
  });

  test('should have default size class', () => {
    const wrapper = mount(Input);

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(InputConfig.sizes.input.md.split(' ')),
    );
  });

  test('should have size class by size prop', () => {
    const wrapper = mount(Input, {
      props: {
        size: 'sm',
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(InputConfig.sizes.input.sm.split(' ')),
    );
  });

  describe('when tag is textarea', () => {
    test('should render textarea', () => {
      const wrapper = mount(Input, {
        props: {
          tag: 'textarea',
        },
      });

      expect(wrapper.find('textarea').exists()).toBe(true);
    });

    test('should have default size class', () => {
      const wrapper = mount(Input, {
        props: {
          tag: 'textarea',
        },
      });

      expect(wrapper.classes()).toEqual(
        expect.arrayContaining(InputConfig.sizes.textarea.md.split(' ')),
      );
    });

    test('should have size class by size prop', () => {
      const wrapper = mount(Input, {
        props: {
          tag: 'textarea',
          size: 'sm',
        },
      });

      expect(wrapper.classes()).toEqual(
        expect.arrayContaining(InputConfig.sizes.textarea.sm.split(' ')),
      );
    });
  });
});
