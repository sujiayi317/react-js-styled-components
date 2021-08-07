import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: .6rem;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 12rem;
      height: .33rem;
      border-radius: 15px;
      background-color: var(--background-light-color-2);
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 2rem;
      height: .33rem;
      border-radius: 15px;
      background-color: var(--background-light-color-2);
      left: 0;

    }
    span {
      font-weight: 700;
      color: rgba(25, 29, 43, .44);
      font-size: 5rem;
      position: absolute;
      left: 0;
      top: 20%;
      z-index: -1;
    }
  }
`;

const Title = ({ title, span }) => {
  return (
    <TitleStyled>
      <h2>
        {title} <b><span>{span}</span></b>
      </h2>
    </TitleStyled>
  );
};

export default Title;
