import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  height: 28px;
`

const Input = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  outline: 0;
  padding: 3px 10px 3px 26px;
  z-index: 2;
  font-size: 16px;
`

interface InputFormProps {
  value?: string
  handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const SearchInput: React.FC<InputFormProps> = ({
  value = '',
  handleOnChange = () => { },
  placeholder = 'ค้นหา',
}) => {
  return (
    <InputContainer>
      <Input
        type='text'
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
      />
    </InputContainer>
  )
}

export default SearchInput

