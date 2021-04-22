import React, { Component } from 'react'
import { Form, Container, Button, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Event.css'
import GroupLessons from '../../Components/Groups/GroupLessons(back-free)'
import SoloLessons from '../Event/SoloLessons'
import * as Scroll from 'react-scroll';
export default class Blog extends Component {
    render() {
        return (
            
            <div onLoad={Scroll.animateScroll.scrollToTop} className="group-lessons-section">
           
           {/*<Router>*/}
           {/*     <Container className="group-lessons">*/}
           {/*         /!*<Form.Text className="group-lessons-title">*!/*/}
           {/*         /!*    Групові та індивідуальні заняття*!/*/}
           {/*         /!*</Form.Text>*!/*/}
           {/*         /!*<Form className="btn-form">*!/*/}
           {/*         /!*    <div className="btn-lessons">*!/*/}
           {/*         /!*<Link to="/groupLessons" className="changer-group">*!/*/}
           {/*         /!*    Групові заняття*!/*/}
           {/*         /!*</Link>*!/*/}
           {/*         /!*</div>*!/*/}
           {/*         /!*<div className="btn-lessons">*!/*/}
           {/*         /!*<Link to="/SoloLessons" className="changer-solo">*!/*/}
           {/*         /!*    Індивідуальні заняття*!/*/}
           {/*         /!*</Link>*!/*/}
           {/*         /!*</div>*!/*/}
           {/*         /!*</Form>*!/*/}
           {/*         */}
           {/*         /!*<Form className ="group-lessons">*!/*/}
           {/*         /!*    <Switch>*!/*/}
           {/*         /!*        <Route exact path="/groupLessons" component={GroupLessons}></Route>*!/*/}
           {/*         /!*        <Route exact path="/soloLessons" component={SoloLessons}></Route>*!/*/}
           {/*         /!*    </Switch>*!/*/}
           {/*         /!*</Form>*!/*/}
           {/*         */}
           {/*     </Container>*/}
           {/*     </Router>*/}
            </div>
        )
    }
}
