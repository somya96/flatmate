import React, { Component } from 'react';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Landing from './LandingComponent';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import withAuthorization from '../session/withAuthorization';

class DashboardBase extends Component {

    render() {
        return (
            <div>
                <Header />
                <Landing />
                <Footer />
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export const Dashboard = compose(
    withRouter,
    withAuthorization(condition),
)(DashboardBase);

export default Dashboard;
