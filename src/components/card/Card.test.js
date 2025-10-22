import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Card from './Card.vue';

describe('Card', () => {
  test('should render body only on default', () => {
    const wrapper = mount(Card);

    const els = wrapper.findAll('div');

    expect(els).toHaveLength(2);
  });

  test('should have base class by default', () => {
    const wrapper = mount(Card);

    expect(wrapper.classes()).toContain('text-gray-900');
  });

  test('should have border class by default', () => {
    const wrapper = mount(Card);

    expect(wrapper.classes()).toContain('border');
  });

  test('should not have border class when bordered is false', () => {
    const wrapper = mount(Card, {
      props: {
        bordered: false,
      },
    });

    expect(wrapper.classes()).not.toContain('border');
  });

  test('should have rounded class by default', () => {
    const wrapper = mount(Card);

    expect(wrapper.classes()).toContain('rounded-md');
  });

  test('should not have rounded class when rounded is false', () => {
    const wrapper = mount(Card, {
      props: {
        rounded: false,
      },
    });

    expect(wrapper.classes()).not.toContain('rounded-md');
  });

  test('should not have dimmed class by default', () => {
    const wrapper = mount(Card);

    expect(wrapper.classes()).toContain('bg-white');
    expect(wrapper.classes()).not.toContain('bg-gray-100');
  });

  test('should have dimmed class when dimmed is true', () => {
    const wrapper = mount(Card, {
      props: {
        dimmed: true,
      },
    });

    expect(wrapper.classes()).not.toContain('bg-white');
    expect(wrapper.classes()).toContain('bg-gray-100');
  });

  test('should not have shadow class by default', () => {
    const wrapper = mount(Card);

    expect(wrapper.classes()).not.toContain('shadow-md');
  });

  test('should have shadow class when has shadow is true', () => {
    const wrapper = mount(Card, {
      props: {
        hasShadow: true,
      },
    });

    expect(wrapper.classes()).toContain('shadow-md');
  });

  test('should not render action when title is not exists', () => {
    const wrapper = mount(Card, {
      slots: {
        action: '<button>test</button>',
      },
    });

    expect(wrapper.html()).not.toContain('<button>test</button>');
  });

  describe('Body', () => {
    test('should render content', () => {
      const wrapper = mount(Card, {
        slots: {
          default: '<div id="test">test</div>',
        },
      });

      expect(wrapper.html()).toContain('<div id="test">test</div>');
    });

    test('should have padding class by default', () => {
      const wrapper = mount(Card);

      const [, body] = wrapper.findAll('div');

      expect(body.classes()).toContain('p-4');
    });

    test('should not have padding class when padless is true', () => {
      const wrapper = mount(Card, {
        props: {
          paddless: true,
        },
      });

      const [, body] = wrapper.findAll('div');

      expect(body.classes()).not.toContain('p-4');
    });
  });

  describe('when title is exists', () => {
    test('should render header', () => {
      const wrapper = mount(Card, {
        props: {
          title: 'Test',
        },
      });

      expect(wrapper.findAll('div')).toHaveLength(3);
    });

    test('should have divider class by default', () => {
      const wrapper = mount(Card, {
        props: {
          title: 'Test',
        },
      });

      const [, header] = wrapper.findAll('div');

      expect(header.classes()).toEqual(
        expect.arrayContaining(['border-b', 'border-gray-300', 'p-4']),
      );
    });

    test('should not have divider class when striped is false', () => {
      const wrapper = mount(Card, {
        props: {
          title: 'Test',
          striped: false,
        },
      });

      const [, header] = wrapper.findAll('div');

      expect(header.classes()).not.toEqual(
        expect.arrayContaining(['border-b', 'border-gray-300', 'p-4']),
      );
    });

    test('should render action', () => {
      const wrapper = mount(Card, {
        props: {
          title: 'Text',
        },
        slots: {
          action: '<button>test</button>',
        },
      });

      expect(wrapper.html()).toContain('<button>test</button>');
    });

    describe('Title', () => {
      test('should render text', () => {
        const wrapper = mount(Card, {
          props: {
            title: 'Test',
          },
        });

        const [, header] = wrapper.findAll('div');

        expect(header.text()).toEqual('Test');
      });

      test('should not have responsive class by default', () => {
        const wrapper = mount(Card, {
          props: {
            title: 'Test',
          },
        });

        const title = wrapper.find('h2');

        expect(title.classes()).not.toEqual(
          expect.arrayContaining(['text-lg', 'lg:text-xl']),
        );
        expect(title.classes()).toContain('text-xl');
      });

      test('should have responsive class when title responsive is true', () => {
        const wrapper = mount(Card, {
          props: {
            title: 'Test',
            titleResponsive: true,
          },
        });

        const title = wrapper.find('h2');

        expect(title.classes()).toEqual(
          expect.arrayContaining(['text-lg', 'lg:text-xl']),
        );
        expect(title.classes()).not.toContain('text-xl');
      });

      test('should render default tag name', () => {
        const wrapper = mount(Card, {
          props: {
            title: 'Test',
          },
        });

        const title = wrapper.find('h2');

        expect(title.exists()).toBe(true);
      });

      test('should render tag by title tag name prop', () => {
        const wrapper = mount(Card, {
          props: {
            title: 'Test',
            titleTag: 'h5',
          },
        });

        const title = wrapper.find('h5');

        expect(title.exists()).toBe(true);
      });
    });
  });

  test('should render footer when exist', () => {
    const wrapper = mount(Card, {
      slots: {
        footer: '<button>footer</button>',
      },
    });

    expect(wrapper.html()).toContain('<button>footer</button>');
  });
});
