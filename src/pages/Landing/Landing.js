import React from 'react';
import logo from '../../assets/images/logo.svg';
import mainLogo from '../../assets/images/main.svg';
import { Nav, Page, H1, P, MainImg } from './LandingStyle';

const Landing = () => {
  return (
    <main className='Wrapper'>
      <Nav>
        <img src={logo} alt='Jobster Logo' className='logo' />
      </Nav>
      <Page className='container page'>
        <div className='info'>
          <H1>
            Job <span>Tracking</span> App
          </H1>
          <P>
            Fixie kitsch raclette schlitz succulents hashtag vaporware craft beer vice DSA lo-fi fashion axe tbh. Paleo
            vinyl bespoke mukbang pitchfork next level church-key brunch VHS readymade.
          </P>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <MainImg src={mainLogo} alt='Lady Hunting for a Job' className='img main-img' />
      </Page>
    </main>
  );
};

export default Landing;
