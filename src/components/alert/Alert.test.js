import { mount } from '@vue/test-utils';
import { test, expect, describe } from 'vitest';
import Alert from './Alert.vue';
import { Icon } from '@iconify/vue';
import AlertConfig from './Alert.config';

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

    const icon = wrapper.findComponent(Icon);

    expect(icon.exists()).toBe(true);
    expect(icon.props('icon')).toEqual(AlertConfig.iconNames.info);
  });

  test('should have base class', () => {
    const wrapper = mount(Alert);

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(AlertConfig.base.split(' ')),
    );
  });

  test('should have default color class', () => {
    const wrapper = mount(Alert);

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(AlertConfig.colors.info.split(' ')),
    );
  });

  test('should have color class by color prop', () => {
    const wrapper = mount(Alert, {
      props: {
        color: 'success',
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(AlertConfig.colors.success.split(' ')),
    );
  });

  test('should render icon name by color prop', () => {
    const wrapper = mount(Alert, {
      props: {
        color: 'success',
      },
    });

    const icon = wrapper.findComponent(Icon);

    expect(icon.props('icon')).toEqual(AlertConfig.iconNames.success);
  });
});
