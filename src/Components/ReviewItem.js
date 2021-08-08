import React from 'react'
import styled from 'styled-components'

const ReviewItemStyled = styled.div`
  padding: 2rem 1rem;
  border-left: 6px solid var(--border-color);
  background-color: var(--background-dark-grey);
  position: relative;
  width: 45%;
  &:not(:first-child) {
    margin-left: 1rem;
  }
  &::after {
    content: '';
    position: absolute;
    left: 1.8rem;
    border-width: .8rem;
    top: 100%;
    border-style: solid;
    border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
  }
  p {
    padding: 1rem 0;
  }
`

const ReviewItem = ({text}) => {
  return (
    <ReviewItemStyled>
      <p>{text}</p>
    </ReviewItemStyled>
  )
}

export default ReviewItem
