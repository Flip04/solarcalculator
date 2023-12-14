import { Navbar, Nav, Container } from 'react-bootstrap';
import LOGO from '/Users/filipschepers/WebstormProjects/solarcalculator/homepage/src/TESTIMG/Pictures/Logo.png';
import { useState, useEffect } from 'react';
import React from "react";

function NavbarComponent(props) {
    const scrollToSection = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


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
                    <Nav.Link href="#about" onClick={scrollToSection} style={{color: 'white'}}>About our Project</Nav.Link>
                    <Nav.Link href="#solar" onClick={scrollToSection} style={{color: 'white'}}>Information on solar energy</Nav.Link>
                    <Nav.Link href="#calculator" onClick={scrollToSection} style={{color: 'white'}}>Calculator</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#logo" onClick={scrollToSection} className="text-center"><img src={LOGO} alt="LOGO" style={{width: 50, height: 50}}/></Nav.Link>
                </Nav>
                <Nav className="w-50 justify-content-between">
                    <Nav.Link href="#partners" onClick={scrollToSection} style={{color: 'white'}}>Partners</Nav.Link>
                    <Nav.Link href="#faq" onClick={scrollToSection} style={{color: 'white'}}>FAQ</Nav.Link>
                    <Nav.Link href="#contact" onClick={scrollToSection} style={{color: 'white'}}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default NavbarComponent;
