import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Confirm from './Confirm.vue';
import Modal from '../modal/Modal.vue';
import vClickOutside from 'click-outside-vue3';
import { MotionPlugin } from '@vueuse/motion';
import Heading from '../heading/Heading.vue';
import Button from '../button/Button.vue';

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

  test('should render title', () => {
    const wrapper = mount(Confirm, {
      props: {
        title: 'Test',
        message: 'Test',
        visible: true,
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    const title = wrapper.findComponent(Heading);

    expect(title.exists()).toBe(true);
    expect(title.props('title')).toEqual('Test');
    expect(title.props('level')).toEqual(4);
  });

  test('should render message', () => {
    const wrapper = mount(Confirm, {
      props: {
        title: 'Test',
        message: 'Test',
        visible: true,
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    const message = wrapper.find('p');

    expect(message.exists()).toBe(true);
    expect(message.text()).toEqual('Test');
  });

  test('should render confirm button', () => {
    const wrapper = mount(Confirm, {
      props: {
        title: 'Test',
        message: 'Test',
        visible: true,
        confirmText: 'Test',
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    const [confirmButton] = wrapper.findAllComponents(Button);

    expect(confirmButton.exists()).toBe(true);
    expect(confirmButton.text()).toEqual('Test');
    expect(confirmButton.props('color')).toEqual('primary');
    expect(confirmButton.props('loading')).toEqual(false);
  });

  test('should render cancel button', () => {
    const wrapper = mount(Confirm, {
      props: {
        title: 'Test',
        message: 'Test',
        visible: true,
        cancelText: 'Test',
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    const [, cancelButton] = wrapper.findAllComponents(Button);

    expect(cancelButton.exists()).toBe(true);
    expect(cancelButton.text()).toEqual('Test');
  });

  test('should disable confirm button when loading', () => {
    const wrapper = mount(Confirm, {
      props: {
        title: 'Test',
        message: 'Test',
        visible: true,
        loading: true,
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    const [confirmButton] = wrapper.findAllComponents(Button);

    expect(confirmButton.props('loading')).toEqual(true);
  });

  test('should set confirm button color when confirm color exists', () => {
    const wrapper = mount(Confirm, {
      props: {
        title: 'Test',
        message: 'Test',
        visible: true,
        confirmColor: 'error',
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    const [confirmButton] = wrapper.findAllComponents(Button);

    expect(confirmButton.props('color')).toEqual('error');
  });
});
