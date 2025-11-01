import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Pagination from './Pagination.vue';
import { Icon } from '@iconify/vue';

describe.only('Pagination', () => {
  test('should render page numbers', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalPages: 5,
      },
    });

    const links = wrapper.findAll('a');

    expect(links).toHaveLength(5);
    expect(links.map((link) => link.text())).toEqual(['1', '2', '3', '4', '5']);
  });

  test('should no highlight active page number by default', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalPages: 5,
      },
    });

    const activeLink = wrapper.findAll('a.bg-blue-50.text-blue-600');

    expect(activeLink).toHaveLength(0);
  });

  test('should highlight active page number by current page prop', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalPages: 5,
        currentPage: 3,
      },
    });

    const activeLink = wrapper.findAll('a.bg-blue-50.text-blue-600');

    expect(activeLink).toHaveLength(1);
    expect(activeLink[0].text()).toEqual('3');
  });

  test('should render action', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalPages: 5,
      },
    });

    const icons = wrapper.findAllComponents(Icon);

    expect(icons).toHaveLength(2);
    expect(icons[0].props('icon')).toEqual('tabler:chevron-left');
    expect(icons[1].props('icon')).toEqual('tabler:chevron-right');
  });

  test('should disable prev when current page is first', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalPages: 5,
        currentPage: 1,
      },
    });

    const prev = wrapper.find('[aria-label="Prev"]');

    expect(prev.exists()).toBe(true);
    expect(prev.element.tagName).toEqual('SPAN');
  });

  test('should have prev link when current page is not first', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalPages: 5,
        currentPage: 2,
      },
    });

    const prev = wrapper.find('[aria-label="Prev"]');

    expect(prev.exists()).toBe(true);
    expect(prev.element.tagName).toEqual('A');
  });
});
