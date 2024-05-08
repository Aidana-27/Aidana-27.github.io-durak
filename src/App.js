import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './pages/Hero';
import Together from './pages/Together';
import Three from './pages/Three';
import Four from './pages/Four';
import Modal from './components/Modal';

function App() {
  return (
<>
<BrowserRouter>
<Header/>
<Routes>
<Route element={<Hero/>} path='/'/>
<Route element={<Together/>} path='/together'/>
<Route element={<Three/>} path='/three'/>
<Route element={<Four/>} path='/four'/>
<Route element={<Modal/>} path='/modal'/>
</Routes>

</BrowserRouter>
</>
  );
}

export default App;
