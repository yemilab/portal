import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import { IntlProvider, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';
import { AppContext } from './AppContext';
import Dashboard from './pages/Dashboard';
import DrawerRouterContainer from './components/DrawerRouterContainer';

import { enMessages } from './messages/en-US';

import '@progress/kendo-theme-default/dist/all.css';

import './App.css';

loadMessages(enMessages, 'en-US');

function App() {
  const [contextState, setContextState] = React.useState({
    localeId: 'en-US'
  });
  const onLanguageChange = React.useCallback(
    (event) => { setContextState({...contextState, localeId: event.value.localeId}) },
    [contextState, setContextState]
  );
  return (
    <div className="App">
      <LocalizationProvider language={contextState.localeId}>
        <IntlProvider locale={contextState.localeId}>
          <AppContext.Provider value={{...contextState, onLanguageChange}}>
            <HashRouter>
              <DrawerRouterContainer>
                <Switch>
                  <Route exact={true} path="/" component={Dashboard} />
                </Switch>
              </DrawerRouterContainer>
            </HashRouter>
          </AppContext.Provider>
        </IntlProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
