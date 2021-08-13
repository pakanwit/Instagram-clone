import axios, { AxiosResponse } from 'axios'
import { getBaseUrl } from '../utilities/url'
import { FeedLists } from '../stores/atom'

export const getFeedLists = async () => {
  const baseUrl = 'https://api-dog-breeds.herokuapp.com/api' //getBaseUrl()
  try {
    const res: AxiosResponse<FeedLists[]> = await axios.get(`${baseUrl}/dogs`)
    if (!res.data) {
      throw new Error('get dogs is invalid')
    }
    return res.data
  } catch (error) {
    return []
  }
}
