import React from 'react';
import { Routes, Route} from 'react-router-dom';

import './styles/style.css';
import './styles/projects-style.css';
import './styles/searchBar-style.css';
import './styles/more-style.css';

import { dataSet } from './components/constants';

// pages
import Home from './components/Pages/Home';
import Cariera from './components/Pages/Cariera';
import Proiecte from './components/Pages/Proiecte';
import CV from './components/Pages/CV';
import Despre from './components/Pages/Despre';
import SearchBar from './components/projects/SearchBar';
import Counter from './components/projects/Counter';
import TrafficL from './components/projects/TrafficL';
import Calculator from './components/projects/Calculator';
import Stopwatch from './components/projects/Stopwatch';


const App = () => {

  return (<>
            <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/career'} element={<Cariera/>}/>
              <Route path={'/projects'} element={<Proiecte/>}/>
              <Route path={'/myCV'} element={<CV/>}/>
              <Route path={'/about'} element={<Despre/>}/>
              <Route path={'/projects/searchBar'} element={<SearchBar data={dataSet}/>}/>
              <Route path={'/projects/counter'} element={<Counter/>}/>
              <Route path={'/projects/traffic_light'} element={<TrafficL/>}/>
              <Route path={'/projects/calculator'} element={<Calculator/>}/>
              <Route path={'/projects/stopwatch'} element={<Stopwatch/>}/>
            </Routes>
          </>
  );
}

export default App;
