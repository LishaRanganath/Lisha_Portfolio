import './index.css';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import Certificates from './components/Certificates/Certificates';
import Projects from './components/Projects/Projects';
import Publications from './components/Publications/Publications';
import Education from './components/Education/Education';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Certificates />
      <Projects />
      <Publications />
      <Education />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
