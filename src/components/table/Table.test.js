import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Table from './Table.vue';
import Spinner from '../spinner/Spinner.vue';

describe('Table', () => {
  test('should render table', () => {
    const wrapper = mount(Table);

    const table = wrapper.find('table');

    expect(table.exists()).toBe(true);
    expect(table.classes()).toContain('w-full');
  });
  test('should render thead', () => {
    const wrapper = mount(Table);

    expect(wrapper.find('table thead').exists()).toBe(true);
  });
  test('should render columns', () => {
    const columns = [
      { id: 'no', name: 'No' },
      { id: 'name', name: 'Name' },
    ];
    const wrapper = mount(Table, {
      props: {
        columns,
      },
    });

    const headers = wrapper.findAll('table thead th');

    expect(headers.map((header) => header.text())).toEqual(
      columns.map((column) => column.name),
    );
  });
  test('should render column with text align', () => {
    const columns = [
      { id: 'no', name: 'No' },
      { id: 'date', name: 'Date', textAlign: 'center' },
      { id: 'name', name: 'Name', textAlign: 'right' },
    ];
    const wrapper = mount(Table, {
      props: {
        columns,
      },
    });

    const headers = wrapper.findAll('table thead th');

    expect(headers[0].classes()).toContain('text-left');
    expect(headers[1].classes()).toContain('text-center');
    expect(headers[2].classes()).toContain('text-right');
  });
  test('should render tbody', () => {
    const wrapper = mount(Table);

    expect(wrapper.find('table tbody').exists()).toBe(true);
  });
  test('should render loading row when loading is true', () => {
    const wrapper = mount(Table, {
      props: {
        loading: true,
      },
    });

    const loadingRow = wrapper.find('table tbody tr');

    expect(loadingRow.exists()).toBe(true);
    expect(loadingRow.findComponent(Spinner).exists()).toBe(true);
  });
  test('should render empty message row when item is empty', () => {
    const columns = [
      { id: 'no', name: 'No' },
      { id: 'name', name: 'Name' },
    ];
    const wrapper = mount(Table, {
      props: { columns },
    });

    const emptyRow = wrapper.find('table tbody tr');

    expect(emptyRow.exists()).toBe(true);

    const emptyData = emptyRow.find('td');

    expect(emptyData.exists()).toBe(true);
    expect(emptyData.element.colSpan).toEqual(columns.length);
    expect(emptyData.text()).toEqual('No Data');
  });
  test('should render item rows', () => {
    const columns = [
      { id: 'no', name: 'No' },
      { id: 'name', name: 'Name' },
    ];
    const data = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
    }));
    const wrapper = mount(Table, {
      props: { columns, data },
    });

    const rows = wrapper.findAll('table tbody tr');

    expect(rows).toHaveLength(data.length);
  });
  test('should render item data slot', () => {
    const columns = [
      { id: 'no', name: 'No' },
      { id: 'name', name: 'Name' },
    ];
    const data = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
    }));
    const wrapper = mount(Table, {
      props: { columns, data },
      slots: {
        td: '<template #td="{ item, index, classes }"><td :class="classes.td">{{ index }} - {{ item.name }}</td></template>',
      },
    });

    const rows = wrapper.findAll('table tbody tr');

    expect(
      rows.map((row) =>
        row.findAll('td').map((td) => ({
          class: td.classes(),
          text: td.text(),
        })),
      ),
    ).toEqual(
      data.map((item, i) => {
        return [
          {
            class: 'px-4 py-3 border-b border-gray-300 text-gray-900'.split(
              ' ',
            ),
            text: `${i} - ${item.name}`,
          },
        ];
      }),
    );
  });
  test('should have hover class on item by default', () => {
    const columns = [
      { id: 'no', name: 'No' },
      { id: 'name', name: 'Name' },
    ];
    const data = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
    }));
    const wrapper = mount(Table, {
      props: { columns, data },
    });

    expect(wrapper.findAll('table tbody tr').map((tr) => tr.classes())).toEqual(
      data.map(() => ['hover:bg-gray-50']),
    );
  });
  test('should not have hover class on item row when hoverable is false', () => {
    const columns = [
      { id: 'no', name: 'No' },
      { id: 'name', name: 'Name' },
    ];
    const data = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
    }));
    const wrapper = mount(Table, {
      props: { columns, data, hoverable: false },
    });

    expect(wrapper.findAll('table tbody tr').map((tr) => tr.classes())).toEqual(
      data.map(() => []),
    );
  });
  test('should not render tfoot by default', () => {
    const wrapper = mount(Table);

    expect(wrapper.find('tfoot').exists()).toBe(false);
  });
  test('should render tfoot when footer slot is exists', () => {
    const wrapper = mount(Table, {
      slots: {
        footer: '<tr><td></td></tr>',
      },
    });

    expect(wrapper.find('tfoot').exists()).toBe(true);
  });
  test('should render footer slot', () => {
    const wrapper = mount(Table, {
      slots: {
        footer:
          '<template #footer="{ classes }"><tr><td :class="classes.td"></td></tr></template>',
      },
    });

    expect(wrapper.find('tfoot').html({ raw: true })).toContain(
      '<tfoot><tr><td class="px-4 py-3 border-b border-gray-300 text-gray-900"></td></tr></tfoot>',
    );
  });
});
