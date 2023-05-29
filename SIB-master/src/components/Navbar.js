import React, { Component } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";
import logo from "../images/logo.jpg";
import "./Navbarstyles.css";
import { serviceDropDownItems } from "./serviceDropDownItems";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      isServicesDropdownOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0 && !this.state.scrolled) {
      this.setState({ scrolled: true });
    } else if (scrollPosition === 0 && this.state.scrolled) {
      this.setState({ scrolled: false });
    }
  };

  handleServicesDropdownToggle = () => {
    this.setState((prevState) => ({
      isServicesDropdownOpen: !prevState.isServicesDropdownOpen
    }));
  };

  render() {
    const { scrolled, isServicesDropdownOpen } = this.state;
    const navbarClasses = `NavbarItems ${scrolled ? "scrolled" : ""}`;

    return (
      <nav className={navbarClasses}>
        <Link className="NavbarLogo" to="/user">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <ul className="nav-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.url}
                onMouseEnter={item.icon === "fa-solid fa-bell" ? this.handleServicesDropdownToggle : null}
                onMouseLeave={item.icon === "fa-solid fa-bell" ? this.handleServicesDropdownToggle : null}
              >
                <i className={item.icon}></i>
                {item.title}
                <i2 className={item.icon2}></i2>
                {item.icon === "fa-solid fa-bell" && isServicesDropdownOpen && (
                  <ul className="dropdown-menu">
                    {serviceDropDownItems.map((dropdownItem, dropdownIndex) => (
                      <li key={dropdownIndex}>
                        <Link className={dropdownItem.cName} to={dropdownItem.url}>{dropdownItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
