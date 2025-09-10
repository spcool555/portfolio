

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';


function App() {
  return (
   <div>
      <Header />
<Routes>

  <Route path='home' element={<Home/>} />
  <Route path='skills' element={<Skills/>} />
  <Route path='project' element={<Projects/>} />
</Routes>

      <Footer />
   </div>
   
  );
}

export default App;
