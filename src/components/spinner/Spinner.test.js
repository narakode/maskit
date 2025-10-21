import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Spinner from './Spinner.vue';
import { Icon } from '@iconify/vue';
import SpinnerConfig from './Spinner.config';

describe('Spinner', () => {
  test('should render loader icon', () => {
    const wrapper = mount(Spinner);

    const icon = wrapper.findComponent(Icon);

    expect(icon.exists()).toBe(true);
    expect(icon.props('icon')).toEqual('tabler:loader');
  });

  test('should animate loader icon', () => {
    const wrapper = mount(Spinner);

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['animate-spin']));
  });

  test('should have default size class', () => {
    const wrapper = mount(Spinner);

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(SpinnerConfig.sizes.md.split(' ')),
    );
  });

  test('should have default color class', () => {
    const wrapper = mount(Spinner);

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(SpinnerConfig.colors.primary.split(' ')),
    );
  });

  test('should have suze class by suze prop', () => {
    const wrapper = mount(Spinner, {
      props: {
        size: 'lg',
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(SpinnerConfig.sizes.lg.split(' ')),
    );
  });

  test('should have color class by color prop', () => {
    const wrapper = mount(Spinner, {
      props: {
        color: 'secondary',
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(SpinnerConfig.colors.secondary.split(' ')),
    );
  });
});
