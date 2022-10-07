import  React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
// styles
import './styles/style.css';

import { dataSet } from './components/constants';
// pages
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/HomePage/HomePage';
import ProjectsPage from './components/Pages/ProjectsPage/ProjectsPage';
import CVPage from './components/Pages/CVPage/CVPage';
import About from './components/Pages/AboutPage/About';
import SearchBar from './components/Projects/SearchBar/SearchBar';
import Counter from './components/Projects/Counter/Counter';
import TrafficLight from './components/Projects/TrafficLight/TrafficLight';
import Calculator from './components/Projects/Calculator/Calculator';
import Stopwatch from './components/Projects/Stopwatch/Stopwatch';

import { ThemeContext } from './components/Contexts/ThemeContext';

const App = () => {

  const [themeMode, setThemeMode] = useState(() => JSON.parse(localStorage.getItem('theme')) || false);

  return (<ThemeContext.Provider value={{themeMode, setThemeMode}}>
            <div id={themeMode.toString()}>
              <Header/>
                <Routes>
                  <Route path={'/'} element={<Home/>}/>
                  <Route path={'/projects'} element={<ProjectsPage/>}/>
                  <Route path={'/myCV'} element={<CVPage/>}/>
                  <Route path={'/about'} element={<About/>}/>
                  <Route path={'/projects/searchBar'} element={<SearchBar data={dataSet}/>}/>
                  <Route path={'/projects/counter'} element={<Counter/>}/>
                  <Route path={'/projects/traffic_light'} element={<TrafficLight/>}/>
                  <Route path={'/projects/calculator'} element={<Calculator/>}/>
                  <Route path={'/projects/stopwatch'} element={<Stopwatch/>}/>
                </Routes>
              <Footer/>
            </div>
          </ThemeContext.Provider>
  );
}

export default App;
