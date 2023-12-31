import styled, { css } from 'styled-components'
import { makeCommonStyles, MarginAndPaddingProps } from '@/styles/common'

export type PossibleVariant =
  | 'title-xl'
  | 'title-lg'
  | 'title-md'
  | 'title-sm'
  | 'p-large'
  | 'p-base'
  | 'p-small'

export interface Props extends MarginAndPaddingProps {
  $variant: PossibleVariant
  $color?: string
  $truncate?: boolean
  $truncateLines?: number
}

export const Text = styled.p<Props>`
  ${({
    theme,
    $variant,
    $color,
    $margin,
    $padding,
    $truncate,
    $truncateLines,
  }) => css`
    ${makeCommonStyles({ $margin: $margin || '0', $padding })}
    font-size: ${theme[$variant]};
    color: ${$color || '#222'};
    ${$truncate &&
    css`
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${$truncateLines || 1};
      -webkit-box-orient: vertical;
    `}
  `}
`
