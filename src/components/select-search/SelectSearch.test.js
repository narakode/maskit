import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import SelectSearch from './SelectSearch.vue';
import Input from '../input/Input.vue';
import { MotionPlugin } from '@vueuse/motion';
import vClickOutside from 'click-outside-vue3';
import Spinner from '../spinner/Spinner.vue';
import { Icon } from '@iconify/vue';

const plugins = [MotionPlugin, vClickOutside];

describe('SelectSearch', () => {
  test('should render Input', () => {
    const wrapper = mount(SelectSearch, {
      global: {
        plugins,
      },
    });

    const input = wrapper.findComponent(Input);

    expect(input.exists()).toBe(true);
    expect(input.props('width')).toEqual('full');
  });

  test('should apply placeholder and required props to input', () => {
    const wrapper = mount(SelectSearch, {
      props: {
        placeholder: 'Test',
        required: true,
      },
      global: {
        plugins,
      },
    });

    const input = wrapper.findComponent(Input).find('input');

    expect(input.element.getAttribute('placeholder')).toEqual('Test');
    expect(input.element.getAttribute('required')).toEqual('');
  });

  test('should not render Spinner by default', () => {
    const wrapper = mount(SelectSearch, {
      global: {
        plugins,
      },
    });

    expect(wrapper.findComponent(Spinner).exists()).toBe(false);
  });

  test('should render Spinner when loading is true', () => {
    const wrapper = mount(SelectSearch, {
      props: {
        loading: true,
      },
      global: {
        plugins,
      },
    });

    const spinner = wrapper.findComponent(Spinner);

    expect(spinner.exists()).toBe(true);
    expect(spinner.props('color')).toEqual('secondary');
  });

  test('should not render clear button by default', () => {
    const wrapper = mount(SelectSearch, {
      global: {
        plugins,
      },
    });

    expect(wrapper.find('[aria-label="Clear selected"]').exists()).toBe(false);
  });

  test('should render Spinner when any selected', () => {
    const wrapper = mount(SelectSearch, {
      props: {
        modelValue: {
          id: 1,
          name: 'Test',
        },
      },
      global: {
        plugins,
      },
    });

    const clearBtn = wrapper.find('[aria-label="Clear selected"]');

    expect(clearBtn.exists()).toBe(true);

    const clearIcon = clearBtn.findComponent(Icon);

    expect(clearIcon.exists()).toBe(true);
    expect(clearIcon.props('icon')).toEqual('tabler:x');
  });
});
