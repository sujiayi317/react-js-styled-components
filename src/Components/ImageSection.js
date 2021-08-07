import React from 'react';
import styled from 'styled-components';
import resume from '../img/resume.jpg';

const ImageSectionStyled = styled.div`
  margin-top: 2rem;
  display: flex;
  .left-content {
    img {
      width: 100%;
    }
  }
  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 500;
        }
      }
      .info-title,
      .info {
        p {
          padding: .2rem 0;
        }
      }
    }
  }
`;

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className='left-content'>
        <img src={resume} alt='resume' />
      </div>
      <div className='right-content'>
        <h4>
          I am <span>Full Stack developer</span>
        </h4>

        <p className='paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          consectetur, facere voluptas enim totam corrupti eaque quisquam iure
          optio recusandae libero voluptatem quis incidunt dolorem vel suscipit?
          Tempore necessitatibus sapiente voluptatum repellat consequatur in
          distinctio obcaecati dolore soluta totam nostrum facere beatae
          delectus ab maxime, reprehenderit, est animi aspernatur repudiandae
          ut! Cupiditate numquam natus vitae expedita pariatur vel dolorem!
          Ipsum?
        </p>
        <div className='about-info'>
          <div className='info-title'>
            <p>Full Name</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className='info'>
            <p>Jiayi Su</p>
            <p>China - PR in Canada</p>
            <p>English, Mandarin, German, Spanish, French</p>
            <p>Toronto</p>
            <p>Freelance</p>
          </div>
        </div>
      </div>
    </ImageSectionStyled>
  );
};

export default ImageSection;
