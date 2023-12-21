'use client'

import * as S from '@/styles/common/Text'

interface TextProps extends S.Props {
  children?: React.ReactNode
}

const Text = ({ children, ...args }: TextProps) => {
  return <S.Text {...args}>{children}</S.Text>
}

export default Text
