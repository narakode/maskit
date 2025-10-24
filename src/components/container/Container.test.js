import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Container from './Container.vue';
import ContainerConfig from './Container.config';

describe('Container', () => {
  test('should render as div', () => {
    const wrapper = mount(Container);

    expect(wrapper.element.tagName).toEqual('DIV');
  });

  test('should have base class', () => {
    const wrapper = mount(Container);

    expect(wrapper.classes()).toEqual(ContainerConfig.baseClass.split(' '));
  });

  test('should render content', () => {
    const wrapper = mount(Container, {
      slots: {
        default: '<p>Test</p>',
      },
    });

    expect(wrapper.html()).toContain('<p>Test</p>');
  });

  test('should have max screen class by max screen prop', () => {
    const wrapper = mount(Container, {
      props: {
        maxScreen: 'sm',
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(
        ContainerConfig.maxScreenBreakpoints.sm.split(' '),
      ),
    );
  });

  test('should render tag name by tag prop', () => {
    const wrapper = mount(Container, {
      props: {
        tag: 'main',
      },
    });

    expect(wrapper.element.tagName).toEqual('MAIN');
  });
});
