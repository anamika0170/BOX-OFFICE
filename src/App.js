import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';
import {HashRouter} from 'react-router-dom'

const theme = {
  mainColors: {
    white: 'white',
    black:"black",
    active:"#0c3d61",
    darkblue:"darkblue"
    // gray: '#c6c6c6',
    // dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/starred' element={<Starred/>}/>
        <Route exact path='/show/:id' element={<Show/>}/>
        <Route path='*' element="page not fount"/>
      </Routes>
    </HashRouter>
    </ThemeProvider>
  );
}

export default App;
