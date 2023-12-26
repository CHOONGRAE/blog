import { css } from 'styled-components'

import type { MarginAndPaddingProps } from './marginAndPadding.style'
import type { WidthAndHeightProps } from './widthAndHeight.style'

import { makeMarginOrPadding } from './marginAndPadding.style'
import { makeWidthOrHeight } from './widthAndHeight.style'

interface Props extends MarginAndPaddingProps, WidthAndHeightProps {
  [key: string]: string | number | boolean | undefined
}

export const makeCommonStyles = ({
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
