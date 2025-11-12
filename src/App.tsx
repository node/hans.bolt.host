import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Resources from './components/Resources';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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

export default App;
