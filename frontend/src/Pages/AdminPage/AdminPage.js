import React, { Component } from 'react'

import './AdminPage.css'
import AddGroupAdmin from './AddGroupAdmin';
import GroupAdminPage from './GroupAdminPage'
import { Form, Container, Button, ResponsiveEmbed } from 'react-bootstrap';
import axios from 'axios'
export default class AdminPage extends Component {
    constructor() {
        super();
    
        this.state = {
          username: '',
          password: ''
        };
        this.adminChange = this.adminChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }
      adminChange = event => {
        this.setState({[event.target.name]:event.target.value});
    }
   
      handleFormSubmit = event => {
        event.preventDefault();
    
        const endpoint = "https://cors-anywhere.herokuapp.com/https://psyhology-site.herokuapp.com/admin/login";
    
        const username = this.state.username;
        const password = this.state.password;
        const headers = {
          headers :{'X-Requested-With': 'XMLHttpRequest'}
        }
        const user_object = {
          username: username,
          password: password
        };
    
        axios.post(endpoint,headers, user_object).then(res => {
          localStorage.clear();
          if(res.data!=null){
          localStorage.setItem("authorization", res.data.token);
         console.log(localStorage.getItem("authorization"));
            alert("Authentication great");
          }
        //   return this.handleDashboard();
        });
      };

      

    render() {
      const {username,password} = this.state;
        return (
           <div>
               <div className="admin-title">
            <h1>Сторінка адміністратора</h1>
            <p>якщо ви попали сюди випадково натисніть</p>    
            </div>
            <Container>
                    <Form onSubmit={this.handleFormSubmit} className="admin-input">
                    <Form.Group controllId="formBasicName">
                          <Form.Control 
                          required
                          className="username-input" type="text" 
                          placeholder="username"
                          onChange={this.adminChange}
                          name = "username"
                         value={username}
                           />
                      </Form.Group>
                      <Form.Group controllId="formBasicName">                          
                          <Form.Control 
                          required
                          className="password-input" type="text" 
                          placeholder="password"
                          onChange={this.adminChange}
                          name = "password"
                          value={password}
                           />
                      </Form.Group>
                      <Button className="submit-btn" type="submit">
                            Авторизуватися
                        </Button>
                    </Form>
                   
                        
                   
                </Container>
               <AddGroupAdmin/>
               <GroupAdminPage/>
              
           </div>
        )
    }
}
