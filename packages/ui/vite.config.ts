import { defineConfig, UserConfig } from 'vite'
import { resolve } from 'path'
import tsconfig from 'vite-tsconfig-paths'
import react_dev from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import directives from 'rollup-plugin-preserve-directives'
// @ts-ignore
import rollupStylex from '@stylexjs/rollup-plugin'

const defaultConfig: UserConfig = {
  assetsInclude: ['/sb-preview/runtime.js'],
  plugins: [
    tsconfig({
      projects: ['./tsconfig.json'],
    }),
    react_dev({
      babel: {
        plugins: [
          [
            '@stylexjs/babel-plugin',
            {
              dev: process.env.NODE_ENV === 'development',
              unstable_moduleResolution: {
                type: 'commonJS',
                rootDir: __dirname,
              },
            },
          ],
        ],
      },
    }),
  ],
}

const buildConfig: UserConfig = {
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: [
        '**/*.stories.ts',
        '**/*.stories.tsx',
        '**/*.test.ts',
        '**/*.test.tsx',
        'vite.config.ts',
      ],
    }),
    directives(),
  ],
  build: {
    ssr: false,
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'ui',
      formats: ['es'],
      fileName: (_, entry) => `${entry.replace('packages/ui/', '')}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'styled-components': 'styled',
        },
        preserveModules: true,
      },
      // @ts-ignore
      plugins: [rollupStylex()],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
}

export default defineConfig(
  process.env.NODE_ENV === 'production' ? buildConfig : defaultConfig,
)
