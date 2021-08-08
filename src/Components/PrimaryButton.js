import React from 'react';
import styled from 'styled-components';

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: .8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  position: relative;
  text-transform: uppercase;
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: .2rem;
    left: 0;
    bottom: 0;
    transition: all .4s ease-in-out;
    opacity: 0.7;

  }
  &:hover::after {
    
    width: 100%;
    background-color: var(--white-color);
  }
`;

const PrimaryButton = ({ title }) => {
  return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
};

export default PrimaryButton;
