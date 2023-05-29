import React from "react";
import { userbarItems } from "./userbarItems";
import { Link } from "react-router-dom";
import "./userbarsytles.css";
import { Component } from "react";
import FAQComponent from "./faq";


class Userbar extends Component {
    state = {
        isFAQVisible: false
      };
      handleFAQClick = () => {
        this.setState(prevState => ({
          isFAQVisible: !prevState.isFAQVisible
        }));
      };
            
    render() {
        return (
            <nav className="userbar">
                <ul className="userbar-menu">
                    {userbarItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className="barButtons">
                                    <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        )
    }
}
export default Userbar;