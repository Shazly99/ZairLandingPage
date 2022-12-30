import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../assets/Img.js'
import Component from '../../constants/Component.js'
import './Contact.scss'
function Contact() {
    return (
        <Container fluid>
            <Row>
                <Col xl={6} lg={6} md={6} sm={12} className='   app__Landingpage '>
                    <div className="app__Landingpage-bg ">
                        <img src={img.bgContact} width="75%"   />
                        <div style={{ zIndex: 9999 }} className='Logo'>LOGO</div>
                    </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} className='app__Landingpage__contact '>
                    <h2 className='text-center'>Contact us</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className=' d-flex align-item-center justify-content-center  '>
                        <Component.Form />
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Contact
