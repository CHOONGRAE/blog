import type { Meta, StoryObj } from '@storybook/react'

import BooleanContainer from '.'

const ChildForTest = ({
  children,
  ...args
}: {
  children?: React.ReactNode
  [key: string]: string | React.ReactNode
}) => (
  <div style={{ whiteSpace: 'pre-wrap' }}>
    {children}
    {Object.entries(args).map(([k, v]) => `\n${k}: ${v as string}`)}
  </div>
)

const meta: Meta = {
  component: BooleanContainer,
  args: {
    children: <ChildForTest>Default</ChildForTest>,
  },
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: {
      description: 'Only One Child Component',
      control: { type: 'none' },
    },
    init: { description: 'Init Boolean Value' },
    propName: { description: 'PropName To Use' },
  },
}

export default meta

type Story = StoryObj<typeof BooleanContainer>

export const Default: Story = {}

export const Example: Story = {
  render: () => (
    <>
      <BooleanContainer init={true} propName={'open'}>
        <ChildForTest>{`{ init: true, propName: 'open' } `}</ChildForTest>
      </BooleanContainer>
      <br />
      <BooleanContainer init={false} propName={'rotate'}>
        <ChildForTest>{`{ init: false, propName: 'rotate' } `}</ChildForTest>
      </BooleanContainer>
    </>
  ),
}
