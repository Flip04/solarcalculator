import React from 'react';
import { Container } from 'react-bootstrap';
import IMG from '/Users/filipschepers/WebstormProjects/solarcalculator/homepage/src/TESTIMG/Pictures/markus-spiske-pwFr_1SUXRo-unsplash.jpg';
import LOGO from '/Users/filipschepers/WebstormProjects/solarcalculator/homepage/src/TESTIMG/Pictures/Logo.png';

function HomeLogo() {
    return (
        <section id="logo">
        <Container fluid className="p-0 m-0 position-relative">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${IMG})` }}
            >
                <div className="icon-overlay">
                    <img src={LOGO} alt="LOGO" style={{width: 400, height: 400}}/>
                </div>
            </div>
        </Container>
        </section>
    );
}

export default HomeLogo;