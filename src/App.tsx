import React from 'react'
import { RecoilRoot } from 'recoil'
import './App.css'
import Feed from './Container/Feed'

function App() {
  return (
    <RecoilRoot>
      <Feed />
    </RecoilRoot>
  )
}

export default App
