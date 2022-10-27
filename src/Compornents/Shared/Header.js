import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='headers' variant="dark">
            <Container>
                <Navbar.Brand className='text-black' href="/">Kaash App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                 
                    </Nav>
                    <Nav>
                        <NavLink className="text-decoration-none p-2 text-black text-uppercase" to="courses">Courses</NavLink>
                        <NavLink className="text-decoration-none p-2 text-black text-uppercase" to="contact">Contact</NavLink>
                        <NavLink className="text-decoration-none p-2 text-black text-uppercase" to="about">About</NavLink>
                        <NavLink className="text-decoration-none p-2 text-black text-uppercase" to="blogs">Blogs</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;