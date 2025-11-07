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

  test('should not render container when with-container prop is false', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
        withContainer: false,
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    expect(wrapper.findComponent(Container).exists()).toBe(false);
  });

  test('should apply class to Container when customClass container is exists', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
        customClass: {
          container: 'bg-red-100',
        },
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    expect(wrapper.findComponent(Container).classes()).toContain('bg-red-100');
  });

  test('should apply props to Container when containerProps is exists', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
        containerProps: {
          maxScreen: 'sm',
        },
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    expect(wrapper.findComponent(Container).props('maxScreen')).toEqual('sm');
  });

  test('should apply props to Card when cardProps is exists', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
        cardProps: {
          paddless: true,
        },
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    expect(wrapper.findComponent(Card).props('paddless')).toBe(true);
  });

  test('should align modal to top by default', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    expect(wrapper.find('div').classes()).not.toEqual(
      expect.arrayContaining(['flex', 'items-center']),
    );
  });

  test('should align modal to center when vertical align is center', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
        verticalAlign: 'center',
      },
      global: {
        plugins: [vClickOutside, MotionPlugin],
      },
    });

    expect(wrapper.find('div').classes()).toEqual(
      expect.arrayContaining(['flex', 'items-center']),
    );
  });

  describe('when opened', () => {
    test('should emit opened event', async () => {
      const wrapper = mount(Modal, {
        props: {
          visible: false,
        },
        global: {
          plugins: [vClickOutside, MotionPlugin],
        },
      });

      await wrapper.setProps({ visible: true });

      expect(wrapper.emitted()).toHaveProperty('opened');
    });

    test('should hide body scrollbar', async () => {
      const wrapper = mount(Modal, {
        props: {
          visible: false,
        },
        global: {
          plugins: [vClickOutside, MotionPlugin],
        },
      });

      await wrapper.setProps({ visible: true });

      expect(document.body.classList).toContain('overflow-y-hidden');
    });
  });
});
