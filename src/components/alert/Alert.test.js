import { mount } from '@vue/test-utils';
import { test, expect, describe } from 'vitest';
import Alert from './Alert.vue';
import cssClass from './css-class';
import { Icon } from '@iconify/vue';

describe('Alert', () => {
  test('should render text', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: 'Test',
      },
    });

    expect(wrapper.text()).toBe('Test');
  });

  test('should render icon', () => {
    const wrapper = mount(Alert);

    expect(wrapper.findComponent(Icon).exists()).toBe(true);
  });

  test('should have base class', () => {
    const wrapper = mount(Alert);

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(cssClass.base.split(' ')),
    );
  });

  test('should have default color class', () => {
    const wrapper = mount(Alert);

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(cssClass.colors.info.split(' ')),
    );
  });

  test('should have color class by props', () => {
    const wrapper = mount(Alert, {
      props: {
        color: 'success',
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(cssClass.colors.success.split(' ')),
    );
  });
});
