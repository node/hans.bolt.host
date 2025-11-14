import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Resources from './components/Resources';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import GettingStarted from './pages/GettingStarted';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="home" />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Resources />
        <Projects />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/guide" element={<GettingStarted />} />
    </Routes>
  );
}

export default App;
