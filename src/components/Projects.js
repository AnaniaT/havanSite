import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import hobbyImg from "../assets/img/team/Hobby.png";
import periImg from "../assets/img/team/peri.png";
import liduImg from "../assets/img/team/lidu.png";
import demiseImg from "../assets/img/team/demise.png";
import saliImg from "../assets/img/team/sali.png";
// import zebibImg from "../assets/img/team/zebib.png";
import projImg2 from "../assets/img/team/project-img2.png";

import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  const team = [
    {
      title: "Hobby",
      description: "Project Manager",
      imgUrl: hobbyImg,
    },
    {
      title: "Peri",
      description: "Student Service and communication Head",
      imgUrl: periImg,
    },
    {
      title: "Lidiya",
      description: "Team Manager",
      imgUrl: liduImg,
    },
    {
      title: "Demissie",
      description: "Head of Ethics and Conduct",
      imgUrl: demiseImg,
    },
    {
      title: "Sali",
      description: "Academic Standard and Quality Enhance",
      imgUrl: saliImg,
    },
    {
      title: "Zebiba",
      description: "Social Media Manager",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Meet Our Team</h2>
            <Row>
              {
                team.map((member, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...member}
                      />
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

/*
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Admin</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Marketing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Staff</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      team.slice(0,3).map((member, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...member}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      team.slice(3, 6).map((member, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...member}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {
                      team.slice(6, 9).map((member, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...member}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
*/