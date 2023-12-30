export interface WidthAndHeightProps {
  $width?: string | number | undefined
  $min_height?: string | number | undefined
  $max_height?: string | number | undefined
  $height?: string | number | undefined
  $min_width?: string | number | undefined
  $max_width?: string | number | undefined
}

export const makeWidthOrHeight = (value: string | number | undefined) => {
  if (typeof value === 'string') {
    if (/%|em/.test(value)) return value
  }
  if (typeof value === 'number') return `${value * 4}px`
  return ''
}
