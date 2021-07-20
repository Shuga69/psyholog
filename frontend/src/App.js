import React from 'react';
import {Component} from "react";
import './App.css';

import Header from './Components/Header/Header';
import Home from './Pages/Home/Home'
import MainPage from './Pages/MainPage/MainPage'
import AdminPage from './Pages/AdminPage/AdminPage'
import Backdrop from "./Components/Backdrop/Backdrop";
import GroupLessons from './Components/Groups/GroupLessons(back-free)'
import IndividualConsultation from './Components/IndividualConsultation/IndividualConsultation'
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import GoogleAnalytics from "./Components/GoogleAnalytics/GoogleAnalytics";
import Helmet from "react-helmet"

class App extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return (
            <div>
            <Helmet>
                <meta charSet="UTF-8"/>
                <title>Психотерапевт Марія Шугай</title>
                <meta name="description" content="Психотерапевт місто Рівне Марія Шугай, сертифікований та акредитований
                 гештальт-терапевт, керівник навчальних та терапевтичних програм"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="google-site-verification" content="4XqPsrd44lecdLIAKsvCyvkjS5rLTSWvo1sVARb3tx0" />
                <meta name="keywords" content="психотерапевт рівне, Психолог рівне, Психолог Рівне, Психотерапевт рівне,
                 Психотерапевт Шугай, Психотерапевт Шугай Рівне. Шугай, Шугай Марія, Психолог, психотерапевт, психолог онлайн,
                 психотерапія онлайн, психолог навчання рівне"/>
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link rel="stylesheet" type="text/css" href="http://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.css"/>
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            </Helmet>
            <Router>
                <Header drawerClickHandler={this.drawerToggleClickHandler} toggle={this.state.sideDrawerOpen}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/groupLessons" component={GroupLessons}/>
                    <Route exact path="/soloLessons" component={IndividualConsultation}/>
                    <Route exact path="/adminPage" component={AdminPage}/>
                </Switch>
                <Footer/>
                <GoogleAnalytics/>
            </Router>
            </div>
        );
    }
}

export default App;
