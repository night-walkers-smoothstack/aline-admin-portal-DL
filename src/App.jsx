import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound';
import UserSessionProvider from './utils/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
    return (
        <div>
            <UserSessionProvider>
                <Router>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <ProtectedRoute exact path='/' component={Home}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>

                </Router>
            </UserSessionProvider>

        </div>
    );
}

export default App;
