import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Truncate from 'react-truncate'
import useDoubleClick from 'use-double-click'
import { ReactComponent as UnLike } from '../assets/icons/unlike.svg'
import heart from '../assets/heart.png'
import Typo from './Typography'

interface CardProps {
  name?: string
  imgUrl?: string
  id?: string
  description?: string
  info?: {
    height?: string
    weight?: string
    life?: string
    breedGroup?: string
  }
}

const Container = styled.article`
  width: 100%;
  @media (min-width: 640px) {
    border: 1px solid rgba(219,219,219,1);
    background-color: rgba(255,255,255,1);
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
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
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
  font-weight: bold;
`

const ImageButton = styled.div`
  touch-action: manipulation;
  margin-top: 4px;
  position: relative;
`

const ImageWrapper = styled.div`
  display: block;
  width: 100%;
`

const Img = styled.img`
  object-fit: cover;
  width: 100%;
`

const LikeActionSection = styled.section`
  display: flex;
`

const Chip = styled.a`
  display: inline-block;
  color: rgba(0,55,107,1);
  text-decoration: none;
  font-size: 14px;
`

const InfoSection = styled.section`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 8px;  
`

const DogInfoSection = styled.div`
  flex: 1 1 auto;
`

const DogInfoName = styled.span`
  display: inline;
  margin-right: 8px;
`
const DogInfoDescription = styled.span`
  overflow-wrap: break-word;
`

const Ellipsis = styled.span`
  cursor: pointer;
`

const HeartContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > span {
    display: block;
    width: 128px;
    height: 128px;
    background: url(${heart}) no-repeat center/contain;;
    animation-duration: 1000ms;
    animation-name: like-heart-animation;
    animation-timing-function: ease-in-out;
    transform: scale(0);

    @keyframes like-heart-animation{ 
      0% { opacity:0; transform:scale(0); }
      15% { opacity:.9; transform:scale(1.2); }
      30% { transform:scale(.95); }
      45%,
      80% { opacity:.9; transform:scale(1); }
    }
  }
`

const FeedCard = (props: CardProps) => {
  const { name = '', imgUrl = '', info, description, id = '' } = props
  const [expanded, setExpanded] = useState(false)
  const [truncated, setTruncated] = useState(false)
  const [isShowHeart, setIsShowHeart] = useState(false)
  const profileName = name.charAt(0)

  const imageButtonRef = useRef<HTMLDivElement>(null)
  useDoubleClick({
    onDoubleClick: (e) => {
      console.log(e, imageButtonRef.current?.id, 'double click')
      setIsShowHeart(true)
      setTimeout(() => {
        setIsShowHeart(false)
      }, 1000)

    },
    ref: imageButtonRef,
    /**
     * The amount of time (in milliseconds) to wait 
     * before differentiating a single from a double click
     */
    latency: 250
  })

  const handleTruncate = (truncatedParam: boolean) => {
    if (truncated !== truncatedParam) {
      setTruncated(truncatedParam)
    }
  }

  const toggleLines = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault()
    setExpanded(!expanded)

  }
  return (
    <Container>
      <HeaderCard>
        <ProfileCircle>{profileName}</ProfileCircle>
        <ProfileName><Typo fontWeigh='bold'>{name}</Typo></ProfileName>
      </HeaderCard>
      <ImageButton id={id} ref={imageButtonRef}>
        <ImageWrapper>
          <Img src={imgUrl} alt='Image' />
        </ImageWrapper>
        <HeartContainer>
          {isShowHeart && <span />}
        </HeartContainer>
      </ImageButton>
      <InfoSection>
        <LikeActionSection>
          <UnLike />
        </LikeActionSection>
      </InfoSection>
      <InfoSection>
        <DogInfoSection>
          <DogInfoName><Typo fontWeigh='bold'>{name}</Typo></DogInfoName>
          <DogInfoDescription>
            <Truncate
              lines={!expanded && 1}
              ellipsis={<Ellipsis onClick={toggleLines}>... <Typo color='#8e8e8e'>เพิ่มเติม</Typo></Ellipsis>}
              onTruncate={handleTruncate}
              style={{ color: '#262626', fontSize: '14px' }}
            >
              <Typo fontWeigh='normal'>{description}</Typo>
              <br /><br />
              <Chip>{`#${info?.breedGroup}`}</Chip>
            </Truncate>
          </DogInfoDescription>
        </DogInfoSection>
      </InfoSection>
    </Container>
  )
}

export default FeedCard
