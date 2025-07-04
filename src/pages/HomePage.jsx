import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import AuroraHero from '../components/AuroraHero';
import FlowingMenu from '../components/FlowingMenu';
import SpotlightCard from '../components/SpotlightCard';

const HomePage = () => {

  const demoItem = [
        { link: '#', text: 'What we do?', image: '/projects/Travit.png'}
  ];

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
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                d="M5 12h14M13 6l6 6-6 6"
              ></path>
            </svg>
         </button>
      </Link>
    </div>
    </div>

    <section className="rest-content">

      <div style={{ height: '8rem', position: 'relative' }}>
        <FlowingMenu items={demoItem} />
      </div>

      <div className="cards">
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
         <h1>
          FRONTEND
        </h1>
        <p>
          We craft stunning, responsive, and performant interfaces that users love.
Using modern frameworks like React, Vite, and Tailwind CSS, we build web apps that are fast, scalable, and pixel-perfect — ensuring a seamless experience across all devices.
        </p>
      </SpotlightCard>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
         <h1>
          FRONTEND
        </h1>
        <p>
          We craft stunning, responsive, and performant interfaces that users love.
Using modern frameworks like React, Vite, and Tailwind CSS, we build web apps that are fast, scalable, and pixel-perfect — ensuring a seamless experience across all devices.
        </p>
      </SpotlightCard>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
         <h1>
          FRONTEND
        </h1>
        <p>
          We craft stunning, responsive, and performant interfaces that users love.
Using modern frameworks like React, Vite, and Tailwind CSS, we build web apps that are fast, scalable, and pixel-perfect — ensuring a seamless experience across all devices.
        </p>
      </SpotlightCard>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
         <h1>
          FRONTEND
        </h1>
        <p>
          We craft stunning, responsive, and performant interfaces that users love.
Using modern frameworks like React, Vite, and Tailwind CSS, we build web apps that are fast, scalable, and pixel-perfect — ensuring a seamless experience across all devices.
        </p>
      </SpotlightCard>
      </div>
       

    </section>
    </>
  );
}

export default HomePage;