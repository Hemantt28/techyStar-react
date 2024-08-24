import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    <Footer></Footer>
    </Router>
  )
}

export default App
