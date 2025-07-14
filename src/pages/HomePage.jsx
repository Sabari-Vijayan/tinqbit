import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import AuroraHero from '../components/AuroraHero';
import FlowingMenu from '../components/FlowingMenu';
import SpotlightCard from '../components/SpotlightCard';
import Footer from '../components/Footer';
import OnePage from '../components/onepage';

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
          BACKEND
        </h1>
        <p>
        We engineer robust, scalable, and secure backend systems that power your applications. Using modern technologies like Node.js, Express, and PostgreSQL, we ensure seamless data flow, API integrations, and lightning-fast performance to support millions of users reliably.
        </p>
      </SpotlightCard>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
         <h1>
          MOBILE
        </h1>
        <p>
        We create sleek, intuitive, and high-performance mobile applications that feel right at home on every device. With frameworks like React Native and Flutter, we build cross-platform apps that deliver native-like experiences — fast, fluid, and built to scale.
</p>
      </SpotlightCard>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
         <h1>
          BLOCKCHAIN
        </h1>
        <p>
        We build decentralized, trustless systems that redefine transparency and security. Leveraging Ethereum, Solidity, and smart contracts, we create blockchain-based applications tailored for real-world use — from NFTs to DeFi — ensuring immutability, scalability, and innovation.
        </p>
      </SpotlightCard>
      </div>
       

    </section>
    <section className="Project-Showcase">

      <OnePage
      title="Travit"
      description="A traveland exploration helping app"
      image="/projects/Travit.png"
      />

      <OnePage
      title="BeeHive"
      description="A traveland exploration helping app"
      image="/projects/Travit.png"
      />

      <OnePage
      title="Nammude Vipani"
      description="A traveland exploration helping app"
      image="/projects/Travit.png"
      />

      <OnePage
      title="Travit"
      description="A traveland exploration helping app"
      image="/projects/Travit.png"
      />

    </section>

    <section className="services">

      <div className="services-logo">
        <img src="/logos/logo.png" alt="tinqbit" className="service-logo-img"/>
      </div>

      <div className="services-content">
      </div>

    </section>

    <Footer />
    </>
  );
}

export default HomePage;