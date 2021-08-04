import React, {Component} from 'react';
import groupPhoto from '../../assets/background.jpg';
import Button from '../Button/Button'
import './Group.css'
import SubTitle from "../SubTitle/SubTitle";
import SimpleText from "../SimpleText/SimpleText";
import GroupMoreInfo from './GroupMoreInfo'
import GroupSignUp from './GroupSignUp'
import Title from '../Title/Title'
class Group extends Component{
    constructor() {
        super();
        this.state = {
            show: false,
            showSignUp: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    showSignUp = () => {
        this.setState({ showSignUp: true });
    };
    hideSignUp = () => {
        this.setState({ showSignUp: false});
    };
    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

        render() {

            const groupSimpleTextStyle = {
                'text-align':'justify'
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
                    <div className="group-subtitle-mobile">
                        <SubTitle text={this.props.group.groupName}/>
                    </div>
                    <div className="group-container-img">
                        <img src={this.props.group.imgPath} width="100%" />
                    </div>
                    <div className="group-container-info">
                        <div className="group-subtitle">
                        <SubTitle text={this.props.group.groupName}/>
                        </div>
                        <div className="group-short-info-container">
                            <SimpleText text={this.props.group.location}/>
                            <SimpleText text={this.props.group.time}/>
                            <SimpleText text={this.props.group.date}/>


                        </div>
                        <div className="group-text">
                            <SimpleText style={groupSimpleTextStyle} text={this.props.group.description}/>
                        </div>
                        <div className="group-button-container">
                            {this.props.group.date==="Група розпочата"?
                                <div></div>
                                :<Button onClick={this.showSignUp} text="Записатись"/>}
                            {/*<Button to="" onClick={this.showModal}  text="Детальніше"/>*/}
                        </div>
                        {/*<GroupMoreInfo show={this.state.show} handleClose={this.hideModal}>*/}
                        {/*    <Title style={groupModalTitleStyle} text={this.props.title}/>*/}
                        {/*    <div className = "short-modal-info">*/}
                        {/*        <img src={this.props.image} width="75%" height="300px"/>*/}
                        {/*        <SimpleText style={groupSimpleModalTextStyle} text = {this.props.text}/>*/}
                        {/*    </div>*/}
                        {/*    <SimpleText style={groupModalAdditionalTextStyle} text = {this.props.additionalText}/>*/}
                        {/*</GroupMoreInfo>*/}
                        <GroupSignUp id = {this.props.group.id} show={this.state.showSignUp} handleClose={this.hideSignUp}/>

                    </div>
                </div>

            );
        }
}

export default Group;
