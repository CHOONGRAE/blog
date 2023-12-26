'use client'

import { Children, cloneElement, useState } from 'react'
import * as S from '@/styles/atom/BooleanContainer'
import React from 'react'

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

  const childWithProps = React.cloneElement(onlyChild, {
    [propName]: boolean.toString(),
    key: onlyChild.key,
    ya: boolean,
  })

  console.log(childWithProps)
  console.log(childWithProps.props[propName])

  return (
    <S.BooleanConainer onClick={clickHandler} {...args}>
      {childWithProps}
    </S.BooleanConainer>
  )
}

export default BooleanContainer
