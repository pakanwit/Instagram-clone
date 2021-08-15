import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  height: 54px;
  width: 100%;
  z-index: 3;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(219,219,219,1);
  background-color: #fff;
  display: flex;
`
const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <HeaderContainer>
      {children}
    </HeaderContainer>
  )
}

export default Header
