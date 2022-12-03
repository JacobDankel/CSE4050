import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import TopBar from './app/views/topBar/TopBar';
import Home from './app/views/home/Home';
import TaskList from './app/views/task/TaskList';

const theme = createTheme({
  palette: {
    background: {
      default: "#EBEDF0"
    }
  },
});

var view = (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HashRouter>
      <TopBar />
      <Routes>
      	<Route exact path="/" element={<Home />}/>
        <Route exact path="/task" element={<TaskList />}/>
        <Route exact path="/home" element={<Home />}/>
      </Routes>
    </HashRouter>
  </ThemeProvider>
);

const root = ReactDOM.createRoot(document.getElementById('reactapp'));
root.render(view);
