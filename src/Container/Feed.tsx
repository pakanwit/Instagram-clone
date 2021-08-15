import React, { ChangeEvent, useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component"
import styled from 'styled-components'
import Header from '../Components/Header'
import FeedCard from '../Components/FeedCard'
import { useRecoilState } from 'recoil'
import {
  FeedLists,
  feedLists as feedListsState,
  search as searchState,
} from '../Stores/atom'
import { FeedListsResponse, getFeedLists } from '../Service/getFeedLists'
import logo from '../assets/logo.png'
import loading from '../assets/loading.gif'
import Input from '../Components/SearchInput'
import { useDebounce } from '../Hook/useDebounce'
import { Config } from '../Config'
import EmptyPage from '../Components/EmptyPage'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(250,250,250,1);
`

const ContentWrapper = styled.div`
  display: flex;
  min-height: 100%;
  padding-top: 84px;
  width: 100%;

  @media (max-width: 640px) {
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

const HeaderContent = styled.div`
  max-width: 614px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-grow: 1;
  @media (max-width: 735px) {
    padding: 0 16px;
  }
`

const LogoWrapper = styled.div`
  flex: 1;
`

const InputWrapper = styled.div`
  flex: 1;
`

const LoadingMore = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`

const Feed = () => {
  const [feedLists, setFeedLists] = useRecoilState(feedListsState)
  const [searchQuery, setSearchQuery] = useRecoilState(searchState)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalData, setTotalData] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const debounceValue = useDebounce(searchQuery, Config.delay)

  const fetchFeedListsMore = async () => {
    const nextPage = currentPage + 1
    const response: FeedListsResponse = await getFeedLists({ page: nextPage, limit: Config.limit, search: searchQuery })
    setFeedLists([...feedLists, ...response.data])
    setCurrentPage(nextPage)
    setTotalData(response.totalData)
  }

  useEffect(() => {
    const fetchFeedLists = async () => {
      setIsLoading(true)
      const response: FeedListsResponse = await getFeedLists({ page: currentPage, limit: Config.limit })
      setFeedLists(response.data)
      setIsLoading(false)
      setTotalData(response.totalData)
    }
    fetchFeedLists()
  }, [])

  useEffect(() => {
    const fetchSearchResult = async () => {
      const response: FeedListsResponse = await getFeedLists({ page: 1, limit: Config.limit, search: searchQuery })
      setFeedLists(response.data)
      setTotalData(response.totalData)
      setIsLoading(false)
    }
    fetchSearchResult()
  }, [debounceValue])

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    setCurrentPage(1)
    setIsLoading(true)
  }

  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <HeaderContent>
            <LogoWrapper>
              <img src={logo} alt='logo' />
            </LogoWrapper>
            <InputWrapper>
              <Input
                value={searchQuery}
                handleOnChange={handleSearchChange}
              />
            </InputWrapper>
          </HeaderContent>
        </Header>
      </HeaderWrapper>
      <ContentWrapper>
        <ContentContainer>
          {isLoading &&
            <LoadingMore>
              <img src={loading} width={34} height={34} alt='Loading...' />
            </LoadingMore>
          }
          {!isLoading && feedLists.length === 0 &&
            <EmptyPage />
          }
          {!isLoading && feedLists.length !== 0 &&
            <InfiniteScroll
              dataLength={feedLists.length}
              next={fetchFeedListsMore}
              hasMore={feedLists.length < totalData}
              scrollThreshold={'100%'}
              loader={
                <LoadingMore>
                  <img src={loading} width={34} height={34} alt='Loading...' />
                </LoadingMore>
              }
              endMessage={null}
              style={{ overflow: 'unset' }}
            >
              {feedLists.map((item: FeedLists, index: number) => {
                return (
                  <FeedCard
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
