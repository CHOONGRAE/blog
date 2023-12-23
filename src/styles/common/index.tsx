import { css } from 'styled-components'

type Props = {
  [key: string]: string | number | boolean | undefined
  $width?: string | number
  $min_height?: string | number
  $max_height?: string | number
  $height?: string | number
  $min_width?: string | number
  $max_width?: string | number
  $margin?: string
  $padding?: string
}

const makeCommonStyles = ({
  $width,
  $min_width,
  $max_width,
  $height,
  $min_height,
  $max_height,
  $margin,
  $padding,
}: Props) => css`
  width: ${makeWidthOrHeight($width)};
  min-width: ${makeWidthOrHeight($min_width)};
  max-width: ${makeWidthOrHeight($max_width)};
  height: ${makeWidthOrHeight($height)};
  min-height: ${makeWidthOrHeight($min_height)};
  max-height: ${makeWidthOrHeight($max_height)};
  margin: ${makeMarginOrPadding($margin)};
  padding: ${makeMarginOrPadding($padding)};
`

export default makeCommonStyles

const makeMarginOrPadding = (value: string | undefined) => {
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

const makeWidthOrHeight = (value: string | number | undefined) => {
  if (typeof value === 'string') {
    if (/%|em/.test(value)) return value
  }
  if (typeof value === 'number') return `${value * 4}px`
  return ''
}
