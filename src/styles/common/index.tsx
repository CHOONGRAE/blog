import { css } from 'styled-components'

type Props = {
  [key: string]: string | number | boolean | undefined
  $margin?: string
  $padding?: string
}

const makeCommonStyles = ({ $margin, $padding }: Props) => css`
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
