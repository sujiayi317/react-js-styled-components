import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import avatar from '../img/avatar.jpg'

const NavigationStyled = styled.nav`

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 80%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;

    img {
      width: 60%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    li {
      display: block;
      a {
        display: block;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 2rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`

const Navigation = () => {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className='nav-items'>
        <li className="nav-item">
          <NavLink to='/home' activeClassName='active'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about' activeClassName='active'>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/resume' activeClassName='active'>Resume</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/portfolios' activeClassName='active'>Portfolios</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/blogs' activeClassName='active'>Blogs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2021 My Website</p>
      </footer>
    </NavigationStyled>
  )
}

export default Navigation
