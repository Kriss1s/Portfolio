import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route index element={<Home />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='skills' element={<Skills />}></Route>
          <Route path='projects' element={<Projects />}></Route>
          <Route path='contacts' element={<Contacts />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
