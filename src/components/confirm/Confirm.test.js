import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Confirm from './Confirm.vue';
import Modal from '../modal/Modal.vue';
import vClickOutside from 'click-outside-vue3';
import { MotionPlugin } from '@vueuse/motion';

describe.only('Confirm', () => {
  test('should render Modal', () => {
    const wrapper = mount(Confirm, {
      props: {
        title: 'Test',
        message: 'Test',
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    expect(wrapper.findComponent(Modal).exists()).toBe(true);
  });

  test('should have default Modal props', () => {
    const wrapper = mount(Confirm, {
      props: {
        title: 'Test',
        message: 'Test',
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    const modal = wrapper.findComponent(Modal);

    expect(modal.props('withContainer')).toEqual(false);
    expect(modal.props('customClass')).toEqual({
      container: 'w-fit mx-auto px-4',
    });
    expect(modal.props('cardProps')).toEqual({ paddless: true, class: 'p-8' });
  });
});
