import { Navbar, Nav, Container } from 'react-bootstrap';
import { BiHeart } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import React from "react";

function NavbarComponent(props) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const changeNavbarColorOnScroll = 900;

    useEffect(() => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollBy(0, navbarHeight);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        if (scrollPosition > changeNavbarColorOnScroll) {
            navbar.style.backgroundColor = '#1E1E1E';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }
    }, [scrollPosition]);
    return (
        <Navbar style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-50 justify-content-between">
                    <Nav.Link href="#about" style={{color: 'white'}}>About our Project</Nav.Link>
                    <Nav.Link href="#solar" style={{color: 'white'}}>Information on solar energy</Nav.Link>
                    <Nav.Link href="#calculator" style={{color: 'white'}}>Calculator</Nav.Link>
                </Nav>
                <Nav.Link href="#img" className="text-center"><BiHeart className="heart-icon"/></Nav.Link>
                <Nav className="w-50 justify-content-between">
                    <Nav.Link href="#partners" style={{color: 'white'}}>Partners</Nav.Link>
                    <Nav.Link href="#faq" style={{color: 'white'}}>FAQ</Nav.Link>
                    <Nav.Link href="#contact" style={{color: 'white'}}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default NavbarComponent;
