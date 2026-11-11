import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Career from './components/Career';
import Projects from './components/Projects';
import Github from './components/Github';
import Creator from './components/Creator';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="topo">
      <Header />     
      <main>
        <Hero />
        <Stats />
        <About />
        <Career />
        <Projects />
        <Github />
        <Creator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}