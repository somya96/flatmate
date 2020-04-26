import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Dashboard from './DashboardComponent';

export default class Main extends Component {
    render() {
        const signIn = () => {
            return (<SignIn />);
        }
        return (
            <div>
                <Switch>
                    <Route path='/signin' component={signIn} />
                    <Route path='/dashboard' component={() => <Dashboard />} />
                    <Redirect to='/signin' />
                </Switch>
            </div>
        )
    }
}
