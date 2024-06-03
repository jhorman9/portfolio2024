import './assets/styles/index.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './assets/pages/Home';
import { About } from './assets/pages/About';
import { Projects } from './assets/pages/Projects';
import { Contact } from './assets/pages/Contact';
import { NavBar } from './assets/components/HeaderComponents/NavBar';
import { useEffect, useState } from 'react';
import { Footer } from './assets/components/FooterComponents/Footer';

function App() {

  const urlActually = window.location.href;
  const [urlPage, setUrlPage] = useState('');

  useEffect(() => {
    setUrlPage(urlActually);
  },[urlActually])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home urlPage={urlPage}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/portfolio' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
