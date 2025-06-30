import { Link } from 'react-router-dom';
import './ProjectsPage.css';
import CircularGallery from '../components/CircularGallery'
const ProjectsPage = () => {
  return (
    <>
    <div className="ProjectsPage">
      <h1>Solutions in Action</h1>

      <section className="Travit">
        

<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>
      </section>

    </div>
    </>
  );
}

export default ProjectsPage;