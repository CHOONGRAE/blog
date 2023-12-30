import type { Metadata } from 'next'
import StyledComponentsRegistry from '@lib/styled-components-registry'
import globalFonts from '../lib/fonts'

import '@/styles/globals/index.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={globalFonts.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}