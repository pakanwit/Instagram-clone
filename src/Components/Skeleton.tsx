import React from "react"
import ContentLoader from "react-content-loader"
import styled from 'styled-components'

const SkeletonContainer = styled.div`
  display: flex;
  flex-grow: 1;
`
const Skeleton = () => (
  <SkeletonContainer>
    <ContentLoader
      speed={2}
      width={614}
      height={460}
      viewBox="0 0 614 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="31" cy="31" r="15" />
      <rect x="58" y="26" rx="2" ry="2" width="140" height="10" />
      <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
    </ContentLoader>
  </SkeletonContainer>
)

export default Skeleton

