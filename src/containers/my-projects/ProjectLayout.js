import React from "react";
import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiShareVariant } from "@mdi/js";
import { mdiAccountMultiple } from "@mdi/js";
import { mdiPlus } from "@mdi/js";
import Overview from "./projects-pages/Overview";
import Indicators from "./projects-pages/Indicators";
import Team from "./projects-pages/Team";

const ProjectLayout = () => {
  return (
    <div>
      <Container>
        <Row className="bg-light">
          <Col className="col-lg-2 col-12 d-flex justify-content-center">
            <Icon path={mdiShareVariant} size={1} className="p-1" />
          </Col>
          <Col className="col-lg-7 col-12 d-flex align-items-center justify-content-lg-start justify-content-center">
            <p>Project Name</p>
          </Col>
          <Col className="col-lg-3 col-12 d-flex justify-content-end flex-column ">
            <Row className="">
              <Col className=" col-12 d-flex justify-content-end">
                <Icon path={mdiShareVariant} size={1} className="p-1" />
              </Col>
            </Row>
            <Row>
              <Col className=" col-12 d-flex align-items-end justify-content-end mt-3">
                <Icon
                  path={mdiAccountMultiple}
                  className="mr-2 mb-3"
                  size={1}
                />
                <Icon
                  path={mdiAccountMultiple}
                  className="mr-2 mb-3"
                  size={1}
                />
                <Icon
                  path={mdiAccountMultiple}
                  className="mr-2 mb-3"
                  size={1}
                />
                <Icon
                  path={mdiAccountMultiple}
                  className="mr-2 mb-3"
                  size={1}
                />
                <Icon
                  path={mdiAccountMultiple}
                  className="mr-2 mb-3"
                  size={1}
                />

                <Icon path={mdiPlus} className="mr-2 mb-3" size={1} />
              </Col>
            </Row>
          </Col>
        </Row>

        <Tab.Container id="left-tabs" defaultActiveKey="Overview">
          <Row className="mt-4">
            <Col lg={3} sm={12}>
              <Nav variant="pills" className="sticky-top flex-column pt-4">
                <Nav.Item>
                  <Nav.Link
                    eventKey="Overview"
                    className="d-flex justify-content-center"
                  >
                    Overview
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Insights"
                    className="d-flex justify-content-center disabled"
                  >
                    Insights
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Indicators"
                    className="d-flex justify-content-center"
                  >
                    Indicators
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Dashboards"
                    className="d-flex justify-content-center disabled"
                  >
                    Dashboards
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Datasets"
                    className="d-flex justify-content-center disabled"
                  >
                    Datasets
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Team"
                    className="d-flex justify-content-center"
                  >
                    Team
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="Overview">
                  <Overview />
                </Tab.Pane>
                <Tab.Pane eventKey="Indicators">
                  <Indicators />
                </Tab.Pane>
                <Tab.Pane eventKey="Team">
                  <Team />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default ProjectLayout;
