import React from 'react';
import { useNavigate } from 'react-router-dom'

const AboutPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section>
      <h2>
        О нас
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aperiam quam fuga culpa libero numquam temporibus et laboriosam dicta ducimus sed molestias, nemo corporis asperiores dolores distinctio accusantium consequuntur beatae.</p>
      <p><a href="https://github.com/mkdir-dev" target="_blank" rel="noreferrer">github</a></p>
      <button className="btn blue darken-2" onClick={() => navigate('/')}>К списку дел</button>
    </section>
  );
}

export default AboutPage;
