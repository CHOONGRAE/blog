'use client'

import React from 'react'
import * as S from '@/styles/atom/Text'
import { ThemeProvider } from 'styled-components'
import { fontSize } from '@/styles/theme'

type PossibleAs =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'b'
  | 'i'
  | 'span'
  | 'label'
  | 'strong'

interface TextProps extends Partial<S.Props> {
  children?: React.ReactNode
  as?: PossibleAs
}

const Text = ({ as = 'p', $variant, ...props }: TextProps) => (
  <ThemeProvider theme={fontSize}>
    <S.Text as={as} $variant={$variant || defaultVariant(as)} {...props} />
  </ThemeProvider>
)

export default Text

const defaultVariant: (as: PossibleAs | undefined) => S.PossibleVariant = (
  as,
) => {
  switch (as) {
    case 'h1':
      return 'title-xl'
    case 'h2':
      return 'title-lg'
    case 'h3':
      return 'title-md'
    case 'h4':
      return 'title-sm'
    default:
      return 'p-base'
  }
}
