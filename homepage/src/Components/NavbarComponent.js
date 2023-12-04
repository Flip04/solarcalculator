import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Navbar} from "react-bootstrap";

function NavbarComponent(props){
    return(
        <Navbar bg="light" expand="lg" sticky="top">
        <Container className="justify-content-center">
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-1">
                        {" Information "}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">
                        {" Calculator  "}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">
                        {"IMG"}
                    </Nav.Link>

                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">
                        {"     FAQ     "}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">
                        {"   Contact   "}
                    </Nav.Link>
                </Nav.Item>

            </Nav>
        </Container>
        </Navbar>
    );
}

export default NavbarComponent;