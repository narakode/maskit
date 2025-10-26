import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Skeleton from './Skeleton.vue';

describe('Skeleton', () => {
  test('should render animated div', () => {
    const wrapper = mount(Skeleton);

    expect(wrapper.element.tagName).toEqual('DIV');
    expect(wrapper.classes()).toContain('animate-pulse');
  });
});
