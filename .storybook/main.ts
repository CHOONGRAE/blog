import type { StorybookConfig } from '@storybook/nextjs'
import TsconfigPathPlugin from 'tsconfig-paths-webpack-plugin'
import fs from 'fs'

const config: StorybookConfig = {
  stories: fs.readdirSync('src/components').map((v) => ({
    directory: `../src/components/${v}`,
    titlePrefix: v,
  })),
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  staticDirs: [{ from: '../public/fonts', to: 'public/fonts' }, '../public'],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathPlugin({
          extensions: config.resolve.extensions,
        }),
      ]
    }
    return config
  },
}

export default config
