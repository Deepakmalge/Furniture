import React from 'react';
import './footer.css'
import logo from '../../assets/images/eco-logo.png'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link} from "react-router-dom";

const Footer = () => {

   const year=new Date().getFullYear()
    return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col lg="4">
                <div className="logo">
                  <img src={logo} alt="logo"/>
                  <div>
                     <h1 className='text-'>GptFurniture</h1>
                     </div>
                     </div>
               
                <p className="footer__text mt-2">
                       <b> BIGGEST 
                           DIWALI 
                           OFFER
                       </b>
                </p>
                </Col>
                <Col lg="3">
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title">Top Categories</h4>
                        <ListGroup className='mb-3'>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>sofa</Link>
                            </ListGroupItem>

                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>chair</Link>
                            </ListGroupItem>
                             </ListGroup>
                    </div>
                </Col>

                <Col lg='2'>
                <div className="footer__quick-links">
                        <h4 className="quick__links-title">Useful Links</h4>
                        <ListGroup className='mb-3'>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='/shop'>Shop</Link>
                            </ListGroupItem>

                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='/cart'>Cart</Link>
                            </ListGroupItem>
                            
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='/login'>Login</Link>
                            </ListGroupItem>
                            
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='/'>Privacy Policy</Link>
                            </ListGroupItem>
                            </ListGroup>
                    </div>
                </Col>

                <Col lg='3'>
                <div className="footer__quick-links">
                        <h4 className="quick__links-title">Contact</h4>
                        <ListGroup className='footer__contact'>
                            <ListGroupItem className='ps-0 border-0 d-flex 
                            align-item-center gap-2'>
                                <span><i class="ri-map-pin-line"></i></span>
                                <p>581010 SuperMarket,Gulbarga</p>
                            </ListGroupItem>

                            <ListGroupItem className='ps-0 border-0 d-flex 
                            align-item-center gap-2'>
                            <span><i class="ri-phone-fill"></i></span>
                                <p>+91123456789</p>
                            </ListGroupItem>
                            
                            <ListGroupItem className='ps-0 border-0 d-flex 
                            align-item-center gap-2'>
                                <span><i class="ri-mail-line"></i></span>
                                <p>gpt434@gmail.com</p>
                            </ListGroupItem>

                            
                           
                            </ListGroup>
                    </div>
                </Col>
                
<Col lg='12'>
    <p className="footer__copyright">Furniture website developed
    by Deepak's Team. 
     </p>
</Col>
                
            </Row>
        </Container>
    </footer>
    ); 
};

export default Footer ;