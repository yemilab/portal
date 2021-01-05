import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';
import DrawerRouterContainer from './components/DrawerRouterContainer.js';

import '@progress/kendo-theme-default/dist/all.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <DrawerRouterContainer>
          <Switch>
            <Route exact={true} path="/" component={Dashboard} />
          </Switch>
        </DrawerRouterContainer>
      </HashRouter>
    </div>
  );
}

export default App;
