import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Section from './Section.vue';
import Container from '../container/Container.vue';
import { Icon } from '@iconify/vue';

describe('Section', () => {
  test('should render section element', () => {
    const wrapper = mount(Section);

    expect(wrapper.find('section').exists()).toBe(true);
  });

  test('should render custom tag', () => {
    const wrapper = mount(Section, {
      props: {
        tag: 'article',
      },
    });

    expect(wrapper.find('article').exists()).toBe(true);
    expect(wrapper.find('section').exists()).toBe(false);
  });

  test('should have vertical padding class by default', () => {
    const wrapper = mount(Section);

    expect(wrapper.classes()).toEqual(
      'py-10 sm:py-12 md:py-14 xl:py-16 2xl:py-20'.split(' '),
    );
  });

  test('should not have vertical padding class when hasVerticalPadding prop is false', () => {
    const wrapper = mount(Section, {
      props: {
        hasVerticalPadding: false,
      },
    });

    expect(wrapper.classes()).toEqual([]);
  });

  test('should render Container by default', () => {
    const wrapper = mount(Section);

    expect(wrapper.findComponent(Container).exists()).toBe(true);
  });

  test('should not render Container when withContainer prop is false', () => {
    const wrapper = mount(Section, {
      props: {
        withContainer: false,
      },
    });

    expect(wrapper.findComponent(Container).exists()).toBe(false);
  });

  test('should pass containerProps to Container props', () => {
    const wrapper = mount(Section, {
      props: {
        containerProps: { maxScreen: 'sm' },
      },
    });

    expect(wrapper.findComponent(Container).props('maxScreen')).toEqual('sm');
  });

  test('should not render spaced content by default', () => {
    const wrapper = mount(Section);

    expect(wrapper.find('[data-test="main"]').exists()).toBe(false);
  });

  describe('when title prop is exists', () => {
    test('should render spaced content', () => {
      const wrapper = mount(Section, {
        props: {
          title: 'Test',
        },
      });

      expect(wrapper.find('[data-test="main"]').exists()).toBe(true);
    });

    test('should render header', () => {
      const wrapper = mount(Section, {
        props: {
          title: 'Test',
        },
      });

      expect(wrapper.find('header').exists()).toBe(true);
    });

    test('should have responsive header class', () => {
      const wrapper = mount(Section, {
        props: {
          title: 'Test',
        },
      });

      expect(wrapper.find('header').classes()).toEqual(
        'flex flex-col items-start gap-2 justify-between sm:flex-row sm:items-center'.split(
          ' ',
        ),
      );
    });

    test('should not have responsive header class when responsiveHeader is false', () => {
      const wrapper = mount(Section, {
        props: {
          title: 'Test',
          responsiveHeader: false,
        },
      });

      expect(wrapper.find('header').classes()).toEqual(
        'flex items-center gap-2 justify-between'.split(' '),
      );
    });

    test('should render heading', () => {
      const wrapper = mount(Section, {
        props: {
          title: 'Test',
        },
      });

      const heading = wrapper.find('h2');

      expect(heading.exists()).toBe(true);
      expect(heading.text()).toEqual('Test');
    });

    test('should render heading level by level prop', () => {
      const wrapper = mount(Section, {
        props: {
          title: 'Test',
          titleLevel: 5,
        },
      });

      const heading = wrapper.find('h5');

      expect(heading.exists()).toBe(true);
      expect(heading.text()).toEqual('Test');
    });

    test('should not render icon heading by default', () => {
      const wrapper = mount(Section, {
        props: {
          title: 'Test',
        },
      });

      expect(wrapper.find('h2').findComponent(Icon).exists()).toBe(false);
    });

    test('should render icon heading from titleIcon props', () => {
      const wrapper = mount(Section, {
        props: {
          title: 'Test',
          titleIcon: 'tabler:rocket',
        },
      });

      const icon = wrapper.find('h2').findComponent(Icon);

      expect(icon.exists()).toBe(true);
      expect(icon.props('icon')).toEqual('tabler:rocket');
    });

    test('should render action slot when exists', () => {
      const wrapper = mount(Section, {
        props: {
          title: 'Test',
        },
        slots: {
          action: '<button>Test</button>',
        },
      });

      expect(wrapper.find('header').html()).toContain('<button>Test</button>');
    });

    test('should render default slot when exists in spaced content', () => {
      const wrapper = mount(Section, {
        props: {
          title: 'Test',
        },
        slots: {
          default: '<button>Test</button>',
        },
      });

      expect(wrapper.find('[data-test="main"]').html()).toContain(
        '<button>Test</button>',
      );
    });
  });

  test('should render default slot when exists', () => {
    const wrapper = mount(Section, {
      slots: {
        default: '<button>Test</button>',
      },
    });

    expect(wrapper.html()).toContain('<button>Test</button>');
  });
});
