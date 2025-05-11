import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
