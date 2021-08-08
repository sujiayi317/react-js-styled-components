import styled from 'styled-components';
import React from 'react';
import { MainLayout } from '../styles/Layout';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSection';

const AboutStyled = styled.section``;

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={'About Me'} span={'About Me'} />
        <ImageSection />
        <ServicesSection />
        <ReviewsSection />
      </AboutStyled>
    </MainLayout>
  );
};

export default AboutPage;
