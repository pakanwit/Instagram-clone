import axios, { AxiosResponse } from 'axios'
import { baseUrl } from '../utilities/url'
import { FeedLists } from '../Stores/atom'

export interface FeedListsResponse {
  currentPage: number
  totalPage: number
  totalData: number
  data: FeedLists[]
}

export interface FeedListsRequest {
  page?: number
  limit?: number
  search?: string
}
export const getFeedLists = async (params: FeedListsRequest) => {
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
