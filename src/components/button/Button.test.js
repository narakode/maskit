import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Button from './Button.vue';
import ButtonConfig from './Button.config';

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
});
