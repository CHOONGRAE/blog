import React from 'react'
import type { Preview } from '@storybook/react'
import globalFonts from '../src/lib/fonts'
import '../src/styles/globals/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={globalFonts.className}>
        <Story />
      </div>
    ),
  ],
}

export default preview
