import type { Meta, StoryObj } from '@storybook/react'

import Text from './index'

const meta: Meta<typeof Text> = {
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rerum, distinctio itaque architecto quisquam voluptatibus vero laudantium saepe dignissimos, possimus fuga dolores, quasi voluptate? Ipsum dolores aspernatur voluptatem quaerat quod.',
  },
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: {
      description: 'Text or ReactNode',
    },
    as: {
      description: 'To Make Elem',
    },
    $variant: {
      description: 'Text Size',
    },
    $color: {
      description: 'Text Color',
    },
    $margin: {
      description: 'Margin Step 4px',
    },
    $padding: {
      description: 'Padding Step 4px',
    },
    $truncate: {
      description: 'Truncate Text',
    },
    $truncateLines: {
      description: 'TruncateLines',
      if: { arg: '$truncate', truthy: true },
    },
  },
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {}

export const ExampleForAs: Story = {
  render: () => (
    <>
      <Text as={'h1'}>h1: Lorem ipsum dolor</Text>
      <br />
      <Text as={'h2'}>h2: Lorem ipsum dolor</Text>
      <br />
      <Text as={'h3'}>h3: Lorem ipsum dolor</Text>
      <br />
      <Text as={'h4'}>h4: Lorem ipsum dolor</Text>
      <br />
      <Text>p(default): Lorem ipsum dolor</Text>
      <br />
      <Text as={'b'}>b: Lorem ipsum dolor</Text>
      <br />
      <br />
      <Text as={'i'}>i: Lorem ipsum dolor</Text>
      <br />
      <br />
      <Text as={'span'}>span: Lorem ipsum dolor</Text>
      <br />
      <br />
      <Text as={'label'}>label: Lorem ipsum dolor</Text>
      <br />
      <br />
      <Text as={'strong'}>strong: Lorem ipsum dolor</Text>
    </>
  ),
}

export const ExampleForStyles: Story = {
  render: () => (
    <>
      <Text $variant={'p-large'}>$variant: p-large</Text>
      <br />
      <Text $variant={'p-small'}>$variant: p-small</Text>
      <br />
      <Text $color={'#f99'}>$color: #f99</Text>
      <br />
      <Text $margin={'4'}>$margin: 16px</Text>
      <br />
      <Text $margin={'4 3'}>$margin: 16px 12px</Text>
      <br />
      <Text $margin={'4 3 2'}>$margin: 16px 12px 8px</Text>
      <br />
      <Text $margin={'4 3 2 1'}>$margin: 16px 12px 8px 4px</Text>
      <br />
      <Text $padding={'4'}>$padding: 16px</Text>
      <br />
      <Text $padding={'4 3'}>$padding: 16px 12px</Text>
      <br />
      <Text $padding={'4 3 2'}>$padding: 16px 12px 8px</Text>
      <br />
      <Text $padding={'4 3 2 1'}>$padding: 16px 12px 8px 4px</Text>
      <br />
      <Text $truncate>
        $truncate: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Tenetur, corporis dolores dolorum deserunt iure a voluptate ipsa, id
        deleniti voluptatibus nostrum soluta assumenda illum! Fuga facilis alias
        aut autem tempore?
      </Text>
      <br />
      <Text $truncate $truncateLines={2}>
        $truncateLines: Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Tenetur, corporis dolores dolorum deserunt iure a voluptate ipsa,
        id deleniti voluptatibus nostrum soluta assumenda illum! Fuga facilis
        alias aut autem tempore?
      </Text>
    </>
  ),
}
