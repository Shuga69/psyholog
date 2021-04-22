import React, {Component} from 'react';
import groupPhoto from '../../assets/background.jpg';
import Button from '../Button/Button'
import './Group.css'
import SubTitle from "../SubTitle/SubTitle";
import SimpleText from "../SimpleText/SimpleText";
import GroupMoreInfo from './GroupMoreInfo'
import Title from '../Title/Title'
class Group extends Component{
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
        render() {
            const groupSimpleTextStyle = {
                'text-align':'left'
            };
            const groupSimpleModalTextStyle = {
                'text-align':'left',
                padding:'20px 0px 0 50px'
            };
            const groupModalAdditionalTextStyle = {
                'text-align':'left',
                padding:'20px 0px 50px 0px'
            };
            const groupModalTitleStyle = {
                padding:'0 0px 50px 0px'
            };
            return (
                <div className="group-container">
                    <div className="group-container-img">
                        <img src={this.props.image} width="100%" height="400px"/>
                    </div>
                    <div className="group-container-info">
                        <SubTitle text={this.props.title}/>

                        <div className="group-short-info-container">
                            <SimpleText text={this.props.location}/>
                            <SimpleText text={this.props.time}/>
                            <SimpleText text={this.props.date}/>

                        </div>
                        <div className="group-text">
                            <SimpleText style={groupSimpleTextStyle} text={this.props.text}/>
                        </div>
                        <div className="group-button-container">
                            <Button  text="Записатись"/>
                            <Button onClick={this.showModal} text="Детальніше"/>
                        </div>
                        <GroupMoreInfo show={this.state.show} handleClose={this.hideModal}>
                            <Title style={groupModalTitleStyle} text={this.props.title}/>
                            <div className = "short-modal-info">
                                <img src={this.props.image} width="75%" height="300px"/>
                                <SimpleText style={groupSimpleModalTextStyle} text = {this.props.text}/>
                            </div>
                            <SimpleText style={groupModalAdditionalTextStyle} text = {this.props.additionalText}/>
                        </GroupMoreInfo>
                    </div>
                </div>

            );
        }
}

export default Group;
