import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Pagination from './Pagination.vue';

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

  test('should highlight active page number', () => {
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
});
