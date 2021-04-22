import React, { Component } from 'react'
import { Form, Card, Container,Button,Modal } from 'react-bootstrap'
import { CalendarWeekFill, ClockFill, GeoAlt } from 'react-bootstrap-icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UploadService from "../AdminPage/upload-files.service";
import back from '../../assets/background.jpg';
import axios from 'axios';
import ModalSubscribeEvent from "../Event/ModalSubscribeEvent";
import SoloLessons from '../Event/SoloLessons'
import Blog from '../Event/Blog'
export default class GroupLessons extends Component {
    constructor(props){
        
        super(props);
        this.state = {
            groups : [],
            file: '',
            images:[]
            
        };
        this.myRef = React.createRef(); 
    }
   
    componentDidMount(){
        this.myRef.current.scrollTo(0, 0);
        axios.get("https://cors-anywhere.herokuapp.com/https://psyhology-site.herokuapp.com/adminPanel/getEvent",
        {headers :{'X-Requested-With': 'XMLHttpRequest'} })
        .then(response => response.data)
        .then((data) => 
        {this.setState({groups: data,
            
        })})
        UploadService.getFiles().then((response) => {
            this.setState({
              images: response.data,
            });
          });
        
    }
   
 
    render() {
    
        const {
            file,
            groups,
            images
        } = this.state;
        
        return (
            <div ref={this.myRef}>
            
                
             <Form>
                 <Form.Text className="group-main-title">
                     Групові заняття
                 </Form.Text>
             </Form>
            {
                groups.map((group,groupIndex) => (
              <Card className="group">
              
                <Card.Body className="some-group">
               {images&&images.map((image, index) => (
                   image.name===group.imgPath? <Card.Img key={index} className="group-img" src={image.url} width="300px" height="200px"/>:null
                )) }
              <div className="group-main-info">
             
                <Card.Title className="group-title">{group.groupName}</Card.Title>
                    <div className="group-info">
                        
                     <Card.Text className="main-info-date">
                     <CalendarWeekFill color="rgb(11, 199, 199)"/> {group.startDate} / {group.finishDate}
                     </Card.Text>
                     <Card.Text className="main-info-time">
                            <ClockFill color="rgb(11, 199, 199)"/> {group.startTime} {group.finishTime}
                            
                     </Card.Text>
                     <Card.Text className="main-info-location">
                         <GeoAlt color="rgb(11, 199, 199)"/> {group.location}
                     </Card.Text>
                     </div>
                      <Card.Text className="description">
                          {group.description}
                        </Card.Text>
                      
                        <div className="group-info-btn">
                 <Button className="group-btn" >Детальніше</Button>
                 <ModalSubscribeEvent group = {group}/>
                
                 </div>
                 </div>
                 </Card.Body>
                </Card>
                ))
    } 
   
            </div>
        )
    }
}
