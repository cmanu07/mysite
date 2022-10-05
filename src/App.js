import  React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
// styles
import './styles/style.css';
import './styles/projects-style.css';
import './styles/searchBar-style.css';
import './styles/more-style.css';

import { dataSet } from './components/constants';
// pages
import Home from './components/Pages/Home';
import Proiecte from './components/Pages/Proiecte';
import CV from './components/Pages/CV';
import Despre from './components/Pages/Despre';
import SearchBar from './components/Projects/SearchBar';
import Counter from './components/Projects/Counter';
import TrafficL from './components/Projects/TrafficL';
import Calculator from './components/Projects/Calculator';
import Stopwatch from './components/Projects/Stopwatch';

import { ThemeContext } from './components/Contexts/ThemeContext';

const App = () => {

  const [themeMode, setThemeMode] = useState(() => JSON.parse(localStorage.getItem('theme')) || false);

  return (<ThemeContext.Provider value={{themeMode, setThemeMode}}>
            <div id={themeMode.toString()}>
              <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/projects'} element={<Proiecte/>}/>
                <Route path={'/myCV'} element={<CV/>}/>
                <Route path={'/about'} element={<Despre/>}/>
                <Route path={'/projects/searchBar'} element={<SearchBar data={dataSet}/>}/>
                <Route path={'/projects/counter'} element={<Counter/>}/>
                <Route path={'/projects/traffic_light'} element={<TrafficL/>}/>
                <Route path={'/projects/calculator'} element={<Calculator/>}/>
                <Route path={'/projects/stopwatch'} element={<Stopwatch/>}/>
              </Routes>
            </div>
          </ThemeContext.Provider>
  );
}

export default App;
