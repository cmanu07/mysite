import React from 'react';
import { Routes, Route} from 'react-router-dom';

import './styles/style.css';

// pages
import Home from './components/Pages/Home';
import Cariera from './components/Pages/Cariera';
import Proiecte from './components/Pages/Proiecte';
import CV from './components/Pages/CV';
import Despre from './components/Pages/Despre';

const App = () => {

  return (<>
            <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/career'} element={<Cariera/>}/>
              <Route path={'/projects'} element={<Proiecte/>}/>
              <Route path={'/myCV'} element={<CV/>}/>
              <Route path={'/about'} element={<Despre/>}/>
            </Routes>
          </>
  );
}

export default App;
