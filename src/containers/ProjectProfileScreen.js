import React from 'react'
import DashboardNav from '../components/DashboardNav'
import DashboardSideNav from '../components/DashboardSideNav'
import {Container,Col,Row} from 'react-bootstrap'
import ProjectLayout from '../components/ProjectLayout'

const ProjectProfileScreen = () => {
  return (
    <div>
      <DashboardNav/>
        <Container>
          <Row>
            <Col className="col-3">
              <DashboardSideNav />
              </Col>
            <Col className="col-9">
            <ProjectLayout />
            </Col>
          </Row>
        </Container>


    </div>
  )
}

export default ProjectProfileScreen;

