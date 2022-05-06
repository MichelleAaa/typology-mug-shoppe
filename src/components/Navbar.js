import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse } from 'reactstrap';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import Logo from '../assets/Typology.png';
import { useDispatch } from 'react-redux';
import { removeAllFilters } from '../redux/productsSlice';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let dispatch = useDispatch();

    const HandleProductsClick = () => {
        dispatch(removeAllFilters());
    }

    return (
        <div>
            <Navbar
                color="light"
                expand="lg"
                fixed="top"
                light
            >
                <NavbarBrand className="mr-auto" href="/">
                    <img src={Logo} height="30"  alt="Typology Logo" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle}  />
                <Collapse isOpen={isOpen} navbar>
                <Nav navbar className="ml-auto text-nowrap">
                    <NavItem>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/products/" onClick={() => HandleProductsClick()}>
                            Mugs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about/">
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact/">
                            Contact
                        </NavLink>
                    </NavItem>
                        <NavItem>
                            <NavLink to="/cart/">
                                <FaShoppingCart /> Cart
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">
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