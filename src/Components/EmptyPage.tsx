import React from 'react'
import styled from 'styled-components'
import Typo from './Typography'

const EmptyPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const EmptyPage = () => {
  return (
    <EmptyPageContainer>
      <Typo>ไม่พบผลลัพธ์ใดเลย</Typo>
    </EmptyPageContainer>
  )
}

export default EmptyPage
