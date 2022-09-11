import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse } from 'reactstrap';
import { FaShoppingCart } from 'react-icons/fa';
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
                    <NavLink to="/" onClick={toggle}>
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/products/" onClick={() => {HandleProductsClick();
                    toggle();}}>
                        Mugs
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about/" onClick={toggle}>
                        About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact/" onClick={toggle}>
                        Contact
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/cart/" onClick={toggle}>
                        <FaShoppingCart /> Cart
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    );
}

export default Navigation;