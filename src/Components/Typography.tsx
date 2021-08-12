import styled from 'styled-components'

interface TypoProp {
  fontWeigh?: React.CSSProperties['fontWeight']
  color?: string
}
const weightSelector = (props: TypoProp) => {
  return props.fontWeigh || 'normal'
}

const colorSelector = (props: TypoProp) => {
  return props.color || '#262626'
}


const Typo = styled.span<TypoProp>`
  color: ${(props: TypoProp) => colorSelector(props)};
  font-size: 14px;
  font-weight: ${(props: TypoProp) => weightSelector(props)};
`

export default Typo
