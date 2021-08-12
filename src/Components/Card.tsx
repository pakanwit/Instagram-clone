import React from 'react'
import styled from 'styled-components'

const Container = styled.article`
  width: 100%;
  @media (min-width: 640px) {
    border: 1px solid rgba(219,219,219,1);
    background-color: #fff;
    border-radius: 3px;
    margin-bottom: 24px;
  }
  @media (max-width: 735px) {
    margin-bottom: 15px;
  }
`

const HeaderCard = styled.header`
  display: flex;
  height: 60px;
  padding: 16px;
  align-items: center;
`

const ProfileCircle = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #0c540c;
  color: #fff;
  text-align: center;
  line-height: 42px;
`

const ProfileName = styled.div`
  margin-left: 12px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  flex-grow: 1;
`

const Card = (props: any) => {
  const { name = '', imgUrl, id, info, description } = props
  const profileName = name.charAt(0)
  return (
    <>
      <Container>
        <HeaderCard>
          <ProfileCircle>{profileName}</ProfileCircle>
          <ProfileName>{name}</ProfileName>
        </HeaderCard>

      </Container>
    </>
  )
}

export default Card
