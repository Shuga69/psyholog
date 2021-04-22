import React, { Component, useState } from 'react'
import { Modal,Button,Form } from 'react-bootstrap'
import './ModalSubscribeEvent.css'
import axios from 'axios'
export default class ModalSubscribeEvent extends Component {
  constructor(props){
    super(props);
    this.state = { 
      group: props.group,
      firstName: '',
      secondName: '',
      email: '',
      phoneNumber: '',
      eventIds: [],
      messege:''
    };
  
   this.formChange = this.formChange.bind(this);
  
}
initialState={
  firstName: '',
      secondName: '',
      email: '',
      phoneNumber: '',
      eventIds: [],
      messege:'Ви успішно зареєстровані на курс очікуйте дзвінка нашого менеджера.'
}
formChange = form => {
  this.setState({[form.target.name]:form.target.value});
}
submitBlock = form => {
  this.setState.eventIds = [];
  alert(this.state.firstName,this.state.group.id );
  form.preventDefault();
  this.state.eventIds.push(this.state.group.id);
  const user = {
         firstName: this.state.firstName,
         secondName: this.state.secondName,
         email: this.state.email,
         phoneNumber: this.state.phoneNumber,
         eventId: this.state.eventIds
  };
  axios.post("https://cors-anywhere.herokuapp.com/https://psyhology-site.herokuapp.com/adminPanel/getEvent",
  {headers :{'X-Requested-With': 'XMLHttpRequest'} },user)
  .then(response => {
      if(response.data!=null){
        console.log(this.state.eventIds)
         this.setState(this.initialState);
          alert("user created successfully!!!");

      } 
   });
  
}
   Example = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => setShow(false);

    const {firstName,secondName,email,phoneNumber,messege} = this.state;
    return (
      
      <>
      
        <Button className="group-btn" onClick={handleShow}>
        Записатися на курс
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
    <Modal.Title className="title">Реєстрація на курс {this.state.group.groupName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={this.submitBlock} className="submit-contact">
                    <Form.Group controllId="formBasicName">
                          
                            <Form.Control 
                            required
                             className="firstName-input" type="text" 
                             placeholder="Ім'я"
                             onChange={this.formChange}
                             name = "firstName"
                             value = {firstName} 
                            />
                        </Form.Group>
                        <Form.Group controllId="formBasicName">
                          
                          <Form.Control 
                          required
                           className="surname-input" type="text" 
                           placeholder="Прізвище"
                           onChange={this.formChange}
                           name = "secondName"
                           value = {secondName} 
                          />
                      </Form.Group>
                      <Form.Group controllId="formBasicName">
                          
                          <Form.Control 
                          required
                          className="email-event-input" type="email" 
                           placeholder="Email"
                           onChange={this.formChange}
                           name = "email"
                           value = {email} 
                          />
                      </Form.Group>
                        <Form.Group controllId="formBasicEmail">
                            
                            <Form.Control 
                            required
                             className="number-input" type="text" 
                             placeholder="Номер +380 xx xxx xx xx"
                             onChange={this.formChange}
                             name = "phoneNumber"
                             value = {phoneNumber} 
                        />
                        </Form.Group>

                       <Form.Text>Заповніть форму і наш менеджер зв'яжеться з вами</Form.Text>
                       <Form.Text className="confirm-messege">{messege}</Form.Text>
                       <div className="btn-form1">
                       <Button className = "cancel-btn" onClick={handleClose}>
              Закрити
            </Button>
            <Button className = "confirm-btn" onCLick={handleSubmit} type="submit" >
              Відправити
            </Button>
         </div>
                    </Form>
          </Modal.Body>
          <Modal.Footer>
           
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  render() {
    
    return (
      <div>
      <this.Example/>
      </div>
    )
  }
}
