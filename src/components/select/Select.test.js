import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Select from './Select.vue';
import { Icon } from '@iconify/vue';

describe('Select', () => {
  test('should render wrapper', () => {
    const wrapper = mount(Select);

    expect(wrapper.find('div').exists()).toBe(true);
  });

  test('should have default width to fit', () => {
    const wrapper = mount(Select);

    expect(wrapper.find('div').classes()).toContain('w-fit');
  });

  test('should have width full if width prop is full', () => {
    const wrapper = mount(Select, {
      props: {
        width: 'full',
      },
    });

    expect(wrapper.find('div').classes()).toContain('w-full');
  });

  test('should render select', () => {
    const wrapper = mount(Select);

    expect(wrapper.find('select').exists()).toBe(true);
  });

  test('should have select id from prop', () => {
    const wrapper = mount(Select, {
      props: {
        id: 'test',
      },
    });

    expect(wrapper.find('select').element.id).toEqual('test');
  });

  test('should have default select width to auto', () => {
    const wrapper = mount(Select);

    expect(wrapper.find('select').classes()).toContain('w-auto');
  });

  test('should have select width full if width prop is full', () => {
    const wrapper = mount(Select, {
      props: {
        width: 'full',
      },
    });

    expect(wrapper.find('select').classes()).toContain('w-full');
  });

  test('should have default select color classes', () => {
    const wrapper = mount(Select);

    expect(wrapper.find('select').classes()).toEqual(
      expect.arrayContaining(
        'bg-white text-gray-900 border-gray-300 focus:outline-blue-600'.split(
          ' ',
        ),
      ),
    );
  });

  test('should have select color classes from color props', () => {
    const wrapper = mount(Select, {
      props: {
        color: 'success',
      },
    });

    expect(wrapper.find('select').classes()).toEqual(
      expect.arrayContaining(
        'bg-green-50 text-green-700 border-green-700 focus:outline-green-600'.split(
          ' ',
        ),
      ),
    );
  });

  test('should have default select size classes', () => {
    const wrapper = mount(Select);

    expect(wrapper.find('select').classes()).toEqual(
      expect.arrayContaining('h-10 px-2.5 pr-10'.split(' ')),
    );
  });

  test('should have select size classes from size props', () => {
    const wrapper = mount(Select, {
      props: {
        size: 'lg',
      },
    });

    expect(wrapper.find('select').classes()).toEqual(
      expect.arrayContaining('h-12 text-lg px-4 pr-10'.split(' ')),
    );
  });

  test('should render options', () => {
    const options = Array.from({ length: 3 }, (_, i) => ({
      id: `${i + 1}`,
      name: `${i + 1}`,
    }));

    const wrapper = mount(Select, {
      props: {
        options,
      },
    });

    const optionsEl = wrapper.findAll('option');

    expect(optionsEl).toHaveLength(3);
    expect(
      optionsEl.map((el) => ({ id: el.element.value, name: el.text() })),
    ).toEqual(options);
  });

  test('should update modelValue when select change', async () => {
    const options = Array.from({ length: 3 }, (_, i) => ({
      id: `${i + 1}`,
      name: `${i + 1}`,
    }));

    const wrapper = mount(Select, {
      props: {
        options,
        modelValue: '1',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    });

    const select = wrapper.find('select');

    select.setValue('2');

    await select.trigger('change');

    expect(wrapper.props('modelValue')).toEqual('2');
  });

  test('should emit change event when select change', () => {
    const options = Array.from({ length: 3 }, (_, i) => ({
      id: `${i + 1}`,
      name: `${i + 1}`,
    }));

    const wrapper = mount(Select, {
      props: {
        options,
        modelValue: '1',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    });

    const select = wrapper.find('select');

    select.setValue('2');

    select.trigger('change');

    expect(wrapper.emitted()).toHaveProperty('change');
  });

  test('should render chevron icon', () => {
    const wrapper = mount(Select);

    const icon = wrapper.findComponent(Icon);

    expect(icon.exists()).toBe(true);
    expect(icon.props('icon')).toEqual('tabler:chevron-down');
  });

  test('should have default chevron color classes', () => {
    const wrapper = mount(Select);

    expect(wrapper.findComponent(Icon).classes()).toEqual(
      expect.arrayContaining('text-gray-900'.split(' ')),
    );
  });

  test('should have chevron color classes from color props', () => {
    const wrapper = mount(Select, {
      props: {
        color: 'success',
      },
    });

    expect(wrapper.findComponent(Icon).classes()).toEqual(
      expect.arrayContaining('text-green-700'.split(' ')),
    );
  });

  test('should have default select size classes', () => {
    const wrapper = mount(Select);

    expect(wrapper.findComponent(Icon).classes()).toEqual(
      expect.arrayContaining('size-4 absolute top-3 right-2.5'.split(' ')),
    );
  });

  test('should have select size classes from size props', () => {
    const wrapper = mount(Select, {
      props: {
        size: 'lg',
      },
    });

    expect(wrapper.findComponent(Icon).classes()).toEqual(
      expect.arrayContaining('size-4 absolute top-4 right-3'.split(' ')),
    );
  });
});
