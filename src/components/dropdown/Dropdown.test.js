import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Dropdown from './Dropdown.vue';
import { MotionPlugin } from '@vueuse/motion';
import vClickOutside from 'click-outside-vue3';
import DropdownConfig from './Dropdown.config';

describe('Dropdown', () => {
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

  describe('when option slot exists', () => {
    test('should render content', async () => {
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

  describe('when default slot exists', () => {
    test('should not render option slot', async () => {
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
          default: `<div class="default-slot"></div>`,
        },
      });

      const button = dropdown.find('button');

      await button.trigger('click');

      expect(dropdown.find('.option').exists()).toBe(false);
      expect(dropdown.find('.default-slot').exists()).toBe(true);
    });

    test('should have classes payload', async () => {
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
          default: `<template #default="{ classes }">
                  <div :class="['default-slot', classes.option]"></div>
                </template>`,
        },
      });

      const button = dropdown.find('button');

      await button.trigger('click');

      expect(dropdown.find('.default-slot').classes()).toEqual(
        expect.arrayContaining(DropdownConfig.classes.option.split(' ')),
      );
    });
  });

  describe('when header slot exists', () => {
    test('should render content', async () => {
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
          header: `<header></header>`,
        },
      });

      const button = dropdown.find('button');

      await button.trigger('click');

      expect(dropdown.html()).toContain(`<header></header>`);
    });

    test('should have classes payload', async () => {
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
          header: `<template #header="{ classes }">
              <header :class="classes.header">Header</header>
            </template>`,
        },
      });

      const button = dropdown.find('button');

      await button.trigger('click');

      expect(dropdown.find('header').classes()).toEqual(
        expect.arrayContaining(DropdownConfig.classes.header.split(' ')),
      );
    });
  });

  test('should have default content class', async () => {
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
      },
    });

    const button = dropdown.find('button');

    await button.trigger('click');

    const [, content] = dropdown.findAll('div');

    expect(content.classes()).toEqual(
      expect.arrayContaining(DropdownConfig.classes.content.split(' ')),
    );
    expect(content.classes()).toContain('min-w-40');
  });

  test('should not have min width class when override width prop is true', async () => {
    const options = [
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' },
      { id: 3, name: 'Test 3' },
    ];

    const dropdown = mount(Dropdown, {
      props: {
        options,
        overrideWidth: true,
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

    const [, content] = dropdown.findAll('div');

    expect(content.classes()).not.toContain('min-w-40');
  });

  test('should have content class from custom class prop', async () => {
    const options = [
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' },
      { id: 3, name: 'Test 3' },
    ];

    const dropdown = mount(Dropdown, {
      props: {
        options,
        customClass: { content: 'left-100' },
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

    const [, content] = dropdown.findAll('div');

    expect(content.classes()).toContain('left-100');
  });
});
