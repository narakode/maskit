import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Timeline from './Timeline.vue';

describe('Timeline', () => {
  test('should render list container', () => {
    const wrapper = mount(Timeline);

    expect(wrapper.find('ol').exists()).toBe(true);
  });
  test('should render list items', () => {
    const items = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      time: new Date(),
      name: `Item ${i + 1}`,
      text: `Item ${i + 1}`,
    }));
    const wrapper = mount(Timeline, {
      props: {
        items,
      },
    });

    expect(wrapper.findAll('ol li')).toHaveLength(items.length);
  });
  test('should render item status', () => {
    const items = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      time: new Date(),
      name: `Item ${i + 1}`,
      text: `Item ${i + 1}`,
    }));
    const wrapper = mount(Timeline, {
      props: {
        items,
      },
    });

    wrapper.findAll('ol li').forEach((item) => {
      expect(item.find('div.w-3.h-3').exists()).toBe(true);
    });
  });
  test('should render active item status', () => {
    const items = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      time: new Date(),
      name: `Item ${i + 1}`,
      text: `Item ${i + 1}`,
    }));
    const wrapper = mount(Timeline, {
      props: {
        items,
      },
    });

    const listItems = wrapper.findAll('ol li div.w-3.h-3');

    const [activeItem, ...nonActiveItems] = listItems;

    expect(activeItem.classes()).toContain('bg-blue-600');

    nonActiveItems.forEach((item) => {
      expect(item.classes()).not.toContain('bg-blue-600');
      expect(item.classes()).toContain('bg-gray-200');
    });
  });
  test('should render item time', () => {
    const items = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      time: `Time ${i + 1}`,
      name: `Item ${i + 1}`,
      text: `Item ${i + 1}`,
    }));
    const wrapper = mount(Timeline, {
      props: {
        items,
      },
    });

    wrapper.findAll('ol li').forEach((item, index) => {
      const time = item.find('time');
      expect(time.exists()).toBe(true);
      expect(time.text()).toEqual(items[index].time);
    });
  });
  test('should render item name', () => {
    const items = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      time: `Time ${i + 1}`,
      name: `Item ${i + 1}`,
      text: `Item ${i + 1}`,
    }));
    const wrapper = mount(Timeline, {
      props: {
        items,
      },
    });

    wrapper.findAll('ol li').forEach((item, index) => {
      const name = item.find('p[data-test="name"]');
      expect(name.exists()).toBe(true);
      expect(name.text()).toEqual(items[index].name);
    });
  });
  test('should render item text', () => {
    const items = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      time: `Time ${i + 1}`,
      name: `Item ${i + 1}`,
      text: `Item ${i + 1}`,
    }));
    const wrapper = mount(Timeline, {
      props: {
        items,
      },
    });

    wrapper.findAll('ol li').forEach((item, index) => {
      const text = item.find('p[data-test="text"]');
      expect(text.exists()).toBe(true);
      expect(text.text()).toEqual(items[index].text);
    });
  });
});
