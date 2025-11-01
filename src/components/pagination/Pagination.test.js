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

  test('should no highlight active page number by default', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalPages: 5,
      },
    });

    const activeLink = wrapper.findAll('a.bg-blue-50.text-blue-600');

    expect(activeLink).toHaveLength(0);
  });

  test('shoould emit change on page number click', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalPages: 5,
      },
    });

    const links = wrapper.findAll('a');

    links[3].trigger('click');

    expect(wrapper.emitted()).toHaveProperty('change-page');
  });

  describe('when current page prop exists', () => {
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

    test('shoould not emit change on click', () => {
      const wrapper = mount(Pagination, {
        props: {
          totalPages: 5,
          currentPage: 3,
        },
      });

      const links = wrapper.findAll('a');

      links[3].trigger('click');

      expect(wrapper.emitted()).not.toHaveProperty('change-page');
    });

    test('should update current page model on change', async () => {
      const wrapper = mount(Pagination, {
        props: {
          totalPages: 5,
          currentPage: 3,
          'onUpdate:currentPage': (e) => wrapper.setProps({ currentPage: e }),
        },
      });

      const links = wrapper.findAll('a');

      await links[4].trigger('click');

      expect(wrapper.props('currentPage')).toEqual(4);
    });
  });

  test('should render action', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalPages: 5,
      },
    });

    const prev = wrapper.find('[aria-label="Prev"]');
    const next = wrapper.find('[aria-label="Next"]');

    expect(prev.exists()).toBe(true);
    expect(next.exists()).toBe(true);
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

  test('should disable next when current page is last', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalPages: 5,
        currentPage: 5,
      },
    });

    const next = wrapper.find('[aria-label="Next"]');

    expect(next.exists()).toBe(true);
    expect(next.element.tagName).toEqual('SPAN');
  });

  test('should have next link when current page is not last', () => {
    const wrapper = mount(Pagination, {
      props: {
        totalPages: 5,
        currentPage: 2,
      },
    });

    const next = wrapper.find('[aria-label="Next"]');

    expect(next.exists()).toBe(true);
    expect(next.element.tagName).toEqual('A');
  });
});
