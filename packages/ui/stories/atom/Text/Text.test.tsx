import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Text.stories'
import '@testing-library/jest-dom'
import 'jest-styled-components'

const { Default, ExampleForAs, ExampleForStyles } = composeStories(stories)

test('Default', () => {
  render(<Default data-testid="DefaultText" />)
  const element = screen.getByTestId('DefaultText')
  expect(element).toBeInTheDocument()
  expect(element).toHaveTextContent(/lorem ipsum dolor/i)
})

describe('Test Stories', () => {
  it('as', () => {
    render(<ExampleForAs />)

    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeInTheDocument()

    const h2 = screen.getByRole('heading', { level: 2 })
    expect(h2).toBeInTheDocument()

    const h3 = screen.getByRole('heading', { level: 3 })
    expect(h3).toBeInTheDocument()

    const h4 = screen.getByRole('heading', { level: 4 })
    expect(h4).toBeInTheDocument()

    const p = screen.getByText(/p\(default\):/i)
    expect(p).toBeInTheDocument()

    const b = screen.getByText(/b:/i)
    expect(b).toBeInTheDocument()

    const i = screen.getByText(/i:/i)
    expect(i).toBeInTheDocument()

    const span = screen.getByText(/span:/i)
    expect(span).toBeInTheDocument()

    const label = screen.getByText(/label:/i)
    expect(label).toBeInTheDocument()

    const strong = screen.getByText(/strong:/i)
    expect(strong).toBeInTheDocument()
  })

  it('styles', () => {
    render(<ExampleForStyles />)

    const variants = screen.getAllByText(/\$variant:/)
    variants.forEach((variant) => {
      expect(variant).toBeInTheDocument()
      expect(variant).toHaveStyleRule(
        'font-size',
        `var(--${variant.textContent?.replace('$variant: ', '')})`,
      )
    })

    const color = screen.getByText(/\$color:/)
    expect(color).toBeInTheDocument()
    expect(color).toHaveStyleRule('color', '#f99')

    const margins = screen.getAllByText(/\$margin:/)
    margins.forEach((margin) => {
      expect(margin).toBeInTheDocument()
      expect(margin).toHaveStyleRule(
        'margin',
        margin.textContent?.replace('$margin: ', ''),
      )
    })

    const paddings = screen.getAllByText(/\$padding:/)
    paddings.forEach((padding) => {
      expect(padding).toBeInTheDocument()
      expect(padding).toHaveStyleRule(
        'padding',
        padding.textContent?.replace('$padding: ', ''),
      )
    })

    const truncate = screen.getByText(/\$truncate:/)
    expect(truncate).toBeInTheDocument()
    expect(truncate).toHaveStyleRule('width', '100%')
    expect(truncate).toHaveStyleRule('overflow', 'hidden')
    expect(truncate).toHaveStyleRule('text-overflow', 'ellipsis')
    expect(truncate).toHaveStyleRule('display', '-webkit-box')
    expect(truncate).toHaveStyleRule('-webkit-line-clamp', '1')
    expect(truncate).toHaveStyleRule('-webkit-box-orient', 'vertical')

    const truncateLines = screen.getByText(/\$truncateLines:/)
    expect(truncateLines).toBeInTheDocument()
    expect(truncateLines).toHaveStyleRule('width', '100%')
    expect(truncateLines).toHaveStyleRule('overflow', 'hidden')
    expect(truncateLines).toHaveStyleRule('text-overflow', 'ellipsis')
    expect(truncateLines).toHaveStyleRule('display', '-webkit-box')
    expect(truncateLines).toHaveStyleRule('-webkit-line-clamp', '2')
    expect(truncateLines).toHaveStyleRule('-webkit-box-orient', 'vertical')
  })
})
