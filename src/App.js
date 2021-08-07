import React from 'react';
import styled from 'styled-components';
import Sidebar from './Components/Sidebar';
import HomePage from './pages/HomePage';

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 12.3rem;
  min-height: 100vh;

  .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .line1, .line2, .line3, .line4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);

    }
  }

`

function App() {
  return (
    <div>
      <Sidebar />
      <MainContentStyled className="main-content">
        <div className="lines">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
        </div>
        <HomePage />

      </MainContentStyled>
    </div>
  );
}
export default App;
