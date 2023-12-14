import {Container, Row, Col, Image} from 'react-bootstrap';
import IMG from '/Users/filipschepers/WebstormProjects/solarcalculator/homepage/src/TESTIMG/Pictures/moritz-kindler-mRBywMReXH8-unsplash.jpg';

function InformationComponent(){
    return(
        <Container className="mt-4 mb-4">
            <Row>
                <Col md>
                    <Image src={IMG} rounded style={{width: 768, height: 1024}}/>
                </Col>
                <Col md className="d-flex align-items-center">
                    <div>
                    <h1>TEST</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra vestibulum lectus eget rutrum. Nulla interdum fringilla odio, nec suscipit metus pellentesque bibendum. In hac habitasse platea dictumst. Maecenas id ornare ligula. Donec vitae nisi condimentum, pharetra dolor eu, eleifend velit. Etiam neque nibh, malesuada a venenatis id, iaculis id ante. Pellentesque mollis ultricies nisi, ornare blandit risus feugiat eget. Integer vulputate tempor facilisis. Aliquam erat volutpat.
                        Sed in mi pretium, gravida lacus in, pulvinar purus. Vivamus pretium, nisi nec convallis faucibus, arcu elit tincidunt justo, at pretium sem sem in purus. Mauris ut mauris ac ante suscipit eleifend. Proin at neque ac purus lobortis molestie. Aliquam iaculis metus id odio bibendum venenatis. Aliquam non porttitor tellus. Nulla rutrum eros eu rhoncus laoreet. Duis augue arcu, mollis at nibh a, dapibus malesuada justo. Curabitur rutrum tellus in ante finibus, pulvinar malesuada nibh sollicitudin. Fusce aliquet rhoncus nisl commodo dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut hendrerit posuere nulla eu finibus. Duis in nisl quam. Integer placerat, orci sit amet vulputate ornare, nibh urna facilisis magna, eu pretium odio metus id risus. Duis at ligula non felis bibendum lobortis.
                    </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default InformationComponent;