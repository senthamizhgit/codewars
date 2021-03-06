import React, {Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CodinGame from '../components/CodinGame';
import Dashboard from '../components/Dashboard';
import Quizohilic from '../components/Quizohilic';
import Rules from '../components/Rules';
import UnAuthorized from '../components/UnAuthorized';
import RequireAuth from '../components/auth/RequireAuth';

// const Header = React.lazy(() => import('../components/Header'));
// const Footer = React.lazy(() => import('../components/Footer'));
// const Dashboard = React.lazy(() => import('../components/Dashboard'));
// const Quizohilic = React.lazy(() => import('../components/Quizohilic'));
// const Rules = React.lazy(() => import('../components/Rules'));
// const UnAuthorized = React.lazy(() => import('../components/UnAuthorized'));
// const CodinGame = React.lazy(() => import('../components/CodinGame'));


export default class AppRouter extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Header />                        
                        <Switch>
                            <Route path='/' component={Dashboard} exact={true} />
                            <Route path='/:id/quizohilic/:lang' component={RequireAuth(Quizohilic)} exact={true}/> 
                            <Route path='/:id/quizohilic/:lang/rules/' component={RequireAuth(Rules)} />
                            {/* <Route path='/quizohilic' component={Quizohilic} />  */}
                            <Route path='/:id/codingame/:lang' component={CodinGame} />
                            <Route component={UnAuthorized} />
                        </Switch>
                      
                        <Footer />
                    </div>
                </BrowserRouter>
        )
    }
}