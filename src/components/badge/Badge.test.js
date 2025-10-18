import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Badge from './Badge.vue';
import BadgeConfig from './Badge.config';
import { Icon } from '@iconify/vue';

describe('Badge', () => {
  test('should render text', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Test',
      },
    });

    expect(wrapper.text()).toBe('Test');
  });

  test('should have default color class', () => {
    const wrapper = mount(Badge);

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(BadgeConfig.colors.info.split(' ')),
    );
  });

  test('should have color class by color prop', () => {
    const wrapper = mount(Badge, {
      props: {
        color: 'warning',
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(BadgeConfig.colors.warning.split(' ')),
    );
  });

  test('should not render icon by default', () => {
    const wrapper = mount(Badge);

    expect(wrapper.findComponent(Icon).exists()).toBe(false);
  });

  test('should render icon by icon prop', () => {
    const wrapper = mount(Badge, {
      props: {
        icon: 'tabler:dashboard',
      },
    });

    const icon = wrapper.findComponent(Icon);

    expect(icon.exists()).toBe(true);
    expect(icon.props('icon')).toEqual('tabler:dashboard');
  });
});
