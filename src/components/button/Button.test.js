import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Button from './Button.vue';
import ButtonConfig from './Button.config';
import { Icon } from '@iconify/vue';
import Spinner from '../spinner/Spinner.vue';

describe.only('Button', () => {
  test('should render text', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Test',
      },
    });

    expect(wrapper.text()).toEqual('Test');
  });

  test('should have default color class', () => {
    const wrapper = mount(Button);

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(ButtonConfig.colors.secondary.split(' ')),
    );
  });

  test('should have color class by color prop', () => {
    const wrapper = mount(Button, {
      props: {
        color: 'error',
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(ButtonConfig.colors.error.split(' ')),
    );
  });

  test('should not have border class by default', () => {
    const wrapper = mount(Button);

    expect(wrapper.classes()).not.toEqual(expect.arrayContaining(['border']));
  });

  test('should have border class when bordered is true', () => {
    const wrapper = mount(Button, {
      props: {
        bordered: true,
      },
    });

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['border']));
  });

  test('should not have transparent class by default', () => {
    const wrapper = mount(Button);

    expect(wrapper.classes()).not.toEqual(
      expect.arrayContaining(['bg-transparent']),
    );
  });

  describe('when bordered is true', () => {
    test('should have border class', () => {
      const wrapper = mount(Button, {
        props: {
          bordered: true,
        },
      });

      expect(wrapper.classes()).toEqual(expect.arrayContaining(['border']));
    });

    test('should have border color class by color prop', () => {
      const wrapper = mount(Button, {
        props: {
          bordered: true,
          color: 'primary',
        },
      });

      expect(wrapper.classes()).toEqual(
        expect.arrayContaining(ButtonConfig.borderColors.primary.split(' ')),
      );
    });
  });

  describe('when transparent is true', () => {
    test('should have transparent class', () => {
      const wrapper = mount(Button, {
        props: {
          transparent: true,
        },
      });

      expect(wrapper.classes()).toEqual(
        expect.arrayContaining(['bg-transparent']),
      );
    });

    test('should not have color class', () => {
      const wrapper = mount(Button, {
        props: {
          transparent: true,
          color: 'primary',
        },
      });

      expect(wrapper.classes()).not.toEqual(
        expect.arrayContaining(ButtonConfig.colors.primary.split(' ')),
      );
    });
  });

  test('should not have color class when override color is true', () => {
    const wrapper = mount(Button, {
      props: {
        overrideColor: true,
      },
    });

    expect(wrapper.classes()).not.toEqual(
      expect.arrayContaining(ButtonConfig.colors.secondary.split(' ')),
    );
  });

  test('should have default size class', () => {
    const wrapper = mount(Button);

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(ButtonConfig.sizes.default.md.split(' ')),
    );
  });

  test('should have size class by size prop', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'lg',
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(ButtonConfig.sizes.default.lg.split(' ')),
    );
  });

  test('should have size responsive class when responsive is true', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'lg',
        responsive: true,
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(ButtonConfig.sizes.responsive.lg.split(' ')),
    );
  });

  test('should not have width full class by default', () => {
    const wrapper = mount(Button);

    expect(wrapper.classes()).not.toEqual(expect.arrayContaining(['w-full']));
  });

  test('should have width full class when width is full', () => {
    const wrapper = mount(Button, {
      props: {
        width: 'full',
      },
    });

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['w-full']));
  });

  test('should not render icon by default', () => {
    const wrapper = mount(Button);

    expect(wrapper.findComponent(Icon).exists()).toBe(false);
  });

  describe('when icon is exists', () => {
    test('should render icon by name', () => {
      const wrapper = mount(Button, {
        props: {
          icon: 'tabler:check',
        },
      });

      const icon = wrapper.findComponent(Icon);

      expect(icon.exists()).toBe(true);
      expect(icon.props('icon')).toEqual('tabler:check');
    });

    describe('when icon only is true', () => {
      test('should have icon only size class', () => {
        const wrapper = mount(Button, {
          props: {
            icon: 'tabler:check',
            iconOnly: true,
          },
        });

        expect(wrapper.classes()).toEqual(
          expect.arrayContaining(ButtonConfig.sizes.iconOnly.md.split(' ')),
        );
      });
      test('should have icon only responsive size class when responsive is true', () => {
        const wrapper = mount(Button, {
          props: {
            icon: 'tabler:check',
            iconOnly: true,
            responsive: true,
          },
        });

        expect(wrapper.classes()).toEqual(
          expect.arrayContaining(
            ButtonConfig.sizes.iconOnlyResponsive.md.split(' '),
          ),
        );
      });
    });

    test('should have position left by default', () => {
      const wrapper = mount(Button, {
        props: {
          icon: 'tabler:check',
        },
      });

      expect(wrapper.props('iconPosition')).toEqual('start');
    });
  });

  test('should not disabled by default', () => {
    const wrapper = mount(Button);

    expect(wrapper.attributes('disabled')).toBeUndefined();
  });

  test('should disabled when disabled is true', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  test('should not render spinner by default', () => {
    const wrapper = mount(Button);

    expect(wrapper.findComponent(Spinner).exists()).toBe(false);
  });

  test('should disabled and render spinner when loading is true', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
    });

    expect(wrapper.attributes('disabled')).toBeDefined();

    const spinner = wrapper.findComponent(Spinner);

    expect(spinner.exists()).toBe(true);
  });

  test('should have spinner color by color prop', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
        color: 'error',
      },
    });

    expect(wrapper.findComponent(Spinner).props('color')).toEqual('error');
  });
});
