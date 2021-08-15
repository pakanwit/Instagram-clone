import { atom } from 'recoil'

export interface FeedLists {
  breedName: string
  image: string
  description: string
  dogInfo: {
    height: string
    weight: string
    life: string
    breedGroup: string
  }
  id: string
}

export const feedLists = atom({
  key: 'feedLists',
  default: [] as FeedLists[],
})


export const search = atom({
  key: 'search',
  default: '' as string
})

export interface LikedState {
  id: string
  like: boolean
}
export const liked = atom({
  key: 'liked',
  default: [] as LikedState[]
})
