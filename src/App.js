import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfoliosPage from './pages/PortfoliosPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 12.3rem;
  min-height: 100vh;

  /* .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .line1,
    .line2,
    .line3,
    .line4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  } */
`;

function App() {
  return (
    <div>
      <Sidebar />
      <MainContentStyled className='main-content'>
        {/* <div className='lines'>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
          <div className='line4'></div>
        </div> */}
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/about' exact>
            <AboutPage />
          </Route>
          <Route path='/resume' exact>
            <ResumePage />
          </Route>
          <Route path='/portfolios' exact>
            <PortfoliosPage />
          </Route>
          <Route path='/blogs' exact>
            <BlogsPage />
          </Route>
          <Route path='/contact' exact>
            <ContactPage />
          </Route>
        </Switch>
      </MainContentStyled>
    </div>
  );
}
export default App;
