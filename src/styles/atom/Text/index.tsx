import styled, { css } from 'styled-components'

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

type PossibleVariant =
  | 'title-xl'
  | 'title-lg'
  | 'title-md'
  | 'title-sm'
  | 'p-large'
  | 'p-base'
  | 'p-small'

export interface Props {
  as?: PossibleAs
  $variant?: PossibleVariant
  $color?: string
  $margin?: string
  $padding?: string
  $truncate?: boolean
  $truncateLines?: number
}

export const Text = styled.p<Props>`
  ${({
    as,
    $variant,
    $color,
    $margin,
    $padding,
    $truncate,
    $truncateLines,
  }) => {
    return css`
      font-size: var(--${$variant || defaultVariant(as)});
      color: ${$color || '#222'};
      margin: ${makeMarginOrPadding($margin) || '0px'};
      padding: ${makeMarginOrPadding($padding)};
      ${$truncate &&
      css`
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: ${$truncateLines || 1};
        -webkit-box-orient: vertical;
      `}
    `
  }}
`

const makeMarginOrPadding: (value: string | undefined) => string = (value) => {
  const convertedValue = value
    ? value
        .trim()
        .replace(/[^\d\s]/g, '')
        .split(/\s{1,}/)
        .slice(0, 4)
        .map((n) => Number(n) * 4 + 'px')
    : []

  return convertedValue.join(' ')
}

const defaultVariant: (as: PossibleAs | undefined) => PossibleVariant = (
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
