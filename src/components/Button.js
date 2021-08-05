import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Wrapper, fadeIn } from './styled';

const OutterWrapper = styled.div`
  width: 100%;
  background-color: blueviolet;
  margin-top: 2rem;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.main};
  font-size: ${(props) => props.theme.fontSizes.p};
  margin: ${({ margin }) => margin || '2rem'};
  padding: 0.5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  animation: 2s ${fadeIn} ease-in;

  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
    `}

  &:hover {
    color: white;
    background-color: palevioletred;
  }

  .someClass {
    color: blue;
  }

  ${OutterWrapper}:hover & {
    color: red;
  }

  @media ${({ theme }) => theme.mediaQueries.bellow768} {
    font-size: 0.4rem;
    color: blue;
  }
`;

const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`;

const Button = ({ primary, margin, children }) => {
  return (
    <OutterWrapper>
      <StyledButton margin={margin} primary={primary}>
        {children}
        <p className='someClass'>Test</p>
      </StyledButton>
    </OutterWrapper>
  );
};

export default Button;
