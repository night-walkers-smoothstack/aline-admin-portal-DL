import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import Login from './Login'

function App() {
    return (
        <div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Router>

                    <Switch>
                        <Route path='/login' component={Login}/>
                        <Sidebar>
                            <div className='p-10 flex-1'>
                                <Route path='/' component={Home}/>
                            </div>
                        </Sidebar>
                    </Switch>

                </Router>
            </ErrorBoundary>


        </div>
    );
}

export default App;
