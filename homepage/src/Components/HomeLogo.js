import React from 'react';
import { Container } from 'react-bootstrap';
import IMG from '/Users/filipschepers/WebstormProjects/solarcalculator/homepage/src/TESTIMG/Pictures/markus-spiske-pwFr_1SUXRo-unsplash.jpg';
import { BiHeart } from 'react-icons/bi';

function HomeLogo() {
    return (
        <Container fluid className="p-0 m-0 position-relative">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${IMG})` }}
            >
                <div className="icon-overlay">
                   
                    <BiHeart className="heart-icon"/>
                </div>
            </div>
        </Container>
    );
}

export default HomeLogo;