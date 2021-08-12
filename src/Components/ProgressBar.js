import React from 'react';
import styled from 'styled-components';

const ProgressBarStyled = styled.div`
  .progress-bar {
    display: flex;
    align-items: center;
    p {
      padding-right: 1.1rem;
    }
    .progress {
      position: relative;
      width: 100%;
      height: 0.4rem;
      background-color: var(--border-color);
      border-radius: 15px;
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: var(--primary-color);
        border-radius: 15px;
      }
    }
  }
`;

function ProgressBar({ title, width, text }) {
  return (
    <ProgressBarStyled>
      <h6>{title}</h6>
      <div className='progress-bar'>
        <p>{text}</p>
        <div className='progress'>
          <span style={{ width: width }}></span>
        </div>
      </div>
    </ProgressBarStyled>
  );
}

export default ProgressBar;
