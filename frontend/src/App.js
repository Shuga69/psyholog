import React from 'react';
import {Component} from "react";
import './App.css';

import Header from './Components/Header/Header';
import Home from './Pages/Home/Home'
import MainPage from './Pages/MainPage/MainPage'
import Backdrop from "./Components/Backdrop/Backdrop";
import GroupLessons from './Components/Groups/GroupLessons(back-free)'
import IndividualConsultation from './Components/IndividualConsultation/IndividualConsultation'
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from "./Components/Footer/Footer";

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
            <Router>
                <Header drawerClickHandler={this.drawerToggleClickHandler} toggle={this.state.sideDrawerOpen}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/groupLessons" component={GroupLessons}/>
                    <Route exact path="/soloLessons" component={IndividualConsultation}/>
                </Switch>
                <Footer/>
            </Router>

        );
    }
}

export default App;
