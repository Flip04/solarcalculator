import React from 'react';
import { Container } from 'react-bootstrap';
import TEST from '/Users/filipschepers/WebstormProjects/solarcalculator/homepage/src/TESTIMG/TESTBACK.jpeg';
import { BiHeart } from 'react-icons/bi'; // Importiere das Icon

function HomeLogo() {
    return (
        <Container fluid className="p-0 m-0 position-relative">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${TEST})` }}
            >
                <div className="icon-overlay">
                   
                    <BiHeart className="heart-icon"/>
                </div>
            </div>
        </Container>
    );
}

export default HomeLogo;