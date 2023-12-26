import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfig from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import directives from 'rollup-plugin-preserve-directives'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: [
        '**/*.stories.ts',
        '**/*.stories.tsx',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
    }),
    tsconfig(),
    directives(),
  ],
  build: {
    ssr: false,
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'ui',
      formats: ['es'],
      fileName: (_, entry) => `${entry}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'styled-components': 'styled',
        },
        // banner: `'use client'`,
        // interop: 'compat',
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
})
