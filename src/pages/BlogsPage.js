import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import blogs from '../data/blogs';
import { MainLayout, InnerLayout } from '../styles/Layout';

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    .blog-item {
      padding: 2rem 1rem;
      background-color: var(--background-dark-grey);
    }
    .image {
      overflow: hidden;
      width: 100%;

      img {
        width: 100%;
        height: 85%;
        object-fit: cover;
        transition: all .2s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(-3deg) scale(1.1);
        }
      }
    }
    .title {
      a {
        font-size: 1.5rem;
        color: var(--color-white);
        cursor: pointer;
        transition: all .2s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

const BlogsPage = () => {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={'Blogs'} span={'Blogs'} />
        <InnerLayout className={'blog'}>
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className={'blog-item'}>
                <div className='image'>
                  <img src={blog.image} alt='' />
                </div>
                <div className='title'>
                  <a href={blog.link}>{blog.title}</a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
};

export default BlogsPage;
