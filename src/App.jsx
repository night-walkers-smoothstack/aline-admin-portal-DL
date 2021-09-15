import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound';
import Users from './pages/Users'
import UserSessionProvider from './utils/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

function App() {
    library.add(fab, faPlus)
    return (
        <div>
            <UserSessionProvider>
                <Router>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <ProtectedRoute exact path='/' component={Home}/>
                        <ProtectedRoute path='/user' component={Users}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>

                </Router>
            </UserSessionProvider>

        </div>
    );
}

export default App;
