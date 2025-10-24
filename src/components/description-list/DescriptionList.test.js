import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import DescriptionList from './DescriptionList.vue';

describe('Description List', () => {
  test('should render label', () => {
    const wrapper = mount(DescriptionList, {
      props: {
        label: 'Test',
      },
    });

    const dt = wrapper.find('dt');

    expect(dt.exists()).toBe(true);
    expect(dt.text()).toEqual('Test');
  });

  test('should render value', () => {
    const wrapper = mount(DescriptionList, {
      props: {
        label: 'Test',
        value: 'Test',
      },
    });

    const dd = wrapper.find('dd');

    expect(dd.exists()).toBe(true);
    expect(dd.text()).toEqual('Test');
  });

  test('should render value from slot and override value props', () => {
    const wrapper = mount(DescriptionList, {
      props: {
        label: 'Test',
        value: 'Overrided',
      },
      slots: {
        default: 'Test',
      },
    });

    const dd = wrapper.find('dd');

    expect(dd.exists()).toBe(true);
    expect(dd.text()).toEqual('Test');
  });
});
