import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import ReviewItem from './ReviewItem';
import Title from './Title';

const ReviewsStyled = styled.section`
  .reviews {
    padding-top: 2rem;
    display: flex;
    
  }
`;

const ReviewsSection = () => {
  return (
    <InnerLayout>
      <ReviewsStyled>
        <Title title={'Reviews'} span={'Reviews'} />
        <div className="reviews">
          <ReviewItem text={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni'} />
          <ReviewItem text={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. '} />
        </div>
      </ReviewsStyled>
    </InnerLayout>
  );
};

export default ReviewsSection;
