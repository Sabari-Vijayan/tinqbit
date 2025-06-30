import { Link } from 'react-router-dom';
import './ProjectsPage.css';
import CircularGallery from '../components/CircularGallery'
const ProjectsPage = () => {
  return (
    <>
    <main className="ProjectsPage">
      <h1>Solutions in Action!!!</h1>

      <section className="Circular">
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </section>

      <hr />

      <section className="Project">

        <div className="image">
          <img src="/projects/Travit.png" alt="Travit logo"/>
        </div>

        <div className="content">
          <h1>Travit</h1>
          <p>Built with Flutter and Supabase, Travit is redefining travel in India by helping users discover destinations, plan personalized itineraries, and enjoy a seamless experience across web and mobile. With real-time data sync, geolocation features, and scalable cloud infrastructure, Travit is your smart travel companion.</p>
        </div>

      </section>

    </main>
    </>
  );
}

export default ProjectsPage;