import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'

function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Router>
              <Sidebar>
                      <div className='p-10 flex-1'>
                          <Switch>
                              <Route path='/' component={Home} />
                          </Switch>
                      </div>
              </Sidebar>
          </Router>
      </ErrorBoundary>


    </div>
  );
}

export default App;
