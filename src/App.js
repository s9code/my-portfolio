import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <Projects />
    </>
  );
}

export default App;
