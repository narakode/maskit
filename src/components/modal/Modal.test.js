import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Modal from './Modal.vue';
import vClickOutside from 'click-outside-vue3';
import { MotionPlugin } from '@vueuse/motion';
import Container from '../container/Container.vue';
import Card from '../card/Card.vue';

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

  test('should render Container', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    expect(wrapper.findComponent(Container).exists()).toBe(true);
  });

  test('should render Card', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    const card = wrapper.findComponent(Card);

    expect(card.exists()).toBe(true);
    expect(card.props('bordered')).toBe(false);
  });
});
