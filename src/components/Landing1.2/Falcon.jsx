import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Img from '../../assets/Img';
import Component from '../../constants/Component';
import './falcon.scss'

function Falcon() {
    return (
        <>
            <div className="app__falcon"> 
                <Container fluid>
                    <img src={Img.Logo} alt="Falcon Logo" />
                    <Row>
                        <Col xl={6} lg={6} md={12} sm={12}>
                            <h2>You Can Keep track all   your employees by <span>Falcon.</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <div className="app__falcon-btnGroup">
                                <Component.Button bg='bgDark' color='colorLight' fontSize='fs-18' text='Get Start with us' />
                                <Component.Button bg='bgLight' color='colorDark' borderColor='borderDark' fontSize='fs-18' text='Download App' />
                            </div>
                        </Col>
                     <Col xl={6} lg={6} md={12} sm={12}  >
                            <div className="app__falcon-img2 ">
                                <img src={Img.Group2} width='644' height='630' />
                            </div>
                        </Col> 
                    </Row>
                        <Row className="   app__falcon-imgs d-flex justify-content-between align-items-center ">
                            <Col>
                                <img src={Img.Dashboard} />
                            </Col>
                            <Col>
                                <img src={Img.Location1} />
                            </Col>
                            <Col>
                                <img src={Img.Location2} />
                            </Col>
                        </Row>
                </Container>
            </div>
        </>
    )
}

export default Falcon