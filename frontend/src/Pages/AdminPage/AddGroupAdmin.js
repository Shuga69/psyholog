import React, { Component } from 'react'
import {Card, Form, Button, Col} from 'react-bootstrap';
import axios from 'axios';
import UploadFiles from './upload-files.component';
export default class addGroupAdmin extends Component {
   
constructor(props){
   
    super(props);
    
        this.state = this.initialState;       
        this.groupChange = this.groupChange.bind(this);
        this.submitBlock = this.submitBlock.bind(this);
    }
    
    initialState = {
        groupName:'', 
        startDate:'', 
        finishDate:'', 
        startTime:'', 
        finishTime:'', 
        description:'', 
        location:'',
       
    }
    submitBlock = event => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('authorization')
        }
        alert(this.state.groupName );
        event.preventDefault();
       
            
        
        const group = {
                groupName: this.state.groupName,
                startDate: this.state.startDate,
                finishDate: this.state.finishDate,
                startTime: this.state.startTime,
                finishTime: this.state.finishTime,
                description: this.state.description,
                location: this.state.location,
                imgPath: localStorage.getItem("FileName"),

        };
        console.log(localStorage.getItem("FileName")+"sadasd");
        axios.post("https://cors-anywhere.herokuapp.com/https://psyhology-site.herokuapp.com/adminPanel/addEvent", group, {headers : headers})
        .then(response => {
            if(response.data!=null){
                this.setState(this.initialState);
                console.log(response.data);
                alert("Group created successfully!!!");
            } 
         });

    }
    groupChange = event => {
        this.setState({[event.target.name]:event.target.value});
    }
    resetGroup = () => {
        this.setState(() => this.initialState);
    }
    render() {
        const {groupName,startDate,finishDate,startTime,finishTime,description,location,path} = this.state;
        return (
           <Card className={"border border-dark bg-dark text-white"}>
               <Card.Header>Add group</Card.Header>
               <Form onSubmit={this.submitBlock} onReset={this.resetGroup}>
               <Card.Body className="truye">
               <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Назва групи</Form.Label>
                            <Form.Control 
                            required autoComplete="off"
                            name="groupName" 
                            onChange = {this.groupChange}
                            type="text" 
                            placeholder="Назва" 
                            value={groupName} />
                               
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridStartDate">
                        <Form.Label>Дата початку</Form.Label>
                            <Form.Control 
                            required autoComplete="off"
                            name="startDate" 
                            onChange = {this.groupChange}
                            type="text" 
                            placeholder="dd-MM-yyyy" 
                            value={startDate}/>
                    </Form.Group>
                </Form.Row>  
                <Form.Row> 
                    <Form.Group as={Col} controlId="formGridEndDate">
                        <Form.Label>Дата закінчення</Form.Label>
                            <Form.Control 
                            required autoComplete="off"
                            name="finishDate" 
                            onChange = {this.groupChange}
                            type="text" 
                            placeholder="dd-MM-yyyy" 
                            value={finishDate} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridStartTime">
                        <Form.Label>Година початку</Form.Label>
                            <Form.Control 
                            autoComplete="off" 
                            name="startTime" 
                            onChange = {this.groupChange}
                            type="text" 
                            placeholder="HH:mm" 
                            value={startTime} />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row> 
                    <Form.Group as={Col} controlId="formGridEndTime" >
                        <Form.Label>Година закінчення</Form.Label>
                            <Form.Control  
                            autoComplete="off"
                            name="finishTime" 
                            onChange = {this.groupChange}
                            type="text" 
                            placeholder="HH:mm" 
                            value={finishTime}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLocation" >
                    <Form.Label>Місто проведення</Form.Label>
                            <Form.Control  
                            autoComplete="off"
                            name="location" 
                            type="text" 
                            placeholder="location" 
                            onChange = {this.groupChange}
                            value={location}/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridDescription">
                        <Form.Label>Опис</Form.Label>
                            <Form.Control 
                            autoComplete="off"
                            required 
                            name = "description" 
                            onChange = {this.groupChange}
                            type="text" 
                            placeholder="Опис"  
                            value={description}/>
                    </Form.Group>  
                    </Form.Row> 
                    <UploadFiles/>
                <Card.Footer style={{"textAlign":"right"}}>
                    <Button size="sm" variant="success" type="submit" >Додати</Button>
                    <Button size="sm" variant="info" type="reset" >Сброс</Button>
                </Card.Footer>
                 
                         
               </Card.Body>
               </Form>
           </Card>
        )
    }
}
