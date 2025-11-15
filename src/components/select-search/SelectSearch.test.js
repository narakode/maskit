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
    test('should emit opened', async () => {
      const wrapper = mount(SelectSearch, {
        global: { plugins },
      });

      await wrapper.find('input').trigger('focus');

      expect(wrapper.emitted()).toHaveProperty('opened');
    });

    describe('when data is empty', () => {
      test('should render empty message', async () => {
        const wrapper = mount(SelectSearch, {
          global: { plugins },
        });

        await wrapper.find('input').trigger('focus');

        const p = wrapper.find('p');

        expect(p.exists()).toBe(true);
        expect(p.text()).toEqual('No results found');
      });

      describe('when with create button is true', () => {
        test('should render empty message when search is null', async () => {
          const wrapper = mount(SelectSearch, {
            props: {
              withCreateButton: true,
            },
            global: { plugins },
          });

          await wrapper.find('input').trigger('focus');

          expect(wrapper.find('p').exists()).toBe(true);
        });
        test('should not render empty message when search exists', async () => {
          const wrapper = mount(SelectSearch, {
            props: {
              withCreateButton: true,
              modelValue: {
                id: 1,
                name: 'test',
              },
            },
            global: { plugins },
          });

          await wrapper.find('input').trigger('focus');

          expect(wrapper.find('p').exists()).toBe(false);
        });
        test('should render create button', async () => {
          const wrapper = mount(SelectSearch, {
            props: {
              withCreateButton: true,
              modelValue: {
                id: 1,
                name: 'test',
              },
            },
            global: { plugins },
          });

          await wrapper.find('input').trigger('focus');

          const createBtn = wrapper.find('a');

          expect(createBtn.exists()).toBe(true);
          expect(createBtn.text()).toEqual(`Add "test" as new item`);
        });

        describe('when create button clicked', () => {
          test('should emit create-empty-search-item', async () => {
            const wrapper = mount(SelectSearch, {
              props: {
                withCreateButton: true,
                modelValue: {
                  id: 1,
                  name: 'test',
                },
              },
              global: { plugins },
            });

            await wrapper.find('input').trigger('focus');

            wrapper.find('a').trigger('click');

            expect(wrapper.emitted()).toHaveProperty(`create`);
          });
          test('should hide dropdown', async () => {
            const wrapper = mount(SelectSearch, {
              props: {
                withCreateButton: true,
                modelValue: {
                  id: 1,
                  name: 'test',
                },
              },
              global: { plugins },
            });

            await wrapper.find('input').trigger('focus');

            wrapper.find('a').trigger('click');

            expect(wrapper.find('[data-test="dropdown"]').exists()).toBe(false);
          });
        });
      });
    });

    test('should render data item', async () => {
      const items = Array.from({ length: 3 }, (_, i) => ({
        id: i + 1,
        name: `Option ${i + 1}`,
      }));
      const wrapper = mount(SelectSearch, {
        props: {
          items,
        },
        global: { plugins },
      });

      await wrapper.find('input').trigger('focus');

      const dropdown = wrapper.find('[data-test="dropdown"]');
      const itemsDiv = dropdown.findAll('div');

      expect(itemsDiv).toHaveLength(3);
      expect(itemsDiv.map((item) => item.text())).toEqual(
        items.map((item) => item.name),
      );
    });
    test('should render slot item when exists', async () => {
      const items = Array.from({ length: 3 }, (_, i) => ({
        id: i + 1,
        name: `Option ${i + 1}`,
      }));
      const wrapper = mount(SelectSearch, {
        props: {
          items,
        },
        slots: {
          item: '<template #item="{ item }">{{ item.id }} - {{ item.name }}</template>',
        },
        global: { plugins },
      });

      await wrapper.find('input').trigger('focus');

      const dropdown = wrapper.find('[data-test="dropdown"]');
      const itemsDiv = dropdown.findAll('div');

      expect(itemsDiv).toHaveLength(3);
      expect(itemsDiv.map((item) => item.text())).toEqual(
        items.map((item) => `${item.id} - ${item.name}`),
      );
    });
    test('should not highlight data item by default', async () => {
      const items = Array.from({ length: 3 }, (_, i) => ({
        id: i + 1,
        name: `Option ${i + 1}`,
      }));
      const wrapper = mount(SelectSearch, {
        props: {
          items,
        },
        global: { plugins },
      });

      await wrapper.find('input').trigger('focus');

      expect(
        wrapper.find('[data-test="dropdown"]').find('div.bg-gray-50').exists(),
      ).toBe(false);
    });
    test('should highlight data item when hovered', async () => {
      const items = Array.from({ length: 3 }, (_, i) => ({
        id: i + 1,
        name: `Option ${i + 1}`,
      }));
      const wrapper = mount(SelectSearch, {
        props: {
          items,
        },
        global: { plugins },
      });

      await wrapper.find('input').trigger('focus');

      const dropdown = wrapper.find('[data-test="dropdown"]');
      const itemsDiv = dropdown.findAll('div');

      await itemsDiv[1].trigger('mouseenter');

      expect(itemsDiv[1].classes()).toContain('bg-gray-50');
    });

    describe('when data item clicked', () => {
      test('should update selected', async () => {
        const items = Array.from({ length: 3 }, (_, i) => ({
          id: i + 1,
          name: `Option ${i + 1}`,
        }));
        const wrapper = mount(SelectSearch, {
          props: {
            items,
            modelValue: null,
            'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
          },
          global: { plugins },
        });

        await wrapper.find('input').trigger('focus');

        const dropdown = wrapper.find('[data-test="dropdown"]');
        const itemsDiv = dropdown.findAll('div');

        await itemsDiv[1].trigger('click');

        expect(wrapper.props('modelValue')).toEqual(items[1]);
      });
      test('should hide dropdown', async () => {
        const items = Array.from({ length: 3 }, (_, i) => ({
          id: i + 1,
          name: `Option ${i + 1}`,
        }));
        const wrapper = mount(SelectSearch, {
          props: {
            items,
            modelValue: null,
            'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
          },
          global: { plugins },
        });

        await wrapper.find('input').trigger('focus');

        const dropdown = wrapper.find('[data-test="dropdown"]');
        const itemsDiv = dropdown.findAll('div');

        await itemsDiv[1].trigger('click');

        expect(wrapper.find('[data-test="dropdown"]').exists()).toBe(false);
      });
      test.only('should emit change', async () => {
        const items = Array.from({ length: 3 }, (_, i) => ({
          id: i + 1,
          name: `Option ${i + 1}`,
        }));
        const wrapper = mount(SelectSearch, {
          props: {
            items,
            modelValue: null,
            'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
          },
          global: { plugins },
        });

        await wrapper.find('input').trigger('focus');

        const dropdown = wrapper.find('[data-test="dropdown"]');
        const itemsDiv = dropdown.findAll('div');

        await itemsDiv[1].trigger('click');

        expect(wrapper.emitted()).toHaveProperty('change');
      });
    });
  });

  describe('when dropdown closed', () => {
    test('should update search when any selected', async () => {
      const onUpdate = vi.fn();
      const items = Array.from({ length: 3 }, (_, i) => ({
        id: i + 1,
        name: `Option ${i + 1}`,
      }));
      const wrapper = mount(SelectSearch, {
        props: {
          items,
          modelValue: items[1],
          'onUpdate:search': onUpdate,
        },
        global: { plugins },
      });

      const input = wrapper.find('input');

      await input.trigger('focus');

      const dropdown = wrapper.find('[data-test="dropdown"]');
      const itemsDiv = dropdown.findAll('div');

      input.setValue('test');

      await input.trigger('change');
      await itemsDiv[1].trigger('click');

      expect(onUpdate).toHaveBeenLastCalledWith(items[1].name);
    });
    test.only('should reset search when no selected', async () => {
      const onUpdate = vi.fn();
      const items = Array.from({ length: 3 }, (_, i) => ({
        id: i + 1,
        name: `Option ${i + 1}`,
      }));
      const wrapper = mount(SelectSearch, {
        props: {
          items,
          modelValue: items[1],
          'onUpdate:search': onUpdate,
        },
        global: { plugins },
      });

      const input = wrapper.find('input');

      await input.trigger('focus');

      input.setValue('test');

      await input.trigger('change');

      await wrapper.find('button').trigger('click');

      expect(onUpdate).toHaveBeenLastCalledWith(null);
    });
  });

  describe('when selected updated', () => {
    test.skip('should update search when any selected');
    test.skip('should reset search when no selected');
  });

  test.skip('should update search by selected name when created');
});
