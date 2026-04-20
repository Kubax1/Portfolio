import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider} from '@mantine/core';
import { Link, Element } from 'react-scroll';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Header from './Header';
import ReactDOM from "react-dom/client";
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout />}>
      
       <Route path="about" element={<About />} />
       <Route path="contact" element={<Contact />} />
       <Route path="Projects" element={<Projects />} />
     </Route>
   </Routes>
    </BrowserRouter>
  )
}

export default App
