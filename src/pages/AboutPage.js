import styled from 'styled-components';
import React from 'react';
import { MainLayout } from '../styles/Layout';

const AboutStyled = styled.section``;

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <h1>Hello About</h1>
      </AboutStyled>
    </MainLayout>
  );
};

export default AboutPage;
