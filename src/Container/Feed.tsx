import React, { useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component"
import styled from 'styled-components'
import Header from '../Components/Header'
import Card from '../Components/FeedCard'
import { useRecoilState } from 'recoil'
import {
  FeedLists,
  feedLists as feedListsState,
} from '../stores/atom'
import { FeedListsResponse, getFeedLists } from '../service/getFeedLists'
import Skeleton from '../Components/Skeleton'

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
  const [currentPage, setCurrentPage] = useState(0)

  const fetchFeedListsMore = async () => {
    const nextPage = currentPage + 1
    const response: FeedListsResponse = await getFeedLists({ page: nextPage, limit: 10 })
    setFeedLists([...feedLists, ...response.data])
    setCurrentPage(nextPage)
  }

  useEffect(() => {
    const fetchFeedLists = async () => {
      const response: FeedListsResponse = await getFeedLists({ page: currentPage, limit: 10 })
      setFeedLists(response.data)
      setCurrentPage(currentPage + 1)
    }
    fetchFeedLists()
  }, [])
  if (feedLists.length === 0) return <Skeleton />
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <ContentWrapper>
        <ContentContainer>
          {feedLists.length === 0 ?
            <Skeleton />
            :
            <InfiniteScroll
              dataLength={feedLists.length}
              next={fetchFeedListsMore}
              hasMore={true}
              loader={<Skeleton />}
            >
              {feedLists.map((item: FeedLists, index: number) => {
                return (
                  <Card
                    key={`${index}-${item.id}`}
                    name={item.breedName}
                    imgUrl={item.image}
                    id={item.id}
                    description={item.description}
                    info={item.dogInfo}
                  />
                )
              })
              }
            </InfiniteScroll>
          }

        </ContentContainer>
      </ContentWrapper>
    </Container>
  )
}

export default Feed
