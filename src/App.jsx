import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import NavBar from './components/Navbar'
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
const App = () => {
  return ( 
    <main className="bg-white text-gray-900 font-sans">
      <NavBar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <Contact />
    </main>
   );
}
 
export default App;