'use client'

import * as S from '@/styles/atom/Text'

interface TextProps extends S.Props {
  children?: React.ReactNode
}

const Text = ({ children, ...args }: TextProps) => {
  return (
    // <S.Text as={args.$as} {...args}>
    //   {children}
    // </S.Text>
    <p {...S.test(args.$as)}>{children}</p>
  )
}

export default Text
