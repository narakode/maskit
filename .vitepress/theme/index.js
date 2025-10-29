import DefaultTheme from 'vitepress/theme';
import '../../src/style.css';
import vClickOutside from 'click-outside-vue3';
import { MotionPlugin } from '@vueuse/motion';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(vClickOutside);
    app.use(MotionPlugin);
  },
};
