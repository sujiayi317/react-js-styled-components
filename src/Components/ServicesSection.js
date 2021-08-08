import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import ServiceCard from './ServiceCard';
import Title from './Title';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .mid-card {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const ServicesSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={'Services'} span={'services'} />
        <div className='services'>
          <div className='services'>
            <ServiceCard
              image={design}
              title={'Web Design'}
              paragraph={
                'recusandae libero voluptatem slkfj leief oiwoajef lkd vnldn quis incidunt dolorem ve'
              }
            />
          </div>
          <div className='services mid-card'>
            <ServiceCard
              image={intelligence}
              title={'Artificial Intelligence'}
              paragraph={
                'recusandae libero voluptatem slkfj leief oiwoajef lkd vnldn quis incidunt dolorem ve'
              }
            />
          </div>
          <div className='services'>
            <ServiceCard
              image={gamedev}
              title={'Game Development'}
              paragraph={
                'recusandae libero voluptatem slkfj leief oiwoajef lkd vnldn quis incidunt dolorem ve'
              }
            />
          </div>
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

export default ServicesSection;
