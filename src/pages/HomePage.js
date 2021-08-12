import React from 'react';
// import Particles from '../Components/Particles'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      cursor: pointer;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all .4s ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }

      .i-github {
        &:hover {
          border: 2px solid purple;
          color: purple;
        }
      }
    }
  }
`;

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className='typography'>
        <h1>
          Hi, I'm <span>Jiayi Su</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugiat
          quidem deserunt, rerum pariatur nesciunt quibusdam enim accusamus
          eligendi nihil?
        </p>
        <div className='icons'>
          <a href='https://codepen.io/pen/' className='icon i-github'>
            <GithubIcon />
          </a>
          <a href='https://codepen.io/pen/' className='icon i-youtube'>
            <YoutubeIcon />
          </a>
          <a href='https://codepen.io/pen/' className='icon i-facebook'>
            <FacebookIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
