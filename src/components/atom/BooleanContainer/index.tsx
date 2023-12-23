'use client'

import { Children, cloneElement, useState } from 'react'
import * as S from '@/styles/atom/BooleanContainer'

interface BooleanContainerProps {
  children: React.ReactElement
  init?: boolean
  propName?: string
}

const BooleanContainer = ({
  children,
  init = false,
  propName = 'boolean',
  ...args
}: BooleanContainerProps) => {
  const [boolean, setBoolean] = useState(init)

  const clickHandler = () => setBoolean((prev) => !prev)

  const onlyChild = Children.only(children)

  const childWithProps = cloneElement(onlyChild, { [propName]: boolean })

  return (
    <S.BooleanConainer onClick={clickHandler} {...args}>
      {childWithProps}
    </S.BooleanConainer>
  )
}

export default BooleanContainer
