import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import SignIn from './signIn';
import SignUpForm from './signUp';
import Dashboard from './DashboardComponent';

export default class Main extends Component {
    render() {
        const signIn = () => {
            return (<SignIn />);
        }
        const signUp = () => {
            return (<SignUpForm />);
        }
        return (
            <div>
                <Switch>
                    <Route path='/signin' component={signIn} />
                    <Route path='/dashboard' component={() => <Dashboard />} />
                    <Route path='/signup' component={signUp} />
                    <Redirect to='/signin' />
                </Switch>
            </div>
        )
    }
}
