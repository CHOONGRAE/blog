import React from 'react'
import type { Preview } from '@storybook/react'

import GlobalStyle from '../styles/global'
import '@lib/fonts/ui/defaultFonts.css'

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
      <div>
        <GlobalStyle />
        <Story />
      </div>
    ),
  ],
}

export default preview
