import { Container, Row, Col} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import hobbyImg from "../assets/img/team/Hobby.png";
import periImg from "../assets/img/team/peri.png";
import liduImg from "../assets/img/team/lidu.png";
import demiseImg from "../assets/img/team/demise.png";
import saliImg from "../assets/img/team/sali.png";
import zebibImg from "../assets/img/team/zebib.png";

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
      imgUrl: zebibImg,
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
