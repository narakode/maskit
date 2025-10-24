import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Heading from './Heading.vue';

describe('Heading', () => {
  test('should render title', () => {
    const wrapper = mount(Heading, {
      props: {
        title: 'Test',
      },
    });

    const heading = wrapper.find('h1');

    expect(heading.exists()).toBe(true);
    expect(heading.text()).toEqual('Test');
  });

  test('should render heading level by level prop', () => {
    const wrapper = mount(Heading, {
      props: {
        title: 'Test',
        level: 3,
      },
    });

    expect(wrapper.find('h3').exists()).toBe(true);
  });

  test('should render action', () => {
    const wrapper = mount(Heading, {
      props: {
        title: 'Test',
      },
      slots: {
        action: '<button>Test</button>',
      },
    });

    expect(wrapper.html()).toContain('<button>Test</button>');
  });
});
