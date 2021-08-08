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
  &:hover::after {
    content: '';
    position: absolute;
    width: 100%;
    height: .3rem;
    background-color: var(--white-color);
    left: 0;
    bottom: 0;
    transition: all .4s ease-in-out;

  }
`;

const PrimaryButton = ({ title }) => {
  return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
};

export default PrimaryButton;
