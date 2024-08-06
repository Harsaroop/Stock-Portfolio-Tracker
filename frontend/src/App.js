// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Analysis from './pages/Analysis';
import Settings from './pages/Settings';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: '240px', padding: '20px' }}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/analysis" component={Analysis} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
