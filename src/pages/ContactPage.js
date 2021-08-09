import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layout';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    .right-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -18px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background-color: transparent;
          height: 70px;
          padding: 0.5rem 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem;
        }
      }
    }
  }
`;

const ContactPage = () => {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  return (
    <MainLayout>
      <ContactPageStyled>
        <Title title={'Contact'} span={'Contact'} />
        <InnerLayout className={'contact-section'}>
          <div className='left-content'>
            <div className='contact-title'>
              <h4>Get In Touch</h4>
            </div>
            <form action='' className='form'>
              <div className='form-field'>
                <label htmlFor='name'>Enter your name</label>
                <input type='text' name='name' id='name' />
              </div>
              <div className='form-field'>
                <label htmlFor='email'>Enter your email*</label>
                <input type='email' id='email' />
              </div>
              <div className='form-field'>
                <label htmlFor='subject'>Enter your subject</label>
                <input type='text' id='subject' />
              </div>
              <div className='form-field'>
                <label htmlFor='text-area'>Enter your Message*</label>
                <textarea
                  name='textarea'
                  id='textarea'
                  cols='30'
                  rows='10'
                ></textarea>
              </div>
              <div className='form-field f-button'>
                <PrimaryButton title={'Send Email'} />
              </div>
            </form>
          </div>
          <div className='right-content'>
            <ContactItem
              title={'Phone'}
              icon={phone}
              cont1={'+66-789675637'}
              cont2={'07663520283'}
            />
            <ContactItem
              title={'Email'}
              icon={email}
              cont1={'loremipsum@gmail.com'}
              cont2={'info.lorem.ipsum@gmail.com'}
            />
            <ContactItem
              title={'Address'}
              icon={location}
              cont1={'27 Aldrich Road, London, England'}
              cont2={'United Kingdom'}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

export default ContactPage;
