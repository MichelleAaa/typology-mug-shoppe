import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse, NavbarText } from 'reactstrap';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa'
import Logo from '../assets/Typology.png';

const Navigation = () => {
    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                fixed="top"
                light
            >
                <NavbarBrand className="mr-auto" href="/">
                    <img src={Logo} height="30"  alt="Typology Logo" />
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                <Nav navbar className="ml-auto">
                    <NavItem>
                        <NavLink to="/home">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/mugs/">
                            Mugs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/aboutus">
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contactus">
                            Contact Us
                        </NavLink>
                    </NavItem>
                        <NavItem>
                            <NavLink to="/contactus">
                                <FaShoppingCart /> Cart
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contactus">
                                <FaUserPlus /> Login
                            </NavLink>
                        </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;