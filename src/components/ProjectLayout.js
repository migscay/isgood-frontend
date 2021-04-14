import React from 'react'
import {Container,Col,Row,Tab, Tabs,Nav} from 'react-bootstrap'
import * as Icons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as GoIcon from "react-icons/go";
import './ProjectLayout.css'
import Overview from '../containers/Pages/Overview'
import Indicators from '../containers/Pages/Indicators'



const ProjectLayout = () => {
    return (
        <div>
        <Container>
            <Row className="bg-light">
                <Col className="col-lg-2 col-12 d-flex justify-content-center">
                   <Icons.BsPeopleCircle size="130" className="p-1"/>  
                </Col>
                <Col className="col-lg-7 col-12 d-flex align-items-center justify-content-lg-start justify-content-center">
                    <p>Project Name</p>
                </Col>
                <Col className="col-lg-3 col-12 d-flex justify-content-end flex-column ">
                    <Row className="">
                        <Col className=" col-12 d-flex justify-content-end">
                        <BiIcons.BiShareAlt size="20"/>

                        </Col>
                    </Row>
                    <Row>
                        <Col className=" col-12 d-flex align-items-end justify-content-end mt-3">
                        <Icons.BsPeopleCircle className="mr-2 mb-3"/>
                        <Icons.BsPeopleCircle className="mr-2 mb-3"/>
                        <Icons.BsPeopleCircle className="mr-2 mb-3"/>
                        <Icons.BsPeopleCircle className="mr-2 mb-3"/>
                        <Icons.BsPeopleCircle className="mr-2 mb-3"/>
                        <GoIcon.GoPlus className="mr-2 mb-3"/>
                        </Col>
                     
                    </Row>
                </Col>
            </Row>
               
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className="mt-4">
                            <Col lg={3} sm={12} className="bd-toc">
                            <Nav variant="pills" className="flex-column ">
                                <Nav.Item>
                                <Nav.Link eventKey="first" className="d-flex justify-content-center">Overview</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second" className="d-flex justify-content-center disabled">Insights</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third" className="d-flex justify-content-center">Indicators</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fourth" className="d-flex justify-content-center disabled">Dashboards</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fifth" className="d-flex justify-content-center disabled">Dashsets</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="sixth" className="d-flex justify-content-center">Team</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                <Overview />
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                        </Tab.Container>
                        </Container>
                    </div>
                )
            }

export default ProjectLayout
                      

                        

