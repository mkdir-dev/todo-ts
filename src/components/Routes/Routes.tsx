import React from 'react';
import { useNavigate } from 'react-router-dom'

import {
  Routes,
  Route,
} from 'react-router-dom';

import TodosPage from '../Pages/TodosPage';
import AboutPage from '../Pages/AboutPage';

const RoutesMenu: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Routes>
      <Route path="/" element={<TodosPage />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="*" element={
        <section className='center'>
          <h2 >
            Страница не найдена
          </h2>
          <p >Ошибка 404</p>
          <button className="btn blue darken-2" onClick={() => navigate('/')}>К списку дел</button>
        </section>
      } />
    </Routes>
  );
}

export default RoutesMenu;
