import React, { Component } from 'react';
import './DropdownItem.css'
import {Link} from "react-router-dom";


class DropdownItem extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        return (
            <div className="header__navigation-link1" onMouseEnter={this.showMenu} onMouseLeave={this.closeMenu}>
                    Консультації
                {
                    this.state.showMenu
                        ? (
                            <div className="custom-dropdown-menu" >
                                <div className="menu-link">
                                <Link to="groupLessons" smooth={true} className="custom-dropdown-menu-item">Групові заняття</Link>
                                </div>
                                <div className="menu-link">
                                    <Link to="soloLessons" smooth={true} className="custom-dropdown-menu-item">Індивідуальні консультації</Link>
                                </div>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default DropdownItem;