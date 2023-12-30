export interface MarginAndPaddingProps {
  $margin?: string | undefined
  $padding?: string | undefined
}

export const makeMarginOrPadding = (value: string | undefined) => {
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
