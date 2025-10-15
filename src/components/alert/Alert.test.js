import { mount } from '@vue/test-utils';
import { test, expect, describe } from 'vitest';
import Alert from './Alert.vue';
import { Icon } from '@iconify/vue';
import AlertConfig from './Alert.config';
import Spinner from '../Spinner.vue';

describe('Alert', () => {
  test('should render text', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: 'Test',
      },
    });

    expect(wrapper.text()).toBe('Test');
  });

  test('should render icon', () => {
    const wrapper = mount(Alert);

    const icon = wrapper.findComponent(Icon);

    expect(icon.exists()).toBe(true);
    expect(icon.props('icon')).toEqual(AlertConfig.iconNames.info);
  });

  test('should have base class', () => {
    const wrapper = mount(Alert);

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(AlertConfig.base.split(' ')),
    );
  });

  test('should have default color class', () => {
    const wrapper = mount(Alert);

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(AlertConfig.colors.info.split(' ')),
    );
  });

  test('should have color class by color prop', () => {
    const wrapper = mount(Alert, {
      props: {
        color: 'success',
      },
    });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(AlertConfig.colors.success.split(' ')),
    );
  });

  test('should render icon name by color prop', () => {
    const wrapper = mount(Alert, {
      props: {
        color: 'success',
      },
    });

    const icon = wrapper.findComponent(Icon);

    expect(icon.props('icon')).toEqual(AlertConfig.iconNames.success);
  });

  test('should not render loading spinner by default', () => {
    const wrapper = mount(Alert);

    const loadingSpinner = wrapper.findComponent(Spinner);

    expect(loadingSpinner.exists()).toBe(false);
  });

  test('should render loading spinner by loading props', () => {
    const wrapper = mount(Alert, {
      props: {
        loading: true,
      },
    });

    const loadingSpinner = wrapper.findComponent(Spinner);

    expect(loadingSpinner.exists()).toBe(true);
    expect(loadingSpinner.props('color')).toEqual(
      AlertConfig.spinnerColor.info,
    );
  });

  test('should render loading spinner color by color props', () => {
    const wrapper = mount(Alert, {
      props: {
        loading: true,
        color: 'success',
      },
    });

    const loadingSpinner = wrapper.findComponent(Spinner);

    expect(loadingSpinner.props('color')).toEqual(
      AlertConfig.spinnerColor.success,
    );
  });

  test('should not render close button by default', () => {
    const wrapper = mount(Alert);

    const renderedIcon = wrapper.findAllComponents(Icon);

    expect(renderedIcon).toHaveLength(1);
    expect(renderedIcon[0].props('icon')).not.toEqual('tabler:x');
  });

  test('should render close button when closable is true', () => {
    const wrapper = mount(Alert, {
      props: {
        closable: true,
      },
    });

    const renderedIcon = wrapper.findAllComponents(Icon);

    expect(renderedIcon).toHaveLength(2);
    expect(renderedIcon[1].props('icon')).toEqual('tabler:x');
  });

  test('should emit close event when close button is clicked', () => {
    const wrapper = mount(Alert, {
      props: {
        closable: true,
      },
    });

    const closeButton = wrapper.find('button');

    closeButton.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('close');
  });
});
