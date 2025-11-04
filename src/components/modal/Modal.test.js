import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Modal from './Modal.vue';
import vClickOutside from 'click-outside-vue3';
import { MotionPlugin } from '@vueuse/motion';

describe.only('Modal', () => {
  test('should not render content by default', () => {
    const wrapper = mount(Modal, {
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    expect(wrapper.find('div').exists()).toBe(false);
  });

  test('should render content when visible', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
      slots: {
        default: '<p>test</p>',
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    const container = wrapper.find('div');

    expect(container.exists()).toBe(true);
    expect(container.html()).toContain('<p>test</p>');
  });
});
