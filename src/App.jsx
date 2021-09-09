import React from 'react';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import UserSessionProvider from './utils/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
    return (
        <div>
            <UserSessionProvider>
                <Router>
                    <Switch>
                        <Route path='/login' component={Login}/>

                        <Sidebar>
                            <ProtectedRoute path='/' component={Home}/>
                        </Sidebar>

                    </Switch>

                </Router>
            </UserSessionProvider>

        </div>
    );
}

export default App;
