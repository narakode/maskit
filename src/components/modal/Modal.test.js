import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Modal from './Modal.vue';
import vClickOutside from 'click-outside-vue3';
import { MotionPlugin } from '@vueuse/motion';
import Container from '../container/Container.vue';
import Card from '../card/Card.vue';
import { Icon } from '@iconify/vue';

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

  test('should render title', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
        title: 'Test',
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    const card = wrapper.findComponent(Card);

    expect(card.props('title')).toEqual('Test');
  });

  test('should render close button', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
        title: 'Test',
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    const card = wrapper.findComponent(Card);
    const icon = card.findComponent(Icon);

    expect(icon.exists()).toBe(true);
    expect(icon.props('icon')).toEqual('tabler:x');
  });

  test('should hide modal when close button clicked', async () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
        title: 'Test',
        'onUpdate:visible': (e) => wrapper.setProps({ visible: e }),
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    const closeButton = wrapper.find('button.cursor-pointer.text-gray-900');

    await closeButton.trigger('click');

    expect(wrapper.props('visible')).toBe(false);
  });
});
