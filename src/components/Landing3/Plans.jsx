import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Component from '../../constants/Component'
import './Plans.scss'
function Plans() {
    return (
        <>
            <div className="app__landingPlans">
                <div className="app__landingPlans-logo d-flex align-item-center justify-content-center ">
                    Logo
                </div>

                <Container>
                    <div className="app__landingPlans-content  ">
                        <h2>Plans &Pricing</h2>
                        <p>Save over 30% when you select annual plans</p>
                        <div className="app__landingPlans-content-choose ">
                            <div>
                                Monthly
                            </div>
                            <div>
                                Annual
                            </div>
                        </div>

                        <div className="app__landingPlans-content-price ">
                            <Row>
                                <Col xl={4} lg={4} md={6} sm={12} >
                                    <Component.PlanCard />
                                </Col>
                                <Col xl={4} lg={4} md={6} sm={12}>
                                    <Component.PlanCard active='active'/>
                                 </Col>
                                <Col xl={4} lg={4} md={6} sm={12}>
                                    <Component.PlanCard />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Plans
