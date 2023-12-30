import { defineConfig, UserConfig } from 'vite'
import { resolve } from 'path'
import tsconfig from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import directives from 'rollup-plugin-preserve-directives'

const defaultConfig: UserConfig = {
  assetsInclude: ['/sb-preview/runtime.js'],
  plugins: [
    tsconfig({
      projects: ['./tsconfig.json'],
    }),
    react(),
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
