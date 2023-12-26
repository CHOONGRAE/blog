import { css } from 'styled-components'

export interface WidthAndHeightProps {
  $width?: string | number
  $min_height?: string | number
  $max_height?: string | number
  $height?: string | number
  $min_width?: string | number
  $max_width?: string | number
}

export const makeWidthOrHeight = (value: string | number | undefined) => {
  if (typeof value === 'string') {
    if (/%|em/.test(value)) return value
  }
  if (typeof value === 'number') return `${value * 4}px`
  return ''
}
