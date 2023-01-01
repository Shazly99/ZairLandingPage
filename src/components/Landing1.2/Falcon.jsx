import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Img from '../../assets/Img';
import Component from '../../constants/Component';
import './falcon.scss'

function Falcon() {
    return (
        <>
            <div className="app__falcon">
                {/* <div className="bgright "> <img src={Img.Ellipse2} alt="" /> </div>
                <div className="bgleft">
                    <img src={Img.Ellipse1} alt="" />
                </div> */}
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
                        <Col xl={6} lg={6} md={6} sm={12} >
                            <div className="app__falcon-img">
                                <img src={Img.Group2}  width='644' height='630'  />
                            </div>
                        </Col>
                    </Row>
                    <div className="app__falcon-imgs d-flex justify-content-between align-items-center">
                        <img src={Img.Dashboard} alt="" srcset="" />
                        <img src={Img.Location1} alt="" srcset="" />
                        <img src={Img.Location2} alt="" srcset="" />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Falcon