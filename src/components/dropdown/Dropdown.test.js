import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Dropdown from './Dropdown.vue';
import { MotionPlugin } from '@vueuse/motion';
import vClickOutside from 'click-outside-vue3';
import DropdownConfig from './Dropdown.config';

describe.only('Dropdown', () => {
  test('should not render dropdown list', () => {
    const dropdown = mount(Dropdown, {
      props: {
        options: [
          { id: 1, name: 'Test 1' },
          { id: 2, name: 'Test 2' },
          { id: 3, name: 'Test 3' },
        ],
      },
      global: {
        plugins: [MotionPlugin, vClickOutside],
      },
    });

    const wrapper = dropdown.find('.py-1');

    expect(wrapper.exists()).toBe(false);
  });

  test('should render trigger content', () => {
    const dropdown = mount(Dropdown, {
      props: {
        options: [
          { id: 1, name: 'Test 1' },
          { id: 2, name: 'Test 2' },
          { id: 3, name: 'Test 3' },
        ],
      },
      global: {
        plugins: [MotionPlugin, vClickOutside],
      },
      slots: {
        trigger: `<template #trigger="{toggle}">
                    <button>Toggle</button>
                </template>`,
      },
    });

    expect(dropdown.html()).toContain(`<button>Toggle</button>`);
  });

  test('should open dropdown when trigger is clicked', async () => {
    const dropdown = mount(Dropdown, {
      props: {
        options: [
          { id: 1, name: 'Test 1' },
          { id: 2, name: 'Test 2' },
          { id: 3, name: 'Test 3' },
        ],
      },
      global: {
        plugins: [MotionPlugin, vClickOutside],
      },
      slots: {
        trigger: `<template #trigger="{toggle}">
                    <button @click="toggle">Toggle</button>
                </template>`,
      },
    });

    const button = dropdown.find('button');

    await button.trigger('click');

    expect(dropdown.find('.py-1').exists()).toBe(true);
  });

  test('should render option slot when dropdown is openend', async () => {
    const options = [
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' },
      { id: 3, name: 'Test 3' },
    ];

    const dropdown = mount(Dropdown, {
      props: {
        options,
      },
      global: {
        plugins: [MotionPlugin, vClickOutside],
      },
      slots: {
        trigger: `<template #trigger="{toggle}">
                    <button @click="toggle">Toggle</button>
                </template>`,
        option: `<template #option><div class="option">Test</div></template>`,
      },
    });

    const button = dropdown.find('button');

    await button.trigger('click');

    const dropdownListOptions = dropdown.findAll('.option');

    expect(dropdownListOptions).toHaveLength(3);
    expect(dropdownListOptions.map((option) => option.text())).toEqual([
      'Test',
      'Test',
      'Test',
    ]);
  });

  describe('Option', () => {
    test('should have option and classes payload', async () => {
      const options = [
        { id: 1, name: 'Test 1' },
        { id: 2, name: 'Test 2' },
        { id: 3, name: 'Test 3' },
      ];

      const dropdown = mount(Dropdown, {
        props: {
          options,
        },
        global: {
          plugins: [MotionPlugin, vClickOutside],
        },
        slots: {
          trigger: `<template #trigger="{toggle}">
                        <button @click="toggle">Toggle</button>
                    </template>`,
          option: `<template #option="{ option, classes }">
                        <div :class="['option', classes.option]">{{ option.id }} - {{ option.name }}</div>
                    </template>`,
        },
      });

      const button = dropdown.find('button');

      await button.trigger('click');

      const dropdownOptions = dropdown.findAll('.option');

      options.forEach((option, index) => {
        const dropdownOption = dropdownOptions[index];

        expect(dropdownOption.classes()).toEqual(
          expect.arrayContaining(DropdownConfig.classes.option.split(' ')),
        );
        expect(dropdownOption.text()).toEqual(`${option.id} - ${option.name}`);
      });
    });
  });
});
