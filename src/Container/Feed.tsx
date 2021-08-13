import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import Card from '../Components/FeedCard'
import { useRecoilState } from 'recoil'
import { FeedLists, feedLists as feedListsState } from '../stores/atom'
import { getFeedLists } from '../service/getFeedLists'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(250,250,250,1);

`

const ContentWrapper = styled.div`
  display: flex;
  min-height: 100%;
  padding-top: 84px;
  width: 100%;

  @media (min-width: 640px) {
    padding-top: 64px;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 614px;
  margin: 0 auto;
`
const HeaderWrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
`

const Feed = () => {
  const [feedLists, setFeedLists] = useRecoilState(feedListsState)
  useEffect(() => {
    const fetchFeedLists = async () => {
      const response: FeedLists[] = await getFeedLists()
      setFeedLists(response)
    }
    fetchFeedLists()
  }, [])

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <ContentWrapper>
        <ContentContainer>
          {feedLists.map((item: FeedLists) => {
            return (
              <Card
                key={item.id}
                name={item.breedName}
                imgUrl={item.image}
                id={item.id}
                description={item.description}
                info={item.dogInfo}
              />
            )
          })
          }
        </ContentContainer>
      </ContentWrapper>
    </Container>
  )
}

export default Feed
