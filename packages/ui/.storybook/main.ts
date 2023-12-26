import type { StorybookConfig } from '@storybook/react-vite'
import tsconfig from 'vite-tsconfig-paths'
import fs from 'fs'

const config: StorybookConfig = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: (config) => ({
    ...config,
    assetsInclude: ['/sb-preview/runtime.js'],
    plugins: [...(config.plugins || []), tsconfig()],
  }),
}
export default config
