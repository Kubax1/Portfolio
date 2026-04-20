import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider} from '@mantine/core';
import { Link, Element } from 'react-scroll';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Header from './Header';
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export function Layout(){

    return (
            <MantineProvider>
              <Header/>
                <About/>
                  <Projects/>
                    <Contact/>
            </MantineProvider>
    );
}

export default Layout