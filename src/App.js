import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

import Skills from './components/skills/Skills';
import Work from './components/work/Work';

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <Skills />
      <Work />
    </>
  );
}

export default App;
