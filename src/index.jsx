import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './index.css';
import About from './views/About';
import Form from './views/Form'
import Main from './views/Main'
import Projects from './views/Projects';
import Project from './views/Project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/contact' element={<Form />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects/:id' element={<Project />} />
    </Routes>
  </BrowserRouter>
);


