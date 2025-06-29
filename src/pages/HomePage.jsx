import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { AuroraHero } from '../components/AuroraHero';

const HomePage = () => {
  return (
    <div className="homepage">
    <AuroraHero />
    <div className="home-content">
      <h1>Empowering Innovation Through Custom Software</h1>
      <p>Transforming ideas into fast, scalable digital products</p>
      <Link to="/get-started">
        <button className="get-button">
          Get started
        </button>
      </Link>
    </div>
    </div>
  );
}

export default HomePage;