import React, { Component } from 'react';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Landing from './LandingComponent';
export default class Dashboard extends Component {
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
