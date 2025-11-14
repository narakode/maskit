import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';
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

  test('should update search prop when input changed', async () => {
    const mock = vi.fn();
    const wrapper = mount(SelectSearch, {
      props: {
        search: 'test',
        'onUpdate:search': mock,
      },
      global: { plugins },
    });

    wrapper.find('input').setValue('update');

    await wrapper.find('input').trigger('change');

    expect(mock).toHaveBeenCalledWith('update');
  });

  test('should open dropdown when input focused', async () => {
    const wrapper = mount(SelectSearch, {
      global: { plugins },
    });

    await wrapper.find('input').trigger('focus');

    expect(wrapper.find('[data-test="dropdown"]').exists()).toBe(true);
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

  describe('when clear button clicked', () => {
    test('should clear selected', async () => {
      const wrapper = mount(SelectSearch, {
        props: {
          modelValue: {
            id: 1,
            name: 'Test',
          },
          'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
        },
        global: {
          plugins,
        },
      });

      const clearBtn = wrapper.find('[aria-label="Clear selected"]');

      await clearBtn.trigger('click');

      expect(wrapper.props('modelValue')).toBeNull();
    });
    test('should emit change', () => {
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

      clearBtn.trigger('click');

      expect(wrapper.emitted()).toHaveProperty('change');
    });

    test('should hide dropdown', async () => {
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

      await wrapper.find('input').trigger('focus');
      await clearBtn.trigger('click');

      expect(wrapper.find('[data-test="dropdown"]').exists()).toBe(false);
    });
  });

  test('should not render dropdown by default', () => {
    const wrapper = mount(SelectSearch, {
      global: {
        plugins,
      },
    });

    expect(wrapper.find('[data-test="dropdown"]').exists()).toBe(false);
  });

  describe('when dropdown opened', () => {
    test.skip('should emit scroll-bottom when scroll reached bottom');
    test.skip('should emit opened');

    describe('when data is empty', () => {
      test.skip('should render empty message');

      describe('when with create button is true', () => {
        test.skip('should not render empty message');
        test.skip('should render create button');

        describe('when create button clicked', () => {
          test.skip('should emit create-empty-search-item');
          test.skip('should hide dropdown');
        });
      });
    });

    test.skip('should render data item');
    test.skip('should render slot item when exists');
    test.skip('should not highlight data item by default');
    test.skip('should highlight data item when hovered');

    describe('when data item clicked', () => {
      test.skip('should update selected');
      test.skip('should hide dropdown');
      test.skip('should emit change');
    });
  });

  describe('when dropdown closed', () => {
    test.skip('should update search when any selected');
    test.skip('should reset search when no selected');
  });

  describe('when selected updated', () => {
    test.skip('should update search when any selected');
    test.skip('should reset search when no selected');
  });

  test.skip('should update search by selected name when created');
});
