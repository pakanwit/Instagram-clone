import React from 'react'
import { ReactComponent as UnLike } from '../assets/icons/unlike.svg'

// import { ReactComponent as UnLike } from '../assets/icons/ic_like.svg'
// import like from '../assets/icons/ic_liked.svg'

const iconsMapping = {
  unLike: <UnLike />,
}

interface IconProps {
  name: keyof typeof iconsMapping
}


const Icon = (props: IconProps) => {
  const { name } = props
  // const x = iconsMapping
  // const IconComponent: JSX.Element = iconsMapping[name] | null
  return (
    <div />
  )
}


export default Icon
