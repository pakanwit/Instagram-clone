import axios, { AxiosResponse } from 'axios'
import { baseUrl } from '../utilities/url'
import { FeedLists } from '../stores/atom'

export interface FeedListsResponse {
  currentPage: number
  totalPage: number
  data: FeedLists[]
}

export interface FeedListsRequest {
  page: number
  limit: number
}
export const getFeedLists = async (params: FeedListsRequest) => {
  console.log('params', params)
  try {
    const res: AxiosResponse<FeedListsResponse> = await axios.post(`${baseUrl}/dogs`, params)
    if (!res.data) {
      throw new Error('get dogs is invalid')
    }
    return res.data
  } catch (error) {
    return {} as FeedListsResponse
  }
}
