import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs',

  title: 'Maskit',
  description: 'Maskit Vue + Tailwind UI Component',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/alert' },
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Alert', link: '/components/alert' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Button', link: '/components/button' },
          { text: 'Card', link: '/components/card' },
          { text: 'Confirm', link: '/components/confirm' },
          { text: 'Container', link: '/components/container' },
          { text: 'Description List', link: '/components/description-list' },
          { text: 'Dropdown', link: '/components/dropdown' },
          { text: 'Form Item', link: '/components/form-item' },
          { text: 'Heading', link: '/components/heading' },
          { text: 'Input', link: '/components/input' },
          { text: 'List', link: '/components/list' },
          { text: 'Modal', link: '/components/modal' },
          { text: 'Navbar', link: '/components/navbar' },
          { text: 'Pagination', link: '/components/pagination' },
          { text: 'Radio', link: '/components/radio' },
          { text: 'Section', link: '/components/section' },
          { text: 'Select', link: '/components/select' },
          { text: 'Select Search', link: '/components/select-search' },
          { text: 'Sidebar', link: '/components/sidebar' },
          { text: 'Skeleton', link: '/components/skeleton' },
          { text: 'Spinner', link: '/components/spinner' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
