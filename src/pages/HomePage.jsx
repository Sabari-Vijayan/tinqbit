import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import AuroraHero from '../components/AuroraHero';

const HomePage = () => {
  return (
    <>
    <div className="homepage">
    <AuroraHero position="top"/>
    <div className="home-content">
      <h1>Empowering Innovation Through Custom Software</h1>
      <p>Transforming ideas into fast, scalable digital products</p>
      <Link to="/get-started">
        <button className="get-started-button">
          <span>Get started</span>
            <svg fill="none" viewBox="0 0 24 24" className="arrow">
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="currentColor"
                d="M5 12h14M13 6l6 6-6 6"
              ></path>
            </svg>
         </button>
      </Link>
    </div>
    </div>

    <section className="rest-content">
      <h2>
        What we do?
      </h2>
      <p>
        We've been working continously for the past few years mastering out crafts!
      </p>

    </section>
    </>
  );
}

export default HomePage;